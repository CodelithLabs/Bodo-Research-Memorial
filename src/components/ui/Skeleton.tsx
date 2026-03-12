'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
    width?: string | number;
    height?: string | number;
}

export default function Skeleton({
    className = '',
    variant = 'rectangular',
    width,
    height,
}: SkeletonProps) {
    const baseClasses = 'skeleton';

    const variantClasses = {
        text: 'rounded',
        circular: 'rounded-full',
        rectangular: '',
        rounded: 'rounded-xl',
    };

    const style: React.CSSProperties = {
        width: width || '100%',
        height: height || (variant === 'text' ? '1em' : '100%'),
    };

    return (
        <div
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            style={style}
        />
    );
}

// Card Skeleton
export function CardSkeleton() {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
            <Skeleton height={200} variant="rounded" className="mb-4" />
            <Skeleton variant="text" width="60%" height={24} className="mb-2" />
            <Skeleton variant="text" width="40%" height={16} className="mb-4" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="80%" />
        </div>
    );
}

// Leader Card Skeleton
export function LeaderCardSkeleton() {
    return (
        <div className="card-modern p-0 overflow-hidden">
            <Skeleton height={300} variant="rounded" className="rounded-t-2xl" />
            <div className="p-6">
                <Skeleton variant="text" width="40%" height={12} className="mb-2" />
                <Skeleton variant="text" width="80%" height={28} className="mb-2" />
                <Skeleton variant="text" width="50%" height={16} className="mb-4" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="90%" />
            </div>
        </div>
    );
}

// List Skeleton
export function ListSkeleton({ count = 3 }: { count?: number }) {
    return (
        <div className="space-y-4">
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                    <Skeleton variant="circular" width={48} height={48} />
                    <div className="flex-1">
                        <Skeleton variant="text" width="40%" height={20} className="mb-2" />
                        <Skeleton variant="text" width="60%" height={14} />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

// Table Row Skeleton
export function TableRowSkeleton({ columns = 4 }: { columns?: number }) {
    return (
        <tr className="border-b border-slate-200 dark:border-slate-700">
            {Array.from({ length: columns }).map((_, i) => (
                <td key={i} className="py-4 px-4">
                    <Skeleton variant="text" width={i === 0 ? '80%' : '60%'} height={16} />
                </td>
            ))}
        </tr>
    );
}

// Hero Skeleton
export function HeroSkeleton() {
    return (
        <div className="relative bg-primary rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
                <Skeleton width="100%" height="100%" />
            </div>
            <div className="relative z-10 p-12 md:p-20">
                <Skeleton variant="text" width={200} height={16} className="mb-4" />
                <Skeleton variant="text" width="70%" height={56} className="mb-4" />
                <Skeleton variant="text" width="90%" height={24} className="mb-8" />
                <div className="flex gap-4">
                    <Skeleton width={180} height={48} variant="rounded" />
                    <Skeleton width={180} height={48} variant="rounded" />
                </div>
            </div>
        </div>
    );
}

// Page Skeleton
export function PageSkeleton() {
    return (
        <div className="space-y-8">
            <HeroSkeleton />
            <div className="grid md:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                    <CardSkeleton key={i} />
                ))}
            </div>
        </div>
    );
}
