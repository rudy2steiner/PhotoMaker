'use client';

import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ExampleImageProps {
  src: string;
  alt: string;
  preview?: string;
  className?: string;
  showTooltip?: boolean;
}

export function ExampleImage({ 
  src, 
  alt, 
  preview, 
  className,
  showTooltip = false 
}: ExampleImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const image = (
    <div className={cn("relative aspect-square bg-muted/30 rounded overflow-hidden", className)}>
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageOff className="h-5 w-5 text-muted-foreground/50" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-200",
           'opacity-100'
          )}
          loading="lazy"
          onError={() => setError(true)}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );

  if (showTooltip && preview) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {image}
        </TooltipTrigger>
        <TooltipContent side="right" align="center" className="p-0">
          <img 
            src={preview} 
            alt={`${alt} preview`}
            className="rounded max-w-[300px] max-h-[300px] object-cover"
          />
        </TooltipContent>
      </Tooltip>
    );
  }

  return image;
}