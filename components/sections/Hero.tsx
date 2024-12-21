'use client';

import { useTranslations } from 'next-intl';
import { Sparkles } from 'lucide-react';

export function Hero() {
  const t = useTranslations();

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-muted/80 text-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              {t('hero.tagline')}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {t('hero.description')}
            </p>
          </div>
          <div className="relative w-full h-[500px]">
            <img
              src="/rf.gif"
              alt="PhotoMaker AI Transformation"
              className="w-full h-full object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}