export const revalidate = 3600;
export const dynamicParams = true;

import type { Metadata } from 'next';
import LeadersClient from './LeadersClient';

export const metadata: Metadata = {
    title: 'Leaders Archive | Bodo Research Memorial',
    description: 'Explore the visionary leaders who shaped Bodo history, culture, and political movements.',
    openGraph: {
        title: 'Leaders Archive | Bodo Research Memorial',
        description: 'Explore the visionary leaders who shaped Bodo history, culture, and political movements.',
        type: 'website',
    },
};

export default function LeadersPage() {
    return <LeadersClient />;
}
