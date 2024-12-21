'use client';

import { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ImageGenerationService } from '@/lib/services/image-generation';
import { useRequestTimeout } from './use-request-timeout';
import type { PhotoMakerParams } from '@/lib/types/photomaker';

export function useImageGeneration() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const startTimeRef = useRef<number>();
  const { toast } = useToast();

  const handleTimeout = () => {
    setIsGenerating(false);
    startTimeRef.current = undefined;
    toast({
      title: 'Error',
      description: 'Request timed out. Please try again.',
      variant: 'destructive',
    });
  };

  useRequestTimeout(isGenerating, handleTimeout, 120000);

  const generateImages = async (params: PhotoMakerParams) => {
    setIsGenerating(true);
    startTimeRef.current = Date.now();
    
    try {
      const result = await ImageGenerationService.generateImage(params);
      setGeneratedImages(result.data[0]);
      toast({
        title: 'Success',
        description: 'Images generated successfully',
      });
    } catch (error) {
      console.error('Generation error:', error);
      toast({
        title: 'Error',
        description: String(error),
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
      startTimeRef.current = undefined;
    }
  };

  return {
    isGenerating,
    generatedImages,
    generateImages,
    startTime: startTimeRef.current
  };
}