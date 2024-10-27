import {useUserContext} from '@/context/UserContext';
import useFetchUserInfo from '@/hooks/useFetchUserInfo';
import {useRouter} from 'next/navigation';
import React from 'react';
const AccountInfo: React.FC = () => {
  const {userInfo, setUserInfo} = useUserContext();
  console.log('🚀 ~ userInfo:', userInfo);
  const router = useRouter();
  useFetchUserInfo();
  const handleLogout = () => {
    setUserInfo(null);
    router.push('/');
  };

  if (!userInfo) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white shadow-md rounded-lg p-8 max-w-md w-full'>
          <h1 className='text-2xl font-bold mb-4'>Account Information</h1>
          <p className='text-gray-900'>Loading...</p>
        </div>
      </div>
    );
  }
  console.log('🚀 ~ userInfo:', userInfo);
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

export default AccountInfo;
