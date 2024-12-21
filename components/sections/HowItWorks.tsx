'use client';

import { useTranslations } from 'next-intl';

export function HowItWorks() {
  const t = useTranslations('howItWorks');
  const steps = ['upload', 'style', 'generate', 'download'];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step} className="relative">
              <div className="text-4xl font-bold text-primary/20 mb-4">
                {t(`steps.${step}.number`)}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t(`steps.${step}.title`)}
              </h3>
              <p className="text-muted-foreground">
                {t(`steps.${step}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}