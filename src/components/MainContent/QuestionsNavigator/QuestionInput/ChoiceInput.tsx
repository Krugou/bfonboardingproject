import {QuestionItem} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import React from 'react';

interface ChoiceInputProps {
  question: QuestionItem;
  language: 'en' | 'fi';
  handleSingleChoiceClick: (option: string) => void;
  handleMultiChoiceClick: (option: string) => void;
}

const ChoiceInput: React.FC<ChoiceInputProps> = ({
  question,
  language,
  handleSingleChoiceClick,
  handleMultiChoiceClick,
}) => {
  const {userInfo} = useUserContext();

  if (!question.answerOptions || !question.answerOptions.length) {
    return <div className='ml-4 p-2 text-red-500'>No options provided</div>;
  }

  const options = question.answerOptions.map((option) => option.text[language]);

  if (question.answerType === 'singleChoice') {
    return (
      <div
        className='ml-4 p-2 flex flex-col justify-center items-center w-full'
        role='group'>
        <div className='mb-2 text-bf-black font-medium text-center'>
          {language === 'fi'
            ? 'Valitse yksi vaihtoehto:'
            : 'Select one option:'}
        </div>
        <div className='flex flex-wrap justify-center w-full gap-4 max-h-96 overflow-y-auto'>
          {options.map((option, index) => (
            <button
              key={index}
              className={` ${
                userInfo?.questionAnswers[question.id] === option.trim()
                  ? 'primary-badge-button-selected '
                  : 'primary-badge-button-unselected'
              }  sm:w-auto text-sm sm:text-lg`}
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
      <div
        className='p-2 ml-4 w-full flex flex-col justify-center items-center'
        role='group'>
        <div className='mb-2 text-bf-black font-medium text-center'>
          {language === 'fi'
            ? 'Valitse yksi tai useampi vaihtoehto'
            : 'Select one or more options from below'}
        </div>
        <div className='flex flex-wrap justify-center w-full gap-4 max-h-96 overflow-y-auto'>
          {options.map((option, index) => (
            <button
              key={index}
              className={`${
                userInfo?.questionAnswers[question.id]?.includes(option.trim())
                  ? 'primary-badge-button-selected '
                  : 'primary-badge-button-unselected'
              } sm:w-auto text-sm sm:text-lg`}
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
