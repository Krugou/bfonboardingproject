'use client';
import AnsweredQuestionsModal from '@/components/AnsweredQuestionsModal';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';

import {UserProvider} from '@/context/UserContext';
import React, {useState} from 'react';
import questions from '../data/mockdata';

const Home = () => {
  const [listeningMode, setListeningMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <UserProvider>
      <div className='flex flex-col w-full  bg-bf-gray h-screen items-center  '>
        <Header />
        <MainContent
          listeningMode={listeningMode}
          setListeningMode={setListeningMode}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          handleOpenModal={handleOpenModal}
          questions={questions}
        />
        <AnsweredQuestionsModal
          open={modalOpen}
          onClose={handleCloseModal}
          questions={questions}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </UserProvider>
  );
};

export default Home;
