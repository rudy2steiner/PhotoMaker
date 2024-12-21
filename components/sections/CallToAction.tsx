'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useScroll } from '@/lib/hooks/use-scroll';

export function CallToAction() {
  const t = useTranslations();
  const { scrollToElement } = useScroll();

  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
        <p className="text-lg mb-8 opacity-90">{t('cta.description')}</p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="font-semibold"
          onClick={() => scrollToElement('photo-maker')}
        >
          {t('cta.button')}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}