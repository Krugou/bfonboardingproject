import React, {useState} from 'react';

interface Question {
  question: string;
  answerType: string;
  answerOptions?: string;
  syntaxPlaceholder?: string;
}

interface QuestionInputProps {
  question: Question;
}

const QuestionInput: React.FC<QuestionInputProps> = ({question}) => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
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
        // eslint-disable-next-line prefer-const, no-case-declarations
        const [min, max] = question.answerOptions.split(',').map(Number);
        return (
          <div className='flex items-center'>
            <input
              type='range'
              title='slider'
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
          return (
            <div className='ml-4 p-2 text-red-500'>No options provided</div>
          );
        }
        return (
          <div className='ml-4'>
            <div className='mb-2 text-gray-700'>Please select one option:</div>
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
          return (
            <div className='ml-4 p-2 text-red-500'>No options provided</div>
          );
        }
        return (
          <div className='ml-4'>
            <div className='mb-2 text-gray-700'>
              Please select one or more options:
            </div>
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

  return <div>{renderInput()}</div>;
};

export default QuestionInput;
