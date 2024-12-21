'use client';

import { useEffect, useRef } from 'react';

export function useRequestTimeout(
  isLoading: boolean,
  onTimeout: () => void,
  timeout: number = 120000 // Increased to 120 seconds
) {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const startTimeRef = useRef<number>();

  useEffect(() => {
    if (isLoading) {
      startTimeRef.current = Date.now();
      timeoutRef.current = setTimeout(() => {
        const elapsed = (Date.now() - (startTimeRef.current || 0)) / 1000;
        console.log(`Request timed out after ${elapsed.toFixed(1)}s`);
        onTimeout();
      }, timeout);
    } else if (startTimeRef.current) {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      console.log(`Request completed in ${elapsed.toFixed(1)}s`);
      startTimeRef.current = undefined;
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isLoading, onTimeout, timeout]);
}