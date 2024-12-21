'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function PhotoMaker() {
  const t = useTranslations();
  const [files, setFiles] = useState<File[]>([]);
  const [generating, setGenerating] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles].slice(0, 4));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp']
    },
    maxFiles: 4
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);
    // TODO: Implement API call
    setGenerating(false);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            isDragActive ? 'border-primary' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          <p>{t('common.upload')}</p>
          {files.length > 0 && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {files.map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-32 object-cover rounded"
                />
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label>{t('form.prompt')}</Label>
              <Input />
            </div>
            <div>
              <Label>{t('form.negativePrompt')}</Label>
              <Input />
            </div>
            <div>
              <Label>{t('form.aspectRatio')}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Instagram (1:1)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1:1">Instagram (1:1)</SelectItem>
                  <SelectItem value="4:5">Instagram Portrait (4:5)</SelectItem>
                  <SelectItem value="16:9">Landscape (16:9)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label>{t('form.styleStrength')}</Label>
              <Slider
                defaultValue={[15]}
                max={100}
                step={1}
              />
            </div>
            <div>
              <Label>{t('form.numSteps')}</Label>
              <Slider
                defaultValue={[20]}
                max={50}
                step={1}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label>{t('form.useDoodle')}</Label>
              <Switch />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={files.length === 0 || generating}
        >
          {generating ? 'Generating...' : t('common.generate')}
        </Button>
      </form>
    </Card>
  );
}