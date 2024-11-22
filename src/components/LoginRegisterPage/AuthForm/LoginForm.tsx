
import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { BaseAuthFormProps } from '@/types/auth';

const LoginForm: React.FC<BaseAuthFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  onClose,
  handleGoogleLogin,
  language,
  toggleAuthMode
}) => {
  return (
    <div className='flex items-center justify-center' onClick={onClose}>
      <div className='bg-white p-8 rounded-lg shadow-lg w-96' onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between w-full'>
          <h2 className='text-2xl font-bold mb-4'>
            {language === 'fi' ? 'Kirjaudu' : 'Login'}
          </h2>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full flex justify-center items-center'
            onClick={handleGoogleLogin}
            title={language === 'fi' ? 'Kirjaudu Googlella' : 'Login with Google'}>
            <GoogleIcon />
          </button>
          <button
            type='button'
            onClick={onClose}
            className='text-gray-500 text-2xl hover:shadow-2xl hover:bg-bf-brand-primary rounded-full h-10 w-10 hover:text-white'
            aria-label='Close modal'>
            &times;
          </button>
        </div>

        <form onSubmit={onSubmit}>
          {/* Email Input */}
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
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

          {/* Password Input */}
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
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

          {/* Buttons */}
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              {language === 'fi' ? 'Kirjaudu' : 'Login'}
            </button>
            <button
              type='button'
              onClick={toggleAuthMode}
              className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
              {language === 'fi' ? 'Tarvitsetko tilin? Rekisteröidy' : 'Need an account? Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
