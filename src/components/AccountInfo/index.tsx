'use client';

import React from 'react';
import {useUserContext} from '@/context/UserContext';
import useFetchUserInfo from '@/hooks/useFetchUserInfo';
import {UserDetails} from './AccountDetails';
import LogoutButton from './LogoutButton';
import {usePathname} from 'next/navigation';

const AccountInfo: React.FC = () => {
  const {userInfo, setUserInfo, language} = useUserContext();
  const pathname = usePathname();
  useFetchUserInfo();

  const buttonText =
    pathname === '/account'
      ? language === 'fi'
        ? 'Takaisin kysymyksiin'
        : 'Back to questions'
      : language === 'fi'
      ? 'Oma tili'
      : 'My account';

  const handleAccountClick = () => {
    if (pathname === '/account') {
      router.push('/');
    } else {
      router.push('/account');
    }
  };

  if (!userInfo) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white shadow-md rounded-lg p-8 max-w-md w-full'>
          <h1 className='text-2xl text-bf-brand-primary font-bold mb-4'>
            {language === 'fi' ? 'Tilin tiedot' : 'Account Information'}
          </h1>
          <p className='text-bf-brand-primary'>
            {language === 'fi' ? 'Ladataan...' : 'Loading...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='bg-bf-white border-2 border-bf-brand-primary rounded-lg p-8 max-w-md w-full'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-2xl text-bf-brand-primary font-bold'>
            {language === 'fi' ? 'Tilin tiedot' : 'Account Information'}
          </h1>
        </div>
        <UserDetails userInfo={userInfo} language={language} />
        <div className='flex justify-end'>
          <LogoutButton
            language={language}
            onLogout={() => setUserInfo(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
