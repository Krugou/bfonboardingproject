import {useUserContext} from '@/context/UserContext';
import questions from '@/data/mockdata';
import React from 'react';
import {FlagIcon} from 'react-flag-kit';

const Header = () => {
  const {setLanguage, language, currentQuestion} = useUserContext();

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
