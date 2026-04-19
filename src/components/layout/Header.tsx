'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const NAV_LINKS = [
    { label: 'Leaders', href: '/leaders' },
    { label: 'History', href: '/history' },
    { label: 'Culture', href: '/culture' },
    {
        label: 'Archive',
        href: '/archive',
        children: [
            { label: 'Documents', href: '/archive/documents' },
            { label: 'Photographs', href: '/archive/photos' },
            { label: 'Manuscripts', href: '/archive/manuscripts' },
            { label: 'Artifacts', href: '/archive/artifacts' },
        ],
    },
    { label: 'Research', href: '/research' },
    { label: 'Timeline', href: '/timeline' },
    { label: 'Map', href: '/map' },
];

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <>
            <header
                className={`
                    fixed top-0 left-0 right-0 z-50 transition-all duration-300
                    ${scrolled
                        ? 'bg-navy-950/75 backdrop-blur-2xl border-b border-amber-500/15 shadow-[0_12px_40px_rgba(0,0,0,0.35)]'
                        : 'bg-transparent border-b border-transparent'}
                `}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-18 lg:h-20">
                        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
                            <div className="
                                w-10 h-10 rounded-[10px]
                                bg-[linear-gradient(135deg,rgba(201,146,42,0.22),rgba(110,91,211,0.22))]
                                border border-amber-500/30
                                flex items-center justify-center
                                font-display text-amber-300 text-xl font-bold leading-none
                                shadow-[0_0_30px_rgba(201,146,42,0.12)]
                                group-hover:border-amber-300 group-hover:shadow-[0_0_40px_rgba(201,146,42,0.2)]
                                transition-all duration-200
                            ">
                                B
                            </div>
                            <div className="hidden sm:flex flex-col gap-0.5">
                                <span className="font-display text-cream text-[13px] font-semibold tracking-[0.08em] uppercase leading-none">
                                    Bodo Research Memorial
                                </span>
                                <span className="text-[9px] tracking-[0.3em] uppercase text-cream/35 leading-none">
                                    Digital Heritage Archive
                                </span>
                            </div>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-1 glass-panel px-2 py-1">
                            {NAV_LINKS.map((link) =>
                                link.children ? (
                                    <div key={link.label} className="relative group">
                                        <button
                                            className={`
                                                flex items-center gap-1 px-3 py-2 rounded-md text-[11px] font-medium uppercase
                                                tracking-[0.22em] transition-colors duration-150
                                                ${isActive(link.href)
                                                    ? 'text-amber-300'
                                                    : 'text-cream/45 hover:text-cream/85'}
                                            `}
                                            onMouseEnter={() => setDropdown(link.label)}
                                            onMouseLeave={() => setDropdown(null)}
                                        >
                                            {link.label}
                                            <ChevronDown size={11} className="opacity-60 group-hover:opacity-100 transition-transform group-hover:rotate-180 duration-200" />
                                        </button>

                                        <div
                                            className={`
                                                absolute top-full left-0 mt-1 w-44
                                                bg-navy-950/95 border border-amber-500/20 rounded-xl overflow-hidden shadow-card-hover backdrop-blur-xl
                                                transition-all duration-150 origin-top
                                                ${dropdown === link.label
                                                    ? 'opacity-100 scale-y-100 pointer-events-auto'
                                                    : 'opacity-0 scale-y-95 pointer-events-none'}
                                            `}
                                            onMouseEnter={() => setDropdown(link.label)}
                                            onMouseLeave={() => setDropdown(null)}
                                        >
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="
                                                        block px-4 py-2.5 text-[11px] text-cream/60
                                                        hover:text-cream hover:bg-amber-500/10
                                                        border-b border-subtle last:border-0
                                                        transition-colors duration-100 tracking-[0.04em]
                                                    "
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className={`
                                            px-3 py-2 rounded-md text-[11px] font-medium uppercase tracking-[0.22em]
                                            transition-colors duration-150
                                            ${isActive(link.href)
                                                ? 'text-amber-300'
                                                : 'text-cream/45 hover:text-cream/80'}
                                        `}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </nav>

                        <div className="flex items-center gap-2">
                            <button
                                className="
                                    flex items-center gap-2 px-3 py-1.5 rounded-md
                                    border border-cream/10 bg-white/5 text-cream/35 text-[11px] tracking-[0.18em]
                                    hover:border-amber-500/30 hover:text-cream/75
                                    transition-all duration-150 hidden md:flex
                                "
                            >
                                <Search size={11} />
                                <span>Search archive...</span>
                                <kbd className="text-[9px] px-1.5 py-0.5 border border-cream/10 rounded font-mono text-cream/20 bg-black/20">
                                    ⌘K
                                </kbd>
                            </button>

                            <Link
                                href="/tribute"
                                className="
                                    hidden lg:block px-4 py-1.5 rounded-md
                                    bg-[linear-gradient(135deg,rgba(201,146,42,0.2),rgba(110,91,211,0.18))] text-amber-200 border border-amber-500/25
                                    text-[11px] font-semibold tracking-[0.26em] uppercase
                                    hover:bg-[linear-gradient(135deg,rgba(201,146,42,0.28),rgba(110,91,211,0.26))] hover:border-amber-400/60
                                    transition-all duration-150
                                "
                            >
                                Tribute
                            </Link>

                            <button
                                onClick={() => setMenuOpen((p) => !p)}
                                className="lg:hidden p-2 text-cream/50 hover:text-cream"
                                aria-label="Toggle menu"
                            >
                                {menuOpen ? <X size={18} /> : <Menu size={18} />}
                            </button>
                        </div>
                    </div>
                </div>

                {scrolled && <div className="h-px bg-gold-line opacity-60" />}
            </header>

            {menuOpen && (
                <div className="
                    fixed inset-0 z-40 lg:hidden
                    bg-navy-950/96 backdrop-blur-2xl
                    flex flex-col pt-20 px-6 pb-8
                ">
                    <nav className="flex flex-col gap-1 glass-panel p-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`
                                    py-3 border-b border-cream/10 text-[14px] font-medium uppercase
                                    tracking-[0.22em] transition-colors duration-100
                                    ${isActive(link.href) ? 'text-amber-300' : 'text-cream/55'}
                                `}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <Link
                        href="/tribute"
                        className="
                            mt-6 py-3 text-center rounded-lg
                            bg-[linear-gradient(135deg,rgba(201,146,42,0.2),rgba(110,91,211,0.18))] text-amber-200 border border-amber-500/30
                            text-[12px] font-semibold tracking-[0.28em] uppercase
                        "
                    >
                        Pay Tribute
                    </Link>
                </div>
            )}
        </>
    );
}
