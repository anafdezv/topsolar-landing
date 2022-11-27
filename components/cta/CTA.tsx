import { CTAExplore } from '@/components/cta/CTAExplore'
import { Button } from '@/components/ui'
import React from 'react'

export const CTA = (): JSX.Element => {
    return (
        <span className='relative w-full h-full bg-cta bg-cover bg-bottom flex flex-col items-center justify-center'>
            <section className='w-full gap-4 sm:gap-6 h-full flex flex-col items-center justify-center md:items-end  px-12 max-w-6xl'>
                <span className='flex flex-col sm:gap-2'>
                    <h1 className="text-3xl sm:text-6xl text-white font-semibold text-center md:text-right">
                        The perfect green<br />
                        energy for your home
                    </h1>
                    <h2 className="uppercase text-xl sm:text-3xl text-gray-100 font-semibold text-center  md:text-right">
                        Now up to 75% off
                    </h2>
                </span>
                <Button>
                    Get your quote
                </Button>
            </section>
            <CTAExplore />
        </span>
    )
}