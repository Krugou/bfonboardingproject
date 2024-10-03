import React, { useState } from 'react';

interface Question {
  question: string;
  answerType: string;
  answerOptions?: string;
  syntaxPlaceholder?: string;
}

interface QuestionInputProps {
  question: Question;
}

const QuestionInput: React.FC<QuestionInputProps> = ({ question }) => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isDataCorrect, setIsDataCorrect] = useState<boolean | null>(null); // New state for data correctness
  const industryOptions = ['Technology', 'Finance', 'Healthcare', 'Education']; // Example industry options

  const handleSingleChoiceClick = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleMultiChoiceClick = (option: string) => {
    setSelectedAnswers((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option],
    );
  };

  const renderInput = () => {
    switch (question.answerType) {
      case 'directInput':
        return (
          <input
            type='text'
            className='ml-4 p-2 border border-gray-300 rounded'
            placeholder={question.syntaxPlaceholder}
          />
        );
      case 'slider':
        if (!question.answerOptions) {
          return (
            <div className='ml-4 p-2 text-red-500'>No options provided</div>
          );
        }
        const [min, max] = question.answerOptions.split(',').map(Number);
        return (
          <div className='flex items-center'>
            <input
              type='range'
              className='ml-4 p-2'
              min={min}
              max={max}
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
            />
            <span className='ml-2'>{sliderValue}</span>
          </div>
        );
      case 'singleChoice':
        if (!question.answerOptions) {
          return <div className='ml-4 p-2 text-red-500'>No options provided</div>;
        }
        return (
          <div className='ml-4'>
            {question.answerOptions.split(',').map((option, index) => (
              <button
                key={index}
                className={`p-2 m-1 border rounded ${
                  selectedAnswer === option.trim()
                    ? 'bg-green-500 text-white'
                    : 'border-gray-300'
                }`}
                onClick={() => handleSingleChoiceClick(option.trim())}>
                {option.trim()}
              </button>
            ))}
          </div>
        );
      case 'multiChoice':
        if (!question.answerOptions) {
          return <div className='ml-4 p-2 text-red-500'>No options provided</div>;
        }
        return (
          <div className='ml-4'>
            {question.answerOptions.split(',').map((option, index) => (
              <button
                key={index}
                className={`p-2 m-1 border rounded ${
                  selectedAnswers.includes(option.trim())
                    ? 'bg-green-500 text-white'
                    : 'border-gray-300'
                }`}
                onClick={() => handleMultiChoiceClick(option.trim())}>
                {option.trim()}
              </button>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderInput()}
      <div className='ml-4'>
        <button
          onClick={() => setIsDataCorrect(true)}
          className='p-2 m-1 border rounded bg-blue-500 text-white'>
          Data is Correct
        </button>
        <button
          onClick={() => setIsDataCorrect(false)}
          className='p-2 m-1 border rounded bg-red-500 text-white'>
          Data is Incorrect
        </button>
      </div>
      {isDataCorrect === false && (
        <div className='ml-4 mt-4'>
          <h3 className='text-lg'>Please select an industry:</h3>
          {industryOptions.map((industry, index) => (
            <button
              key={index}
              className='p-2 m-1 border rounded border-gray-300'>
              {industry}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionInput;
