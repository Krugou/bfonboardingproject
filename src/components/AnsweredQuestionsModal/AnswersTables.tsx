import {QuestionItem} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import React from 'react';

interface AnswersTableProps {
  onClose: () => void;
}

const AnswersTable: React.FC<AnswersTableProps> = ({onClose}) => {
  const {userInfo, language, questions, setCurrentStep} = useUserContext();
  if (!userInfo) {
    return null; // or return a loading indicator or a message
  }

  // Filter to get only answered questions
  const answeredQuestions = questions.filter(
    (q) => userInfo.questionAnswers[q.id] !== undefined,
  );

  return (
    <div className='overflow-x-auto max-h-96'>
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
        <tbody className=''>
          {answeredQuestions.length > 0 ? (
            answeredQuestions.map((q) => {
              // find the step index of array of questions
              const stepIndex = questions.findIndex(
                (question) => question.id === q.id,
              );

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
                        setCurrentStep(stepIndex);
                        onClose();
                      }}
                      aria-label={`Go back to question ${stepIndex}`}>
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
