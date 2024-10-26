import {useUserContext} from '@/context/UserContext';
import questions from '@/data/mockdata';
import Link from 'next/link';
import React from 'react';
import {FlagIcon} from 'react-flag-kit';
const Header = () => {
  const {setLanguage, language, currentQuestion} = useUserContext();
  const handleAdminClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const password = prompt('Please enter the admin password:');
    if (password === 'businessfinland') {
      window.location.href = '/admin';
    } else {
      alert('Incorrect password. Access denied.');
    }
  };
  return (
    <header className={`bg-bf-brand-primary flex justify-between h-20 w-full `}>
      <div>
        <p className='w-10 mx-2 text-white font-bold'>
          {' '}
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
        <Link href='/admin'>
          <a
            onClick={handleAdminClick}
            className='bg-white text-bf-brand-primary font-bold py-2 px-4 rounded'>
            {language === 'fi' ? 'Admin paneeli' : 'Admin panel'}
          </a>
        </Link>
        <FlagIcon
          code='FI'
          size={32}
          onClick={() => setLanguage('fi')}
          className='cursor-pointer'
          aria-label='Select Finnish language'
        />
        <FlagIcon
          code='GB'
          size={32}
          onClick={() => setLanguage('en')}
          className='cursor-pointer'
          aria-label='Select English language'
        />
      </div>
    </header>
  );
};

export default Header;
