import { API_CONFIG } from '@/lib/config/api';
import { handleResponse, APIError } from './base';
import type { PhotoMakerParams, PhotoMakerResponse } from '@/lib/types/photomaker';

export class PhotoMakerAPI {
  private static async makeRequest(params: PhotoMakerParams): Promise<Response> {
    const formData = new FormData();
    
    // Properly append files with consistent naming
    params.upload_images.forEach((file) => {
      formData.append('upload_images[]', file);
    });

    // Append all other parameters
    formData.append('prompt', params.prompt);
    formData.append('negative_prompt', params.negative_prompt);
    formData.append('aspect_ratio_name', params.aspect_ratio_name);
    formData.append('style_name', params.style_name);
    formData.append('num_steps', String(params.num_steps));
    formData.append('style_strength_ratio', String(params.style_strength_ratio));
    formData.append('num_outputs', String(params.num_outputs));
    formData.append('guidance_scale', String(params.guidance_scale));
    formData.append('seed', String(params.seed));
    formData.append('use_doodle', String(params.use_doodle));
    formData.append('adapter_conditioning_scale', String(params.adapter_conditioning_scale));
    formData.append('adapter_conditioning_factor', String(params.adapter_conditioning_factor));

    const response = await fetch('/api/generate', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const error = await response.json();
      throw new APIError(
        error.message || 'Failed to generate images',
        response.status,
        error.code
      );
    }

    return response;
  }

  static async generateImage(params: PhotoMakerParams): Promise<PhotoMakerResponse> {
    try {
      const response = await this.makeRequest(params);
      const result = await handleResponse<PhotoMakerResponse>(response);
      return result;
    } catch (error) {
      console.error('PhotoMaker API Error:', error);
      if (error instanceof APIError) {
        throw error;
      }
      throw new APIError('Failed to generate images', 500);
    }
  }
}