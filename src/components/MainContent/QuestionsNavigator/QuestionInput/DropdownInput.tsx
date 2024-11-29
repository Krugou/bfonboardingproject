import {QuestionItem} from '@/app/types';
import React, {useEffect, useState} from 'react';
import Select, {MultiValue} from 'react-select';
import {useUserContext} from '@/context/UserContext';

interface DropdownInputProps {
  question: QuestionItem;
  language: 'en' | 'fi';
}

const DropdownInput: React.FC<DropdownInputProps> = ({question, language}) => {
  const {saveDropdownSelection, userInfo} = useUserContext();
  const [selectedOptions, setSelectedOptions] = useState<
    MultiValue<{value: string; label: string}>
  >([]);

  useEffect(() => {
    if (
      userInfo &&
      userInfo.questionAnswers &&
      userInfo.questionAnswers[question.id]
    ) {
      const userAnswers = userInfo.questionAnswers[question.id];
      const initialSelectedOptions = userAnswers.map((answer: string) => ({
        value: answer,
        label: answer,
      }));
      setSelectedOptions(initialSelectedOptions);
    }
  }, [userInfo, question.id]);

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

  const handleChange = (
    selectedOptions: MultiValue<{value: string; label: string}>,
  ) => {
    setSelectedOptions(selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    saveDropdownSelection(question.id, selectedValues);
  };

  return (
    <div className='p-2 ml-4 w-full'>
      <Select
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        classNamePrefix='react-select'
        isMulti
      />
    </div>
  );
};

export default DropdownInput;
