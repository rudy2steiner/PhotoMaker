'use client';

import { useTranslations } from 'next-intl';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ASPECT_RATIOS, STYLE_PRESETS } from '@/lib/config/constants';
import type { GenerationOptions as GenerationOptionsType } from '@/lib/types/photomaker';

interface GenerationOptionsProps {
  options: GenerationOptionsType;
  onChange: (options: Partial<GenerationOptionsType>) => void;
}

export function GenerationOptions({ options, onChange }: GenerationOptionsProps) {
  const t = useTranslations('form');

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div>
          <Label>{t('prompt')}(trigger word: img, such as: man img or woman img or girl img)</Label>
          <Textarea
            value={options.prompt}
            onChange={(e) => onChange({ prompt: e.target.value })}
            className="min-h-[100px] resize-none"
            placeholder="Describe what you want to generate, e.g.:instagram photo, portrait photo of a woman img, colorful, perfect face, natural skin, hard shadows, film grain"
          />
        </div>
        <div>
          <Label>{t('negativePrompt')}</Label>
          <Textarea
            value={options.negativePrompt}
            onChange={(e) => onChange({ negativePrompt: e.target.value })}
            className="min-h-[60px] resize-none"
            placeholder="Describe what you want to avoid, e.g.: blurry, oversaturated, distorted features"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>{t('style')}</Label>
            <Select
              value={options.style}
              onValueChange={(value) => onChange({ style: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('style')} />
              </SelectTrigger>
              <SelectContent>
                {STYLE_PRESETS.map((style) => (
                  <SelectItem key={style.value} value={style.value}>
                    {style.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>{t('aspectRatio')}</Label>
            <Select
              value={options.aspectRatio}
              onValueChange={(value) => onChange({ aspectRatio: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder={t('aspectRatio')} />
              </SelectTrigger>
              <SelectContent>
                {ASPECT_RATIOS.map((ratio) => (
                  <SelectItem key={ratio.value} value={ratio.value}>
                    {ratio.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between">
            Advanced Options
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-4 pt-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label>{t('styleStrength')}</Label>
              <span className="text-sm text-muted-foreground">{options.styleStrength}%</span>
            </div>
            <Slider
              value={[options.styleStrength]}
              onValueChange={([value]) => onChange({ styleStrength: value })}
              max={100}
              step={1}
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label>{t('numSteps')}</Label>
              <span className="text-sm text-muted-foreground">{options.numSteps}</span>
            </div>
            <Slider
              value={[options.numSteps]}
              onValueChange={([value]) => onChange({ numSteps: value })}
              max={50}
              step={1}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label>{t('useDoodle')}</Label>
            <Switch
              checked={options.useDoodle}
              onCheckedChange={(checked) => onChange({ useDoodle: checked })}
            />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}