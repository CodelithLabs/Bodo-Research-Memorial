'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Heart, BookOpen, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';
import RemoteImage from '@/components/RemoteImage';

// Bodo language translations
const translations = {
    welcome: "नमा (Nama)",
    subtitle: "Digital Research Platform",
    title: "Honoring Bodo Leaders",
    titleHighlight: "Who Sacrificed for the Motherland",
    description: "A focused research portal dedicated to preserving verified biographies, primary sources, and community memory of Bodo leaders who gave their lives for the Motherland.",
    exploreBtn: "Explore Archives",
    contributeBtn: "Contribute",
    statsLeaders: "Honored Leaders",
    statsYears: "Years of Heritage",
    statsDocuments: "Documents",
    statsCommunity: "Community Members",
};

// Pre-computed particle positions for better performance (reduced from 20 to 8)
const particlePositions = Array.from({ length: 8 }, (_, i) => ({
    left: `${(i * 12.5) % 100}%`,
    top: `${(i * 20) % 100}%`,
    delay: `${i * 0.5}s`,
    duration: `${4 + (i % 3)}s`
}));

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Optimized background - reduced particles from 20 to 8 */}
            <div className={styles.backgroundPattern}>
                <div className={styles.gridOverlay}></div>
                <div className={styles.gradientOrbs}>
                    <div className={styles.orb1}></div>
                    <div className={styles.orb2}></div>
                </div>
                <div className={styles.floatingParticles}>
                    {particlePositions.map((pos, i) => (
                        <div
                            key={i}
                            className={styles.particle}
                            style={pos}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.content}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className={styles.badge}
                    >
                        <Sparkles className={styles.badgeIcon} />
                        <span>{translations.welcome}</span>
                        <span className={styles.badgeDivider}>•</span>
                        <span>{translations.subtitle}</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={styles.title}
                    >
                        {translations.title}
                        <span className={styles.highlight}> {translations.titleHighlight}</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={styles.description}
                    >
                        {translations.description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className={styles.actions}
                    >
                        <Link href="/leaders" className={styles.primaryButton}>
                            <span>{translations.exploreBtn}</span>
                            <ArrowRight size={20} />
                        </Link>
                        <Link href="/research/submit" className={styles.secondaryButton}>
                            <span>{translations.contributeBtn}</span>
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className={styles.stats}
                    >
                        <div className={styles.stat}>
                            <div className={styles.statIconWrapper}>
                                <Heart className={styles.statIcon} />
                            </div>
                            <div className={styles.statContent}>
                                <span className={styles.statNumber}>8+</span>
                                <span className={styles.statLabel}>{translations.statsLeaders}</span>
                            </div>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <div className={styles.statIconWrapper}>
                                <BookOpen className={styles.statIcon} />
                            </div>
                            <div className={styles.statContent}>
                                <span className={styles.statNumber}>50+</span>
                                <span className={styles.statLabel}>{translations.statsYears}</span>
                            </div>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <div className={styles.statIconWrapper}>
                                <Sparkles className={styles.statIcon} />
                            </div>
                            <div className={styles.statContent}>
                                <span className={styles.statNumber}>500+</span>
                                <span className={styles.statLabel}>{translations.statsDocuments}</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Hero Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={styles.visual}
                >
                    <div className={styles.imageContainer}>
                        {/* External image credit example */}
                        <a
                            href="https://unsplash.com/photos/JKUTrJ4vK00"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.heroImageLink}
                        >
                            <RemoteImage
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
                                alt="Bodo cultural scene (unsplash)"
                                className={styles.heroImage}
                            />
                        </a>

                        {/* Glowing Ring */}
                        <div className={styles.glowingRing}></div>

                        {/* Central Emblem */}
                        <div className={styles.centralEmblem}>
                            <svg viewBox="0 0 200 200" className={styles.emblemSvg}>
                                {/* Outer Ring */}
                                <circle cx="100" cy="100" r="90" fill="none" stroke="url(#gradient1)" strokeWidth="2" className={styles.ring1} />
                                <circle cx="100" cy="100" r="70" fill="none" stroke="url(#gradient2)" strokeWidth="1" className={styles.ring2} />
                                <circle cx="100" cy="100" r="50" fill="none" stroke="url(#gradient3)" strokeWidth="0.5" className={styles.ring3} />

                                {/* Bodo Symbol */}
                                <g className={styles.symbolGroup}>
                                    <circle cx="100" cy="100" r="25" fill="url(#symbolGradient)" />
                                    <path d="M100 75 L100 125 M75 100 L125 100" stroke="white" strokeWidth="2" opacity="0.5" />
                                    <circle cx="100" cy="100" r="10" fill="none" stroke="white" strokeWidth="1" opacity="0.7" />
                                </g>

                                {/* Gradients */}
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0F3D2E" />
                                        <stop offset="50%" stopColor="#43655F" />
                                        <stop offset="100%" stopColor="#C9A227" />
                                    </linearGradient>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0F3D2E" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#C9A227" stopOpacity="0.6" />
                                    </linearGradient>
                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#C9A227" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#0F3D2E" stopOpacity="0.4" />
                                    </linearGradient>
                                    <radialGradient id="symbolGradient" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="#C9A227" />
                                        <stop offset="100%" stopColor="#0F3D2E" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Floating Cards - Simplified animations */}
                        <motion.div
                            className={styles.floatingCard1}
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <span className={styles.cardText}>बोरो</span>
                            <span className={styles.cardSubtext}>Bodo Language</span>
                        </motion.div>

                        <motion.div
                            className={styles.floatingCard2}
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <span className={styles.cardText}>Bathou</span>
                            <span className={styles.cardSubtext}>Religion</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
