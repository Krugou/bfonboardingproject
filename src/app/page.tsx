'use client';
import AnsweredQuestionsModal from '@/components/AnsweredQuestionsModal';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import {UserProvider} from '@/context/UserContext';
import {db} from '@/utils/firebase';
import {doc, onSnapshot} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Bounce, ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [listeningMode, setListeningMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [questions, setQuestions] = useState<any>([]);
  useEffect(() => {
    const docRef = doc(db, 'questions', 'questions');

    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          const questionsData: any = data.questions.map(
            (q: any, index: number) => ({
              id: index.toString(),
              ...q,
            }),
          );
          setQuestions(questionsData);
        } else {
          console.error('No such document!');
        }
      },
      (error) => {
        console.error('Error fetching questions: ', error);
      },
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };
  let isDarkmode = false;
  if (typeof window !== 'undefined') {
    isDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

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
      <div className='flex flex-col w-full bg-bf-gray h-screen items-center'>
        <Header />
        <MainContent
          listeningMode={listeningMode}
          setListeningMode={setListeningMode}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          handleOpenModal={toggleModal}
          questions={questions}
        />
        <AnsweredQuestionsModal
          open={modalOpen}
          onClose={toggleModal}
          questions={questions}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </UserProvider>
  );
};

export default Home;
