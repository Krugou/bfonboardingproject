import {QuestionItem} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import React from 'react';

interface BFStepperProps {
  questions: QuestionItem[];
}

const BFStepper: React.FC<BFStepperProps> = ({questions}) => {
  const {userInfo} = useUserContext();
  const answeredCount = questions.filter(
    (q) => userInfo.questionAnswers[q.id] !== undefined,
  ).length;
  const progressPercentage = (answeredCount / questions.length) * 100;

  return (
    <div className='w-full max-w-3xl mx-auto px-4'>
      <div className='relative w-full h-4 bg-bf-white rounded-full overflow-hidden'>
        <div
          className='absolute top-0 left-0 h-full bg-gradient-to-r from-bf-gradient-1 via-bf-gradient-2 to-bf-gradient-3'
          style={{width: `${progressPercentage}%`}}></div>
      </div>
      {/* <div className='flex justify-between mt-2'>
        {questions.map((step, i) => {
          const isAnswered = answers[step.id] !== undefined;
          const titleText =
            language === 'fi'
              ? `Klikkaa siirtyäksesi kysymykseen: ${step.question[language]}`
              : `Click to go to question: ${step.question[language]}`;
          return (
            <div
              key={i}
              className={`cursor-pointer ${
                isAnswered ? 'text-green-500 ' : 'text-gray-500'
              }`}
              onClick={() => setCurrentStep(i + 1)}
              title={titleText}>
              {i + 1}
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default BFStepper;
