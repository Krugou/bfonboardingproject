import React, {useState, useCallback} from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import {useForm} from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import Link from 'next/link';
import {useAuth} from '@/hooks/useAuth';
import {useRouter} from 'next/navigation';
import {useUserContext} from '@/context/UserContext';

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(4, 'Password must be at least 4 characters'),
});

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {handleEmailPasswordAuth, handleGoogleLogin, error} = useAuth();
  const router = useRouter();
  const {language} = useUserContext();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleFormSubmit = useCallback(
    async (data: any) => {
      if (isLoading) return;
      try {
        setIsLoading(true);
        const success = await handleEmailPasswordAuth(
          data.email,
          data.password,
          true, // isLogin
          '', // firstName
          '', // lastName
        );
        if (success) {
          await new Promise((resolve) => setTimeout(resolve, 0));
          await router.replace('/');
        }
      } catch (error) {
        console.error('Login error:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [handleEmailPasswordAuth, router, isLoading],
  );

  const handleGoogleAuthAndRedirect = useCallback(async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      const success = await handleGoogleLogin();
      if (success) {
        await new Promise((resolve) => setTimeout(resolve, 0));
        await router.replace('/');
      }
    } catch (error) {
      console.error('Google authentication error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [handleGoogleLogin, router, isLoading]);

  return (
    <div
      className='flex items-center justify-center'
      onClick={() => router.push('/')}
      role='dialog'
      aria-labelledby='login-title'>
      <div className='bg-white p-8 w-96' onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between w-full'>
          <h2
            id='login-title'
            className='text-2xl text-bf-brand-primary font-bold mb-4'>
            {language === 'fi' ? 'Kirjaudu' : 'Login'}
          </h2>
          <button
            className='bg-bf-brand-primary hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full flex justify-center items-center'
            onClick={handleGoogleAuthAndRedirect}
            disabled={isLoading}
            title={
              language === 'fi' ? 'Kirjaudu Googlella' : 'Login with Google'
            }>
            <GoogleIcon />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          {/* Email Input */}
          <div className='mb-4'>
            <label
              className='block text-bf-brand-primary text-sm font-bold mb-2'
              htmlFor='email'>
              {language === 'fi' ? 'Sähköposti' : 'Email'}
            </label>
            <input
              type='email'
              id='email'
              {...register('email', {
                onChange: (e) => setEmail(e.target.value),
              })}
              value={email}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-bf-brand-primary leading-tight focus:outline-none focus:shadow-outline'
              required
              aria-invalid={errors.email ? true : false}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p
                id='email-error'
                className='mt-1 text-red-600 text-sm'
                role='alert'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className='mb-6'>
            <label
              className='block text-bf-brand-primary text-sm font-bold mb-2'
              htmlFor='password'>
              {language === 'fi' ? 'Salasana' : 'Password'}
            </label>
            <div className='relative flex gap-2 my-2'>
              <input
                {...register('password')}
                id='password'
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-bf-brand-primary leading-tight focus:outline-none focus:shadow-outline'
                required
                aria-invalid={errors.password ? 'true' : 'false'}
                aria-describedby={
                  errors.password ? 'password-error' : undefined
                }
              />
              <button
                type='button'
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className='flex items-center text-sm leading-5 sm:text-base'>
                {showPassword ? (
                  <VisibilityOffIcon className='text-bf-brand-primary' />
                ) : (
                  <VisibilityIcon className='text-bf-brand-primary' />
                )}
              </button>
            </div>
            {errors.password && (
              <p
                id='password-error'
                className='mt-1 text-red-600 text-sm'
                role='alert'>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              disabled={isLoading}
              className='primary-button text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              {isLoading
                ? language === 'fi'
                  ? 'Kirjaudutaan...'
                  : 'Logging in...'
                : language === 'fi'
                ? 'Kirjaudu'
                : 'Login'}
            </button>
            <Link
              href='/register'
              className='inline-block align-baseline font-bold text-sm text-bf-brand-primary hover:text-blue-800'>
              {language === 'fi'
                ? 'Ekaa kertaa täällä? rekisteröidy '
                : 'First time here? Register'}
            </Link>
          </div>
        </form>
        {error && (
          <p className='mt-4 text-red-600 text-sm text-center' role='alert'>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default React.memo(LoginForm);
