'use client';

import Link from 'next/link';
import { Upload, DollarSign, BarChart3, Eye, Download, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProjectCard } from '@/components/project/ProjectCard';
import { useAuth } from '@/context/AuthContext';

const stats = [
    { label: 'Total Revenue', value: '$5,240', change: '+12.5%', positive: true, icon: DollarSign },
    { label: 'Total Downloads', value: '15,420', change: '+8.2%', positive: true, icon: Download },
    { label: 'Total Views', value: '45,890', change: '-2.1%', positive: false, icon: Eye },
    { label: 'Active Projects', value: '12', change: '+2', positive: true, icon: TrendingUp },
];

const recentProjects = [
    { id: '1', title: 'Space Shooter', downloads: 5000, revenue: 1200, views: 15000, rating: 4.5 },
    { id: '2', title: 'Fantasy Assets', downloads: 3200, revenue: 850, views: 10000, rating: 4.8 },
    { id: '4', title: 'Pixel UI Kit', downloads: 1800, revenue: 620, views: 5500, rating: 4.6 },
];

const revenueData = [
    { month: 'Jan', amount: 1200 },
    { month: 'Feb', amount: 1800 },
    { month: 'Mar', amount: 1400 },
    { month: 'Apr', amount: 2100 },
    { month: 'May', amount: 2400 },
    { month: 'Jun', amount: 2800 },
];

export default function CreatorDashboardPage() {
    const { user } = useAuth();

    return (
        <div className="container-app py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-surface-100 mb-2">Creator Dashboard</h1>
                    <p className="text-surface-400">Manage your projects and track performance</p>
                </div>
                <Link href="/creator/upload">
                    <Button leftIcon={<Upload className="w-4 h-4" />}>
                        Upload Project
                    </Button>
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.label}>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-primary-500/10 rounded-lg">
                                        <Icon className="w-6 h-6 text-primary-400" />
                                    </div>
                                    <Badge variant={stat.positive ? 'success' : 'danger'} className="flex items-center gap-1">
                                        {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                        {stat.change}
                                    </Badge>
                                </div>
                                <p className="text-2xl font-bold text-surface-100">{stat.value}</p>
                                <p className="text-sm text-surface-400">{stat.label}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Chart Placeholder */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-semibold text-surface-100">Revenue Overview</h2>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64 flex items-end gap-2">
                                {revenueData.map((data) => (
                                    <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                                        <div
                                            className="w-full bg-primary-500/80 rounded-t hover:bg-primary-500 transition-colors"
                                            style={{ height: `${(data.amount / 3000) * 100}%` }}
                                        />
                                        <span className="text-xs text-surface-400">{data.month}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <p className="text-surface-400 text-sm">Total: <span className="text-surface-100 font-medium">$11,700</span></p>
                                <Link href="/creator/revenue" className="text-primary-400 text-sm hover:text-primary-300">
                                    View Details →
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div>
                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-semibold text-surface-100">Quick Actions</h2>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Link href="/creator/upload" className="block">
                                <Button variant="outline" className="w-full justify-start" leftIcon={<Upload className="w-4 h-4" />}>
                                    Upload New Project
                                </Button>
                            </Link>
                            <Link href="/creator/projects" className="block">
                                <Button variant="outline" className="w-full justify-start" leftIcon={<BarChart3 className="w-4 h-4" />}>
                                    Manage Projects
                                </Button>
                            </Link>
                            <Link href="/creator/analytics" className="block">
                                <Button variant="outline" className="w-full justify-start" leftIcon={<TrendingUp className="w-4 h-4" />}>
                                    View Analytics
                                </Button>
                            </Link>
                            <Link href="/creator/revenue" className="block">
                                <Button variant="outline" className="w-full justify-start" leftIcon={<DollarSign className="w-4 h-4" />}>
                                    Withdraw Earnings
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* My Projects */}
            <div className="mt-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-surface-100">My Projects</h2>
                    <Link href="/creator/projects" className="text-primary-400 text-sm hover:text-primary-300">
                        View all →
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-surface-700">
                                <th className="text-left py-3 px-4 text-sm font-medium text-surface-400">Project</th>
                                <th className="text-right py-3 px-4 text-sm font-medium text-surface-400">Downloads</th>
                                <th className="text-right py-3 px-4 text-sm font-medium text-surface-400">Revenue</th>
                                <th className="text-right py-3 px-4 text-sm font-medium text-surface-400">Views</th>
                                <th className="text-right py-3 px-4 text-sm font-medium text-surface-400">Rating</th>
                                <th className="text-right py-3 px-4 text-sm font-medium text-surface-400">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentProjects.map((project) => (
                                <tr key={project.id} className="border-b border-surface-700/50 hover:bg-surface-800/50">
                                    <td className="py-3 px-4">
                                        <Link href={`/project/${project.id}`} className="font-medium text-surface-100 hover:text-primary-400">
                                            {project.title}
                                        </Link>
                                    </td>
                                    <td className="py-3 px-4 text-right text-surface-300">{project.downloads.toLocaleString()}</td>
                                    <td className="py-3 px-4 text-right text-surface-300">${project.revenue}</td>
                                    <td className="py-3 px-4 text-right text-surface-300">{project.views.toLocaleString()}</td>
                                    <td className="py-3 px-4 text-right text-surface-300">{project.rating}</td>
                                    <td className="py-3 px-4 text-right">
                                        <Badge variant="success">Published</Badge>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
