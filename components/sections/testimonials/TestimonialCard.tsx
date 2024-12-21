'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Quote, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  className?: string;
}

export function TestimonialCard({ 
  name, 
  role, 
  company, 
  quote, 
  image,
  className 
}: TestimonialCardProps) {
  const [imageError, setImageError] = useState(false);
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card className={cn("p-8 h-full flex flex-col bg-card hover:shadow-lg transition-shadow", className)}>
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-16 w-16 border-2 border-primary/10">
          <AvatarImage 
            src={image} 
            alt={name}
            className="object-cover"
            onError={() => setImageError(true)}
          />
          <AvatarFallback delayMs={600} className="bg-primary/5">
            {imageError ? (
              <User className="h-6 w-6 text-muted-foreground" />
            ) : (
              <span className="text-lg font-medium">{initials}</span>
            )}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold text-lg">{name}</div>
          <div className="text-sm text-muted-foreground">
            {role}
          </div>
          <div className="text-sm font-medium text-primary">
            {company}
          </div>
        </div>
      </div>
      
      <blockquote className="flex-grow relative">
        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/10 -z-10" />
        <p className="text-muted-foreground leading-relaxed italic">
          "{quote}"
        </p>
      </blockquote>
    </Card>
  );
}