'use client';
import DevModeBanner from '@/components/DevModeBanner';
import Header from '@/components/Header';
import Stepper from '@/components/Stepper';
import React, {useEffect, useState} from 'react';
import questions from '../data/mockdata';
import QuestionsNavigator from '@/components/QuestionsNavigator';

const Home = () => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [listeningMode, setListeningMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className='flex flex-col bg-gray-300 h-screen items-center justify-between  '>
      <Header />
      <main className=' w-full h-full flex flex-col bg-gray-100 rounded-xl m-10 p-4 max-w-screen-lg '>
        <div className='flex justify-between mx-10 mt-10'>
          <div className='flex items-center w-1/3 mb-4'>
            <label className='inline-flex items-center cursor-pointer'>
              <input
                type='checkbox'
                value=''
                className='sr-only peer'
                checked={listeningMode}
                onChange={() => setListeningMode(!listeningMode)}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              <span className='text-sm font-medium text-gray-900 ms-3 dark:text-gray-300'></span>
            </label>
          </div>
          <Stepper steps={questions} currentStep={currentStep} />
          <div className='flex justify-end w-1/3 mb-4'>
            <button className='bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded'>
              History
            </button>
          </div>
        </div>
        <div className='flex h-1/2 justify-center items-center'>
          <h2>{questions[currentStep - 1].question}</h2>
        </div>
        <QuestionsNavigator currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </main>

      <DevModeBanner />
    </div>
  );
};

export default Home;
