export const PHOTOMAKER_CONFIG = {
  MODEL_ID: "https://tencentarc-photomaker-v2.hf.space",
  DEFAULT_PARAMS: {
    aspect_ratio_name: "Instagram (1:1)",
    style_name: "(No style)",
    num_steps: 20,
    style_strength_ratio: 15,
    num_outputs: 4,
    guidance_scale: 7.5,
    use_doodle: false,
    adapter_conditioning_scale: 0.5,
    adapter_conditioning_factor: 0.5
  }
} as const;

export const ASPECT_RATIOS = [
  { value: 'Instagram (1:1)', label: 'Instagram (1:1)' },
  { value: 'Instagram Portrait (4:5)', label: 'Instagram Portrait (4:5)' },
  { value: 'Landscape (16:9)', label: 'Landscape (16:9)' },
  { value: 'Portrait (9:16)', label: 'Portrait (9:16)' },
] as const;

export const STYLE_PRESETS = [
  { value: '(No style)', label: '(No style)' },
  { value: 'Portrait Photography', label: 'Portrait Photography' },
  { value: 'Cinematic', label: 'Cinematic' },
  { value: 'Anime Style', label: 'Anime Style' },
] as const;