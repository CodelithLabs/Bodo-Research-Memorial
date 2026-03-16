'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import RemoteImage from '@/components/RemoteImage';
import { useFuzzySearch } from '@/hooks/useFuzzySearch';
import {
    Users,
    Search,
    MapPin,
    ChevronRight,
    Filter,
    History,
    Crown,
    BookOpen,
    Heart,
    Star,
    GraduationCap,
    Building2,
    Cross,
    Music
} from 'lucide-react';
import { leaders } from '@/data/leaders';

const categories = [
    { id: 'all', label: 'All Leaders', icon: Users },
    { id: 'Political', label: 'Political', icon: Crown },
    { id: 'Martyr', label: 'Martyrs', icon: Star },
    { id: 'Cultural', label: 'Cultural', icon: Music },
    { id: 'Religious', label: 'Religious', icon: Cross },
    { id: 'Social', label: 'Social', icon: Heart },
    { id: 'Academic', label: 'Academic', icon: GraduationCap },
    { id: 'Administrative', label: 'Administrative', icon: Building2 },
];

// Icon mapping for categories
const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'Political': return Crown;
        case 'Martyr': return Star;
        case 'Cultural': return BookOpen;
        case 'Religious': return Cross;
        case 'Social': return Heart;
        case 'Academic': return GraduationCap;
        case 'Administrative': return Building2;
        default: return Users;
    }
};

