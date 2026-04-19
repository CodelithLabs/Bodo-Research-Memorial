import { MetadataRoute } from 'next';
import { connectDB, Leader } from '@/models';
import { getAllLeaders } from '@/data/leaders';
import { ALL_CULTURE_ARTICLES } from '@/data/culture';
import { ALL_RELIGION_ARTICLES } from '@/data/religion';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://bodo-research-memorial.org';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Try to fetch from DB, fallback to static URLs if DB unavailable
    let dynamicUrls: MetadataRoute.Sitemap = [];

    try {
        await connectDB();

        // Fetch published leaders
        const leaders = await Leader.find({ status: 'published' }).select('slug updatedAt').lean();

        // Convert to sitemap entries
        dynamicUrls = [
            ...leaders.map((leader) => ({
                url: `${BASE_URL}/leaders/${leader.slug}`,
                lastModified: leader.updatedAt ? new Date(leader.updatedAt as unknown as string) : new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.8,
            })),
        ];
    } catch {
        console.log('Could not fetch from database, using static sitemap only');
    }

    const staticLeaders = getAllLeaders();
    const staticArticles = ALL_CULTURE_ARTICLES;
    const staticReligion = ALL_RELIGION_ARTICLES;

    const staticLeaderUrls = staticLeaders.map((leader) => ({
        url: `${BASE_URL}/leaders/${leader.id}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const staticArticleUrls = staticArticles.map((article) => ({
        url: `${BASE_URL}/culture/${article.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const staticReligionUrls = staticReligion.map((article) => ({
        url: `${BASE_URL}/religion/${article.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

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
            url: `${BASE_URL}/culture/festivals`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.6,
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
            url: `${BASE_URL}/research/papers`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/research/submit`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/knowledge-graph`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/map`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/tribute`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/search`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/privacy`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${BASE_URL}/terms`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
    ];

    return [
        ...staticUrls,
        ...staticLeaderUrls,
        ...staticArticleUrls,
        ...staticReligionUrls,
        ...dynamicUrls,
    ];
}
