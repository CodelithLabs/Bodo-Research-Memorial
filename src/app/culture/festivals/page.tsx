/**
 * ============================================
 * Bodo Festivals Page
 * ============================================
 * Comprehensive guide to Bodo festivals and celebrations
 */

import Link from 'next/link';
import { Calendar, Music, Sparkles, ArrowRight, Leaf, Sun, Snowflake, Flower2 } from 'lucide-react';
import bodoFestivalsData from '@/data/bodo_festivals.json';

export const metadata = {
    title: 'Bodo Festivals - Complete Guide to Bodo Celebrations | Bodo Research Memorial',
    description: 'Explore the rich festival traditions of the Bodo people including Bwisagu (New Year), Kherai Puja, Garja, Domashi, and other cultural celebrations.',
};

// Type for festival data from JSON
interface Festival {
    id: string;
    name: string;
    type: string;
    description: string;
    season: string;
    rituals: string[];
    cultural_significance: string;
    related_dances: string[];
    sources: string[];
}

const { bodo_festivals } = bodoFestivalsData;

// Map seasons to icons and colors
const seasonConfig: Record<string, { icon: typeof Flower2; color: string; bgColor: string }> = {
    Spring: {
        icon: Flower2,
        color: 'text-green-600',
        bgColor: 'bg-green-100'
    },
    Summer: {
        icon: Sun,
        color: 'text-amber-600',
        bgColor: 'bg-amber-100'
    },
    Autumn: {
        icon: Leaf,
        color: 'text-orange-600',
        bgColor: 'bg-orange-100'
    },
    Winter: {
        icon: Snowflake,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100'
    },
};

// Get festival type icon
const getFestivalTypeIcon = (type: string) => {
    if (type.includes('New Year') || type.includes('Harvest') || type.includes('Agricultural')) {
        return Leaf;
    }
    if (type.includes('Religious')) {
        return Sparkles;
    }
    if (type.includes('Seasonal')) {
        return Calendar;
    }
    return Music;
};

