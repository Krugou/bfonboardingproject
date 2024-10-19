import {QuestionItem} from '@/app/types';
import React from 'react';
import QuestionDisplay from './MainContent/QuestionDisplay';
import QuestionsNavigator from './MainContent/QuestionsNavigator';
import UpperPanel from './MainContent/UpperPanel';

/**
 * Props for the MainContent component.
 */
interface MainContentProps {
  listeningMode: boolean;
  setListeningMode: (mode: boolean) => void;
  currentStep: number;
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
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <main className='w-full h-full flex flex-col shadow-xl border-blue-400 border-4 bg-gray-100 rounded-xl m-10 p-4 max-w-screen-lg max-h-min'>
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
          setCurrentStep={setCurrentStep}
          listeningMode={listeningMode}
        />
      </main>
    </div>
  );
};

export default MainContent;
