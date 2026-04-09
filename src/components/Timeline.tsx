'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import RemoteImage from '@/components/RemoteImage';
import {
    ChevronLeft,
    ChevronRight,
    Calendar,
    ArrowRight,
    User,
    Clock
} from 'lucide-react';
import { TimelineEvent } from '@/types';
import { leaders } from '@/data/leaders';

interface TimelineProps {
    events: TimelineEvent[];
}

const eventTypeConfig: Record<string, { label: string; color: string }> = {
    birth: { label: 'Birth', color: 'bg-primary' },
    death: { label: 'Martyrdom', color: 'bg-accent' },
    movement: { label: 'Movement Milestone', color: 'bg-secondary' },
    achievement: { label: 'Achievement', color: 'bg-primary' },
    memorial: { label: 'Memorial', color: 'bg-primary' },
};

export default function Timeline({ events }: TimelineProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const sortedEvents = [...events].sort((a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const currentEvent = sortedEvents[currentIndex];
    const leader = currentEvent?.leaderId
        ? leaders.find(l => l.id === currentEvent.leaderId)
        : null;

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? sortedEvents.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === sortedEvents.length - 1 ? 0 : prev + 1));
    };

    return (
        <div
            className="bg-white border border-divider shadow-sm overflow-hidden"
            ref={containerRef}
            role="region"
            aria-label="Historical timeline"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'ArrowRight') setCurrentIndex((i) => Math.min(i + 1, sortedEvents.length - 1));
                if (e.key === 'ArrowLeft') setCurrentIndex((i) => Math.max(i - 1, 0));
            }}
        >
            {/* Timeline Header Area */}
            <div className="bg-primary p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Historical Journal</span>
                        <h2 className="text-3xl md:text-4xl font-bold">Chronology of <span className="text-secondary">Progress</span></h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={goToPrevious}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary transition-all"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <div className="text-center min-w-[80px]">
                            <span className="text-2xl font-bold text-secondary">{currentIndex + 1}</span>
                            <span className="text-white/40 mx-2">/</span>
                            <span className="text-white/60 font-medium">{sortedEvents.length}</span>
                        </div>
                        <button
                            onClick={goToNext}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary transition-all"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Timeline Interactive Area */}
            <div className="relative">
                {/* Progress Navigation Line */}
                <div className="px-8 md:px-12 py-6 bg-background border-b border-divider overflow-x-auto scrollbar-hide">
                    <div className="flex items-center gap-8 min-w-max pb-2">
                        {sortedEvents.map((event, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className="group flex flex-col items-center gap-3 transition-all"
                            >
                                <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${idx === currentIndex ? 'text-primary' : 'text-text-muted group-hover:text-primary'
                                    }`}>
                                    {new Date(event.date).getFullYear()}
                                </span>
                                <div className={`w-3 h-3 rounded-full border-2 transition-all ${idx === currentIndex
                                    ? 'bg-secondary border-primary scale-125'
                                    : 'bg-white border-divider group-hover:border-primary'
                                    }`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Event Content Display */}
                <div className="p-8 md:p-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.02, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid lg:grid-cols-12 gap-12 items-start"
                        >
                            {/* Event Info */}
                            <div className="lg:col-span-7">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className={`px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white ${eventTypeConfig[currentEvent.type].color}`}>
                                        {eventTypeConfig[currentEvent.type].label}
                                    </span>
                                    <div className="flex items-center text-text-muted text-xs font-bold uppercase tracking-widest">
                                        <Clock className="w-4 h-4 mr-2" />
                                        Archive Recorded: {new Date(currentEvent.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </div>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                                    {currentEvent.title}
                                </h3>

                                <div className="prose-institutional text-lg leading-relaxed text-text-secondary mb-10">
                                    {currentEvent.description}
                                </div>

                                {leader && (
                                    <div className="pt-10 border-t border-divider flex flex-col sm:flex-row items-center gap-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center border border-divider overflow-hidden grayscale">
                                                {leader.imageUrl ? (
                                                    <RemoteImage src={leader.imageUrl} alt={leader.name} width={64} height={64} className="object-cover" />
                                                ) : (
                                                    <User className="w-8 h-8 text-primary/20" />
                                                )}
                                            </div>
                                            <div>
                                                <span className="block text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">Associated Figure</span>
                                                <h4 className="text-primary font-bold">{leader.name}</h4>
                                            </div>
                                        </div>
                                        <Link
                                            href={`/leaders/${leader.id}`}
                                            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors group"
                                        >
                                            Read full biography <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Event Visualization Column */}
                            <div className="lg:col-span-5 hidden lg:block">
                                <div className="relative aspect-square bg-primary/5 border border-divider group overflow-hidden">
                                    <div className="absolute inset-0 opacity-20 bg-weave" />
                                    <div className="absolute inset-0 flex items-center justify-center p-12">
                                        <div className="text-center">
                                            <Calendar className="w-24 h-24 text-primary/10 mx-auto mb-6" />
                                            <span className="block text-6xl font-bold text-primary/10 tracking-tighter">
                                                {new Date(currentEvent.date).getFullYear()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
