import {useUserContext} from '@/context/UserContext';
import {logEvent} from '@/utils/analytics';
import React, {useEffect, useState} from 'react';
import QuestionDisplay from './QuestionDisplay';
import QuestionsNavigator from './QuestionsNavigator';
import UpperPanel from './UpperPanel';
import LoadingBox from '../LoadingBox';
import ResetQuestionsDialog from './ResetQuestionsDialog';

/**
 * Props for the MainContent component.
 */
interface MainContentProps {
  handleOpenModal: () => void;
}

/**
 * MainContent component that renders the main content area of the application.
 * It includes the UpperPanel, QuestionDisplay, and QuestionsNavigator components.
 *
 * @param {MainContentProps} props - The props for the MainContent component.
 * @returns {JSX.Element} The rendered MainContent component.
 */
const MainContent: React.FC<MainContentProps> = ({handleOpenModal}) => {
  const {
    userInfo,
    setUserInfo,
    language,
    isUnsupportedBusiness,
    isUnsupportedReason,
    currentStep,
    setCurrentStep,
  } = useUserContext();
  const [resetQuestions, setResetQuestions] = useState<boolean | null>(null);
  const [hasExistingAnswers, setHasExistingAnswers] = useState<boolean>(false);

  useEffect(() => {
    // Only check for existing answers during initial page load
    const hasAnswers = !!(
      userInfo?.questionAnswers &&
      Object.keys(userInfo.questionAnswers).length > 0
    );
    setHasExistingAnswers(hasAnswers);

    // Log page view
    logEvent('page_view', {page: 'MainContent'});
  }, []); // Empty dependency array ensures this only runs once
  const handleFullReset = () => {
    setCurrentStep(0);
    handleReset();
  };
  const handleReset = () => {
    //@ts-ignore
    setUserInfo({
      ...userInfo,
      questionAnswers: {},
      isUnsupportedBusiness: false,
    });
    setResetQuestions(true);
  };

  const handleContinue = () => {
    setResetQuestions(false);
  };

  if (!userInfo) {
    return <LoadingBox />;
  }

  if (isUnsupportedBusiness && currentStep !== 0) {
    return (
      <div className='flex justify-center items-center h-screen w-full p-4 bg-bf-gray'>
        <div className='bg-white p-8 rounded-xl shadow-lg max-w-md w-full border-4 border-bf-brand-primary'>
          <h2 className='text-2xl font-bold text-bf-brand-primary mb-6 font-sans'>
            {language === 'fi'
              ? 'Toimiala ei sovellu'
              : 'Unsupported Business Sector'}
          </h2>
          <div className='space-y-6'>
            <p className='text-bf-brand-primary font-sans text-lg'>
              {language === 'fi'
                ? 'Valitettavasti emme voi tarjota rahoitusta tälle toimialalle.'
                : 'Unfortunately, we cannot provide funding for this business sector.'}
            </p>
            {isUnsupportedReason && (
              <div className='bg-bf-gray p-4 rounded-lg'>
                <p className='text-bf-brand-primary font-sans'>
                  <span className='font-bold'>
                    {language === 'fi' ? 'Syy: ' : 'Reason: '}
                  </span>
                  {isUnsupportedReason[language]}
                </p>
              </div>
            )}
            {/* button for reseting questions and unsupported */}
            <button
              onClick={handleFullReset}
              className='bg-bf-brand-primary text-white font-bold py-2 px-4 rounded-lg'>
              {language === 'fi' ? 'Aloita alusta' : 'Start over'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (resetQuestions === null && hasExistingAnswers) {
    return (
      <ResetQuestionsDialog
        language={language}
        onReset={handleReset}
        onContinue={handleContinue}
      />
    );
  }

  return (
    <div className='flex flex-col justify-center items-center  w-full h-full'>
      <main className='w-full h-full flex flex-col shadow-2xl shadow-bf-brand-secondary border-bf-brand-primary border-4 bg-bf-white  rounded-xl  p-4 max-w-screen-lg max-h-min  '>
        <UpperPanel handleOpenModal={handleOpenModal} />
        <QuestionDisplay />
        <QuestionsNavigator />
      </main>
    </div>
  );
};

export default MainContent;
