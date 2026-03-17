'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import {
    Search,
    Bell,
    User,
    Menu,
    X,
    Home,
    Compass,
    FolderOpen,
    LayoutDashboard,
    Upload,
    LogOut,
    Settings,
    Heart,
    ShoppingBag,
    ChevronDown,
    Gamepad2,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Badge } from '../ui/Badge';

// Mock user for demo
const mockUser = {
    id: '1',
    username: 'game_dev',
    displayName: 'Game Developer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=game_dev',
    verified: true,
};

const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/explore', label: 'Explore', icon: Compass },
    { href: '/categories', label: 'Categories', icon: FolderOpen },
    { href: '/user/library', label: 'Library', icon: ShoppingBag },
    { href: '/user/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/creator/upload', label: 'Upload', icon: Upload },
];

export function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const profileRef = useRef<HTMLDivElement>(null);
    const notificationsRef = useRef<HTMLDivElement>(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
                setIsNotificationsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/explore?search=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <header className="sticky top-0 z-40 w-full border-b border-surface-700 bg-surface-900/95 backdrop-blur supports-[backdrop-filter]:bg-surface-900/80">
            <div className="container-app">
                <div className="flex h-16 items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-600">
                            <Gamepad2 className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-surface-100 hidden sm:block">
                            FATHM
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={clsx(
                                        'flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                                        isActive
                                            ? 'bg-surface-800 text-surface-100'
                                            : 'text-surface-400 hover:text-surface-100 hover:bg-surface-800/50'
                                    )}
                                >
                                    <Icon className="w-4 h-4" />
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                            <input
                                type="text"
                                placeholder="Search projects, developers, tags..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-surface-800 border border-surface-700 rounded-lg text-surface-100 placeholder-surface-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
                            />
                        </div>
                    </form>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2">
                        {/* Notifications */}
                        <div className="relative" ref={notificationsRef}>
                            <button
                                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                                className="relative p-2 text-surface-400 hover:text-surface-100 hover:bg-surface-800 rounded-lg transition-colors"
                            >
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                            </button>

                            {isNotificationsOpen && (
                                <div className="absolute right-0 mt-2 w-80 bg-surface-800 border border-surface-700 rounded-xl shadow-xl animate-fade-in">
                                    <div className="p-3 border-b border-surface-700">
                                        <h3 className="font-semibold text-surface-100">Notifications</h3>
                                    </div>
                                    <div className="max-h-96 overflow-y-auto">
                                        <NotificationItem
                                            title="New comment on your project"
                                            message="Someone commented on Space Shooter..."
                                            time="2h ago"
                                            unread
                                        />
                                        <NotificationItem
                                            title="Project approved"
                                            message="Your project has been published!"
                                            time="1d ago"
                                        />
                                        <NotificationItem
                                            title="New follower"
                                            message="GameStudio started following you"
                                            time="2d ago"
                                        />
                                    </div>
                                    <Link
                                        href="/notifications"
                                        className="block p-3 text-center text-sm text-primary-400 hover:text-primary-300 border-t border-surface-700"
                                    >
                                        View all notifications
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* User Profile Dropdown */}
                        <div className="relative" ref={profileRef}>
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center gap-2 p-1.5 hover:bg-surface-800 rounded-lg transition-colors"
                            >
                                <img
                                    src={mockUser.avatar}
                                    alt={mockUser.displayName}
                                    className="w-8 h-8 rounded-lg"
                                />
                                <ChevronDown className="w-4 h-4 text-surface-400 hidden sm:block" />
                            </button>

                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-surface-800 border border-surface-700 rounded-xl shadow-xl animate-fade-in overflow-hidden">
                                    <div className="p-3 border-b border-surface-700">
                                        <p className="font-medium text-surface-100">{mockUser.displayName}</p>
                                        <p className="text-sm text-surface-400">@{mockUser.username}</p>
                                    </div>
                                    <div className="p-1">
                                        <Link
                                            href={`/profile/${mockUser.username}`}
                                            className="flex items-center gap-3 px-3 py-2 text-sm text-surface-300 hover:bg-surface-700 rounded-lg"
                                        >
                                            <User className="w-4 h-4" />
                                            Profile
                                        </Link>
                                        <Link
                                            href="/user/library"
                                            className="flex items-center gap-3 px-3 py-2 text-sm text-surface-300 hover:bg-surface-700 rounded-lg"
                                        >
                                            <ShoppingBag className="w-4 h-4" />
                                            My Library
                                        </Link>
                                        <Link
                                            href="/user/wishlist"
                                            className="flex items-center gap-3 px-3 py-2 text-sm text-surface-300 hover:bg-surface-700 rounded-lg"
                                        >
                                            <Heart className="w-4 h-4" />
                                            Wishlist
                                        </Link>
                                        <Link
                                            href="/user/settings"
                                            className="flex items-center gap-3 px-3 py-2 text-sm text-surface-300 hover:bg-surface-700 rounded-lg"
                                        >
                                            <Settings className="w-4 h-4" />
                                            Settings
                                        </Link>
                                    </div>
                                    <div className="p-1 border-t border-surface-700">
                                        <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-red-400 hover:bg-surface-700 rounded-lg">
                                            <LogOut className="w-4 h-4" />
                                            Sign out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-surface-400 hover:text-surface-100 hover:bg-surface-800 rounded-lg"
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden border-t border-surface-700 bg-surface-900 animate-fade-in">
                    <div className="container-app py-4 space-y-4">
                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-surface-800 border border-surface-700 rounded-lg text-surface-100 placeholder-surface-500 focus:outline-none focus:border-primary-500 text-sm"
                            />
                        </form>

                        {/* Mobile Navigation */}
                        <nav className="flex flex-col gap-1">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
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
                </div>
            )}
        </header>
    );
}

interface NotificationItemProps {
    title: string;
    message: string;
    time: string;
    unread?: boolean;
}

function NotificationItem({ title, message, time, unread }: NotificationItemProps) {
    return (
        <div className="flex gap-3 p-3 hover:bg-surface-700/50 transition-colors cursor-pointer">
            {unread && <span className="w-2 h-2 bg-primary-500 rounded-full shrink-0 mt-2" />}
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-surface-100 truncate">{title}</p>
                <p className="text-xs text-surface-400 truncate">{message}</p>
                <p className="text-xs text-surface-500 mt-1">{time}</p>
            </div>
        </div>
    );
}
