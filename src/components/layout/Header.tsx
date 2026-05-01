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
        const handler = () => setScrolled(window.scrollY > 18);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-[#f8f2e6]/90 backdrop-blur-xl border-b border-[#9a7340]/25 shadow-[0_12px_36px_rgba(63,47,24,0.14)]'
                        : 'bg-[#f8f2e6]/70 backdrop-blur-md border-b border-transparent'
                }`}
            >
                <div className="container-academic px-2">
                    <div className="h-20 flex items-center justify-between gap-4">
                        <Link href="/" className="group inline-flex items-center gap-3 min-w-0">
                            <div className="w-11 h-11 rounded-xl border border-[#8b6636]/35 bg-[linear-gradient(135deg,#f0ddbe,#f8e8cf)] text-[#5f4320] flex items-center justify-center font-display font-bold text-xl shadow-[0_8px_20px_rgba(79,58,26,0.16)]">
                                B
                            </div>
                            <div className="hidden sm:flex flex-col min-w-0">
                                <span className="font-display text-[13px] uppercase tracking-[0.09em] text-[#332d24] leading-none truncate">
                                    Bodo Research Memorial
                                </span>
                                <span className="text-[9px] uppercase tracking-[0.32em] text-[#6a6254] leading-none mt-1">
                                    Heritage Knowledge Platform
                                </span>
                            </div>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-[#8f744c]/24 bg-[#fff9ef]/85 px-2 py-1">
                            {NAV_LINKS.map((link) =>
                                link.children ? (
                                    <div key={link.label} className="relative">
                                        <button
                                            className={`flex items-center gap-1 px-3 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                                                isActive(link.href)
                                                    ? 'text-[#5f4320] bg-[#f2dfc0]'
                                                    : 'text-[#5b5244] hover:text-[#2f2b23] hover:bg-[#efe6d6]'
                                            }`}
                                            onMouseEnter={() => setDropdown(link.label)}
                                            onMouseLeave={() => setDropdown(null)}
                                        >
                                            {link.label}
                                            <ChevronDown size={12} className="opacity-70" />
                                        </button>

                                        <div
                                            className={`absolute top-full left-0 mt-2 w-48 rounded-xl border border-[#917347]/28 bg-[#fff8ec]/95 shadow-[0_14px_30px_rgba(48,36,19,0.18)] backdrop-blur-xl overflow-hidden transition-all duration-150 origin-top ${
                                                dropdown === link.label
                                                    ? 'opacity-100 scale-100 pointer-events-auto'
                                                    : 'opacity-0 scale-95 pointer-events-none'
                                            }`}
                                            onMouseEnter={() => setDropdown(link.label)}
                                            onMouseLeave={() => setDropdown(null)}
                                        >
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block px-4 py-2.5 text-[11px] tracking-[0.05em] text-[#564b3d] hover:text-[#2f2a22] hover:bg-[#f3e4cc] border-b border-[#ddceb4]/55 last:border-0"
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
                                        className={`px-3 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                                            isActive(link.href)
                                                ? 'text-[#5f4320] bg-[#f2dfc0]'
                                                : 'text-[#5b5244] hover:text-[#2f2b23] hover:bg-[#efe6d6]'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </nav>

                        <div className="flex items-center gap-2">
                            <Link
                                href="/search"
                                className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#87663a]/24 bg-[#fff9ef]/90 px-3.5 py-2 text-[11px] uppercase tracking-[0.14em] text-[#594f42] hover:text-[#2f2a22]"
                            >
                                <Search size={13} />
                                Search
                            </Link>

                            <Link href="/tribute" className="hidden lg:inline-flex btn-primary">
                                Pay Tribute
                            </Link>

                            <button
                                onClick={() => setMenuOpen((prev) => !prev)}
                                className="lg:hidden p-2 rounded-md text-[#4d4335] hover:bg-[#efe2cb]"
                                aria-label="Toggle menu"
                            >
                                {menuOpen ? <X size={18} /> : <Menu size={18} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {menuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden bg-[#f3ead9]/95 backdrop-blur-xl pt-24 px-5 pb-8">
                    <nav className="futuristic-shell p-4 flex flex-col">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`py-3 border-b border-[#dac8aa] text-[13px] uppercase tracking-[0.2em] ${
                                    isActive(link.href) ? 'text-[#6c4f25] font-semibold' : 'text-[#5b5244]'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <Link href="/tribute" className="btn-primary mt-5 w-full" onClick={() => setMenuOpen(false)}>
                        Pay Tribute
                    </Link>
                </div>
            )}
        </>
    );
}
