import React, { useState } from 'react';
import {QuestionItem} from '../../app/types';
import EditIcon from '@mui/icons-material/Edit';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
interface QuestionsTableProps {
  questions: QuestionItem[];
  language: 'en' | 'fi';
  // eslint-disable-next-line no-unused-vars
  handleEdit: (question: QuestionItem) => void;
  // eslint-disable-next-line no-unused-vars
  moveQuestion: (index: number, direction: 'up' | 'down') => void;
}

const QuestionsTable: React.FC<QuestionsTableProps> = ({
  questions,
  language,
  handleEdit,
  moveQuestion,
  
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newQuestion, setNewQuestion] = useState<QuestionItem>({
    id: '',
    question: { en: '', fi: '' },
    answerType: '',
    answerOptions: { en: '', fi: '' },
  });

  const handleAddQuestion = () => {
    setShowAddForm(true);
  };

  const handleSaveQuestion = () => {
    // Implement logic to save the new question
    // For example, update the questions array or make an API call
    setShowAddForm(false);
  };

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
                  "title='Edit question'"
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded'
                onClick={() => handleEdit(question)}>
                <EditIcon />
              </button>
                <button
                  title='Move question up'
                className='ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded'
                onClick={() => moveQuestion(index, 'up')}>
                <ArrowUpwardIcon />
              </button>
                <button
                  "title='Move question down'"
                className='ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded'
                onClick={() => moveQuestion(index, 'down')}>
                <ArrowDownwardIcon />
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>

      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
        onClick={handleAddQuestion}>
        Add Question
      </button>

      {showAddForm && (
        <div className='mt-4'>
          {/* Form fields to input new question details */}
          <input
            className='border px-2 py-1'
            type='text'
            placeholder='Question ID'
            value={newQuestion.id}
            onChange={(e) => setNewQuestion({ ...newQuestion, id: e.target.value })}
          />
          {/* Additional inputs for question text, answer type, and options */}
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded ml-2'
            onClick={handleSaveQuestion}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionsTable;
