import {useState, useCallback} from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
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

const createAccountData = (email: string): Omit<AccountData, 'browserInfo'> => ({
  email: email ?? 'default@example.com',
  questionAnswers: {},
  createdAt: new Date(),
  lastLogin: new Date(),
});

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
          const accountData = createAccountData(user.email ?? '');
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
  ): Promise<boolean> => {
    setError(null);
    const auth = getAuth();

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      const userCredential = isLogin || signInMethods.length > 0
        ? await signInWithEmailAndPassword(auth, email, password)
        : await createUserWithEmailAndPassword(auth, email, password);

      await handleAuthResult(userCredential);
      toast.success(isLogin ? 'Logged in successfully' : 'Registered successfully');
      return true;
    } catch (error) {
      const authError = error as Error;
      setError(authError.message);
      toast.error(authError.message);
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
      const authError = error as Error;
      setError(authError.message);
      toast.error(authError.message);
      return false;
    }
  };

  return {
    handleEmailPasswordAuth,
    handleGoogleLogin,
    error,
  };
};
