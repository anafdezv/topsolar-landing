import { Radio } from '@/components/form/inputs/Radio';

export interface RadioGroupOptionProps {
  label: string;
  value: string;
}

export const RadioGroup = ({
  label,
  options = [],
  onChange,
  name,
  defaultValue,
}: {
  label: string;
  options: RadioGroupOptionProps[];
  onChange: (e: string) => void;
  name: string;
  defaultValue?: string;
}) => {
  return (
    <span className='w-full flex flex-col gap-9 items-center'>
      <h4 className='text-xl md:text-2xl font-semibold'>{label}</h4>
      <ul className='flex flex-col md:flex-row gap-4'>
        {options.map((option: RadioGroupOptionProps) => (
          <li key={`radio-option-${option.value}`}>
            <Radio label={option.label} defaultValue={defaultValue} onChange={onChange} name={name} value={option.value} />
          </li>
        ))}
      </ul>
    </span>
  );
};
