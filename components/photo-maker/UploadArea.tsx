'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface UploadAreaProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
}

export function UploadArea({ files, onFilesChange }: UploadAreaProps) {
  const t = useTranslations();
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
    onFilesChange([...files, ...acceptedFiles].slice(0, 4));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp']
    },
    maxFiles: 4
  });

  const handleUrlUpload = async () => {
    if (!imageUrl.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error('Failed to fetch image');
      
      const blob = await response.blob();
      const filename = imageUrl.split('/').pop() || 'image.jpg';
      const file = new File([blob], filename, { type: blob.type });
      
      onFilesChange([...files, file].slice(0, 4));
      setImageUrl('');
    } catch (error) {
      console.error('Failed to load image from URL:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeFile = (index: number) => {
    onFilesChange(files.filter((_, i) => i !== index));
  };

  const removeAllFiles = () => {
    onFilesChange([]);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>{t('common.uploadUrl')}</Label>
        <div className="flex gap-2">
          <Input
            type="url"
            placeholder="https://example.com/image.jpg"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <Button 
            type="button"
            onClick={handleUrlUpload}
            disabled={!imageUrl.trim() || isLoading}
          >
            {isLoading ? t('common.loading') : t('common.add')}
          </Button>
        </div>
      </div>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer ${
          isDragActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
        }`}
      >
        <input {...getInputProps()} />
        <div className="space-y-2">
          <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            {t('common.upload')} (max 4 images)
          </p>
        </div>
      </div>
        
      {files.length > 0 && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label>Uploaded Images</Label>
            <Button
              variant="ghost"
              size="sm"
              onClick={removeAllFiles}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Remove All
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {files.map((file, index) => (
              <div key={index} className="relative group">
                <div className="relative w-full">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 bg-background/80 hover:bg-background"
                  onClick={() => removeFile(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}