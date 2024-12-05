
import React from 'react';

interface ResetQuestionsDialogProps {
  language: string;
  onReset: () => void;
  onContinue: () => void;
}

/**
 * Dialog component that asks users whether to reset or continue with existing answers
 *
 * @param {ResetQuestionsDialogProps} props - Component props
 * @returns {JSX.Element} The rendered dialog component
 */
const ResetQuestionsDialog: React.FC<ResetQuestionsDialogProps> = ({
  language,
  onReset,
  onContinue,
}) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='w-full bg-bf-brand-primary p-4 rounded-xl'>
        <p className='text-xl font-bold text-white mb-4'>
          {language === 'fi'
            ? 'Olet jo vastannut joihinkin kysymyksiin. Haluatko nollata kysymykset vai jatkaa?'
            : 'You have already answered some questions. Do you want to reset the questions or continue?'}
        </p>
        <div className='flex gap-4 justify-between'>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={onReset}
            aria-label={language === 'fi' ? 'Nollaa kysymykset' : 'Reset Questions'}>
            {language === 'fi' ? 'Nollaa kysymykset' : 'Reset Questions'}
          </button>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={onContinue}
            aria-label={language === 'fi' ? 'Jatka' : 'Continue'}>
            {language === 'fi' ? 'Jatka' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetQuestionsDialog;
