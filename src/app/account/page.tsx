'use client';
import AccountInfo from '@/components/AccountInfo';
import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
const AccountPage: React.FC = () => {
  return (
    <>
      <ToastContainer
        position='top-right'
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
      <AccountInfo />
    </>
  );
};

export default AccountPage;
