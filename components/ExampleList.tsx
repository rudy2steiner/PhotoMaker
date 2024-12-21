'use client';

import { useTranslations } from 'next-intl';
import { ExampleCard } from '@/components/photo-maker/ExampleCard';
import { usePhotoMakerStore } from '@/lib/store';
import type { Example } from '@/components/photo-maker/types';

const examples: Example[] = [
  {
    id: 1,
    images: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2'
    ],
    prompt: 'Professional portrait with natural lighting',
    style: 'Portrait Photography',
    negativePrompt: 'Blurry, oversaturated',
    options: {
      aspectRatio: '4:5',
      styleStrength: 20,
      numSteps: 25
    }
  },
  {
    id: 2,
    images: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126'
    ],
    prompt: 'Artistic black and white portrait',
    style: 'Black & White',
    negativePrompt: 'Color, harsh shadows',
    options: {
      aspectRatio: '1:1',
      styleStrength: 30,
      numSteps: 30
    }
  }
];

export function ExampleList() {
  const t = useTranslations('common');
  const useExample = usePhotoMakerStore((state) => state.useExample);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{t('examples')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example) => (
          <ExampleCard
            key={example.id}
            example={example}
            onUseExample={useExample}
          />
        ))}
      </div>
    </div>
  );
}