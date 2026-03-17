'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Gamepad2, Puzzle, FolderOpen, Palette, TrendingUp, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/project/ProjectCard';
import { Badge } from '@/components/ui/Badge';
import projectService from '@/services/projectService';
import { ProjectSummary } from '@/types/Project';

const categories = [
  { name: 'Games', icon: Gamepad2, href: '/subjects/games', color: 'bg-blue-500' },
  { name: 'Mods', icon: Puzzle, href: '/subjects/mods', color: 'bg-green-500' },
  { name: 'Assets', icon: FolderOpen, href: '/subjects/assets', color: 'bg-purple-500' },
  { name: 'Digital Art', icon: Palette, href: '/subjects/digital-arts', color: 'bg-pink-500' },
];

const topDevelopers = [
  { name: 'Indie Studio', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=indie_studio', projects: 15, followers: '25K' },
  { name: 'Pixel Artist', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pixel_artist', projects: 28, followers: '42K' },
  { name: 'Asset Creator', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=asset_creator', projects: 45, followers: '18K' },
];

export default function HomePage() {
  const [featuredProjects, setFeaturedProjects] = useState<ProjectSummary[]>([]);
  const [trendingProjects, setTrendingProjects] = useState<ProjectSummary[]>([]);
  const [latestProjects, setLatestProjects] = useState<ProjectSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [featured, trending, latest] = await Promise.all([
          projectService.getFeaturedProjects(),
          projectService.getTrendingProjects(),
          projectService.getLatestProjects(),
        ]);
        setFeaturedProjects(featured);
        setTrendingProjects(trending);
        setLatestProjects(latest);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-800 to-surface-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="container-app relative py-24 lg:py-32">
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">🚀 Now with 50,000+ projects</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-surface-100 mb-6 leading-tight">
              Discover & Share{' '}
              <span className="gradient-text">Games, Mods & Assets</span>
            </h1>
            <p className="text-xl text-surface-300 mb-8 max-w-2xl">
              The ultimate marketplace for developers. Find the perfect assets for your next project
              or share your creations with the community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                <Link href="/explore">
                  Explore Projects <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/creator/upload">Become a Creator</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Projects', value: '50K+' },
              { label: 'Active Users', value: '100K+' },
              { label: 'Creators', value: '5K+' },
              { label: 'Downloads', value: '1M+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-surface-100">{stat.value}</div>
                <div className="text-sm text-surface-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-app">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-surface-100">Browse Categories</h2>
          <Link href="/categories" className="text-primary-400 hover:text-primary-300 flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group p-6 bg-surface-800 hover:bg-surface-700 rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-100">{category.name}</h3>
                <p className="text-sm text-surface-400">Explore {category.name.toLowerCase()}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container-app">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <h2 className="text-2xl font-bold text-surface-100">Featured Projects</h2>
          </div>
          <Link href="/explore?sort=featured" className="text-primary-400 hover:text-primary-300 flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Trending Projects */}
      <section className="container-app">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-primary-400" />
            <h2 className="text-2xl font-bold text-surface-100">Trending Now</h2>
          </div>
          <Link href="/explore?sort=trending" className="text-primary-400 hover:text-primary-300 flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProjects.slice(0, 8).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Top Developers */}
      <section className="container-app">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Crown className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-surface-100">Top Developers</h2>
          </div>
          <Link href="/developers" className="text-primary-400 hover:text-primary-300 flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topDevelopers.map((developer) => (
            <Link
              key={developer.name}
              href={`/profile/${developer.name.toLowerCase().replace(' ', '_')}`}
              className="flex items-center gap-4 p-4 bg-surface-800 hover:bg-surface-700 rounded-xl transition-colors"
            >
              <img
                src={developer.avatar}
                alt={developer.name}
                className="w-16 h-16 rounded-xl"
              />
              <div>
                <h3 className="font-semibold text-surface-100">{developer.name}</h3>
                <p className="text-sm text-surface-400">{developer.projects} projects</p>
                <p className="text-sm text-surface-500">{developer.followers} followers</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Projects */}
      <section className="container-app">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-surface-100">Latest Uploads</h2>
          <Link href="/explore?sort=newest" className="text-primary-400 hover:text-primary-300 flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProjects.slice(0, 8).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-app">
        <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to share your project?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of creators and share your games, mods, and assets with the community.
          </p>
          <Button variant="secondary" size="lg">
            <Link href="/creator/upload">
              Start Uploading <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
