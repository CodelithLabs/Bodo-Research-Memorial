'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Building2, Calendar, MapPin, Users, ArrowRight, Search } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Organization {
    id: string;
    name: string;
    slug: string;
    acronym?: string;
    description: string;
    type: string;
    foundedYear?: number;
    ongoing: boolean;
    operationalStatus: string;
    headquarters?: {
        district?: string;
        state?: string;
    };
    keyMembers: Array<{
        name: string;
        role: string;
    }>;
    achievements: string[];
    region: string[];
    tags: string[];
    featured: boolean;
}

const ORG_TYPES = [
    { value: '', label: 'All Types' },
    { value: 'political', label: 'Political' },
    { value: 'student', label: 'Student' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'religious', label: 'Religious' },
    { value: 'social', label: 'Social' },
    { value: 'educational', label: 'Educational' },
    { value: 'economic', label: 'Economic' },
    { value: 'youth', label: 'Youth' },
    { value: 'women', label: 'Women' },
    { value: 'sports', label: 'Sports' },
];

export default function OrganizationsPage() {
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [appliedSearchQuery, setAppliedSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchOrganizations = useCallback(async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page: page.toString(),
                limit: '12',
            });

            if (selectedType) params.append('type', selectedType);
            if (appliedSearchQuery) params.append('search', appliedSearchQuery);

            const response = await fetch(`/api/organizations?${params}`);
            const data = await response.json();

            if (data.organizations) {
                setOrganizations(data.organizations);
                setTotalPages(data.pagination.pages);
            }
        } catch (error) {
            console.error('Failed to fetch organizations:', error);
        } finally {
            setLoading(false);
        }
    }, [page, selectedType, appliedSearchQuery]);

    useEffect(() => {
        fetchOrganizations();
    }, [fetchOrganizations]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1);
        setAppliedSearchQuery(searchQuery.trim());
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-800';
            case 'inactive': return 'bg-gray-100 text-gray-800';
            case 'dissolved': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'political': return 'bg-purple-100 text-purple-800';
            case 'student': return 'bg-blue-100 text-blue-800';
            case 'cultural': return 'bg-pink-100 text-pink-800';
            case 'religious': return 'bg-amber-100 text-amber-800';
            case 'social': return 'bg-indigo-100 text-indigo-800';
            case 'educational': return 'bg-cyan-100 text-cyan-800';
            case 'economic': return 'bg-green-100 text-green-800';
            case 'youth': return 'bg-orange-100 text-orange-800';
            case 'women': return 'bg-rose-100 text-rose-800';
            case 'sports': return 'bg-lime-100 text-lime-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-[#FFFFF0]">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#3B82F6] to-[#1d4ed8] py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 mb-4">
                        <Building2 className="w-12 h-12 text-white" />
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
                            Bodo Organizations
                        </h1>
                    </div>
                    <p className="text-xl text-white/90 max-w-2xl">
                        Discover the organizations that have played pivotal roles in Bodo society,
                        politics, education, and cultural preservation.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="bg-white shadow-md sticky top-16 z-30">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                        <form onSubmit={handleSearch} className="flex-1 max-w-xl">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search organizations..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                                />
                            </div>
                        </form>

                        <div className="flex flex-wrap gap-2">
                            {ORG_TYPES.map((type) => (
                                <button
                                    key={type.value}
                                    onClick={() => {
                                        setSelectedType(type.value);
                                        setPage(1);
                                    }}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedType === type.value
                                            ? 'bg-[#3B82F6] text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {type.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Organizations Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
                                    <div className="h-32 bg-gray-200" />
                                    <div className="p-6 space-y-3">
                                        <div className="h-6 bg-gray-200 rounded w-3/4" />
                                        <div className="h-4 bg-gray-200 rounded w-1/2" />
                                        <div className="h-20 bg-gray-200 rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : organizations.length === 0 ? (
                        <div className="text-center py-16">
                            <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No organizations found</h3>
                            <p className="text-gray-500">
                                Try adjusting your filters or search query
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {organizations.map((org) => (
                                <div
                                    key={org.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="h-32 bg-gradient-to-br from-[#3B82F6] to-[#1d4ed8] flex items-center justify-center">
                                        <Building2 className="w-14 h-14 text-white/80" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(org.type)}`}>
                                                {org.type}
                                            </span>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(org.operationalStatus)}`}>
                                                {org.operationalStatus}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-[#3B82F6] transition-colors">
                                            <Link href={`/organizations/${org.slug}`}>
                                                {org.name}
                                            </Link>
                                        </h3>

                                        {org.acronym && (
                                            <p className="text-sm text-gray-500 mb-3">
                                                ({org.acronym})
                                            </p>
                                        )}

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {org.description}
                                        </p>

                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>
                                                    {org.foundedYear || '?'} - {org.ongoing ? 'Present' : 'N/A'}
                                                </span>
                                            </div>
                                            {org.headquarters?.district && (
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{org.headquarters.district}</span>
                                                </div>
                                            )}
                                        </div>

                                        {org.keyMembers && org.keyMembers.length > 0 && (
                                            <div className="flex items-center gap-2 mb-4">
                                                <Users className="w-4 h-4 text-gray-400" />
                                                <span className="text-sm text-gray-600">
                                                    {org.keyMembers.slice(0, 3).map(m => m.name).join(', ')}
                                                    {org.keyMembers.length > 3 && ` +${org.keyMembers.length - 3}`}
                                                </span>
                                            </div>
                                        )}

                                        <Link
                                            href={`/organizations/${org.slug}`}
                                            className="inline-flex items-center gap-2 text-[#3B82F6] font-medium hover:gap-3 transition-all"
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
