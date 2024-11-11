import React from 'react';
import {QuestionItem} from '../../app/types';
import NodeButtons from './NodeButtons';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
interface NodeContentProps {
  question: QuestionItem;
  index: number;
  language: 'en' | 'fi';
  handleEdit: (question: QuestionItem) => void;
  moveQuestion: (index: number, direction: 'up' | 'down') => void;
  toggleLock: (index: number) => void;
}

const NodeContent: React.FC<NodeContentProps> = ({
  question,
  index,
  language,
  handleEdit,
  moveQuestion,
  toggleLock,
}) => {
  return (
    <div className='p-4 border  m-4 flex-col justify-center  border-black rounded-xl flex items-center gap-4 min-w-[600px] bg-white'>
      <div className='flex gap-4'>
        <div className='font-bold text-base'>{question.id}</div>
        <div className=' text-base'>{question.answerType}</div>
        <button
          className={`p-1.5 rounded text-white ${
            question.locked
              ? 'bg-red-500 hover:bg-red-700'
              : 'bg-blue-500 hover:bg-blue-700'
          }`}
          onClick={() => toggleLock(index)}>
          {question.locked ? (
            <LockOpenIcon fontSize='small' />
          ) : (
            <LockIcon fontSize='small' />
          )}
        </button>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-bold'>Question:</p>

        <p>{question.question[language]}</p>
        {question.tooltip[language] && (
          <>
            <p className='font-bold'>Tooltip: </p>
            <p>{question.tooltip[language]}</p>
          </>
        )}

        <NodeButtons
          question={question}
          index={index}
          handleEdit={handleEdit}
          moveQuestion={moveQuestion}
        />
      </div>
    </div>
  );
};

export default NodeContent;
