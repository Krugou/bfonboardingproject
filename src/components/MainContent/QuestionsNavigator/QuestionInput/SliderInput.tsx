import {QuestionItem} from '@/app/types';
import Slider from '@mui/material/Slider';
import React from 'react';

interface SliderInputProps {
  question: QuestionItem;
  language: string;
  sliderValue: number;
  // eslint-disable-next-line no-unused-vars
  handleSliderChange: (value: number) => void;
}

const SliderInput: React.FC<SliderInputProps> = ({
  question,
  language,
  sliderValue,
  handleSliderChange,
}) => {
  if (!question.answerOptions || !question.answerOptions[language]) {
    return <div className='ml-4 p-2 text-red-500'>No options provided</div>;
  }

  const [min, max, step, unit] = question.answerOptions[language]
    .split('#')
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
        aria-label={question.question[language]}
        aria-valuenow={sliderValue}
        aria-valuemin={min}
        aria-valuemax={max}
      />
      <span className='mt-2 sm:mt-0 sm:ml-4 text-lg'>
        {sliderValue} {unit && unit}
      </span>
    </div>
  );
};

export default SliderInput;
