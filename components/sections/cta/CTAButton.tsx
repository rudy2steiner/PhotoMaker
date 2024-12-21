'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useScroll } from '@/lib/hooks/use-scroll';

interface CTAButtonProps {
  label: string;
}

export function CTAButton({ label }: CTAButtonProps) {
  const { scrollToElement } = useScroll();

  return (
    <Button 
      size="lg" 
      variant="secondary" 
      className="font-semibold"
      onClick={() => scrollToElement('photo-maker')}
    >
      {label}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}