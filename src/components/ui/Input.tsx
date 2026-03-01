/**
 * ============================================
 * Input Component
 * ============================================
 * Reusable input component with label and error states
 */

import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, helperText, id, ...props }, ref) => {
        const inputId = id || props.name;

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                        {label}
                        {props.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={cn(
                        'w-full px-4 py-2.5 rounded-lg border transition-colors duration-200',
                        'focus:outline-none focus:ring-2 focus:ring-offset-0',
                        error
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                            : 'border-gray-300 focus:border-amber-500 focus:ring-amber-200',
                        'placeholder:text-gray-400',
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p className="mt-1.5 text-sm text-red-600">{error}</p>
                )}
                {helperText && !error && (
                    <p className="mt-1.5 text-sm text-gray-500">{helperText}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export { Input };
