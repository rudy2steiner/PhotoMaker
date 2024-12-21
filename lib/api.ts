export interface GenerateRequest {
  upload_images: File[];
  prompt: string;
  negative_prompt: string;
  aspect_ratio_name: string;
  style_name: string;
  num_steps: number;
  style_strength_ratio: number;
  num_outputs: number;
  guidance_scale: number;
  seed: number;
  use_doodle: boolean;
  adapter_conditioning_scale: number;
  adapter_conditioning_factor: number;
}

export async function generateImages(data: GenerateRequest) {
  const formData = new FormData();
  data.upload_images.forEach((file, index) => {
    formData.append(`upload_images[${index}]`, file);
  });

  Object.entries(data).forEach(([key, value]) => {
    if (key !== 'upload_images') {
      formData.append(key, String(value));
    }
  });

  const response = await fetch('/api/generate', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to generate images');
  }

  return response.json();
}