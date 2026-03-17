/**
 * ============================================
 * Google Knowledge Graph API Service
 * ============================================
 * This service fetches real data about entities (people, organizations, etc.)
 * from Google's Knowledge Graph.
 * 
 * API Documentation: https://developers.google.com/knowledge-graph
 * 
 * Setup:
 * 1. Go to https://console.cloud.google.com/
 * 2. Create a new project or select existing
 * 3. Enable "Knowledge Graph API" from API Library
 * 4. Go to Credentials → Create Credentials → API Key
 * 5. Add the key to .env.local as GOOGLE_KNOWLEDGE_GRAPH_API_KEY
 */

interface KnowledgeGraphParams {
    query: string;
    limit?: number;
    languages?: string[];
    types?: string[];
}

interface KnowledgeGraphResult {
    '@context': string;
    '@type': string;
    name: string;
    description?: string;
    url?: string;
    image?: {
        url: string;
    };
    birthDate?: string;
    deathDate?: string;
    birthPlace?: string | { '@type': string; name: string };
    deathPlace?: string | { '@type': string; name: string };
    nationality?: string;
    jobTitle?: string | string[];
    memberOf?: Array<{
        '@type': string;
        name: string;
    }>;
    awards?: Array<{
        '@type': string;
        name: string;
    }>;
    [key: string]: unknown;
}

interface KnowledgeGraphResponse {
    itemListElement: Array<{
        result: KnowledgeGraphResult;
        resultScore: number;
    }>;
}

interface EnhancedLeaderData {
    verified: boolean;
    googleData?: KnowledgeGraphResult;
    confidence: number;
    dataSources: string[];
}

/**
 * Search Google Knowledge Graph for an entity
 */
export async function searchKnowledgeGraph(
    params: KnowledgeGraphParams
): Promise<KnowledgeGraphResponse | null> {
    const apiKey = process.env.GOOGLE_KNOWLEDGE_GRAPH_API_KEY;

    if (!apiKey || apiKey === 'your-google-knowledge-graph-api-key') {
        console.warn('Google Knowledge Graph API key not configured');
        return null;
    }

    const { query, limit = 10, languages = ['en'], types } = params;

    // Build the API URL
    const baseUrl = 'https://kgsearch.googleapis.com/v1/entities:search';
    const url = new URL(baseUrl);

    url.searchParams.append('query', query);
    url.searchParams.append('key', apiKey);
    url.searchParams.append('limit', String(limit));
    url.searchParams.append('languages', languages.join(','));

    if (types && types.length > 0) {
        url.searchParams.append('types', types.join(','));
    }

    try {
        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Knowledge Graph API error:', response.status, errorText);
            return null;
        }

        const data = await response.json();
        return data as KnowledgeGraphResponse;
    } catch (error) {
        console.error('Failed to fetch from Knowledge Graph:', error);
        return null;
    }
}

/**
 * Get the best matching result for a Bodo leader
 */
export async function getLeaderFromGoogle(
    leaderName: string,
    additionalContext?: string
): Promise<EnhancedLeaderData | null> {
    const searchQuery = additionalContext
        ? `${leaderName} ${additionalContext}`
        : leaderName;

    const response = await searchKnowledgeGraph({
        query: searchQuery,
        limit: 5,
        types: ['Person', 'PoliticalLeader', 'HistoricalFigure'],
        languages: ['en'],
    });

    if (!response || !response.itemListElement || response.itemListElement.length === 0) {
        return null;
    }

    // Get the highest scoring result
    const bestResult = response.itemListElement[0];

    // Calculate confidence based on result score (0-100)
    const confidence = Math.min(100, Math.round(bestResult.resultScore / 10));

    return {
        verified: confidence > 50,
        googleData: bestResult.result,
        confidence,
        dataSources: ['Google Knowledge Graph'],
    };
}

/**
 * Batch fetch multiple leaders
 */
export async function getMultipleLeadersFromGoogle(
    leaders: Array<{ name: string; context?: string }>
): Promise<Map<string, EnhancedLeaderData | null>> {
    const results = new Map<string, EnhancedLeaderData | null>();

    // Process sequentially to avoid rate limiting
    for (const leader of leaders) {
        const result = await getLeaderFromGoogle(leader.name, leader.context);
        results.set(leader.name, result);

        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    return results;
}

/**
 * Enhance leader data with Google Knowledge Graph information
 */
export function enhanceLeaderWithGoogleData(
    localData: Record<string, unknown>,
    googleData: KnowledgeGraphResult
): Record<string, unknown> {
    const enhanced = { ...localData };

    // Merge verified Google data
    if (googleData.birthDate && !enhanced.birthDate) {
        enhanced.birthDate = googleData.birthDate;
    }

    if (googleData.deathDate && !enhanced.deathDate) {
        enhanced.deathDate = googleData.deathDate;
    }

    if (googleData.birthPlace && !enhanced.birthPlace) {
        enhanced.birthPlace = typeof googleData.birthPlace === 'string'
            ? googleData.birthPlace
            : googleData.birthPlace?.name;
    }

    if (googleData.description && !enhanced.biography) {
        enhanced.biography = googleData.description;
    }

    if (googleData.image?.url && !enhanced.imageUrl) {
        enhanced.imageUrl = googleData.image.url;
    }

    // Add verification status
    enhanced.googleVerified = true;
    enhanced.lastVerified = new Date().toISOString();
    enhanced.confidenceScore = googleData['@type'] ? 100 : 50;

    return enhanced;
}

export type { KnowledgeGraphResult, KnowledgeGraphResponse, EnhancedLeaderData };
