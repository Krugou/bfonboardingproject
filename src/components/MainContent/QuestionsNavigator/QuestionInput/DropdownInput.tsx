import {QuestionItem} from '@/app/types';
import React from 'react';
import Select, {MultiValue} from 'react-select';

interface DropdownInputProps {
  question: QuestionItem;
  language: 'en' | 'fi';
  handleDropdownChange: (
    selectedOptions: MultiValue<{value: string; label: string}>,
  ) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
  question,
  language,
  handleDropdownChange,
}) => {
  const answerOptions = question.answerOptions
    ?.map((option) => option.text[language])
    .filter(Boolean);

  if (!answerOptions || answerOptions.length === 0) {
    return <div className='ml-4 p-2 text-red-500'>No options provided</div>;
  }

  const options = answerOptions.map((option) => ({
    value: option.trim(),
    label: option.trim(),
  }));

  return (
    <div className='p-2 ml-4 w-full'>
      <Select
        options={options}
        onChange={handleDropdownChange}
        classNamePrefix='react-select'
        isMulti
      />
    </div>
  );
};

export default DropdownInput;
