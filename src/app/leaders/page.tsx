'use client';

import type { Metadata } from 'next';
import { useState } from 'react';

export const metadata: Metadata = {
  title: 'Leaders & Martyrs – Bodo Research Memorial',
  description: 'Browse biographies of influential Bodo leaders and martyrs in our archive.',
};
import Link from 'next/link';
import RemoteImage from '@/components/RemoteImage';
import {
    Users,
    Search,
    MapPin,
    ChevronRight,
    Filter,
    History
} from 'lucide-react';
import { leaders } from '@/data/leaders';

const regions = ['All', 'BTC', 'Assam', 'Kokrajhar', 'Chirang', 'Baksa', 'Udalguri'];

export default function LeadersPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeRegion, setActiveRegion] = useState('All');

    const filteredLeaders = leaders.filter(leader => {
        const matchesSearch = leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            leader.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRegion = activeRegion === 'All' || leader.region === activeRegion || leader.district === activeRegion;
        return matchesSearch && matchesRegion;
    });

    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="bg-primary text-white pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="container-institutional relative z-10">
                    <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Historical Database</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">Leaders & <span className="text-secondary">Martyrs</span></h1>
                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                        A structured repository of biographical data, contributions, and historical
                        context for the figures who shaped the Bodo movement.
                    </p>
                </div>
            </section>

            {/* Discovery & Filters */}
            <section className="sticky top-0 z-30 bg-white dark:bg-slate-800 border-b border-divider dark:border-slate-700 shadow-sm py-6">
                <div className="container-institutional">
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full lg:max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                            <input
                                type="text"
                                placeholder="Search by name, title, or movement..."
                                className="w-full pl-12 pr-4 py-3 bg-background dark:bg-slate-800 border border-divider dark:border-slate-700 rounded-sm focus:outline-none focus:border-secondary transition-colors dark:text-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Region Filter */}
                        <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                            <div className="flex items-center text-primary font-bold mr-2">
                                <Filter className="w-4 h-4 mr-2" />
                                <span className="text-sm uppercase tracking-wider">Region:</span>
                            </div>
                            {regions.map((region) => (
                                <button
                                    key={region}
                                    onClick={() => setActiveRegion(region)}
                                    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${activeRegion === region
                                        ? 'bg-secondary text-primary dark:bg-secondary dark:text-primary'
                                        : 'bg-background text-text-muted dark:bg-slate-800 dark:text-white hover:bg-divider dark:hover:bg-slate-700'
                                        }`}
                                >
                                    {region}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Grid */}
            <section className="section-padding">
                <div className="container-institutional">
                    <div className="flex items-center justify-between mb-12">
                        <p className="text-text-muted font-medium italic">
                            Showing {filteredLeaders.length} documented records
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredLeaders.map((leader) => (
                            <Link
                                key={leader.id}
                                href={`/leaders/${leader.id}`}
                                className="group card-academic flex flex-col h-full reveal"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-primary/5">
                                    {leader.imageUrl ? (
                                        <RemoteImage
                                            src={leader.imageUrl}
                                            alt={leader.name}
                                            className="absolute inset-0 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Users className="w-16 h-16 text-primary/10" />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className={`label-category ${leader.isMartyr ? 'bg-accent text-white border-none' : ''}`}>
                                            {leader.isMartyr ? 'Martyr' : 'Leader'}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center text-secondary text-xs font-bold uppercase tracking-widest mb-3">
                                        <History className="w-4 h-4 mr-2" />
                                        {leader.era}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors line-clamp-1">
                                        {leader.name}
                                    </h3>
                                    <p className="text-text-secondary text-sm font-medium mb-6 flex items-center">
                                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                                        {leader.district}, {leader.region}
                                    </p>

                                    <p className="text-text-secondary text-sm leading-relaxed mb-8 line-clamp-3">
                                        {leader.biography?.split('.')[0]}. {leader.biography?.split('.')[1]}.
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-divider flex items-center justify-between">
                                        <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center group-hover:text-secondary transition-colors">
                                            View Profile <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <span className="text-[10px] text-text-muted font-bold uppercase">Archive ID: #{leader.id.slice(0, 5)}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredLeaders.length === 0 && (
                        <div className="text-center py-20 bg-white border border-divider">
                            <Users className="w-16 h-16 text-text-muted mx-auto mb-6 opacity-20" />
                            <h3 className="text-2xl mb-2">No records found</h3>
                            <p className="text-text-secondary">Try adjusting your search or region filters.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
