import React from 'react';
import { QuestionItem } from '../../app/types';

interface QuestionFormProps {
  question: QuestionItem;
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSave: () => void;
  handleCancel: () => void;
  isEditing: boolean;
}

const QuestionForm: React.FC<QuestionFormProps> = ({
  question,
  handleChange,
  handleSave,
  handleCancel,
  isEditing,
}) => {
  return (
    <div className='mt-4'>
    <h2 className='text-xl font-bold mb-2'>Edit Question</h2>
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor='question-en'>
        Question (English)
      </label>
      <textarea
        id='question-en'
        name='question.en'
        value={editingQuestion.question.en}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        title='Question in English'
        placeholder='Enter the question in English'
      />
    </div>
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor='question-fi'>
        Question (Finnish)
      </label>
      <textarea
        id='question-fi'
        name='question.fi'
        value={editingQuestion.question.fi}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        title='Question in Finnish'
        placeholder='Enter the question in Finnish'
      />
    </div>
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor='answerType'>
        Answer Type
      </label>
      <input
        id='answerType'
        name='answerType'
        value={editingQuestion.answerType}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        title='Answer Type'
        placeholder='Enter the answer type'
      />
    </div>
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor='answerOptions-en'>
        Answer Options (English)
      </label>
      <input
        id='answerOptions-en'
        name='answerOptions.en'
        value={editingQuestion.answerOptions?.en || ''}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        title='Answer Options in English'
        placeholder='Enter the answer options in English'
      />
    </div>
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor='answerOptions-fi'>
        Answer Options (Finnish)
      </label>
      <input
        id='answerOptions-fi'
        name='answerOptions.fi'
        value={editingQuestion.answerOptions?.fi || ''}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        title='Answer Options in Finnish'
        placeholder='Enter the answer options in Finnish'
      />
    </div>
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor='condition'>
        Condition
      </label>
      <input
        id='condition'
        name='condition'
        value={editingQuestion.condition || ''}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        title='Condition'
        placeholder='Enter the condition'
      />
    </div>
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor='errorAnswer-en'>
        Error Message (English)
      </label>
      <input
        id='errorAnswer-en'
        name='errorAnswer.en'
        value={editingQuestion.errorAnswer?.en || ''}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        title='Error Message in English'
        placeholder='Enter the error message in English'
      />
    </div>
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor='errorAnswer-fi'>
        Error Message (Finnish)
      </label>
      <input
        id='errorAnswer-fi'
        name='errorAnswer.fi'
        value={editingQuestion.errorAnswer?.fi || ''}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        title='Error Message in Finnish'
        placeholder='Enter the error message in Finnish'
      />
    </div>
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor='syntaxPlaceholder-en'>
        Syntax Placeholder (English)
      </label>
      <input
        id='syntaxPlaceholder-en'
        name='syntaxPlaceholder.en'
        value={editingQuestion.syntaxPlaceholder?.en || ''}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        title='Syntax Placeholder in English'
        placeholder='Enter the syntax placeholder in English'
      />
    </div>
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor='syntaxPlaceholder-fi'>
        Syntax Placeholder (Finnish)
      </label>
      <input
        id='syntaxPlaceholder-fi'
        name='syntaxPlaceholder.fi'
        value={editingQuestion.syntaxPlaceholder?.fi || ''}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        title='Syntax Placeholder in Finnish'
        placeholder='Enter the syntax placeholder in Finnish'
      />
    </div>
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor='targetAudience'>
        Target Audience
      </label>
      <input
        id='targetAudience'
        name='targetAudience'
        value={editingQuestion.targetAudience || ''}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        title='Target Audience'
        placeholder='Enter the target audience'
      />
    </div>
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor='tooltip-en'>
        Tooltip (English)
      </label>
      <input
        id='tooltip-en'
        name='tooltip.en'
        value={editingQuestion.tooltip?.en || ''}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        title='Tooltip in English'
        placeholder='Enter the tooltip in English'
      />
    </div>
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor='tooltip-fi'>
        Tooltip (Finnish)
      </label>
      <input
        id='tooltip-fi'
        name='tooltip.fi'
        value={editingQuestion.tooltip?.fi || ''}
        onChange={handleChange}
        className='w-full p-2 border rounded'
        title='Tooltip in Finnish'
        placeholder='Enter the tooltip in Finnish'
      />
    </div>
    <div className='flex justify-center items-center'>
      <div className='flex w-1/2 justify-between gap-4'>
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleCancel}>
          Cancel
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  </div>
  );
};

export default QuestionForm;
