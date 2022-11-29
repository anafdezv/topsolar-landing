import React from 'react';

export const Input = ({
  defaultValue,
  name,
  label,
  type = 'text',
  placeholder,
  onChange,
  showLabel = false,
}: {
  defaultValue?: string;
  type?: string;
  label: string;
  placeholder: string;
  onChange: (e: string) => void;
  name: string;
  showLabel?: boolean;
}) => {
  return (
    <span className='w-full flex flex-col  gap-2'>
      <label htmlFor={name} className={`${showLabel ? 'text-md font-medium' : 'sr-only'}`}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        defaultValue={defaultValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        className='w-full rounded-lg border border-gray-200 py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400	'
        placeholder={placeholder}
      />
    </span>
  );
};
