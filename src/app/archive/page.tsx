'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, Image as ImageIcon, FileText, Map, Film, Music, BookOpen, Calendar, MapPin, Eye } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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

const ARCHIVE_TYPES = [
    { value: 'photograph', label: 'Photographs', icon: ImageIcon },
    { value: 'document', label: 'Documents', icon: FileText },
    { value: 'manuscript', label: 'Manuscripts', icon: BookOpen },
    { value: 'artifact', label: 'Artifacts', icon: Map },
    { value: 'audio', label: 'Audio', icon: Music },
    { value: 'video', label: 'Video', icon: Film },
    { value: 'newspaper', label: 'Newspapers', icon: FileText },
    { value: 'map', label: 'Maps', icon: Map },
];

const CATEGORIES = [
    'All',
    'Political History',
    'Cultural Heritage',
    'Religious',
    'Literature',
    'Movements',
    'Leaders',
    'Organizations',
    'Traditional Arts',
];

export default function ArchivePage() {
    const [items, setItems] = useState<ArchiveItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchArchiveItems();
    }, [page, selectedType, selectedCategory]);

    const fetchArchiveItems = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page: page.toString(),
                limit: '12',
            });

            if (selectedType) params.append('type', selectedType);
            if (selectedCategory !== 'All') params.append('category', selectedCategory);
            if (searchQuery) params.append('search', searchQuery);

            const response = await fetch(`/api/archive?${params}`);
            const data = await response.json();

            if (data.items) {
                setItems(data.items);
                setTotalPages(data.pagination.pages);
            }
        } catch (error) {
            console.error('Failed to fetch archive items:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1);
        fetchArchiveItems();
    };

    const getTypeIcon = (type: string) => {
        const typeInfo = ARCHIVE_TYPES.find(t => t.value === type);
        const Icon = typeInfo?.icon || FileText;
        return <Icon className="w-5 h-5" />;
    };

    return (
        <div className="min-h-screen bg-[#FFFFF0]">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#44CC44] to-[#2d8f2d] py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Digital Cultural Archive
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl">
                        Explore our comprehensive collection of historical photographs, documents,
                        manuscripts, and cultural artifacts documenting Bodo heritage and history.
                    </p>
                </div>
            </section>

            {/* Filters Section */}
            <section className="bg-white shadow-md sticky top-16 z-30">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                        {/* Search */}
                        <form onSubmit={handleSearch} className="flex-1 max-w-xl">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search archive..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#44CC44] focus:border-transparent"
                                />
                            </div>
                        </form>

                        {/* Type Filter */}
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedType('')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedType === ''
                                        ? 'bg-[#44CC44] text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                All Types
                            </button>
                            {ARCHIVE_TYPES.map((type) => (
                                <button
                                    key={type.value}
                                    onClick={() => setSelectedType(type.value)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${selectedType === type.value
                                            ? 'bg-[#44CC44] text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <type.icon className="w-4 h-4" />
                                    {type.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setPage(1);
                                }}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                        ? 'bg-[#800000] text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Archive Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
                                    <div className="aspect-square bg-gray-200" />
                                    <div className="p-4 space-y-2">
                                        <div className="h-4 bg-gray-200 rounded w-3/4" />
                                        <div className="h-3 bg-gray-200 rounded w-1/2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : items.length === 0 ? (
                        <div className="text-center py-16">
                            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
                            <p className="text-gray-500">
                                Try adjusting your filters or search query
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {items.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/archive/${item.slug}`}
                                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="aspect-square relative overflow-hidden bg-gray-100">
                                        {item.media?.primaryImage || item.imageUrl ? (
                                            <Image
                                                src={item.media?.primaryImage || item.imageUrl || ''}
                                                alt={item.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {getTypeIcon(item.type)}
                                            </div>
                                        )}
                                        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                                            {getTypeIcon(item.type)}
                                            <span>{item.type}</span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 group-hover:text-[#44CC44] transition-colors line-clamp-2 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                <span>{item.year || 'Unknown'}</span>
                                            </div>
                                            {item.origin?.district && (
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-3 h-3" />
                                                    <span>{item.origin.district}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-1">
                                                <Eye className="w-3 h-3" />
                                                <span>{item.views}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-12 flex justify-center gap-2">
                            <button
                                onClick={() => setPage(p => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                            >
                                Previous
                            </button>
                            <span className="px-4 py-2 text-gray-600">
                                Page {page} of {totalPages}
                            </span>
                            <button
                                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                                className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
