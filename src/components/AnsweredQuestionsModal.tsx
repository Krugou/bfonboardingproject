import {QuestionItem} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import React from 'react';

interface AnsweredQuestionsModalProps {
  open: boolean;
  onClose: () => void;
  questions: QuestionItem[];
  currentStep: number;
  // eslint-disable-next-line no-unused-vars
  setCurrentStep: (step: number) => void;
}

const AnsweredQuestionsModal: React.FC<AnsweredQuestionsModalProps> = ({
  open,
  onClose,
  questions,
  setCurrentStep,
}) => {
  const {userInfo} = useUserContext();
  const {language} = useUserContext();
  if (!open) return null;

  const answeredQuestions = questions.filter(
    (q) => userInfo.questionAnswers[q.id] !== undefined,
  );

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white rounded-lg p-6 w-full xl:w-1/3'>
        <h2 className='text-xl font-bold mb-4'>
          {!language ? 'Answered Questions' : 'Vastatut kysymykset'}
        </h2>
        <div className='mb-4'>
          {answeredQuestions.length > 0 ? (
            <ul className='list-disc list-inside'>
              {answeredQuestions.map((q, index) => (
                <li
                  key={q.id}
                  className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
                  <span className='break-words w-1/3 '>
                    {q.question[language]}
                  </span>
                  <span className='ml-4 text-gray-600 border border-black p-4 rounded-xl'>
                    {userInfo.questionAnswers[q.id]}
                  </span>
                  <button
                    className='ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
                    onClick={() => setCurrentStep(index + 1)}>
                    {!language
                      ? 'Go Back to this Question'
                      : 'Palaa tähän kysymykseen'}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              {' '}
              {language === 'fi'
                ? 'Ei vastattuja kysymyksiä'
                : 'No answered questions'}{' '}
            </p>
          )}
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AnsweredQuestionsModal;
