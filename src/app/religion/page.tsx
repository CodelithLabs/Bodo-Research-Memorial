/**
 * ============================================
 * Religion Page
 * ============================================
 * Explore Bathou religion, rituals, and philosophy
 */

import Link from 'next/link';
import { Sparkles, BookOpen, Star, Flame, ArrowRight, Heart, Circle } from 'lucide-react';
import { ALL_RELIGION_ARTICLES } from '@/data/religion';

export const metadata = {
    title: 'Bodo Religion - Bathouism, Rituals & Spirituality | Bodo Research Memorial',
    description: 'Explore the ancient Bathou religion, the indigenous faith of the Bodo people, including Kherai Puja, Brahma Dharma, and other religious traditions.',
};

const religionTopics = [
    {
        name: 'Bathouism',
        description: 'The indigenous faith of the Bodo people, centered on the supreme deity Bathoubwrai (Lord of the Three Worlds)',
        icon: Star,
        href: '/religion/bathouism',
        articles: ALL_RELIGION_ARTICLES.filter(a => a.category === 'bathouism').length,
        color: 'bg-amber-100 text-amber-600',
    },
    {
        name: 'Kherai Puja',
        description: 'The most important religious ceremony in Bathouism, featuring traditional rituals and community participation',
        icon: Flame,
        href: '/religion/kherai-puja',
        articles: ALL_RELIGION_ARTICLES.filter(a => a.category === 'kherai').length,
        color: 'bg-orange-100 text-orange-600',
    },
    {
        name: 'Brahma Dharma',
        description: 'The reform movement within Bathouism founded by Kalicharan Brahma',
        icon: Sparkles,
        href: '/religion/brahma-dharma',
        articles: ALL_RELIGION_ARTICLES.filter(a => a.category === 'brahmadharma').length,
        color: 'bg-yellow-100 text-yellow-600',
    },
    {
        name: 'Buddhism',
        description: 'Buddhist traditions and practices among Bodo communities',
        icon: Heart,
        href: '/religion/buddhism',
        articles: ALL_RELIGION_ARTICLES.filter(a => a.category === 'buddhism').length,
        color: 'bg-saffron-100 text-saffron-600',
    },
    {
        name: 'Christianity',
        description: 'Christian faith and practices among the Bodo community',
        icon: Circle,
        href: '/religion/christianity',
        articles: ALL_RELIGION_ARTICLES.filter(a => a.category === 'christianity').length,
        color: 'bg-blue-100 text-blue-600',
    },
];

const categoryIcons: Record<string, typeof Star> = {
    bathouism: Star,
    kherai: Flame,
    brahmadharma: Sparkles,
    buddhism: Heart,
    christianity: Circle,
};

const keyConcepts = ALL_RELIGION_ARTICLES.slice(0, 4).map((article) => ({
    title: article.title.split(' - ')[0],
    description: article.summary,
}));

export default function ReligionPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="bg-primary text-white pt-24 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <div className="container-institutional relative z-10">
                    <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Spirituality & Faith</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-6"><span className="text-secondary italic">Bathou</span> Religion</h1>
                    <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                        Explore the ancient Bathou religion, the indigenous faith of the Bodo people,
                        its rituals, symbols, and philosophical foundations.
                    </p>
                </div>
            </section>

            {/* Religion Topics */}
            <section className="section-padding">
                <div className="container-institutional">
                    <h2 className="text-3xl font-bold text-primary mb-10 text-center">Explore Bodo Religion</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {religionTopics.map((topic) => {
                            const Icon = topic.icon;
                            return (
                                <Link key={topic.name} href={topic.href}>
                                    <div className="card-academic p-8 group cursor-pointer h-full">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="w-14 h-14 bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest bg-primary/5 px-2 py-1 text-primary">
                                                {topic.articles} articles
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                            {topic.name}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed mb-4">{topic.description}</p>
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
                    <div className="grid md:grid-cols-2 gap-8">
                        {ALL_RELIGION_ARTICLES.map((article) => {
                            const Icon = categoryIcons[article.category] || BookOpen;
                            return (
                                <Link key={article.id} href={`/religion/${article.slug}`}>
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

            {/* Key Concepts */}
            <section className="section-padding bg-white">
                <div className="container-institutional">
                    <h2 className="text-3xl font-bold text-primary mb-12 text-center">Key Concepts of Bathou</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {keyConcepts.map((concept) => (
                            <div key={concept.title} className="card-academic p-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                    <BookOpen className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-primary mb-3">{concept.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">{concept.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="bg-primary text-white py-20">
                <div className="container-institutional text-center">
                    <Star className="w-16 h-16 text-secondary mx-auto mb-8 opacity-50" />
                    <blockquote className="text-2xl md:text-3xl font-serif italic mb-8 max-w-3xl mx-auto leading-relaxed">
                        &quot;Bathoubwrai is the protector of all beings. We pray for harmony, peace, and prosperity.&quot;
                    </blockquote>
                    <cite className="not-italic text-white/60 text-lg">
                        — Traditional Bathou prayer
                    </cite>
                </div>
            </section>

            {/* Research CTA */}
            <section className="bg-slate text-white py-20">
                <div className="container-institutional text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Contribute Research</h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Have knowledge about Bathou religion and Bodo spirituality?
                        Share your research with the academic community.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/research/submit" className="btn-primary">
                            Submit Article
                        </Link>
                        <Link href="/religion/bathou" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
