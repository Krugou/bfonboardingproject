import React from 'react';
import Select from 'react-select';
import { QuestionItem } from '@/app/types';

interface DropdownInputProps {
  question: QuestionItem;
  language: string;
  handleDropdownChange: (selectedOption: any) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
  question,
  language,
  handleDropdownChange,
}) => {
  const options = question.answerOptions[language]
    .split('#')
    .map((option) => ({ value: option.trim(), label: option.trim() }));

  return (
    <div className="p-2 ml-4 w-full">
      <Select
        options={options}
        onChange={handleDropdownChange}
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default DropdownInput;
