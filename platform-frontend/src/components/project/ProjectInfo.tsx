'use client';

import Link from 'next/link';
import { clsx } from 'clsx';
import {
    Tag,
    Calendar,
    FolderOpen,
    Download,
    Star,
    Eye,
    Heart,
    MessageCircle,
    Verified,
    Share2,
    Flag
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Project } from '@/types/Project';
import { formatDate } from '@/utils/formatDate';
import { formatNumber, formatFileSize } from '@/utils/truncateText';

interface ProjectInfoProps {
    project: Project;
}

export function ProjectInfo({ project }: ProjectInfoProps) {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <Badge variant="primary">{project.type}</Badge>
                    <Badge variant="neutral">{project.category}</Badge>
                </div>
                <h1 className="text-3xl font-bold text-surface-100 mb-2">{project.title}</h1>
                <p className="text-surface-400">{project.shortDescription}</p>
            </div>

            {/* Developer Info */}
            <div className="flex items-center justify-between p-4 bg-surface-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                    <Link href={`/profile/${project.developer.username}`} className="relative">
                        <img
                            src={project.developer.avatar}
                            alt={project.developer.displayName}
                            className="w-12 h-12 rounded-xl"
                        />
                    </Link>
                    <div>
                        <Link
                            href={`/profile/${project.developer.username}`}
                            className="flex items-center gap-1 font-medium text-surface-100 hover:text-primary-400"
                        >
                            {project.developer.displayName}
                            {project.developer.verified && (
                                <Verified className="w-4 h-4 text-primary-400" />
                            )}
                        </Link>
                        <p className="text-sm text-surface-400">@{project.developer.username}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="btn-secondary btn-sm">
                        <Heart className="w-4 h-4" />
                        Follow
                    </button>
                    <button className="btn-ghost btn-sm">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <StatItem
                    icon={Star}
                    label="Rating"
                    value={project.stats.reviews > 0 ? '4.5' : 'N/A'}
                    subValue={`${project.stats.reviews} reviews`}
                />
                <StatItem
                    icon={Download}
                    label="Downloads"
                    value={formatNumber(project.stats.downloads)}
                />
                <StatItem
                    icon={Eye}
                    label="Views"
                    value={formatNumber(project.stats.views)}
                />
                <StatItem
                    icon={Heart}
                    label="Likes"
                    value={formatNumber(project.stats.likes)}
                />
            </div>

            {/* Tags */}
            <div>
                <h3 className="text-sm font-medium text-surface-300 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Link key={tag} href={`/explore?tag=${tag}`}>
                            <Badge variant="neutral" className="hover:bg-surface-500 cursor-pointer">
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                            </Badge>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4">
                <DetailItem label="Version" value={project.version} />
                <DetailItem label="Release Date" value={formatDate(project.releaseDate)} />
                <DetailItem label="Last Updated" value={formatDate(project.lastUpdated)} />
                {project.files[0] && (
                    <DetailItem
                        label="File Size"
                        value={formatFileSize(project.files[0].size)}
                    />
                )}
            </div>

            {/* System Requirements */}
            {project.requirements && (
                <div>
                    <h3 className="text-sm font-medium text-surface-300 mb-3">System Requirements</h3>
                    <div className="p-4 bg-surface-800/50 rounded-xl space-y-2 text-sm">
                        {project.requirements.os && (
                            <div className="flex gap-2">
                                <span className="text-surface-400 w-24">OS:</span>
                                <span className="text-surface-200">{project.requirements.os.join(', ')}</span>
                            </div>
                        )}
                        {project.requirements.processor && (
                            <div className="flex gap-2">
                                <span className="text-surface-400 w-24">Processor:</span>
                                <span className="text-surface-200">{project.requirements.processor}</span>
                            </div>
                        )}
                        {project.requirements.memory && (
                            <div className="flex gap-2">
                                <span className="text-surface-400 w-24">Memory:</span>
                                <span className="text-surface-200">{project.requirements.memory}</span>
                            </div>
                        )}
                        {project.requirements.graphics && (
                            <div className="flex gap-2">
                                <span className="text-surface-400 w-24">Graphics:</span>
                                <span className="text-surface-200">{project.requirements.graphics}</span>
                            </div>
                        )}
                        {project.requirements.storage && (
                            <div className="flex gap-2">
                                <span className="text-surface-400 w-24">Storage:</span>
                                <span className="text-surface-200">{project.requirements.storage}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Report Button */}
            <button className="flex items-center gap-2 text-sm text-surface-400 hover:text-surface-200">
                <Flag className="w-4 h-4" />
                Report this project
            </button>
        </div>
    );
}

function StatItem({
    icon: Icon,
    label,
    value,
    subValue
}: {
    icon: any;
    label: string;
    value: string;
    subValue?: string;
}) {
    return (
        <div className="flex flex-col items-center p-4 bg-surface-800/50 rounded-xl">
            <Icon className="w-5 h-5 text-surface-400 mb-1" />
            <span className="text-lg font-semibold text-surface-100">{value}</span>
            <span className="text-xs text-surface-400">{label}</span>
            {subValue && <span className="text-xs text-surface-500">{subValue}</span>}
        </div>
    );
}

function DetailItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between items-center p-3 bg-surface-800/30 rounded-lg">
            <span className="text-sm text-surface-400">{label}</span>
            <span className="text-sm font-medium text-surface-200">{value}</span>
        </div>
    );
}
