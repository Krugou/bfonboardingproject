'use client';

import React from 'react';
import AuthForm from '@/components/LoginRegisterPage/AuthForm';
import {ToastContainer, Bounce} from 'react-toastify';
import Header from '@/components/Header';

/**
 * LoginRegister page component for handling user authentication.
 *
 * @returns {JSX.Element} The rendered LoginRegister page component.
 */
const LoginRegisterPage: React.FC = () => {
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
      <AuthForm />
    </>
  );
};

export default LoginRegisterPage;
