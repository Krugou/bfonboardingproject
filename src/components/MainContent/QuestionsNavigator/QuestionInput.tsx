import { QuestionItem } from '@/app/types';
import { useUserContext } from '@/context/UserContext';
import useCommand from '@/utils/useCommand';
import React, { useEffect, useRef, useState } from 'react';
import useSpeechRecognition from '../../../utils/useSpeechRecognition';
import useVoiceCommand from '../../../utils/useVoiceCommand';
import AreaInput from './QuestionInput/AreaInput';
import ChoiceInput from './QuestionInput/ChoiceInput';
import SliderInput from './QuestionInput/SliderInput';
import SpecialInput from './QuestionInput/SpecialInput';
import TextInput from './QuestionInput/TextInput';

interface QuestionInputProps {
  question: QuestionItem;
}
const QuestionInput: React.FC<QuestionInputProps> = ({
  question,

}) => {
  const { userInfo, setAnswer, setCurrentStep ,currentStep, listeningMode } = useUserContext();
  const [sliderValue, setSliderValue] = useState<number>(0);
  const { language } = useUserContext();
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const { handleVoiceCommand,  } = useVoiceCommand(question, setCurrentStep, currentStep);
  const { handleSingleChoiceClick, handleMultiChoiceClick, handleSliderChange } = useCommand(question);
  const { recognition, transcriptContent, startListening, stopListening } = useSpeechRecognition(language, handleVoiceCommand, listeningMode);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);



  useEffect(() => {
    if (userInfo && userInfo.questionAnswers[question.id]) {
      const answer = userInfo.questionAnswers[question.id];
      if (question.answerType === 'slider') {
        setSliderValue(answer);
      }
    }
  }, [userInfo, question]);

  const renderInput = () => {
    if (!userInfo) {
      return null;
    }
    switch (question.answerType) {
      case 'specialInput':
        return (
          <SpecialInput
            question={question}
            language={language}
            answers={userInfo.questionAnswers}
            setAnswer={setAnswer}
          />
        );

      case 'directInput':
        return (
          <TextInput
            question={question}
            language={language}
            answers={userInfo.questionAnswers}
            setAnswer={setAnswer}
          />
        );
      case 'directTextArea':
        return (
          <AreaInput
            question={question}
            language={language}
            answers={userInfo.questionAnswers}
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
            handleSingleChoiceClick={handleSingleChoiceClick}
            handleMultiChoiceClick={handleMultiChoiceClick}
          />
        );

      case 'multiChoice':
        return (
          <ChoiceInput
            question={question}
            language={language}
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
          <p className=' text-base font-bold text-bf-brand-primary'>
            {language === 'fi' ? 'Kuulin Komennon: ' : 'I heard Command: '}
            {transcriptContent}
          </p>
        </div>
      )}
    </>
  );
};

export default QuestionInput;
