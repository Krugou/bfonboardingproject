'use client';

import {signOut} from 'firebase/auth';
import {auth} from '@/utils/firebase';
import {toast} from 'react-toastify';
import {useRouter} from 'next/navigation';

interface LogoutButtonProps {
  language: string;
  onLogout: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({language, onLogout}) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      onLogout();
      toast.success(
        language === 'fi'
          ? 'Kirjauduttu ulos onnistuneesti'
          : 'Logged out successfully',
      );
      router.push('/');
    } catch (error) {
      toast.error(
        language === 'fi'
          ? 'Uloskirjautuminen epäonnistui'
          : 'Failed to logout',
      );
    }
  };

  return (
    <button
      onClick={handleLogout}
      className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
      {language === 'fi' ? 'Kirjaudu ulos' : 'Logout'}
    </button>
  );
};

export default LogoutButton;
