export const PHOTOMAKER_CONFIG = {
  MODEL_ID: "https://tencentarc-photomaker-v2.hf.space",
  DEFAULT_PARAMS: {
    aspect_ratio_name: "Instagram (1:1)",
    style_name: "(No style)",
    num_steps: 20,
    style_strength_ratio: 15,
    num_outputs: 2,
    guidance_scale: 7.5,
    use_doodle: false,
    adapter_conditioning_scale: 0.5,
    adapter_conditioning_factor: 0.5
  }
} as const;

export const ASPECT_RATIOS = [
  { value: 'Instagram (1:1)', label: 'Instagram (1:1)' },
  { value: 'Portrait (9:16)', label: 'Portrait (9:16)' },
  { value: '35mm film / Landscape (3:2)', label: 'Landscape (3:2)' },
  { value: '35mm film / Portrait (2:3)', label: 'Portrait (2:3)' },
  { value: 'Widescreen Monitor / Portrait (10:16)', label: 'Portrait (10:16)' },
] as const;

export const STYLE_PRESETS = [
  { value: '(No style)', label: '(No style)' },
  { value: 'Photographic (Default)', label: 'Photographic (Default)' },
  { value: 'Cinematic', label: 'Cinematic' },
  { value: 'Disney Character', label: 'Disney Character' },
  { value: 'Digital Art', label: 'Digital Art' },
  { value: 'Fantasy Art', label: 'Fantasy Art' },
  { value: 'Neonpunk', label: 'Neonpunk' },
  { value: 'Comic book', label: 'Comic book' },

] as const;