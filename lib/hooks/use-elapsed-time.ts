'use client';

import { useState, useEffect, useRef } from 'react';

export function useElapsedTime(isActive: boolean) {
  const [elapsed, setElapsed] = useState(0);
  const startTimeRef = useRef<number>();
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isActive && !startTimeRef.current) {
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        setElapsed(Math.floor((Date.now() - (startTimeRef.current || 0)) / 1000));
      }, 1000);
    } else if (!isActive && startTimeRef.current) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      startTimeRef.current = undefined;
      setElapsed(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]);

  return elapsed;
}