'use client';

import { bodolandHistory } from '@/data/leaders';
import { TreePine, BookOpen, History, Globe, Landmark } from 'lucide-react';

export default function HistoryPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="bg-primary text-white pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="container-institutional relative z-10">
                    <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Historical Record</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 italic">Heritage & <span className="text-secondary">Legacy</span></h1>
                    <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                        A comprehensive overview of the Bodo people&apos;s journey—from ancestral roots
                        and spiritual traditions to the modern socio-political movements that define Bodoland today.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-institutional">
                    {/* Overview Section */}
                    <div className="grid lg:grid-cols-12 gap-16 mb-24">
                        <div className="lg:col-span-8">
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-divider">
                                <Landmark className="w-6 h-6 text-secondary" />
                                <h2 className="text-primary text-xl font-bold uppercase tracking-widest">General Overview</h2>
                            </div>
                            <div className="prose-institutional text-lg leading-relaxed text-text-secondary">
                                {bodolandHistory.overview}
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="bg-primary/5 border border-divider p-8">
                                <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-secondary" />
                                    Key Regions
                                </h3>
                                <div className="space-y-6">
                                    {bodolandHistory.regions.map((region, index) => (
                                        <div key={index} className="pb-4 border-b border-divider last:border-0">
                                            <h4 className="text-primary font-bold text-sm mb-2">{region.name}</h4>
                                            <p className="text-text-muted text-xs leading-relaxed">{region.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cultural Pillars */}
                    <div className="grid md:grid-cols-2 gap-12 mb-24">
                        <div className="group p-10 bg-white border border-divider hover:border-secondary transition-all">
                            <div className="w-14 h-14 bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
                                <TreePine className="w-8 h-8 text-primary group-hover:text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-6">Bathou Religion</h3>
                            <p className="text-text-secondary leading-relaxed italic">
                                {bodolandHistory.culture.bathou}
                            </p>
                        </div>

                        <div className="group p-10 bg-white border border-divider hover:border-secondary transition-all">
                            <div className="w-14 h-14 bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
                                <BookOpen className="w-8 h-8 text-primary group-hover:text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-6">Bodo Language</h3>
                            <p className="text-text-secondary leading-relaxed">
                                {bodolandHistory.culture.language}
                            </p>
                        </div>
                    </div>

                    {/* Movement Section */}
                    <div className="bg-primary p-12 md:p-20 text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5 bg-weave scale-150" />
                        <div className="relative z-10 max-w-4xl">
                            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-white/10 uppercase tracking-[0.2em] text-secondary font-bold text-sm">
                                <History className="w-6 h-6" />
                                Socio-Political Movement
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight italic">
                                The Struggle for <span className="text-secondary text-nowrap underline decoration-1 underline-offset-8">Self-Determination</span>
                            </h2>
                            <div className="space-y-8 text-white/80 text-lg leading-relaxed font-light">
                                <p>
                                    The Bodoland movement emerged as a historical necessity—a political and cultural
                                    struggle for autonomy and recognition of the Bodo people. Beginning in the mid-20th century,
                                    the movement sought to establish a protected identity within the Indian constitutional framework.
                                </p>
                                <p>
                                    Led by visionaries like <span className="text-secondary font-medium italic">Bodofa Upendra Nath Brahma</span>,
                                    the movement advocated for constitutional rights and linguistic preservation. This relentless
                                    effort culminated in the establishment of the Bodoland Territorial Council (BTC) in 2003.
                                </p>
                                <p className="pt-6 border-t border-white/10 italic text-white/60">
                                    &quot;We must survive as a community, with our language, our land, and our dignity intact.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
