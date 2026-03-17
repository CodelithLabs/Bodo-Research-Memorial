'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { Star } from 'lucide-react';

interface RatingStarsProps {
    rating: number;
    maxRating?: number;
    size?: 'sm' | 'md' | 'lg';
    showValue?: boolean;
    interactive?: boolean;
    onChange?: (rating: number) => void;
    className?: string;
}

export function RatingStars({
    rating,
    maxRating = 5,
    size = 'md',
    showValue = false,
    interactive = false,
    onChange,
    className,
}: RatingStarsProps) {
    const [hoverRating, setHoverRating] = useState(0);

    const sizes = {
        sm: 'w-3 h-3',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
    };

    const displayRating = hoverRating || rating;

    return (
        <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
                {Array.from({ length: maxRating }).map((_, index) => {
                    const starValue = index + 1;
                    const isFilled = starValue <= displayRating;
                    const isHalfFilled = starValue - 0.5 <= displayRating && starValue > displayRating;

                    return (
                        <button
                            key={index}
                            type="button"
                            disabled={!interactive}
                            onClick={() => interactive && onChange?.(starValue)}
                            onMouseEnter={() => interactive && setHoverRating(starValue)}
                            onMouseLeave={() => interactive && setHoverRating(0)}
                            className={clsx(
                                'transition-colors',
                                interactive && 'cursor-pointer hover:scale-110',
                                !interactive && 'cursor-default'
                            )}
                        >
                            <Star
                                className={clsx(
                                    sizes[size],
                                    isFilled
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : isHalfFilled
                                            ? 'fill-yellow-400/50 text-yellow-400'
                                            : 'fill-transparent text-surface-500'
                                )}
                            />
                        </button>
                    );
                })}
            </div>
            {showValue && (
                <span className="ml-1 text-sm font-medium text-surface-200">
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
}

interface RatingSummaryProps {
    averageRating: number;
    totalReviews: number;
    distribution?: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
    };
}

export function RatingSummary({ averageRating, totalReviews, distribution }: RatingSummaryProps) {
    const maxCount = distribution ? Math.max(...Object.values(distribution)) : 0;

    return (
        <div className="flex items-center gap-6">
            {/* Average Rating */}
            <div className="text-center">
                <div className="text-4xl font-bold text-surface-100">{averageRating.toFixed(1)}</div>
                <RatingStars rating={averageRating} size="sm" className="justify-center my-1" />
                <div className="text-sm text-surface-400">{totalReviews} reviews</div>
            </div>

            {/* Distribution Bars */}
            {distribution && (
                <div className="flex-1 space-y-1">
                    {[5, 4, 3, 2, 1].map((stars) => {
                        const count = distribution[stars as keyof typeof distribution] || 0;
                        const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;

                        return (
                            <div key={stars} className="flex items-center gap-2">
                                <span className="text-xs text-surface-400 w-3">{stars}</span>
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                <div className="flex-1 h-2 bg-surface-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                                <span className="text-xs text-surface-500 w-8 text-right">{count}</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
