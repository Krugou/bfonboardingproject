import React, {useState} from 'react';
import {QuestionItem, AnswerOption} from '../../app/types';

interface QuestionFormProps {
  question: QuestionItem;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
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
  const [answerOptions, setAnswerOptions] = useState<AnswerOption[]>(
    question.answerOptions || [],
  );

  const handleAddOption = () => {
    setAnswerOptions([
      ...answerOptions,
      {key: '', score: 0, text: {en: '', fi: ''}},
    ]);
  };

  const handleOptionChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index: number,
  ) => {
    const {name, value} = e.target;
    const updatedOptions = [...answerOptions];
    const keys = name.split('.');
    if (keys.length === 3) {
      if (updatedOptions[index][keys[0] as keyof AnswerOption]) {
        (updatedOptions[index][keys[0] as keyof AnswerOption] as any)[keys[1]] =
      }
    } else {
    } else {
      if (keys[0] in updatedOptions[index]) {
        (updatedOptions[index] as any)[keys[0]] = value;
      }
    }
    setAnswerOptions(updatedOptions);
    handleChange(e);
  };

  const renderAnswerOptions = (options: AnswerOption[]) => {
    return options.map((option, index) => (
      <div key={index} className='mb-4 p-4 border rounded bg-gray-100'>
        <div className='mb-2'>
          <label
            className='block text-gray-700'
            htmlFor={`answerOptions.${index}.text.en`}>
            Answer Option (English)
          </label>
          <input
            type='text'
            id={`answerOptions.${index}.text.en`}
            name={`answerOptions.${index}.text.en`}
            value={option.text.en}
            onChange={(e) => handleOptionChange(e, index)}
            className='w-full p-2 border rounded'
            placeholder='Answer Option (English)'
          />
        </div>
        <div className='mb-2'>
          <label
            className='block text-gray-700'
            htmlFor={`answerOptions.${index}.text.fi`}>
            Answer Option (Finnish)
          </label>
          <input
            type='text'
            id={`answerOptions.${index}.text.fi`}
            name={`answerOptions.${index}.text.fi`}
            value={option.text.fi}
            onChange={(e) => handleOptionChange(e, index)}
            className='w-full p-2 border rounded'
            placeholder='Answer Option (Finnish)'
          />
        </div>
        <div className='mb-2'>
          <label
            className='block text-gray-700'
            htmlFor={`answerOptions.${index}.key`}>
            Key
          </label>
          <input
            type='text'
            id={`answerOptions.${index}.key`}
            name={`answerOptions.${index}.key`}
            value={option.key}
            onChange={(e) => handleOptionChange(e, index)}
            className='w-full p-2 border rounded'
            placeholder='Key'
          />
        </div>
        <div className='mb-2'>
          <label
            className='block text-gray-700'
            htmlFor={`answerOptions.${index}.score`}>
            Score
          </label>
          <input
            type='number'
            id={`answerOptions.${index}.score`}
            name={`answerOptions.${index}.score`}
            value={option.score}
            onChange={(e) => handleOptionChange(e, index)}
            className='w-full p-2 border rounded'
            placeholder='Score'
          />
        </div>
      </div>
    ));
  };

  return (
    <div className='flex flex-col justify-center items-center gap-4 p-4 border border-bf-brand-primary bg-white shadow-lg rounded-lg'>
      <h2 className='text-2xl font-bold text-bf-brand-primary'>
        {isEditing ? 'Edit Question' : 'Add Question'}
      </h2>
      <div className='w-full'>
        <label className='block text-gray-700' htmlFor='id'>
          ID
        </label>
        <input
          id='id'
          name='id'
          value={question.id}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          title='ID'
          placeholder='Enter the ID'
        />
      </div>
      <div className='w-full'>
        <label className='block text-gray-700' htmlFor='question-en'>
          Question (English)
        </label>
        <textarea
          id='question-en'
          name='question.en'
          value={question.question.en}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          title='Question in English'
          placeholder='Enter the question in English'
        />
      </div>
      <div className='w-full'>
        <label className='block text-gray-700' htmlFor='question-fi'>
          Question (Finnish)
        </label>
        <textarea
          id='question-fi'
          name='question.fi'
          value={question.question.fi}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          title='Question in Finnish'
          placeholder='Enter the question in Finnish'
        />
      </div>
      <div className='w-full'>
        <label className='block text-gray-700' htmlFor='answerType'>
          Answer Type
        </label>
        <select
          id='answerType'
          name='answerType'
          value={question.answerType}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          title='Answer Type'>
          <option value='directInput'>Direct Input</option>
          <option value='singleChoice'>Single Choice</option>
          <option value='multiChoice'>Multi Choice</option>
          <option value='specialInput'>Special Input</option>
          <option value='directTextArea'>Direct Text Area</option>
        </select>
      </div>
      {(question.answerType === 'singleChoice' ||
        question.answerType === 'multiChoice') && (
        <div className='w-full'>
          <label className='block text-gray-700' htmlFor='answerOptions'>
            Answer Options
          </label>
          {renderAnswerOptions(answerOptions)}
          <button
            type='button'
            onClick={handleAddOption}
            className='bg-bf-brand-primary hover:bg-bf-brand-secondary text-white font-bold py-2 px-4 rounded mt-2 transition duration-300'>
            Add Answer Option
          </button>
        </div>
      )}
      <div className='w-full'>
        <label className='block text-gray-700' htmlFor='tooltip-en'>
          Tooltip (English)
        </label>
        <input
          id='tooltip-en'
          name='tooltip.en'
          value={question.tooltip?.en || ''}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          title='Tooltip in English'
          placeholder='Enter the tooltip in English'
        />
      </div>
      <div className='w-full'>
        <label className='block text-gray-700' htmlFor='tooltip-fi'>
          Tooltip (Finnish)
        </label>
        <input
          id='tooltip-fi'
          name='tooltip.fi'
          value={question.tooltip?.fi || ''}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          title='Tooltip in Finnish'
          placeholder='Enter the tooltip in Finnish'
        />
      </div>
      <div className='w-full'>
        <label className='block text-gray-700' htmlFor='syntaxPlaceholder-en'>
          Syntax Placeholder (English)
        </label>
        <input
          id='syntaxPlaceholder-en'
          name='syntaxPlaceholder.en'
          value={question.syntaxPlaceholder?.en || ''}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          title='Syntax Placeholder in English'
          placeholder='Enter the syntax placeholder in English'
        />
      </div>
      <div className='w-full'>
        <label className='block text-gray-700' htmlFor='syntaxPlaceholder-fi'>
          Syntax Placeholder (Finnish)
        </label>
        <input
          id='syntaxPlaceholder-fi'
          name='syntaxPlaceholder.fi'
          value={question.syntaxPlaceholder?.fi || ''}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          title='Syntax Placeholder in Finnish'
          placeholder='Enter the syntax placeholder in Finnish'
        />
      </div>
      <div className='w-full'>
        <label className='block text-gray-700' htmlFor='errorAnswer-en'>
          Error Message (English)
        </label>
        <input
          id='errorAnswer-en'
          name='errorAnswer.en'
          value={question.errorAnswer?.en || ''}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          title='Error Message in English'
          placeholder='Enter the error message in English'
        />
      </div>
      <div className='w-full'>
        <label className='block text-gray-700' htmlFor='errorAnswer-fi'>
          Error Message (Finnish)
        </label>
        <input
          id='errorAnswer-fi'
          name='errorAnswer.fi'
          value={question.errorAnswer?.fi || ''}
          onChange={handleChange}
          className='w-full p-2 border rounded'
          title='Error Message in Finnish'
          placeholder='Enter the error message in Finnish'
        />
      </div>
      <div className='flex justify-center items-center w-full mt-4'>
        <div className='flex w-full justify-between gap-4'>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300'
            onClick={handleCancel}>
            Cancel
          </button>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300'
            onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
