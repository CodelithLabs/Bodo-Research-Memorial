'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Landmark, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/leaders', label: 'Archive' },
    { href: '/history', label: 'History' },
    { href: '/timeline', label: 'Timeline' },
    { href: '/research', label: 'Research' },
    { href: '/tribute', label: 'Tributes' },
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-5 border-b border-divider'
                }`}
        >
            <div className="container-institutional">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-primary flex items-center justify-center relative overflow-hidden group-hover:bg-primary/90 transition-colors">
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
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-secondary ${isActive ? 'text-primary' : 'text-text-muted'
                                        }`}
                                >
                                    {link.label}
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
                        className="lg:hidden bg-white border-t border-divider overflow-hidden"
                    >
                        <div className="container-institutional py-8 space-y-4">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block py-2 text-sm font-bold uppercase tracking-widest ${isActive ? 'text-secondary border-l-2 border-secondary pl-4' : 'text-text-muted pl-4'
                                            }`}
                                    >
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
