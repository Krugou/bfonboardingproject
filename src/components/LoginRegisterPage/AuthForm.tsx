'use client';

import React, {useState} from 'react';
import {useUserContext} from '@/context/UserContext';
import {useAuth} from '@/hooks/useAuth';
import {useRouter} from 'next/navigation';
import LoginForm from './AuthForm/LoginFormLoginForm';
import RegisterForm from './AuthForm/RegisterFormisterForm';

/**
 * AuthForm component for handling user authentication.
 *
 * @returns {JSX.Element} The rendered AuthForm component.
 */
const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {handleEmailPasswordAuth, handleGoogleLogin, error} = useAuth();
  const router = useRouter();
  const {language} = useUserContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success: boolean = await handleEmailPasswordAuth(
      email,
      password,
      isLogin,
    );
    if (success) {
      router.push('/');
    }
  };

  const toggleAuthMode = () => setIsLogin(!isLogin);

  const commonProps = {
    email,
    setEmail,
    password,
    setPassword,
    onSubmit: handleSubmit,
    onClose: () => router.push('/'),
    error,
    handleGoogleLogin,
    language,
    toggleAuthMode,
  };

  return isLogin ? (
    <LoginForm {...commonProps} />
  ) : (
    <RegisterForm {...commonProps} />
  );
};

export default AuthForm;
