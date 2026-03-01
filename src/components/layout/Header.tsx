'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Landmark, Search } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/leaders', label: 'Leaders' },
    { href: '/culture', label: 'Culture' },
    { href: '/religion', label: 'Religion' },
    { href: '/history', label: 'History' },
    { href: '/timeline', label: 'Timeline' },
    { href: '/tribute', label: 'Tribute' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="bg-white border-b border-divider sticky top-0 z-50">
            <div className="container-institutional">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-card bg-heritage flex items-center justify-center">
                            <Landmark className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <span className="font-display font-semibold text-heritage text-lg group-hover:text-gold-600 transition-colors">
                                Bodofa Memorial
                            </span>
                            <p className="text-xs text-text-muted -mt-0.5">
                                Digital Heritage Archive
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-button ${isActive
                                            ? 'text-heritage bg-heritage-50'
                                            : 'text-text-secondary hover:text-heritage hover:bg-parchment'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Search & Mobile Menu */}
                    <div className="flex items-center gap-2">
                        {/* Search Button */}
                        <Link
                            href="/leaders"
                            className="p-2 text-text-secondary hover:text-heritage hover:bg-parchment rounded-button transition-colors"
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5" />
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-text-secondary hover:text-heritage hover:bg-parchment rounded-button transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden border-t border-divider py-4">
                        <div className="space-y-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive
                                                ? 'text-heritage bg-heritage-50'
                                                : 'text-text-secondary hover:text-heritage hover:bg-parchment'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
