'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquare } from 'lucide-react';
import TributeForm from '@/components/TributeForm';
import styles from './page.module.css';

// Sample tributes (would come from database in production)
const sampleTributes = [
    {
        id: 1,
        name: 'Rohit Sharma',
        message: 'Your sacrifice will never be forgotten. Bodofa Upendra Nath Brahma inspired an entire generation.',
        date: '2024-06-20',
    },
    {
        id: 2,
        name: 'Mina Devi',
        message: 'Thank you for your courage. Your legacy continues to inspire us all.',
        date: '2024-03-15',
    },
    {
        id: 3,
        name: 'Bhim Rongphar',
        message: 'Sujit Narzary was just 15 when he gave his life. We owe our peaceful movement to such brave souls.',
        date: '2024-01-20',
    },
];

export default function TributePage() {
    const [tributes, setTributes] = useState(sampleTributes);

    const handleNewTribute = (tribute: { name: string; message: string }) => {
        const newTribute = {
            id: Date.now(),
            name: tribute.name,
            message: tribute.message,
            date: new Date().toISOString().split('T')[0],
        };
        setTributes([newTribute, ...tributes]);
    };

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.title}
                >
                    <Heart className={styles.heartIcon} />
                    Tribute Wall
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={styles.subtitle}
                >
                    Share your thoughts and honor the memory of our heroes
                </motion.p>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <TributeForm onSubmit={handleNewTribute} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className={styles.tributesList}
                        >
                            <h2 className={styles.listTitle}>
                                <MessageSquare size={20} />
                                Recent Tributes
                            </h2>

                            {tributes.length > 0 ? (
                                <div className={styles.tributes}>
                                    {tributes.map((tribute, index) => (
                                        <motion.div
                                            key={tribute.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            className={styles.tributeCard}
                                        >
                                            <div className={styles.tributeHeader}>
                                                <span className={styles.tributeName}>{tribute.name}</span>
                                                <span className={styles.tributeDate}>{tribute.date}</span>
                                            </div>
                                            <p className={styles.tributeMessage}>{tribute.message}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <p className={styles.noTributes}>No tributes yet. Be the first to leave one!</p>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
