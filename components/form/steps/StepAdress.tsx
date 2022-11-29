import { FormButtonBack } from '@/components/form/FormButtonBack';
import { FormButtonNext } from '@/components/form/FormButtonNext';

import { QuoteDataProps } from '@/components/form';
import { Input } from '../inputs/Input';

export const StepAdress = ({
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
        <h4 className='text-xl md:text-2xl font-semibold'>Enter your home address</h4>
        <Input
          defaultValue={data.homeAdress}
          label='Home Adress'
          placeholder={'Enter you full adress'}
          onChange={(e: string) => {
            setData({ ...data, homeAdress: e });
          }}
          name={'adress'}
        />
      </span>
      <span className='flex flex-col md:flex-row w-full gap-3 items-center justify-center'>
        <FormButtonBack onClick={onBack} />
        <FormButtonNext disabled={!data.homeAdress} onClick={onNext} />
      </span>
    </>
  );
};
