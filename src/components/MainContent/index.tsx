import LoadingElement from '@/components/LoadingElement';
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
  const {questions, userInfo, setUserInfo, language} = useUserContext();
  const [resetQuestions, setResetQuestions] = useState<boolean | null>(null);

  const handleReset = () => {
    //@ts-ignore
    setUserInfo({...userInfo, questionAnswers: {}});
    setResetQuestions(true);
  };

  const handleContinue = () => {
    setResetQuestions(false);
  };

  useEffect(() => {
    logEvent('page_view', {page: 'MainContent'});
  }, []);

  if (!questions.length) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <LoadingElement />
        <p className='text-2xl font-bold text-gray-700'>
          {language === 'fi'
            ? 'Kirjaudu sisään aloittaaksesi'
            : 'Please login to start'}
        </p>
      </div>
    );
  }

  if (
    resetQuestions === null &&
    userInfo &&
    userInfo.questionAnswers &&
    Object.keys(userInfo.questionAnswers).length > 0
  ) {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <p className='text-xl font-bold text-gray-700 mb-4'>
          {language === 'fi'
            ? 'Olet jo vastannut joihinkin kysymyksiin. Haluatko nollata kysymykset vai jatkaa?'
            : 'You have already answered some questions. Do you want to reset the questions or continue?'}
        </p>
        <div className='flex space-x-4'>
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
    );
  }

  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <main className='w-full h-full flex flex-col shadow-xl border-blue-400 border-4 bg-gray-100 rounded-xl m-10 p-4 max-w-screen-lg max-h-min transition-all duration-500 ease-in-out transform hover:scale-105'>
        <UpperPanel handleOpenModal={handleOpenModal} />
        <QuestionDisplay />
        <QuestionsNavigator />
      </main>
    </div>
  );
};

export default MainContent;
