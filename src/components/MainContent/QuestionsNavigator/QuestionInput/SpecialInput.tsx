import React, {useState} from 'react';
import {QuestionItem} from '../../../../app/types';
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
  const [industry, setIndustry] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [numberOfEmployees, setNumberOfEmployees] = useState<string>('');
  const [wwwAddress, setWwwAddress] = useState<string>('');

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIndustry(e.target.value);
    setAnswer(question.id, {
      ...answers[question.id],
      industry: e.target.value,
    });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    setAnswer(question.id, {
      ...answers[question.id],
      address: e.target.value,
    });
  };

  const handleNumberOfEmployeesChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNumberOfEmployees(e.target.value);
    setAnswer(question.id, {
      ...answers[question.id],
      numberOfEmployees: e.target.value,
    });
  };

  const handleWwwAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWwwAddress(e.target.value);
    setAnswer(question.id, {
      ...answers[question.id],
      wwwAddress: e.target.value,
    });
  };
  const industryOptions = ['Technology', 'Finance', 'Healthcare', 'Education'];
  return (
    <div className='p-2 border gap-2 rounded-xl m-1 flex flex-col justify-center items-center w-full'>
      <label className='mb-2 text-gray-700 text-center'>
        {question.question[language]}
      </label>
      <select
        value={industry}
        onChange={handleIndustryChange}
        className='p-2 border rounded w-full sm:w-3/4 lg:w-1/2'>
        <option value=''>Select Industry</option>
        {industryOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type='text'
        value={address}
        onChange={handleAddressChange}
        className='p-2 border rounded w-full sm:w-3/4 lg:w-1/2'
        placeholder='Company Address'
      />
      <input
        type='text'
        value={numberOfEmployees}
        onChange={handleNumberOfEmployeesChange}
        className='p-2 border rounded w-full sm:w-3/4 lg:w-1/2'
        placeholder='Number of Employees'
      />
      <input
        type='text'
        value={wwwAddress}
        onChange={handleWwwAddressChange}
        className='p-2 border rounded w-full sm:w-3/4 lg:w-1/2'
        placeholder='Website Address'
      />
    </div>
  );
};

export default SpecialInput;
