import {QuestionItem} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import React from 'react';

interface AnsweredQuestionsModalProps {
  open: boolean;
  onClose: () => void;
  questions: QuestionItem[];
  currentStep: number;
  // eslint-disable-next-line no-unused-vars
  setCurrentStep: (step: number) => void;
}

const AnsweredQuestionsModal: React.FC<AnsweredQuestionsModalProps> = ({
  open,
  onClose,
  questions,
  setCurrentStep,
}) => {
  const {userInfo} = useUserContext();
  const {language} = useUserContext();
  if (!open) return null;

  const answeredQuestions = questions.filter(
    (q) => userInfo.questionAnswers[q.id] !== undefined,
  );

  return (
    <div className='fixed inset-0 bg-gray-600  bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white rounded-lg p-6 w-full  xl:w-2/3'>
        <div className='flex justify-between'>
          <h2 className='text-xl font-bold mb-4'>
            {!language ? 'Answered Questions' : 'Vastatut kysymykset'}
          </h2>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={onClose}>
            Close
          </button>
        </div>

        <div className='container p-2'>
          {answeredQuestions.length > 0 ? (
            <ul className='list-disc h-96 overflow-y-auto list-inside'>
              {answeredQuestions?.map((q, index) => {
                if (q.id === 'k1.2') {
                  return (
                    <li
                      key={q.id}
                      className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4'>
                      <span className=''>{q.id}</span>
                      <span className=' '>{q.question[language]}</span>
                      <div className='flex flex-col justify-start border border-black rounded-xl p-4 w-full'>
                        {userInfo?.questionAnswers[q.id]?.industry && (
                          <span className='text-gray-600 mb-2'>
                            {language === 'fi' ? 'Toimiala' : 'Industry'}:{' '}
                            {userInfo?.questionAnswers[q.id]?.industry}
                          </span>
                        )}
                        {userInfo?.questionAnswers[q.id]?.address && (
                          <span className='text-gray-600 mb-2'>
                            {language === 'fi' ? 'Osoite' : 'Address'}:{' '}
                            {userInfo?.questionAnswers[q.id]?.address}
                          </span>
                        )}
                        {userInfo?.questionAnswers[q.id]?.numberOfEmployees && (
                          <span className='text-gray-600 mb-2'>
                            {language === 'fi'
                              ? 'Henkilömäärä'
                              : 'Number of Employees'}
                            :{' '}
                            {userInfo?.questionAnswers[q.id]?.numberOfEmployees}
                          </span>
                        )}
                        {userInfo?.questionAnswers[q.id]?.wwwAddress && (
                          <span className='text-gray-600'>
                            {language === 'fi' ? 'www' : 'www'}:{' '}
                            {userInfo?.questionAnswers[q.id]?.wwwAddress}
                          </span>
                        )}
                      </div>
                      <button
                        className='ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1  px-2 rounded'
                        onClick={() => setCurrentStep(index + 1)}>
                        {language === 'fi'
                          ? 'Palaa tähän kysymykseen'
                          : 'Go Back to this Question'}
                      </button>
                    </li>
                  );
                }
                return (
                  <li
                    key={q.id}
                    className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4'>
                    <span className=' '>{q.id}</span>
                    <span className=' '>{q.question[language]}</span>
                    <span className='ml-4 text-gray-600 border border-black p-4 rounded-xl'>
                      {userInfo?.questionAnswers[q.id]}
                    </span>
                    <button
                      className='ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
                      onClick={() => setCurrentStep(index + 1)}>
                      {language === 'fi'
                        ? 'Palaa tähän kysymykseen'
                        : 'Go Back to this Question'}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>
              {language === 'fi'
                ? 'Ei vastattuja kysymyksiä'
                : 'No answered questions'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnsweredQuestionsModal;
