import React, {useState, useRef, useEffect} from 'react';
import {QuestionItem} from '@/app/types';
import {debounce} from 'lodash';
import {industries} from '@/data/industries';
import {useUserContext} from '@/context/UserContext';
import {fetchWebsiteInfoOpenAI} from '@/hooks/api';
import LoadingBox from '@/components/LoadingBox';

interface SpecialInputProps {
  question: QuestionItem;
  answers: {[key: string]: any};
  setAnswer: (questionId: string, answer: any) => void;
}

const SpecialInput: React.FC<SpecialInputProps> = ({
  question,
  answers,
  setAnswer,
}) => {
  const [industry, setIndustry] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [numberOfEmployees, setNumberOfEmployees] = useState<string>('');
  const [wwwAddress, setWwwAddress] = useState<string>('');
  const {language, userInfo, setUserInfo} = useUserContext();
  const industryRef = useRef<HTMLSelectElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const numberOfEmployeesRef = useRef<HTMLInputElement>(null);
  const wwwAddressRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
    // Only allow positive numbers
    if (value === '' || /^\d+$/.test(value)) {
      setNumberOfEmployees(value);
      debouncedSetAnswer(question.id, {
        ...answers[question.id],
        numberOfEmployees: value,
      });
    }
  };

  const handleWwwAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWwwAddress(value);
    debouncedSetAnswer(question.id, {
      ...answers[question.id],
      wwwAddress: value,
    });
  };

  const fetchWebsiteData = async (url: string) => {
    if (!url) return;

    setIsLoading(true);
    setError(null);

    try {
      const websiteInfo = await fetchWebsiteInfoOpenAI(url, 'password');
      console.log('🚀 ~ fetchWebsiteData ~ websiteInfo:', websiteInfo);
      if (websiteInfo) {
        setIndustry(websiteInfo.industry || '');
        setAddress(websiteInfo.address || '');
        setNumberOfEmployees(websiteInfo.numberOfEmployees?.toString() || '');

        debouncedSetAnswer(question.id, {
          ...answers[question.id],
          industry: websiteInfo.industry,
          address: websiteInfo.address,
          numberOfEmployees: websiteInfo.numberOfEmployees,
          wwwAddress: url,
        });
      }
    } catch (err) {
      setError(
        language === 'en'
          ? 'Failed to fetch website information'
          : 'Verkkosivun tietojen haku epäonnistui',
      );
      console.error('Error fetching website data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Debounced website fetch
  const debouncedFetchWebsite = useRef(
    debounce((url: string) => fetchWebsiteData(url), 1000),
  ).current;

  useEffect(() => {
    if (userInfo?.companyInfo?.website?.url) {
      debouncedFetchWebsite(userInfo?.companyInfo?.website?.url);
    }
  }, [wwwAddress]);

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
  if (isLoading) {
    return <LoadingBox />;
  }
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
          type='number'
          min='0'
          value={numberOfEmployees}
          onChange={handleNumberOfEmployeesChange}
          className='p-2 border rounded w-full'
          placeholder={labels.numberOfEmployees[language]}
          aria-label={labels.numberOfEmployees[language]}
        />
      </div>
      <div className='w-full sm:w-3/4 lg:w-1/2'>
        <label className='block text-gray-700 mb-1'>
          {labels.wwwAddress[language]}
        </label>
        <div className='relative'>
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

      {error && <div className='text-red-500 text-sm mt-2'>{error}</div>}
    </div>
  );
};

export default SpecialInput;
