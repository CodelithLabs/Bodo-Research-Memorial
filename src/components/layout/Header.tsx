'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Landmark, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Navigation structure for professional research portal
const navStructure = [
    { href: '/', label: 'Home' },
    {
        label: 'Leaders',
        children: [
            { href: '/leaders', label: 'All Leaders' },
            { href: '/leaders/category/Political Leaders', label: 'Political Leaders' },
            { href: '/leaders/category/Social Reformers', label: 'Social Reformers' },
            { href: '/leaders/category/Cultural Leaders', label: 'Cultural Leaders' },
            { href: '/leaders/category/Literary Figures', label: 'Literary Figures' },
            { href: '/leaders/category/Bodoland Movement Leaders', label: 'Bodoland Movement Leaders' },
        ]
    },
    {
        label: 'Culture',
        children: [
            { href: '/culture/language', label: 'Language' },
            { href: '/culture/festivals', label: 'Festivals' },
            { href: '/culture/clothing', label: 'Traditional Clothing' },
            { href: '/culture/folklore', label: 'Folklore' },
            { href: '/religion', label: 'Religion (Bathou)' },
        ]
    },
    {
        label: 'Research',
        children: [
            { href: '/research', label: 'Research Papers' },
            { href: '/research/papers', label: 'Academic Articles' },
            { href: '/research/submit', label: 'Submit Research' },
        ]
    },
    {
        label: 'Archive',
        children: [
            { href: '/archive', label: 'Historical Photos' },
            { href: '/archive?type=document', label: 'Documents' },
            { href: '/archive?type=manuscript', label: 'Manuscripts' },
            { href: '/archive?type=artifact', label: 'Artifacts' },
        ]
    },
    { href: '/timeline', label: 'Timeline' },
    { href: '/knowledge-graph', label: 'Knowledge Graph' },
    { href: '/history', label: 'History' },
    {
        label: 'About',
        children: [
            { href: '/about', label: 'Project Mission' },
            { href: '/about/contributors', label: 'Contributors' },
            { href: '/about/sources', label: 'Sources' },
        ]
    },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    const isActive = (href: string) => pathname === href;
    const isParentActive = (children: { href: string }[]) =>
        children?.some(child => pathname === child.href);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-gray-200 py-2'
                    : 'bg-gradient-to-b from-white/95 to-white/90 py-3'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-[#44CC44] flex items-center justify-center rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                            <Landmark className="w-5 h-5 text-white" />
                        </div>
                        <div className="hidden sm:block">
                            <span className="block text-gray-900 font-serif font-bold text-lg leading-tight">
                                Bodo Research <span className="text-[#44CC44]">Memorial</span>
                            </span>
                            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
                                Digital Heritage Archive
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation with Dropdowns */}
                    <nav className="hidden lg:flex items-center gap-0.5">
                        {navStructure.map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {item.children ? (
                                    <>
                                        <button
                                            className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${isParentActive(item.children)
                                                    ? 'text-[#44CC44]'
                                                    : 'text-gray-700 hover:text-[#44CC44]'
                                                }`}
                                        >
                                            {item.label}
                                            <ChevronDown className="w-4 h-4" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <AnimatePresence>
                                            {activeDropdown === item.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                                                >
                                                    {item.children.map((child, childIndex) => (
                                                        <Link
                                                            key={childIndex}
                                                            href={child.href}
                                                            className={`block px-4 py-2 text-sm transition-colors ${isActive(child.href)
                                                                    ? 'text-[#44CC44] bg-green-50'
                                                                    : 'text-gray-700 hover:text-[#44CC44] hover:bg-gray-50'
                                                                }`}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`px-3 py-2 text-sm font-medium transition-colors ${isActive(item.href)
                                                ? 'text-[#44CC44]'
                                                : 'text-gray-700 hover:text-[#44CC44]'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Action Area */}
                    <div className="flex items-center gap-2">
                        {/* Search Bar */}
                        <div ref={searchRef} className="relative">
                            <AnimatePresence>
                                {isSearchOpen ? (
                                    <motion.form
                                        initial={{ width: 40, opacity: 0 }}
                                        animate={{ width: 280, opacity: 1 }}
                                        exit={{ width: 40, opacity: 0 }}
                                        onSubmit={handleSearch}
                                        className="flex items-center"
                                    >
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search research..."
                                            className="w-full px-4 py-2 text-sm border border-gray-200 rounded-l-lg focus:outline-none focus:border-[#44CC44]"
                                            autoFocus
                                        />
                                        <button
                                            type="submit"
                                            className="px-3 py-2 bg-[#44CC44] text-white rounded-r-lg hover:bg-[#3db83d]"
                                        >
                                            <Search className="w-4 h-4" />
                                        </button>
                                    </motion.form>
                                ) : (
                                    <button
                                        onClick={() => setIsSearchOpen(true)}
                                        className="p-2 text-gray-600 hover:text-[#44CC44] hover:bg-gray-100 rounded-lg transition-colors"
                                        title="Search"
                                    >
                                        <Search className="w-5 h-5" />
                                    </button>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-gray-700 hover:text-[#44CC44] hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                            {navStructure.map((item, index) => (
                                <div key={index}>
                                    {item.children ? (
                                        <div className="space-y-1">
                                            <div className="px-3 py-2 text-sm font-semibold text-gray-900">
                                                {item.label}
                                            </div>
                                            {item.children.map((child, childIndex) => (
                                                <Link
                                                    key={childIndex}
                                                    href={child.href}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className={`block pl-6 pr-3 py-2 text-sm transition-colors ${isActive(child.href)
                                                            ? 'text-[#44CC44] bg-green-50'
                                                            : 'text-gray-600 hover:text-[#44CC44] hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`block px-3 py-2 text-sm font-medium transition-colors ${isActive(item.href)
                                                    ? 'text-[#44CC44] bg-green-50'
                                                    : 'text-gray-700 hover:text-[#44CC44] hover:bg-gray-50'
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {/* Mobile Search */}
                            <div className="pt-4 mt-2 border-t border-gray-200">
                                <form onSubmit={handleSearch} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search research..."
                                        className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#44CC44]"
                                    />
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-[#44CC44] text-white rounded-lg hover:bg-[#3db83d]"
                                    >
                                        <Search className="w-4 h-4" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
