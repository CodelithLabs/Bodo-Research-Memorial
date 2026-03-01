/**
 * ============================================
 * Badge Component
 * ============================================
 * Small status indicators and labels
 */

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        const variants = {
            default: 'bg-gray-100 text-gray-800',
            primary: 'bg-amber-100 text-amber-800',
            secondary: 'bg-indigo-100 text-indigo-800',
            success: 'bg-green-100 text-green-800',
            warning: 'bg-yellow-100 text-yellow-800',
            danger: 'bg-red-100 text-red-800',
            outline: 'border border-gray-300 text-gray-700',
        };

        return (
            <span
                ref={ref}
                className={cn(
                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);

Badge.displayName = 'Badge';

export { Badge };
