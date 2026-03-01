/**
 * ============================================
 * Culture Page
 * ============================================
 * Explore Bodo culture, traditions, and heritage
 */

import Link from 'next/link';
import { Heart, Music, Utensils, Palette, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Button, Card, CardContent, Badge } from '@/components/ui';

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
        <div className="min-h-screen bg-stone-50">
            {/* Page Header */}
            <section className="bg-gradient-to-r from-pink-700 to-pink-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-3 mb-4">
                        <Heart className="w-8 h-8 text-pink-300" />
                        <Badge variant="secondary" className="bg-pink-600">Heritage</Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Bodo Culture & Traditions
                    </h1>
                    <p className="text-lg text-pink-100 max-w-2xl">
                        Discover the rich and vibrant culture of the Bodo people - from ancient traditions
                        to modern practices that define our identity.
                    </p>
                </div>
            </section>

            {/* Culture Categories */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 gap-6">
                    {cultureCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <Link key={category.name} href={category.href}>
                                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-sm">
                                    <CardContent className="p-8">
                                        <div className="flex items-start justify-between">
                                            <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <Badge variant="outline">{category.articles} articles</Badge>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                                            {category.name}
                                        </h3>
                                        <p className="text-gray-600 mb-4">{category.description}</p>
                                        <div className="flex items-center text-pink-600 font-medium group-hover:translate-x-2 transition-transform">
                                            Explore <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Featured Articles */}
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {featuredArticles.map((article) => (
                            <Card key={article.title} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <Badge variant="primary" className="mb-3">{article.category}</Badge>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">{article.readTime}</span>
                                        <Button variant="ghost" size="sm">Read More</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cultural Map Section */}
            <section className="bg-gradient-to-r from-stone-800 to-stone-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Cultural Regions</h2>
                            <p className="text-stone-300 mb-6">
                                The Bodo people are primarily located in Assam, with significant populations
                                in North Bengal, Darjeeling, and Bhutan. Each region has its unique cultural expressions.
                            </p>
                            <div className="space-y-4">
                                {['Assam (Bodoland Territorial Area)', 'North Bengal (Darjeeling Hills)', 'Bhutan (Royal Manas National Park)'].map((region) => (
                                    <div key={region} className="flex items-center">
                                        <MapPin className="w-5 h-5 text-amber-400 mr-3" />
                                        <span>{region}</span>
                                    </div>
                                ))}
                            </div>
                            <Button className="mt-8 bg-amber-600 hover:bg-amber-700">
                                Explore Regions
                            </Button>
                        </div>
                        <div className="bg-stone-700/50 rounded-2xl p-8">
                            <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-amber-500/20 rounded-xl flex items-center justify-center">
                                <MapPin className="w-16 h-16 text-stone-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
