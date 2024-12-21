import { create } from 'zustand';
import { DEFAULT_OPTIONS } from '@/components/photo-maker/constants';
import type { GenerationOptions } from '@/lib/types/photomaker';
import type { Example } from '@/lib/types/example';

interface PhotoMakerState {
  files: File[];
  options: GenerationOptions;
  setFiles: (files: File[]) => void;
  setOptions: (options: Partial<GenerationOptions>) => void;
  useExample: (example: Example, files: File[]) => void;
  reset: () => void;
}

export const usePhotoMakerStore = create<PhotoMakerState>((set) => ({
  files: [],
  options: DEFAULT_OPTIONS,
  setFiles: (files) => set({ files }),
  setOptions: (newOptions) =>
    set((state) => ({
      options: { ...state.options, ...newOptions },
    })),
  useExample: (example, files) =>
    set({
      files,
      options: {
        ...DEFAULT_OPTIONS,
        prompt: example.prompt,
        negativePrompt: example.negativePrompt,
        style: example.style,
        aspectRatio: example.options?.aspectRatio || DEFAULT_OPTIONS.aspectRatio,
        styleStrength: example.options?.styleStrength || DEFAULT_OPTIONS.styleStrength,
        numSteps: example.options?.numSteps || DEFAULT_OPTIONS.numSteps,
        useDoodle: example.options?.useDoodle ?? DEFAULT_OPTIONS.useDoodle,
      },
    }),
  reset: () => set({ files: [], options: DEFAULT_OPTIONS }),
}));