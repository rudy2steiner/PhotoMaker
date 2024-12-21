import { client } from '@gradio/client';
import { PHOTOMAKER_CONFIG } from '../config/photomaker';
import type { PhotoMakerParams } from '../types/photomaker';

export class GradioClient {
  private static instance: ReturnType<typeof client>;

  private static async getInstance() {
    if (!this.instance) {
      this.instance = await client(PHOTOMAKER_CONFIG.MODEL_ID);
    }
    return this.instance;
  }

  static async predict(params: PhotoMakerParams) {
    const app = await this.getInstance();
    return await app.predict('/predict', [
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
  }
}