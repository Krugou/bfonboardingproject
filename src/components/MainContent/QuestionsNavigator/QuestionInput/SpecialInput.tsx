import {QuestionItem} from '@/app/types';
import {fetchCompanyInfo} from '@/hooks/api';
import React, {useEffect, useState} from 'react';

interface SpecialInputProps {
  question: QuestionItem;
  language: string;
  answers: {[key: string]: any};
  // eslint-disable-next-line no-unused-vars
  setAnswer: (questionId: string, answer: any) => void;
}

const SpecialInput: React.FC<SpecialInputProps> = ({
  question,
  language,
  answers,
  setAnswer,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [found, setFound] = useState<boolean>(false);

  useEffect(() => {
    if (answers[question.id]) {
      setInputValue(answers[question.id]);
    }
  }, [answers, question.id]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setNotFound(false);
    setFound(false);
    const value = e.target.value;
    if (question.maxLength && value.length > question.maxLength) {
      return;
    }
    setInputValue(value);
    if (!question.validationRegex) {
      setAnswer(question.id, value);
      return;
    }
    const regex = new RegExp(question.validationRegex[language]);
    if (regex instanceof RegExp && !regex.test(value)) {
      setError(true);
    } else {
      const companyInfo = await fetchCompanyInfo(value);
      if (companyInfo) {
        setError(false);
        setFound(true);
        setAnswer(question.id, value);
      } else {
        setNotFound(true);
      }
    }
  };

  return (
    <div className='p-2 border rounded-xl m-1 flex flex-col justify-center items-center w-full'>
      <label className='mb-2 text-gray-700 text-center'>
        {question.question[language]}
      </label>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        className='p-2 border rounded w-full sm:w-3/4 lg:w-1/2'
        placeholder={question.syntaxPlaceholder[language]}
      />
      {error && (
        <div className='text-red-500 mt-2'>
          {language === 'fi' ? 'Virheellinen syöte' : 'Invalid input'}
        </div>
      )}
      {notFound && (
        <div className='text-red-500 mt-2'>
          {language === 'fi'
            ? 'Y-tunnusta ei löytynyt, tarkista syöte'
            : 'Business ID not found, check the input'}
        </div>
      )}
      {found && (
        <div className='text-green-500 mt-2'>
          {language === 'fi'
            ? 'Y-tunnus löytyi, jatketaan'
            : 'Business ID found, continue'}
        </div>
      )}
    </div>
  );
};

export default SpecialInput;
