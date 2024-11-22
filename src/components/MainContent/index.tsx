import {useUserContext} from '@/context/UserContext';
import {logEvent} from '@/utils/analytics';
import React, {useEffect, useState} from 'react';
import QuestionDisplay from './QuestionDisplay';
import QuestionsNavigator from './QuestionsNavigator';
import UpperPanel from './UpperPanel';

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
  const {userInfo, setUserInfo, language} = useUserContext();
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

  const handleReset = () => {
    //@ts-ignore
    setUserInfo({...userInfo, questionAnswers: {}});
    setResetQuestions(true);
  };

  const handleContinue = () => {
    setResetQuestions(false);
  };

  // Modified condition to show dialog
  if (resetQuestions === null && hasExistingAnswers) {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='w-full bg-bf-brand-primary dark:bg-gray-800 p-4 rounded-xl'>
          <p className='text-xl font-bold text-white mb-4'>
            {language === 'fi'
              ? 'Olet jo vastannut joihinkin kysymyksiin. Haluatko nollata kysymykset vai jatkaa?'
              : 'You have already answered some questions. Do you want to reset the questions or continue?'}
          </p>
          <div className='flex gap-4 justify-between'>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
              onClick={handleReset}>
              {language === 'fi' ? 'Nollaa kysymykset' : 'Reset Questions'}
            </button>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={handleContinue}>
              {language === 'fi' ? 'Jatka' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
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
