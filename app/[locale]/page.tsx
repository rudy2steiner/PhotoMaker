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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SocialProof />
      <Benefits />
      <div className="container mx-auto py-12 space-y-12">
        <PhotoMaker />
        <div className="pt-8 border-t">
          <ExampleList />
        </div>
      </div>
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </main>
  );
}