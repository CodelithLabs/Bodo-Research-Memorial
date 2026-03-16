'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Debounce hook - delays function execution until after wait milliseconds
 * have elapsed since the last call
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}

/**
 * Debounced callback hook - creates a debounced version of a callback function
 */
export function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(
    callback: T,
    delay: number = 300
): T {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const debouncedCallback = useCallback(
        (...args: Parameters<T>) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay]
    ) as T;

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return debouncedCallback;
}

/**
 * Throttle hook - ensures function is called at most once per wait milliseconds
 */
export function useThrottle<T>(value: T, interval: number = 300): T {
    const [throttledValue, setThrottledValue] = useState<T>(value);
    const lastUpdated = useRef<number>(Date.now());

    useEffect(() => {
        const now = Date.now();
        
        if (now >= lastUpdated.current + interval) {
            lastUpdated.current = now;
            setThrottledValue(value);
        } else {
            const timer = setTimeout(() => {
                lastUpdated.current = Date.now();
                setThrottledValue(value);
            }, interval - (now - lastUpdated.current));

            return () => clearTimeout(timer);
        }
    }, [value, interval]);

    return throttledValue;
}

export default useDebounce;
