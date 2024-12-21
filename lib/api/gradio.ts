import { client } from '@gradio/client';
import { env } from '@/env';
import type { PhotoMakerParams, PhotoMakerResponse } from '@/lib/types/photomaker';

export class GradioAPI {
  private static instance: ReturnType<typeof client>;

  private static async getInstance() {
    if (!this.instance) {
      this.instance = client(env.GRADIO_MODEL_ID);
    }
    return this.instance;
  }

  static async generateImage(params: PhotoMakerParams): Promise<PhotoMakerResponse> {
    try {
      const app = await this.getInstance();
      const result = await app.predict('/predict', [
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
      console.error('Gradio API Error:', error);
      throw new Error('Failed to generate images');
    }
  }
}