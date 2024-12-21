export interface GenerationOptions {
  prompt: string;
  negativePrompt: string;
  aspectRatio: string;
  style: string;
  styleStrength: number;
  numSteps: number;
  useDoodle: boolean;
}

export interface PhotoMakerParams {
  upload_images: File[];
  prompt: string;
  negative_prompt: string;
  aspect_ratio_name: string;
  style_name: string;
  num_steps: number;
  style_strength_ratio: number;
  num_outputs: number;
  guidance_scale: number;
  seed: number;
  use_doodle: boolean;
  sketch_image: null;
  adapter_conditioning_scale: number;
  adapter_conditioning_factor: number;
}

export interface PhotoMakerResponse {
  images: string[];
  error?: string;
}