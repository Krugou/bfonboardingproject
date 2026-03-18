import {useUserContext} from '@/context/UserContext';
import React from 'react';

interface AnswersTableProps {
  onClose: () => void;
}

const AnswersTable: React.FC<AnswersTableProps> = ({onClose}) => {
  const {userInfo, language, questions, setCurrentStep} = useUserContext();

  if (!userInfo) {
    return null;
  }

  const answeredQuestions = questions.filter(
    (q) => userInfo.questionAnswers[q.id] !== undefined,
  );

  const formatAnswer = (answer: any): string => {
    if (typeof answer === 'string' || typeof answer === 'number') {
      return String(answer);
    }
    if (Array.isArray(answer)) {
      return answer.map(item => formatAnswer(item)).join(', ');
    }
    if (typeof answer === 'object' && answer !== null) {
      // Handle multilingual objects
      if ('fi' in answer && 'en' in answer) {
        return answer[language];
      }
      // Handle other objects
      return Object.entries(answer)
        .map(([key, value]) => `${key}: ${formatAnswer(value)}`)
        .join(', ');
    }
    return '';
  };

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
        <tbody>
          {answeredQuestions.length > 0 ? (
            answeredQuestions.map((q) => {
              const stepIndex = questions.findIndex(
                (question) => question.id === q.id,
              );
              const answer = userInfo.questionAnswers[q.id];

              return (
                <tr key={q.id}>
                  <td className='border border-gray-300 px-4 py-2'>
                    {q.question[language]}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {formatAnswer(answer)}
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
              <td colSpan={3} className='border border-gray-300 px-4 py-2 text-center'>
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
