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
    userInfo,
  } = useUserContext();

  const handleReset = () => {
    setCurrentStep(1);
    setCurrentQuestion(1);
  };

  const isNextButtonDisabled = () => {
    if (currentStep === questions.length) return true;
    if (!userInfo?.questionAnswers) return true;

    const currentQuestion = questions[currentStep - 1];
    const hasAnswer = !!userInfo.questionAnswers[currentQuestion.id];

    // Special validation for first question (k1)
    if (currentStep === 1) {
      return !hasAnswer || !userInfo.questionAnswers['k1'];
    }

    return !hasAnswer;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setCurrentStep((prevStep: number) =>
          Math.min(prevStep + 1, questions.length),
        );
        setCurrentQuestion((prevStep: number) =>
          Math.min(prevStep + 1, questions.length),
        );
      } else if (event.key === 'ArrowLeft') {
        setCurrentStep((prevStep: number) => Math.max(prevStep - 1, 1));
        setCurrentQuestion((prevStep: number) => Math.max(prevStep - 1, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setCurrentStep, setCurrentQuestion, questions.length]);

  return (
    <div className='flex flex-col sm:flex-row h-full justify-center gap-4 items-center p-4 dark:bg-gray-700 dark:text-white'>
      <button
        className='w-auto secondary-button uppercase'
        onClick={() => {
          setCurrentStep(currentStep - 1);
          setCurrentQuestion(currentStep - 1);
        }}
        disabled={currentStep === 1}
        aria-label={language === 'fi' ? 'Edellinen' : 'Previous'}
        role='button'>
        {language === 'fi' ? 'EDELLINEN' : 'PREVIOUS'}
      </button>
      {currentStep <= questions.length ? (
        <>
          <div className='w-full sm:w-3/4'>
            <QuestionInput question={questions[currentStep - 1]} />
          </div>
          <button
            className={`primary-button w-auto uppercase ${
              isNextButtonDisabled() ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => {
              setCurrentStep(currentStep + 1);
              setCurrentQuestion(currentStep + 1);
            }}
            disabled={isNextButtonDisabled()}
            aria-label={language === 'fi' ? 'Seuraava' : 'Next'}
            role='button'>
            {language === 'fi' ? 'SEURAAVA' : 'NEXT'}
          </button>
        </>
      ) : (
        <button
          className='bg-bf-red hover:bg-red-700 primary-button text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded w-full sm:w-auto text-sm sm:text-lg dark:bg-gray-600 dark:hover:bg-gray-800 uppercase'
          onClick={handleReset}
          aria-label={language === 'fi' ? 'Nollaa' : 'Reset'}
          role='button'>
          {language === 'fi' ? 'NOLLAA' : 'RESET'}
        </button>
      )}
    </div>
  );
};

export default QuestionsNavigator;
