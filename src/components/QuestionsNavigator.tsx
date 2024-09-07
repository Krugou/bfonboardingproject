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
    <div className='flex h-1/2 justify-center gap-4 items-center'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => setCurrentStep(currentStep - 1)}
        disabled={currentStep === 1}>
        Previous
      </button>
      {currentStep <= questions.length ? (
        <>
          <QuestionInput question={questions[currentStep - 1]} />
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={currentStep === questions.length + 1}>
            Next
          </button>
        </>
      ) : (
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default QuestionsNavigator;
