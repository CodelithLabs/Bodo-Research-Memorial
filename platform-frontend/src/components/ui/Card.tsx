'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'interactive' | 'ghost';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            className,
            variant = 'default',
            padding = 'md',
            hover = false,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles = 'bg-surface-800 border border-surface-700 rounded-xl overflow-hidden';

        const variants = {
            default: '',
            interactive: 'cursor-pointer',
            ghost: 'bg-transparent border-transparent',
        };

        const paddings = {
            none: '',
            sm: 'p-3',
            md: 'p-4',
            lg: 'p-6',
        };

        const hoverStyles = hover || variant === 'interactive'
            ? 'transition-all duration-300 hover:shadow-card-hover hover:border-surface-600 hover:-translate-y-1'
            : '';

        return (
            <div
                ref={ref}
                className={clsx(
                    baseStyles,
                    variants[variant],
                    paddings[padding],
                    hoverStyles,
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

const CardHeader = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={clsx('px-4 py-3 border-b border-surface-700', className)}
        {...props}
    >
        {children}
    </div>
));

CardHeader.displayName = 'CardHeader';

const CardContent = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
    <div ref={ref} className={clsx('p-4', className)} {...props}>
        {children}
    </div>
));

CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={clsx('px-4 py-3 border-t border-surface-700', className)}
        {...props}
    >
        {children}
    </div>
));

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardContent, CardFooter };
