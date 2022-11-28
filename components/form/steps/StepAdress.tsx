import { FormButtonNext } from '@/components/form/FormButtonNext';
import { FormButtonBack } from '@/components/form/FormButtonBack';

import { QuoteDataProps } from '@/components/form';
import React from 'react'
import { Input } from '../inputs/Input';

export const StepAdress = ({
    data, setData, onNext, onBack
}: {
    data: QuoteDataProps;
    setData: (e: QuoteDataProps) => void;
    onNext: () => void;
    onBack: () => void;

}) => {
    return (
        <>
            <span className='w-full flex flex-col gap-9 items-center'>
                <h4 className="text-xl md:text-2xl font-semibold">Enter your home address</h4>
                <Input label="Home Adress" placeholder={'Enter you full adress'} onChange={(e: string) => {
                    setData({ ...data, homeAdress: e })
                }} name={'adress'} />
            </span>
            <span className="flex flex-col md:flex-row w-full gap-2">
                <FormButtonBack  onClick={onBack} />
                <FormButtonNext disabled={!data.homeAdress} onClick={onNext} />
            </span>
        </>
    )
}
