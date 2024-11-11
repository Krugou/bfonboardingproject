import React from 'react';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: 'text' | 'textarea' | 'number';
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
}) => {
  return (
    <div className='mb-2'>
      <label className='block text-gray-700' htmlFor={id}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className='w-full p-2 border rounded'
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className='w-full p-2 border rounded'
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormField;
