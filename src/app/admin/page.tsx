/**
 * ============================================
 * Admin Dashboard
 * ============================================
 * Administrative interface for managing content
 */

import Link from 'next/link';
import {
    Users,
    FileText,
    BarChart3,
    Settings,
    Shield,
    CheckCircle,
    XCircle,
    Clock,
    TrendingUp,
    Eye
} from 'lucide-react';
import { Button, Card, CardContent, Badge } from '@/components/ui';

const stats = [
    { title: 'Total Articles', value: '523', change: '+12%', icon: FileText, color: 'text-blue-600' },
    { title: 'Total Leaders', value: '47', change: '+3%', icon: Users, color: 'text-purple-600' },
    { title: 'Pending Review', value: '12', change: '-5%', icon: Clock, color: 'text-amber-600' },
    { title: 'Total Users', value: '1,247', change: '+8%', icon: TrendingUp, color: 'text-green-600' },
];

const pendingSubmissions = [
    { id: 1, title: 'Bodofa Upendra Nath Brahma Biography', author: 'Dr. R. Narzary', date: '2024-01-15', type: 'Leader' },
    { id: 2, title: 'Baisagu Festival Traditions', author: 'M. Brahma', date: '2024-01-14', type: 'Article' },
    { id: 3, title: 'Bathou Religious Practices', author: 'P. Mushahary', date: '2024-01-13', type: 'Article' },
    { id: 4, title: 'Traditional Bodo Dress Documentation', author: 'S. Basumatary', date: '2024-01-12', type: 'Article' },
];

const recentActivity = [
    { id: 1, action: 'Published', item: 'Bodo Language Grammar Guide', user: 'Admin', date: '2024-01-15' },
    { id: 2, action: 'Edited', item: 'Jairam Rongphar Biography', user: 'Editor', date: '2024-01-14' },
    { id: 3, action: 'Approved', item: 'Bathou Symbols Article', user: 'Admin', date: '2024-01-13' },
    { id: 4, action: 'Submitted', item: 'Traditional Music Essay', user: 'Researcher', date: '2024-01-12' },
];

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-stone-50">
            {/* Header */}
            <section className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Shield className="w-8 h-8 text-indigo-300" />
                            <div>
                                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                                <p className="text-indigo-200">Manage content and users</p>
                            </div>
                        </div>
                        <Link href="/admin/settings">
                            <Button variant="outline" className="border-indigo-500 text-white hover:bg-indigo-800">
                                <Settings className="w-4 h-4 mr-2" />
                                Settings
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <Card key={stat.title} className="border-0 shadow-lg">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-500">{stat.title}</p>
                                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                            <p className="text-xs text-green-600 mt-1">{stat.change} from last month</p>
                                        </div>
                                        <div className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center ${stat.color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Pending Submissions */}
                    <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold text-gray-900">Pending Submissions</h2>
                                <Badge variant="warning">{pendingSubmissions.length} pending</Badge>
                            </div>
                            <div className="space-y-4">
                                {pendingSubmissions.map((submission) => (
                                    <div key={submission.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div>
                                            <h3 className="font-medium text-gray-900">{submission.title}</h3>
                                            <p className="text-sm text-gray-500">{submission.author} • {submission.date}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="sm">
                                                <Eye className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="sm">
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                            </Button>
                                            <Button variant="ghost" size="sm">
                                                <XCircle className="w-4 h-4 text-red-600" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" className="w-full mt-4">View All Submissions</Button>
                        </CardContent>
                    </Card>

                    {/* Recent Activity */}
                    <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>
                            <div className="space-y-4">
                                {recentActivity.map((activity) => (
                                    <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                                <FileText className="w-4 h-4 text-indigo-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{activity.action}: {activity.item}</p>
                                                <p className="text-xs text-gray-500">{activity.user} • {activity.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" className="w-full mt-4">View All Activity</Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div className="mt-8">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'Add Leader', icon: Users, href: '/admin/leaders/new' },
                            { label: 'Add Article', icon: FileText, href: '/admin/articles/new' },
                            { label: 'Manage Users', icon: Shield, href: '/admin/users' },
                            { label: 'View Analytics', icon: BarChart3, href: '/admin/analytics' },
                        ].map((action) => {
                            const Icon = action.icon;
                            return (
                                <Link key={action.label} href={action.href}>
                                    <Card className="hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-sm">
                                        <CardContent className="p-4 text-center">
                                            <Icon className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                                            <span className="text-sm font-medium text-gray-700">{action.label}</span>
                                        </CardContent>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
