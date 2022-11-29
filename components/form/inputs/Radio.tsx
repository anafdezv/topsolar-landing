import React from 'react';

export const Radio = ({
  defaultValue,
  name,
  label,
  onChange,
  value,
}: {
  defaultValue?: string;
  label: string;
  onChange: (e: string) => void;
  name: string;
  value: string;
}) => {
  return (
    <label htmlFor={name} className='flex gap-4'>
      <input
        type='radio'
        id={name}
        name={value}
        value={value}
        checked={defaultValue === value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        className='h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm accent-orange-500'
      />

      <span className='text-sm text-gray-700 font-semibold'>{label}</span>
    </label>
  );
};
