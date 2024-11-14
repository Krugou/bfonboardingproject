import React, {useEffect} from 'react';
import {useUserContext} from '../../context/UserContext';
import QuestionInput from './QuestionsNavigator/QuestionInput';
interface QuestionNavigatorProps {}

const QuestionsNavigator: React.FC<QuestionNavigatorProps> = ({}) => {
  const {
    language,
    setCurrentQuestion,
    setCurrentStep,
    currentStep,
    listeningMode,
    questions,
  } = useUserContext();

  const handleReset = () => {
    setCurrentStep(1);
    setCurrentQuestion(1);
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        // @ts-ignore
        setCurrentStep((prevStep: number) =>
          Math.min(prevStep + 1, questions.length),
        );
        // @ts-ignore
        setCurrentQuestion((prevStep) =>
          Math.min(prevStep + 1, questions.length),
        );
      } else if (event.key === 'ArrowLeft') {
        // @ts-ignore
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
        // @ts-ignore
        setCurrentQuestion((prevStep) => Math.max(prevStep - 1, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setCurrentStep, setCurrentQuestion]);

  return (
    <div className='flex flex-col sm:flex-row h-full justify-center gap-4 items-center p-4 dark:bg-gray-700 dark:text-white'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded disabled:opacity-50 w-full sm:w-auto text-sm sm:text-lg dark:bg-gray-600 dark:hover:bg-gray-800'
        onClick={() => {
          setCurrentStep(currentStep - 1);
          setCurrentQuestion(currentStep - 1);
        }}
        disabled={currentStep === 1}
        aria-label={language === 'fi' ? 'Edellinen' : 'Previous'}
        role='button'>
        {language === 'fi' ? 'Edellinen' : 'Previous'}
      </button>
      {currentStep <= questions.length ? (
        <>
          <div className='w-full sm:w-3/4'>
            <QuestionInput question={questions[currentStep - 1]} />
          </div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded disabled:opacity-50 w-full sm:w-auto text-sm sm:text-lg dark:bg-gray-600 dark:hover:bg-gray-800'
            onClick={() => {
              setCurrentStep(currentStep + 1);
              setCurrentQuestion(currentStep + 1);
            }}
            disabled={currentStep === questions.length}
            aria-label={language === 'fi' ? 'Seuraava' : 'Next'}
            role='button'>
            {language === 'fi' ? 'Seuraava' : 'Next'}
          </button>
        </>
      ) : (
        <button
          className='bg-bf-red hover:bg-red-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded w-full sm:w-auto text-sm sm:text-lg dark:bg-gray-600 dark:hover:bg-gray-800'
          onClick={handleReset}
          aria-label={language === 'fi' ? 'Nollaa' : 'Reset'}
          role='button'>
          {language === 'fi' ? 'Nollaa' : 'Reset'}
        </button>
      )}
    </div>
  );
};

export default QuestionsNavigator;
