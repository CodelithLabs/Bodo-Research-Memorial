'use client';

import Link from 'next/link';
import { Gamepad2, Github, Twitter, Youtube, MessageCircle } from 'lucide-react';

const footerLinks = {
    platform: [
        { label: 'Explore', href: '/explore' },
        { label: 'Categories', href: '/categories' },
        { label: 'Featured Projects', href: '/featured' },
        { label: 'Top Developers', href: '/developers' },
        { label: 'New Releases', href: '/new' },
    ],
    creators: [
        { label: 'Become a Creator', href: '/creator' },
        { label: 'Creator Dashboard', href: '/creator/dashboard' },
        { label: 'Upload Project', href: '/creator/upload' },
        { label: 'Analytics', href: '/creator/analytics' },
        { label: 'Revenue', href: '/creator/revenue' },
    ],
    resources: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API', href: '/api-docs' },
        { label: 'Community', href: '/community' },
        { label: 'Support', href: '/support' },
        { label: 'Blog', href: '/blog' },
    ],
    legal: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'DMCA', href: '/dmca' },
    ],
};

const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: MessageCircle, href: 'https://discord.com', label: 'Discord' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
];

export function Footer() {
    return (
        <footer className="border-t border-surface-700 bg-surface-900">
            <div className="container-app py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-600">
                                <Gamepad2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-surface-100">FATHM</span>
                        </Link>
                        <p className="text-surface-400 text-sm mb-6 max-w-xs">
                            The ultimate marketplace for games, mods, and development assets.
                            Discover, create, and share with the community.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-surface-400 hover:text-surface-100 hover:bg-surface-800 rounded-lg transition-colors"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-surface-100 mb-4">Platform</h3>
                        <ul className="space-y-2">
                            {footerLinks.platform.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-surface-400 hover:text-surface-100 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Creators Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-surface-100 mb-4">Creators</h3>
                        <ul className="space-y-2">
                            {footerLinks.creators.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-surface-400 hover:text-surface-100 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-surface-100 mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-surface-400 hover:text-surface-100 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-surface-100 mb-4">Legal</h3>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-surface-400 hover:text-surface-100 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-surface-700 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-surface-400">
                        © {new Date().getFullYear()} FATHM. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-surface-400">
                        <span>Made with ❤️ for developers</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
