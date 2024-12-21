import { Client } from '@gradio/client';
import type { PhotoMakerParams } from '@/lib/types/photomaker';
import { PHOTOMAKER_CONFIG } from '@/lib/config/constants';

export class GradioService {
  private static instance: Client | null = null;

  private static async getClient() {
    if (!this.instance) {
      this.instance = await Client.connect(PHOTOMAKER_CONFIG.MODEL_ID);
    }
    return this.instance;
  }

  static async predict(params: PhotoMakerParams) {
    try {
      const client = await this.getClient();
      const result = await client.predict("/predict", [
        params.upload_images,
        params.prompt,
        params.negative_prompt,
        params.aspect_ratio_name,
        params.style_name,
        params.num_steps,
        params.style_strength_ratio,
        params.num_outputs,
        params.guidance_scale,
        params.seed,
        params.use_doodle,
        params.sketch_image,
        params.adapter_conditioning_scale,
        params.adapter_conditioning_factor,
      ]);

      return { images: result.data };
    } catch (error) {
      console.error('Gradio Service Error:', error);
      throw error;
    }
  }
}