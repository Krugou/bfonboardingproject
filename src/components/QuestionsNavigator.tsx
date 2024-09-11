import React from 'react';
import questions from '../data/mockdata';
import QuestionInput from './QuestionInput';

interface QuestionNavigatorProps {
  currentStep: number;
  // eslint-disable-next-line no-unused-vars
  setCurrentStep: (step: number) => void;
}

const QuestionsNavigator: React.FC<QuestionNavigatorProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  const handleReset = () => {
    setCurrentStep(1);
  };

  return (
    <div className='flex flex-col sm:flex-row h-full justify-center gap-4 items-center p-4'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded disabled:opacity-50 w-full sm:w-auto text-sm sm:text-lg'
        onClick={() => setCurrentStep(currentStep - 1)}
        disabled={currentStep === 1}>
        Previous
      </button>
      {currentStep <= questions.length ? (
        <>
          <div className='w-full sm:w-3/4'>
            <QuestionInput question={questions[currentStep - 1]} />
          </div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded disabled:opacity-50 w-full sm:w-auto text-sm sm:text-lg'
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={currentStep === questions.length}>
            Next
          </button>
        </>
      ) : (
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded w-full sm:w-auto text-sm sm:text-lg'
          onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default QuestionsNavigator;
