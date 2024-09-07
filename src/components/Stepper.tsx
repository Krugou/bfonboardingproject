import React from 'react';
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
interface StepperProps {
  steps: Question[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({steps, currentStep}) => {
  return (
    <div className='flex justify-between items-center w-1/3'>
      {steps.map((step, i) => (
        <div key={i} className='flex-1 flex items-center'>
          <div
            className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              currentStep === i + 1
                ? 'border-blue-500 bg-blue-500 text-white'
                : i + 1 < currentStep
                ? 'border-green-500 bg-green-500 text-white'
                : 'border-gray-300 bg-white text-gray-500'
            }`}>
            {i + 1 < currentStep ? (
              <svg
                className='w-6 h-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'></path>
              </svg>
            ) : (
              i + 1
            )}
          </div>
          {i < steps.length - 1 && (
            <div className='flex-1 h-1 bg-gray-300 mx-2'>
              {i + 1 < currentStep && (
                <div className='h-full bg-green-500'></div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
