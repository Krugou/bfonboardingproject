import {useUserContext} from '@/context/UserContext';
import {useCallback} from 'react';
import {toast} from 'react-toastify';
import {QuestionItem} from '@/app/types';

const useCommand = (question: QuestionItem) => {
  const {userInfo, setAnswer} = useUserContext();

  const handleSingleChoiceClick = useCallback(
    (option: string) => {
      try {
        setAnswer(question.id, option);
      } catch (error) {
        console.error(
          `Error setting single choice answer for question ${question.id}:`,
          error,
        );
        toast.error('Error setting single choice answer');
      }
    },
    [question.id, setAnswer],
  );

  const handleMultiChoiceClick = useCallback(
    (option: string) => {
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
    },
    [question.id, setAnswer, userInfo],
  );

  const handleSliderChange = useCallback(
    (value: number) => {
      setAnswer(question.id, value);
    },
    [question.id, setAnswer],
  );

  return {
    handleSingleChoiceClick,
    handleMultiChoiceClick,
    handleSliderChange,
  };
};

export default useCommand;
