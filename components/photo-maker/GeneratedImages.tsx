'use client';

import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ImageIcon } from 'lucide-react';
import type { GeneratedImage } from './types';

interface GeneratedImagesProps {
  images: GeneratedImage[];
}

export function GeneratedImages({ images }: GeneratedImagesProps) {
  const t = useTranslations('common');

  const handleDownload = async (imageUrl: string, index: number) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `photomaker-${index + 1}.webp`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Failed to download image:', error);
    }
  };

  return (
    <Card className="p-3">
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-sm font-medium">{t('generated')}</h3>
      </div>
      
      {images.length > 0 ? (
        <div className="grid grid-cols-2 gap-1.5">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group aspect-square bg-muted/30 rounded-md overflow-hidden"
            >
              <img
                src={image.url.image.url}
                alt={`Generated ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white hover:text-white hover:bg-white/20"
                  onClick={() => handleDownload(image.url.image.url, index)}
                >
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-6 text-muted-foreground">
          <ImageIcon className="h-8 w-8 mb-2 opacity-50" />
          <p className="text-xs">Generated images will appear here</p>
        </div>
      )}
    </Card>
  );
}