'use client';

import AccountInfo from '@/components/AccountInfo';
import {UserProvider} from '@/context/UserContext';
import React from 'react';
import {Bounce, ToastContainer} from 'react-toastify';

const AccountPage: React.FC = () => {
  let isDarkmode = false;
  return (
    <UserProvider>
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
      />
      <AccountInfo />
    </UserProvider>
  );
};

export default AccountPage;
