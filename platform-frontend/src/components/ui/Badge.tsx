'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral' | 'outline';
    size?: 'sm' | 'md';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = 'neutral', size = 'md', children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center rounded-full font-medium';

        const variants = {
            primary: 'bg-primary-500/20 text-primary-300',
            success: 'bg-green-500/20 text-green-300',
            warning: 'bg-yellow-500/20 text-yellow-300',
            danger: 'bg-red-500/20 text-red-300',
            neutral: 'bg-surface-600 text-surface-300',
            outline: 'border border-surface-600 text-surface-300',
        };

        const sizes = {
            sm: 'px-2 py-0.5 text-xs',
            md: 'px-2.5 py-1 text-xs',
        };

        return (
            <span
                ref={ref}
                className={clsx(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';

export { Badge };
