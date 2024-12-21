import { PhotoMakerAPI } from '@/lib/api/photomaker';
import type { PhotoMakerParams, PhotoMakerResponse } from '@/lib/types/photomaker';

export class ImageGenerationService {
  static async generateImage(params: PhotoMakerParams): Promise<PhotoMakerResponse> {
    try {
      return await PhotoMakerAPI.generateImage(params);
    } catch (error) {
      console.error('Image Generation Service Error:', error);
      throw error;
    }
  }
}