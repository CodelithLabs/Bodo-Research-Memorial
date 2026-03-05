'use client';

import Timeline from '@/components/Timeline';
import { timelineEvents } from '@/data/leaders';
import { History } from 'lucide-react';

export default function TimelinePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="bg-primary text-white pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="container-institutional relative z-10 text-center">
                    <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Archive Timeline</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 italic">History in <span className="text-secondary">Motion</span></h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        A linear progression of the Bodo movement, documenting pivotal moments,
                        sacrifices, and legislative milestones from the 19th century to the present era.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-padding">
                <div className="container-institutional">
                    <div className="flex items-center gap-4 mb-16 pb-4 border-b border-divider">
                        <History className="w-6 h-6 text-secondary" />
                        <h2 className="text-primary text-xl font-bold uppercase tracking-widest">Interactive Chronology</h2>
                    </div>

                    <Timeline events={timelineEvents} />

                    <div className="mt-20 p-8 border border-divider bg-white text-center">
                        <p className="text-text-muted text-sm italic">
                            Note: This timeline is a living document maintained by our research contributors.
                            Historical data is cross-referenced with regional archives and community oral histories.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
