'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, Search, Landmark } from 'lucide-react';

// Navigation structure for professional research portal
const navStructure = [
    { href: '/', label: 'Home' },
    { href: '/leaders', label: 'Leaders' },
    { href: '/tribute', label: 'Tributes' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const _menuRef = useRef<HTMLDivElement>(null);
    const searchFormRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Use vanilla JS for all interactivity to avoid React state hydration issues
    useEffect(() => {
        // Toggle mobile menu
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        const handleMenuToggle = () => {
            if (mobileMenu) {
                const isHidden = mobileMenu.classList.contains('hidden');
                if (isHidden) {
                    mobileMenu.classList.remove('hidden');
                } else {
                    mobileMenu.classList.add('hidden');
                }
            }
        };

        menuBtn?.addEventListener('click', handleMenuToggle);

        // Toggle search form
        const searchBtn = document.getElementById('search-toggle-btn');
        const searchForm = document.getElementById('header-search-form');

        const handleSearchToggle = () => {
            if (searchForm) {
                const isHidden = searchForm.classList.contains('hidden');
                if (isHidden) {
                    searchForm.classList.remove('hidden');
                    searchInputRef.current?.focus();
                } else {
                    searchForm.classList.add('hidden');
                }
            }
        };

        searchBtn?.addEventListener('click', handleSearchToggle);

        // Close search when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (searchFormRef.current && searchForm &&
                !searchFormRef.current.contains(event.target as Node) &&
                !searchBtn?.contains(event.target as Node)) {
                searchForm.classList.add('hidden');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            menuBtn?.removeEventListener('click', handleMenuToggle);
            searchBtn?.removeEventListener('click', handleSearchToggle);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Handle search form submission
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.querySelector('input') as HTMLInputElement;
        if (input && input.value.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(input.value)}`;
        }
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-white via-gray-50 to-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#44CC44] flex items-center justify-center rounded-l-lg">
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

                    {/* Desktop Navigation - static classNames */}
                    <nav className="hidden lg:flex items-center gap-0.5">
                        {navStructure.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#44CC44] transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Action Area */}
                    <div className="flex items-center gap-2">
                        {/* Search Bar - static to avoid hydration mismatch */}
                        <div ref={searchFormRef} className="relative">
                            {/* Search form - initially hidden */}
                            <div id="header-search-form" className="hidden">
                                <form
                                    onSubmit={handleSearch}
                                    className="flex items-center animate-in fade-in slide-in-from-right-4 duration-200"
                                >
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        placeholder="Search leaders..."
                                        className="w-full px-4 py-2 text-sm border border-gray-200 rounded-l-lg focus:outline-none focus:border-[#44CC44]"
                                    />
                                    <button
                                        type="submit"
                                        className="px-3 py-2 bg-[#44CC44] text-white rounded-r-lg hover:bg-[#3db83d]"
                                    >
                                        <Search className="w-4 h-4" />
                                    </button>
                                </form>
                            </div>
                            {/* Search toggle button - always visible */}
                            <button
                                id="search-toggle-btn"
                                className="p-2 text-gray-600 hover:text-[#44CC44] hover:bg-gray-100 rounded-lg transition-colors"
                                title="Search"
                                type="button"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Mobile Menu Toggle - static classNames */}
                        <button
                            id="mobile-menu-btn"
                            className="lg:hidden p-2 text-gray-700 hover:text-[#44CC44] hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                            type="button"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation - initially hidden */}
            <div id="mobile-menu" className="hidden lg:hidden bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                    {navStructure.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#44CC44] hover:bg-gray-50 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
