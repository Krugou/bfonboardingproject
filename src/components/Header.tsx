import {useUserContext} from '@/context/UserContext';
import React from 'react';
import {FlagIcon} from 'react-flag-kit';

const Header = () => {
  const {setLanguage, language} = useUserContext();

  return (
    <header className='bg-bf-brand-primary flex justify-between h-20 w-full'>
      <div>
        <p className='w-10 mx-2 text-white font-bold'>
          {' '}
          {language === 'fi' ? 'Minun Business Finland' : 'My Business Finland'}
        </p>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <div className='flex justify-center items-center'>
          <p className='w-10 mx-2 text-white font-bold'>
            {language === 'fi'
              ? 'Paikallinen kehitysympäristö'
              : 'Local Development Environment'}
          </p>
        </div>
      )}
      <div className='flex justify-center gap-4 items-center mx-4'>
        <FlagIcon
          code='FI'
          size={32}
          onClick={() => setLanguage('fi')}
          className='cursor-pointer'
        />
        <FlagIcon
          code='GB'
          size={32}
          onClick={() => setLanguage('en')}
          className='cursor-pointer'
        />
      </div>
    </header>
  );
};

export default Header;
