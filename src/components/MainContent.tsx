import {QuestionItem} from '@/app/types';
import React, {useEffect, useState} from 'react';
import QuestionDisplay from './MainContent/QuestionDisplay';
import QuestionsNavigator from './MainContent/QuestionsNavigator';
import UpperPanel from './MainContent/UpperPanel';
import { logEvent } from '@/utils/analytics';

/**
 * Props for the MainContent component.
 */
interface MainContentProps {
  listeningMode: boolean;
  // eslint-disable-next-line no-unused-vars
  setListeningMode: (mode: boolean) => void;
  currentStep: number;
  // eslint-disable-next-line no-unused-vars
  setCurrentStep: (step: number) => void;
  handleOpenModal: () => void;
  questions: QuestionItem[];
}

/**
 * MainContent component that renders the main content area of the application.
 * It includes the UpperPanel, QuestionDisplay, and QuestionsNavigator components.
 *
 * @param {MainContentProps} props - The props for the MainContent component.
 * @returns {JSX.Element} The rendered MainContent component.
 */
const MainContent: React.FC<MainContentProps> = ({
  listeningMode,
  setListeningMode,
  currentStep,
  setCurrentStep,
  handleOpenModal,
  questions,
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
    logEvent('page_view', { page: 'MainContent' });
  }, []);

  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <main className='w-full h-full flex flex-col shadow-xl border-blue-400 border-4 bg-gray-100 rounded-xl m-10 p-4 max-w-screen-lg max-h-min transition-all duration-500 ease-in-out transform hover:scale-105'>
        <UpperPanel
          listeningMode={listeningMode}
          setListeningMode={setListeningMode}
          currentStep={currentStep}
          handleOpenModal={handleOpenModal}
          questions={questions}
        />
        <QuestionDisplay currentStep={currentStep} questions={questions} />
        <QuestionsNavigator
          currentStep={currentStep}
          setCurrentStep={(step) => {
            setCurrentStep(step);
            logEvent('question_navigation', { step });
          }}
          listeningMode={listeningMode}
        />
      </main>
      {showBackToTop && (
        <button
          className='fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={scrollToTop}
          aria-label='Back to Top'>
          ↑
        </button>
      )}
    </div>
  );
};

export default MainContent;
