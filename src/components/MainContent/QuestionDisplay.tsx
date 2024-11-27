import {QuestionItem, CompanyInfo} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import {fetchCompanyInfo} from '@/hooks/api';
import {speakContent} from '@/utils/speakContent';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import React, {useEffect, useState} from 'react';
import {toast} from 'react-toastify';

const QuestionDisplay = () => {
  const {language, userInfo, questions, currentStep, setCurrentStep} =
    useUserContext();
  const [languageSelection, setLanguageSelection] = useState('en-US');
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (language === 'fi') {
      setLanguageSelection('fi-FI');
    } else {
      setLanguageSelection('en-US');
    }
  }, [language]);

  useEffect(() => {
    const fetchCompanyData = async () => {
      if (!userInfo?.questionAnswers['k1']) {
        return;
      }

      // Only fetch if we're on the company info step (k1.1)
      const currentQuestion = questions[currentStep];
      if (currentQuestion?.id !== 'k1.1') {
        return;
      }

      try {
        setIsLoading(true);
        const businessId = userInfo.questionAnswers['k1'];
        const data = await fetchCompanyInfo(businessId);

        if (data) {
          // @ts-expect-error
          setCompanyInfo(data);
          toast.success(
            language === 'fi'
              ? 'Yrityksen tiedot haettu onnistuneesti'
              : 'Company information fetched successfully',
          );
        }
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

    fetchCompanyData();
  }, [currentStep, questions, userInfo, language]);

  useEffect(() => {
    // Check if the current question is k1.1 and the answer is 'no'
    if (
      questions[currentStep]?.id === 'k1.1' &&
      userInfo?.questionAnswers['k1.1'] === 'No'
    ) {
      // Go back to question 0
      setCurrentStep(0);
      // Clear the answer
      if (userInfo?.questionAnswers) {
        delete userInfo.questionAnswers['k1.1'];
      }
      toast.info(
        language === 'fi' ? 'Palataan alkuun' : 'Going back to the beginning',
      );
    }
  }, [
    userInfo?.questionAnswers,
    currentStep,
    language,
    setCurrentStep,
    questions,
  ]);

  const [showTooltip, setShowTooltip] = useState(false);
  if (!userInfo) {
    return null;
  }

  return (
    <div className='flex flex-col h-1/2 justify-center items-center p-2 sm:p-4 dark:bg-gray-700 dark:text-white'>
      {currentStep <= questions.length ? (
        <div className='flex flex-col justify-center items-center h-full w-full rounded-lg p-3 dark:bg-gray-600 dark:text-white'>
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
              onClick={() => {
                speakContent(
                  questions[currentStep].question[language] +
                    ' ' +
                    questions[currentStep].tooltip[language],
                  languageSelection,
                  toast,
                );
              }}
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
              <div className='mt-2 text-sm font-bold text-bf-brand-primary dark:text-white'>
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
              } dark:text-white`}
              tabIndex={0}
              aria-live='polite'>
              {questions[currentStep].tooltip[language]}
            </h3>
          </div>
        </div>
      ) : (
        <h2 className='text-center text-base sm:text-lg md:text-xl lg:text-2xl dark:text-white'>
          {language === 'fi'
            ? 'Kiitos vastauksistasi!'
            : 'Thank you for your answers!'}
        </h2>
      )}
    </div>
  );
};

export default QuestionDisplay;
