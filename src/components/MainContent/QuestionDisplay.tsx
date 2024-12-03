import {useUserContext} from '@/context/UserContext';
import {speakContent} from '@/utils/speakContent';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import React, {useState, useEffect} from 'react';
import {useQuestionsLogic} from '@/hooks/useQuestionsLogic';
import {fetchCompanyInfo} from '@/hooks/api';
import {playAudio} from '@/utils/playAudio';
import LoadingBox from '../LoadingBox';
import {toast} from 'react-toastify';
import {CompanyInfo} from '@/types/user';
import {notAcceptedBusinessLines} from '@/data/noBusinesssLines';

const QuestionDisplay = () => {
  const {
    language,
    userInfo,
    questions,
    currentStep,
    setUserInfo,
    isLoading,
    setIsLoading,
    setIsUnsupportedBusiness,
    isUnsupportedBusiness,
  } = useUserContext();
  const [showTooltip, setShowTooltip] = useState(false);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [unsupportedReason, setUnsupportedReason] = useState<string | null>(
    null,
  );

  useQuestionsLogic();

  // New function to handle company info fetching
  const fetchCompanyData = async () => {
    const businessId = userInfo?.questionAnswers['k1'];
    if (!businessId) return;
    setIsLoading(true);

    const currentQuestion = questions[currentStep];
    if (currentQuestion?.id !== 'k1.1') {
      setCompanyInfo(null);
      setIsUnsupportedBusiness(false);
      return;
    }

    try {
      const data = await fetchCompanyInfo(businessId);

      if (!data) {
        throw new Error('Company information not found');
      }

      // Check if business line is not supported
      const businessLineCode = data.mainBusinessLine;
      const unsupportedLine:
        | {code: string; descriptionFi: string; descriptionEn: string}
        | undefined = notAcceptedBusinessLines.find(
        (line: {code: string; descriptionFi: string; descriptionEn: string}) =>
          line.code === businessLineCode,
      );

      const isUnsupported = !!unsupportedLine;
      setIsUnsupportedBusiness(isUnsupported);
      setUnsupportedReason(
        unsupportedLine
          ? language === 'fi'
            ? unsupportedLine.descriptionFi
            : unsupportedLine.descriptionEn
          : null,
      );

      setCompanyInfo(data);
      setUserInfo((prev) => ({
        ...prev!,
        companyInfoResult: {
          ...data,
          registrationDate: data.registrationDate || new Date(),
          createdAt: data.createdAt || new Date(),
        },
      }));

      toast.success(
        language === 'fi'
          ? 'Yrityksen tiedot haettu onnistuneesti'
          : 'Company information fetched successfully',
      );
    } catch (error) {
      toast.error(
        language === 'fi'
          ? 'Virhe yritystietojen haussa'
          : 'Error fetching company information',
      );
      console.error('Error fetching company data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanyData();
  }, [currentStep]);

  const handleAudioClick = async () => {
    const currentQuestion = questions[currentStep];
    console.log('currentQuestion', currentQuestion);
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

  if (!userInfo) {
    return null;
  }
  if (isLoading) {
    <LoadingBox />;
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
                    {isUnsupportedBusiness && (
                      <div className='mt-4 space-y-2 text-red-600'>
                        <p>
                          {language === 'fi'
                            ? 'Valitettavasti emme voi tarjota rahoitusta tälle toimialalle.'
                            : 'Unfortunately, we cannot provide funding for this business sector.'}
                        </p>
                        {unsupportedReason && (
                          <p className='text-xs'>
                            {language === 'fi' ? 'Syy: ' : 'Reason: '}
                            {unsupportedReason}
                          </p>
                        )}
                      </div>
                    )}
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
