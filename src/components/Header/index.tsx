import {useUserContext} from '@/context/UserContext';
import {logEvent} from '@/utils/analytics';
import {db} from '@/utils/firebase';
import {doc, getDoc} from 'firebase/firestore';
import {useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import {FlagIcon} from 'react-flag-kit';
import {usePathname} from 'next/navigation';

/**
 * Header component that displays the header of the application.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
const Header: React.FC = () => {
  const {setLanguage, language, userInfo, currentStep, questions} =
    useUserContext();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();
  const handleAdminClick = () => {
    try {
      if (pathname === '/admin') {
        router.push('/');
      } else {
        router.push('/admin');
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
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
  const buttonText =
    pathname === '/admin'
      ? language === 'fi'
        ? 'Takaisin kysymyksiin'
        : 'Back to questions'
      : language === 'fi'
      ? 'Admin paneeli'
      : 'Admin panel';

  return (
    <header className='bg-bf-brand-primary dark:bg-bf-brand-primary-dark flex justify-between h-20 w-full'>
      <div>
        <button
          className='w-10 h-10 mx-4 text-white font-bold '
          onClick={() => router.push('/')}
          aria-label={
            language === 'fi' ? 'Minun Business Finland' : 'My Business Finland'
          }>
          <div className='flex flex-col uppercase items-start'>
            <span className='font-bold'>
              {language === 'fi' ? 'Minun' : 'My'}
            </span>
            <span className='font-light'>
              {language === 'fi' ? 'Business' : 'Business'}
            </span>
            <span className='font-bold'>
              {language === 'fi' ? 'Finland' : 'Finland'}
            </span>
          </div>
        </button>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <div className='flex w-full justify-center items-center'>
          <p className='mx-2 text-white font-bold dark:text-gray-200'>
            {language === 'fi' ? 'Paikallinen' : 'Local'}
          </p>
          <p
            className='mx-2 text-white font-bold dark:text-gray-200'
            title={questions[currentStep]?.question[language]}>
            {questions[currentStep]?.id}
          </p>
        </div>
      )}
      <div className='flex justify-center gap-4 items-center mx-4'>
        {isAdmin && (
          <button
            onClick={handleAdminClick}
            className='bg-white text-bf-brand-primary font-bold py-2 px-4 rounded dark:bg-gray-700 dark:text-gray-200'
            aria-label={buttonText}
            role='button'>
            {buttonText}
          </button>
        )}

        {userInfo ? (
          <button
            className='bg-white text-bf-brand-primary font-bold py-2 px-4 rounded-xl dark:bg-gray-700 dark:text-gray-200'
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
              className='bg-white text-bf-brand-primary font-bold py-2 px-4 rounded-xl dark:bg-gray-700 dark:text-gray-200'
              onClick={() => {
                router.push('/login');
                logEvent('login_button_click');
              }}
              aria-label={language === 'fi' ? 'Kirjaudu' : 'Login'}
              role='button'>
              {language === 'fi' ? 'Kirjaudu' : 'Login'}
            </button>
            <button
              className='bg-white text-bf-brand-primary font-bold py-2 px-4 rounded-xl dark:bg-gray-700 dark:text-gray-200'
              onClick={() => {
                router.push('/register');
                logEvent('register_button_click');
              }}
              aria-label={language === 'fi' ? 'Rekisteröidy' : 'Register'}
              role='button'>
              {language === 'fi' ? 'Rekisteröidy' : 'Register'}
            </button>
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
