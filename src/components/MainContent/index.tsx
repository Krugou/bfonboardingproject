import LoadingElement from '@/components/LoadingElement';
import { useUserContext } from '@/context/UserContext';
import { logEvent } from '@/utils/analytics';
import React, { useEffect, useState } from 'react';
import QuestionDisplay from './QuestionDisplay';
import QuestionsNavigator from './QuestionsNavigator';
import UpperPanel from './UpperPanel';

/**
 * Props for the MainContent component.
 */
interface MainContentProps {
  handleOpenModal: () => void;
}

/**
 * MainContent component that renders the main content area of the application.
 * It includes the UpperPanel, QuestionDisplay, and QuestionsNavigator components.
 *
 * @param {MainContentProps} props - The props for the MainContent component.
 * @returns {JSX.Element} The rendered MainContent component.
 */
const MainContent: React.FC<MainContentProps> = ({


  handleOpenModal,
}) => {
  const { questions } = useUserContext();


  useEffect(() => {
    logEvent('page_view', { page: 'MainContent' });
  }, []);

  if (!questions.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingElement />
        <p className="text-2xl font-bold text-gray-700">Please login to start</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <main className='w-full h-full flex flex-col shadow-xl border-blue-400 border-4 bg-gray-100 rounded-xl m-10 p-4 max-w-screen-lg max-h-min transition-all duration-500 ease-in-out transform hover:scale-105'>
        <UpperPanel

          handleOpenModal={handleOpenModal}
        />
        <QuestionDisplay   />
        <QuestionsNavigator


        />
      </main>

    </div>
  );
};

export default MainContent;
