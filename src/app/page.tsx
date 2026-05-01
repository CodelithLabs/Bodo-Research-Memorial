export const revalidate = 3600;
export const dynamicParams = true;

import type { Metadata } from 'next';
import { leaders } from '@/data/leaders';
import HomeLeaderArchiveClient from './HomeLeaderArchiveClient';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://bodo-research-memorial.org'),
  title: 'Bodo Research Memorial',
  description: 'A digital scholarly archive documenting the history, leadership, culture, and movements of the Bodo people of Northeast India.',
  openGraph: {
    title: 'Bodo Research Memorial',
    description: 'Explore the Bodo archive through verified biographies, source material, and editorial knowledge systems.',
    url: process.env.NEXT_PUBLIC_APP_URL ?? 'https://bodo-research-memorial.org',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bodo Research Memorial - Digital Heritage Archive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function HomePage() {
  return <HomeLeaderArchiveClient leaders={leaders} />;
}
