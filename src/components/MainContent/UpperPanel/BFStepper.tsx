import { QuestionItem } from '@/app/types';
import { useUserContext } from '@/context/UserContext';
import React from 'react';

interface BFStepperProps {
}

const BFStepper: React.FC<BFStepperProps> = () => {
  const { userInfo,questions } = useUserContext();

  if (!userInfo) {
    return null; // or return a loading indicator or a message
  }

  const answeredCount = questions.filter(
    (q) => userInfo.questionAnswers[q.id] !== undefined,
  ).length;
  const progressPercentage = (answeredCount / questions.length) * 100;

  return (
    <div className='w-full max-w-3xl mx-auto px-4 dark:bg-gray-300 dark:text-white'>
      <div className='relative w-full h-4 bg-bf-white dark:bg-gray-700 rounded-full overflow-hidden'>
        <div
          className='absolute top-0 left-0 h-full bg-gradient-to-r from-bf-gradient-1 via-bf-gradient-2 to-bf-gradient-3 dark:from-gray-500 dark:via-gray-400 dark:to-gray-300'
          style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default BFStepper;
