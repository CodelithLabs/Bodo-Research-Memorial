'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import RemoteImage from '@/components/RemoteImage';
import {
    Calendar,
    MapPin,
    Star,
    ArrowLeft,
    Award,
    BookOpen,
    History,
    Quote,
    Clock,
    ExternalLink,
    ChevronRight,
    Library
} from 'lucide-react';
import { leaders } from '@/data/leaders';
import CitationModal from '@/components/CitationModal';
import { CitationData } from '@/lib/citations';

export default function LeaderDetailPage() {
    const params = useParams();
    const leader = leaders.find((l) => l.id === params.id);
    const [isCitationOpen, setIsCitationOpen] = useState(false);

    if (!leader) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background p-4 font-body">
                <div className="text-center">
                    <History className="w-16 h-16 text-text-muted mx-auto mb-6 opacity-20" />
                    <h1 className="text-3xl font-display font-bold mb-4">Record Not Found</h1>
                    <p className="text-text-secondary mb-8">The archive entry for this ID does not exist or has been moved.</p>
                    <Link href="/leaders" className="btn-institutional bg-primary text-white">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Database
                    </Link>
                </div>
            </div>
        );
    }

    const citationData: CitationData = {
        title: `Historical Biography of ${leader.name}`,
        author: "Bodo Research Memorial Archive",
        year: "2024",
        url: typeof window !== 'undefined' ? window.location.href : '',
        accessDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    };

    const relatedLeaders = leaders
        .filter((l) => l.id !== leader.id && (l.movement === leader.movement || l.era === leader.era))
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-background font-body">
            {/* Dynamic Header */}
            <section className="bg-primary pt-24 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="container-institutional relative z-10">
                    <Link href="/leaders" className="inline-flex items-center text-secondary/80 hover:text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-12 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Historical Database
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
                        <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 shadow-2xl border-4 border-secondary/20">
                            {leader.imageUrl ? (
                                <RemoteImage
                                    src={leader.imageUrl}
                                    alt={leader.name}
                                    className="absolute inset-0 object-cover grayscale"
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                                    <span className="text-primary/10 text-6xl md:text-8xl font-bold italic">
                                        {leader.name.charAt(0)}
                                    </span>
                                </div>
                            )}
                            {leader.isMartyr && (
                                <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center">
                                    <Star className="w-3 h-3 mr-2" />
                                    Eternal Martyr
                                </div>
                            )}
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="label-category uppercase tracking-[0.2em]">{leader.era}</span>
                                <span className="text-secondary/50 font-bold px-2">•</span>
                                <span className="text-secondary/80 text-xs font-bold uppercase tracking-widest">{leader.movement}</span>
                            </div>
                            <h1 className="text-white text-4xl md:text-6xl font-display font-bold mb-4 leading-tight">
                                {leader.name}
                            </h1>
                            <p className="text-secondary text-lg md:text-xl font-medium mb-8 max-w-2xl italic opacity-90">
                                &quot;{leader.title}&quot;
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                <div className="flex items-center text-white/70 text-sm">
                                    <Calendar className="w-5 h-5 mr-3 text-secondary" />
                                    <span>
                                        <span className="block text-xs uppercase tracking-widest text-white/40 mb-1">Period</span>
                                        {leader.birthDate} — {leader.deathDate || 'Present'}
                                    </span>
                                </div>
                                <div className="flex items-center text-white/70 text-sm">
                                    <MapPin className="w-5 h-5 mr-3 text-secondary" />
                                    <span>
                                        <span className="block text-xs uppercase tracking-widest text-white/40 mb-1">Birthplace / Region</span>
                                        {leader.birthPlace || leader.district}, {leader.region}
                                    </span>
                                </div>
                                <div className="flex items-center text-white/70 text-sm">
                                    <Clock className="w-5 h-5 mr-3 text-secondary" />
                                    <span>
                                        <span className="block text-xs uppercase tracking-widest text-white/40 mb-1">Archive Status</span>
                                        Verified Historical Record
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="section-padding">
                <div className="container-institutional">
                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Primary Content */}
                        <div className="lg:col-span-8">
                            <div className="prose-institutional max-w-none">
                                <h2 className="text-primary font-display border-b border-divider pb-4 flex items-center">
                                    <History className="w-6 h-6 mr-3 text-secondary" />
                                    Biographical Record
                                </h2>
                                <div className="mt-8 space-y-6 text-text-secondary leading-relaxed text-lg font-serif">
                                    {leader.biography.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>

                                {leader.slogans && leader.slogans.length > 0 && (
                                    <div className="mt-16 bg-primary/5 p-10 border-l-4 border-secondary relative overflow-hidden">
                                        <Quote className="absolute -top-4 -right-4 w-32 h-32 text-primary/5 -rotate-12" />
                                        <h3 className="text-primary text-xl font-bold mb-6 flex items-center relative z-10">
                                            <Award className="w-5 h-5 mr-3 text-secondary" />
                                            Philosophy & Slogans
                                        </h3>
                                        <div className="space-y-6 relative z-10">
                                            {leader.slogans.map((slogan, idx) => (
                                                <blockquote key={idx} className="text-xl md:text-2xl font-display italic text-primary leading-snug">
                                                    &quot;{slogan}&quot;
                                                </blockquote>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Sources & References Section */}
                                {leader.sources && leader.sources.length > 0 && (
                                    <div className="mt-16 pt-12 border-t border-divider">
                                        <h3 className="text-primary text-xl font-bold mb-8 flex items-center uppercase tracking-widest">
                                            <Library className="w-5 h-5 mr-3 text-secondary" />
                                            Primary Sources & References
                                        </h3>
                                        <div className="grid gap-4">
                                            {leader.sources.map((source, idx) => (
                                                <div key={idx} className="p-4 bg-white border border-divider flex items-start gap-4 hover:border-secondary transition-colors group">
                                                    <div className="w-10 h-10 bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                                        <span className="text-[10px] font-black uppercase text-secondary">{source.type}</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-primary mb-1">{source.title}</p>
                                                        <p className="text-xs text-text-muted italic">
                                                            {source.author} ({source.year}){source.publisher ? `, ${source.publisher}` : ''}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar Data */}
                        <div className="lg:col-span-4 space-y-10">
                            <div className="bg-white border border-divider shadow-sm">
                                <div className="bg-primary/5 p-6 border-b border-divider flex items-center justify-between">
                                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm flex items-center">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Core Contributions
                                    </h3>
                                </div>
                                <div className="p-8">
                                    <ul className="space-y-6">
                                        {leader.contributions.map((contribution, idx) => (
                                            <li key={idx} className="flex gap-4 items-start">
                                                <span className="w-6 h-6 rounded-full bg-secondary/20 text-primary text-[10px] font-bold flex items-center justify-center shrink-0 mt-1">
                                                    {idx + 1}
                                                </span>
                                                <p className="text-text-secondary text-sm leading-relaxed">{contribution}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="p-8 border-2 border-primary mt-12 relative">
                                <div className="absolute -top-3 left-6 bg-white px-3 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                                    Research Resource
                                </div>
                                <p className="text-text-muted text-xs leading-relaxed italic mb-6">
                                    This profile is maintained by the Bodo Research Memorial Archive. For corrections or additional
                                    documentation, please contact our contributors desk.
                                </p>
                                <button
                                    onClick={() => setIsCitationOpen(true)}
                                    className="w-full py-4 text-xs font-bold uppercase tracking-widest border border-divider hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                                >
                                    Cite this Record <ExternalLink className="ml-2 w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Related Records */}
                    <div className="mt-24 pt-16 border-t border-divider">
                        <h3 className="text-primary text-2xl font-display font-bold mb-12 flex items-center">
                            <ChevronRight className="w-6 h-6 mr-2 text-secondary" />
                            Related Records from the same era
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedLeaders.map((related) => (
                                <Link
                                    key={related.id}
                                    href={`/leaders/${related.id}`}
                                    className="group flex gap-6 items-center p-6 border border-divider hover:border-secondary transition-colors bg-white shadow-sm"
                                >
                                    <div className="w-20 h-20 shrink-0 bg-primary/5 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                                        {related.imageUrl ? (
                                            <Image src={related.imageUrl} alt={related.name} fill className="object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-primary/20 font-bold">{related.name.charAt(0)}</div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-primary font-display font-bold group-hover:text-secondary transition-colors leading-tight mb-1">{related.name}</h4>
                                        <p className="text-text-muted text-[10px] uppercase font-bold tracking-widest">{related.era}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CitationModal
                isOpen={isCitationOpen}
                onClose={() => setIsCitationOpen(false)}
                data={citationData}
            />
        </div>
    );
}

