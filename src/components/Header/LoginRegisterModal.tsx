import {useUserContext} from '@/context/UserContext';
import {auth, db} from '@/utils/firebase';
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {doc, getDoc, setDoc} from 'firebase/firestore';
import React, {useState} from 'react';
import {toast} from 'react-toastify';
import AuthForm from './LoginRegisterModal/AuthForm';
interface LoginRegisterModalProps {
  isLoginVisible: boolean;
}

const LoginRegisterModal: React.FC<LoginRegisterModalProps> = ({
  isLoginVisible,
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const {setUserInfo} = useUserContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    console.log('email', email);

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      let userCredential;
      if (isLogin || signInMethods.length > 0) {
        // Handle login
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
        toast.success('Logged in successfully');
      } else {
        // Handle register
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        toast.success('Registered successfully');
        setIsLogin(true);
      }

      const user = userCredential.user;
      console.log('🚀 ~ handleSubmit ~ user:', user);

      // Check if account exists in Firestore
      const accountDoc = await getDoc(doc(db, 'accounts', user.uid));
      if (accountDoc.exists()) {
        const accountData = accountDoc.data();
        console.log('🚀 ~ handleSubmit ~ accountData:', accountData);
        setUserInfo({
          email: accountData.email ?? 'default@example.com',
          questionAnswers: accountData.questionAnswers,
          lastLogin: accountData.lastLogin?.toDate(),
          createdAt: accountData.createdAt.toDate(),
        });
      } else {
        // Create account in Firestore if it doesn't exist
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

      // Update last login
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

  if (!isLoginVisible) {
    return null;
  }

  return (
    <AuthForm
      isLogin={isLogin}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      toggleAuthMode={() => setIsLogin(!isLogin)}
    />
  );
};

export default LoginRegisterModal;
