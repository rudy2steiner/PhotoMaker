import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { Benefits } from '@/components/sections/Benefits';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { PhotoMaker } from '@/components/photo-maker/PhotoMaker';
import { ExampleList } from '@/components/photo-maker/ExampleList';
import { Testimonials } from '@/components/sections/Testimonials';
import { CallToAction } from '@/components/sections/CallToAction';
import { FAQ } from '@/components/sections/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customizing Realistic Human Photos | Free Online - PhotoMaker',
  description: 'Customizing Realistic Human Photos via Stacked ID Embedding.',
  keywords: [
  'photomaker v2',' photomaker style',' photomaker',' photomakers',' photo maker v2',' photo maker customizing realistic',' photomaker2',' photomaker customizing realistic human photos','stacked id embedding',' photo maker',' image generator'
  ],
}
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SocialProof />

      <div className="container mx-auto py-12 space-y-12">
        <PhotoMaker />
        <div className="pt-8 border-t">
          <ExampleList />
        </div>
      </div>
      <Benefits />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </main>
  );
}