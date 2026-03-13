'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Landmark, Search, Home, Archive, Clock, Calendar, BookOpen, Heart, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Home },
    { href: '/leaders', label: 'Archive', icon: Archive },
    { href: '/history', label: 'History', icon: Clock },
    { href: '/timeline', label: 'Timeline', icon: Calendar },
    { href: '/research', label: 'Research', icon: BookOpen },
    { href: '/tribute', label: 'Tributes', icon: Heart },
    { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('theme');
            if (stored === 'dark' || stored === 'light') return stored;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });
    const pathname = usePathname();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-slate-800/50 py-2' : 'bg-transparent dark:bg-transparent py-6 border-b border-transparent'
                }`}
        >
            <div className="container-institutional">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-primary flex items-center justify-center relative overflow-hidden group-hover:bg-primary/90 transition-colors">
                            <div className="absolute inset-0 opacity-10 bg-weave" />
                            <Landmark className="w-6 h-6 text-secondary relative z-10" />
                        </div>
                        <div className="hidden sm:block">
                            <span className="block text-primary font-bold text-lg uppercase tracking-wider leading-none mb-1">
                                Bodo Research <span className="text-secondary italic">Memorial</span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted">
                                Digital Heritage Repository
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-label={link.label}
                                    className={`relative px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-secondary flex items-center justify-center sm:justify-start gap-1 ${isActive ? 'text-primary dark:text-secondary' : 'text-text-muted dark:text-white'
                                        }`}
                                >
                                    {Icon && <Icon className="w-4 h-4 sm:hidden" />}
                                    <span className="hidden sm:inline">{link.label}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute bottom-0 left-5 right-5 h-0.5 bg-secondary"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Action Area */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                            className="p-2 text-primary hover:text-secondary transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                        </button>

                        <button className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-4 py-2 hover:bg-primary hover:text-white transition-all">
                            <Search className="w-4 h-4" />
                            <span className="hidden xl:inline">Library Search</span>
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-primary hover:text-secondary transition-colors"
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
                        className="lg:hidden bg-white dark:bg-slate-900 border-t border-divider overflow-hidden"
                    >
                        <div className="container-institutional py-8 space-y-4">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block py-2 text-sm font-bold uppercase tracking-widest flex items-center gap-2 ${isActive ? 'text-secondary border-l-2 border-secondary pl-4' : 'text-text-muted pl-4'
                                            }`}
                                    >
                                        {Icon && <Icon className="w-5 h-5" />}
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 mt-4 border-t border-divider">
                                <button className="w-full bg-primary text-white py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                                    <Search className="w-4 h-4" /> Global Search
                                </button>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
