import React from 'react';
import questions from '../data/mockdata';
import QuestionInput from './QuestionInput';
interface QuestionNavigatorProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const QuestionsNavigator: React.FC<QuestionNavigatorProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  return (
    <div className='flex h-1/2 justify-center gap-4 items-center'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => setCurrentStep(currentStep - 1)}
        disabled={currentStep === 1}>
        Previous
      </button>
      <QuestionInput question={questions[currentStep - 1]} />
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => setCurrentStep(currentStep + 1)}
        disabled={currentStep === questions.length}>
        Next
      </button>
    </div>
  );
};

export default QuestionsNavigator;
