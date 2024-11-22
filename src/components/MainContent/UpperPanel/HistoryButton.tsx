import {useUserContext} from '@/context/UserContext';
import React from 'react';

interface HistoryButtonProps {
  onClick: () => void;
}

const HistoryButton: React.FC<HistoryButtonProps> = ({onClick}) => {
  const {language, userInfo} = useUserContext();
  const isDisabled =
    !userInfo?.questionAnswers ||
    Object.keys(userInfo.questionAnswers).length === 0;

  return (
    <div className='flex justify-end h-full dark:bg-gray-200 dark:text-white'>
      <button
        className={`primary-button ${
          isDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={onClick}
        disabled={isDisabled}
        aria-label='Open history modal'>
        {language === 'fi' ? 'Historia' : 'History'}
      </button>
    </div>
  );
};

export default HistoryButton;
