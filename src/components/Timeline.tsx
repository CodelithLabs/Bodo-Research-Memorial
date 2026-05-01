'use client';

import React from 'react';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock3, Landmark, Milestone, Sparkles } from 'lucide-react';
import { TimelineEvent } from '@/types';

type EventType = 'political' | 'cultural' | 'historical' | 'all';

const TYPE_STYLES = {
    political: { pill: 'bg-[#efe0c1] text-[#7a551f] border-[#c8a05f]/40', accent: 'bg-[#8f6326]' },
    cultural: { pill: 'bg-[#dce8df] text-[#2d5846] border-[#6c927f]/35', accent: 'bg-[#3f6857]' },
    historical: { pill: 'bg-[#d8e2e2] text-[#355460] border-[#77919a]/35', accent: 'bg-[#4f6f79]' },
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

const FILTER_META: Record<Exclude<EventType, 'all'>, { label: string; icon: typeof Landmark }> = {
    political: { label: 'Political', icon: Landmark },
    cultural: { label: 'Cultural', icon: Sparkles },
    historical: { label: 'Historical', icon: Clock3 },
};

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
        <section className="card-academic overflow-hidden">
            <div className="border-b border-[#d8c8ac] bg-[linear-gradient(180deg,#fffaf2,#f6ead4)] px-6 py-5 lg:px-8 lg:py-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                    <div>
                        <span className="section-kicker block mb-2">Chronology</span>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2f2a22]">
                            Timeline of Bodo History
                        </h2>
                        <p className="text-[#615648] mt-2 max-w-2xl leading-relaxed">
                            Browse the record of social reform, cultural preservation, and political milestones in a structured sequence.
                        </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActive(filter.value)}
                            className={`
                                inline-flex items-center gap-2 text-[10px] tracking-[0.12em] uppercase font-semibold
                                px-3.5 py-2 rounded-full border transition-all duration-150
                                ${active === filter.value
                                    ? 'bg-[#2d5042] text-[#fffaf0] border-[#2d5042] shadow-[0_8px_20px_rgba(45,80,66,0.18)]'
                                    : 'bg-[#fffaf5] text-[#5d5446] border-[#d4c3a5] hover:text-[#2f2a22] hover:border-[#a68142]'}
                            `}
                        >
                            {filter.value !== 'all' && React.createElement(FILTER_META[filter.value].icon, { className: 'w-3.5 h-3.5' })}
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>
            </div>

            <div className="relative px-6 py-8 lg:px-8 lg:py-10">
                <div className="absolute left-[3.4rem] top-8 bottom-8 w-px bg-[linear-gradient(180deg,transparent,rgba(133,93,34,0.25),transparent)] hidden md:block" />
                <AnimatePresence mode="popLayout">
                    {filtered.map((event, i) => {
                        const style = TYPE_STYLES[event.category];

                        return (
                            <motion.div
                                key={`${event.year}-${event.title}`}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 16 }}
                                transition={{ delay: i * 0.05, duration: 0.3 }}
                                className="grid md:grid-cols-[6rem_1fr] gap-4 md:gap-6 pb-8 last:pb-0"
                            >
                                <div className="relative flex items-start md:justify-center">
                                    <div className="hidden md:flex absolute top-2 left-[2.7rem] w-4 h-4 rounded-full border-4 border-[#f8f3e8] bg-[#8f6326] shadow-[0_0_0_1px_rgba(143,99,38,0.22)]" />
                                    <div className="md:sticky md:top-28 inline-flex items-center rounded-full border border-[#d1bd97] bg-[#fffaf2] px-3 py-1.5 shadow-sm">
                                        <span className="font-display text-[#7a551f] text-xl font-bold leading-none">
                                            {event.year}
                                        </span>
                                    </div>
                                </div>

                                <div className="card-academic p-5 md:p-6">
                                    <div className="flex items-center justify-between gap-3 mb-4">
                                        <span className={`inline-flex items-center gap-2 text-[10px] uppercase font-semibold tracking-[0.16em] px-2.5 py-1 rounded-full border ${style.pill}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${style.accent}`} />
                                            {event.category}
                                        </span>
                                        <span className="text-[10px] uppercase tracking-[0.18em] text-[#7c6e5b]">
                                            {i + 1 < 10 ? `0${i + 1}` : i + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-display font-bold text-[#2f2a22] leading-snug mb-3">
                                        {event.title}
                                    </h3>
                                    <p className="text-[#5e5548] leading-relaxed">
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
