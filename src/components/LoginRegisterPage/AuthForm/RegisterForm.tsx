import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import {BaseAuthFormProps} from '@/types/auth';

const RegisterForm: React.FC<BaseAuthFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  onClose,
  language,
  toggleAuthMode,
}) => {
  return (
    <div className='flex items-center justify-center' onClick={onClose}>
      <div
        className='bg-white p-8 rounded-lg shadow-lg w-96'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between w-full'>
          <h2 className='text-2xl font-bold mb-4'>
            {language === 'fi' ? 'Rekisteröidy' : 'Register'}
          </h2>
        </div>

        <form onSubmit={onSubmit}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'>
              {language === 'fi' ? 'Sähköposti' : 'Email'}
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'>
              {language === 'fi' ? 'Salasana' : 'Password'}
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              {language === 'fi' ? 'Rekisteröidy' : 'Register'}
            </button>
            <button
              type='button'
              onClick={toggleAuthMode}
              className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
              {language === 'fi'
                ? 'Onko sinulla jo tili? Kirjaudu'
                : 'Have an account? Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
