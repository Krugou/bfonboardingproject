import {QuestionItem} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import React, {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import ChoiceInput from './QuestionInput/ChoiceInput';
import SliderInput from './QuestionInput/SliderInput';
import TextInput from './QuestionInput/TextInput';  
import SpecialInput from './QuestionInput/SpecialInput';
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
      case 'specialInput':
        return (
          <SpecialInput
            question={question}
            language={language}
            answers={answers}
            setAnswer={setAnswer}
          />
        );

      case 'directInput':
        return (
          <TextInput
            question={question}
            language={language}
            answers={answers}
            setAnswer={setAnswer}
          />
        );
      case 'slider':
        return (
          <SliderInput
            question={question}
            language={language}
            sliderValue={sliderValue}
            handleSliderChange={handleSliderChange}
          />
        );
      case 'singleChoice':
        return (
          <ChoiceInput
            question={question}
            language={language}
            selectedAnswer={selectedAnswer}
            selectedAnswers={selectedAnswers}
            handleSingleChoiceClick={handleSingleChoiceClick}
            handleMultiChoiceClick={handleMultiChoiceClick}
          />
        );

      case 'multiChoice':
        return (
          <ChoiceInput
            question={question}
            language={language}
            selectedAnswer={selectedAnswer}
            selectedAnswers={selectedAnswers}
            handleSingleChoiceClick={handleSingleChoiceClick}
            handleMultiChoiceClick={handleMultiChoiceClick}
          />
        );
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
