'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { Download, Heart, ShoppingCart, Check, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Project } from '@/types/Project';
import { formatPrice } from '@/utils/formatPrice';

interface DownloadButtonProps {
    project: Project;
    onDownload?: () => void;
    onAddToCart?: () => void;
    onAddToWishlist?: () => void;
}

export function DownloadButton({
    project,
    onDownload,
    onAddToCart,
    onAddToWishlist
}: DownloadButtonProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isInLibrary, setIsInLibrary] = useState(project.userHasPurchased || false);
    const [isInWishlist, setIsInWishlist] = useState(project.userHasInWishlist || false);

    const isFree = project.pricing.type === 'free';
    const canDownload = isFree || isInLibrary;

    const handleDownload = async () => {
        setIsLoading(true);
        try {
            // Simulate download
            await new Promise(resolve => setTimeout(resolve, 1000));
            onDownload?.();
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddToCart = async () => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            onAddToCart?.();
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddToWishlist = async () => {
        setIsInWishlist(!isInWishlist);
        onAddToWishlist?.();
    };

    return (
        <div className="space-y-3">
            {/* Main Action Button */}
            {canDownload ? (
                <Button
                    onClick={handleDownload}
                    disabled={isLoading}
                    size="lg"
                    className="w-full"
                    leftIcon={isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
                >
                    {isLoading ? 'Downloading...' : 'Download Now'}
                </Button>
            ) : (
                <Button
                    onClick={handleAddToCart}
                    disabled={isLoading}
                    size="lg"
                    className="w-full"
                    leftIcon={isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShoppingCart className="w-5 h-5" />}
                >
                    {isLoading ? 'Adding...' : `Buy for ${formatPrice(project.pricing.price, project.pricing.currency)}`}
                </Button>
            )}

            {/* Secondary Actions */}
            <div className="flex gap-2">
                <Button
                    onClick={handleAddToWishlist}
                    variant="outline"
                    className="flex-1"
                    leftIcon={isInWishlist ? <Heart className="w-4 h-4 fill-current text-red-400" /> : <Heart className="w-4 h-4" />}
                >
                    {isInWishlist ? 'In Wishlist' : 'Wishlist'}
                </Button>

                {isInLibrary && (
                    <Badge variant="success" className="flex items-center gap-1 px-4">
                        <Check className="w-4 h-4" />
                        Owned
                    </Badge>
                )}
            </div>

            {/* Price Info for Paid Projects */}
            {!isFree && !canDownload && project.pricing.discountPrice && (
                <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-surface-500 line-through">
                        {formatPrice(project.pricing.price, project.pricing.currency)}
                    </span>
                    <Badge variant="danger">
                        {Math.round(((project.pricing.price - project.pricing.discountPrice) / project.pricing.price) * 100)}% OFF
                    </Badge>
                    <span className="text-surface-300 font-medium">
                        {formatPrice(project.pricing.discountPrice, project.pricing.currency)}
                    </span>
                </div>
            )}

            {/* Owned Status */}
            {isInLibrary && (
                <p className="text-center text-sm text-surface-400">
                    You own this project. Download anytime from your library.
                </p>
            )}
        </div>
    );
}
