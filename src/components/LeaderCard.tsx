'use client';

import Link from 'next/link';
import { Calendar, MapPin, Star, ArrowRight } from 'lucide-react';
import { Leader } from '@/types';
import { formatDate, calculateAge } from '@/lib/utils';
import styles from './LeaderCard.module.css';

interface LeaderCardProps {
    leader: Leader;
}

export default function LeaderCard({ leader }: LeaderCardProps) {
    const age = calculateAge(leader.birthDate, leader.deathDate);

    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>
                <div className={styles.imagePlaceholder}>
                    <span>{leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                </div>
                {leader.isMartyr && (
                    <div className={styles.martyrBadge}>
                        <Star size={14} />
                        <span>Martyr</span>
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.meta}>
                    <span className={styles.district}>
                        <MapPin size={14} />
                        {leader.district}
                    </span>
                    <span className={styles.era}>{leader.era}</span>
                </div>

                <h3 className={styles.name}>
                    <Link href={`/leaders/${leader.id}`}>
                        {leader.name}
                    </Link>
                </h3>

                <p className={styles.title}>{leader.title}</p>

                <div className={styles.dates}>
                    <Calendar size={14} />
                    <span>
                        {formatDate(leader.birthDate)} — {leader.deathDate ? formatDate(leader.deathDate) : 'Present'}
                    </span>
                </div>

                {leader.deathDate && (
                    <p className={styles.age}>Aged {age} years</p>
                )}

                <Link href={`/leaders/${leader.id}`} className={styles.readMore}>
                    Read Full Biography
                    <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
