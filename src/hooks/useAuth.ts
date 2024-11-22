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
import {AccountData, AuthError, BrowserInfo} from '@/types/auth';

const getBrowserInfo = (): BrowserInfo => ({
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
});

const createAccountData = (
  email: string,
  firstName: string,
  lastName: string,
): Omit<AccountData, 'browserInfo'> => ({
  email: email ?? 'default@example.com',
  firstName,
  lastName,
  questionAnswers: {},
  createdAt: new Date(),
  lastLogin: new Date(),
});

const getAuthErrorMessage = (
  error: FirebaseAuthError,
  language: string = 'en',
): string => {
  const errorMessages: Record<string, {en: string; fi: string}> = {
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
          const accountData = accountDoc.data() as AccountData;
          setUserInfo({...accountData, browserInfo});
        } else {
          const accountData = createAccountData(user.email ?? '', '', '');
          await setDoc(accountRef, {...accountData, browserInfo});
          setUserInfo({...accountData, browserInfo});
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
  ): Promise<boolean> => {
    setError(null);
    const auth = getAuth();

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      const userCredential =
        isLogin || signInMethods.length > 0
          ? await signInWithEmailAndPassword(auth, email, password)
          : await createUserWithEmailAndPassword(auth, email, password);

      const accountData = createAccountData(
        userCredential.user.email ?? '',
        firstName || '',
        lastName || '',
      );

      await handleAuthResult(userCredential);
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
