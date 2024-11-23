import React, {useState, useCallback} from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import {useForm} from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import Link from 'next/link';
import {useAuth} from '@/hooks/useAuth';
import {useRouter} from 'next/router';
import {useUserContext} from '@/context/UserContext';

// Password validation schema
const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(
        /[^A-Za-z0-9]/,
        'Password must contain at least one special character',
      ),
    confirmPassword: z.string(),
    businessId: z.string().min(1, 'Business ID is required'),
    preferredLanguage: z.string().min(1, 'Preferred language is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessId, setBusinessId] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {handleEmailPasswordAuth, handleGoogleLogin, error} = useAuth();
  const router = useRouter();
  const {language} = useUserContext();

  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm({
    resolver: zodResolver(passwordSchema),
    mode: 'onChange',
  });

  const togglePasswordVisibility = useCallback(
    (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
      setter((prev) => !prev);
    },
    [],
  );

  const handleFormSubmit = useCallback(
    async (data: any) => {
      if (isLoading) return;
      try {
        setIsLoading(true);
        const success = await handleEmailPasswordAuth(
          data.email,
          data.password,
          false, // isLogin
          firstName,
          lastName,
        );
        if (success) {
          await new Promise((resolve) => setTimeout(resolve, 0));
          await router.replace('/');
        }
      } catch (error) {
        console.error('Registration error:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [handleEmailPasswordAuth, router, isLoading, firstName, lastName],
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
      className='flex flex-col items-center justify-center'
      onClick={() => router.push('/')}
      role='dialog'
      aria-labelledby='register-title'>
      <div className='h-10 w-full flex items-center justify-center bg-bf-gray'>
        <p className='font-semibold'>
          {language === 'fi'
            ? 'Luo Oma BF Tunnus / täydennä omat tiedot'
            : 'Create BF Account / Complete Your Information'}
        </p>
      </div>
      <div
        className='bg-white p-6 rounded-lg shadow-md'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between w-full'>
          <h2
            id='register-title'
            className='text-2xl font-bold mb-4 text-bf-brand-primary'>
            {language === 'fi' ? 'Rekisteröidy' : 'Register'}
          </h2>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <div className='mb-4'>
            <label
              className='block text-bf-brand-primary text-sm font-bold mb-2'
              htmlFor='firstName'>
              {language === 'fi' ? 'Etunimi' : 'First Name'}
              <span className='text-red-600' aria-hidden='true'>
                {' '}
                *
              </span>
            </label>
            <input
              type='text'
              id='firstName'
              value={firstName}
              placeholder={
                language === 'fi' ? 'Syötä etunimesi' : 'Enter your first name'
              }
              onChange={(e) => setFirstName(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-bf-brand-primary leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-bf-brand-primary text-sm font-bold mb-2'
              htmlFor='lastName'>
              {language === 'fi' ? 'Sukunimi' : 'Last Name'}
              <span className='text-red-600' aria-hidden='true'>
                {' '}
                *
              </span>
            </label>
            <input
              type='text'
              id='lastName'
              value={lastName}
              placeholder={
                language === 'fi' ? 'Syötä sukunimesi' : 'Enter your last name'
              }
              onChange={(e) => setLastName(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-bf-brand-primary leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-bf-brand-primary text-sm font-bold mb-2'
              htmlFor='businessId'>
              {language === 'fi' ? 'Y-tunnus' : 'Business ID'}
              <span className='text-red-600' aria-hidden='true'>
                {' '}
                *
              </span>
            </label>
            <input
              {...register('businessId')}
              type='text'
              id='businessId'
              value={businessId}
              onChange={(e) => setBusinessId(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-bf-brand-primary leading-tight focus:outline-none focus:shadow-outline'
              required
            />
            {errors.businessId && (
              <p className='mt-1 text-red-600 text-sm' role='alert'>
                {errors.businessId?.message?.toString()}
              </p>
            )}
          </div>

          <div className='mb-4'>
            <label
              className='block text-bf-brand-primary text-sm font-bold mb-2'
              htmlFor='preferredLanguage'>
              {language === 'fi' ? 'Ensisijainen kieli' : 'Preferred Language'}
              <span className='text-red-600' aria-hidden='true'>
                {' '}
                *
              </span>
            </label>
            <select
              {...register('preferredLanguage')}
              id='preferredLanguage'
              value={preferredLanguage}
              onChange={(e) => setPreferredLanguage(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-bf-brand-primary leading-tight focus:outline-none focus:shadow-outline'
              required>
              <option value=''>
                {language === 'fi' ? 'Valitse kieli' : 'Select language'}
              </option>
              <option value='fi'>Suomi</option>
              <option value='en'>English</option>
            </select>
            {errors.preferredLanguage && (
              <p className='mt-1 text-red-600 text-sm' role='alert'>
                {errors.preferredLanguage?.message?.toString()}
              </p>
            )}
          </div>
          <div className='mb-4'>
            <label
              className='block text-bf-brand-primary text-sm font-bold mb-2'
              htmlFor='email'>
              {language === 'fi' ? 'Sähköposti' : 'Email'}
              <span className='text-red-600' aria-hidden='true'>
                {' '}
                *
              </span>
            </label>
            <input
              type='email'
              id='email'
              value={email}
              placeholder={
                language === 'fi'
                  ? 'Syötä sähköpostiosoitteesi'
                  : 'Enter your email'
              }
              onChange={(e) => setEmail(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-bf-brand-primary leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-bf-brand-primary text-sm font-bold mb-2'>
              {language === 'fi' ? 'Salasana' : 'Password'}
              <span className='text-red-600' aria-hidden='true'>
                {' '}
                *
              </span>
            </label>
            <div className='relative flex gap-2 my-2'>
              <input
                {...register('password')}
                id='password'
                type={showPassword ? 'text' : 'password'}
                autoComplete='new-password'
                aria-invalid={errors.password ? true : false}
                aria-describedby={
                  errors.password ? 'password-error' : undefined
                }
                className='shadow appearance-none border rounded w-full py-2 px-3 text-bf-brand-primary leading-tight focus:outline-none focus:shadow-outline'
              />
              <button
                type='button'
                onClick={() => togglePasswordVisibility(setShowPassword)}
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
          <div className='mb-4'>
            <label
              htmlFor='confirmPassword'
              className='block text-bf-brand-primary text-sm font-bold mb-2'>
              {language === 'fi' ? 'Vahvista salasana' : 'Confirm Password'}
            </label>
            <div className='flex gap-2 my-2'>
              <input
                {...register('confirmPassword', {
                  required: true,
                  validate: (value) =>
                    value === watch('password') || 'Passwords do not match',
                })}
                id='confirmPassword'
                name='confirmPassword'
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete='new-password'
                required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-bf-brand-primary leading-tight focus:outline-none focus:shadow-outline'
                placeholder={
                  language === 'fi'
                    ? 'Vahvista salasana'
                    : 'Confirm your password'
                }
              />
              <button
                type='button'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className='flex items-center text-sm leading-5 sm:text-base'>
                {showConfirmPassword ? (
                  <VisibilityOffIcon className='text-bf-brand-primary' />
                ) : (
                  <VisibilityIcon className='text-bf-brand-primary' />
                )}
              </button>
            </div>
            {errors.password && (
              <p className='mt-1 text-red-600'>
                {language === 'fi'
                  ? 'Salasana on pakollinen'
                  : 'Password is required'}
              </p>
            )}
            {errors.confirmPassword && (
              <p className='mt-1 text-xs text-red-600'>
                {language === 'fi'
                  ? 'Salasanat eivät täsmää'
                  : 'Passwords do not match'}
              </p>
            )}
            <span className='mt-1 text-[0.5rem]'>
              {language === 'fi'
                ? 'Salasanan tulee olla vähintään 8 merkkiä pitkä'
                : 'Password must be at least 8 characters long'}
            </span>
          </div>
          <div className='flex items-center justify-between gap-2'>
            <button
              type='submit'
              disabled={isLoading}
              className='primary-button w-1/2 rounded focus:outline-none focus:shadow-outline'>
              {isLoading
                ? language === 'fi'
                  ? 'Rekisteröidytään...'
                  : 'Registering...'
                : language === 'fi'
                ? 'Rekisteröidy'
                : 'Register'}
            </button>
            <Link
              href='/login'
              className='inline-block align-baseline font-bold text-sm text-bf-brand-primary hover:text-blue-800'>
              {language === 'fi'
                ? 'Onko sinulla jo tili? Kirjaudu'
                : 'Have an account? Login'}
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

export default React.memo(RegisterForm);
