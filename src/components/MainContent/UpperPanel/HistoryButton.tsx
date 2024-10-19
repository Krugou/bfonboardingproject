import {useUserContext} from '@/context/UserContext';
import React from 'react';
interface HistoryButtonProps {
  currentStep: number;
  onClick: () => void;
}

const HistoryButton: React.FC<HistoryButtonProps> = ({
  currentStep,
  onClick,
}) => {
  const isDisabled = currentStep === 1;
  const {language} = useUserContext();
  return (
    <div className='flex justify-end w-1/3 h-full mb-4'>
      <button
        className={`bg-blue-500   hover:bg-blue-700 text-white font-bold p-4 rounded ${
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
