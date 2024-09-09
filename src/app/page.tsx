'use client';
import AnsweredQuestionsModal from '@/components/AnsweredQuestionsModal';
import DevModeBanner from '@/components/DevModeBanner';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';

import React, {useState} from 'react';
import questions from '../data/mockdata';

const Home = () => {
  // const capitalizeFirstLetter = (string: string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // };
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
    <div className='flex flex-col w-full  bg-gray-400 h-screen items-center  '>
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
      />
      <DevModeBanner />
    </div>
  );
};

export default Home;
