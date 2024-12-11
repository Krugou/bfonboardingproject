import React, {useEffect} from 'react';
import {useUserContext} from '../../context/UserContext';
import QuestionInput from './QuestionsNavigator/QuestionInput';

interface QuestionNavigatorProps {}

const QuestionsNavigator: React.FC<QuestionNavigatorProps> = ({}) => {
  const {
    language,
    setCurrentStep,
    currentStep,
    questions,
    userInfo,
    setUserInfo,
    isUnsupportedBusiness,
  } = useUserContext();

  const handleReset = () => {
    //@ts-ignore
    setUserInfo({
      ...userInfo,
      questionAnswers: {},
      isUnsupportedBusiness: false,
    });
    setCurrentStep(0);
  };

  const isNextButtonDisabled = () => {
    if (currentStep === questions.length) return true;
    if (!userInfo?.questionAnswers) return true;

    const currentQuestion = questions[currentStep];
    const hasAnswer = !!userInfo.questionAnswers[currentQuestion.id];

    // Check for unsupported business on company info step
    if (currentQuestion.id === 'k1.1' && isUnsupportedBusiness) {
      return true;
    }

    // Special validation for first question (k1)
    if (currentStep === 1) {
      return !hasAnswer || !userInfo.questionAnswers['k1'];
    }

    return !hasAnswer;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && !isNextButtonDisabled()) {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, questions.length));
      } else if (event.key === 'ArrowLeft' && currentStep > 1) {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setCurrentStep, questions.length, currentStep, isNextButtonDisabled]);

  return (
    <div className='flex flex-col sm:flex-row h-full justify-center gap-4 items-center p-4'>
      <button
        className={`w-auto secondary-button uppercase ${
          currentStep === 0 ? 'opacity-50 invisible cursor-not-allowed' : ''
        }`}
        onClick={() => {
          if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
          }
        }}
        disabled={currentStep === 0}
        aria-label={language === 'fi' ? 'Edellinen' : 'Previous'}
        role='button'>
        {language === 'fi' ? 'EDELLINEN' : 'PREVIOUS'}
      </button>
      {currentStep < questions.length ? (
        <>
          <div className='w-full sm:w-3/4'>
            <QuestionInput question={questions[currentStep]} />
          </div>
          <button
            className={`primary-button w-auto uppercase ${
              isNextButtonDisabled() ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => {
              if (!isNextButtonDisabled()) {
                setCurrentStep(currentStep + 1);
              }
            }}
            disabled={isNextButtonDisabled()}
            aria-label={language === 'fi' ? 'Seuraava' : 'Next'}
            role='button'>
            {language === 'fi' ? 'SEURAAVA' : 'NEXT'}
          </button>
        </>
      ) : (
        <button
          className='bg-bf-red rounded-full hover:bg-red-700 primary-button text-white font-bold py-2 sm:py-3 px-4 sm:px-6  w-full sm:w-auto text-sm sm:text-lg  uppercase'
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
