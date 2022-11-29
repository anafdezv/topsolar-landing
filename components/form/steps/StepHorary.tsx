import { AllDayIcon, DayIcon, NightIcon } from '@/assets/icons/form/HoraryIcons';
import { QuoteDataProps } from '@/components/form';
import { FormButtonBack } from '@/components/form/FormButtonBack';
import { FormButtonNext } from '@/components/form/FormButtonNext';
import { TilesInput, TilesInputOptionProps } from '@/components/form/inputs/TilesInput';

export const StepHorary = ({
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
  const options: TilesInputOptionProps[] = [
    {
      name: 'night',
      label: 'At night',
      value: 'night',
      icon: NightIcon,
    },
    {
      name: 'day',
      label: 'At day',
      value: 'day',
      icon: DayIcon,
    },
    {
      name: 'all-day',
      label: 'All day',
      value: 'all-day',
      icon: AllDayIcon,
    },
  ];

  return (
    <>
      <TilesInput
        defaultValue={data.horary}
        label='When do you consume more energy?'
        name='horary'
        options={options}
        onChange={(e: string) => {
          setData({ ...data, horary: e });
        }}
      />
      <span className='flex flex-col md:flex-row w-full gap-3 items-center justify-center'>
        <FormButtonBack onClick={onBack} />
        <FormButtonNext disabled={!data.horary} onClick={onNext} />
      </span>
    </>
  );
};
