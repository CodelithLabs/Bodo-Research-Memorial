'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense, useMemo, useCallback } from 'react';
import Link from 'next/link';
import {
    Search,
    Users,
    Globe,
    Calendar,
    Archive,
    BookOpen,
    ChevronRight,
    FileText,
    Loader2
} from 'lucide-react';
import { leaders } from '@/data/leaders';
import { useDebounce } from '@/hooks/useDebounce';

// Types
interface SearchResult {
    type: 'leader' | 'movement' | 'organization' | 'event' | 'archive' | 'article';
    id: string;
    title: string;
    description: string;
    url: string;
    category?: string;
}

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState(query);
    const [activeTab, setActiveTab] = useState<string>('all');

    // Debounce search query to avoid excessive API calls
    const debouncedQuery = useDebounce(searchQuery, 300);

    // Cache for storing search results
    const searchCache = useMemo(() => new Map<string, SearchResult[]>(), []);

    // Local search data
    const localData = {
        leaders: leaders.map(l => ({
            type: 'leader' as const,
            id: l.id,
            title: l.name,
            description: l.biography?.substring(0, 150) + '...' || '',
            url: `/leaders/${l.id}`,
            category: l.title
        })),
        movements: [] as SearchResult[],
        organizations: [] as SearchResult[],
        events: [] as SearchResult[],
        archive: [] as SearchResult[],
        articles: [] as SearchResult[]
    };

    // Search through local data - optimized with early returns
    const searchLocalData = useCallback((searchTerm: string): SearchResult[] => {
        if (!searchTerm || searchTerm.length < 2) return [];

        const term = searchTerm.toLowerCase();
        const allResults: SearchResult[] = [];
        const localLeaders = localData.leaders;

        // Use for loop for better performance
        for (let i = 0; i < localLeaders.length; i++) {
            const leader = localLeaders[i];
            if (
                leader.title.toLowerCase().includes(term) ||
                leader.description.toLowerCase().includes(term) ||
                (leader.category && leader.category.toLowerCase().includes(term))
            ) {
                allResults.push(leader);
            }
        }

        return allResults;
    }, []);

    // Memoized search function
    const performSearch = useCallback(async (searchTerm: string) => {
        // Check cache first
        const cacheKey = searchTerm.toLowerCase();
        if (searchCache.has(cacheKey)) {
            setResults(searchCache.get(cacheKey) || []);
            setLoading(false);
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}&limit=10`, {
                signal: AbortSignal.timeout(5000) // 5 second timeout
            });

            if (!response.ok) throw new Error('Search failed');

            const data = await response.json();

            if (data.results && data.totalResults > 0) {
                const apiResults: SearchResult[] = [];

                // Transform API results
                Object.entries(data.results).forEach(([category, value]: [string, unknown]) => {
                    const categoryData = value as { items?: unknown[] };
                    if (categoryData.items && categoryData.items.length > 0) {
                        categoryData.items.forEach((item: unknown) => {
                            const itemData = item as { _id?: string; id?: string; name?: string; title?: string; description?: string; shortBio?: string; excerpt?: string; slug?: string; type?: string; category?: string };
                            apiResults.push({
                                type: category as SearchResult['type'],
                                id: itemData._id || itemData.id || '',
                                title: itemData.name || itemData.title || '',
                                description: itemData.description || itemData.shortBio || itemData.excerpt || '',
                                url: `/${category === 'archive' ? 'archive' : category}s/${itemData.slug || itemData.id}`,
                                category: itemData.type || itemData.category
                            });
                        });
                    }
                });

                // Cache the results
                searchCache.set(cacheKey, apiResults);
                setResults(apiResults);
            } else {
                // Fallback to local search
                const localResults = searchLocalData(searchTerm);
                searchCache.set(cacheKey, localResults);
                setResults(localResults);
            }
        } catch {
            // Fallback to local search on error
            const localResults = searchLocalData(searchTerm);
            searchCache.set(cacheKey, localResults);
            setResults(localResults);
        } finally {
            setLoading(false);
        }
    }, [searchCache, searchLocalData]);

    useEffect(() => {
        // Use debounced query for search
        if (debouncedQuery && debouncedQuery.length >= 2) {
            performSearch(debouncedQuery);
        } else if (!debouncedQuery) {
            setResults([]);
            setLoading(false);
        }
    }, [debouncedQuery, performSearch]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
    };

    const tabs = [
        { id: 'all', label: 'All Results', icon: Search },
        { id: 'leader', label: 'Leaders', icon: Users },
        { id: 'movement', label: 'Movements', icon: Globe },
        { id: 'organization', label: 'Organizations', icon: BookOpen },
        { id: 'event', label: 'Events', icon: Calendar },
        { id: 'archive', label: 'Archive', icon: Archive },
    ];

    // Memoize filtered results
    const filteredResults = useMemo(() =>
        activeTab === 'all' ? results : results.filter(r => r.type === activeTab)
        , [results, activeTab]);

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'leader': return Users;
            case 'movement': return Globe;
            case 'organization': return BookOpen;
            case 'event': return Calendar;
            case 'archive': return Archive;
            case 'article': return FileText;
            default: return Search;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'leader': return 'bg-green-100 text-green-700';
            case 'movement': return 'bg-amber-100 text-amber-700';
            case 'organization': return 'bg-blue-100 text-blue-700';
            case 'event': return 'bg-purple-100 text-purple-700';
            case 'archive': return 'bg-orange-100 text-orange-700';
            case 'article': return 'bg-cyan-100 text-cyan-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-ivory to-parchment-light">
            {/* Hero Section */}
            <div className="bg-heritage text-white py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-serif font-bold mb-4">Search Results</h1>
                    <p className="text-heritage-100 mb-8">
                        Search across leaders, movements, organizations, events, and archive items
                    </p>

                    {/* Search Form */}
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for leaders, movements, events..."
                            className="w-full px-6 py-4 pr-14 text-lg rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-heritage-400 shadow-lg"
                        />
                        <button
                            type="submit"
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-heritage hover:bg-heritage-600 rounded-lg transition-colors"
                        >
                            <Search className="w-6 h-6 text-white" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Results Section */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                {query && (
                    <div className="mb-6">
                        <p className="text-gray-600">
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Searching for &quot;{query}&quot;...
                                </span>
                            ) : (
                                <>Found {filteredResults.length} results for &quot;{query}&quot;</>
                            )}
                        </p>
                    </div>
                )}

                {/* Tabs */}
                {results.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
                        {tabs.map(tab => {
                            const Icon = tab.icon;
                            const count = tab.id === 'all'
                                ? results.length
                                : results.filter(r => r.type === tab.id).length;

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeTab === tab.id
                                        ? 'bg-heritage text-white'
                                        : 'bg-white text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {tab.label}
                                    <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${activeTab === tab.id ? 'bg-white/20' : 'bg-gray-200'
                                        }`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* Results List */}
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-heritage" />
                    </div>
                ) : filteredResults.length > 0 ? (
                    <div className="space-y-4">
                        {filteredResults.map((result, index) => {
                            const Icon = getTypeIcon(result.type);

                            return (
                                <Link
                                    key={`${result.type}-${result.id}-${index}`}
                                    href={result.url}
                                    className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-lg ${getTypeColor(result.type)}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(result.type)}`}>
                                                    {result.type}
                                                </span>
                                                {result.category && (
                                                    <span className="text-xs text-gray-500">
                                                        {result.category}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-heritage transition-colors">
                                                {result.title}
                                            </h3>
                                            <p className="text-gray-600 mt-1 line-clamp-2">
                                                {result.description}
                                            </p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-heritage transition-colors" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                ) : query && !loading ? (
                    <div className="text-center py-20">
                        <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No results found</h3>
                        <p className="text-gray-500 mb-6">
                            Try different keywords or browse our categories
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link href="/leaders" className="px-4 py-2 bg-heritage text-white rounded-lg hover:bg-heritage-600 transition-colors">
                                Browse Leaders
                            </Link>
                            <Link href="/movements" className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                Browse Movements
                            </Link>
                            <Link href="/archive" className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                Browse Archive
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Start your search</h3>
                        <p className="text-gray-500">
                            Enter at least 2 characters to search
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-heritage" />
            </div>
        }>
            <SearchContent />
        </Suspense>
    );
}
