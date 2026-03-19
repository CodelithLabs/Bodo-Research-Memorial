'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ArrowLeft, Calendar, MapPin, Eye, BookOpen } from 'lucide-react';
import { archiveItems } from '@/data/archive';

interface ArchiveItem {
    id: string;
    title: string;
    slug: string;
    description: string;
    type: string;
    category: string;
    year?: number;
    decade?: string;
    origin?: {
        place?: string;
        district?: string;
        state?: string;
    };
    imageUrl?: string;
    media?: {
        primaryImage?: string;
    };
    tags: string[];
    views: number;
    createdAt: string;
}

export default function ArchiveManuscriptsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [items, setItems] = useState<ArchiveItem[]>([]);

    useEffect(() => {
        // Filter for manuscripts
        const manuscripts = archiveItems.filter(item => item.type === 'manuscript');
        setItems(manuscripts);
    }, []);

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-background dark:bg-slate-900 font-body">
            {/* Header */}
            <div className="bg-gradient-to-r from-heritage/10 to-maroon/10 border-b border-heritage/20">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <Link
                        href="/archive"
                        className="inline-flex items-center text-heritage hover:text-maroon mb-4 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Archive
                    </Link>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-heritage/10 rounded-lg">
                            <BookOpen className="w-8 h-8 text-heritage" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-heading text-heritage dark:text-gold">
                            Manuscripts
                        </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Historical manuscripts and foundational texts of Bodo civilization — including the 1906 Brahma Dharma Pusthi,
                        the 1895 Anderson folk tale collection, and the first Bodo novel Jujaini (1962).
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="bg-heritage/10 px-3 py-1 rounded-full text-heritage font-medium">
                            {items.length} Manuscripts
                        </span>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search manuscripts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-heritage/50 focus:border-heritage outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Results */}
                {filteredItems.length === 0 ? (
                    <div className="text-center py-12">
                        <BookOpen className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                        <h3 className="text-xl font-heading text-gray-600 dark:text-gray-400 mb-2">
                            No manuscripts found
                        </h3>
                        <p className="text-gray-500">
                            Try adjusting your search terms.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 group"
                            >
                                <div className="p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-purple-50 text-purple-800 text-xs px-2 py-0.5 rounded-full">
                                            Manuscript
                                        </span>
                                        {item.decade && (
                                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                                                {item.decade}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="font-heading text-heritage dark:text-gold text-lg mb-2 line-clamp-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                        {item.year && (
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {item.year}
                                            </span>
                                        )}
                                        {item.origin?.place && (
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {item.origin.place}
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-3 h-3" />
                                            {item.views}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {item.tags.slice(0, 3).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-heritage/5 text-heritage text-xs px-2 py-0.5 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
