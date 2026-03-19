/**
 * ============================================
 * Culture Page
 * ============================================
 * Explore Bodo culture, traditions, and heritage
 */

import Link from 'next/link';
import { Music, Utensils, Palette, MapPin, Calendar, ArrowRight, BookOpen, Building, Heart, Shirt, Sparkles } from 'lucide-react';
import { ALL_CULTURE_ARTICLES } from '@/data/culture';

export const metadata = {
    title: 'Bodo Culture - Traditions, Festivals & Heritage | Bodo Research Memorial',
    description: 'Explore the rich culture of the Bodo people including festivals like Bwisagu, traditional dance Bagurumba, textiles, cuisine, music, and architecture.',
};

const cultureCategories = [
    {
        name: 'Festivals',
        description: 'Bodo festivals like Bwisagu, Bodoland celebrations, and traditional gatherings',
        icon: Calendar,
        href: '/culture/festivals',
        articles: ALL_CULTURE_ARTICLES.filter(a => a.category === 'festival').length,
        color: 'bg-amber-100 text-amber-600',
    },
    {
        name: 'Traditional Dress',
        description: 'The elegant Dokhona, Gamsa, and other traditional Bodo attire',
        icon: Palette,
        href: '/culture?category=textiles',
        articles: ALL_CULTURE_ARTICLES.filter(a => a.category === 'textiles').length,
        color: 'bg-purple-100 text-purple-600',
    },
    {
        name: 'Music & Dance',
        description: 'Traditional Bodo music, dances like Bagurumba, and performing arts',
        icon: Music,
        href: '/culture?category=dance',
        articles: ALL_CULTURE_ARTICLES.filter(a => a.category === 'dance' || a.category === 'music').length,
        color: 'bg-pink-100 text-pink-600',
    },
    {
        name: 'Cuisine',
        description: 'Traditional Bodo food, dishes, and culinary practices',
        icon: Utensils,
        href: '/culture?category=cuisine',
        articles: ALL_CULTURE_ARTICLES.filter(a => a.category === 'cuisine').length,
        color: 'bg-orange-100 text-orange-600',
    },
    {
        name: 'Architecture',
        description: 'Traditional Bodo houses and architectural heritage',
        icon: Building,
        href: '/culture?category=architecture',
        articles: ALL_CULTURE_ARTICLES.filter(a => a.category === 'architecture').length,
        color: 'bg-teal-100 text-teal-600',
    },
    {
        name: 'Traditions',
        description: 'Oral traditions, games, and cultural practices',
        icon: Heart,
        href: '/culture?category=traditions',
        articles: ALL_CULTURE_ARTICLES.filter(a => a.category === 'traditions' || a.category === 'games').length,
        color: 'bg-rose-100 text-rose-600',
    },
    {
        name: 'Traditional Clothing',
        description: 'Dokhona, Gamsa, Eri silk, and Bodo traditional garments with GI tags',
        icon: Shirt,
        href: '/culture?category=traditional-clothing',
        articles: ALL_CULTURE_ARTICLES.filter(a => a.category === 'traditional-clothing').length,
        color: 'bg-indigo-100 text-indigo-600',
    },
    {
        name: 'Folklore',
        description: 'Oral literature, myths, proverbs, riddles, and folk traditions',
        icon: Sparkles,
        href: '/culture?category=folklore',
        articles: ALL_CULTURE_ARTICLES.filter(a => a.category === 'folklore').length,
        color: 'bg-cyan-100 text-cyan-600',
    },
];

const categoryIcons: Record<string, typeof Calendar> = {
    festival: Calendar,
    dance: Music,
    textiles: Palette,
    cuisine: Utensils,
    music: Music,
    architecture: Building,
    traditions: BookOpen,
    games: Heart,
    'traditional-clothing': Shirt,
    folklore: Sparkles,
};

const featuredArticles = ALL_CULTURE_ARTICLES.slice(0, 3).map((article) => ({
    title: article.title,
    excerpt: article.summary,
    category: article.category.charAt(0).toUpperCase() + article.category.slice(1),
    readTime: `${article.readingTime} min read`,
}));

export default function CulturePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="bg-primary text-white pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="container-institutional relative z-10">
                    <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Heritage & Traditions</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">Bodo <span className="text-secondary italic">Culture</span></h1>
                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                        Discover the rich and vibrant culture of the Bodo people - from ancient traditions
                        to modern practices that define our identity.
                    </p>
                </div>
            </section>

            {/* Culture Categories */}
            <section className="section-padding">
                <div className="container-institutional">
                    <h2 className="text-3xl font-bold text-primary mb-10 text-center">Explore Bodo Culture</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cultureCategories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <Link key={category.name} href={category.href}>
                                    <div className="card-academic p-8 group cursor-pointer h-full">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="w-14 h-14 bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest bg-primary/5 px-2 py-1 text-primary">
                                                {category.articles} articles
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                            {category.name}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed mb-4">{category.description}</p>
                                        <div className="flex items-center text-primary text-xs font-bold uppercase tracking-widest group-hover:text-secondary transition-colors">
                                            Explore <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* All Articles Section */}
            <section className="section-padding bg-white">
                <div className="container-institutional">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-0">All Articles</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ALL_CULTURE_ARTICLES.map((article) => {
                            const Icon = categoryIcons[article.category] || BookOpen;
                            return (
                                <Link key={article.id} href={`/culture/${article.slug}`}>
                                    <div className="card-academic p-8 group h-full flex flex-col">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <span className="label-category">{article.category}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">{article.summary}</p>
                                        <div className="flex items-center justify-between pt-6 border-t border-divider mt-auto">
                                            <span className="text-[10px] text-text-muted font-bold uppercase">{article.readingTime} min read</span>
                                            <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center group-hover:text-secondary transition-colors">
                                                Read <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Articles */}
            <section className="section-padding bg-white">
                <div className="container-institutional">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-0">Featured Articles</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredArticles.map((article) => (
                            <div key={article.title} className="card-academic p-8 group">
                                <span className="label-category mb-4">{article.category}</span>
                                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed mb-6">{article.excerpt}</p>
                                <div className="flex items-center justify-between pt-6 border-t border-divider">
                                    <span className="text-[10px] text-text-muted font-bold uppercase">{article.readTime}</span>
                                    <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center group-hover:text-secondary transition-colors">
                                        Read More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cultural Map Section */}
            <section className="bg-primary text-white py-20">
                <div className="container-institutional">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Geographic Distribution</span>
                            <h2 className="text-3xl font-bold text-white mb-6">Cultural Regions</h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-8">
                                The Bodo people are primarily located in Assam, with significant populations
                                in North Bengal, Darjeeling, and Bhutan. Each region has its unique cultural expressions.
                            </p>
                            <div className="space-y-4 mb-8">
                                {['Assam (Bodoland Territorial Area)', 'North Bengal (Darjeeling Hills)', 'Bhutan (Royal Manas National Park)'].map((region) => (
                                    <div key={region} className="flex items-center">
                                        <MapPin className="w-5 h-5 text-secondary mr-3" />
                                        <span className="text-white/80">{region}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/history" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                                Explore Regions
                            </Link>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-12">
                            <div className="aspect-video bg-primary/20 rounded-lg flex items-center justify-center">
                                <MapPin className="w-24 h-24 text-white/20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
