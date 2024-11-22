import {useUserContext} from '@/context/UserContext';
import {useCallback} from 'react';
import {toast} from 'react-toastify';
import {QuestionItem} from '@/app/types';

interface AnswerData {
  answer: {
    en: string | string[];
    fi: string | string[];
  };
  score: number;
}

const useCommand = (question: QuestionItem) => {
  const {userInfo, setAnswer} = useUserContext();

  const calculateScore = useCallback((option: string) => {
    const answerOption = question.answerOptions?.find(
      opt => opt.text.en === option || opt.text.fi === option
    );
    return answerOption?.score || 0;
  }, [question]);

  const getMultiLanguageAnswer = useCallback((option: string) => {
    const answerOption = question.answerOptions?.find(
      opt => opt.text.en === option || opt.text.fi === option
    );
    return {
      en: answerOption?.text.en || option,
      fi: answerOption?.text.fi || option
    };
  }, [question]);

  const handleSingleChoiceClick = useCallback(
    (option: string) => {
      try {
        const score = calculateScore(option);
        const answer = getMultiLanguageAnswer(option);
        const answerData: AnswerData = {
          answer: {
            en: answer.en,
            fi: answer.fi
          },
          score
        };
        setAnswer(question.id, answerData);
      } catch (error) {
        console.error(`Error setting single choice answer for question ${question.id}:`, error);
        toast.error('Error setting single choice answer');
      }
    },
    [question.id, setAnswer, calculateScore, getMultiLanguageAnswer],
  );

  const handleMultiChoiceClick = useCallback(
    (option: string) => {
      if (!userInfo) return;

      try {
        const prevAnswerData = userInfo.questionAnswers[question.id] as AnswerData;
        const prevSelected = {
          en: Array.isArray(prevAnswerData?.answer?.en) ? prevAnswerData.answer.en : [],
          fi: Array.isArray(prevAnswerData?.answer?.fi) ? prevAnswerData.answer.fi : []
        };

        const answer = getMultiLanguageAnswer(option);
        let newSelected = {
          en: [...prevSelected.en],
          fi: [...prevSelected.fi]
        };

        if (prevSelected.en.includes(answer.en)) {
          newSelected.en = newSelected.en.filter(item => item !== answer.en);
          newSelected.fi = newSelected.fi.filter(item => item !== answer.fi);
        } else {
          newSelected.en.push(answer.en);
          newSelected.fi.push(answer.fi);
        }

        const totalScore = newSelected.en.reduce((acc, opt) => acc + calculateScore(opt), 0);

        const answerData: AnswerData = {
          answer: newSelected,
          score: totalScore
        };

        setAnswer(question.id, answerData);
      } catch (error) {
        console.error(`Error setting multi-choice answer for question ${question.id}:`, error);
        toast.error('Error setting multi-choice answer');
      }
    },
    [question.id, setAnswer, userInfo, calculateScore, getMultiLanguageAnswer],
  );

  const handleSliderChange = useCallback(
    (value: number) => {
      const answerData: AnswerData = {
        answer: {
          en: value.toString(),
          fi: value.toString()
        },
        score: value
      };
      setAnswer(question.id, answerData);
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
