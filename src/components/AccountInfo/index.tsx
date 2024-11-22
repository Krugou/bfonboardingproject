import {useUserContext} from '@/context/UserContext';
import useFetchUserInfo from '@/hooks/useFetchUserInfo';
import {useRouter} from 'next/navigation';
import React from 'react';
import {signOut} from 'firebase/auth';
import {auth} from '@/utils/firebase';
import {toast} from 'react-toastify';

/**
 * AccountInfo component that displays user account information.
 *
 * @returns {JSX.Element} The rendered AccountInfo component.
 */
const AccountInfo: React.FC = () => {
  const {userInfo, setUserInfo, language} = useUserContext();
  const router = useRouter();
  useFetchUserInfo();

  /**
   * Handles user logout.
   */
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserInfo(null);
      toast.success(
        language === 'fi'
          ? 'Kirjauduttu ulos onnistuneesti'
          : 'Logged out successfully',
      );
      router.push('/');
    } catch (error) {
      toast.error(
        language === 'fi'
          ? 'Uloskirjautuminen epäonnistui'
          : 'Failed to logout',
      );
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
    <div className='flex flex-col items-center justify-center min-h-screen '>
      <div className='bg-bf-white border-2 border-bf-brand-primary  rounded-lg p-8 max-w-md w-full'>
        <h1 className='text-2xl text-bf-brand-primary font-bold mb-4'>
          {language === 'fi' ? 'Tilin tiedot' : 'Account Information'}
        </h1>
        <div className='mb-4'>
          <label className='block text-bf-brand-primary text-sm font-bold mb-2'>
            {language === 'fi' ? 'Sähköposti:' : 'Email:'}
          </label>
          <p className='text-bf-brand-primary'>{userInfo.email}</p>
        </div>
        <div className='flex justify-between w-1/2'>
          <div className='mb-4'>
            <label className='block text-bf-brand-primary text-sm font-bold mb-2'>
              {language === 'fi' ? 'Luotu:' : 'Created At:'}
            </label>
            <p className='text-bf-brand-primary'>
              {userInfo.createdAt.toLocaleDateString()}
            </p>
          </div>
          <div className='mb-4'>
            <label className='block text-bf-brand-primary text-sm font-bold mb-2'>
              {language === 'fi' ? 'Viimeisin kirjautuminen:' : 'Last Login:'}
            </label>
            <p className='text-bf-brand-primary'>
              {userInfo.lastLogin
                ? userInfo.lastLogin.toLocaleDateString()
                : language === 'fi'
                ? 'Ei tietoja'
                : 'N/A'}
            </p>
          </div>
        </div>
        <div className='mb-4'>
          <label className='block text-bf-brand-primary text-sm font-bold mb-2'>
            {language === 'fi'
              ? 'Vastattuja kysymyksiä:'
              : 'Answered Questions:'}
          </label>
          <p className='text-bf-brand-primary'>
            {userInfo.questionAnswers.length || 0}
          </p>
        </div>
        <div className='flex justify-end'>
          <button
            onClick={handleLogout}
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            {language === 'fi' ? 'Kirjaudu ulos' : 'Logout'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
