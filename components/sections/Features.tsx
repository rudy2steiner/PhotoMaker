'use client';

import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';

export function Features() {
  const t = useTranslations('features');

  const features = [
    'styleTransfer',
    'customPrompts',
    'batchProcessing',
    'highResolution'
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature} className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {t(`items.${feature}.title`)}
              </h3>
              <p className="text-muted-foreground">
                {t(`items.${feature}.description`)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}