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

  if (!userInfo) {
    return <LoadingBox />;
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
