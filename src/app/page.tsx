import type { Metadata } from 'next';
import { leaders } from '@/data/leaders';
import HomeLeaderArchiveClient from './HomeLeaderArchiveClient';

export const metadata: Metadata = {
  metadataBase: new URL('https://bodo-research-memorial.org'),
  title: 'Bodo Research Memorial – Bodo Leaders Archive',
  description: 'A digital research platform preserving verified biographies and sources for Bodo leaders who sacrificed their lives for the Motherland.',
  openGraph: {
    title: 'Bodo Research Memorial',
    description: 'Explore verified biographies and sources on Bodo leaders who sacrificed for the Motherland.',
    url: 'https://bodo-research-memorial.org',
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
