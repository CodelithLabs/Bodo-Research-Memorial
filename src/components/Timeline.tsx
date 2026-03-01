'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { TimelineEvent } from '@/types';
import { formatDate } from '@/lib/utils';
import { leaders } from '@/data/leaders';
import styles from './Timeline.module.css';

interface TimelineProps {
    events: TimelineEvent[];
}

const eventTypeColors: Record<string, string> = {
    birth: '#2d5a3d',
    death: '#dc2626',
    movement: '#2563eb',
    achievement: '#d97706',
    memorial: '#7c3aed',
};

const eventTypeLabels: Record<string, string> = {
    birth: 'Birth',
    death: 'Martyrdom/Death',
    movement: 'Movement',
    achievement: 'Achievement',
    memorial: 'Memorial',
};

export default function Timeline({ events }: TimelineProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const sortedEvents = [...events].sort((a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const currentEvent = sortedEvents[currentIndex];
    const leader = currentEvent?.leaderId
        ? leaders.find(l => l.id === currentEvent.leaderId)
        : null;

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === sortedEvents.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, sortedEvents.length]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? sortedEvents.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === sortedEvents.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.timeline} ref={containerRef}>
            <div className={styles.header}>
                <h2 className={styles.title}>Journey Through History</h2>
                <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`${styles.playButton} ${isAutoPlaying ? styles.playing : ''}`}
                >
                    {isAutoPlaying ? '⏸ Pause' : '▶ Play'}
                </button>
            </div>

            <div className={styles.timelineContainer}>
                <div className={styles.progressBar}>
                    {sortedEvents.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`${styles.progressDot} ${idx === currentIndex ? styles.active : ''}`}
                            aria-label={`Go to event ${idx + 1}`}
                        />
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className={styles.eventCard}
                    >
                        <div
                            className={styles.eventMarker}
                            style={{ backgroundColor: eventTypeColors[currentEvent.type] }}
                        >
                            <span className={styles.eventYear}>
                                {new Date(currentEvent.date).getFullYear()}
                            </span>
                        </div>

                        <div className={styles.eventContent}>
                            <div className={styles.eventMeta}>
                                <span
                                    className={styles.eventType}
                                    style={{ backgroundColor: eventTypeColors[currentEvent.type] }}
                                >
                                    {eventTypeLabels[currentEvent.type]}
                                </span>
                                <span className={styles.eventDate}>
                                    <Calendar size={14} />
                                    {formatDate(currentEvent.date)}
                                </span>
                            </div>

                            <h3 className={styles.eventTitle}>{currentEvent.title}</h3>
                            <p className={styles.eventDescription}>{currentEvent.description}</p>

                            {leader && (
                                <div className={styles.leaderPreview}>
                                    <div className={styles.leaderAvatar}>
                                        {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                    </div>
                                    <div className={styles.leaderInfo}>
                                        <span className={styles.leaderName}>{leader.name}</span>
                                        <span className={styles.leaderTitle}>{leader.title}</span>
                                    </div>
                                    <Link
                                        href={`/leaders/${leader.id}`}
                                        className={styles.viewProfile}
                                    >
                                        View Profile
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className={styles.navigation}>
                    <button
                        onClick={goToPrevious}
                        className={styles.navButton}
                        aria-label="Previous event"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <span className={styles.counter}>
                        {currentIndex + 1} / {sortedEvents.length}
                    </span>
                    <button
                        onClick={goToNext}
                        className={styles.navButton}
                        aria-label="Next event"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}
