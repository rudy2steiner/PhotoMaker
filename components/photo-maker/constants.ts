import { PHOTOMAKER_CONFIG } from '@/lib/config/constants';
import type { GenerationOptions } from '@/lib/types/photomaker';

export const DEFAULT_OPTIONS: GenerationOptions = {
  prompt: '',
  negativePrompt: '',
  aspectRatio: PHOTOMAKER_CONFIG.DEFAULT_PARAMS.aspect_ratio_name,
  style: PHOTOMAKER_CONFIG.DEFAULT_PARAMS.style_name,
  styleStrength: PHOTOMAKER_CONFIG.DEFAULT_PARAMS.style_strength_ratio,
  numSteps: PHOTOMAKER_CONFIG.DEFAULT_PARAMS.num_steps,
  useDoodle: PHOTOMAKER_CONFIG.DEFAULT_PARAMS.use_doodle,
} as const;