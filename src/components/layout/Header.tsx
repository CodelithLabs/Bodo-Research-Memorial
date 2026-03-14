'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Home, Archive, Clock, Calendar, BookOpen, Mail, Landmark, Network, Flag, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/leaders', label: 'Leaders', icon: Archive },
    { href: '/movements', label: 'Movements', icon: Flag },
    { href: '/organizations', label: 'Organizations', icon: Building2 },
    { href: '/archive', label: 'Digital Archive', icon: Archive },
    { href: '/knowledge-graph', label: 'Knowledge Graph', icon: Network },
    { href: '/timeline', label: 'Timeline', icon: Calendar },
    { href: '/research', label: 'Research', icon: BookOpen },
    { href: '/history', label: 'History', icon: Clock },
    { href: '/about', label: 'About', icon: Landmark },
    { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container-academic">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-parrot flex items-center justify-center rounded-card shadow-sm group-hover:shadow-glow-primary transition-shadow">
                            <Landmark className="w-5 h-5 text-white" />
                        </div>
                        <div className="hidden sm:block">
                            <span className="block text-text-primary font-heading font-bold text-lg leading-tight">
                                Bodo Research <span className="text-parrot">Memorial</span>
                            </span>
                            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
                                Digital Heritage Archive
                            </span>
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
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${isActive
                                        ? 'text-parrot'
                                        : 'text-text-secondary hover:text-parrot'
                                        }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute bottom-0 left-4 right-4 h-0.5 bg-parrot"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Action Area */}
                    <div className="flex items-center gap-3">
                        {/* Search Button */}
                        <button
                            className="hidden md:flex items-center gap-2 text-sm text-text-muted bg-background-paper border border-border px-4 py-2 rounded-card hover:border-parrot hover:text-parrot transition-all"
                        >
                            <Search className="w-4 h-4" />
                            <span className="hidden xl:inline">Search Archive</span>
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-text-primary hover:text-parrot transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-border overflow-hidden"
                    >
                        <div className="container-academic py-6 space-y-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block py-3 px-4 text-sm font-medium rounded-card flex items-center gap-3 ${isActive
                                            ? 'text-parrot bg-parrot/5'
                                            : 'text-text-secondary hover:text-parrot hover:bg-parrot/5'
                                            }`}
                                    >
                                        {Icon && <Icon className="w-5 h-5" />}
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 mt-2 border-t border-border">
                                <button className="w-full flex items-center justify-center gap-2 text-sm font-medium text-white bg-parrot py-3 rounded-card hover:bg-parrot-dark transition-colors">
                                    <Search className="w-4 h-4" /> Search Archive
                                </button>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
