import { MetadataRoute } from 'next';
import { connectDB, Leader, Article, HistoricalEvent } from '@/models';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://bodo-research.org';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Try to fetch from DB, fallback to static URLs if DB unavailable
    let dynamicUrls: MetadataRoute.Sitemap = [];

    try {
        await connectDB();

        // Fetch published leaders
        const leaders = await Leader.find({ status: 'published' }).select('slug updatedAt').lean();

        // Fetch published articles  
        const articles = await Article.find({ status: 'published' }).select('slug updatedAt').lean();

        // Fetch published events
        const events = await HistoricalEvent.find({ status: 'published' }).select('slug updatedAt').lean();

        // Convert to sitemap entries
        dynamicUrls = [
            ...leaders.map((leader) => ({
                url: `${BASE_URL}/leaders/${leader.slug}`,
                lastModified: leader.updatedAt ? new Date(leader.updatedAt as unknown as string) : new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.8,
            })),
            ...articles.map((article) => ({
                url: `${BASE_URL}/articles/${article.slug}`,
                lastModified: article.updatedAt ? new Date(article.updatedAt as unknown as string) : new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.7,
            })),
            ...events.map((event) => ({
                url: `${BASE_URL}/events/${event.slug}`,
                lastModified: event.updatedAt ? new Date(event.updatedAt as unknown as string) : new Date(),
                changeFrequency: 'yearly' as const,
                priority: 0.6,
            })),
        ];
    } catch {
        console.log('Could not fetch from database, using static sitemap only');
    }

    // Static pages
    const staticUrls: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/leaders`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/culture`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/religion`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/movements`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/organizations`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/archive`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/timeline`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/history`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/research`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];

    return [...staticUrls, ...dynamicUrls];
}
