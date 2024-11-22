import React, {useState, useCallback} from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import {BaseAuthFormProps} from '@/types/auth';
import {useForm} from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(4, 'Password must be at least 4 characters'),
});

const LoginForm: React.FC<BaseAuthFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  onClose,
  handleGoogleLogin,
  language,
  toggleAuthMode,
}) => {
  const [showPassword, setShowPassword] = useState(false);

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
      try {
        await onSubmit(data);
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    [onSubmit],
  );

  return (
    <div
      className='flex items-center justify-center'
      onClick={onClose}
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
            onClick={handleGoogleLogin}
            title={
              language === 'fi' ? 'Kirjaudu Googlella' : 'Login with Google'
            }>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              {...register('email')}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-bf-brand-primary leading-tight focus:outline-none focus:shadow-outline'
              required
              aria-invalid={errors.email ? 'true' : 'false'}
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
              className='primary-button text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              {language === 'fi' ? 'Kirjaudu' : 'Login'}
            </button>
            <button
              type='button'
              onClick={toggleAuthMode}
              className='inline-block align-baseline font-bold text-sm text-bf-brand-primary hover:text-blue-800'>
              {language === 'fi'
                ? 'Ekaa kertaa täällä? rekisteröidy '
                : 'First time here? Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(LoginForm);
