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
        // @ts-ignore
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
      case 'multiChoice':
        return (
          <div className='ml-4'>
            {question.answerOptions?.split(',').map((option, index) => (
              <button
                key={index}
                className={`p-2 m-1 border rounded ${
                  selectedAnswer === option.trim()
                    ? 'bg-green-500 text-white'
                    : 'border-gray-300'
                }`}
                onClick={() => setSelectedAnswer(option.trim())}>
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
