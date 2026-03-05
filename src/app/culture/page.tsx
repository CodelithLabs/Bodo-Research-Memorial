/**
 * ============================================
 * Culture Page
 * ============================================
 * Explore Bodo culture, traditions, and heritage
 */

import Link from 'next/link';
import { Music, Utensils, Palette, MapPin, Calendar, ArrowRight } from 'lucide-react';

const cultureCategories = [
    {
        name: 'Festivals',
        description: 'Bodo festivals like Baisagu, Bodoland celebrations, and traditional gatherings',
        icon: Calendar,
        href: '/culture/festivals',
        articles: 25,
        color: 'bg-amber-100 text-amber-600',
    },
    {
        name: 'Traditional Dress',
        description: 'The elegant Dokhona, mekhela, and other traditional Bodo attire',
        icon: Palette,
        href: '/culture/dress',
        articles: 15,
        color: 'bg-purple-100 text-purple-600',
    },
    {
        name: 'Music & Dance',
        description: 'Traditional Bodo music, dances like Bagurumba, and performing arts',
        icon: Music,
        href: '/culture/music',
        articles: 30,
        color: 'bg-pink-100 text-pink-600',
    },
    {
        name: 'Cuisine',
        description: 'Traditional Bodo food, dishes, and culinary practices',
        icon: Utensils,
        href: '/culture/cuisine',
        articles: 20,
        color: 'bg-orange-100 text-orange-600',
    },
];

const featuredArticles = [
    {
        title: 'Baisagu - The Bodo New Year',
        excerpt: 'Baisagu marks the beginning of the Bodo calendar year, celebrated with traditional fervor and cultural performances.',
        category: 'Festivals',
        readTime: '5 min read',
    },
    {
        title: 'The Dokhona - Traditional Attire',
        excerpt: "Understanding the significance and intricate designs of the traditional Bodo women's dress.",
        category: 'Traditional Dress',
        readTime: '8 min read',
    },
    {
        title: 'Bagurumba Dance',
        excerpt: 'The graceful serpent dance that represents the unique cultural identity of the Bodo people.',
        category: 'Music & Dance',
        readTime: '6 min read',
    },
];

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
                    <div className="grid md:grid-cols-2 gap-8">
                        {cultureCategories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <Link key={category.name} href={category.href}>
                                    <div className="card-academic p-10 group cursor-pointer h-full">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="w-16 h-16 bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest bg-primary/5 px-2 py-1 text-primary">
                                                {category.articles} articles
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                            {category.name}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed mb-6">{category.description}</p>
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
