export const revalidate = 3600;
export const dynamicParams = true;

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
        <div className="min-h-screen bg-navy-950">
            {/* Page Header */}
            <section className="relative pt-20 pb-12 md:pt-24 md:pb-20 overflow-hidden border-b border-cream/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(201,146,42,0.12),transparent_20%),radial-gradient(circle_at_82%_0%,rgba(110,91,211,0.16),transparent_24%)]" />
                <div className="container-institutional relative z-10 px-4 md:px-6">
                    <div className="max-w-6xl mx-auto futuristic-shell neon-frame px-6 py-8 md:px-8 md:py-10">
                        <span className="section-kicker mb-3 md:mb-4 block">Historical Database</span>
                        <h1 className="hero-title text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
                            Leaders & <span className="text-amber-300 glow-text">Martyrs</span>
                        </h1>
                        <p className="text-base md:text-xl text-cream/65 max-w-3xl leading-relaxed">
                            A structured repository of biographical data, contributions, and historical
                            context for the figures who shaped the Bodo movement.
                        </p>
                    </div>
                    {/* Quick Stats */}
                    <div className="flex flex-wrap gap-3 mt-6 md:mt-8 justify-center">
                        <div className="data-chip">
                            <Users className="w-3.5 h-3.5 text-amber-300" />
                            <span><strong className="text-cream">{leaders.length}</strong> Leaders</span>
                        </div>
                        <div className="data-chip">
                            <Star className="w-3.5 h-3.5 text-amber-300" />
                            <span><strong className="text-cream">{leaders.filter(l => l.isMartyr).length}</strong> Martyrs</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Discovery & Filters */}
            <section className="sticky top-0 z-30 bg-navy-950/85 backdrop-blur-2xl border-b border-cream/10 shadow-card-hover">
                <div className="container-institutional py-3 md:py-4 px-4 md:px-6">
                    {/* Mobile Filter Toggle */}
                    <button
                        className="lg:hidden flex items-center gap-2 text-amber-300 font-bold text-sm mb-3 uppercase tracking-[0.22em]"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <Filter className="w-4 h-4" />
                        {showFilters ? 'Hide Filters' : 'Show Filters'}
                    </button>

                    <div className={`flex flex-col ${showFilters ? 'block' : 'hidden'} lg:flex lg:flex-row gap-4 items-center justify-between glass-panel-strong p-4` }>
                        {/* Search */}
                        <div className="relative w-full lg:max-w-md order-1">
                            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-amber-300/70" />
                            <input
                                type="text"
                                placeholder="Search leaders, movements..."
                                className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 bg-navy-900/70 border border-cream/10 rounded-xl focus:outline-none focus:border-amber-400/40 transition-colors text-cream placeholder:text-cream/30 text-sm md:text-base"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>

                        {/* Category Filter - Horizontal scroll on mobile */}
                        <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide order-3 lg:order-2">
                            <div className="flex items-center text-amber-300 font-bold mr-2 shrink-0 uppercase tracking-[0.22em]">
                                <Filter className="w-4 h-4 mr-1 md:mr-2" />
                                <span className="text-xs md:text-sm hidden sm:inline">Type:</span>
                            </div>
                            {categories.map((cat) => {
                                const IconComponent = cat.icon;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`px-2 md:px-4 py-1.5 md:py-2 text-xs font-bold uppercase tracking-[0.22em] transition-all whitespace-nowrap flex items-center gap-1 rounded-full border ${activeCategory === cat.id
                                            ? 'bg-[linear-gradient(135deg,rgba(201,146,42,0.95),rgba(110,91,211,0.88))] text-navy-950 border-transparent'
                                            : 'bg-white/5 text-cream/55 border-cream/10 hover:border-amber-500/25 hover:text-cream'
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
                            <div className="flex items-center text-amber-300 font-bold mr-2 shrink-0 uppercase tracking-[0.22em]">
                                <MapPin className="w-4 h-4 mr-1 md:mr-2" />
                                <span className="text-xs md:text-sm hidden sm:inline">Region:</span>
                            </div>
                            {availableRegions.slice(0, 8).map((region) => (
                                <button
                                    key={region}
                                    onClick={() => setActiveRegion(region)}
                                    className={`px-2 md:px-4 py-1.5 md:py-2 text-xs font-bold uppercase tracking-[0.22em] transition-all whitespace-nowrap rounded-full border ${activeRegion === region
                                        ? 'bg-[linear-gradient(135deg,rgba(201,146,42,0.95),rgba(110,91,211,0.88))] text-navy-950 border-transparent'
                                        : 'bg-white/5 text-cream/55 border-cream/10 hover:border-amber-500/25 hover:text-cream'
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
            <section className="section-padding relative">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_0%,rgba(110,91,211,0.08),transparent_24%)]" />
                <div className="container-institutional px-4 md:px-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-12 gap-3">
                        <p className="text-cream/60 font-medium italic text-sm md:text-base">
                            Showing <strong className="text-amber-300">{filteredLeaders.length}</strong> documented records
                            {activeCategory !== 'all' && <span className="text-cream"> in {categories.find(c => c.id === activeCategory)?.label}</span>}
                            {activeRegion !== 'All' && <span className="text-amber-300"> from {activeRegion}</span>}
                        </p>
                        {(query || activeRegion !== 'All' || activeCategory !== 'all') && (
                            <button
                                onClick={() => { setQuery(''); setActiveRegion('All'); setActiveCategory('all'); }}
                                className="text-xs md:text-sm text-amber-300 hover:text-amber-200 font-medium underline"
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
                                    className="group futuristic-shell neon-frame flex flex-col h-full overflow-hidden reveal"
                                >
                                    <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-[linear-gradient(135deg,rgba(201,146,42,0.12),rgba(110,91,211,0.14),rgba(7,10,20,0.95))]">
                                        {leader.imageUrl ? (
                                            <RemoteImage
                                                src={leader.imageUrl}
                                                alt={leader.name}
                                                className="absolute inset-0 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle,rgba(201,146,42,0.14),transparent_70%)]">
                                                <CategoryIcon className="w-12 h-12 md:w-16 md:h-16 text-amber-300/25" />
                                            </div>
                                        )}
                                        <div className="absolute top-2 md:top-4 left-2 md:left-4 flex gap-1 md:gap-2">
                                            {leader.isMartyr && (
                                                <span className="data-chip bg-amber-500/15 text-amber-200 border-amber-400/20 text-[10px] md:text-xs">
                                                    <Star className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" />
                                                    Martyr
                                                </span>
                                            )}
                                            {leader.category && leader.category !== 'Martyr' && (
                                                <span className="data-chip text-[10px] md:text-xs flex items-center">
                                                    <CategoryIcon className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" />
                                                    {leader.category}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-3 md:p-6 flex-1 flex flex-col">
                                        <div className="flex items-center text-amber-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.22em] mb-2 md:mb-3">
                                            <History className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                                            {leader.era}
                                        </div>
                                        <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 group-hover:text-amber-200 transition-colors line-clamp-1 text-cream">
                                            {leader.name}
                                        </h3>
                                        <p className="text-cream/55 text-xs md:text-sm font-medium mb-2 md:mb-4 flex items-center line-clamp-1">
                                            <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-amber-300 shrink-0" />
                                            {leader.district}, {leader.region}
                                        </p>

                                        <p className="text-cream/55 text-xs md:text-sm leading-relaxed mb-3 md:mb-6 line-clamp-2 md:line-clamp-3">
                                            {leader.biography?.split('.')[0]}. {leader.biography?.split('.')?.[1]}.
                                        </p>

                                        {leader.contributions && leader.contributions.length > 0 && (
                                            <div className="mt-auto pt-2 md:pt-4 border-t border-cream/10">
                                                <p className="text-[10px] md:text-xs text-cream/35 font-bold uppercase tracking-[0.22em] mb-1 md:mb-2">Key Contributions</p>
                                                <div className="flex flex-wrap gap-1 md:gap-2">
                                                    {leader.contributions.slice(0, 2).map((contrib, idx) => (
                                                        <span key={idx} className="text-[10px] md:text-xs bg-white/5 px-1.5 md:px-2 py-0.5 md:py-1 rounded text-cream/65 border border-cream/10">
                                                            {contrib}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="mt-2 md:mt-4 pt-2 md:pt-4 border-t border-divider flex items-center justify-between">
                                            <span className="text-amber-300 text-xs font-bold uppercase tracking-[0.22em] flex items-center group-hover:text-amber-200 transition-colors">
                                                View Profile <ChevronRight className="ml-1 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                            <span className="text-[10px] text-cream/30 font-bold uppercase hidden md:inline">Archive ID: #{leader.id.slice(0, 5)}</span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {filteredLeaders.length === 0 && (
                        <div className="text-center py-12 md:py-20 glass-panel-strong neon-frame">
                            <Users className="w-12 h-12 md:w-16 md:h-16 text-amber-300 mx-auto mb-4 md:mb-6 opacity-30" />
                            <h3 className="text-lg md:text-2xl mb-2 text-cream">No records found</h3>
                            <p className="text-cream/60 text-sm md:text-base mb-4">Try adjusting your search or filters.</p>
                            <button
                                onClick={() => { setQuery(''); setActiveRegion('All'); setActiveCategory('all'); }}
                                className="cyber-pill text-sm md:text-base"
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
