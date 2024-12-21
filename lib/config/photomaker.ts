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
    sketch_image: null,
    adapter_conditioning_scale: 0.5,
    adapter_conditioning_factor: 0.5
  }
} as const;