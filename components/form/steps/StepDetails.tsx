import { QuoteDataProps } from '@/components/form';
import { FormButtonBack } from '@/components/form/FormButtonBack';
import { FormButtonNext } from '@/components/form/FormButtonNext';
import React from 'react';
import { Input } from '../inputs/Input';

export const StepDetails = ({
  data,
  setData,
  onNext,
  onBack,
}: {
  data: QuoteDataProps;
  setData: (e: QuoteDataProps) => void;
  onNext: () => void;
  onBack: () => void;
}) => {
  return (
    <>
      <span className='w-full flex flex-col gap-9 items-center'>
        <h4 className='text-xl md:text-2xl font-semibold'>To finish, we need some contact details</h4>
        <Input
          showLabel
          defaultValue={data.fullName}
          label='Full name'
          placeholder={'Enter your full name'}
          onChange={(e: string) => {
            setData({ ...data, fullName: e });
          }}
          name={'fullName'}
        />
        <Input
          showLabel
          type='number'
          label='Phone number'
          defaultValue={data.phoneNumber}
          placeholder={'Enter your phone number'}
          onChange={(e: string) => {
            setData({ ...data, phoneNumber: e });
          }}
          name={'phoneNumber'}
        />
        <Input
          showLabel
          label='Email'
          type='email'
          defaultValue={data.email}
          placeholder={'Enter your email'}
          onChange={(e: string) => {
            setData({ ...data, email: e });
          }}
          name={'email'}
        />
        <label htmlFor={'acceptPrivacy'} className='flex gap-4'>
          <input
            type='checkbox'
            value='accept'
            id={'acceptPrivacy'}
            name={'acceptPrivacy'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, acceptPrivacy: e.target.value })}
            className='h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm accent-orange-500'
          />

          <span className='text-sm text-gray-700'>I have read and accept the Privacy Policy</span>
        </label>
      </span>
      <span className='flex flex-col md:flex-row w-full gap-3 items-center justify-center'>
        <FormButtonBack onClick={onBack} />
        <FormButtonNext
          disabled={!data.fullName || !data.email || !data.phoneNumber || !data.acceptPrivacy}
          onClick={onNext}
        />{' '}
      </span>
    </>
  );
};
