import {QuestionItem} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import Slider from '@mui/material/Slider';
import React, {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
interface QuestionInputProps {
  question: QuestionItem;
  listeningMode: boolean;
  // eslint-disable-next-line no-unused-vars
  setCurrentStep: (step: number) => void;
  currentStep: number;
}
interface SpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  // eslint-disable-next-line no-unused-vars
  onresult: (event: any) => void;
  start: () => void;
  stop: () => void;
}
const QuestionInput: React.FC<QuestionInputProps> = ({
  question,
  listeningMode,
  setCurrentStep,
  currentStep,
}) => {
  const {answers, setAnswer} = useUserContext();
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const {language} = useUserContext();
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(
    null,
  );
  const [transcriptContent, setTranscriptContent] = useState<string>('');
  useEffect(() => {
    if (answers[question.id]) {
      const answer = answers[question.id];
      if (question.answerType === 'slider') {
        setSliderValue(answer);
      } else if (question.answerType === 'singleChoice') {
        setSelectedAnswer(answer);
      } else if (question.answerType === 'multiChoice') {
        setSelectedAnswers(answer);
      }
    }
  }, [answers, question]);

  useEffect(() => {
    const SpeechRecognition =
      // @ts-ignore
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      try {
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = true;
        recognitionInstance.interimResults = false;
        recognitionInstance.lang = language === 'fi' ? 'fi-FI' : 'en-US';

        recognitionInstance.onstart = () => {
          toast.info('Speech recognition started');
        };

        recognitionInstance.onend = () => {
          toast.info('Speech recognition ended');
        };

        recognitionInstance.onerror = (event: any) => {
          toast.error(`Speech recognition error: ${event.error}`);
        };

        recognitionInstance.onresult = (event: any) => {
          try {
            const transcript =
              event.results[event.results.length - 1][0].transcript.trim();
            handleVoiceCommand(transcript);
            setTranscriptContent(transcript);
            toast.success(`Transcript: ${transcript}`);
          } catch (error) {
            toast.error(`Error processing speech recognition result: ${error}`);
          }
        };

        setRecognition(recognitionInstance);
      } catch (error) {
        toast.error(`Error initializing SpeechRecognition: ${error}`);
      }
    } else {
      toast.error('SpeechRecognition is not supported in this browser.');
    }
  }, [language]);

  const handleVoiceCommand = (command: string) => {
    if (language === 'fi') {
      if (command.toLowerCase() === 'seuraava') {
        setCurrentStep(currentStep + 1);
        return;
      } else if (command.toLowerCase() === 'edellinen') {
        setCurrentStep(currentStep - 1);
        return;
      } else if (command.toLowerCase() === 'nollaa') {
        setCurrentStep(1);
        return;
      }
    } else {
      if (command.toLowerCase() === 'next') {
        setCurrentStep(currentStep + 1);
        return;
      } else if (command.toLowerCase() === 'previous') {
        setCurrentStep(currentStep - 1);
        return;
      } else if (command.toLowerCase() === 'reset') {
        setCurrentStep(1);
        return;
      }
    }
    if (question.answerType === 'singleChoice') {
      const option = question.answerOptions?.[language]
        ?.split(',')
        .find((opt) => opt.trim().toLowerCase() === command.toLowerCase());
      if (option) {
        handleSingleChoiceClick(option.trim());
      }
    } else if (question.answerType === 'multiChoice') {
      const option = question.answerOptions?.[language]
        .split(',')
        .find((opt) => opt.trim().toLowerCase() === command.toLowerCase());
      if (option) {
        handleMultiChoiceClick(option.trim());
      }
    } else if (question.answerType === 'slider') {
      const value = parseInt(command, 10);
      if (!isNaN(value) && value >= 0 && value <= 100) {
        handleSliderChange(value);
      }
    } else if (question.answerType === 'directInput') {
      setAnswer(question.id, command);
    }
  };

  const handleSingleChoiceClick = (option: string) => {
    setSelectedAnswer(option);
    setAnswer(question.id, option);
  };

  const handleMultiChoiceClick = (option: string) => {
    setSelectedAnswers((prevSelected) => {
      const newSelected = prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option];
      setAnswer(question.id, newSelected);
      return newSelected;
    });
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    setAnswer(question.id, value);
  };
  useEffect(() => {
    if (listeningMode) {
      startListening();
    } else {
      stopListening();
    }
  }, [listeningMode]);

  const startListening = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  const renderInput = () => {
    switch (question.answerType) {
      case 'directInput':
        return (
          <div className='flex flex-col sm:flex-row p-2 justify-center items-center w-full'>
            <input
              type='text'
              className='p-2 sm:p-4 border border-gray-300 rounded w-full sm:w-3/4 lg:w-1/2'
              placeholder={question.syntaxPlaceholder[language]}
              value={answers[question.id] || ''}
              onChange={(e) => setAnswer(question.id, e.target.value)}
            />
          </div>
        );
      case 'slider':
        if (!question.answerOptions || !question.answerOptions[language]) {
          return (
            <div className='ml-4 p-2 text-red-500'>No options provided</div>
          );
        }
        // eslint-disable-next-line no-case-declarations
        const [min, max, step, unit] = question.answerOptions[language]
          .split(',')
          .map(Number);
        return (
          <div className='flex p-2 flex-col sm:flex-row items-center w-full'>
            <Slider
              title='slider'
              className='w-full sm:w-3/4 p-4'
              min={min}
              max={max}
              step={step}
              value={sliderValue}
              onChange={(e, value) => handleSliderChange(value as number)}
              valueLabelDisplay='auto'
              marks
            />
            <span className='mt-2 sm:mt-0 sm:ml-4 text-lg'>
              {sliderValue} {unit && unit}
            </span>
          </div>
        );
      case 'singleChoice': {
        if (!question.answerOptions || !question.answerOptions[language]) {
          return (
            <div className='ml-4 p-2 text-red-500'>No options provided</div>
          );
        }
        return (
          <div className='ml-4 p-2 flex flex-col justify-center items-center w-full'>
            <div className='mb-2 text-gray-700 text-center'>
              {language === 'fi'
                ? ' Valitse yksi vaihtoehto:'
                : ' Select one option:'}
            </div>
            <div className='flex flex-wrap justify-center w-full sm:w-3/4 lg:w-1/2'>
              {question.answerOptions[language]
                .split(',')
                .map((option, index) => (
                  <button
                    key={index}
                    className={`p-2 sm:p-4 m-1 sm:m-2 border rounded ${
                      selectedAnswer === option.trim()
                        ? 'bg-green-500 text-white'
                        : 'border-gray-300'
                    } w-full sm:w-auto text-sm sm:text-lg`}
                    onClick={() => handleSingleChoiceClick(option.trim())}>
                    {option.trim()}
                  </button>
                ))}
            </div>
          </div>
        );
      }
      case 'multiChoice': {
        if (!question.answerOptions || !question.answerOptions[language]) {
          return (
            <div className='ml-4 p-2 text-red-500'>
              {' '}
              {language === 'fi' ? 'Ei vaihtoehtoja' : 'No options provided'}
            </div>
          );
        }
        return (
          <div className=' p-2 ml-4 w-full flex flex-col justify-center items-center'>
            <div className='mb-2 text-gray-700 text-center'>
              {language === 'fi'
                ? 'Valitse yksi tai useampi vaihtoehto'
                : 'Select one or more options from below'}
            </div>
            <div className='flex flex-wrap justify-center w-full sm:w-3/4 lg:w-1/2'>
              {question.answerOptions[language]
                .split(',')
                .map((option, index) => (
                  <button
                    key={index}
                    className={`p-2 m-1 border sm:m-2 rounded ${
                      selectedAnswers.includes(option.trim())
                        ? 'bg-green-500 text-white'
                        : 'border-gray-300'
                    } w-full sm:w-auto text-sm sm:text-lg`}
                    onClick={() => handleMultiChoiceClick(option.trim())}>
                    {option.trim()}
                  </button>
                ))}
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <>
      <div className='w-full'>{renderInput()}</div>
      {listeningMode && (
        <div className=' p-2 m-2 border rounded-xl'>
          <p className=' text-xl font-bold text-bf-brand-primary'>
            {language === 'fi' ? 'Kuulin Komennon: ' : 'I heard Command: '}
            {transcriptContent}
          </p>
        </div>
      )}
    </>
  );
};

export default QuestionInput;
