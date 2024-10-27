'use client';
import AdminPanel from '@/components/AdminPanel';
import {useUserContext, UserProvider} from '@/context/UserContext';
import React from 'react';
import {Bounce, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPage: React.FC = () => {
  const {isDarkmode} = useUserContext();
  return (
    <UserProvider>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkmode ? 'dark' : 'light'}
        transition={Bounce}
      />
      <AdminPanel />
    </UserProvider>
  );
};

export default AdminPage;
