'use client';

import React from 'react';
import RegisterForm from '@/components/LoginRegisterPage/AuthForm/RegisterForm';
import { ToastContainer, Bounce } from 'react-toastify';
import Header from '@/components/Header';

/**
 * RegisterPage component for handling user registration.
 *
 * @returns {JSX.Element} The rendered RegisterPage component.
 */
const RegisterPage: React.FC = () => {
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
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
