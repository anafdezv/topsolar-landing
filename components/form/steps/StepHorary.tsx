import React from 'react'
import { QuoteDataProps } from '@/components/form';
import { TilesInput, TilesInputOptionProps } from '@/components/form/inputs/TilesInput'
import { FormButtonNext } from '@/components/form/FormButtonNext';
import { AllDayIcon, DayIcon, NightIcon } from '@/assets/icons/form/HoraryIcons';
import { FormButtonBack } from '@/components/form/FormButtonBack';

export const StepHorary = ({
    data, setData, onNext, onBack
}: {
    data: QuoteDataProps;
    setData: (e: QuoteDataProps) => void;
    onNext: () => void;
    onBack: () => void;
}) => {
    const options: TilesInputOptionProps[] = [{
        name: 'night',
        label: 'At night',
        value: 'night',
        icon: NightIcon
    },
    {
        name: 'day',
        label: 'At day',
        value: 'day',
        icon: DayIcon
    },
    {
        name: 'all-day',
        label: 'All day',
        value: 'all-day',
        icon: AllDayIcon
    },]

    return (
        <>
            <TilesInput label="When do you consume more energy?" name="horary" options={options} onChange={(e: string) => {
                setData({ ...data, horary: e })
            }} />
            <span className="flex flex-col md:flex-row w-full gap-2">
                <FormButtonBack onClick={onBack} />
                <FormButtonNext disabled={!data.horary} onClick={onNext} />
            </span>
        </>
    )
}
