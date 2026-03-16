'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Grid, List } from 'lucide-react';
import { ProjectCard } from '@/components/project/ProjectCard';
import { ProjectCardSkeleton } from '@/components/project/ProjectCard';
import projectService from '@/services/projectService';
import { ProjectSummary, ProjectType } from '@/types/Project';

const projectTypes: { value: ProjectType | 'all'; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'game', label: 'Games' },
    { value: 'mod', label: 'Mods' },
    { value: 'asset', label: 'Assets' },
    { value: 'digital_art', label: 'Digital Art' },
];

const sortOptions = [
    { value: 'trending', label: 'Trending' },
    { value: 'downloads', label: 'Most Downloaded' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'newest', label: 'Newest' },
];

function ExploreContent() {
    const searchParams = useSearchParams();
    const [projects, setProjects] = useState<ProjectSummary[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
    const [selectedType, setSelectedType] = useState<ProjectType | 'all'>('all');
    const [sortBy, setSortBy] = useState('trending');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            try {
                const filter = {
                    type: selectedType === 'all' ? undefined : selectedType,
                    sortBy: sortBy as any,
                    search: searchQuery || undefined,
                };
                const result = await projectService.getProjects(filter);
                setProjects(result.projects);
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, [selectedType, sortBy, searchQuery]);

    return (
        <div className="container-app py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-surface-100 mb-2">Explore Projects</h1>
                <p className="text-surface-400">
                    Discover games, mods, assets, and digital art from our community
                </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <form className="flex-1">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-surface-800 border border-surface-700 rounded-xl text-surface-100 placeholder-surface-500 focus:outline-none focus:border-primary-500"
                        />
                    </div>
                </form>

                <div className="flex gap-2">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-3 bg-surface-800 border border-surface-700 rounded-xl text-surface-200 focus:outline-none focus:border-primary-500"
                    >
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <div className="flex bg-surface-800 border border-surface-700 rounded-xl overflow-hidden">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-3 ${viewMode === 'grid' ? 'bg-surface-700 text-surface-100' : 'text-surface-400 hover:text-surface-200'}`}
                        >
                            <Grid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-3 ${viewMode === 'list' ? 'bg-surface-700 text-surface-100' : 'text-surface-400 hover:text-surface-200'}`}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Type Filter */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                {projectTypes.map((type) => (
                    <button
                        key={type.value}
                        onClick={() => setSelectedType(type.value)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${selectedType === type.value
                                ? 'bg-primary-600 text-white'
                                : 'bg-surface-800 text-surface-300 hover:bg-surface-700'
                            }`}
                    >
                        {type.label}
                    </button>
                ))}
            </div>

            {/* Results */}
            <div className="flex items-center justify-between mb-6">
                <p className="text-surface-400">
                    {isLoading ? 'Loading...' : `${projects.length} projects found`}
                </p>
            </div>

            {/* Project Grid */}
            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <ProjectCardSkeleton key={i} />
                    ))}
                </div>
            ) : projects.length > 0 ? (
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} variant={viewMode === 'list' ? 'compact' : 'default'} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-surface-400 text-lg">No projects found</p>
                    <p className="text-surface-500 mt-2">Try adjusting your search or filters</p>
                </div>
            )}
        </div>
    );
}

export default function ExplorePage() {
    return (
        <Suspense fallback={
            <div className="container-app py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <ProjectCardSkeleton key={i} />
                    ))}
                </div>
            </div>
        }>
            <ExploreContent />
        </Suspense>
    );
}
