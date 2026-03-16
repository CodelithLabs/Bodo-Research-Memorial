'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import {
    Home,
    Compass,
    FolderOpen,
    Gamepad2,
    Puzzle,
    Palette,
    Music,
    Crown,
    TrendingUp,
    Clock,
    Star,
    Download,
    Heart,
    ShoppingBag,
    LayoutDashboard,
    Settings,
    Upload,
    BarChart3,
    DollarSign,
} from 'lucide-react';

// User sidebar navigation
export const userSidebarLinks = [
    { href: '/user/dashboard', label: 'Overview', icon: Home },
    { href: '/user/library', label: 'My Library', icon: ShoppingBag },
    { href: '/user/downloads', label: 'Downloads', icon: Download },
    { href: '/user/wishlist', label: 'Wishlist', icon: Heart },
    { href: '/user/settings', label: 'Settings', icon: Settings },
];

// Creator sidebar navigation
export const creatorSidebarLinks = [
    { href: '/creator/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/creator/projects', label: 'My Projects', icon: FolderOpen },
    { href: '/creator/upload', label: 'Upload', icon: Upload },
    { href: '/creator/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/creator/revenue', label: 'Revenue', icon: DollarSign },
    { href: '/creator/settings', label: 'Settings', icon: Settings },
];

// Browse sidebar navigation
export const browseSidebarLinks = [
    {
        label: 'Browse',
        items: [
            { href: '/explore', label: 'All Projects', icon: Compass },
            { href: '/explore?sort=trending', label: 'Trending', icon: TrendingUp },
            { href: '/explore?sort=newest', label: 'New Releases', icon: Clock },
            { href: '/explore?sort=top', label: 'Top Rated', icon: Star },
        ]
    },
    {
        label: 'Categories',
        items: [
            { href: '/subjects/games', label: 'Games', icon: Gamepad2 },
            { href: '/subjects/mods', label: 'Mods', icon: Puzzle },
            { href: '/subjects/assets', label: 'Assets', icon: FolderOpen },
            { href: '/subjects/digital-arts', label: 'Digital Art', icon: Palette },
        ]
    },
];

interface SidebarProps {
    variant?: 'user' | 'creator' | 'browse';
}

export function Sidebar({ variant = 'browse' }: SidebarProps) {
    const pathname = usePathname();

    const links = variant === 'user'
        ? userSidebarLinks
        : variant === 'creator'
            ? creatorSidebarLinks
            : [];

    if (variant === 'browse') {
        return (
            <aside className="w-64 shrink-0">
                <div className="sticky top-20 space-y-6">
                    {browseSidebarLinks.map((section) => (
                        <div key={section.label}>
                            <h3 className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3 px-3">
                                {section.label}
                            </h3>
                            <nav className="space-y-1">
                                {section.items?.map((link) => {
                                    const Icon = link.icon;
                                    const isActive = pathname === link.href ||
                                        (link.href !== '/explore' && pathname.startsWith(link.href));

                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={clsx(
                                                'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                                                isActive
                                                    ? 'bg-primary-600/10 text-primary-400'
                                                    : 'text-surface-400 hover:text-surface-100 hover:bg-surface-800'
                                            )}
                                        >
                                            <Icon className="w-4 h-4" />
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    ))}
                </div>
            </aside>
        );
    }

    return (
        <aside className="w-64 shrink-0">
            <div className="sticky top-20">
                <nav className="space-y-1">
                    {links.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={clsx(
                                    'flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors',
                                    isActive
                                        ? 'bg-surface-800 text-surface-100'
                                        : 'text-surface-400 hover:text-surface-100 hover:bg-surface-800/50'
                                )}
                            >
                                <Icon className="w-5 h-5" />
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
