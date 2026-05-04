export const revalidate = 3600;
export const dynamicParams = true;

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ALL_LEADERS, getLeaderBySlug, getRelatedLeaders } from '@/data/leaders';
import { LeaderJsonLd } from '@/components/LeaderJsonLd';
import LeaderProfileClient from './LeaderProfileClient';

export async function generateStaticParams() {
    return ALL_LEADERS.map((leader) => ({ slug: leader.id }));
}

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const { slug } = params;
    const leader = getLeaderBySlug(slug);
    if (!leader) {
        return { title: 'Leader Not Found | Bodo Research Memorial' };
    }
    const description = leader.biography?.slice(0, 155) ?? `Learn about ${leader.name}, a key figure in Bodo history.`;
    return {
        title: `${leader.name} | Bodo Research Memorial`,
        description,
        openGraph: {
            title: leader.name,
            description: leader.biography?.slice(0, 155) ?? '',
            type: 'profile',
        },
    };
}

export default async function LeaderProfilePage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const leader = getLeaderBySlug(slug);
    if (!leader) notFound();

    const relatedLeaders = getRelatedLeaders(leader);

    return (
        <>
            <LeaderJsonLd leader={leader} />
            <LeaderProfileClient leader={leader} relatedLeaders={relatedLeaders} />
        </>
    );
}
