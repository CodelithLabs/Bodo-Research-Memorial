'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Flag, Calendar, Users, MapPin, ArrowRight, Search, Filter } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Movement {
    id: string;
    name: string;
    slug: string;
    description: string;
    type: string;
    startYear?: number;
    endYear?: number;
    ongoing: boolean;
    movementStatus: string;
    region: string[];
    leaders: Array<{ _id: string; name: string; slug: string }>;
    achievements: string[];
    tags: string[];
    featured: boolean;
}

const MOVEMENT_TYPES = [
    { value: '', label: 'All Types' },
    { value: 'political', label: 'Political' },
    { value: 'social', label: 'Social' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'religious', label: 'Religious' },
    { value: 'armed', label: 'Armed' },
    { value: 'diplomatic', label: 'Diplomatic' },
];

export default function MovementsPage() {
    const [movements, setMovements] = useState<Movement[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchMovements();
    }, [page, selectedType]);

    const fetchMovements = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page: page.toString(),
                limit: '12',
            });

            if (selectedType) params.append('type', selectedType);
            if (searchQuery) params.append('search', searchQuery);

            const response = await fetch(`/api/movements?${params}`);
            const data = await response.json();

            if (data.movements) {
                setMovements(data.movements);
                setTotalPages(data.pagination.pages);
            }
        } catch (error) {
            console.error('Failed to fetch movements:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1);
        fetchMovements();
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'bg-emerald-50 text-emerald-800';
            case 'achieved': return 'bg-slate-100 text-slate-700';
            case 'ceased': return 'bg-gray-100 text-gray-700';
            case 'suspended': return 'bg-amber-50 text-amber-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'political': return 'bg-slate-100 text-slate-700';
            case 'social': return 'bg-emerald-50 text-emerald-800';
            case 'cultural': return 'bg-blue-50 text-blue-800';
            case 'religious': return 'bg-amber-50 text-amber-800';
            case 'armed': return 'bg-rose-50 text-rose-800';
            case 'diplomatic': return 'bg-indigo-50 text-indigo-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-ivory">
            <Header />

            {/* Hero Section */}
            <section className="bg-white border-b border-divider py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 mb-4">
                        <Flag className="w-12 h-12 text-parrot" />
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-primary">
                            Bodo Movements
                        </h1>
                    </div>
                    <p className="text-lg text-text-secondary max-w-2xl">
                        Explore the historical and contemporary movements that have shaped Bodo society,
                        politics, and cultural identity.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="bg-white border-b border-divider sticky top-16 z-30">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                        <form onSubmit={handleSearch} className="flex-1 max-w-xl">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search movements..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="input-academic pl-10 pr-4 py-2"
                                />
                            </div>
                        </form>

                        <div className="flex flex-wrap gap-2">
                            {MOVEMENT_TYPES.map((type) => (
                                <button
                                    key={type.value}
                                    onClick={() => {
                                        setSelectedType(type.value);
                                        setPage(1);
                                    }}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedType === type.value
                                            ? 'bg-parrot text-white'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                >
                                    {type.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Movements Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
                                    <div className="h-40 bg-gray-200" />
                                    <div className="p-6 space-y-3">
                                        <div className="h-6 bg-gray-200 rounded w-3/4" />
                                        <div className="h-4 bg-gray-200 rounded w-1/2" />
                                        <div className="h-20 bg-gray-200 rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : movements.length === 0 ? (
                        <div className="text-center py-16">
                            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No movements found</h3>
                            <p className="text-gray-500">
                                Try adjusting your filters or search query
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {movements.map((movement) => (
                                <div
                                    key={movement.id}
                                    className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <div className="h-32 bg-slate-50 flex items-center justify-center border-b border-slate-200">
                                        <Flag className="w-12 h-12 text-parrot" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(movement.type)}`}>
                                                {movement.type}
                                            </span>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(movement.movementStatus)}`}>
                                                {movement.movementStatus}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-parrot transition-colors">
                                            <Link href={`/movements/${movement.slug}`}>
                                                {movement.name}
                                            </Link>
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {movement.description}
                                        </p>

                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>
                                                    {movement.startYear || '?'} - {movement.ongoing ? 'Present' : movement.endYear || '?'}
                                                </span>
                                            </div>
                                            {movement.region?.[0] && (
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{movement.region[0]}</span>
                                                </div>
                                            )}
                                        </div>

                                        {movement.leaders && movement.leaders.length > 0 && (
                                            <div className="flex items-center gap-2 mb-4">
                                                <Users className="w-4 h-4 text-gray-400" />
                                                <span className="text-sm text-gray-600">
                                                    {movement.leaders.slice(0, 3).map(l => l.name).join(', ')}
                                                    {movement.leaders.length > 3 && ` +${movement.leaders.length - 3}`}
                                                </span>
                                            </div>
                                        )}

                                        <Link
                                            href={`/movements/${movement.slug}`}
                                            className="inline-flex items-center gap-2 text-parrot font-medium hover:gap-3 transition-all"
                                        >
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
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
