export interface Example {
  id: number;
  images: string[];
  prompt: string;
  style: string;
  negativePrompt: string;
  preview: string;
  options?: {
    aspectRatio?: string;
    styleStrength?: number;
    numSteps?: number;
    useDoodle?: boolean;
  };
}

export interface StylePreset {
  value: string;
  label: string;
  description: string;
  previewUrl: string;
}