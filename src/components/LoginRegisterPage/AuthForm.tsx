'use client';

import React, { useState } from 'react';
import { useUserContext } from '@/context/UserContext';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import LoginForm from './AuthForm/LoginForm';
import RegisterForm from './AuthForm/RegisterForm';

/**
 * AuthForm component for handling user authentication.
 *
 * @returns {JSX.Element} The rendered AuthForm component.
 */
const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { handleEmailPasswordAuth, handleGoogleLogin, error } = useAuth();
  const router = useRouter();
  const { language } = useUserContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success: boolean = await handleEmailPasswordAuth(
      email,
      password,
      isLogin,
      firstName,
      lastName
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
    firstName,
    lastName,
    setFirstName,
    setLastName,
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
