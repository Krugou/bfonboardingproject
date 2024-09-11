import React from 'react';
import { useUserContext } from '@/context/UserContext';

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
  // eslint-disable-next-line no-unused-vars
  setCurrentStep: (step: number) => void;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  setCurrentStep,
}) => {
  const { answers } = useUserContext();

  return (
    <div className='flex flex-wrap justify-between items-center w-full max-w-3xl mx-auto px-4'>
      {steps.map((step, i) => {
        const isAnswered = answers[step.id] !== undefined;
        const isSkipped = !isAnswered && i + 1 < currentStep;

        return (
          <div key={i} className='flex-1 flex items-center mb-4'>
            <div
              className={`relative cursor-pointer flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 ${
                currentStep === i + 1
                  ? 'border-blue-500 bg-blue-500 text-white'
                  : isSkipped
                  ? 'border-red-500 bg-white text-red-500'
                  : i + 1 < currentStep
                  ? 'border-green-500 bg-green-500 text-white'
                  : 'border-gray-300 bg-white text-gray-500'
              }`}
              onClick={() => setCurrentStep(i + 1)}>
              {i + 1 < currentStep ? (
                <svg
                  className='w-4 h-4 sm:w-6 sm:h-6 text-white'
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
                <span className='text-xs sm:text-base'>{i + 1}</span>
              )}
            </div>
            {i < steps.length - 1 && (
              <div className='flex-1 h-1 bg-gray-300 mx-1 sm:mx-2'>
                {i + 1 < currentStep && (
                  <div className='h-full bg-green-500'></div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
