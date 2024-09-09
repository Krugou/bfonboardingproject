import React from 'react';

interface QuestionDisplayProps {
  currentStep: number;
  questions: {id: string; question: string}[];
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  currentStep,
  questions,
}) => {
  return (
    <div className='flex flex-col h-1/2 justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10'>
      {currentStep <= questions.length ? (
        <h2 className='text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl'>
          {questions[currentStep - 1].question}
        </h2>
      ) : (
        <h2 className='text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl'>
          You have completed all the questions!
        </h2>
      )}
    </div>
  );
};

export default QuestionDisplay;
