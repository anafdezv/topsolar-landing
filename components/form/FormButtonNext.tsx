import React from 'react';

export const FormButtonNext = ({
  onClick,
  ...props
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { onClick: () => void }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className='cursor-pointer md:w-fit w-full transition text-md md:text-lg ease-in-out rounded-lg bg-orange-700 px-8 py-2 text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring disabled:cursor-not-allowed disabled:bg-orange-300'
    >
      Next
    </button>
  );
};
