/**
 * ============================================
 * Religion Page
 * ============================================
 * Explore Bathou religion, rituals, and philosophy
 */

import Link from 'next/link';
import { Sparkles, BookOpen, Star, Users, Flame, ArrowRight } from 'lucide-react';
import { Button, Card, CardContent, Badge } from '@/components/ui';

const religionTopics = [
    {
        name: 'Bathou Religion',
        description: 'The indigenous faith of the Bodo people, centered on the supreme deity Bathoubwrai (Lord of the Three Worlds)',
        icon: Star,
        href: '/religion/bathou',
        articles: 20,
        color: 'bg-amber-100 text-amber-600',
    },
    {
        name: 'Rituals & Ceremonies',
        description: 'Traditional rituals including the Bathou Puja, Bwisagu, and other sacred ceremonies',
        icon: Flame,
        href: '/religion/rituals',
        articles: 25,
        color: 'bg-orange-100 text-orange-600',
    },
    {
        name: 'Sacred Symbols',
        description: 'The significance of the Dongkreng, Ora, and other sacred symbols in Bodo spirituality',
        icon: Sparkles,
        href: '/religion/symbols',
        articles: 15,
        color: 'bg-yellow-100 text-yellow-600',
    },
    {
        name: 'Sacred Figures',
        description: 'Important deities, priests (Deodhai), and spiritual leaders in Bathou tradition',
        icon: Users,
        href: '/religion/figures',
        articles: 18,
        color: 'bg-purple-100 text-purple-600',
    },
];

const keyConcepts = [
    {
        title: 'Bathoubwrai',
        description: 'The supreme deity in Bathou religion, meaning "Lord of the Three Worlds" - the creator of the universe.',
    },
    {
        title: 'Bathou Puja',
        description: 'The main religious ceremony dedicated to Bathoubwrai, performed by the Deodhai (high priest).',
    },
    {
        title: 'Dongkreng',
        description: 'A sacred bamboo staff used in Bathou rituals, symbolizing the connection to the divine.',
    },
    {
        title: 'Bwisagu',
        description: 'A ceremonial worship of nature and ancestors, marking the beginning of the Bodo calendar year.',
    },
];

export default function ReligionPage() {
    return (
        <div className="min-h-screen bg-stone-50">
            {/* Page Header */}
            <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-3 mb-4">
                        <Sparkles className="w-8 h-8 text-amber-300" />
                        <Badge variant="secondary" className="bg-amber-600">Spirituality</Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Bathou Religion & Spirituality
                    </h1>
                    <p className="text-lg text-amber-100 max-w-2xl">
                        Explore the ancient Bathou religion, the indigenous faith of the Bodo people,
                        its rituals, symbols, and philosophical foundations.
                    </p>
                </div>
            </section>

            {/* Religion Topics */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 gap-6">
                    {religionTopics.map((topic) => {
                        const Icon = topic.icon;
                        return (
                            <Link key={topic.name} href={topic.href}>
                                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-sm">
                                    <CardContent className="p-8">
                                        <div className="flex items-start justify-between">
                                            <div className={`w-16 h-16 rounded-2xl ${topic.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <Badge variant="outline">{topic.articles} articles</Badge>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                            {topic.name}
                                        </h3>
                                        <p className="text-gray-600 mb-4">{topic.description}</p>
                                        <div className="flex items-center text-amber-600 font-medium group-hover:translate-x-2 transition-transform">
                                            Explore <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Key Concepts */}
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Concepts of Bathou</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {keyConcepts.map((concept) => (
                            <Card key={concept.title} className="hover:shadow-lg transition-shadow border-amber-200">
                                <CardContent className="p-6">
                                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                                        <BookOpen className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{concept.title}</h3>
                                    <p className="text-sm text-gray-600">{concept.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Star className="w-12 h-12 mx-auto mb-6 text-amber-200" />
                    <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">&quot;Bathoubwrai is the protector of all beings. We pray for harmony, peace, and prosperity.&quot;</blockquote>
                    <cite className="not-italic text-amber-100">
                        — Traditional Bathou prayer
                    </cite>
                </div>
            </section>

            {/* Research CTA */}
            <section className="bg-stone-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Contribute Research</h2>
                    <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
                        Have knowledge about Bathou religion and Bodo spirituality?
                        Share your research with the academic community.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/research/submit">
                            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                                Submit Article
                            </Button>
                        </Link>
                        <Link href="/religion/bathou">
                            <Button size="lg" variant="outline" className="border-stone-500 text-white hover:bg-stone-800">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
