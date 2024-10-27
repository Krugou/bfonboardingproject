'use client';

import AccountInfo from '@/components/AccountInfo';
import {useUserContext} from '@/context/UserContext';
import React from 'react';
import {Bounce, ToastContainer} from 'react-toastify';

const AccountPage: React.FC = () => {
  const {isDarkmode} = useUserContext();
  return (
    <>

      <AccountInfo />
    </>
  );
};

export default AccountPage;
