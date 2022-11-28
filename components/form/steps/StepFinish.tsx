import { FormButtonNext } from '@/components/form/FormButtonNext';
import Link from 'next/link';
import React from 'react'

export const StepFinish = () => {
    return (
        <span className='w-full flex flex-col gap-9 items-center'>
            <h4 className="text-xl md:text-2xl font-semibold">
                You are one step away
                from green energy!
            </h4>
            <h4 className="text-lg md:text-xl ">
                We will send you the
                budget very soon.
            </h4>
            <Link href="/"> <FormButtonNext onClick={() => { }} />
            </Link>
        </span>
    )
}
