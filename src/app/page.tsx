'use client';
import AnsweredQuestionsModal from '@/components/AnsweredQuestionsModal';
import Header from '@/components/Header';
import LoadingElement from '@/components/LoadingElement';
import MainContent from '@/components/MainContent';
import {useUserContext} from '@/context/UserContext';
import React, {useState} from 'react';
import {Bounce, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {userInfo} = useUserContext();

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <ToastContainer
        position='top-center'
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
      <div className='flex flex-col w-full bg-bf-gray h-screen items-center'>
        <Header />
        {!userInfo && (
          <div className='flex flex-col justify-center items-center h-screen'>
            <h2 className='text-6xl font-extrabold text-bf-brand-primary'>
              BUSINESS FINLAND
            </h2>
            <h4 className='text-4xl font-bold text-gray-700'>
              Onboarding Portal
            </h4>
            <LoadingElement />
            <p className='text-2xl font-bold text-gray-700'>
              Please login to start
            </p>
          </div>
        )}
        {userInfo && (
          <>
            <MainContent handleOpenModal={toggleModal} />
            <AnsweredQuestionsModal open={modalOpen} onClose={toggleModal} />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
