import React from 'react';
import QuestionDisplay from './QuestionDisplay';
import QuestionsNavigator from './QuestionsNavigator';
import UpperPanel from './UpperPanel';
interface Question {
  id: string;
  question: string;
  condition: string;
  tooltip: string;
  syntaxPlaceholder: string;
  answerType: string;
  answerOptions: string;
  targetAudience: string;
  errorAnswer: string;
}
interface MainContentProps {
  listeningMode: boolean;
  // eslint-disable-next-line no-unused-vars
  setListeningMode: (mode: boolean) => void;
  currentStep: number;
  // eslint-disable-next-line no-unused-vars
  setCurrentStep: (step: number) => void;
  handleOpenModal: () => void;
  questions: Question[];
}

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
        />
      </main>
    </div>
  );
};

export default MainContent;
