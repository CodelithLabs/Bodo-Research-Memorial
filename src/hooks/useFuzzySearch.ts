'use client';

import { useState, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';

interface UseFuzzySearchOptions<T> {
    data: T[];
    keys: string[];
    threshold?: number;
}

interface UseFuzzySearchReturn<T> {
    query: string;
    setQuery: (query: string) => void;
    results: T[];
    clearSearch: () => void;
    isSearching: boolean;
}

/**
 * Custom hook for fuzzy search using Fuse.js
 * Provides better search results with typo tolerance
 */
export function useFuzzySearch<T>({
    data,
    keys,
    threshold = 0.3
}: UseFuzzySearchOptions<T>): UseFuzzySearchReturn<T> {
    const [query, setQuery] = useState('');

    // Configure Fuse.js
    const fuse = useMemo(() => new Fuse(data, {
        keys,
        threshold,
        includeScore: true,
        ignoreLocation: true,
        useExtendedSearch: true,
    }), [data, keys, threshold]);

    // Perform fuzzy search
    const results = useMemo(() => {
        if (!query.trim()) {
            return data;
        }

        const searchResults = fuse.search(query);
        return searchResults.map(result => result.item);
    }, [fuse, query, data]);

    const clearSearch = useCallback(() => {
        setQuery('');
    }, []);

    return {
        query,
        setQuery,
        results,
        clearSearch,
        isSearching: query.trim().length > 0
    };
}

export default useFuzzySearch;
