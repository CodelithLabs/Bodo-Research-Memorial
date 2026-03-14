/**
 * ============================================
 * Knowledge Graph API - Entity Relationships
 * ============================================
 * GET /api/knowledge-graph - Get all entities and relationships
 * GET /api/knowledge-graph/entities/:type - Get entities by type
 * GET /api/knowledge-graph/relationships - Get relationships
 */

import { NextRequest, NextResponse } from 'next/server';
import { connectDB, Leader, Movement, Organization, HistoricalEvent, Article } from '@/models';

/**
 * Entity types in the knowledge graph
 */
type EntityType = 'leader' | 'movement' | 'organization' | 'event' | 'topic';

/**
 * GET /api/knowledge-graph
 * Get knowledge graph data with entities and relationships
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type'); // Filter by entity type
        const limit = parseInt(searchParams.get('limit') || '50');

        // Base query for published content
        const statusQuery = { status: 'published' };

        // Fetch entities based on type filter
        let leaders: unknown[] = [];
        let movements: unknown[] = [];
        let organizations: unknown[] = [];
        let events: unknown[] = [];
        let topics: unknown[] = [];

        if (!type || type === 'leader') {
            leaders = await Leader.find(statusQuery)
                .select('name slug category tags')
                .limit(limit)
                .lean();
        }

        if (!type || type === 'movement') {
            movements = await Movement.find(statusQuery)
                .select('name slug type tags')
                .limit(limit)
                .lean();
        }

        if (!type || type === 'organization') {
            organizations = await Organization.find(statusQuery)
                .select('name slug acronym type tags')
                .limit(limit)
                .lean();
        }

        if (!type || type === 'event') {
            events = await HistoricalEvent.find(statusQuery)
                .select('title slug type year tags')
                .limit(limit)
                .lean();
        }

        if (!type || type === 'topic') {
            topics = await Article.find(statusQuery)
                .select('title slug category tags')
                .limit(limit)
                .lean();
        }

        // Transform to nodes format
        const nodes: Array<{
            id: string;
            label: string;
            type: EntityType;
            data: unknown;
        }> = [];

        // Add leaders as nodes
        leaders.forEach((leader: unknown) => {
            const l = leader as { _id: unknown; name: string; slug: string; category?: string };
            nodes.push({
                id: `leader-${l.slug}`,
                label: l.name,
                type: 'leader',
                data: l
            });
        });

        // Add movements as nodes
        movements.forEach((movement: unknown) => {
            const m = movement as { _id: unknown; name: string; slug: string };
            nodes.push({
                id: `movement-${m.slug}`,
                label: m.name,
                type: 'movement',
                data: m
            });
        });

        // Add organizations as nodes
        organizations.forEach((org: unknown) => {
            const o = org as { _id: unknown; name: string; slug: string; acronym?: string };
            nodes.push({
                id: `organization-${o.slug}`,
                label: o.acronym || o.name,
                type: 'organization',
                data: o
            });
        });

        // Add events as nodes
        events.forEach((event: unknown) => {
            const e = event as { _id: unknown; title: string; slug: string; year?: number };
            nodes.push({
                id: `event-${e.slug}`,
                label: `${e.title} (${e.year})`,
                type: 'event',
                data: e
            });
        });

        // Add topics as nodes
        topics.forEach((topic: unknown) => {
            const t = topic as { _id: unknown; title: string; slug: string };
            nodes.push({
                id: `topic-${t.slug}`,
                label: t.title,
                type: 'topic',
                data: t
            });
        });

        // Generate relationships between entities
        // This is a simplified version - in production, you'd use actual relationship data
        const relationships: Array<{
            source: string;
            target: string;
            type: string;
        }> = [];

        // Create relationships based on shared tags or explicit references
        // Leaders to Movements
        for (const node of nodes) {
            if (node.type === 'leader') {
                const leaderData = node.data as { slug: string };
                // Find related movements (simplified - would use actual relationships)
                movements.forEach((m: unknown) => {
                    const movement = m as { slug: string };
                    if (leaderData.slug.includes(movement.slug) || movement.slug.includes(leaderData.slug)) {
                        relationships.push({
                            source: node.id,
                            target: `movement-${movement.slug}`,
                            type: 'participated_in'
                        });
                    }
                });
            }
            
            if (node.type === 'organization') {
                const orgData = node.data as { slug: string };
                // Organizations related to movements
                movements.forEach((m: unknown) => {
                    const movement = m as { slug: string };
                    if (orgData.slug.includes(movement.slug)) {
                        relationships.push({
                            source: node.id,
                            target: `movement-${movement.slug}`,
                            type: 'founded'
                        });
                    }
                });
            }
        }

        return NextResponse.json({
            nodes,
            relationships,
            stats: {
                totalNodes: nodes.length,
                leaders: leaders.length,
                movements: movements.length,
                organizations: organizations.length,
                events: events.length,
                topics: topics.length,
                relationships: relationships.length
            }
        });
    } catch (error) {
        console.error('Knowledge graph error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch knowledge graph' },
            { status: 500 }
        );
    }
}
