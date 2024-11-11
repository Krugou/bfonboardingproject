import LoginRegisterModal from '@/components/Header/LoginRegisterModal';
import {useUserContext} from '@/context/UserContext';
import {logEvent} from '@/utils/analytics';
import {db} from '@/utils/firebase';
import {doc, getDoc} from 'firebase/firestore';
import {useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import {FlagIcon} from 'react-flag-kit';
import {toast} from 'react-toastify';

/**
 * Header component that displays the header of the application.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
const Header: React.FC = () => {
  const {setLanguage, language, currentQuestion, userInfo, questions} =
    useUserContext();
  const router = useRouter();
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminClick = () => {
    router.push('/admin');
  };

  const [adminCheckPerformed, setAdminCheckPerformed] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      if (userInfo?.email) {
        const adminRef = doc(db, 'admins', userInfo.email);
        const adminDoc = await getDoc(adminRef);
        if (adminDoc.exists()) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
        setAdminCheckPerformed(true);
      }
    };

    if (!adminCheckPerformed && userInfo?.email) {
      checkAdmin();
    }
  }, [userInfo, adminCheckPerformed]);

  return (
    <header className='bg-bf-brand-primary flex justify-between h-20 w-full'>
      <div>
        <button
          className='w-10 h-10 mx-2 text-white font-bold'
          onClick={() => router.push('/')}
          aria-label={
            language === 'fi' ? 'Minun Business Finland' : 'My Business Finland'
          }>
          {language === 'fi' ? 'Minun Business Finland' : 'My Business Finland'}
        </button>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <div className='flex w-full justify-center items-center'>
          <p className='mx-2 text-white font-bold'>
            {language === 'fi' ? 'Paikallinen' : 'Local'}
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
                logEvent('login_button_click');
              }}
              aria-label={language === 'fi' ? 'Kirjaudu' : 'Login'}
              role='button'>
              {language === 'fi' ? 'Kirjaudu' : 'Login'}
            </button>
            <LoginRegisterModal
              setIsLoginVisible={setIsLoginVisible}
              isLoginVisible={isLoginVisible}
            />
          </>
        )}

        <FlagIcon
          code='FI'
          size={32}
          onClick={() => {
            setLanguage('fi');
            logEvent('language_selection', {language: 'fi'});
          }}
          className='cursor-pointer'
          aria-label='Select Finnish language'
          role='button'
        />
        <FlagIcon
          code='GB'
          size={32}
          onClick={() => {
            setLanguage('en');
            logEvent('language_selection', {language: 'en'});
          }}
          className='cursor-pointer'
          aria-label='Select English language'
          role='button'
        />
      </div>
    </header>
  );
};

export default Header;
