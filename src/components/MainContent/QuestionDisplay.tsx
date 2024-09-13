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
  const {language} = useUserContext();
  const [languageSelection, setLanguageSelection] = useState('en-US');

  useEffect(() => {
    if (language === 'fi') {
      setLanguageSelection('fi-FI');
    } else {
      setLanguageSelection('en-US');
    }
  }, [language]);
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
        <div className='flex flex-col justify-center items-center h-full border-4 border-blue-400 rounded-xl p-6'>
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
