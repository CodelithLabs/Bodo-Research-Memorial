'use client';

/**
 * ============================================
 * Admin Dashboard
 * ============================================
 * Administrative interface for managing content
 * Protected route - requires authentication
 */

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import AdminDashboardClient from './AdminDashboardClient';

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as { role?: string })?.role !== 'admin') {
        redirect('/admin/login');
    }

    return <AdminDashboardClient user={session.user} />;
}
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
