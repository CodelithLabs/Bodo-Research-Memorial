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
import { authOptions } from '@/lib/auth-options';
import AdminDashboardClient from './AdminDashboardClient';

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);

    if (!session?.user || (session.user as { role?: string })?.role !== 'admin') {
        redirect('/admin/login');
    }

    const user = {
        id: (session.user as { id?: string }).id,
        name: session.user.name ?? 'Admin',
        email: session.user.email ?? null,
        role: (session.user as { role?: 'admin' | 'editor' | 'public' | null }).role ?? 'admin',
        avatar: (session.user as { image?: string | null }).image ?? null,
    };

    return <AdminDashboardClient user={user} />;
}
