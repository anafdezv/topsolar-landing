import { CTA } from '@/components/cta/CTA'
import { Header } from '@/components/navigation/Header'
import { SummarySection } from '../components/SummarySection';


export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <CTA />
      <SummarySection />
    </div>
  )
}
