import {useState} from 'react';
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

interface UseAuthReturn {
  handleEmailPasswordAuth: (
    email: string,
    password: string,
    isLogin: boolean,
  ) => Promise<void>;
  handleGoogleLogin: () => Promise<void>;
  error: string | null;
}

export const useAuth = (): UseAuthReturn => {
  const [error, setError] = useState<string | null>(null);
  const {setUserInfo} = useUserContext();

  const handleEmailPasswordAuth = async (
    email: string,
    password: string,
    isLogin: boolean,
  ) => {
    setError(null);
    const auth = getAuth();

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      let userCredential: UserCredential;
      if (isLogin || signInMethods.length > 0) {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
        toast.success('Logged in successfully');
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        toast.success('Registered successfully');
      }

      const user = userCredential.user;
      const accountDoc = await getDoc(doc(db, 'accounts', user.uid));
      if (accountDoc.exists()) {
        const accountData = accountDoc.data();
        setUserInfo({
          email: accountData.email ?? 'default@example.com',
          questionAnswers: accountData.questionAnswers,
          lastLogin: accountData.lastLogin?.toDate(),
          createdAt: accountData.createdAt.toDate(),
        });
      } else {
        const accountData = {
          email: user.email ?? 'default@example.com',
          questionAnswers: {},
          createdAt: new Date(),
          lastLogin: new Date(),
        };
        await setDoc(doc(db, 'accounts', user.uid), accountData);
        setUserInfo(accountData);
        toast.success('Account created successfully');
      }

      await setDoc(
        doc(db, 'accounts', user.uid),
        {lastLogin: new Date()},
        {merge: true},
      );
    } catch (error) {
      setError((error as Error).message);
      toast.error((error as Error).message);
    }
  };

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const userCredential: UserCredential = await signInWithPopup(
        auth,
        provider,
      );
      const user = userCredential.user;

      const accountDoc = await getDoc(doc(db, 'accounts', user.uid));
      if (accountDoc.exists()) {
        const accountData = accountDoc.data();
        setUserInfo({
          email: accountData.email ?? 'default@example.com',
          questionAnswers: accountData.questionAnswers,
          lastLogin: accountData.lastLogin?.toDate(),
          createdAt: accountData.createdAt.toDate(),
        });
      } else {
        const accountData = {
          email: user.email ?? 'default@example.com',
          questionAnswers: {},
          createdAt: new Date(),
          lastLogin: new Date(),
        };
        await setDoc(doc(db, 'accounts', user.uid), accountData);
        setUserInfo(accountData);
        toast.success('Account created successfully');
      }

      await setDoc(
        doc(db, 'accounts', user.uid),
        {lastLogin: new Date()},
        {merge: true},
      );
    } catch (error) {
      setError((error as Error).message);
      toast.error((error as Error).message);
    }
  };

  return {handleEmailPasswordAuth, handleGoogleLogin, error};
};
