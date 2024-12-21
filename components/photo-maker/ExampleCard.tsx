'use client';

import { Example } from './types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

interface ExampleCardProps {
  example: Example;
  onUseExample: (example: Example) => void;
}

export function ExampleCard({ example, onUseExample }: ExampleCardProps) {
  const t = useTranslations();

  return (
    <Card className="p-4 space-y-4">
      <div className="grid grid-cols-2 gap-2">
        {example.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Example ${example.id}`}
            className="w-full h-32 object-cover rounded"
          />
        ))}
      </div>
      <div className="space-y-2">
        <p className="font-medium">{example.prompt}</p>
        <p className="text-sm text-gray-600">{example.style}</p>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => onUseExample(example)}
        >
          {t('common.useExample')}
        </Button>
      </div>
    </Card>
  );
}