export default function FestivalsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="bg-primary text-white pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="container-institutional relative z-10">
                    <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Cultural Celebrations</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
                        Bodo <span className="text-secondary italic">Festivals</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                        Discover the vibrant festival traditions of the Bodo people - from the celebration of
                        new beginnings in Bwisagu to the sacred rituals of Kherai Puja, each festival reflects
                        the deep connection between the Bodo community and their cultural heritage.
                    </p>
                </div>
            </section>

            {/* Festival Categories Overview */}
            <section className="section-padding bg-white">
                <div className="container-institutional">
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { season: 'Spring', festivals: bodo_festivals.filter(f => f.season === 'Spring').length, color: 'bg-green-50 border-green-200' },
                            { season: 'Summer', festivals: bodo_festivals.filter(f => f.season === 'Summer').length, color: 'bg-amber-50 border-amber-200' },
                            { season: 'Autumn', festivals: bodo_festivals.filter(f => f.season === 'Autumn').length, color: 'bg-orange-50 border-orange-200' },
                            { season: 'Winter', festivals: bodo_festivals.filter(f => f.season === 'Winter').length, color: 'bg-blue-50 border-blue-200' },
                        ].map((item) => {
                            const SeasonIcon = seasonConfig[item.season]?.icon || Flower2;
                            return (
                                <div key={item.season} className={`p-6 rounded-lg border-2 ${item.color} text-center`}>
                                    <SeasonIcon className={`w-8 h-8 mx-auto mb-3 ${seasonConfig[item.season]?.color || ''}`} />
                                    <h3 className="font-bold text-primary">{item.season}</h3>
                                    <p className="text-sm text-text-secondary">{item.festivals} festival{item.festivals !== 1 ? 's' : ''}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Main Festivals Section */}
            <section className="section-padding">
                <div className="container-institutional">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">Traditional Bodo Festivals</h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            These festivals form the backbone of Bodo cultural identity, celebrating the agricultural cycle,
                            religious beliefs, and community bonds that have been preserved for generations.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {bodo_festivals.map((festival: Festival) => {
                            const TypeIcon = getFestivalTypeIcon(festival.type);
                            const seasonData = seasonConfig[festival.season];
                            const SeasonIcon = seasonData?.icon || Flower2;

                            return (
                                <div
                                    key={festival.id}
                                    className="card-academic overflow-hidden group"
                                >
                                    <div className="grid lg:grid-cols-3 gap-0">
                                        {/* Festival Info Sidebar */}
                                        <div className="bg-primary/5 p-8 lg:border-r border-divider">
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${seasonData?.bgColor || 'bg-gray-100'} ${seasonData?.color || 'text-gray-600'}`}>
                                                    <SeasonIcon className="w-3 h-3 inline mr-1" />
                                                    {festival.season}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                                                {festival.name}
                                            </h3>

                                            <div className="flex items-center gap-2 text-text-secondary text-sm mb-4">
                                                <TypeIcon className="w-4 h-4" />
                                                <span>{festival.type}</span>
                                            </div>

                                            <p className="text-text-secondary text-sm leading-relaxed">
                                                {festival.description}
                                            </p>
                                        </div>

                                        {/* Main Content */}
                                        <div className="lg:col-span-2 p-8">
                                            {/* Cultural Significance */}
                                            <div className="mb-6">
                                                <h4 className="text-lg font-bold text-primary mb-3 flex items-center">
                                                    <Sparkles className="w-5 h-5 text-secondary mr-2" />
                                                    Cultural Significance
                                                </h4>
                                                <p className="text-text-secondary leading-relaxed">
                                                    {festival.cultural_significance}
                                                </p>
                                            </div>

                                            {/* Rituals */}
                                            <div className="mb-6">
                                                <h4 className="text-lg font-bold text-primary mb-3 flex items-center">
                                                    <Calendar className="w-5 h-5 text-gold mr-2" />
                                                    Traditional Rituals
                                                </h4>
                                                <ul className="grid md:grid-cols-2 gap-2">
                                                    {festival.rituals.map((ritual: string, idx: number) => (
                                                        <li key={idx} className="flex items-start text-sm text-text-secondary">
                                                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0" />
                                                            {ritual}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Related Dances */}
                                            {festival.related_dances.length > 0 && (
                                                <div className="mb-6">
                                                    <h4 className="text-lg font-bold text-primary mb-3 flex items-center">
                                                        <Music className="w-5 h-5 text-primary mr-2" />
                                                        Associated Dances
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {festival.related_dances.map((dance: string, idx: number) => (
                                                            <span
                                                                key={idx}
                                                                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                                                            >
                                                                {dance}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Sources */}
                                            {festival.sources.length > 0 && (
                                                <div className="pt-4 border-t border-divider">
                                                    <p className="text-xs text-text-muted">
                                                        <span className="font-bold">Sources:</span> {festival.sources.join(', ')}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Festival - Bwisagu */}
            <section className="bg-primary text-white py-20">
                <div className="container-institutional">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Most Important Festival</span>
                            <h2 className="text-3xl font-bold text-white mb-6">Bwisagu - Bodo New Year</h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-6">
                                Bwisagu is the most significant traditional festival of the Bodo people,
                                marking the beginning of the new year according to the Bodo calendar.
                                Celebrated in mid-April, this festival coincides with the arrival of spring
                                and the beginning of the agricultural season.
                            </p>
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 text-secondary mr-3" />
                                    <span className="text-white/80">Mid-April (Baisakh month)</span>
                                </div>
                                <div className="flex items-center">
                                    <Leaf className="w-5 h-5 text-secondary mr-3" />
                                    <span className="text-white/80">Marks beginning of agricultural cycle</span>
                                </div>
                                <div className="flex items-center">
                                    <Music className="w-5 h-5 text-secondary mr-3" />
                                    <span className="text-white/80">Features Bagurumba dance performances</span>
                                </div>
                            </div>
                            <Link href="/culture/bwisagu-festival" className="inline-flex items-center px-6 py-3 bg-gold text-primary font-bold rounded-lg hover:bg-gold/90 transition-colors">
                                Explore Bwisagu <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-12">
                            <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <Calendar className="w-24 h-24 text-secondary mx-auto mb-4" />
                                    <p className="text-white/60 font-medium">Bodo New Year Celebration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Religious Festivals - Kherai */}
            <section className="section-padding">
                <div className="container-institutional">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-secondary/5 border-2 border-secondary/20 rounded-lg p-12">
                                <div className="aspect-square bg-gradient-to-br from-secondary/10 to-gold/10 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <Sparkles className="w-24 h-24 text-secondary mx-auto mb-4" />
                                        <p className="text-primary font-medium">Sacred Religious Ceremony</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Most Sacred Ceremony</span>
                            <h2 className="text-3xl font-bold text-primary mb-6">Kherai Puja</h2>
                            <p className="text-text-secondary text-lg leading-relaxed mb-6">
                                Kherai is the most important religious festival of the Bodo people, celebrating
                                the deity Bathou (the supreme god in Bodo religion). This week-long ceremony
                                typically falls in November-December and involves elaborate rituals performed
                                by the Deodhai (priest) with deep spiritual significance.
                            </p>
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 text-secondary mr-3" />
                                    <span className="text-text-secondary">November-December</span>
                                </div>
                                <div className="flex items-center">
                                    <Sparkles className="w-5 h-5 text-secondary mr-3" />
                                    <span className="text-text-secondary">Worship of Bathoubwrai (Lord of Three Worlds)</span>
                                </div>
                                <div className="flex items-center">
                                    <Music className="w-5 h-5 text-secondary mr-3" />
                                    <span className="text-text-secondary">Features Kherai and Deodhai dances</span>
                                </div>
                            </div>
                            <Link href="/religion/kherai-puja" className="btn-outline border-secondary text-secondary hover:bg-secondary hover:text-white">
                                Learn About Kherai <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Festival Calendar */}
            <section className="section-padding bg-white">
                <div className="container-institutional">
                    <h2 className="text-3xl font-bold text-primary mb-10 text-center">Festival Calendar</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-primary">
                                    <th className="text-left py-4 px-4 font-bold text-primary">Month</th>
                                    <th className="text-left py-4 px-4 font-bold text-primary">Festival</th>
                                    <th className="text-left py-4 px-4 font-bold text-primary">Type</th>
                                    <th className="text-left py-4 px-4 font-bold text-primary">Significance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { month: 'January', festival: '-', type: '-', significance: '-' },
                                    { month: 'February', festival: '-', type: '-', significance: '-' },
                                    { month: 'March', festival: 'Domashi', type: 'Harvest Festival', significance: 'Winter crop harvest celebration' },
                                    { month: 'April', festival: 'Bwisagu', type: 'New Year Festival', significance: 'Bodo New Year and spring celebration' },
                                    { month: 'May', festival: 'Nwandw Khrung Khrung', type: 'Agricultural Festival', significance: 'Sowing completion prayers' },
                                    { month: 'June', festival: '-', type: '-', significance: '-' },
                                    { month: 'July', festival: '-', type: '-', significance: '-' },
                                    { month: 'August', festival: '-', type: '-', significance: '-' },
                                    { month: 'September', festival: 'Garja', type: 'Agricultural Festival', significance: 'Post-harvest thanksgiving' },
                                    { month: 'October', festival: 'Aathar', type: 'Religious Festival', significance: 'Ancestor worship' },
                                    { month: 'November', festival: 'Kherai', type: 'Religious Festival', significance: 'Bathou Puja - most sacred ceremony' },
                                    { month: 'December', festival: 'Kherai, Sankranti', type: 'Religious/Seasonal', significance: 'Bathou Puja, winter solstice' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-divider hover:bg-primary/5">
                                        <td className="py-4 px-4 font-medium text-primary">{row.month}</td>
                                        <td className="py-4 px-4">
                                            {row.festival !== '-' ? (
                                                <span className="text-secondary font-bold">{row.festival}</span>
                                            ) : (
                                                <span className="text-text-muted">-</span>
                                            )}
                                        </td>
                                        <td className="py-4 px-4 text-text-secondary text-sm">{row.type}</td>
                                        <td className="py-4 px-4 text-text-secondary text-sm">{row.significance}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding bg-gradient-to-r from-primary to-heritage">
                <div className="container-institutional text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Experience Bodo Culture</h2>
                    <p className="text-white/70 max-w-2xl mx-auto mb-8">
                        Plan a visit to Bodoland during these festivals to experience the rich cultural
                        heritage of the Bodo people firsthand.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/culture"
                            className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors"
                        >
                            Explore More Culture
                        </Link>
                        <Link
                            href="/religion"
                            className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-colors"
                        >
                            Learn About Bathouism
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
