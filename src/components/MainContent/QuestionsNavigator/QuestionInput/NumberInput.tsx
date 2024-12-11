
import { QuestionItem } from '@/app/types';
import React, { useEffect, useState } from 'react';
import { useUserContext } from '@/context/UserContext';

interface NumberInputProps {
  question: QuestionItem;
  setAnswer: (questionId: string, answer: any) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ question, setAnswer }) => {
  const { language, userInfo } = useUserContext();
  const [inputValue, setInputValue] = useState<string>('');
  const [charCount, setCharCount] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Reset input when question changes
    setInputValue('');
    setCharCount(0);
  }, [question.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    const value = e.target.value;

    // Only allow numeric input
    if (!/^\d*$/.test(value)) {
      setError(true);
      return;
    }

    if (question.maxLength && value.length > question.maxLength) {
      return;
    }

    setInputValue(value);
    setCharCount(value.length);

    if (!question.validationRegex) {
      setAnswer(question.id, value);
      return;
    }

    // @ts-expect-error
    const regex = new RegExp(question.validationRegex[language]);
    if (regex instanceof RegExp && !regex.test(value)) {
      setError(true);
    } else {
      setError(false);
      setAnswer(question.id, value);
    }
  };

  return (
    <div className='p-2 rounded-xl m-1 flex flex-col justify-center items-center w-full'>
      <label className='mb-2 text-center text-bf-brand-primary'>
        {question.tooltip[language]}
      </label>
      <input
        type='text'
        inputMode='numeric'
        pattern='\d*'
        value={inputValue}
        onChange={handleChange}
        className='p-2 border-bf-brand-primary text-bf-brand-primary border-2 rounded w-full sm:w-3/4 lg:w-1/2'
        placeholder={question.syntaxPlaceholder[language]}
        maxLength={question.maxLength}
        aria-label={question.question[language as 'en' | 'fi']}
        aria-invalid={error}
        aria-describedby={error ? 'error-message' : ''}
      />
      <div className='mt-2 text-bf-brand-primary text-sm'>
        {charCount}/{question.maxLength}{' '}
        {language === 'fi' ? 'merkkiä' : 'characters'}
      </div>
      {error && (
        <div id='error-message' className='text-red-500 mt-2'>
          {language === 'fi' ? 'Virheellinen syöte' : 'Invalid input'}
        </div>
      )}
    </div>
  );
};

export default NumberInput;
