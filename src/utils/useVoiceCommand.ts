import { useUserContext } from '@/context/UserContext';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

interface QuestionItem {
  id: string;
  answerType: string;
  answerOptions?: { [key: string]: string };
}

const useVoiceCommand = (question: QuestionItem, setCurrentStep: (step: number) => void, currentStep: number) => {
  const { language, userInfo, setAnswer } = useUserContext();

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

  const handleSingleChoiceClick = useCallback((option: string) => {
    try {
      setAnswer(question.id, option);
    } catch (error) {
      console.error(
        `Error setting single choice answer for question ${question.id}:`,
        error,
      );
      toast.error('Error setting single choice answer');
    }
  }, [question.id, setAnswer]);

  const handleMultiChoiceClick = useCallback((option: string) => {
    if (!userInfo) {
      return;
    }
    try {
      const prevSelected = userInfo.questionAnswers as {
        [key: string]: string[];
      };
      const newSelected = prevSelected[question.id]?.includes(option)
        ? prevSelected[question.id].filter((item: string) => item !== option)
        : [...(prevSelected[question.id] || []), option];
      setAnswer(question.id, newSelected);
    } catch (error) {
      console.error(
        `Error setting multi-choice answer for question ${question.id}:`,
        error,
      );
      toast.error('Error setting multi-choice answer');
    }
  }, [question.id, setAnswer, userInfo]);

  const handleSliderChange = useCallback((value: number) => {
    setAnswer(question.id, value);
  }, [question.id, setAnswer]);

  return { handleVoiceCommand, handleSingleChoiceClick, handleMultiChoiceClick, handleSliderChange };
};

export default useVoiceCommand;