export default function LeadersPage() {
    const [activeRegion, setActiveRegion] = useState('All');
    const [activeCategory, setActiveCategory] = useState('all');
    const [showFilters, setShowFilters] = useState(false);

    // Use fuzzy search for better search results
    const { query, setQuery, results: fuzzyResults } = useFuzzySearch({
        data: leaders,
        keys: ['name', 'title', 'biography', 'movement', 'district', 'region'],
        threshold: 0.3,
    });

    // Apply region and category filters on top of fuzzy search results
    const filteredLeaders = useMemo(() => {
        return fuzzyResults.filter(leader => {
            const matchesRegion = activeRegion === 'All' || leader.region === activeRegion || leader.district === activeRegion;
            const matchesCategory = activeCategory === 'all' || leader.category === activeCategory ||
                (activeCategory === 'Martyr' && leader.isMartyr);
            return matchesRegion && matchesCategory;
        });
    }, [fuzzyResults, activeRegion, activeCategory]);

    // Get unique regions from data for dynamic filtering
    const availableRegions = useMemo(() => {
        const regionSet = new Set<string>();
        leaders.forEach(leader => {
            if (leader.region) regionSet.add(leader.region);
            if (leader.district) regionSet.add(leader.district);
        });
        return ['All', ...Array.from(regionSet).sort()];
    }, []);

    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="bg-primary text-white pt-20 pb-12 md:pt-24 md:pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="container-institutional relative z-10 px-4 md:px-6">
                    <span className="text-secondary text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-3 md:mb-4 block">Historical Database</span>
                    <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Leaders & <span className="text-secondary">Martyrs</span></h1>
                    <p className="text-base md:text-xl text-white/70 max-w-2xl leading-relaxed">
                        A structured repository of biographical data, contributions, and historical
                        context for the figures who shaped the Bodo movement.
                    </p>
                    {/* Quick Stats */}
                    <div className="flex flex-wrap gap-4 md:gap-8 mt-6 md:mt-8">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-secondary" />
                            <span className="text-white/80 text-sm md:text-base"><strong className="text-white">{leaders.length}</strong> Leaders</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-accent" />
                            <span className="text-white/80 text-sm md:text-base"><strong className="text-white">{leaders.filter(l => l.isMartyr).length}</strong> Martyrs</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Discovery & Filters */}
            <section className="sticky top-0 z-30 bg-white dark:bg-slate-800 border-b border-divider dark:border-slate-700 shadow-sm">
                <div className="container-institutional py-3 md:py-4 px-4 md:px-6">
                    {/* Mobile Filter Toggle */}
                    <button
                        className="lg:hidden flex items-center gap-2 text-primary font-bold text-sm mb-3"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <Filter className="w-4 h-4" />
                        {showFilters ? 'Hide Filters' : 'Show Filters'}
                    </button>

                    <div className={`flex flex-col ${showFilters ? 'block' : 'hidden'} lg:flex lg:flex-row gap-4 items-center justify-between`}>
                        {/* Search */}
                        <div className="relative w-full lg:max-w-md order-1">
                            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-text-muted" />
                            <input
                                type="text"
                                placeholder="Search leaders, movements..."
                                className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 bg-background dark:bg-slate-800 border border-divider dark:border-slate-700 rounded-sm focus:outline-none focus:border-secondary transition-colors dark:text-white text-sm md:text-base"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>

                        {/* Category Filter - Horizontal scroll on mobile */}
                        <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide order-3 lg:order-2">
                            <div className="flex items-center text-primary font-bold mr-2 shrink-0">
                                <Filter className="w-4 h-4 mr-1 md:mr-2" />
                                <span className="text-xs md:text-sm uppercase tracking-wider hidden sm:inline">Type:</span>
                            </div>
                            {categories.map((cat) => {
                                const IconComponent = cat.icon;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`px-2 md:px-4 py-1.5 md:py-2 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap flex items-center gap-1 ${activeCategory === cat.id
                                            ? 'bg-secondary text-primary dark:bg-secondary dark:text-primary'
                                            : 'bg-background text-text-muted dark:bg-slate-800 dark:text-white hover:bg-divider dark:hover:bg-slate-700'
                                            }`}
                                    >
                                        <IconComponent className="w-3 h-3 md:w-4 md:h-4" />
                                        <span className="hidden md:inline">{cat.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Region Filter - Horizontal scroll on mobile */}
                        <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide order-2 lg:order-3">
                            <div className="flex items-center text-primary font-bold mr-2 shrink-0">
                                <MapPin className="w-4 h-4 mr-1 md:mr-2" />
                                <span className="text-xs md:text-sm uppercase tracking-wider hidden sm:inline">Region:</span>
                            </div>
                            {availableRegions.slice(0, 8).map((region) => (
                                <button
                                    key={region}
                                    onClick={() => setActiveRegion(region)}
                                    className={`px-2 md:px-4 py-1.5 md:py-2 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${activeRegion === region
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
                <div className="container-institutional px-4 md:px-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-12 gap-3">
                        <p className="text-text-muted font-medium italic text-sm md:text-base">
                            Showing <strong className="text-primary">{filteredLeaders.length}</strong> documented records
                            {activeCategory !== 'all' && <span className="text-secondary"> in {categories.find(c => c.id === activeCategory)?.label}</span>}
                            {activeRegion !== 'All' && <span className="text-primary"> from {activeRegion}</span>}
                        </p>
                        {(query || activeRegion !== 'All' || activeCategory !== 'all') && (
                            <button
                                onClick={() => { setQuery(''); setActiveRegion('All'); setActiveCategory('all'); }}
                                className="text-xs md:text-sm text-secondary hover:text-primary font-medium underline"
                            >
                                Clear all filters
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                        {filteredLeaders.map((leader) => {
                            const CategoryIcon = getCategoryIcon(leader.category || '');
                            return (
                                <Link
                                    key={leader.id}
                                    href={`/leaders/${leader.id}`}
                                    className="group card-academic flex flex-col h-full reveal"
                                >
                                    <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-primary/5">
                                        {leader.imageUrl ? (
                                            <RemoteImage
                                                src={leader.imageUrl}
                                                alt={leader.name}
                                                className="absolute inset-0 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                                                <CategoryIcon className="w-12 h-12 md:w-16 md:h-16 text-primary/20" />
                                            </div>
                                        )}
                                        <div className="absolute top-2 md:top-4 left-2 md:left-4 flex gap-1 md:gap-2">
                                            {leader.isMartyr && (
                                                <span className="label-category bg-accent text-white border-none text-[10px] md:text-xs">
                                                    <Star className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" />
                                                    Martyr
                                                </span>
                                            )}
                                            {leader.category && leader.category !== 'Martyr' && (
                                                <span className="label-category bg-primary/80 text-white border-none text-[10px] md:text-xs flex items-center">
                                                    <CategoryIcon className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" />
                                                    {leader.category}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-3 md:p-6 flex-1 flex flex-col">
                                        <div className="flex items-center text-secondary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-3">
                                            <History className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                                            {leader.era}
                                        </div>
                                        <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 group-hover:text-secondary transition-colors line-clamp-1">
                                            {leader.name}
                                        </h3>
                                        <p className="text-text-secondary text-xs md:text-sm font-medium mb-2 md:mb-4 flex items-center line-clamp-1">
                                            <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-primary shrink-0" />
                                            {leader.district}, {leader.region}
                                        </p>

                                        <p className="text-text-secondary text-xs md:text-sm leading-relaxed mb-3 md:mb-6 line-clamp-2 md:line-clamp-3">
                                            {leader.biography?.split('.')[0]}. {leader.biography?.split('.')?.[1]}.
                                        </p>

                                        {leader.contributions && leader.contributions.length > 0 && (
                                            <div className="mt-auto pt-2 md:pt-4 border-t border-divider">
                                                <p className="text-[10px] md:text-xs text-text-muted font-bold uppercase tracking-wider mb-1 md:mb-2">Key Contributions</p>
                                                <div className="flex flex-wrap gap-1 md:gap-2">
                                                    {leader.contributions.slice(0, 2).map((contrib, idx) => (
                                                        <span key={idx} className="text-[10px] md:text-xs bg-background px-1.5 md:px-2 py-0.5 md:py-1 rounded text-text-secondary">
                                                            {contrib}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="mt-2 md:mt-4 pt-2 md:pt-4 border-t border-divider flex items-center justify-between">
                                            <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center group-hover:text-secondary transition-colors">
                                                View Profile <ChevronRight className="ml-1 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                            <span className="text-[10px] text-text-muted font-bold uppercase hidden md:inline">Archive ID: #{leader.id.slice(0, 5)}</span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {filteredLeaders.length === 0 && (
                        <div className="text-center py-12 md:py-20 bg-white border border-divider rounded-lg">
                            <Users className="w-12 h-12 md:w-16 md:h-16 text-text-muted mx-auto mb-4 md:mb-6 opacity-20" />
                            <h3 className="text-lg md:text-2xl mb-2">No records found</h3>
                            <p className="text-text-secondary text-sm md:text-base mb-4">Try adjusting your search or filters.</p>
                            <button
                                onClick={() => { setQuery(''); setActiveRegion('All'); setActiveCategory('all'); }}
                                className="btn-primary text-sm md:text-base"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
