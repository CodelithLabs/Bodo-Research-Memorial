/**
 * ============================================
 * Google Knowledge Graph API Route
 * ============================================
 * GET /api/leaders/google - Search for leaders using Google Knowledge Graph
 * GET /api/leaders/google?query=Bodofa%20Upendra%20Nath%20Brahma - Search for specific leader
 * GET /api/leaders/google?leaderId=bodofa-upendra-nath-brahma - Enhance local leader data
 */

import { NextRequest, NextResponse } from 'next/server';
import { getLeaderFromGoogle, searchKnowledgeGraph } from '@/services/googleKnowledgeGraph';
import { leaders } from '@/data/leaders';

export const dynamic = 'force-dynamic';

/**
 * GET /api/leaders/google
 * Query params:
 * - query: Search query (e.g., "Bodofa Upendra Nath Brahma")
 * - leaderId: Get Google data for a specific local leader
 * - all: Get Google data for all local leaders
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('query');
        const leaderId = searchParams.get('leaderId');
        const all = searchParams.get('all');

        // Check if API key is configured
        const apiKey = process.env.GOOGLE_KNOWLEDGE_GRAPH_API_KEY;
        if (!apiKey || apiKey === 'your-google-knowledge-graph-api-key') {
            return NextResponse.json({
                error: 'Google Knowledge Graph API key not configured',
                message: 'Please add GOOGLE_KNOWLEDGE_GRAPH_API_KEY to .env.local',
                setup: {
                    step1: 'Go to https://console.cloud.google.com/',
                    step2: 'Create a new project or select existing',
                    step3: 'Enable "Knowledge Graph API" from API Library',
                    step4: 'Go to Credentials → Create Credentials → API Key',
                    step5: 'Add the key to .env.local as GOOGLE_KNOWLEDGE_GRAPH_API_KEY',
                }
            }, { status: 401 });
        }

        // Search by specific query
        if (query) {
            const results = await searchKnowledgeGraph({
                query,
                limit: 10,
                types: ['Person', 'PoliticalLeader', 'HistoricalFigure'],
                languages: ['en'],
            });

            if (!results || !results.itemListElement || results.itemListElement.length === 0) {
                return NextResponse.json({
                    message: 'No results found',
                    query,
                    results: [],
                });
            }

            return NextResponse.json({
                query,
                count: results.itemListElement.length,
                results: results.itemListElement.map((item) => ({
                    name: item.result.name,
                    description: item.result.description,
                    type: item.result['@type'],
                    url: item.result.url,
                    image: item.result.image?.url,
                    score: item.resultScore,
                })),
            });
        }

        // Get Google data for a specific leader by ID
        if (leaderId) {
            const localLeader = leaders.find((l) => l.id === leaderId);

            if (!localLeader) {
                return NextResponse.json({
                    error: 'Leader not found',
                    leaderId,
                }, { status: 404 });
            }

            const googleData = await getLeaderFromGoogle(
                localLeader.name,
                'Bodo leader Assam India'
            );

            return NextResponse.json({
                leaderId: localLeader.id,
                localName: localLeader.name,
                googleData: googleData ? {
                    found: true,
                    verified: googleData.verified,
                    confidence: googleData.confidence,
                    name: googleData.googleData?.name,
                    description: googleData.googleData?.description,
                    birthDate: googleData.googleData?.birthDate,
                    deathDate: googleData.googleData?.deathDate,
                    birthPlace: googleData.googleData?.birthPlace,
                    image: googleData.googleData?.image?.url,
                } : {
                    found: false,
                    verified: false,
                    message: 'No matching entity found in Google Knowledge Graph',
                },
            });
        }

        // Get Google data for all local leaders
        if (all === 'true') {
            const results = [];

            for (const leader of leaders) {
                const googleData = await getLeaderFromGoogle(
                    leader.name,
                    'Bodo leader Assam India'
                );

                results.push({
                    id: leader.id,
                    localName: leader.name,
                    found: !!googleData,
                    verified: googleData?.verified || false,
                    confidence: googleData?.confidence || 0,
                });

                // Small delay to avoid rate limiting
                await new Promise((resolve) => setTimeout(resolve, 200));
            }

            const verified = results.filter((r) => r.verified).length;
            const found = results.filter((r) => r.found).length;

            return NextResponse.json({
                summary: {
                    total: results.length,
                    found,
                    verified,
                },
                results,
            });
        }

        // Default: Return instructions
        return NextResponse.json({
            message: 'Use query, leaderId, or all parameter',
            examples: [
                '/api/leaders/google?query=Upendra%20Nath%20Brahma',
                '/api/leaders/google?leaderId=bodofa-upendra-nath-brahma',
                '/api/leaders/google?all=true',
            ],
        });

    } catch (error) {
        console.error('Google leaders API error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch leader data' },
            { status: 500 }
        );
    }
}
