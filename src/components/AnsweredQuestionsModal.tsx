import {QuestionItem} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import React from 'react';
import AnswersTable from './AnsweredQuestionsModal/AnswersTables';

interface AnsweredQuestionsModalProps {
  open: boolean;
  onClose: () => void;
  questions: QuestionItem[];
  // eslint-disable-next-line no-unused-vars
  setCurrentStep: (step: number) => void;
  currentStep: number;
}

const AnsweredQuestionsModal: React.FC<AnsweredQuestionsModalProps> = ({
  open,
  onClose,
  questions,
  setCurrentStep,
}) => {
  const {userInfo, language} = useUserContext();

  if (!open) return null;

  const answeredQuestions = questions.filter(
    (q) => userInfo.questionAnswers[q.id] !== undefined,
  );

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
      {/* actual content of the modal is below */}
      <div className='bg-white rounded-lg p-6 w-full xl:w-2/3'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>
            {language === 'fi' ? 'Vastatut kysymykset' : 'Answered Questions'}
          </h2>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={onClose}>
            {language === 'fi' ? 'Sulje' : 'Close'}
          </button>
        </div>

        <div className='container p-2'>
          {answeredQuestions.length > 0 ? (
            <AnswersTable
              setCurrentStep={setCurrentStep}
              questions={questions}
            />
          ) : (
            <p className='text-center'>
              {language === 'fi'
                ? 'Ei vastattuja kysymyksiä'
                : 'No answered questions'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnsweredQuestionsModal;
