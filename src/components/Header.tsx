'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles } from 'lucide-react';
import styles from './Header.module.css';

const navLinks = [
    { href: '/', label: 'Home', bodo: 'गोदान' },
    { href: '/leaders', label: 'Leaders', bodo: 'मुख्य' },
    { href: '/timeline', label: 'Timeline', bodo: 'समयरेखा' },
    { href: '/history', label: 'History', bodo: 'इतिहास' },
    { href: '/tribute', label: 'Tribute Wall', bodo: 'स्मृति पाथ' },
    { href: '/culture', label: 'Culture', bodo: 'सोंधाइ' },
    { href: '/religion', label: 'Religion', bodo: 'बाथाउ' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Sparkles className={styles.logoIconSvg} />
                    </div>
                    <div className={styles.logoText}>
                        <span className={styles.logoTitle}>Bodofa Memorial</span>
                        <span className={styles.logoSubtitle}>Digital Heritage Archive</span>
                    </div>
                </Link>

                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                        >
                            <span className={styles.navLinkLabel}>{link.label}</span>
                            <span className={styles.navLinkBodo}>{link.bodo}</span>
                        </Link>
                    ))}
                </nav>

                <button
                    className={styles.menuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isMenuOpen && (
                    <div className={styles.mobileOverlay} onClick={() => setIsMenuOpen(false)} />
                )}

                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <nav className={styles.mobileNav}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className={styles.mobileNavLinkLabel}>{link.label}</span>
                                <span className={styles.mobileNavLinkBodo}>{link.bodo}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
