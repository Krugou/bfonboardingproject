import { QuestionItem } from '@/app/types';
import React, { useEffect, useState } from 'react';

interface AreaInputProps {
  question: QuestionItem;
  language: string;
  answers: { [key: string]: any };
  // eslint-disable-next-line no-unused-vars
  setAnswer: (questionId: string, answer: any) => void;
}

const AreaInput: React.FC<AreaInputProps> = ({
  question,
  language,
  answers,
  setAnswer,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [charCount, setCharCount] = useState<number>(0);

  useEffect(() => {
    if (answers[question.id]) {
      setInputValue(answers[question.id]);
      setCharCount(answers[question.id].length);
    }
  }, [answers, question.id]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (question.maxLength && value.length > question.maxLength) {
      return;
    }
    setInputValue(value);
    setCharCount(value.length);
    setAnswer(question.id, value);
  };

  return (
    <div className='p-2 border rounded-xl m-1 flex flex-col justify-center items-center w-full'>
      <label className='mb-2 text-gray-700 text-center'>
        {question.question[language]}
      </label>
      <textarea
        value={inputValue}
        onChange={handleChange}
        className='p-2 border rounded w-full sm:w-3/4 lg:w-1/2'
        placeholder={question.syntaxPlaceholder[language]}
        rows={4}
        maxLength={question.maxLength}
      />
      <div className='mt-2 text-gray-600 text-sm'>
        {charCount}/{question.maxLength}{' '}
        {language === 'fi' ? 'merkkiä' : 'characters'}
      </div>
    </div>
  );
};

export default AreaInput;
