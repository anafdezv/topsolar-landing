import React from 'react'
import { PowerEnum, QuoteDataProps } from '@/components/form';
import { TilesInput } from '@/components/form/inputs/TilesInput'
import { FormButtonNext } from '@/components/form/FormButtonNext';
import { AllDayIcon, DayIcon, NightIcon } from '@/assets/icons/form/HoraryIcons';
import { RadioGroup, RadioGroupOptionProps } from '@/components/form/inputs/RadioGroup';
import { FormButtonBack } from '@/components/form/FormButtonBack';

export const StepPower = ({
    data, setData, onNext, onBack
}: {
    data: QuoteDataProps;
    setData: (e: QuoteDataProps) => void;
    onNext: () => void;
    onBack: () => void;
}) => {
    const options: RadioGroupOptionProps[] = [
        {
            label: '2,3 kW',
            value: PowerEnum.TWOTHREE,
        },
        {
            label: '3,45 kW',
            value: PowerEnum.THREEFORTYFIVE,
        },
        {
            label: '4,6 kW',
            value: PowerEnum.FOURSIX,
        },
        {
            label: '5,75 kW',
            value: PowerEnum.FIVESEVENTYFIVE,
        },
        {
            label: '6,9 kW',
            value: PowerEnum.SIXNINE,
        },
        {
            label: 'I don’t know',
            value: PowerEnum.UNKNOWN,
        },
    ]

    return (
        <>
            <RadioGroup
                label='What power do you have contracted?'
                options={options} onChange={(e: string) => {
                    setData({ ...data, powerContracted: e })
                }}
                name="powerContracted" />
            <span className="flex flex-col md:flex-row w-full gap-2">
                <FormButtonBack onClick={onBack} />
                <FormButtonNext disabled={!data.powerContracted} onClick={onNext} />
            </span>
        </>
    )
}
