'use client';

import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';
import { timelineEvents } from '@/data/leaders';
import styles from './page.module.css';

export default function TimelinePage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.title}
                >
                    Historical Timeline
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={styles.subtitle}
                >
                    Explore the key events that shaped Bodoland&apos;s history
                </motion.p>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <Timeline events={timelineEvents} />
                </div>
            </section>
        </div>
    );
}
