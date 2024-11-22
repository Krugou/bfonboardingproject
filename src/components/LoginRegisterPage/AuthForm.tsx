'use client';

import React, {useState, useCallback} from 'react';
import {useUserContext} from '@/context/UserContext';
import {useAuth} from '@/hooks/useAuth';
import {useRouter} from 'next/navigation';
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
  const [isLoading, setIsLoading] = useState(false);
  const {handleEmailPasswordAuth, handleGoogleLogin, error} = useAuth();
  const router = useRouter();
  const {language} = useUserContext();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      if (isLoading) return;

      try {
        setIsLoading(true);
        const success = await handleEmailPasswordAuth(
          email,
          password,
          isLogin,
          firstName,
          lastName,
        );

        if (success) {
          // Ensure we wait for the next tick before navigation
          await new Promise((resolve) => setTimeout(resolve, 0));
          await router.replace('/');
        }
      } catch (error) {
        console.error('Authentication error:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [
      email,
      password,
      isLogin,
      firstName,
      lastName,
      handleEmailPasswordAuth,
      router,
      isLoading,
    ],
  );

  const handleGoogleAuthAndRedirect = useCallback(async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const success = await handleGoogleLogin();
      if (success) {
        await new Promise((resolve) => setTimeout(resolve, 0));
        await router.replace('/');
      }
    } catch (error) {
      console.error('Google authentication error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [handleGoogleLogin, router, isLoading]);

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
    handleGoogleLogin: handleGoogleAuthAndRedirect,
    language,
    toggleAuthMode,
    isLoading,
  };

  return isLogin ? (
    <LoginForm {...commonProps} />
  ) : (
    <RegisterForm {...commonProps} />
  );
};

export default AuthForm;
