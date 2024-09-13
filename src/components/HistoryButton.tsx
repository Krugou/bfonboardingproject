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

  return (
    <div className='flex justify-end w-1/3 mb-4'>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          isDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={onClick}
        disabled={isDisabled}>
        History
      </button>
    </div>
  );
};

export default HistoryButton;
