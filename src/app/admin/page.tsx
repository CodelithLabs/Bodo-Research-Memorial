'use client';

/**
 * ============================================
 * Admin Dashboard
 * ============================================
 * Administrative interface for managing content
 * Protected route - requires authentication
 */

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    Users,
    FileText,
    BarChart3,
    Shield,
    CheckCircle,
    XCircle,
    Clock,
    TrendingUp,
    Eye,
    LogOut,
    Menu,
    X,
    Search,
    Bell,
    UserCircle
} from 'lucide-react';

interface AdminUser {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'editor' | 'public';
    avatar?: string;
}

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
    const router = useRouter();
    const [user, setUser] = useState<AdminUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');

    useEffect(() => {
        // Check for authentication
        const token = localStorage.getItem('adminToken');
        const userStr = localStorage.getItem('adminUser');

        if (!token || !userStr) {
            router.push('/admin/login');
            return;
        }

        try {
            const userData = JSON.parse(userStr);
            setUser(userData);
        } catch {
            router.push('/admin/login');
            return;
        }
        setIsLoading(false);
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        router.push('/admin/login');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Mobile Header */}
            <div className="lg:hidden bg-slate-900 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2">
                        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    <Shield className="w-6 h-6 text-amber-500" />
                    <span className="font-bold">Admin Panel</span>
                </div>
                <button onClick={handleLogout} className="p-2 text-slate-400 hover:text-white">
                    <LogOut className="w-5 h-5" />
                </button>
            </div>

            <div className="flex">
                {/* Sidebar */}
                <aside className={`
                    fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-200
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}>
                    <div className="p-6 border-b border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h1 className="font-bold text-lg">Bodo Archive</h1>
                                <p className="text-xs text-slate-400">Admin Panel</p>
                            </div>
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="p-4 border-b border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                                <UserCircle className="w-6 h-6 text-slate-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm truncate">{user.name}</p>
                                <p className="text-xs text-slate-400 capitalize">{user.role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="p-4 space-y-1">
                        <button
                            onClick={() => setActiveTab('dashboard')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-amber-500/20 text-amber-500' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                }`}
                        >
                            <BarChart3 className="w-5 h-5" />
                            <span>Dashboard</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('leaders')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'leaders' ? 'bg-amber-500/20 text-amber-500' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                }`}
                        >
                            <Users className="w-5 h-5" />
                            <span>Leaders</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('articles')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'articles' ? 'bg-amber-500/20 text-amber-500' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                }`}
                        >
                            <FileText className="w-5 h-5" />
                            <span>Articles</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('users')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'users' ? 'bg-amber-500/20 text-amber-500' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                }`}
                        >
                            <Shield className="w-5 h-5" />
                            <span>Users</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('analytics')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'analytics' ? 'bg-amber-500/20 text-amber-500' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                }`}
                        >
                            <TrendingUp className="w-5 h-5" />
                            <span>Analytics</span>
                        </button>
                    </nav>

                    {/* Logout */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            <span>Logout</span>
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 min-h-screen lg:ml-0">
                    {/* Top Bar */}
                    <header className="bg-white border-b border-slate-200 px-6 py-4 hidden lg:flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 bg-slate-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 w-64"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg relative">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg"
                            >
                                <LogOut className="w-4 h-4" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </header>

                    {/* Dashboard Content */}
                    <div className="p-6">
                        {/* Welcome Banner */}
                        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 text-white mb-6">
                            <h1 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h1>
                            <p className="text-amber-100">Here&apos;s what&apos;s happening with your archive today.</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                            {stats.map((stat) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={stat.title} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-slate-500 text-sm font-medium">{stat.title}</p>
                                                <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                                                <p className="text-green-600 text-xs mt-1 font-medium">{stat.change}</p>
                                            </div>
                                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                                                <Icon className={`w-6 h-6 ${stat.color}`} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Pending Submissions */}
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-slate-900">Pending Submissions</h2>
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">{pendingSubmissions.length} pending</span>
                                </div>
                                <div className="p-6 space-y-4">
                                    {pendingSubmissions.map((submission) => (
                                        <div key={submission.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                                            <div>
                                                <h3 className="font-medium text-slate-900">{submission.title}</h3>
                                                <p className="text-slate-500 text-xs">{submission.author} • {submission.date}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button className="p-2 hover:bg-white text-slate-500 hover:text-blue-600 rounded-lg transition-colors">
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 hover:bg-white text-slate-500 hover:text-green-600 rounded-lg transition-colors">
                                                    <CheckCircle className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 hover:bg-white text-slate-500 hover:text-red-600 rounded-lg transition-colors">
                                                    <XCircle className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 border-t border-slate-200">
                                    <button className="w-full py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
                                        View All Submissions
                                    </button>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                <div className="p-6 border-b border-slate-200">
                                    <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
                                </div>
                                <div className="p-6 space-y-4">
                                    {recentActivity.map((activity) => (
                                        <div key={activity.id} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                                    <FileText className="w-5 h-5 text-slate-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-slate-900">{activity.action}: {activity.item}</p>
                                                    <p className="text-xs text-slate-500">{activity.user} • {activity.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 border-t border-slate-200">
                                    <button className="w-full py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
                                        View All Activity
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="mt-6">
                            <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
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
                                            <div className="bg-white border border-slate-200 p-6 text-center rounded-xl hover:border-amber-500 hover:shadow-md transition-all cursor-pointer group">
                                                <Icon className="w-6 h-6 mx-auto mb-3 text-slate-600 group-hover:text-amber-600 transition-colors" />
                                                <span className="text-sm font-medium text-slate-900">{action.label}</span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
