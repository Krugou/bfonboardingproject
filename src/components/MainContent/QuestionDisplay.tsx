import { QuestionItem } from '@/app/types';
import { useUserContext } from '@/context/UserContext';
import { fetchCompanyInfo } from '@/hooks/api';
import { speakContent } from '@/utils/speakContent';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface QuestionDisplayProps {
}
const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
}) => {
  const {language, userInfo, questions,currentStep} = useUserContext();
  const [languageSelection, setLanguageSelection] = useState('en-US');
  const [companyInfo, setCompanyInfo] = useState<any>(null);

  useEffect(() => {
    if (language === 'fi') {
      setLanguageSelection('fi-FI');
    } else {
      setLanguageSelection('en-US');
    }
  }, [language]);

  useEffect(() => {
    if (!userInfo) {
      return;
    }
    const companyInfo = fetchCompanyInfo(userInfo.questionAnswers['k1']);
    setCompanyInfo(companyInfo);

    const currentQuestion = questions[currentStep - 1];
    if (currentQuestion?.id === 'k2') {
      const businessId = userInfo.questionAnswers['k1'];

      if (businessId) {
        fetchCompanyInfo(businessId);
      }
    }
  }, [currentStep, questions]);

  const [showTooltip, setShowTooltip] = useState(false);
  if (!userInfo) {
    return null;
  }

  return (
    <div className='flex flex-col h-1/2 justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10'>
      {currentStep <= questions.length ? (
        <div className='flex flex-col justify-center items-center h-full  w-full rounded-xl p-6'>
          <div className='flex justify-end w-full items-center rounded-xl'>
            <button
              className='flex justify-center items-center border text-blue-500 hover:text-blue-700 border-blue-500 m-1 p-2 rounded-xl h-6 w-6'
              onClick={() => setShowTooltip(!showTooltip)}
              aria-label={language === 'fi' ? 'Näytä tooltip' : 'Show tooltip'}
              role='button'>
              <p className='text-xl'>i</p>
            </button>
            <button
              title={
                language === 'fi' ? 'Kuuntele tooltip' : 'Listen to tooltip'
              }
              onClick={() => {
                speakContent(
                  questions[currentStep - 1].question[language] +
                    ' ' +
                    questions[currentStep - 1].tooltip[language],
                  languageSelection,
                  toast,
                )



              }
              }
              className='ml-2 p-2 text-blue-500 hover:text-blue-700 whitespace-normal break-all'
              aria-label={language === 'fi' ? 'Kuuntele tooltip' : 'Listen to tooltip'}
              role='button'>
              <VolumeUpIcon fontSize='large' />
            </button>
          </div>
          <div className='group'>
            <h2
              className='text-center w-full h-full font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-bf-brand-primary overflow-wrap break-word'
              title={questions[currentStep - 1].tooltip[language]}
              tabIndex={0}
              aria-live='polite'>
              {questions[currentStep - 1].question[language]}
            </h2>
            {questions[currentStep - 1].id === 'k2' &&
              companyInfo &&
              currentStep === 2 && (
                <div className='mt-4 font-bold text-bf-brand-primary'>
                  <h3 className='text-xl font-bold text-bf-brand-primary'>
                    {language === 'fi'
                      ? 'Yrityksen tiedot:'
                      : 'Company Information:'}
                  </h3>
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
              )}
            <h3
              className={`text-center text-bf-brand-primary transition-opacity duration-300 overflow-wrap break-word ${
                showTooltip
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100'
              }`}
              tabIndex={0}
              aria-live='polite'>
              {questions[currentStep - 1].tooltip[language]}
            </h3>
          </div>
        </div>
      ) : (
        <h2 className='text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl'>
          {language === 'fi'
            ? 'Kiitos vastauksistasi!'
            : 'Thank you for your answers!'}
        </h2>
      )}
    </div>
  );
};

export default QuestionDisplay;
