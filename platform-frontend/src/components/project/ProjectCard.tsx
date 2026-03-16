'use client';

import Link from 'next/link';
import Image from 'next/image';
import { clsx } from 'clsx';
import { Star, Download, Heart, Gamepad2, Puzzle, FolderOpen, Palette, Verified } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { ProjectSummary } from '@/types/Project';
import { formatPrice } from '@/utils/formatPrice';
import { formatNumber } from '@/utils/truncateText';

interface ProjectCardProps {
    project: ProjectSummary;
    variant?: 'default' | 'compact' | 'featured';
    showWishlistButton?: boolean;
}

const projectTypeIcons = {
    game: Gamepad2,
    mod: Puzzle,
    asset: FolderOpen,
    digital_art: Palette,
};

const projectTypeLabels = {
    game: 'Game',
    mod: 'Mod',
    asset: 'Asset',
    digital_art: 'Digital Art',
};

export function ProjectCard({
    project,
    variant = 'default',
    showWishlistButton = false
}: ProjectCardProps) {
    const TypeIcon = projectTypeIcons[project.type];

    return (
        <Link href={`/project/${project.id}`}>
            <div
                className={clsx(
                    'card card-interactive group',
                    variant === 'featured' && 'col-span-2 row-span-2',
                    variant === 'compact' && 'p-0'
                )}
            >
                {/* Thumbnail */}
                <div className={clsx(
                    'relative overflow-hidden rounded-t-xl',
                    variant === 'default' && 'aspect-video',
                    variant === 'compact' && 'aspect-[4/3]',
                    variant === 'featured' && 'aspect-[16/9] h-full'
                )}>
                    <img
                        src={project.thumbnail || '/images/default-thumbnail.png'}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Price Badge */}
                    <div className="absolute top-3 right-3">
                        {project.pricing.type === 'free' ? (
                            <Badge variant="success" size="sm">Free</Badge>
                        ) : (
                            <Badge variant="primary" size="sm">
                                {formatPrice(project.pricing.price, project.pricing.currency)}
                            </Badge>
                        )}
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-3 left-3">
                        <Badge variant="neutral" size="sm" className="flex items-center gap-1">
                            <TypeIcon className="w-3 h-3" />
                            {projectTypeLabels[project.type]}
                        </Badge>
                    </div>
                </div>

                {/* Content */}
                <div className={clsx(variant === 'compact' ? 'p-3' : 'p-4')}>
                    {/* Title */}
                    <h3 className={clsx(
                        'font-semibold text-surface-100 line-clamp-1 mb-1 group-hover:text-primary-400 transition-colors',
                        variant === 'featured' && 'text-lg',
                        variant === 'compact' && 'text-sm'
                    )}>
                        {project.title}
                    </h3>

                    {/* Developer */}
                    <div className="flex items-center gap-2 mb-2">
                        <img
                            src={project.developer.avatar}
                            alt={project.developer.displayName}
                            className="w-5 h-5 rounded-full"
                        />
                        <span className="text-sm text-surface-400 flex items-center gap-1">
                            {project.developer.displayName}
                            {project.developer.verified && (
                                <Verified className="w-3 h-3 text-primary-400" />
                            )}
                        </span>
                    </div>

                    {/* Stats */}
                    <div className={clsx(
                        'flex items-center justify-between text-sm',
                        variant === 'compact' && 'text-xs'
                    )}>
                        <div className="flex items-center gap-3">
                            {/* Rating */}
                            <div className="flex items-center gap-1 text-yellow-400">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="font-medium">{project.rating.toFixed(1)}</span>
                            </div>

                            {/* Downloads */}
                            <div className="flex items-center gap-1 text-surface-400">
                                <Download className="w-4 h-4" />
                                <span>{formatNumber(project.stats.downloads)}</span>
                            </div>
                        </div>

                        {/* Version */}
                        <span className="text-surface-500">v{project.version}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

interface ProjectCardSkeletonProps {
    variant?: 'default' | 'compact' | 'featured';
}

export function ProjectCardSkeleton({ variant = 'default' }: ProjectCardSkeletonProps) {
    return (
        <div className={clsx('card animate-pulse', variant === 'featured' && 'col-span-2 row-span-2')}>
            <div className={clsx(
                'bg-surface-700 rounded-t-xl',
                variant === 'default' && 'aspect-video',
                variant === 'compact' && 'aspect-[4/3]',
                variant === 'featured' && 'aspect-[16/9]'
            )} />
            <div className="p-4 space-y-3">
                <div className="h-5 bg-surface-700 rounded w-3/4" />
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-surface-700 rounded-full" />
                    <div className="h-4 bg-surface-700 rounded w-24" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                        <div className="h-4 bg-surface-700 rounded w-12" />
                        <div className="h-4 bg-surface-700 rounded w-12" />
                    </div>
                    <div className="h-4 bg-surface-700 rounded w-8" />
                </div>
            </div>
        </div>
    );
}
