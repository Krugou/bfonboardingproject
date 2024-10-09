import { QuestionItem } from '@/app/types';
import { useUserContext } from '@/context/UserContext';
import React from 'react';
import AnswersTable from './AnswersTables';

interface AnsweredQuestionsModalProps {
  open: boolean;
  onClose: () => void;
  questions: QuestionItem[];
  currentStep: number;

  setCurrentStep: (step: number) => void;
}

const AnsweredQuestionsModal: React.FC<AnsweredQuestionsModalProps> = ({
  open,
  onClose,
  questions,
  setCurrentStep,
}) => {
  const { userInfo, language } = useUserContext();

  if (!open) return null;

 
  const answeredQuestions = questions.filter(
    (q) => userInfo.questionAnswers[q.id] !== undefined
  );

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white rounded-lg p-6 w-full xl:w-2/3'>
        {/* Header Section */}
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>
            {language === 'fi' ? 'Vastatut kysymykset' : 'Answered Questions'}
          </h2>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={onClose}
          >
            {language === 'fi' ? 'Sulje' : 'Close'}
          </button>
        </div>

        {/* Displaying the Answers Table */}
        <div className='container p-2'>
          {answeredQuestions.length > 0 ? (
            <AnswersTable questions={questions} />
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
