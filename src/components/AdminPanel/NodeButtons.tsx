import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';

import {QuestionItem} from '../../app/types';

interface NodeButtonsProps {
  question: QuestionItem;
  index: number;
  handleEdit: (question: QuestionItem) => void;
  moveQuestion: (index: number, direction: 'up' | 'down') => void;
  language: 'en' | 'fi' | string;
}

const NodeButtons: React.FC<NodeButtonsProps> = ({
  question,
  index,
  handleEdit,
  moveQuestion,
  language,
}) => (
  <div className='flex justify-center items-center gap-2'>
    {!question.locked && (
      <>
        <button
          title={language === 'en' ? 'Edit question' : 'Muokkaa kysymystä'}
          className='bg-green-500 hover:bg-green-700 text-white p-1.5 rounded'
          onClick={() => handleEdit(question)}>
          <EditIcon fontSize='small' />
        </button>
        <button
          title={language === 'en' ? 'Move question up' : 'Siirrä kysymys ylös'}
          className='bg-gray-500 hover:bg-gray-700 text-white p-1.5 rounded'
          onClick={() => moveQuestion(index, 'up')}>
          <ArrowUpwardIcon fontSize='small' />
        </button>
        <button
          title={
            language === 'en' ? 'Move question down' : 'Siirrä kysymys alas'
          }
          className='bg-gray-500 hover:bg-gray-700 text-white p-1.5 rounded'
          onClick={() => moveQuestion(index, 'down')}>
          <ArrowDownwardIcon fontSize='small' />
        </button>
      </>
    )}
  </div>
);

export default NodeButtons;
