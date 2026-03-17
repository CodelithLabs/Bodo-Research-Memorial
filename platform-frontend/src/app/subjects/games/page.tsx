'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ProjectCard } from '@/components/project/ProjectCard';
import { ProjectCardSkeleton } from '@/components/project/ProjectCard';
import projectService from '@/services/projectService';
import { ProjectSummary } from '@/types/Project';

export default function GamesPage() {
    const [projects, setProjects] = useState<ProjectSummary[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            try {
                const result = await projectService.getProjects({ type: 'game' });
                setProjects(result.projects);
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="container-app py-8">
            <h1 className="text-3xl font-bold text-surface-100 mb-2">Games</h1>
            <p className="text-surface-400 mb-8">Explore games from our community</p>

            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <ProjectCardSkeleton key={i} />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
}
