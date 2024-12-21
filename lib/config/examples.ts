import type { Example } from '@/lib/types/example';
import { PHOTOMAKER_CONFIG } from './constants';

export const EXAMPLE_PRESETS: Example[] = [
  {
    id: 1,
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80',
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&h=400&q=80'
    ],
    prompt: 'professional portrait photo, natural lighting, soft background bokeh, high-end fashion magazine style, perfect face, flawless skin, cinematic color grading',
    style: 'Portrait Photography',
    negativePrompt: 'deformed, blurry, bad anatomy, disfigured, poorly drawn face, mutation, mutated, extra limb, ugly, poorly drawn hands, missing limb, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, distorted, oversaturated',
    preview: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&h=800&q=80',
    options: {
      aspectRatio: PHOTOMAKER_CONFIG.DEFAULT_PARAMS.aspect_ratio_name,
      styleStrength: 20,
      numSteps: 25,
      useDoodle: false
    }
  },
  {
    id: 2,
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80'
    ],
    prompt: 'cinematic portrait, moody lighting, dramatic shadows, anamorphic lens flare, professional photography, high-end retouching, editorial style',
    style: 'Cinematic',
    negativePrompt: 'cartoon, anime, illustration, painting, drawing, artwork, oversaturated, high contrast, grainy, blurry, soft, out of focus, bad composition, amateur, unprofessional',
    preview: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=800&q=80',
    options: {
      aspectRatio: PHOTOMAKER_CONFIG.DEFAULT_PARAMS.aspect_ratio_name,
      styleStrength: 30,
      numSteps: 30,
      useDoodle: false
    }
  }
];