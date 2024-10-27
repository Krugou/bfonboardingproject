'use client';

import AccountInfo from '@/components/AccountInfo';
import {useUserContext} from '@/context/UserContext';
import React from 'react';
import {Bounce, ToastContainer} from 'react-toastify';

const AccountPage: React.FC = () => {
  const {isDarkmode} = useUserContext();
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
        theme={isDarkmode ? 'dark' : 'light'}
        transition={Bounce}
        role="alert"
        aria-live="assertive"
      />
      <AccountInfo />
    </>
  );
};

export default AccountPage;
