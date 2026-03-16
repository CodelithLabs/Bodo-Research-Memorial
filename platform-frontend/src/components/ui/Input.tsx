'use client';

import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    isLoading?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            label,
            error,
            helperText,
            leftIcon,
            rightIcon,
            isLoading,
            disabled,
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id || props.name;

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-surface-300 mb-1.5"
                    >
                        {label}
                    </label>
                )}
                <div className="relative">
                    {leftIcon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400">
                            {leftIcon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        id={inputId}
                        disabled={disabled || isLoading}
                        className={clsx(
                            'w-full px-4 py-2.5 bg-surface-800 border rounded-lg text-surface-100',
                            'placeholder-surface-500 focus:outline-none focus:ring-2 transition-all duration-200',
                            'disabled:opacity-50 disabled:cursor-not-allowed',
                            leftIcon ? 'pl-10' : '',
                            rightIcon ? 'pr-10' : '',
                            error
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                                : 'border-surface-600 focus:border-primary-500 focus:ring-primary-500/20',
                            className
                        )}
                        {...props}
                    />
                    {rightIcon && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-400">
                            {rightIcon}
                        </div>
                    )}
                    {isLoading && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <svg
                                className="animate-spin h-4 w-4 text-surface-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>
                        </div>
                    )}
                </div>
                {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
                {helperText && !error && (
                    <p className="mt-1.5 text-sm text-surface-400">{helperText}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export { Input };
