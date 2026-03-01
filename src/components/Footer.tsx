'use client';

import Link from 'next/link';
import { Sparkles, Heart, Mail, MapPin, Globe } from 'lucide-react';
import styles from './Footer.module.css';

const t = {
    brandTitle: "Bodofa Memorial",
    brandSubtitle: "Digital Heritage Archive",
    description: "A comprehensive digital platform dedicated to preserving, documenting, and sharing the rich cultural heritage of the Bodo people for future generations.",
    quickLinks: "Quick Links",
    resources: "Resources",
    contact: "Contact",
    location: "Bodoland, Assam, India",
    email: "contact.CodelithLabs@gmail.com",
    copyright: "All rights reserved.",
    madeWith: "Made with love for our heritage",
    bodo: "बोरो",
    bodoTranslation: "Bodo People",
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerBg}></div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <div className={styles.logoIcon}>
                                <Sparkles className={styles.logoIconSvg} />
                            </div>
                            <div>
                                <h3 className={styles.logoTitle}>{t.brandTitle}</h3>
                                <p className={styles.logoSubtitle}>{t.brandSubtitle}</p>
                            </div>
                        </div>

                        <div className={styles.bodoText}>
                            <span className={styles.bodoMain}>{t.bodo}</span>
                            <span className={styles.bodoSub}>{t.bodoTranslation}</span>
                        </div>

                        <p className={styles.description}>
                            {t.description}
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.linksTitle}>{t.quickLinks}</h4>
                        <nav className={styles.nav}>
                            <Link href="/leaders">All Leaders</Link>
                            <Link href="/timeline">Timeline</Link>
                            <Link href="/history">History</Link>
                            <Link href="/tribute">Tribute Wall</Link>
                            <Link href="/culture">Culture</Link>
                            <Link href="/religion">Religion</Link>
                        </nav>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.linksTitle}>{t.resources}</h4>
                        <nav className={styles.nav}>
                            <Link href="/research/submit">Submit Article</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/api/leaders">API Access</Link>
                            <Link href="/admin">Admin Portal</Link>
                        </nav>
                    </div>

                    <div className={styles.contact}>
                        <h4 className={styles.linksTitle}>{t.contact}</h4>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <MapPin size={18} className={styles.contactIcon} />
                                <span>{t.location}</span>
                            </div>
                            <div className={styles.contactItem}>
                                <Mail size={18} className={styles.contactIcon} />
                                <span>{t.email}</span>
                            </div>
                            <div className={styles.contactItem}>
                                <Globe size={18} className={styles.contactIcon} />
                                <span>bodoresearch.org</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.bottomLeft}>
                        <p className={styles.copyright}>
                            © {currentYear} {t.brandTitle}. {t.copyright}
                        </p>
                    </div>
                    <div className={styles.bottomRight}>
                        <p className={styles.tribute}>
                            <Heart size={14} className={styles.heartIcon} />
                            {t.madeWith}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
