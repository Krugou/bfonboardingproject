import {useUserContext} from '@/context/UserContext';
import {speakContent} from '@/utils/speakContent';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import React, {useState, useEffect} from 'react';
import {useQuestionsLogic} from '@/hooks/useQuestionsLogic';
import {playAudio} from '@/utils/playAudio';
import LoadingBox from '../LoadingBox';
import {toast} from 'react-toastify';
import {notAcceptedBusinessLines, BusinessLine} from '@/data/noBusinessLines';
import CompanyInfoDisplay from './CompanyInfoDisplay';
import {fetchUserInfoOpenAI} from '@/hooks/api';
import CompletionMessage from './CompletionMessage';

interface Question {
  id: string;
  question: Record<string, string>;
  tooltip: Record<string, string>;
  ttsAudio?: boolean;
}
interface MainBusinessLine {
  type: string;
  descriptions: {description: string}[];
}
interface CompanyInfo {
  businessId: {value: string};
  names?: {name: string}[];
  addresses?: {street: string}[];
  website?: {url: string};
  mainBusinessLine: MainBusinessLine;
  registrationDate?: string;
}
const QuestionDisplay = () => {
  const {
    language,
    userInfo,
    questions,
    currentStep,
    isLoading,
    companyInfo,
    fetchCompanyData,
  } = useUserContext();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [profileAnalysis, setProfileAnalysis] = useState<string | null>(null);

  useQuestionsLogic();

  useEffect(() => {
    const currentQuestion = questions[currentStep];
    if (currentQuestion?.id === 'k1.1') {
      fetchCompanyData();
    }
  }, [currentStep]);

  const handleAudioClick = async () => {
    const currentQuestion = questions[currentStep];
    if (currentQuestion.ttsAudio) {
      // If question has TTS audio file, play it
      try {
        await playAudio(questions[currentStep].id + '-' + language + '.wav');
      } catch (error) {
        console.error('Failed to play audio:', error);
        // Fallback to speakContent if audio playback fails
        speakContent(
          currentQuestion.question[language] +
            ' ' +
            currentQuestion.tooltip[language],
        );
      }
    } else {
      // Use text-to-speech as fallback
      speakContent(
        currentQuestion.question[language] +
          ' ' +
          currentQuestion.tooltip[language],
      );
    }
  };

  const handleFetchingUserInfo = async () => {
    if (!userInfo?.questionAnswers) {
      toast.error('No user information available');
      return;
    }

    try {
      setIsProcessing(true);
      const response = await fetchUserInfoOpenAI(
        userInfo.questionAnswers,
        'password',
      );

      if (response) {
        // @ts-expect-error
        setProfileAnalysis(response);
        toast.success('Profile analysis completed successfully');
      }
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      toast.error(
        language === 'fi'
          ? 'Virhe profiilin analysoinnissa'
          : 'Error analyzing profile',
      );
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (
      currentStep === questions.length &&
      !isProcessing &&
      currentStep === 25
    ) {
      handleFetchingUserInfo();
    }
  }, [currentStep, questions.length]);

  if (!userInfo) {
    return null;
  }
  if (isLoading) {
    return <LoadingBox />;
  }
  return (
    <div className='flex flex-col h-1/2 justify-center items-center p-2 sm:p-4 '>
      {currentStep < questions.length ? (
        <div className='flex flex-col justify-center items-center h-full w-full rounded-lg p-3 '>
          <div className='flex justify-end w-full items-center rounded-lg mb-2'>
            <button
              className='flex justify-center items-center border text-bf-brand-primary border-blue-500 mx-1 p-1 rounded-lg h-5 w-5'
              onClick={() => setShowTooltip(!showTooltip)}
              aria-label={language === 'fi' ? 'Näytä tooltip' : 'Show tooltip'}
              role='button'>
              <p className='text-sm'>i</p>
            </button>
            <button
              title={
                language === 'fi' ? 'Kuuntele tooltip' : 'Listen to tooltip'
              }
              onClick={handleAudioClick}
              className='p-2 text-bf-brand-primary'
              aria-label={
                language === 'fi' ? 'Kuuntele tooltip' : 'Listen to tooltip'
              }
              role='button'>
              <VolumeUpIcon fontSize='small' />
            </button>
          </div>
          <div className='group space-y-2'>
            <h2
              className='text-center w-full font-medium text-base lg:text-lg text-bf-brand-primary break-words'
              title={questions[currentStep]?.tooltip[language]}
              tabIndex={0}
              aria-live='polite'>
              {questions[currentStep]?.question[language]}
            </h2>
            {questions[currentStep]?.id === 'k1.1' && (
              <CompanyInfoDisplay
                isLoading={isLoading}
                // @ts-expect-error
                companyInfo={companyInfo}
              />
            )}
            <h3
              className={`text-center text-sm text-bf-brand-primary transition-opacity duration-300 break-words ${
                showTooltip
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100'
              } `}
              tabIndex={0}
              aria-live='polite'>
              {questions[currentStep]?.tooltip[language]}
            </h3>
          </div>
        </div>
      ) : (
        <CompletionMessage profileAnalysis={profileAnalysis} />
      )}
      {isProcessing && <LoadingBox />}
    </div>
  );
};

export default QuestionDisplay;
