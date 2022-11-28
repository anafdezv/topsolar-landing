import { AdvantagesSection } from '@/components/advantages/AdvantagesSection';
import { CTA } from '@/components/cta/CTA';
import { FutureSection } from '@/components/FutureSection';
import { Footer } from '@/components/navigation';
import { Header } from '@/components/navigation/Header';
import { SummarySection } from '@/components/SummarySection';
import { TryingSection } from '@/components/TryingSection';

export default function Home() {
  return (
    <main className='w-screen h-screen'>
      <Header />
      <CTA />
      <SummarySection />
      <AdvantagesSection />
      <FutureSection />
      <TryingSection />
      <Footer />
    </main>
  );
}
