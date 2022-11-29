import { Button } from '@/components/ui';
import Link from 'next/link';

export const SummarySection = () => {
    return (
        <section className='w-full items-center justify-center px-6 py-16 gap-6 flex flex-col'>
            <h3 className='text-2xl font-bold'>Why Top Solar?</h3>
            <p className=' max-w-4xl  text-center'>
                Solar panels are a possibility for you if you want to consume <strong>your own, clean energy and save money</strong> in
                the long term.
                <br />
                <br />
                Solar panels are a long-term investment, so to help you to make the decision, we&apos;ve put together a guide with the
                various advantages and disadvantages of using this renewable energy for your house, as well as an outlook of
                <strong>the future horizon of solar energy.</strong>
            </p>
            <Link href="get-quote">
                <Button className='w-full sm:w-fit'>Get more info</Button>
            </Link>
        </section>
    );
};
