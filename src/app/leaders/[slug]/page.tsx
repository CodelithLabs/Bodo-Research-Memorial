'use client';

import React, { useState } from 'react';

import { useParams } from 'next/navigation';
import Link from 'next/link';
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
    const leader = getLeaderBySlug(params.slug);
    if (!leader) return {};
    return {
        title: `${leader.name} | Bodo Research Memorial`,
        description: leader.biography.slice(0, 155) + '...',
        openGraph: { title: leader.name, description: leader.title },
    };
}

export default function LeaderProfilePage({ params }: { params: { slug: string } }) {
    const leader = getLeaderBySlug(params.slug);
    if (!leader) notFound();

    const relatedLeaders = getRelatedLeaders(leader);

    return (
        <>
            <LeaderJsonLd leader={leader} />
            <LeaderProfileClient leader={leader} relatedLeaders={relatedLeaders} />
        </>
    );
}
