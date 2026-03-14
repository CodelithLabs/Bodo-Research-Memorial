/**
 * ============================================
 * Global Search API - Cross-collection Search
 * ============================================
 * GET /api/search - Search across all collections
 * 
 * Searches: leaders, movements, organizations, events, archive, articles
 */

import { NextRequest, NextResponse } from 'next/server';
import { connectDB, Leader, Movement, Organization, HistoricalEvent, ArchiveItem, Article } from '@/models';

/**
 * GET /api/search
 * Search across all collections
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);

        // Get search query
        const query = searchParams.get('q');

        if (!query || query.trim().length < 2) {
            return NextResponse.json(
                { error: 'Search query must be at least 2 characters' },
                { status: 400 }
            );
        }

        // Limit results per collection
        const limit = parseInt(searchParams.get('limit') || '5');

        // Build search text query
        const searchQuery = { $text: { $search: query } };
        const statusQuery = { status: 'published' };

        // Execute searches in parallel
        const [
            leaders,
            movements,
            organizations,
            events,
            archiveItems,
            articles
        ] = await Promise.all([
            // Search leaders
            Leader.find({ ...searchQuery, ...statusQuery })
                .select('name slug shortBio photo birthDate deathDate category')
                .limit(limit)
                .lean(),

            // Search movements
            Movement.find({ ...searchQuery, ...statusQuery })
                .select('name slug description type startYear')
                .limit(limit)
                .lean(),

            // Search organizations
            Organization.find({ ...searchQuery, ...statusQuery })
                .select('name slug description acronym type foundedYear')
                .limit(limit)
                .lean(),

            // Search events
            HistoricalEvent.find({ ...searchQuery, ...statusQuery })
                .select('title slug description year type')
                .limit(limit)
                .lean(),

            // Search archive items
            ArchiveItem.find({ ...searchQuery, ...statusQuery })
                .select('title slug description type year')
                .limit(limit)
                .lean(),

            // Search articles
            Article.find({ ...searchQuery, ...statusQuery })
                .select('title slug excerpt category')
                .limit(limit)
                .lean(),
        ]);

        // Calculate total results
        const totalResults =
            leaders.length +
            movements.length +
            organizations.length +
            events.length +
            archiveItems.length +
            articles.length;

        return NextResponse.json({
            query,
            results: {
                leaders: {
                    count: leaders.length,
                    items: leaders
                },
                movements: {
                    count: movements.length,
                    items: movements
                },
                organizations: {
                    count: organizations.length,
                    items: organizations
                },
                events: {
                    count: events.length,
                    items: events
                },
                archive: {
                    count: archiveItems.length,
                    items: archiveItems
                },
                articles: {
                    count: articles.length,
                    items: articles
                }
            },
            totalResults,
            suggestions: query.split(' ').filter(Boolean)
        });
    } catch (error) {
        console.error('Search error:', error);
        return NextResponse.json(
            { error: 'Search failed' },
            { status: 500 }
        );
    }
}
