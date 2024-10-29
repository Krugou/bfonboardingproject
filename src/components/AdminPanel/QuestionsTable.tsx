import React, { useState } from 'react';
import { QuestionItem } from '../../app/types';
import EditIcon from '@mui/icons-material/Edit';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface QuestionsTableProps {
  questions: QuestionItem[];
  language: 'en' | 'fi';
  handleEdit: (question: QuestionItem) => void;
  moveQuestion: (index: number, direction: 'up' | 'down') => void;
}

const QuestionsTable: React.FC<QuestionsTableProps> = ({
  questions,
  language,
  handleEdit,
  moveQuestion,
}) => {




  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2'>Index</th>
            <th className='py-2'>ID</th>
            <th className='py-2'>Question</th>
            <th className='py-2'>Answer Type</th>
            <th className='py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={question.id}>
              <td className='border px-4 py-2'>{index + 1}</td>
              <td className='border px-4 py-2'>{question.id}</td>
              <td className='border px-4 py-2'>{question.question[language]}</td>
              <td className='border px-4 py-2'>{question.answerType}</td>
              <td className='border px-4 py-2'>
                <button
                  title='Edit question'
                  className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded'
                  onClick={() => handleEdit(question)}
                >
                  <EditIcon />
                </button>
                <button
                  title='Move question up'
                  className='ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded'
                  onClick={() => moveQuestion(index, 'up')}
                >
                  <ArrowUpwardIcon />
                </button>
                <button
                  title='Move question down'
                  className='ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded'
                  onClick={() => moveQuestion(index, 'down')}
                >
                  <ArrowDownwardIcon />
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
