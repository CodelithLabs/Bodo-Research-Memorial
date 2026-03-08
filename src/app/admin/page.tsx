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
        <div className="min-h-screen bg-background">
            {/* Header */}
            <section className="bg-primary text-white py-8">
                <div className="container-institutional">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                                <Shield className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                                <p className="text-white/60 text-sm">Manage content and users</p>
                            </div>
                        </div>
                        <Link href="/admin/settings" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-primary transition-all">
                            <Settings className="w-4 h-4" />
                            Settings
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="container-institutional -mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div key={stat.title} className="bg-white border border-divider p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-text-muted text-xs font-bold uppercase tracking-wider">{stat.title}</p>
                                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                                        <p className="text-green-600 text-xs mt-1">{stat.change} from last month</p>
                                    </div>
                                    <div className="w-12 h-12 bg-primary/5 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Main Content */}
            <section className="container-institutional py-12">
                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Pending Submissions */}
                    <div className="bg-white border border-divider">
                        <div className="p-6 border-b border-divider flex items-center justify-between">
                            <h2 className="text-lg font-bold text-primary">Pending Submissions</h2>
                            <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase">{pendingSubmissions.length} pending</span>
                        </div>
                        <div className="p-6 space-y-4">
                            {pendingSubmissions.map((submission) => (
                                <div key={submission.id} className="flex items-center justify-between p-4 bg-background">
                                    <div>
                                        <h3 className="font-medium text-primary">{submission.title}</h3>
                                        <p className="text-text-muted text-xs">{submission.author} • {submission.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 hover:bg-primary/5 text-text-muted hover:text-primary transition-colors">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-primary/5 text-green-600 transition-colors">
                                            <CheckCircle className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-primary/5 text-red-600 transition-colors">
                                            <XCircle className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border-t border-divider">
                            <button className="w-full py-3 border border-divider text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                                View All Submissions
                            </button>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white border border-divider">
                        <div className="p-6 border-b border-divider">
                            <h2 className="text-lg font-bold text-primary">Recent Activity</h2>
                        </div>
                        <div className="p-6 space-y-4">
                            {recentActivity.map((activity) => (
                                <div key={activity.id} className="flex items-center justify-between py-3 border-b border-divider last:border-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-primary/5 flex items-center justify-center">
                                            <FileText className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-primary">{activity.action}: {activity.item}</p>
                                            <p className="text-xs text-text-muted">{activity.user} • {activity.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border-t border-divider">
                            <button className="w-full py-3 border border-divider text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                                View All Activity
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-12">
                    <h2 className="text-lg font-bold text-primary mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Add Leader', icon: Users, href: '/admin/leaders/new' },
                            { label: 'Add Article', icon: FileText, href: '/admin/articles/new' },
                            { label: 'Manage Users', icon: Shield, href: '/admin/users' },
                            { label: 'View Analytics', icon: BarChart3, href: '/admin/analytics' },
                        ].map((action) => {
                            const Icon = action.icon;
                            return (
                                <Link key={action.label} href={action.href}>
                                    <div className="bg-white border border-divider p-6 text-center hover:border-secondary transition-all cursor-pointer group">
                                        <Icon className="w-6 h-6 mx-auto mb-3 text-primary group-hover:text-secondary transition-colors" />
                                        <span className="text-sm font-bold text-primary">{action.label}</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
