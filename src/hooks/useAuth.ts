import {useState, useCallback} from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  AuthError as FirebaseAuthError,
} from 'firebase/auth';
import {doc, getDoc, setDoc} from 'firebase/firestore';
import {toast} from 'react-toastify';
import {db} from '@/utils/firebase';
import {useUserContext} from '@/context/UserContext';
import {AuthError, BrowserInfo} from '@/types/auth';
import {UserProfile} from '@/types/user';

const getBrowserInfo = (): BrowserInfo => ({
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
});

const createUserProfile = (
  email: string,
  firstName: string,
  lastName: string,
  businessId: string,
  preferredLanguage: string,
): Omit<UserProfile, 'browserInfo'> => ({
  email: email ?? 'default@example.com',
  firstName,
  lastName,
  businessId,
  preferredLanguage,
  questionAnswers: {},
  createdAt: new Date(),
  lastLogin: new Date(),
});

const getAuthErrorMessage = (
  error: FirebaseAuthError,
  language: string = 'en',
): string => {
  const errorMessages: Record<string, {en: string; fi: string}> = {
    'auth/invalid-credential': {
      en: 'Invalid email or password.',
      fi: 'Virheellinen sähköposti tai salasana.',
    },
    'auth/email-already-in-use': {
      en: 'Email is already registered. Please login or use a different email.',
      fi: 'Sähköposti on jo rekisteröity. Kirjaudu sisään tai käytä toista sähköpostia.',
    },
    'auth/invalid-email': {
      en: 'Invalid email address.',
      fi: 'Virheellinen sähköpostiosoite.',
    },
    'auth/user-not-found': {
      en: 'No account found with this email.',
      fi: 'Tällä sähköpostilla ei löytynyt tiliä.',
    },
    'auth/wrong-password': {
      en: 'Incorrect password.',
      fi: 'Väärä salasana.',
    },
    'auth/weak-password': {
      en: 'Password should be at least 6 characters.',
      fi: 'Salasanan tulee olla vähintään 6 merkkiä.',
    },
    'auth/network-request-failed': {
      en: 'Network error. Please check your connection.',
      fi: 'Verkkovirhe. Tarkista internet-yhteytesi.',
    },
    'auth/too-many-requests': {
      en: 'Too many attempts. Please try again later.',
      fi: 'Liian monta yritystä. Yritä myöhemmin uudelleen.',
    },
    'auth/missing-identifier': {
      en: 'Missing identifier. Please provide the required information.',
      fi: 'Puuttuva tunniste. Ole hyvä ja anna vaaditut tiedot.',
    },
  };

  const code = error.code as keyof typeof errorMessages;
  return errorMessages[code]?.[language as 'en' | 'fi'] || error.message;
};

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const {setUserInfo} = useUserContext();

  const handleAuthResult = useCallback(
    async (userCredential: UserCredential) => {
      const user = userCredential.user;
      const accountRef = doc(db, 'accounts', user.uid);
      const browserInfo = getBrowserInfo();

      try {
        const accountDoc = await getDoc(accountRef);
        if (accountDoc.exists()) {
          const UserProfile = accountDoc.data() as UserProfile;
          console.log('🚀 ~ UserProfile:', UserProfile);
          setUserInfo({...UserProfile, browserInfo});
        } else {
          const UserProfile = createUserProfile(
            user.email ?? '',
            '',
            '',
            '',
            '',
          );
          console.log('🚀 ~ UserProfile:', UserProfile);
          await setDoc(accountRef, {...UserProfile, browserInfo});
          setUserInfo({...UserProfile, browserInfo});
          toast.success('Account created successfully');
        }

        await setDoc(
          accountRef,
          {lastLogin: new Date(), browserInfo},
          {merge: true},
        );
      } catch (error) {
        throw new AuthError('Failed to update account data', 'UPDATE_FAILED');
      }
    },
    [setUserInfo],
  );

  const handleEmailPasswordAuth = async (
    email: string,
    password: string,
    isLogin: boolean,
    firstName?: string,
    lastName?: string,
    businessId?: string,
    preferredLanguage?: string,
  ): Promise<boolean> => {
    // console.log('🚀 ~ useAuth ~ lastName:', lastName);
    // console.log('🚀 ~ useAuth ~ firstName:', firstName);
    // console.log('🚀 ~ useAuth ~ isLogin:', isLogin);
    // console.log('🚀 ~ useAuth ~ password:', password);
    // console.log('🚀 ~ useAuth ~ email:', email);
    // console.log('🚀 ~ useAuth ~ businessId:', businessId);
    // console.log('🚀 ~ useAuth ~ preferredLanguage:', preferredLanguage);
    setError(null);
    const auth = getAuth();

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      const userCredential =
        isLogin || signInMethods.length > 0
          ? await signInWithEmailAndPassword(auth, email, password)
          : await createUserWithEmailAndPassword(auth, email, password);

      // Create account data with provided first and last name
      const browserInfo = getBrowserInfo();
      const UserProfile = {
        ...createUserProfile(
          userCredential.user.email ?? '',
          firstName || '',
          lastName || '',
          businessId || '',
          preferredLanguage || '',
        ),
        browserInfo,
      };

      // Save the account data to Firestore for new registrations
      if (!isLogin) {
        const accountRef = doc(db, 'accounts', userCredential.user.uid);
        await setDoc(accountRef, UserProfile);
        setUserInfo(UserProfile);
      } else {
        await handleAuthResult(userCredential);
      }

      toast.success(
        isLogin ? 'Logged in successfully' : 'Registered successfully',
      );
      return true;
    } catch (error) {
      const authError = error as FirebaseAuthError;
      const errorMessage = getAuthErrorMessage(authError);
      setError(errorMessage);
      toast.error(errorMessage, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }
  };

  const handleGoogleLogin = async (): Promise<boolean> => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);
      await handleAuthResult(userCredential);
      return true;
    } catch (error) {
      const authError = error as FirebaseAuthError;
      const errorMessage = getAuthErrorMessage(authError);
      setError(errorMessage);
      toast.error(errorMessage, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }
  };

  return {
    handleEmailPasswordAuth,
    handleGoogleLogin,
    error,
  };
};
