import { FormQuote } from '@/components/form';
import { Header } from '@/components/navigation';
import React, { useState } from 'react'



const GetQuote = () => {
    return (
        <section className='w-screen h-screen'>
            <Header />
            <FormQuote />
        </section>
    )
}

export default GetQuote;