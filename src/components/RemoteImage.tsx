import React from 'react';
import Image from 'next/image';

interface RemoteImageProps {
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    placeholder?: React.ReactNode;
    className?: string;
    priority?: boolean;
    sizes?: string;
}

export default function RemoteImage({
    src,
    alt,
    width,
    height,
    placeholder,
    className = '',
    priority,
    sizes,
}: RemoteImageProps) {
    if (!src) {
        return (
            <div className={`bg-gray-200 flex items-center justify-center ${className}`} style={{ width, height }}>
                {placeholder || <span className="text-gray-500">No image</span>}
            </div>
        );
    }

    const numericWidth = typeof width === 'number' ? width : undefined;
    const numericHeight = typeof height === 'number' ? height : undefined;
    const useFill = !numericWidth || !numericHeight;

    if (useFill) {
        return (
            <div
                className="relative"
                style={{ width: width ?? '100%', height: height ?? '100%' }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes={sizes ?? '100vw'}
                    priority={priority}
                    className={className}
                />
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            width={numericWidth}
            height={numericHeight}
            sizes={sizes}
            priority={priority}
            className={className}
        />
    );
}
