import {useUserContext} from '@/context/UserContext';
import {logEvent} from '@/utils/analytics';
import {db} from '@/utils/firebase';
import {doc, getDoc} from 'firebase/firestore';
import {useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import {FlagIcon} from 'react-flag-kit';
import {usePathname} from 'next/navigation';

interface AdminCheckError extends Error {
  code: string;
}

/**
 * Header component that displays the header of the application.
 * Handles language switching, navigation, and admin access control.
 */
const Header: React.FC = () => {
  const {setLanguage, language, userInfo, currentStep, questions} =
    useUserContext();
  const router = useRouter();
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AdminCheckError | null>(null);

  const handleAdminClick = async () => {
    try {
      setIsLoading(true);
      if (pathname === '/admin') {
        await router.push('/');
      } else {
        await router.push('/admin');
      }
    } catch (error) {
      console.error('Navigation error:', error);
      setError(error as AdminCheckError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const checkAdmin = async () => {
      if (!userInfo?.email) return;

      try {
        setIsLoading(true);
        const adminRef = doc(db, 'admins', userInfo.email);
        const adminDoc = await getDoc(adminRef);
        setIsAdmin(adminDoc.exists());
      } catch (error) {
        console.error('Admin check error:', error);
        setError(error as AdminCheckError);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdmin();
  }, [userInfo?.email]);

  const buttonText =
    pathname === '/admin'
      ? language === 'fi'
        ? 'Takaisin kysymyksiin'
        : 'Back to questions'
      : language === 'fi'
      ? 'Admin paneeli'
      : 'Admin panel';

  const getAccountButtonText = () => {
    if (pathname === '/account') {
      return language === 'fi' ? 'Takaisin kysymyksiin' : 'Back to questions';
    }
    return language === 'fi' ? 'Oma tili' : 'My account';
  };

  const handleAccountClick = () => {
    if (pathname === '/account') {
      router.push('/');
    } else {
      router.push('/account');
    }
    logEvent('account_navigation', {
      path: pathname === '/account' ? 'home' : 'account',
    });
  };

  return (
    <header
      className='bg-bf-brand-primary flex justify-between h-20 w-full'
      role='banner'>
      <nav className='flex justify-between w-full' role='navigation'>
        <div>
          <button
            className='w-10 h-10 mx-4 text-white font-bold '
            onClick={() => router.push('/')}
            aria-label={
              language === 'fi'
                ? 'Minun Business Finland'
                : 'My Business Finland'
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
            <p className='mx-2 text-white font-bold '>
              {language === 'fi' ? 'Paikallinen' : 'Local'}
            </p>
            <p
              className='mx-2 text-white font-bold '
              title={questions[currentStep]?.question[language]}>
              {questions[currentStep]?.id}
            </p>
          </div>
        )}
        <div className='flex justify-center gap-4 items-center mx-4'>
          {isAdmin && !isLoading && (
            <button
              onClick={handleAdminClick}
              className='bg-white text-bf-brand-primary font-bold py-2 px-4 rounded disabled:opacity-50'
              aria-label={buttonText}
              disabled={isLoading}
              role='button'>
              {isLoading ? 'Loading...' : buttonText}
            </button>
          )}

          {error && (
            <div role='alert' className='text-red-500'>
              {error.message}
            </div>
          )}

          {userInfo ? (
            <button
              className='bg-white text-bf-brand-primary font-bold py-2 px-4 rounded-xl '
              onClick={handleAccountClick}
              aria-label={getAccountButtonText()}
              role='button'>
              {getAccountButtonText()}
            </button>
          ) : (
            <>
              <button
                className='bg-white text-bf-brand-primary font-bold py-2 px-4 rounded-xl '
                onClick={() => {
                  router.push('/login');
                  logEvent('login_button_click');
                }}
                aria-label={language === 'fi' ? 'Kirjaudu' : 'Login'}
                role='button'>
                {language === 'fi' ? 'Kirjaudu' : 'Login'}
              </button>
              <button
                className='bg-white text-bf-brand-primary font-bold py-2 px-4 rounded-xl '
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

          <div className='flex items-center'>
            <button
              onClick={() => {
                setLanguage(language === 'fi' ? 'en' : 'fi');
                logEvent('language_selection', {
                  language: language === 'fi' ? 'en' : 'fi',
                });
              }}
              className='focus:outline-none focus:ring-2'
              aria-label={
                language === 'fi' ? 'Switch to English' : 'Vaihda suomeksi'
              }>
              <FlagIcon
                code={language === 'fi' ? 'GB' : 'FI'}
                size={32}
                className='cursor-pointer'
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
