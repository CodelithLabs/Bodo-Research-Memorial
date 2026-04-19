'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TimelineEvent } from '@/types';

type EventType = 'political' | 'cultural' | 'historical' | 'all';

const TYPE_STYLES = {
    political: { bg: 'bg-amber-500/10', text: 'text-amber-500', border: 'border-amber-500/20' },
    cultural: { bg: 'bg-teal-400/8', text: 'text-teal-300/70', border: 'border-teal-400/15' },
    historical: { bg: 'bg-blue-400/10', text: 'text-blue-300/70', border: 'border-blue-400/20' },
};

const FILTERS: { label: string; value: EventType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Political', value: 'political' },
    { label: 'Cultural', value: 'cultural' },
    { label: 'Historical', value: 'historical' },
];

function mapEventType(type: TimelineEvent['type']): Exclude<EventType, 'all'> {
    if (type === 'movement') return 'political';
    if (type === 'achievement' || type === 'memorial') return 'cultural';
    return 'historical';
}

export default function Timeline({ events }: { events: TimelineEvent[] }) {
    const [active, setActive] = useState<EventType>('all');

    const normalized = useMemo(
        () =>
            events.map((event) => ({
                ...event,
                year: new Date(event.date).getFullYear().toString(),
                category: mapEventType(event.type),
            })),
        [events]
    );

    const filtered = active === 'all'
        ? normalized
        : normalized.filter((event) => event.category === active);

    return (
        <section className="bg-navy-900 rounded-2xl border border-gold p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <h2 className="font-display text-cream text-lg font-semibold tracking-[0.02em]">
                    Chronology of Bodo History
                </h2>
                <div className="flex gap-2 flex-wrap">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActive(filter.value)}
                            className={`
                                text-[10px] tracking-[0.06em] uppercase font-medium
                                px-3 py-1.5 rounded-full border transition-all duration-150
                                ${active === filter.value
                                    ? 'bg-amber-500/15 text-amber-500 border-amber-500/30'
                                    : 'bg-white/4 text-cream/35 border-white/8 hover:text-cream/60'}
                            `}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col">
                <AnimatePresence mode="popLayout">
                    {filtered.map((event, i) => {
                        const style = TYPE_STYLES[event.category];
                        const isLast = i === filtered.length - 1;

                        return (
                            <motion.div
                                key={`${event.year}-${event.title}`}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 16 }}
                                transition={{ delay: i * 0.05, duration: 0.3 }}
                                className="flex gap-5"
                            >
                                <div className="flex flex-col items-center w-16 flex-shrink-0">
                                    <span className="font-display text-amber-500 text-[13px] font-bold tracking-[0.02em] leading-none">
                                        {event.year}
                                    </span>
                                    <div className={`
                                        w-2 h-2 rounded-full mt-1.5 border-2 border-amber-500 flex-shrink-0
                                        ${i < 2 ? 'bg-amber-500' : 'bg-navy-900'}
                                    `} />
                                    {!isLast && (
                                        <div className="w-px flex-1 bg-amber-500/20 mt-1" />
                                    )}
                                </div>

                                <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-6'}`}>
                                    <span className={`
                                        inline-block text-[9px] tracking-[0.08em] uppercase font-medium
                                        px-1.5 py-0.5 rounded-[3px] border mb-2
                                        ${style.bg} ${style.text} ${style.border}
                                    `}>
                                        {event.category}
                                    </span>
                                    <h3 className="text-cream text-[12px] font-medium leading-snug mb-1">
                                        {event.title}
                                    </h3>
                                    <p className="text-cream/45 text-[11px] leading-relaxed font-light">
                                        {event.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </section>
    );
}
