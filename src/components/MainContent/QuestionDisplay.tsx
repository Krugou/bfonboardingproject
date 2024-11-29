import {QuestionItem, CompanyInfo} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import {speakContent} from '@/utils/speakContent';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import React, {useState} from 'react';
import {useQuestionsLogic} from '@/hooks/useQuestionsLogic';
import {useCompanyInfo} from '@/hooks/useCompanyInfo';
import {playAudio} from '@/utils/playAudio';

const QuestionDisplay = () => {
  const {language, userInfo, questions, currentStep} = useUserContext();
  const {companyInfo, isLoading} = useCompanyInfo();
  const [showTooltip, setShowTooltip] = useState(false);

  useQuestionsLogic();

  const handleAudioClick = async () => {
    const currentQuestion = questions[currentStep];
    if (!currentQuestion) return;

    const textToSpeak = `${currentQuestion.question[language]}. ${currentQuestion.tooltip[language]}`;

    if (currentQuestion.ttsAudio) {
      try {
        await playAudio(currentQuestion.id + '.wav');
      } catch (error) {
        console.error('Failed to play audio:', error);
        // Fallback to speakContent with proper language
        await speakContent(textToSpeak, language);
      }
    } else {
      // Use text-to-speech with proper language
      await speakContent(textToSpeak, language);
    }
  };

  if (!userInfo) {
    return null;
  }

  return (
    <div className='flex flex-col h-1/2 justify-center items-center p-2 sm:p-4 '>
      {currentStep <= questions.length ? (
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
              title={questions[currentStep].tooltip[language]}
              tabIndex={0}
              aria-live='polite'>
              {questions[currentStep].question[language]}
            </h2>
            {questions[currentStep].id === 'k1.1' && (
              <div className='mt-2 text-sm font-bold text-bf-brand-primary '>
                {isLoading ? (
                  <div
                    role='status'
                    aria-label={
                      language === 'fi' ? 'Ladataan...' : 'Loading...'
                    }>
                    {language === 'fi'
                      ? 'Ladataan yritystietoja...'
                      : 'Loading company information...'}
                  </div>
                ) : companyInfo ? (
                  <div className='space-y-1'>
                    <p>
                      {companyInfo?.businessId?.value && (
                        <>
                          {language === 'fi' ? 'Y-tunnus: ' : 'Business ID: '}
                          {companyInfo.businessId.value}
                        </>
                      )}
                    </p>
                    <p>
                      {companyInfo?.names?.[0]?.name && (
                        <>
                          {language === 'fi' ? 'Nimi: ' : 'Name: '}
                          {companyInfo.names[0].name}
                        </>
                      )}
                    </p>
                    <p>
                      {companyInfo?.addresses?.[0]?.street && (
                        <>
                          {language === 'fi' ? 'Osoite: ' : 'Address: '}
                          {companyInfo.addresses[0].street}
                        </>
                      )}
                    </p>
                    <p>
                      {companyInfo?.website?.url && (
                        <>
                          {language === 'fi' ? 'Verkkosivusto: ' : 'Website: '}
                          {companyInfo.website.url}
                        </>
                      )}
                    </p>
                    <p>
                      {companyInfo?.mainBusinessLine?.descriptions?.[0]
                        ?.description && (
                        <>
                          {language === 'fi'
                            ? 'Päätoimiala: '
                            : 'Main Business Line: '}
                          {
                            companyInfo.mainBusinessLine.descriptions[0]
                              .description
                          }
                        </>
                      )}
                    </p>
                  </div>
                ) : null}
              </div>
            )}
            <h3
              className={`text-center text-sm text-bf-brand-primary transition-opacity duration-300 break-words ${
                showTooltip
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100'
              } `}
              tabIndex={0}
              aria-live='polite'>
              {questions[currentStep].tooltip[language]}
            </h3>
          </div>
        </div>
      ) : (
        <h2 className='text-center text-base sm:text-lg md:text-xl lg:text-2xl '>
          {language === 'fi'
            ? 'Kiitos vastauksistasi!'
            : 'Thank you for your answers!'}
        </h2>
      )}
    </div>
  );
};

export default QuestionDisplay;
