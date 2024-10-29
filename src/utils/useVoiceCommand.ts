import { useUserContext } from '@/context/UserContext';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import useCommand from './useCommand';
interface QuestionItem {
  id: string;
  answerType: string;
  answerOptions?: { [key: string]: string };
}

const useVoiceCommand = (question: QuestionItem, setCurrentStep: (step: number) => void, currentStep: number) => {
  const { language,  setAnswer } = useUserContext();
  const { handleSingleChoiceClick, handleMultiChoiceClick, handleSliderChange } = useCommand(question);
  const handleVoiceCommand = useCallback((command: string) => {
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
        ?.split('#')
        .find((opt) => opt.trim().toLowerCase() === command.toLowerCase());
      if (option) {
        handleSingleChoiceClick(option.trim());
      }
    } else if (question.answerType === 'multiChoice') {
      const option = question.answerOptions?.[language]
        .split('#')
        .find((opt) => opt.trim().toLowerCase() === command.toLowerCase());
      if (option) {
        handleMultiChoiceClick(option.trim());
      }
    } else if (question.answerType === 'slider') {
      const value = parseInt(command, 10);
      if (!isNaN(value) && value >= 0 && value <= 100) {
        handleSliderChange(value);
      }
    } else if (question.answerType === 'directInput' || question.answerType === 'directTextArea') {
      setAnswer(question.id, command);
    }
  }, [language, setCurrentStep, currentStep, question, setAnswer]);



  return { handleVoiceCommand };
};

export default useVoiceCommand;