import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { QuestionItem } from '../../app/types';
import { db } from '../../utils/firebase';
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


  const toggleLock = async (index: number) => {
    const question = questions[index];
    const newLockedStatus = !question.locked;

    try {
      const questionRef = doc(db, 'questions', 'questions');
      const questionSnapshot = await getDoc(questionRef);

      if (questionSnapshot.exists()) {
        const oldQuestions = questionSnapshot.data().questions;
        oldQuestions[index].locked = newLockedStatus;

        await updateDoc(questionRef, {
          questions: oldQuestions,
        });

        console.log(`Question ${question.id} lock status updated to ${newLockedStatus}`);
      } else {
        console.error('No such document!');
      }
    } catch (error) {
      console.error('Error updating lock status:', error);
    }
  };
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
                  className={`mb-4 py-2 px-4 rounded text-white font-bold ${
                    question.locked ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'
                  }`}
                  onClick={() => toggleLock(index)}
                >
                  {question.locked ? <LockOpenIcon /> : <LockIcon />}
                </button>
                {!question.locked && (
                  <>
                    <button
                      title='Edit question'
                      className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4'
                      onClick={() => handleEdit(question)}
                    >
                      <EditIcon />
                    </button>
                    <button
                      title='Move question up'
                      className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4 ml-2'
                      onClick={() => moveQuestion(index, 'up')}
                    >
                      <ArrowUpwardIcon />
                    </button>
                    <button
                      title='Move question down'
                      className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4 ml-2'
                      onClick={() => moveQuestion(index, 'down')}
                    >
                      <ArrowDownwardIcon />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsTable;
