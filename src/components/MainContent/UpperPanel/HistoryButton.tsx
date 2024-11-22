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
    <div className='flex justify-end h-full '>
      <button
        className={`primary-button uppercase ${
          isDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={onClick}
        disabled={isDisabled}
        aria-label={language === 'fi' ? 'Avaa Historia' : 'Open History'}>
        {language === 'fi' ? 'Historia' : 'History'}
      </button>
    </div>
  );
};

export default HistoryButton;
