'use client';

import { useTranslations } from 'next-intl';
import { TestimonialCard } from './TestimonialCard';
import { cn } from '@/lib/utils';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export function TestimonialSection() {
  const t = useTranslations('testimonials');
  const testimonials = t.raw('items') as Testimonial[];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg text-muted-foreground">{t('subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              className={cn(
                "opacity-0 animate-in fade-in slide-in-from-bottom-4",
                index === 0 && "delay-0",
                index === 1 && "delay-150",
                index === 2 && "delay-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}