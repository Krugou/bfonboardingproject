import {QuestionItem} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import React, {useEffect, useState} from 'react';

interface QuestionDisplayProps {
  currentStep: number;
  questions: QuestionItem[];
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  currentStep,
  questions,
}) => {
  const {language, answers} = useUserContext();
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
    const fetchCompanyInfo = async (businessId: string) => {
      try {
        const response = await fetch(
          `https://avoindata.prh.fi/opendata-ytj-api/v3/companies?businessId=${businessId}`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
          },
        );
        const data = await response.json();

        setCompanyInfo(data.companies[0]);
        if (companyInfo) {
          console.log('Company info:', companyInfo);
        }
      } catch (error) {
        console.error('Error fetching company info:', error);
      }
    };

    const currentQuestion = questions[currentStep - 1];
    if (currentQuestion?.id === 'q2') {
      const businessId = answers['q1'];

      if (businessId) {
        fetchCompanyInfo(businessId);
      }
    }
  }, [currentStep, questions, answers]);

  const speakTooltip = (tooltip: string) => {
    if (!tooltip) {
      console.error('Tooltip is empty or undefined');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(tooltip);
    utterance.lang = languageSelection;

    utterance.onstart = () => {
      console.log('Speech synthesis started');
    };

    utterance.onend = () => {
      console.log('Speech synthesis ended');
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event.error);
    };

    speechSynthesis.speak(utterance);
  };

  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className='flex flex-col h-1/2 justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10'>
      {currentStep <= questions.length ? (
        <div className='flex flex-col justify-center items-center h-full  w-full rounded-xl p-6'>
          <div className='flex justify-end w-full items-center rounded-xl'>
            <button
              className='flex justify-center items-center border text-blue-500 hover:text-blue-700 border-blue-500 m-1 p-2 rounded-xl h-6 w-6'
              onClick={() => setShowTooltip(!showTooltip)}>
              <p className='text-xl'>i</p>
            </button>
            <button
              title={
                language === 'fi' ? 'Kuuntele tooltip' : 'Listen to tooltip'
              }
              onClick={() =>
                speakTooltip(questions[currentStep - 1].tooltip[language])
              }
              className='ml-2 p-2 text-blue-500 hover:text-blue-700 whitespace-normal break-all'>
              <VolumeUpIcon fontSize='large' />
            </button>
          </div>
          <div className='group'>
            <h2
              className='text-center w-full h-full font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-bf-brand-primary overflow-wrap break-word'
              title={questions[currentStep - 1].tooltip[language]}>
              {questions[currentStep - 1].question[language]}
            </h2>
            {questions[currentStep - 1].id === 'q2' &&
              companyInfo &&
              currentStep === 2 && (
                <div className='mt-4 font-bold text-bf-brand-primary'>
                  <h3 className='text-xl font-bold text-bf-brand-primary'>
                    {language === 'fi'
                      ? 'Yrityksen tiedot:'
                      : 'Company Information:'}
                  </h3>
                  <p>
                    {language === 'fi' ? 'Y-tunnus: ' : 'Business ID: '}
                    {companyInfo?.businessId?.value}
                  </p>
                  <p>
                    {language === 'fi' ? 'Nimi: ' : 'Name: '}
                    {companyInfo.names[0].name}
                  </p>
                  <p>
                    {language === 'fi' ? 'Osoite: ' : 'Address: '}
                    {companyInfo.addresses[0].street}
                  </p>
                  <p>
                    {language === 'fi' ? 'Verkkosivusto: ' : 'Website: '}
                    {companyInfo.website.url}
                  </p>
                  <p>
                    {language === 'fi'
                      ? 'Päätoimiala: '
                      : 'Main Business Line: '}
                    {companyInfo.mainBusinessLine.descriptions[0].description}
                  </p>
                </div>
              )}
            <h3
              className={`text-center text-bf-brand-primary transition-opacity duration-300 overflow-wrap break-word ${
                showTooltip
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100'
              }`}>
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
