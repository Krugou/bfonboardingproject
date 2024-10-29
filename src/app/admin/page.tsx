'use client';
import AdminPanel from '@/components/AdminPanel';
import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

const AdminPage: React.FC = () => {
  return (
    <>
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
        theme={'light'}
        transition={Bounce}
      />
      <AdminPanel />
    </>
  );
};

export default AdminPage;
