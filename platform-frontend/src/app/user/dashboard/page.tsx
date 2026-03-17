'use client';

import Link from 'next/link';
import { ShoppingBag, Download, Heart, Clock, TrendingUp, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProjectCard } from '@/components/project/ProjectCard';
import { useAuth } from '@/context/AuthContext';

// Mock data for the dashboard
const recentDownloads = [
    { id: '1', title: 'Space Shooter', thumbnail: 'https://picsum.photos/seed/space/200/150', lastPlayed: '2 hours ago' },
    { id: '2', title: 'Fantasy RPG Assets', thumbnail: 'https://picsum.photos/seed/fantasy/200/150', lastPlayed: '1 day ago' },
    { id: '3', title: 'Ambient Music Pack', thumbnail: 'https://picsum.photos/seed/music/200/150', lastPlayed: '3 days ago' },
];

const updates = [
    { id: '1', title: 'Space Shooter v1.2.1 released', time: '2 hours ago', read: false },
    { id: '2', title: 'New comment on your review', time: '1 day ago', read: false },
    { id: '3', title: 'Indie Studio uploaded a new project', time: '2 days ago', read: true },
];

const stats = [
    { label: 'Total Downloads', value: '156', icon: Download },
    { label: 'Projects Owned', value: '24', icon: ShoppingBag },
    { label: 'Wishlist Items', value: '12', icon: Heart },
    { label: 'Hours Played', value: '48h', icon: Clock },
];

export default function UserDashboardPage() {
    const { user } = useAuth();

    return (
        <div className="container-app py-8">
            {/* Welcome Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-surface-100 mb-2">
                    Welcome back, {user?.displayName || 'User'}!
                </h1>
                <p className="text-surface-400">Here's an overview of your activity</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.label}>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary-500/10 rounded-lg">
                                        <Icon className="w-6 h-6 text-primary-400" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-surface-100">{stat.value}</p>
                                        <p className="text-sm text-surface-400">{stat.label}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Downloads */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <h2 className="text-lg font-semibold text-surface-100">Recent Downloads</h2>
                            <Link href="/user/downloads" className="text-primary-400 text-sm hover:text-primary-300">
                                View all
                            </Link>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentDownloads.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/project/${item.id}`}
                                        className="flex items-center gap-4 p-3 bg-surface-700/50 rounded-lg hover:bg-surface-700 transition-colors"
                                    >
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-16 h-12 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium text-surface-100">{item.title}</h3>
                                            <p className="text-sm text-surface-400">{item.lastPlayed}</p>
                                        </div>
                                        <Button variant="ghost" size="sm">
                                            <Download className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Updates & Notifications */}
                <div>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <h2 className="text-lg font-semibold text-surface-100">Latest Updates</h2>
                            <Badge variant="danger">{updates.filter(u => !u.read).length} new</Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {updates.map((update) => (
                                    <div
                                        key={update.id}
                                        className={`p-3 rounded-lg ${update.read ? 'bg-surface-700/30' : 'bg-surface-700/50'}`}
                                    >
                                        <div className="flex items-start gap-3">
                                            {!update.read && (
                                                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                                            )}
                                            <div className="flex-1">
                                                <p className={`text-sm ${update.read ? 'text-surface-300' : 'text-surface-100'}`}>
                                                    {update.title}
                                                </p>
                                                <p className="text-xs text-surface-500 mt-1">{update.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" className="w-full mt-4">
                                View All Notifications
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Wishlist Preview */}
            <div className="mt-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-surface-100">Your Wishlist</h2>
                    <Link href="/user/wishlist" className="text-primary-400 text-sm hover:text-primary-300">
                        View all
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Placeholder wishlist items */}
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="card p-4 opacity-60">
                            <div className="aspect-video bg-surface-700 rounded-lg mb-3" />
                            <p className="text-surface-400 text-sm">Wishlist item {i}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
