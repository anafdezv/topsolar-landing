import { ChevronIcon } from '@/assets/icons/ChevronIcon';
import { Disclosure } from '@headlessui/react';

interface DisclosureCardProps {
  title: string;
  icon: JSX.Element;
  description: string;
}

export const DisclosureCard = ({ title, icon, description }: DisclosureCardProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='py-4 w-full flex justify-between items-center border-b'>
            <span className='flex items-center gap-4'>
              {' '}
              {icon} <h4 className='font-semibold'>{title}</h4>
            </span>
            <span className={`${open ? 'rotate-180' : ''} transition-all ease-in-out duration-500`}>
              <ChevronIcon />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className='text-gray-600 py-4'>
            <p>{description}</p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
