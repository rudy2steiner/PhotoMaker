'use client';

import { useTranslations } from 'next-intl';
import { EXAMPLE_PRESETS } from '@/lib/config/examples';
import { usePhotoMakerStore } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';
import { ExampleTable } from './examples/ExampleTable';
import { TooltipProvider } from '@/components/ui/tooltip';
import { loadExampleImages } from '@/lib/utils/example';

export function ExampleList() {
  const t = useTranslations();
  const { useExample } = usePhotoMakerStore();
  const { toast } = useToast();

  const handleUseExample = async (example: typeof EXAMPLE_PRESETS[number]) => {
    try {
      const imageFiles = await loadExampleImages(example.images);
      useExample(example, imageFiles);
      
      toast({
        title: t('common.success'),
        description: t('common.exampleLoaded'),
      });
    } catch (error) {
      console.error('Failed to load example:', error);
      toast({
        title: t('common.error'),
        description: t('common.exampleError'),
        variant: 'destructive',
      });
    }
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">{t('common.examples')}</h2>
      <TooltipProvider>
        <ExampleTable examples={EXAMPLE_PRESETS} onUseExample={handleUseExample} />
      </TooltipProvider>
    </section>
  );
}