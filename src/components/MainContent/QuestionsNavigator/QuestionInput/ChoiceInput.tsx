import { QuestionItem } from '@/app/types';
import { useUserContext } from '@/context/UserContext';
import React from 'react';

interface ChoiceInputProps {
  question: QuestionItem;
  language: string;

  // eslint-disable-next-line no-unused-vars
  handleSingleChoiceClick: (option: string) => void;
  // eslint-disable-next-line no-unused-vars
  handleMultiChoiceClick: (option: string) => void;
}

const ChoiceInput: React.FC<ChoiceInputProps> = ({
  question,
  language,
  handleSingleChoiceClick,
  handleMultiChoiceClick,
}) => {
  const { userInfo } = useUserContext();
  if (!question.answerOptions || !question.answerOptions[language]) {
    return <div className='ml-4 p-2 text-red-500'>No options provided</div>;
  }
  const options = question.answerOptions[language].split('#');

  if (question.answerType === 'singleChoice') {
    return (
      <div className='ml-4 p-2 flex flex-col justify-center items-center w-full' role='group'>
        <div className='mb-2 text-gray-700 text-center'>
          {language === 'fi'
            ? ' Valitse yksi vaihtoehto:'
            : ' Select one option:'}
        </div>
        <div className='flex flex-wrap justify-center w-full   max-h-96 overflow-y-auto'>
          {options.map((option, index) => (
            <button
              key={index}
              className={`p-2 sm:p-4 m-1 sm:m-2 border rounded ${
                userInfo?.questionAnswers[question.id] === option.trim()
                  ? 'bg-green-500 text-white'
                  : 'border-gray-300'
              } w-full sm:w-auto text-sm sm:text-lg`}
              onClick={() => handleSingleChoiceClick(option.trim())}
              aria-label={`Select ${option.trim()}`}
              role='button'>
              {option.trim()}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (question.answerType === 'multiChoice') {
    return (
      <div className='p-2 ml-4 w-full flex flex-col justify-center items-center' role='group'>
        <div className='mb-2 text-gray-700 text-center'>
          {language === 'fi'
            ? 'Valitse yksi tai useampi vaihtoehto'
            : 'Select one or more options from below'}
        </div>
        <div className='flex flex-wrap justify-center w-full  max-h-96 overflow-y-auto'>
          {options.map((option, index) => (
            <button
              key={index}
              className={`p-2 m-1 border sm:m-2 rounded ${
                userInfo?.questionAnswers[question.id]?.includes(option.trim())
                  ? 'bg-green-500 text-white'
                  : 'border-gray-300'
              } w-full sm:w-auto text-sm sm:text-lg`}
              onClick={() => handleMultiChoiceClick(option.trim())}
              aria-label={`Select ${option.trim()}`}
              role='button'>
              {option.trim()}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default ChoiceInput;
