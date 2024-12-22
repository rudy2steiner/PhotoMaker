import type { Example } from '@/lib/types/example';
import { PHOTOMAKER_CONFIG } from './constants';

export const EXAMPLE_PRESETS: Example[] = [
  {
    id: 1,
    images: [
      '/demo/bc.jpeg'
    ],
    prompt: 'instagram photo, portrait photo of a woman img, colorful, perfect face, natural skin, hard shadows, film grain',
    style: '(No style)',
    negativePrompt: 'asymmetry, worst quality, low quality, illustration, 3d, 2d, painting, cartoons, sketch, open mouth',
    options: {
      aspectRatio: PHOTOMAKER_CONFIG.DEFAULT_PARAMS.aspect_ratio_name,
      styleStrength: PHOTOMAKER_CONFIG.DEFAULT_PARAMS.style_strength_ratio,
      numSteps: PHOTOMAKER_CONFIG.DEFAULT_PARAMS.num_steps,
      useDoodle: false
    }
  },
  {
    id: 2,
    images: [
      '/demo/demo0.jpeg',
      '/demo/demo1.jpeg'
    ],
    prompt: 'professional headshot, business attire, confident pose, studio lighting, a man img',
    style: 'Photographic (Default)',
    negativePrompt: 'blurry, oversaturated, cartoon, painting, illustration, low quality',
    options: {
      aspectRatio: PHOTOMAKER_CONFIG.DEFAULT_PARAMS.aspect_ratio_name,
      styleStrength: 30,
      numSteps: 25,
      useDoodle: false
    }
  }
];