import {QuestionItem} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import React from 'react';

interface AnswersTableProps {
  questions: QuestionItem[];
  // eslint-disable-next-line no-unused-vars
  setCurrentStep: (step: number) => void;
}

const AnswersTable: React.FC<AnswersTableProps> = ({
  questions,
  setCurrentStep,
}) => {
  const {userInfo, language} = useUserContext();

  // Filter to get only answered questions
  const answeredQuestions = questions.filter(
    (q) => userInfo.questionAnswers[q.id] !== undefined,
  );

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white border-collapse border border-gray-300'>
        <thead>
          <tr>
            <th className='border text-center border-gray-300 px-4 py-2 text-base md:text-lg  font-bold bg-gray-100'>
              {language === 'fi' ? 'Kysymys' : 'Question'}
            </th>
            <th className='border text-center border-gray-300 px-4 py-2 text-base md:text-lg font-bold bg-gray-100'>
              {language === 'fi' ? 'Vastaus' : 'Answer'}
            </th>
            <th className='border text-center border-gray-300 px-4 py-2 text-base md:text-lg font-bold bg-gray-100'>
              {language === 'fi' ? 'Toiminto' : 'Action'}
            </th>
          </tr>
        </thead>
        <tbody>
          {answeredQuestions.length > 0 ? (
            answeredQuestions.map((q) => {
              // Find the current step by locating the question index
              const currentStep =
                questions.findIndex((question) => question.id === q.id) + 1;

              return (
                <tr key={q.id}>
                  <td className='border border-gray-300 px-4 py-2'>
                    {q.question[language]}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {Array.isArray(userInfo.questionAnswers[q.id]) ? (
                      <ul>
                        {userInfo.questionAnswers[q.id].map(
                          (item: any, index: number) => (
                            <li key={index}>{item}</li>
                          ),
                        )}
                      </ul>
                    ) : typeof userInfo.questionAnswers[q.id] === 'object' ? (
                      <ul>
                        {Object.entries(userInfo.questionAnswers[q.id]).map(
                          ([key, value]) => (
                            <li key={key}>
                              {/* @ts-ignore */}
                              {key}: {value}
                            </li>
                          ),
                        )}
                      </ul>
                    ) : (
                      userInfo.questionAnswers[q.id]
                    )}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
                      onClick={() => {
                        setCurrentStep(currentStep);
                      }}
                      aria-label={`Go back to question ${currentStep}`}>
                      {language === 'fi'
                        ? 'Palaa tähän kysymykseen'
                        : 'Go Back to this Question'}
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className='border border-gray-300 px-4 py-2 text-center'>
                {language === 'fi' ? 'Ei vastauksia' : 'No answers available'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AnswersTable;
