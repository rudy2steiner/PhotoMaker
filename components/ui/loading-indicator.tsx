'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingIndicatorProps {
  isLoading: boolean;
  label?: string;
  startTime?: number;
  className?: string;
}

export function LoadingIndicator({ 
  isLoading,
  label = 'Loading',
  startTime,
  className 
}: LoadingIndicatorProps) {
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isLoading && startTime) {
      // Initial elapsed time
      setElapsed(Math.floor((Date.now() - startTime) / 1000));

      // Update elapsed time every second
      intervalRef.current = setInterval(() => {
        setElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isLoading, startTime]);

  // Reset elapsed time when loading stops
  useEffect(() => {
    if (!isLoading) {
      setElapsed(0);
    }
  }, [isLoading]);

  return (
    <div className={cn("flex items-center justify-center gap-2 text-sm", className)}>
      <Loader2 className="h-4 w-4 animate-spin" />
      <span>
        {label} ({elapsed}s)
      </span>
    </div>
  );
}