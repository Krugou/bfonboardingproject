import LoginRegisterModal from '@/components/Header/LoginRegisterModal';
import {useUserContext} from '@/context/UserContext';
import questions from '@/data/mockdata';
import {db} from '@/utils/firebase';
import {doc, getDoc} from 'firebase/firestore';
import {useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import {FlagIcon} from 'react-flag-kit';
import {toast} from 'react-toastify';

const Header = () => {
  const {setLanguage, language, currentQuestion, userInfo} = useUserContext();
  const router = useRouter();
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminClick = () => {
    router.push('/admin');
  };

  useEffect(() => {
    const checkAdmin = async () => {
      if (userInfo?.email) {
        const adminRef = doc(db, 'admins', userInfo.email);
        const adminDoc = await getDoc(adminRef);
        if (adminDoc.exists()) {
          setTimeout(() => {
            toast.success('Admin rights confirmed, soldier!');
            toast.info('You now have clearance to access the admin panel.');
          }, 1000);
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      }
    };

    checkAdmin();
  }, [userInfo]);

  return (
    <header className='bg-bf-brand-primary flex justify-between h-20 w-full'>
      <div>
        <p className='w-10 mx-2 text-white font-bold'>
          {language === 'fi' ? 'Minun Business Finland' : 'My Business Finland'}
        </p>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <div className='flex w-full justify-center items-center'>
          <p className='mx-2 text-white font-bold'>
            {language === 'fi'
              ? 'Paikallinen kehitysympäristö'
              : 'Local Development Environment'}
          </p>
          <p
            className='mx-2 text-white font-bold'
            title={questions[currentQuestion - 1].question[language]}>
            {questions[currentQuestion - 1].id}
          </p>
        </div>
      )}
      <div className='flex justify-center gap-4 items-center mx-4'>
        {isAdmin && (
          <button
            onClick={handleAdminClick}
            className='bg-white text-bf-brand-primary font-bold py-2 px-4 rounded'
            aria-label={language === 'fi' ? 'Admin paneeli' : 'Admin panel'}
            role='button'>
            {language === 'fi' ? 'Admin paneeli' : 'Admin panel'}
          </button>
        )}

        {userInfo ? (
          <button
            className='bg-white text-bf-brand-primary font-bold py-2 px-4 rounded-xl'
            onClick={() => {
              router.push('/account');
            }}
            aria-label={language === 'fi' ? 'Oma tili' : 'My account'}
            role='button'>
            {language === 'fi' ? 'Oma tili' : 'My account'}
          </button>
        ) : (
          <>
            <button
              className='bg-white text-bf-brand-primary font-bold py-2 px-4 rounded-xl'
              onClick={() => {
                setIsLoginVisible(true);
              }}
              aria-label={language === 'fi' ? 'Kirjaudu' : 'Login'}
              role='button'>
              {language === 'fi' ? 'Kirjaudu' : 'Login'}
            </button>
            <LoginRegisterModal isLoginVisible={isLoginVisible} />
          </>
        )}

        <FlagIcon
          code='FI'
          size={32}
          onClick={() => setLanguage('fi')}
          className='cursor-pointer'
          aria-label='Select Finnish language'
          role='button'
        />
        <FlagIcon
          code='GB'
          size={32}
          onClick={() => setLanguage('en')}
          className='cursor-pointer'
          aria-label='Select English language'
          role='button'
        />
      </div>
    </header>
  );
};

export default Header;
