import type { Example } from '@/lib/types/example';
import { PHOTOMAKER_CONFIG } from './constants';

export const EXAMPLE_PRESETS: Example[] = [
  {
    id: 1,
    images: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
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
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126'
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