import React from 'react';

interface AdvantageCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export const AdvantageCard = ({ title, icon, description }: AdvantageCardProps) => {
  return (
    <span className='bg-gray-50 w-[480px] min-w-[480px] h-[372px] min-h-[372px] rounded-xl px-6 py-6 flex flex-col gap-2 items-start justify-center'>
      {icon}
      <h4 className='text-xl font-semibold'>{title}</h4>
      <p>{description}</p>
    </span>
  );
};
