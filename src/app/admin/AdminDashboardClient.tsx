'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
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
  UserCircle,
} from 'lucide-react';

interface AdminUser {
  id?: string;
  name?: string | null;
  email?: string | null;
  role?: 'admin' | 'editor' | 'public' | null;
  avatar?: string | null;
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

export default function AdminDashboardClient({ user }: { user: AdminUser }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/admin/login' });
  };

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
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-200
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
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
                <p className="font-medium text-sm truncate">{user.name ?? 'Admin'}</p>
                <p className="text-xs text-slate-400 capitalize">{user.role ?? 'admin'}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'dashboard'
                  ? 'bg-amber-500/20 text-amber-500'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('leaders')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'leaders'
                  ? 'bg-amber-500/20 text-amber-500'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Leaders</span>
            </button>
            <button
              onClick={() => setActiveTab('articles')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'articles'
                  ? 'bg-amber-500/20 text-amber-500'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>Articles</span>
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'users'
                  ? 'bg-amber-500/20 text-amber-500'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Shield className="w-5 h-5" />
              <span>Users</span>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'analytics'
                  ? 'bg-amber-500/20 text-amber-500'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
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
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0 p-4 lg:p-8">
          {/* Top Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
              <p className="text-slate-500">Welcome back, {user.name ?? 'Admin'}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <button className="relative p-2 text-slate-400 hover:text-slate-600">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-xl bg-slate-50 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pending Submissions */}
          <div className="bg-white rounded-xl border border-slate-200 mb-8">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" />
                <h2 className="text-lg font-bold text-slate-900">Pending Submissions</h2>
              </div>
              <Link href="#" className="text-sm text-amber-600 hover:text-amber-700">
                View all
              </Link>
            </div>
            <div className="divide-y divide-slate-200">
              {pendingSubmissions.map((submission) => (
                <div key={submission.id} className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-slate-900">{submission.title}</h3>
                    <p className="text-sm text-slate-500">
                      {submission.author} • {submission.date} • {submission.type}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <XCircle className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-slate-200">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
                <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
              </div>
              <Link href="#" className="text-sm text-emerald-600 hover:text-emerald-700">
                View all
              </Link>
            </div>
            <div className="divide-y divide-slate-200">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-slate-900">
                      <span className="text-emerald-600">{activity.action}</span> {activity.item}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {activity.user} • {activity.date}
                    </p>
                  </div>
                  <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
