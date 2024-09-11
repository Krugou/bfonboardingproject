import {useUserContext} from '@/context/UserContext';
import Slider from '@mui/material/Slider';
import React, {useEffect, useState} from 'react';

interface Question {
  id: string;
  question: string;
  answerType: string;
  answerOptions?: string;
  syntaxPlaceholder?: string;
}

interface QuestionInputProps {
  question: Question;
}

const QuestionInput: React.FC<QuestionInputProps> = ({question}) => {
  const {answers, setAnswer} = useUserContext();
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

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

  const renderInput = () => {
    switch (question.answerType) {
      case 'directInput':
        return (
          <div className='flex flex-col sm:flex-row p-2 justify-center items-center w-full'>
            <input
              type='text'
              className='p-2 sm:p-4 border border-gray-300 rounded w-full sm:w-3/4 lg:w-1/2'
              placeholder={question.syntaxPlaceholder}
              value={answers[question.id] || ''}
              onChange={(e) => setAnswer(question.id, e.target.value)}
            />
          </div>
        );
      case 'slider':
        if (!question.answerOptions) {
          return (
            <div className='ml-4 p-2 text-red-500'>No options provided</div>
          );
        }
        // es
        // eslint-disable-next-line no-case-declarations
        const [min, max, step, unit] = question.answerOptions
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
        if (!question.answerOptions) {
          return (
            <div className='ml-4 p-2 text-red-500'>No options provided</div>
          );
        }
        return (
          <div className='ml-4 p-2 flex flex-col justify-center items-center w-full'>
            <div className='mb-2 text-gray-700 text-center'>
              Please select one option:
            </div>
            <div className='flex flex-wrap justify-center w-full sm:w-3/4 lg:w-1/2'>
              {question.answerOptions.split(',').map((option, index) => (
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
        if (!question.answerOptions) {
          return (
            <div className='ml-4 p-2 text-red-500'>No options provided</div>
          );
        }
        return (
          <div className=' p-2 ml-4 w-full flex flex-col justify-center items-center'>
            <div className='mb-2 text-gray-700 text-center'>
              Please select one or more options:
            </div>
            <div className='flex flex-wrap justify-center w-full sm:w-3/4 lg:w-1/2'>
              {question.answerOptions.split(',').map((option, index) => (
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

  return <div className='w-full'>{renderInput()}</div>;
};

export default QuestionInput;
