import React, {useEffect, useRef} from 'react';
import {QuestionItem} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import SpecialInput from './QuestionInput/SpecialInput';
import AreaInput from './QuestionInput/AreaInput';
import ChoiceInput from './QuestionInput/ChoiceInput';
import DropdownInput from './QuestionInput/DropdownInput';
import BusinessIdInput from './QuestionInput/BusinessIdInput';
import NumberInput from './QuestionInput/NumberInput';
import useVoiceCommand from '@/utils/useVoiceCommand';
import useCommand from '@/utils/useCommand';
import useSpeechRecognition from '@/utils/useSpeechRecognition';

interface QuestionInputProps {
  question: QuestionItem;
}

const QuestionInput: React.FC<QuestionInputProps> = ({question}) => {
  const {userInfo, setAnswer, setCurrentStep, currentStep, listeningMode} =
    useUserContext();
  const {language} = useUserContext();
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const {handleVoiceCommand} = useVoiceCommand(
    question,
    setCurrentStep,
    currentStep,
  );
  const {handleSingleChoiceClick, handleMultiChoiceClick} =
    useCommand(question);
  const {transcriptContent} = useSpeechRecognition(
    language as 'en' | 'fi',
    handleVoiceCommand,
    listeningMode,
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const renderInput = () => {
    if (!userInfo) {
      return null;
    }
    switch (question?.answerType) {
      case 'specialInput':
        return (
          <SpecialInput
            question={question}
            answers={userInfo.questionAnswers}
            setAnswer={setAnswer}
          />
        );

      case 'firstInput':
        return <BusinessIdInput question={question} setAnswer={setAnswer} />;
      case 'directInput':
        return <NumberInput question={question} setAnswer={setAnswer} />;
      case 'directTextArea':
        return (
          <AreaInput
            question={question}
            answers={userInfo.questionAnswers}
            setAnswer={setAnswer}
          />
        );

      case 'singleChoice':
        return (
          <ChoiceInput
            question={question}
            handleSingleChoiceClick={handleSingleChoiceClick}
            handleMultiChoiceClick={handleMultiChoiceClick}
          />
        );

      case 'multiChoice':
        return (
          <ChoiceInput
            question={question}
            handleSingleChoiceClick={handleSingleChoiceClick}
            handleMultiChoiceClick={handleMultiChoiceClick}
          />
        );
      case 'dropdown':
        return <DropdownInput question={question} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='w-full'>{renderInput()}</div>
      {listeningMode && transcriptContent && (
        <div className='p-2 m-2 border rounded-xl'>
          <p className='text-base font-bold text-bf-brand-primary'>
            {language === 'fi' ? 'Kuulin: ' : 'Heard: '}
            {transcriptContent}
          </p>
        </div>
      )}
    </>
  );
};

export default QuestionInput;
