/**
 * ============================================
 * Card Component
 * ============================================
 * Reusable card component with header, content, and footer
 */

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'bordered' | 'elevated';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', children, ...props }, ref) => {
        const variants = {
            default: 'bg-white rounded-xl shadow-sm',
            bordered: 'bg-white rounded-xl border-2 border-gray-100',
            elevated: 'bg-white rounded-xl shadow-lg',
        };

        return (
            <div
                ref={ref}
                className={cn(variants[variant], className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('p-6 pb-0', className)}
            {...props}
        />
    )
);

CardHeader.displayName = 'CardHeader';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('p-6', className)}
            {...props}
        />
    )
);

CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('p-6 pt-0 flex items-center', className)}
            {...props}
        />
    )
);

CardFooter.displayName = 'CardFooter';

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn('text-xl font-semibold text-gray-900', className)}
            {...props}
        />
    )
);

CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn('text-sm text-gray-500 mt-1', className)}
            {...props}
        />
    )
);

CardDescription.displayName = 'CardDescription';

export { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription };
