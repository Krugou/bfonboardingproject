import { useUserContext } from '@/context/UserContext';
import React from 'react';
interface HistoryButtonProps {
  onClick: () => void;
}

const HistoryButton: React.FC<HistoryButtonProps> = ({
  onClick,
}) => {
  const {language,currentStep} = useUserContext();
  const isDisabled = currentStep === 1;
  return (
    <div className='flex justify-end w-1/3 h-full mb-4 dark:bg-gray-200 dark:text-white'>
      <button
        className={`bg-blue-500 dark:bg-gray-700 hover:bg-blue-700 dark:hover:bg-gray-900 text-white font-bold p-4 rounded ${
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
