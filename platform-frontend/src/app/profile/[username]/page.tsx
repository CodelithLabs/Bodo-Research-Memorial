'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Link as LinkIcon, Calendar, Download, Star, Users, MessageCircle, Verified, Twitter, Github, Twitch } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { ProjectCard } from '@/components/project/ProjectCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { PageLoader } from '@/components/ui/Loader';
import { formatDate } from '@/utils/formatDate';
import projectService from '@/services/projectService';
import { ProjectSummary, UserSummary } from '@/types/Project';

const mockUser = {
    id: '1',
    username: 'indie_studio',
    displayName: 'Indie Studio',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=indie_studio',
    banner: 'https://picsum.photos/seed/banner/1200/300',
    bio: 'Indie game developer passionate about creating immersive experiences. We specialize in 2D pixel art games and retro-style adventures.',
    location: 'San Francisco, CA',
    website: 'https://examplestudio.com',
    socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com' },
        { platform: 'github', url: 'https://github.com' },
        { platform: 'twitch', url: 'https://twitch.tv' },
    ],
    joinedAt: '2023-01-15T00:00:00Z',
    verified: true,
    stats: {
        totalDownloads: 150000,
        totalProjects: 15,
        followers: 25000,
        following: 150,
        averageRating: 4.7,
    },
};

export default function ProfilePage() {
    const params = useParams();
    const [projects, setProjects] = useState<ProjectSummary[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            try {
                const result = await projectService.getProjects();
                setProjects(result.projects.slice(0, 6));
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const user = mockUser;

    return (
        <div>
            {/* Banner */}
            <div className="h-48 md:h-64 bg-surface-800 relative">
                {user.banner && (
                    <img src={user.banner} alt="Banner" className="w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900 to-transparent" />
            </div>

            <div className="container-app -mt-24 relative z-10 pb-16">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    {/* Avatar */}
                    <div className="shrink-0">
                        <img
                            src={user.avatar}
                            alt={user.displayName}
                            className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-surface-900"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h1 className="text-2xl md:text-3xl font-bold text-surface-100">
                                        {user.displayName}
                                    </h1>
                                    {user.verified && (
                                        <Verified className="w-6 h-6 text-primary-400" />
                                    )}
                                </div>
                                <p className="text-surface-400 mb-4">@{user.username}</p>
                                <p className="text-surface-300 max-w-xl mb-4">{user.bio}</p>

                                {/* Meta */}
                                <div className="flex flex-wrap items-center gap-4 text-sm text-surface-400">
                                    {user.location && (
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {user.location}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        Joined {formatDate(user.joinedAt, { month: 'long', year: 'numeric' })}
                                    </span>
                                    {user.website && (
                                        <a href={user.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary-400 hover:text-primary-300">
                                            <LinkIcon className="w-4 h-4" />
                                            Website
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Follow Button */}
                            <Button>Follow</Button>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    <Card>
                        <CardContent className="p-4 text-center">
                            <p className="text-2xl font-bold text-surface-100">{user.stats.totalProjects}</p>
                            <p className="text-sm text-surface-400">Projects</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 text-center">
                            <p className="text-2xl font-bold text-surface-100">{(user.stats.totalDownloads / 1000).toFixed(1)}K</p>
                            <p className="text-sm text-surface-400">Downloads</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 text-center">
                            <p className="text-2xl font-bold text-surface-100">{(user.stats.followers / 1000).toFixed(1)}K</p>
                            <p className="text-sm text-surface-400">Followers</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 text-center">
                            <p className="text-2xl font-bold text-surface-100">{user.stats.following}</p>
                            <p className="text-sm text-surface-400">Following</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 text-center">
                            <p className="text-2xl font-bold text-surface-100 flex items-center justify-center gap-1">
                                {user.stats.averageRating}
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            </p>
                            <p className="text-sm text-surface-400">Avg Rating</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="projects">
                    <TabsList className="mb-6">
                        <TabsTrigger value="projects">Projects ({user.stats.totalProjects})</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                    </TabsList>

                    <TabsContent value="projects">
                        {isLoading ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="card animate-pulse">
                                        <div className="aspect-video bg-surface-700 rounded-t-xl" />
                                        <div className="p-4 space-y-3">
                                            <div className="h-5 bg-surface-700 rounded w-3/4" />
                                            <div className="h-4 bg-surface-700 rounded w-1/2" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : projects.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-surface-400">No projects yet</p>
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="about">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold text-surface-100 mb-4">About {user.displayName}</h3>
                                <p className="text-surface-300 mb-6">{user.bio}</p>

                                <h4 className="text-sm font-medium text-surface-400 mb-3">Social Links</h4>
                                <div className="flex gap-3">
                                    {user.socialLinks.map((social) => (
                                        <a
                                            key={social.platform}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-surface-700 rounded-lg hover:bg-surface-600 transition-colors"
                                        >
                                            {social.platform === 'twitter' && <Twitter className="w-5 h-5" />}
                                            {social.platform === 'github' && <Github className="w-5 h-5" />}
                                            {social.platform === 'twitch' && <Twitch className="w-5 h-5" />}
                                        </a>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
