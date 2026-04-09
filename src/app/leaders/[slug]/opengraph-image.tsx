import { ImageResponse } from 'next/og';
import { getLeaderBySlug } from '@/data/leaders';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };

export default async function Image({ params }: { params: { slug: string } }) {
  const leader = getLeaderBySlug(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#0F1629',
          alignItems: 'center',
          padding: '60px',
          fontFamily: 'sans-serif',
          gap: '48px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <p style={{ color: '#A78BFA', fontSize: 28, margin: 0 }}>
            Bodo Research Memorial
          </p>
          <h1 style={{ color: 'white', fontSize: 64, margin: '16px 0' }}>
            {leader?.name ?? 'Leader Profile'}
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: 28, margin: 0 }}>
            {leader?.title ?? ''} {leader?.era ? `· ${leader.era}` : ''}
          </p>
        </div>
      </div>
    ),
    size
  );
}
