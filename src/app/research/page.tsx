'use client';

import { BookOpen, Search, Filter, FileText, Image as ImageIcon, Mic, ArrowRight, Database } from 'lucide-react';
import Link from 'next/link';

const archiveCategories = [
    {
        id: 'historical-docs',
        title: 'Historical Documents',
        count: 142,
        icon: FileText,
        description: 'Scanned manuscripts, letters, and official government records related to the Bodo movement.',
        color: 'bg-primary',
        href: '/research/archive'
    },
    {
        id: 'photo-library',
        title: 'Photographic Library',
        count: 856,
        icon: ImageIcon,
        description: 'Rare visual records of cultural festivals, political rallies, and community life across decades.',
        color: 'bg-secondary',
        href: '/research/gallery'
    },
    {
        id: 'oral-history',
        title: 'Oral Histories',
        count: 24,
        icon: Mic,
        description: 'Audio recordings and transcripts of interviews with elders, activists, and movement veterans.',
        color: 'bg-accent',
        href: '/research/oral-history'
    },
    {
        id: 'research-papers',
        title: 'Academic Repository',
        count: 67,
        icon: BookOpen,
        description: 'Theses, journal articles, and research papers published on Bodo history and sociology.',
        color: 'bg-primary',
        href: '/research/papers'
    }
];

export default function ArchivePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="bg-primary text-white pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="container-institutional relative z-10">
                    <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Digital Collections</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 italic">Research <span className="text-secondary">& Archive</span></h1>
                    <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                        A centralized repository dedicated to the preservation of Bodo heritage.
                        Access primary source documents, multimedia records, and academic research.
                    </p>
                </div>
            </section>

            {/* Search & Utility Bar */}
            <section className="bg-white border-y border-divider sticky top-0 z-40 py-4 shadow-sm">
                <div className="container-institutional">
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                        <div className="relative w-full md:max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                            <input
                                type="text"
                                placeholder="Search the archive records..."
                                className="w-full pl-12 pr-4 py-3 bg-background border border-divider focus:outline-none focus:border-secondary transition-colors text-sm font-medium"
                            />
                        </div>
                        <div className="flex items-center gap-6 w-full md:w-auto">
                            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors">
                                <Filter className="w-4 h-4" />
                                Advanced Filters
                            </button>
                            <div className="h-4 w-px bg-divider hidden md:block" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                                Total Records: <span className="text-primary font-black">1,089</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-institutional">
                    {/* Main Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-24">
                        {archiveCategories.map((category) => (
                            <div key={category.id} className="group bg-white border border-divider hover:shadow-xl transition-all relative overflow-hidden flex flex-col">
                                <div className="p-10 flex-grow relative z-10">
                                    <div className={`w-14 h-14 ${category.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <category.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-primary italic">{category.title}</h3>
                                        <span className="text-[10px] font-black uppercase tracking-widest bg-primary/5 px-2 py-1 text-primary">
                                            {category.count} Items
                                        </span>
                                    </div>
                                    <p className="text-text-secondary leading-relaxed mb-8">
                                        {category.description}
                                    </p>
                                    <button className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary transition-colors">
                                        Explore Collection <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                                {/* Decorative Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 translate-x-16 -translate-y-16 rounded-full group-hover:scale-150 transition-transform" />
                            </div>
                        ))}
                    </div>

                    {/* Featured Contribution Section */}
                    <div className="border border-divider bg-white overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-12 md:p-20 flex flex-col justify-center">
                                <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Researcher Access</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight italic">
                                    Institutional <span className="text-secondary">Collaboration</span>
                                </h2>
                                <p className="text-text-secondary text-lg leading-relaxed mb-10">
                                    We provide specialized access for universities, historians, and research fellows.
                                    If you are conducting academic research on the Bodo movement, you can request
                                    access to our non-public high-resolution digital repository.
                                </p>
                                <div className="flex flex-wrap gap-6">
                                    <Link href="/research/submit" className="button-institutional bg-primary text-white border-primary">
                                        Request Research Access
                                    </Link>
                                    <button className="button-institutional border-divider text-primary hover:border-primary">
                                        Citation Guidelines
                                    </button>
                                </div>
                            </div>
                            <div className="bg-primary relative min-h-[400px] flex items-center justify-center">
                                <div className="absolute inset-0 opacity-10 bg-weave scale-150" />
                                <div className="relative z-10 text-center text-white p-12">
                                    <Database className="w-24 h-24 text-secondary/40 mx-auto mb-8" />
                                    <p className="text-sm uppercase tracking-[0.4em] font-medium text-white/60 mb-2">Centralized</p>
                                    <p className="text-2xl font-bold tracking-widest">Heritage Index</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
