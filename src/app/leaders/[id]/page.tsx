'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Star, ArrowLeft, Award, BookOpen } from 'lucide-react';
import { leaders } from '@/data/leaders';
import { formatDate, calculateAge } from '@/lib/utils';
import styles from './page.module.css';

export default function LeaderDetailPage() {
    const params = useParams();
    const leader = leaders.find((l) => l.id === params.id);

    if (!leader) {
        return (
            <div className={styles.notFound}>
                <h1>Leader Not Found</h1>
                <p>The leader you&apos;re looking for doesn&apos;t exist.</p>
                <Link href="/leaders" className={styles.backLink}>
                    <ArrowLeft size={18} />
                    Back to Leaders
                </Link>
            </div>
        );
    }

    const age = calculateAge(leader.birthDate, leader.deathDate);
    const relatedLeaders = leaders
        .filter((l) => l.id !== leader.id && l.movement === leader.movement)
        .slice(0, 3);

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={styles.container}>
                    <Link href="/leaders" className={styles.backLink}>
                        <ArrowLeft size={18} />
                        Back to Leaders
                    </Link>

                    <div className={styles.profileHeader}>
                        <motion.div
                            className={styles.profileImage}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <span>{leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                            {leader.isMartyr && (
                                <div className={styles.martyrBadge}>
                                    <Star size={16} />
                                    Martyr
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            className={styles.profileInfo}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h1 className={styles.name}>{leader.name}</h1>
                            <p className={styles.title}>{leader.title}</p>

                            <div className={styles.meta}>
                                <span className={styles.metaItem}>
                                    <Calendar size={16} />
                                    {formatDate(leader.birthDate)} — {leader.deathDate ? formatDate(leader.deathDate) : 'Present'}
                                </span>
                                {leader.deathDate && (
                                    <span className={styles.metaItem}>
                                        Aged {age} years
                                    </span>
                                )}
                                <span className={styles.metaItem}>
                                    <MapPin size={16} />
                                    {leader.birthPlace}
                                </span>
                            </div>

                            <div className={styles.tags}>
                                <span className={styles.tag}>{leader.district}</span>
                                <span className={styles.tag}>{leader.era}</span>
                                <span className={styles.tag}>{leader.movement}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.mainContent}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2 className={styles.sectionTitle}>Biography</h2>
                                <div className={styles.biography}>
                                    {leader.biography.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </motion.div>

                            {leader.slogans && leader.slogans.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className={styles.slogans}
                                >
                                    <h2 className={styles.sectionTitle}>
                                        <Award size={20} />
                                        Slogans & Philosophy
                                    </h2>
                                    <ul className={styles.sloganList}>
                                        {leader.slogans.map((slogan, idx) => (
                                            <li key={idx} className={styles.slogan}>&quot;{slogan}&quot;</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </div>

                        <div className={styles.sidebar}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className={styles.contributions}
                            >
                                <h3 className={styles.sidebarTitle}>
                                    <BookOpen size={18} />
                                    Key Contributions
                                </h3>
                                <ul className={styles.contributionList}>
                                    {leader.contributions.map((contribution, idx) => (
                                        <li key={idx}>{contribution}</li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className={styles.details}
                            >
                                <h3 className={styles.sidebarTitle}>Details</h3>
                                <dl className={styles.detailList}>
                                    <dt>Region</dt>
                                    <dd>{leader.region}</dd>
                                    <dt>District</dt>
                                    <dd>{leader.district}</dd>
                                    <dt>Era</dt>
                                    <dd>{leader.era}</dd>
                                    <dt>Movement</dt>
                                    <dd>{leader.movement}</dd>
                                </dl>
                            </motion.div>
                        </div>
                    </div>

                    {relatedLeaders.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className={styles.related}
                        >
                            <h2 className={styles.sectionTitle}>Related Leaders</h2>
                            <div className={styles.relatedGrid}>
                                {relatedLeaders.map((relatedLeader) => (
                                    <Link
                                        key={relatedLeader.id}
                                        href={`/leaders/${relatedLeader.id}`}
                                        className={styles.relatedCard}
                                    >
                                        <div className={styles.relatedAvatar}>
                                            {relatedLeader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                        </div>
                                        <div>
                                            <h4>{relatedLeader.name}</h4>
                                            <p>{relatedLeader.title}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}
