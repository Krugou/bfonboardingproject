import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import AuthForm from './LoginRegisterModal/AuthForm';
import { useUserContext } from '@/context/UserContext';

interface LoginRegisterModalProps {
  isLoginVisible: boolean;
  setIsLoginVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * LoginRegisterModal component for handling user authentication.
 *
 * @param {LoginRegisterModalProps} props - The props for the component.
 * @returns {JSX.Element | null} The rendered LoginRegisterModal component.
 */
const LoginRegisterModal: React.FC<LoginRegisterModalProps> = ({ isLoginVisible, setIsLoginVisible }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleEmailPasswordAuth, handleGoogleLogin, error } = useAuth();
  const { setUserInfo } = useUserContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleEmailPasswordAuth(email, password, isLogin);
  };

  if (!isLoginVisible) {
    return null;
  }

  return (
    <div>
      <AuthForm
        isLogin={isLogin}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        toggleAuthMode={() => setIsLogin(!isLogin)}
        onClose={() => setIsLoginVisible(false)}
        handleGoogleLogin={handleGoogleLogin}
        error={error}
      />
    </div>
  );
};

export default LoginRegisterModal;
