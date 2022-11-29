import React from 'react'
import { CommunityIcon, HomeIcon, BussinessIcon } from '@/assets/icons/form/PlacementIcons';
import { QuoteDataProps } from '@/components/form';
import { TilesInput, TilesInputOptionProps } from '@/components/form/inputs/TilesInput'
import { FormButtonNext } from '@/components/form/FormButtonNext';

export const StepPlacement = ({
    data, setData, onNext
}: {
    data: QuoteDataProps;
    setData: (e: QuoteDataProps) => void;
    onNext: () => void;
}) => {
    const options: TilesInputOptionProps[] = [{
        name: 'house',
        label: 'One-family house',
        value: 'house',
        icon: HomeIcon
    },
    {
        name: 'community',
        label: 'Community of neighbors',
        value: 'community',
        icon: CommunityIcon
    },
    {
        name: 'bussiness',
        label: 'Business',
        value: 'bussiness',
        icon: BussinessIcon
    },]

    return (
        <>
            <TilesInput defaultValue={data.placement} label="Choose where you want to install" name="placement" options={options} onChange={(e: string) => {
                setData({ ...data, placement: e })
            }} />
            <FormButtonNext disabled={!data.placement} onClick={onNext} />
        </>
    )
}
