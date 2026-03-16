'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Project } from '@/types/Project';
import { ProjectGallery } from '@/components/project/ProjectGallery';
import { ProjectInfo } from '@/components/project/ProjectInfo';
import { DownloadButton } from '@/components/project/DownloadButton';
import { CommentSection } from '@/components/review/CommentSection';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { ProjectCard } from '@/components/project/ProjectCard';
import { PageLoader } from '@/components/ui/Loader';
import projectService from '@/services/projectService';

export default function ProjectDetailPage() {
    const params = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            if (!params.projectId) return;

            setIsLoading(true);
            setError(null);

            try {
                const projectData = await projectService.getProjectById(params.projectId as string);
                if (!projectData) {
                    setError('Project not found');
                    return;
                }
                setProject(projectData);
            } catch (err) {
                setError('Failed to load project');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProject();
    }, [params.projectId]);

    if (isLoading) {
        return <PageLoader message="Loading project..." />;
    }

    if (error || !project) {
        return (
            <div className="container-app py-16 text-center">
                <h1 className="text-2xl font-bold text-surface-100 mb-4">{error || 'Project not found'}</h1>
                <p className="text-surface-400">The project you're looking for doesn't exist or has been removed.</p>
            </div>
        );
    }

    return (
        <div className="container-app py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Gallery */}
                    <ProjectGallery media={project.media} title={project.title} />

                    {/* Description & Tabs */}
                    <Tabs defaultValue="description">
                        <TabsList>
                            <TabsTrigger value="description">Description</TabsTrigger>
                            <TabsTrigger value="reviews">Reviews ({project.stats.reviews})</TabsTrigger>
                            <TabsTrigger value="comments">Comments ({project.stats.comments})</TabsTrigger>
                        </TabsList>

                        <TabsContent value="description">
                            <div className="prose prose-invert max-w-none">
                                <h3 className="text-lg font-semibold text-surface-100 mb-4">About this project</h3>
                                <p className="text-surface-300 whitespace-pre-wrap">{project.description}</p>
                            </div>
                        </TabsContent>

                        <TabsContent value="reviews">
                            <CommentSection
                                projectId={project.id}
                                reviews={project.reviews || []}
                            />
                        </TabsContent>

                        <TabsContent value="comments">
                            <CommentSection
                                projectId={project.id}
                                reviews={project.reviews || []}
                            />
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Project Info */}
                    <ProjectInfo project={project} />

                    {/* Download Button */}
                    <div className="sticky top-24">
                        <DownloadButton project={project} />
                    </div>
                </div>
            </div>
        </div>
    );
}
