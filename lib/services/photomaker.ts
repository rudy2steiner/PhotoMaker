import type { PhotoMakerParams, PhotoMakerResponse } from '../types/photomaker';
import { Client } from '@gradio/client';
import { PHOTOMAKER_CONFIG } from '@/lib/config/constants';

export class PhotoMakerService {
  static async generateImage(params: PhotoMakerParams): Promise<PhotoMakerResponse> {
    try {
      const client = await Client.connect(PHOTOMAKER_CONFIG.MODEL_ID);
      const result = await client.predict("/generate_image", {
        upload_images: params.upload_images,
        prompt: params.prompt,
        negative_prompt: params.negative_prompt,
        aspect_ratio_name: params.aspect_ratio_name,
        style_name: params.style_name,
        num_steps: params.num_steps,
        style_strength_ratio: params.style_strength_ratio,
        num_outputs: params.num_outputs,
        guidance_scale: params.guidance_scale,
        seed: params.seed,
        use_doodle: params.use_doodle,
        sketch_image: params.sketch_image,
        adapter_conditioning_scale: params.adapter_conditioning_scale,
        adapter_conditioning_factor: params.adapter_conditioning_factor,
      });
      return { images: result.data };
    } catch (error) {
      console.error('PhotoMaker Service Error:', error);
      throw error;
    }
  }
}