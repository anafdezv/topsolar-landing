import { AdvantageCard } from '@/components/advantages/AdvantageCard';
import { advantagesInfo, AdvantagesInfoProps } from '@/components/advantages/advantagesInfo';
import { DisclosureCard } from '@/components/advantages/DisclosureCard';

export const AdvantagesSection = () => {
  return (
    <section className='w-full flex justify-center items-center py-6 md:py-12 px-6'>
      <span className='flex md:hidden flex-col w-full'>
        {advantagesInfo?.map((advantage: AdvantagesInfoProps, index) => (
          <DisclosureCard
            title={advantage.title}
            description={advantage.description}
            icon={advantage.icon}
            key={`advantage-disclosure-${index}`}
          />
        ))}
      </span>
      <span className='hidden md:flex max-w-6xl flex-wrap gap-4 items-center justify-center'>
        {advantagesInfo?.map((advantage: AdvantagesInfoProps, index) => (
          <AdvantageCard
            title={advantage.title}
            description={advantage.description}
            icon={advantage.icon}
            key={`advantage-disclosure-${index}`}
          />
        ))}
      </span>
    </section>
  );
};
