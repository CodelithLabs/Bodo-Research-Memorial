'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Landmark } from 'lucide-react';

// Navigation structure for professional research portal
const navStructure = [
    { href: '/', label: 'Home' },
    { href: '/leaders', label: 'Leaders' },
    { href: '/culture', label: 'Culture' },
    { href: '/religion', label: 'Religion' },
    { href: '/movements', label: 'Movements' },
    { href: '/organizations', label: 'Organizations' },
    { href: '/archive', label: 'Archive' },
    { href: '/timeline', label: 'Timeline' },
    { href: '/history', label: 'History' },
    { href: '/research', label: 'Research' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
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

    const isActive = (href: string) => pathname === href;

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-white'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#44CC44] to-[#2d8a2d] rounded-lg flex items-center justify-center">
                            <Landmark className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="block text-gray-900 font-serif font-bold text-lg leading-tight">
                                Bodo Research <span className="text-[#44CC44]">Memorial</span>
                            </span>
                            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
                                Digital Heritage Archive
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-0.5">
                        {navStructure.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`px-3 py-2 text-sm font-medium transition-colors ${isActive(item.href)
                                    ? 'text-[#44CC44]'
                                    : 'text-gray-700 hover:text-[#44CC44]'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Action Area */}
                    <div className="flex items-center gap-2">
                        {/* Search Bar */}
                        <div ref={searchRef} className="relative">
                            {isSearchOpen ? (
                                <form
                                    onSubmit={handleSearch}
                                    className="flex items-center animate-in fade-in slide-in-from-right-4 duration-200"
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
                                </form>
                            ) : (
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="p-2 text-gray-600 hover:text-[#44CC44] hover:bg-gray-100 rounded-lg transition-colors"
                                    title="Search"
                                >
                                    <Search className="w-5 h-5" />
                                </button>
                            )}
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
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                        {navStructure.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 text-sm transition-colors ${isActive(item.href)
                                        ? 'text-[#44CC44] bg-green-50'
                                        : 'text-gray-600 hover:text-[#44CC44] hover:bg-gray-50'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
