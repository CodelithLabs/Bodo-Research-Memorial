'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { ChevronLeft, ChevronRight, Play, Maximize2 } from 'lucide-react';
import { ProjectMedia } from '@/types/Project';

interface ProjectGalleryProps {
    media: ProjectMedia[];
    title: string;
}

export function ProjectGallery({ media, title }: ProjectGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const images = media.filter(m => m.type === 'image');
    const videos = media.filter(m => m.type === 'video');

    if (images.length === 0 && videos.length === 0) {
        return (
            <div className="aspect-video bg-surface-800 rounded-xl flex items-center justify-center">
                <p className="text-surface-400">No media available</p>
            </div>
        );
    }

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <div className="space-y-4">
                {/* Main Media Display */}
                <div className="relative aspect-video bg-surface-800 rounded-xl overflow-hidden group">
                    {/* Image */}
                    {images[currentIndex] && (
                        <img
                            src={images[currentIndex].url}
                            alt={images[currentIndex].alt || `${title} - Image ${currentIndex + 1}`}
                            className="w-full h-full object-contain"
                        />
                    )}

                    {/* Video */}
                    {videos.length > 0 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <video
                                src={videos[0].url}
                                poster={videos[0].thumbnail}
                                controls
                                className="max-w-full max-h-full"
                            />
                        </div>
                    )}

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={goToPrevious}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-surface-900/80 hover:bg-surface-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <ChevronLeft className="w-5 h-5 text-white" />
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-surface-900/80 hover:bg-surface-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <ChevronRight className="w-5 h-5 text-white" />
                            </button>
                        </>
                    )}

                    {/* Fullscreen Button */}
                    <button
                        onClick={() => setIsLightboxOpen(true)}
                        className="absolute bottom-4 right-4 p-2 bg-surface-900/80 hover:bg-surface-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Maximize2 className="w-5 h-5 text-white" />
                    </button>

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-4 px-3 py-1 bg-surface-900/80 rounded-full text-sm text-white">
                            {currentIndex + 1} / {images.length}
                        </div>
                    )}
                </div>

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {images.map((image, index) => (
                            <button
                                key={image.id}
                                onClick={() => setCurrentIndex(index)}
                                className={clsx(
                                    'relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all',
                                    index === currentIndex
                                        ? 'ring-2 ring-primary-500'
                                        : 'opacity-60 hover:opacity-100'
                                )}
                            >
                                <img
                                    src={image.thumbnail || image.url}
                                    alt={image.alt || `Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                        }}
                        className="absolute left-4 p-2 hover:bg-surface-800 rounded-full"
                    >
                        <ChevronLeft className="w-8 h-8 text-white" />
                    </button>

                    {images[currentIndex] && (
                        <img
                            src={images[currentIndex].url}
                            alt={images[currentIndex].alt || `${title} - Image ${currentIndex + 1}`}
                            className="max-w-full max-h-full object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                        className="absolute right-4 p-2 hover:bg-surface-800 rounded-full"
                    >
                        <ChevronRight className="w-8 h-8 text-white" />
                    </button>

                    <button
                        onClick={() => setIsLightboxOpen(false)}
                        className="absolute top-4 right-4 p-2 hover:bg-surface-800 rounded-full"
                    >
                        <ChevronLeft className="w-8 h-8 text-white rotate-45" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}
