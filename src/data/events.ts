/**
 * Historical Events Data
 * Real data for Bodo historical events
 */

import historicalEventsData from './historical_events.json';

export interface EventDataItem {
    id: string;
    title: string;
    slug: string;
    description: string;
    significance?: string;
    type: string;
    category: string;
    year: number;
    date?: string;
    location?: {
        place?: string;
        district?: string;
        state?: string;
        region?: string;
    };
    participants?: {
        leaders?: string[];
        organizations?: string[];
        groups?: string[];
    };
    movements?: string[];
    outcomes?: string[];
    tags: string[];
    imageUrl?: string;
    featured?: boolean;
    status: 'published' | 'draft' | 'archived';
    createdAt: string;
}

// Transform JSON data to match EventDataItem interface
const transformEvent = (item: Record<string, unknown>): EventDataItem => {
    const year = item.year as number;

    return {
        id: item.id as string,
        title: item.title as string,
        slug: (item.title as string).toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        description: item.description as string,
        significance: item.description as string,
        type: 'political',
        category: 'Political History',
        year,
        location: {
            place: 'Assam',
            state: 'Assam',
            region: 'Bodoland',
        },
        participants: {
            leaders: (item.related_leaders as string[]) || [],
            organizations: [],
            groups: [],
        },
        movements: (item.related_movements as string[]) || [],
        tags: ['bodo', 'assam', 'historical', ...((item.related_movements as string[]) || [])],
        featured: Math.random() > 0.7,
        status: 'published',
        createdAt: new Date(year, 0, 1).toISOString(),
    };
};

// Transform the JSON data
export const eventsData: EventDataItem[] = (historicalEventsData.historical_events as Record<string, unknown>[]).map(transformEvent);

// Get events with filtering
export function getEvents(options?: {
    type?: string;
    category?: string;
    search?: string;
    page?: number;
    limit?: number;
    featured?: boolean;
    yearFrom?: number;
    yearTo?: number;
}): {
    events: EventDataItem[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
    };
} {
    let filtered = [...eventsData];

    // Filter by type
    if (options?.type) {
        filtered = filtered.filter(event =>
            event.type.toLowerCase().includes(options.type!.toLowerCase())
        );
    }

    // Filter by category
    if (options?.category && options.category !== 'All') {
        filtered = filtered.filter(event =>
            event.category.toLowerCase().includes(options.category!.toLowerCase())
        );
    }

    // Filter by search
    if (options?.search) {
        const searchLower = options.search.toLowerCase();
        filtered = filtered.filter(event =>
            event.title.toLowerCase().includes(searchLower) ||
            event.description.toLowerCase().includes(searchLower)
        );
    }

    // Filter featured
    if (options?.featured) {
        filtered = filtered.filter(event => event.featured);
    }

    // Year range filter
    if (options?.yearFrom || options?.yearTo) {
        filtered = filtered.filter(event => {
            if (options.yearFrom && event.year < options.yearFrom!) return false;
            if (options.yearTo && event.year > options.yearTo!) return false;
            return true;
        });
    }

    // Sort by year (descending)
    filtered.sort((a, b) => b.year - a.year);

    // Pagination
    const page = options?.page || 1;
    const limit = options?.limit || 12;
    const total = filtered.length;
    const pages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

    const paginatedEvents = filtered.slice(skip, skip + limit);

    return {
        events: paginatedEvents,
        pagination: {
            page,
            limit,
            total,
            pages,
        },
    };
}

// Get single event by ID or slug
export function getEvent(identifier: string): EventDataItem | undefined {
    return eventsData.find(event =>
        event.id === identifier ||
        event.slug === identifier
    );
}

export default eventsData;
