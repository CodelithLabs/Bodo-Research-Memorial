'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { MessageCircle, ThumbsUp, ThumbsDown, MoreHorizontal, Reply } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Review } from '@/types/Project';
import { formatRelativeTime } from '@/utils/formatDate';
import { RatingStars } from './RatingStars';

interface CommentSectionProps {
    projectId: string;
    reviews: Review[];
    onLoadMore?: () => void;
    hasMore?: boolean;
    isLoading?: boolean;
}

export function CommentSection({
    projectId,
    reviews,
    onLoadMore,
    hasMore,
    isLoading,
}: CommentSectionProps) {
    const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'helpful'>('helpful');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-surface-100">
                    Reviews ({reviews.length})
                </h2>

                {/* Sort */}
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-3 py-2 bg-surface-800 border border-surface-700 rounded-lg text-surface-200 text-sm focus:outline-none focus:border-primary-500"
                >
                    <option value="helpful">Most Helpful</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
                {reviews.map((review) => (
                    <ReviewItem key={review.id} review={review} />
                ))}
            </div>

            {/* Load More */}
            {hasMore && (
                <div className="flex justify-center">
                    <Button
                        variant="outline"
                        onClick={onLoadMore}
                        isLoading={isLoading}
                    >
                        Load More Reviews
                    </Button>
                </div>
            )}

            {/* Empty State */}
            {reviews.length === 0 && (
                <div className="text-center py-12">
                    <MessageCircle className="w-12 h-12 text-surface-500 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-surface-200 mb-2">No reviews yet</h3>
                    <p className="text-surface-400">Be the first to leave a review for this project!</p>
                </div>
            )}
        </div>
    );
}

interface ReviewItemProps {
    review: Review;
}

function ReviewItem({ review }: ReviewItemProps) {
    const [isHelpful, setIsHelpful] = useState<boolean | null>(null);
    const [showReplyForm, setShowReplyForm] = useState(false);

    return (
        <div className="p-4 bg-surface-800/50 rounded-xl space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={review.user.avatar}
                        alt={review.user.displayName}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-surface-100">
                                {review.user.displayName}
                            </span>
                            {review.isDeveloperResponse && (
                                <Badge variant="primary" size="sm">Developer</Badge>
                            )}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <RatingStars rating={review.rating} size="sm" />
                            <span className="text-surface-500">•</span>
                            <span className="text-surface-400">
                                {formatRelativeTime(review.createdAt)}
                            </span>
                        </div>
                    </div>
                </div>

                <button className="p-1 text-surface-400 hover:text-surface-200">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            {/* Content */}
            <div>
                <h4 className="font-medium text-surface-100 mb-1">{review.title}</h4>
                <p className="text-surface-300 text-sm whitespace-pre-wrap">{review.content}</p>
            </div>

            {/* Developer Response */}
            {review.developerResponse && (
                <div className="p-3 bg-surface-700/50 rounded-lg border-l-2 border-primary-500">
                    <div className="flex items-center gap-2 mb-2">
                        <Badge variant="primary" size="sm">Developer Response</Badge>
                    </div>
                    <p className="text-surface-300 text-sm">{review.developerResponse}</p>
                </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setIsHelpful(true)}
                    className={clsx(
                        'flex items-center gap-1 text-sm transition-colors',
                        isHelpful === true ? 'text-green-400' : 'text-surface-400 hover:text-surface-200'
                    )}
                >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{review.helpful}</span>
                </button>

                <button
                    onClick={() => setIsHelpful(false)}
                    className={clsx(
                        'flex items-center gap-1 text-sm transition-colors',
                        isHelpful === false ? 'text-red-400' : 'text-surface-400 hover:text-surface-200'
                    )}
                >
                    <ThumbsDown className="w-4 h-4" />
                    <span>{review.notHelpful}</span>
                </button>

                <button
                    onClick={() => setShowReplyForm(!showReplyForm)}
                    className="flex items-center gap-1 text-sm text-surface-400 hover:text-surface-200"
                >
                    <Reply className="w-4 h-4" />
                    Reply
                </button>
            </div>

            {/* Reply Form */}
            {showReplyForm && (
                <div className="mt-4">
                    <textarea
                        placeholder="Write your reply..."
                        className="w-full p-3 bg-surface-800 border border-surface-700 rounded-lg text-surface-100 placeholder-surface-500 focus:outline-none focus:border-primary-500 text-sm resize-none"
                        rows={3}
                    />
                    <div className="flex justify-end gap-2 mt-2">
                        <Button variant="ghost" size="sm" onClick={() => setShowReplyForm(false)}>
                            Cancel
                        </Button>
                        <Button size="sm">
                            Post Reply
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
