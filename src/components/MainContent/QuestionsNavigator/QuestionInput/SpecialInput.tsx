import React, {useState, useRef, useEffect} from 'react';
import {QuestionItem} from '@/app/types';
import {debounce} from 'lodash';
import {industries} from '@/data/industries';
interface SpecialInputProps {
  question: QuestionItem;
  language: 'en' | 'fi';
  answers: {[key: string]: any};
  setAnswer: (questionId: string, answer: any) => void;
}

const SpecialInput: React.FC<SpecialInputProps> = ({
  question,
  language,
  answers,
  setAnswer,
}) => {
  const [industry, setIndustry] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [numberOfEmployees, setNumberOfEmployees] = useState<string>('');
  const [wwwAddress, setWwwAddress] = useState<string>('');

  const industryRef = useRef<HTMLSelectElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const numberOfEmployeesRef = useRef<HTMLInputElement>(null);
  const wwwAddressRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (industryRef.current) {
      industryRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (answers[question.id]) {
      const {industry, address, numberOfEmployees, wwwAddress} =
        answers[question.id];
      setIndustry(industry || '');
      setAddress(address || '');
      setNumberOfEmployees(numberOfEmployees || '');
      setWwwAddress(wwwAddress || '');
    }
  }, [answers, question.id]);

  const debouncedSetAnswer = useRef(
    debounce((questionId: string, answer: any) => {
      setAnswer(questionId, answer);
    }, 500),
  ).current;

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setIndustry(value);
    debouncedSetAnswer(question.id, {
      ...answers[question.id],
      industry: value,
    });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);
    debouncedSetAnswer(question.id, {
      ...answers[question.id],
      address: value,
    });
  };

  const handleNumberOfEmployeesChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setNumberOfEmployees(value);
    debouncedSetAnswer(question.id, {
      ...answers[question.id],
      numberOfEmployees: value,
    });
  };

  const handleWwwAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWwwAddress(value);
    debouncedSetAnswer(question.id, {
      ...answers[question.id],
      wwwAddress: value,
    });
  };

  const industryOptions = industries;
  const labels = {
    industry: {
      en: 'Industry',
      fi: 'Toimiala',
    },
    address: {
      en: 'Company Address',
      fi: 'Yrityksen osoite',
    },
    numberOfEmployees: {
      en: 'Number of Employees',
      fi: 'Työntekijöiden määrä',
    },
    wwwAddress: {
      en: 'Website Address',
      fi: 'Verkkosivun osoite',
    },
  };

  return (
    <div className='p-2 border gap-2 rounded-xl m-1 flex flex-col justify-center items-center w-full'>
      <label className='mb-2  text-center'>{question.question[language]}</label>
      <div className='w-full sm:w-3/4 lg:w-1/2'>
        <label htmlFor='industry-select' className='block text-gray-700 mb-1'>
          {labels.industry[language]}
        </label>
        <select
          id='industry-select'
          ref={industryRef}
          value={industry}
          onChange={handleIndustryChange}
          className='p-2 border rounded w-full'>
          <option value=''>Select Industry</option>
          {industryOptions.map((option) => (
            <option key={option.key} value={option.key}>
              {option.text[language]}
            </option>
          ))}
        </select>
      </div>
      <div className='w-full sm:w-3/4 lg:w-1/2'>
        <label className='block text-gray-700 mb-1'>
          {labels.address[language]}
        </label>
        <input
          ref={addressRef}
          type='text'
          value={address}
          onChange={handleAddressChange}
          className='p-2 border rounded w-full'
          placeholder={labels.address[language]}
        />
      </div>
      <div className='w-full sm:w-3/4 lg:w-1/2'>
        <label className='block text-gray-700 mb-1'>
          {labels.numberOfEmployees[language]}
        </label>
        <input
          ref={numberOfEmployeesRef}
          type='text'
          value={numberOfEmployees}
          onChange={handleNumberOfEmployeesChange}
          className='p-2 border rounded w-full'
          placeholder={labels.numberOfEmployees[language]}
        />
      </div>
      <div className='w-full sm:w-3/4 lg:w-1/2'>
        <label className='block text-gray-700 mb-1'>
          {labels.wwwAddress[language]}
        </label>
        <input
          ref={wwwAddressRef}
          type='text'
          value={wwwAddress}
          onChange={handleWwwAddressChange}
          className='p-2 border rounded w-full'
          placeholder={labels.wwwAddress[language]}
        />
      </div>
    </div>
  );
};

export default SpecialInput;
