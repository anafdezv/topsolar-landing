import Link from 'next/link';

export const StepFinish = () => {
  return (
    <span className='w-full flex flex-col gap-9 items-center'>
      <h4 className='text-xl md:text-2xl font-semibold'>You are one step away from green energy!</h4>
      <h4 className='text-lg md:text-xl '>We will send you the budget very soon.</h4>
      <Link href='/'>
        <button className='cursor-pointer md:w-fit w-full transition text-md md:text-lg ease-in-out rounded-lg bg-orange-700 px-8 py-2 text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring disabled:cursor-not-allowed disabled:bg-orange-300'>
          Go home
        </button>
      </Link>
    </span>
  );
};
