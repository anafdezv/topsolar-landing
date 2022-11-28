import React from 'react'
import { QuoteDataProps } from '@/components/form';
import { TilesInput, TilesInputOptionProps } from '@/components/form/inputs/TilesInput'
import { FormButtonNext } from '@/components/form/FormButtonNext';
import { AutumnIcon, SpringIcon, SummerIcon, WinterIcon } from '@/assets/icons/form/SeasonIcons';
import { FormButtonBack } from '@/components/form/FormButtonBack';

export const StepSeason = ({
    data, setData, onNext, onBack
}: {
    data: QuoteDataProps;
    setData: (e: QuoteDataProps) => void;
    onNext: () => void;
    onBack: () => void;
}) => {
    const options: TilesInputOptionProps[] = [
        {
            name: 'summer',
            label: 'Summer',
            value: 'summer',
            icon: SummerIcon
        },
        {
            name: 'autumn',
            label: 'Autumn',
            value: 'autumn',
            icon: AutumnIcon
        },
        {
            name: 'winter',
            label: 'Winter',
            value: 'winter',
            icon: WinterIcon
        },
        {
            name: 'spring',
            label: 'Spring',
            value: 'spring',
            icon: SpringIcon
        },
    ]

    return (
        <>
            <TilesInput label="Choose when you want to install" name="placement" options={options} onChange={(e: string) => {
                setData({ ...data, season: e })
            }} />
            <span className="flex flex-col md:flex-row w-full gap-2">
                <FormButtonBack onClick={onBack} />
                <FormButtonNext disabled={!data.season} onClick={onNext} />
            </span>
        </>
    )
}
