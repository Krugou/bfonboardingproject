'use client';
import AdminPanel from '@/components/AdminPanel';
import {useUserContext} from '@/context/UserContext';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

const AdminPage: React.FC = () => {
  const {isDarkmode} = useUserContext();
  return (
    <>
      <AdminPanel />
    </>
  );
};

export default AdminPage;
