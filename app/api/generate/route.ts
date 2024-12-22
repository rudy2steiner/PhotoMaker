import { NextResponse } from 'next/server';
import { Client } from '@gradio/client';
import { PHOTOMAKER_CONFIG } from '@/lib/config/constants';

export const maxDuration = 60; // This function can run for a maximum of 5 seconds
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('upload_images[]');
    const client = await Client.connect(PHOTOMAKER_CONFIG.MODEL_ID);
    
    const result = await client.predict("/generate_image", {
      upload_images: files,
      prompt: formData.get('prompt') || '',
      negative_prompt: formData.get('negative_prompt') || '',
      aspect_ratio_name: formData.get('aspect_ratio_name') || PHOTOMAKER_CONFIG.DEFAULT_PARAMS.aspect_ratio_name,
      style_name: formData.get('style_name') || PHOTOMAKER_CONFIG.DEFAULT_PARAMS.style_name,
      num_steps: Number(formData.get('num_steps')) || PHOTOMAKER_CONFIG.DEFAULT_PARAMS.num_steps,
      style_strength_ratio: Number(formData.get('style_strength_ratio')) || PHOTOMAKER_CONFIG.DEFAULT_PARAMS.style_strength_ratio,
      num_outputs: Number(formData.get('num_outputs')) || PHOTOMAKER_CONFIG.DEFAULT_PARAMS.num_outputs,
      guidance_scale: Number(formData.get('guidance_scale')) || PHOTOMAKER_CONFIG.DEFAULT_PARAMS.guidance_scale,
      seed: Number(formData.get('seed')) || Math.floor(Math.random() * 1000),
      use_doodle: formData.get('use_doodle') === 'true',
      sketch_image: null,
      adapter_conditioning_scale: Number(formData.get('adapter_conditioning_scale')) || PHOTOMAKER_CONFIG.DEFAULT_PARAMS.adapter_conditioning_scale,
      adapter_conditioning_factor: Number(formData.get('adapter_conditioning_factor')) || PHOTOMAKER_CONFIG.DEFAULT_PARAMS.adapter_conditioning_factor,
    });
    console.log('res:'+JSON.stringify(result.data));
    return NextResponse.json({ data: result.data });
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate images' },
      { status: 500 }
    );
  }
}