import {useUserContext} from '@/context/UserContext';
import {useCallback} from 'react';
import {toast} from 'react-toastify';
import useCommand from './useCommand';
import {QuestionItem} from '@/app/types';

/**
 * Custom hook to handle voice commands for a given question.
 * @param question - The question item.
 * @param setCurrentStep - Function to set the current step.
 * @param currentStep - The current step number.
 * @returns An object containing the handleVoiceCommand function.
 */
const useVoiceCommand = (
  question: QuestionItem,
  setCurrentStep: (step: number) => void,
  currentStep: number,
) => {
  const {language, setAnswer} = useUserContext();
  const {handleSingleChoiceClick, handleMultiChoiceClick, handleSliderChange} =
    useCommand(question);

  /**
   * Handles voice commands based on the current language and question type.
   * @param command - The voice command.
   */
  const handleVoiceCommand = useCallback(
    (command: string) => {
      try {
        const lowerCaseCommand = command.toLowerCase();

        if (language === 'fi') {
          switch (lowerCaseCommand) {
            case 'seuraava':
              setCurrentStep(currentStep + 1);
              return;
            case 'edellinen':
              setCurrentStep(currentStep - 1);
              return;
            case 'nollaa':
              setCurrentStep(1);
              return;
            default:
              break;
          }
        } else {
          switch (lowerCaseCommand) {
            case 'next':
              setCurrentStep(currentStep + 1);
              return;
            case 'previous':
              setCurrentStep(currentStep - 1);
              return;
            case 'reset':
              setCurrentStep(1);
              return;
            default:
              break;
          }
        }

        if (
          question.answerType === 'singleChoice' ||
          question.answerType === 'multiChoice'
        ) {
          const option = question.answerOptions
            // @ts-ignore
            ?.map((opt) => opt.text[language])
            .find((opt) => opt.trim().toLowerCase() === lowerCaseCommand);
          if (option) {
            if (question.answerType === 'singleChoice') {
              handleSingleChoiceClick(option.trim());
            } else {
              handleMultiChoiceClick(option.trim());
            }
          }
        } else if (question.answerType === 'slider') {
          const value = parseInt(lowerCaseCommand, 10);
          if (!isNaN(value) && value >= 0 && value <= 100) {
            handleSliderChange(value);
          }
        } else if (
          question.answerType === 'directInput' ||
          question.answerType === 'directTextArea' ||
          question.answerType === 'firstInput'
        ) {
          setAnswer(question.id, command);
        }
      } catch (error) {
        console.error('Error handling voice command:', error);
        toast.error('Error handling voice command');
      }
    },
    [
      language,
      setCurrentStep,
      currentStep,
      question,
      setAnswer,
      handleSingleChoiceClick,
      handleMultiChoiceClick,
      handleSliderChange,
    ],
  );

  return {handleVoiceCommand};
};

export default useVoiceCommand;
