import { MetadataRoute } from 'next';
import { getAllLeaders } from '@/data/leaders';
import { archiveItems } from '@/data/archive';
import { ALL_CULTURE_ARTICLES } from '@/data/culture';
import { ALL_RELIGION_ARTICLES } from '@/data/religion';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://bodo-research-memorial.org';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticLeaders = getAllLeaders();
    const staticArchiveItems = archiveItems.filter((item) => item.status === 'published');
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

    const staticArchiveUrls = staticArchiveItems.map((item) => ({
        url: `${BASE_URL}/archive/${item.slug}`,
        lastModified: new Date(item.createdAt),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
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
        ...staticArchiveUrls,
        ...staticArticleUrls,
        ...staticReligionUrls,
    ];
}
