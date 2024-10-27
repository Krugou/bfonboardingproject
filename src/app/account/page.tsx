import {useUserContext} from '@/context/UserContext';
import {useRouter} from 'next/navigation';
import React from 'react';

const AccountPage: React.FC = () => {
  const {userInfo, setUserInfo} = useUserContext();
  const router = useRouter();

  const handleLogout = () => {
    setUserInfo({
      email: '',
      questionAnswers: {},
      createdAt: new Date(),
    });
    router.push('/');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-md rounded-lg p-8 max-w-md w-full'>
        <h1 className='text-2xl font-bold mb-4'>Account Information</h1>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Email:
          </label>
          <p className='text-gray-900'>{userInfo.email}</p>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Created At:
          </label>
          <p className='text-gray-900'>
            {userInfo.createdAt.toLocaleDateString()}
          </p>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Last Login:
          </label>
          <p className='text-gray-900'>
            {userInfo.lastLogin
              ? userInfo.lastLogin.toLocaleDateString()
              : 'N/A'}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
