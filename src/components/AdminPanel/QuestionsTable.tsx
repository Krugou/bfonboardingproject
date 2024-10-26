import React from 'react';
import {QuestionItem} from '../../app/types';

interface QuestionsTableProps {
  questions: QuestionItem[];
  language: 'en' | 'fi';
  // eslint-disable-next-line no-unused-vars
  handleEdit: (question: QuestionItem) => void;
}

const QuestionsTable: React.FC<QuestionsTableProps> = ({
  questions,
  language,
  handleEdit,
}) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2'>Index</th>
            <th className='py-2'>ID</th>
            <th className='py-2'>Question</th>
            <th className='py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={question.id}>
              <td className='border px-4 py-2'>{index + 1}</td>
              <td className='border px-4 py-2'>{question.id}</td>
              <td className='border px-4 py-2'>
                {question.question[language]}
              </td>

              <td className='border px-4 py-2'>
                <button
                  className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded'
                  onClick={() => handleEdit(question)}>
                  Edit
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsTable;
