'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Search, ArrowLeft, FileText, ChevronRight, Upload } from 'lucide-react';
import Link from 'next/link';
import { researchPapers } from '@/data/research';

// Fallback data if import fails
const fallbackPapers = [
    {
        id: 'paper-1',
        title: 'Language, Identity and the Bodo Movement',
        author: 'Dr. Ranjit Basumatary',
        university: 'Bodoland University',
        year: '2021',
        abstract: 'An in-depth analysis of how the Bodo language acted as a primary catalyst for political mobilization.',
        category: 'Language' as const,
        downloadUrl: '/docs/research/language-2021.pdf'
    },
    {
        id: 'paper-2',
        title: 'Traditional Agricultural Practices of the Bodo Community',
        author: 'Sunita Narzary',
        university: 'Dibrugarh University',
        year: '2019',
        abstract: 'This research documents the indigenous irrigation systems and crop rotation patterns unique to Bodo farmers.',
        category: 'Culture' as const,
        downloadUrl: '/docs/research/agriculture-2019.pdf'
    },
    {
        id: 'paper-3',
        title: 'Sacrifice and Statehood: The Iconography of Martyrs in Bodoland',
        author: 'Prof. J.K. Mushahary',
        university: 'Jawaharlal Nehru University',
        year: '2022',
        abstract: 'A historical review of the commemoration of figures like Sujit Narzary and Upendra Nath Brahma.',
        category: 'History' as const,
        downloadUrl: '/docs/research/martyrs-2022.pdf'
    },
    {
        id: 'paper-4',
        title: 'Bathouism: The Indigenous Religious Practices of the Bodo People',
        author: 'Dr. Dhaneswar Engtipi',
        university: 'Tezpur University',
        year: '2020',
        abstract: 'An ethnographic study of Bathouism, the traditional religion of the Bodos.',
        category: 'Religion' as const,
        downloadUrl: '/docs/research/bathouism-2020.pdf'
    },
    {
        id: 'paper-5',
        title: 'The Bodoland Movement and Autonomy Politics in Assam',
        author: 'Dr. B.K. Chim',
        university: 'Gauhati University',
        year: '2018',
        abstract: 'A comprehensive analysis of the political movement for Bodoland statehood.',
        category: 'Politics' as const,
        downloadUrl: '/docs/research/autonomy-2018.pdf'
    }
];

// Use imported data or fallback
const papersData = typeof researchPapers !== 'undefined' ? researchPapers : fallbackPapers;

export default function ResearchPapersPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Politics', 'Culture', 'Language', 'History'];

    const filteredPapers = papersData.filter(paper => {
        const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            paper.author.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-background dark:bg-slate-900 font-body">
            {/* Header */}
            <section className="bg-primary text-white pt-24 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="container-institutional relative z-10">
                    <Link href="/research" className="inline-flex items-center text-secondary/80 hover:text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-12 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Research & Archive
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Academic <span className="text-secondary">Repository</span></h1>
                            <p className="text-xl text-white/70 max-w-3xl leading-relaxed font-serif italic">
                                A curated collection of peer-reviewed journals, theses, and scholarly articles
                                focused on the Bodo community, history, and development.
                            </p>
                        </div>
                        <Link href="/research/submit" className="flex items-center gap-3 px-8 py-4 bg-secondary text-primary text-xs font-black uppercase tracking-widest hover:bg-white transition-colors shrink-0">
                            <Upload className="w-4 h-4" />
                            Submit Research
                        </Link>
                    </div>
                </div>
            </section>

            {/* Filters & Search */}
            <section className="bg-white dark:bg-slate-800 border-b border-divider dark:border-slate-700 py-6 sticky top-0 z-30 shadow-sm">
                <div className="container-institutional">
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                        <div className="relative w-full lg:max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                            <input
                                type="text"
                                placeholder="Search by title, author, or keyword..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-background dark:bg-slate-800 border border-divider dark:border-slate-700 focus:outline-none focus:border-secondary transition-colors text-sm font-medium dark:text-white"
                            />
                        </div>
                        <div className="flex items-center gap-4 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap border transition-all ${selectedCategory === cat
                                        ? 'bg-primary text-white border-primary dark:bg-primary dark:text-white'
                                        : 'bg-transparent text-text-muted dark:text-white border-divider dark:border-slate-700 hover:border-secondary dark:hover:border-secondary'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Papers List */}
            <section className="section-padding">
                <div className="container-institutional">
                    <div className="grid gap-8">
                        {filteredPapers.map((paper) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                key={paper.id}
                                className="bg-white dark:bg-slate-800 border border-divider dark:border-slate-700 p-8 md:p-10 hover:border-secondary transition-all group"
                            >
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="w-16 h-16 bg-primary/5 flex items-center justify-center shrink-0 border border-divider group-hover:bg-primary transition-colors">
                                        <FileText className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-secondary px-2 py-1 bg-secondary/10">
                                                {paper.category}
                                            </span>
                                            <span className="text-text-muted text-xs font-bold">{paper.year}</span>
                                        </div>
                                        <h3 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                                            {paper.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-text-secondary font-bold mb-6">
                                            <span>{paper.author}</span>
                                            <span className="text-divider">|</span>
                                            <span className="italic font-normal">{paper.university}</span>
                                        </div>
                                        <p className="text-text-secondary leading-relaxed mb-8 max-w-4xl line-clamp-3 italic font-serif">
                                            {paper.abstract}
                                        </p>
                                        <div className="flex flex-wrap gap-4 pt-6 border-t border-divider">
                                            <button className="flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors font-body">
                                                Read Abstract <ChevronRight className="ml-1 w-4 h-4" />
                                            </button>
                                            <a
                                                href={paper.downloadUrl}
                                                className="flex items-center text-xs font-bold uppercase tracking-widest text-secondary hover:underline ml-auto font-body"
                                            >
                                                Download PDF <Download className="ml-2 w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {filteredPapers.length === 0 && (
                            <div className="text-center py-24 bg-white dark:bg-slate-800 border border-divider dark:border-slate-700">
                                <Search className="w-16 h-16 text-text-muted mx-auto mb-6 opacity-20" />
                                <h3 className="text-2xl font-display font-bold text-primary">No research found</h3>
                                <p className="text-text-muted mt-2">Adjust your search or filter to find relevant papers.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
