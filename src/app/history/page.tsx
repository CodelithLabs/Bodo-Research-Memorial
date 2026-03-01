'use client';

import { motion } from 'framer-motion';
import { bodolandHistory } from '@/data/leaders';
import { TreePine, BookOpen, MapPin, Heart } from 'lucide-react';
import styles from './page.module.css';

export default function HistoryPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.title}
                >
                    Bodoland History & Culture
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={styles.subtitle}
                >
                    Understanding the rich heritage of the Bodo people
                </motion.p>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.overview}
                    >
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <p className={styles.text}>{bodolandHistory.overview}</p>
                    </motion.div>

                    <div className={styles.grid}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.cardIcon}>
                                <TreePine size={28} />
                            </div>
                            <h3 className={styles.cardTitle}>Bathou Religion</h3>
                            <p className={styles.cardText}>{bodolandHistory.culture.bathou}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={styles.card}
                        >
                            <div className={styles.cardIcon}>
                                <BookOpen size={28} />
                            </div>
                            <h3 className={styles.cardTitle}>Bodo Language</h3>
                            <p className={styles.cardText}>{bodolandHistory.culture.language}</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={styles.regions}
                    >
                        <h2 className={styles.sectionTitle}>
                            <MapPin size={24} />
                            Key Regions
                        </h2>
                        <div className={styles.regionGrid}>
                            {bodolandHistory.regions.map((region, index) => (
                                <div key={index} className={styles.regionCard}>
                                    <h4>{region.name}</h4>
                                    <p>{region.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={styles.movement}
                    >
                        <h2 className={styles.sectionTitle}>
                            <Heart size={24} />
                            The Bodoland Movement
                        </h2>
                        <div className={styles.movementContent}>
                            <p>
                                The Bodoland movement emerged as a political and cultural struggle for
                                autonomy and recognition of the Bodo people. Beginning in the mid-20th century,
                                the movement sought to establish a separate state for the Bodo community within
                                the Indian constitutional framework.
                            </p>
                            <p>
                                The movement was led by various leaders, most notably Bodofa Upendra Nath Brahma,
                                who advocated for non-violent resistance and constitutional means. The struggle
                                resulted in the establishment of the Bodoland Territorial Council (BTC) in 2003,
                                providing autonomous governance to the region.
                            </p>
                            <p>
                                Many brave leaders and martyrs sacrificed their lives for this cause, including
                                young activists like Sujit Narzary. Their contributions continue to shape the
                                political landscape of Bodoland today.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
