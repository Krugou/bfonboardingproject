import React from 'react';

interface AuthFormProps {
  isLogin: boolean;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  toggleAuthMode: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  isLogin,
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
  toggleAuthMode,
}) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-10'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl font-bold mb-4'>
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'>
              Email
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
              Password
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
              {isLogin ? 'Login' : 'Register'}
            </button>
            <button
              type='button'
              onClick={toggleAuthMode}
              className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>
              {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
