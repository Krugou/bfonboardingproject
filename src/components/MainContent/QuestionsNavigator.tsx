import React from 'react';
import {useUserContext} from '../../context/UserContext';
import questions from '../../data/mockdata';
import QuestionInput from './QuestionsNavigator/QuestionInput';
interface QuestionNavigatorProps {
  currentStep: number;
  // eslint-disable-next-line no-unused-vars
  setCurrentStep: (step: number) => void;
  listeningMode: boolean;
}

const QuestionsNavigator: React.FC<QuestionNavigatorProps> = ({
  currentStep,
  setCurrentStep,
  listeningMode,
}) => {
  const handleReset = () => {
    setCurrentStep(1);
  };
  const {language} = useUserContext();
  return (
    <div className='flex flex-col sm:flex-row h-full justify-center gap-4 items-center p-4'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded disabled:opacity-50 w-full sm:w-auto text-sm sm:text-lg'
        onClick={() => setCurrentStep(currentStep - 1)}
        disabled={currentStep === 1}>
        {language === 'fi' ? 'Edellinen' : 'Previous'}
      </button>
      {currentStep <= questions.length ? (
        <>
          <div className='w-full sm:w-3/4'>
            <QuestionInput
              question={questions[currentStep - 1]}
              listeningMode={listeningMode}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          </div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded disabled:opacity-50 w-full sm:w-auto text-sm sm:text-lg'
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={currentStep === questions.length}>
            {language === 'fi' ? 'Seuraava' : 'Next'}
          </button>
        </>
      ) : (
        <button
          className='bg-bf-red hover:bg-red-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded w-full sm:w-auto text-sm sm:text-lg'
          onClick={handleReset}>
          {language === 'fi' ? 'Nollaa' : 'Reset'}
        </button>
      )}
    </div>
  );
};

export default QuestionsNavigator;
