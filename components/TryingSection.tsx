import { Button } from '@/components/ui/Button';

export const TryingSection = () => {
  return (
    <section className='w-full items-center justify-center px-6 py-16 gap-6 flex flex-col'>
      <h3 className='text-2xl font-bold  text-center' > Are you up for trying them out?</h3>
      <p className=' max-w-4xl text-center'>
        Solar panels are an option for those who want clean, economical energy with a durable structure. Now that you're aware
        of the advantages and disadvantages of using solar energy, you will be able to make the right decision for your needs
        without running into problems.
      </p>
      <Button className='w-full sm:w-fit'>Get more info</Button>
    </section>
  );
};
