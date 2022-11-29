import React from 'react';

export const Button = ({
  children,
  className,
  props,
}: {
  children: string;
  className?: string;
  props?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
}): JSX.Element => {
  return (
    <button
      {...props}
      className={`cursor-pointer transition text-md md:text-lg ease-in-out rounded-lg bg-orange-700 px-5 py-2 text-sm font-medium text-white hover:bg-orange-800  focus:outline-none focus:ring ${className}`}
    >
      {children}
    </button>
  );
};
