import React from 'react';

interface RemoteImageProps {
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    placeholder?: React.ReactNode;
    className?: string;
}

export default function RemoteImage({ src, alt, width = '100%', height = 'auto', placeholder, className = '' }: RemoteImageProps) {
    if (!src) {
        return (
            <div className={`bg-gray-200 flex items-center justify-center ${className}`} style={{ width, height }}>
                {placeholder || <span className="text-gray-500">No image</span>}
            </div>
        );
    }

    return <img src={src} alt={alt} width={width} height={height} className={className} loading="lazy" />;
}
