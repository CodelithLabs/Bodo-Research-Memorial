'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
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
 * Optimized with caching and debouncing
 */
export function useFuzzySearch<T>({
    data,
    keys,
    threshold = 0.3
}: UseFuzzySearchOptions<T>): UseFuzzySearchReturn<T> {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Debounce the query to avoid excessive searches
    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setDebouncedQuery(query);
        }, 150);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [query]);

    // Memoized Fuse instance with optimized configuration
    const fuse = useMemo(() => new Fuse(data, {
        keys: keys.map(key => ({ name: key, weight: 1 })),
        threshold,
        includeScore: true,
        ignoreLocation: true,
        useExtendedSearch: true,
        minMatchCharLength: 2,
        shouldSort: true,
        findAllMatches: false
    }), [data, keys, threshold]);

    // Memoized search results - only recompute when debounced query changes
    const results = useMemo(() => {
        if (!debouncedQuery.trim()) {
            return data;
        }

        // Limit results for better performance
        const searchResults = fuse.search(debouncedQuery);
        return searchResults.slice(0, 50).map(result => result.item);
    }, [fuse, debouncedQuery, data]);

    const clearSearch = useCallback(() => {
        setQuery('');
        setDebouncedQuery('');
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
