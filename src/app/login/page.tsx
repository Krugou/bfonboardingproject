'use client';

import React from 'react';
import LoginForm from '@/components/Login/LoginForm';
import {ToastContainer, Bounce} from 'react-toastify';
import Header from '@/components/Header';

/**
 * Login page component for handling user authentication.
 *
 * @returns {JSX.Element} The rendered Login page component.
 */
const LoginPage: React.FC = () => {
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'light'}
        transition={Bounce}
      />
      <Header />
      <LoginForm />
    </>
  );
};

export default LoginPage;
