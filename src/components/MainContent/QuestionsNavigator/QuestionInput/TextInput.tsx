import {QuestionItem} from '@/app/types';
import {fetchCompanyInfo} from '@/hooks/api';
import React, {useEffect, useState} from 'react';

interface TextInputProps {
  question: QuestionItem;
  language: 'en' | 'fi';
  answers: {[key: string]: any};
  // eslint-disable-next-line no-unused-vars
  setAnswer: (questionId: string, answer: any) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  question,
  language,
  answers,
  setAnswer,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [charCount, setCharCount] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [found, setFound] = useState<boolean>(false);

  useEffect(() => {
    if (answers[question.id]) {
      setInputValue(answers[question.id]);
      setCharCount(answers[question.id].length);
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
    setCharCount(value.length);
    if (!question.validationRegex) {
      setAnswer(question.id, value);

      return;
    }
    const regex = new RegExp(question.validationRegex[language]);
    if (regex instanceof RegExp && !regex.test(value)) {
      setError(true);
    } else {
      const companyInfo = await fetchCompanyInfo(value);
      console.log("🚀 ~ handleChange ~ companyInfo:", companyInfo)
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
    <div className='p-2 rounded-xl m-1 flex flex-col justify-center items-center w-full'>
      <label className='mb-2  text-center text-bf-brand-primary'>
        {question.tooltip[language]}
      </label>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        className='p-2 border-bf-brand-primary text-bf-brand-primary border-2 rounded w-full sm:w-3/4 lg:w-1/2'
        placeholder={question.syntaxPlaceholder[language]}
        maxLength={question.maxLength}
        aria-label={question.question[language as 'en' | 'fi']}
        aria-invalid={error}
        aria-describedby={
          error ? 'error-message' : found ? 'success-message' : ''
        }
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
      {notFound && (
        <div id='error-message' className='text-red-500 mt-2'>
          {language === 'fi'
            ? 'Y-tunnusta ei löytynyt, tarkista syöte'
            : 'Business ID not found, check the input'}
        </div>
      )}
      {found && (
        <div id='success-message' className='text-green-500 mt-2'>
          {language === 'fi'
            ? 'Y-tunnus löytyi, jatketaan'
            : 'Business ID found, continue'}
        </div>
      )}
    </div>
  );
};

export default TextInput;
