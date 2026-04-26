import { ImageResponse } from 'next/og';
import { getLeaderBySlug } from '@/data/leaders';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };

export default async function Image({ params }: { params: { slug: string } }) {
  const leader = getLeaderBySlug(params.slug);
  const imageUrl = leader?.imageUrl ?? null;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0f1629 0%, #141b33 60%, #0b1222 100%)',
          alignItems: 'center',
          padding: '60px',
          fontFamily: 'sans-serif',
          gap: '48px',
        }}
      >
        {imageUrl ? (
          <div
            style={{
              width: 260,
              height: 260,
              borderRadius: 24,
              overflow: 'hidden',
              border: '2px solid rgba(255, 255, 255, 0.12)',
              background: '#0b0f1f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={imageUrl}
              alt={leader?.name ? `${leader.name} portrait` : 'Leader portrait'}
              width={260}
              height={260}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ) : (
          <div
            style={{
              width: 260,
              height: 260,
              borderRadius: 24,
              border: '2px dashed rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.4)',
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            Portrait
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <p style={{ color: '#A78BFA', fontSize: 28, margin: 0 }}>
            Bodo Research Memorial
          </p>
          <h1 style={{ color: 'white', fontSize: 64, margin: '16px 0' }}>
            {leader?.name ?? 'Leader Profile'}
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: 28, margin: 0 }}>
            {leader?.title ?? 'Bodo Leader'} {leader?.era ? `· ${leader.era}` : ''}
          </p>
        </div>
      </div>
    ),
    size
  );
}
