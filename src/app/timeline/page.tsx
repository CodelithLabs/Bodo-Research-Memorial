export const revalidate = 3600;
export const dynamicParams = true;

'use client';

import Timeline from '@/components/Timeline';
import { timelineEvents } from '@/data/leaders';
import { ArrowRight, History, BookOpen, ShieldCheck } from 'lucide-react';

export default function TimelinePage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="relative overflow-hidden section-padding border-b border-[#d7c5a4]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(184,134,59,0.16),transparent_24%),radial-gradient(circle_at_82%_10%,rgba(23,59,49,0.12),transparent_24%)]" />
                <div className="container-institutional relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="cyber-pill mb-5">
                            <History className="w-3.5 h-3.5" />
                            Archive Timeline
                        </span>
                        <h1 className="hero-title text-4xl md:text-6xl mb-5">
                            History in <span className="glow-text">Motion</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#615648] max-w-3xl mx-auto leading-relaxed">
                            A linear record of Bodo history, tracing reform, identity, autonomy, and cultural preservation from the 19th century to today.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-institutional">
                    <div className="grid gap-4 md:grid-cols-3 mb-10">
                        <div className="card-academic p-5 flex items-start gap-4">
                            <div className="w-11 h-11 rounded-xl bg-[#f0dfc2] flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-5 h-5 text-[#7a551f]" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-[#2f2a22] mb-1">Verified Record</h2>
                                <p className="text-sm text-[#5f5548] leading-relaxed">Chronological entries are framed for editorial review and research use.</p>
                            </div>
                        </div>
                        <div className="card-academic p-5 flex items-start gap-4">
                            <div className="w-11 h-11 rounded-xl bg-[#dce8df] flex items-center justify-center shrink-0">
                                <BookOpen className="w-5 h-5 text-[#2d5846]" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-[#2f2a22] mb-1">Context First</h2>
                                <p className="text-sm text-[#5f5548] leading-relaxed">Each milestone includes historical meaning, not just a date and title.</p>
                            </div>
                        </div>
                        <div className="card-academic p-5 flex items-start gap-4">
                            <div className="w-11 h-11 rounded-xl bg-[#d8e2e2] flex items-center justify-center shrink-0">
                                <ArrowRight className="w-5 h-5 text-[#355460]" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-[#2f2a22] mb-1">Fast Scanning</h2>
                                <p className="text-sm text-[#5f5548] leading-relaxed">Filters and spacing are tuned for quick browsing on desktop and mobile.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-8 pb-4 border-b border-divider">
                        <History className="w-6 h-6 text-secondary" />
                        <h2 className="text-primary text-xl font-bold uppercase tracking-widest">Interactive Chronology</h2>
                    </div>

                    <Timeline events={timelineEvents} />

                    <div className="mt-10 p-6 md:p-8 border border-divider bg-white text-center rounded-2xl">
                        <p className="text-text-muted text-sm italic leading-relaxed">
                            Note: This timeline is a living document maintained by our research contributors.
                            Historical data is cross-referenced with regional archives and community oral histories.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
