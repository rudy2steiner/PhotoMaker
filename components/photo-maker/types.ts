export interface GeneratedImage {
  url: string;
  caption?: string;
}

export interface GenerationOptions {
  prompt: string;
  negativePrompt: string;
  aspectRatio: string;
  styleStrength: number;
  numSteps: number;
  useDoodle: boolean;
}

export interface Example {
  id: number;
  images: string[];
  prompt: string;
  style: string;
  negativePrompt: string;
  options?: Partial<GenerationOptions>;
}

export interface GenerateRequest {
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
  adapter_conditioning_scale: number;
  adapter_conditioning_factor: number;
}