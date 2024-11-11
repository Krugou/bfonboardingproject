import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import {useUserContext} from '@/context/UserContext';

interface AuthFormProps {
  isLogin: boolean;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  toggleAuthMode: () => void;
  onClose: () => void;
  error: string | null;
  handleGoogleLogin: () => void;
}

/**
 * AuthForm component for handling user authentication.
 *
 * @param {AuthFormProps} props - The props for the component.
 * @returns {JSX.Element} The rendered AuthForm component.
 */
const AuthForm: React.FC<AuthFormProps> = ({
  isLogin,
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
  toggleAuthMode,
  error,
  handleGoogleLogin,
  onClose,
}) => {
  const {language} = useUserContext();

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-10'
      onClick={onClose}>
      <div
        className='bg-white p-8 rounded-lg shadow-lg w-96'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between w-full'>
          <h2 className='text-2xl font-bold mb-4'>
            {isLogin
              ? language === 'fi'
                ? 'Kirjaudu'
                : 'Login'
              : language === 'fi'
              ? 'Rekisteröidy'
              : 'Register'}
          </h2>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full flex justify-center items-center'
            onClick={handleGoogleLogin}
            title={
              language === 'fi' ? 'Kirjaudu Googlella' : 'Login with Google'
            }>
            <GoogleIcon className='' />
          </button>
          <button
            type='button'
            onClick={onClose}
            className='text-gray-500 text-2xl hover:shadow-2xl hover:bg-bf-brand-primary rounded-full h-10 w-10 hover:text-white'
            aria-label='Close modal'>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
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
              {isLogin
                ? language === 'fi'
                  ? 'Kirjaudu'
                  : 'Login'
                : language === 'fi'
                ? 'Rekisteröidy'
                : 'Register'}
            </button>
            <button
              type='button'
              onClick={toggleAuthMode}
              className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
              {isLogin
                ? language === 'fi'
                  ? 'Tarvitsetko tilin? Rekisteröidy'
                  : 'Need an account? Register'
                : language === 'fi'
                ? 'Onko sinulla jo tili? Kirjaudu'
                : 'Have an account? Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
