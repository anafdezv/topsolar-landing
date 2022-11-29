import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const FutureSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='w-full relative flex items-center justify-center  py-16 px-4'>
      <span className='max-w-4xl flex flex-col gap-4 transition-all ease-in-out duration-300 z-10'>
        <h4 className='text-white text-4xl text-center md:text-end font-semibold'>The future of solar energy</h4>
        <p className='text-white  text-center md:text-end'>
          Renewable energy has a medium-term horizon and Europe has already set 2030 as the year where energy consumption will
          be 35% renewable. In the automotive and vehicle sector, it is expected that by 2040 there will no longer be any
          internal combustion engines and the industry will also be committed to this objective.
        </p>
        {!isOpen && (
          <button className='text-white  text-center  md:text-end underline' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Read less' : 'Read more'}
          </button>
        )}
        {isOpen && (
          <p className='text-white  text-center  md:text-end'>
            Solar energy is an interesting alternative in those places where conditions are favourable and, above all, in small
            buildings and for self-consumption. This is important if you are interested in building a private home and want to
            have an autonomous and sustainable way of generating energy. In Spain, the generation of solar energy has had ups
            and downs due to contradictory legislation and the wrongly named &quot;sun tax&quot;, but in the short term a
            rebound in use is expected.
          </p>
        )}
        {isOpen && (
          <button className='text-white  md:text-end text-center underline' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Read less' : 'Read more'}
          </button>
        )}

        <Link href='get-quote'>
          <Button className='w-full sm:w-fit md:ml-auto'>Get your quote</Button>
        </Link>
      </span>
      <Image
        src='/images/futurebg.webp'
        alt='Solar energy'
        layout='fill'
        objectFit='cover'
        className='absolute z-0'
        loading='lazy'
      />
    </section>
  );
};
