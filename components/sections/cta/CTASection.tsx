'use client';

import { useTranslations } from 'next-intl';
import { CTAButton } from './CTAButton';

export function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
        <p className="text-lg mb-8 opacity-90">{t('description')}</p>
        <CTAButton label={t('button')} />
      </div>
    </section>
  );
}