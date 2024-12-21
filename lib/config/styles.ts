export const STYLE_PRESETS = [
  { 
    value: 'Portrait Photography',
    label: 'Portrait Photography',
    description: 'Professional portrait style with natural lighting and colors',
    previewUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400'
  },
  { 
    value: 'Cinematic',
    label: 'Cinematic',
    description: 'Dramatic movie-like style with rich colors and contrast',
    previewUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400'
  },
  { 
    value: 'Fashion Editorial',
    label: 'Fashion Editorial',
    description: 'High-end fashion magazine style',
    previewUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400'
  },
  { 
    value: 'Studio Lighting',
    label: 'Studio Lighting',
    description: 'Clean, professional studio lighting setup',
    previewUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400'
  }
] as const;

export type StylePreset = typeof STYLE_PRESETS[number];