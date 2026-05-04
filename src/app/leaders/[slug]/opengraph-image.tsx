import { ImageResponse } from 'next/og';
import { getLeaderBySlug } from '@/data/leaders';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

function getYear(date?: string): string {
    if (!date) return '';
    const [year] = date.split('-');
    return year ?? '';
}

function getInitials(name?: string): string {
    if (!name) return 'BR';
    return name
        .split(' ')
        .filter(Boolean)
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
}

function renderFallback() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(90deg, #0a0e1a 0%, #0f1829 100%)',
                position: 'relative',
                fontFamily: 'serif',
            }}
        >
            <div style={{ color: '#f5f0e8', fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
                Bodo Research Memorial
            </div>
            <div style={{ marginTop: 18, color: '#c9882a', fontSize: 28, fontStyle: 'italic' }}>
                Preserving Bodo History & Culture
            </div>
            <div
                style={{
                    position: 'absolute',
                    bottom: 36,
                    width: '100%',
                    textAlign: 'center',
                    color: '#4a5568',
                    fontSize: 16,
                    fontFamily: 'sans-serif',
                }}
            >
                bodoresearchmemorial.org
            </div>
        </div>
    );
}

function renderLeaderCard(leader: { name: string; birthDate?: string; deathDate?: string; movement?: string; region?: string; imageUrl?: string }) {
    const birthYear = getYear(leader.birthDate);
    const deathYear = getYear(leader.deathDate);
    const years = birthYear || deathYear ? [birthYear, deathYear].filter(Boolean).join(' - ') : '';
    const label = leader.movement || leader.region || '';
    const initials = getInitials(leader.name);

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'linear-gradient(90deg, #0a0e1a 0%, #0f1829 100%)',
                position: 'relative',
                padding: '64px 72px',
                fontFamily: 'serif',
                color: '#f5f0e8',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    right: 70,
                    top: 70,
                    width: 220,
                    height: 2,
                    backgroundColor: '#c9882a',
                    transform: 'rotate(-25deg)',
                    opacity: 0.7,
                }}
            />

            <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                <div
                    style={{
                        width: '55%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
                        {leader.name}
                    </div>
                    {years && (
                        <div style={{ marginTop: 16, fontSize: 24, fontStyle: 'italic', color: '#c9882a' }}>
                            {years}
                        </div>
                    )}
                    {label && (
                        <div
                            style={{
                                marginTop: 12,
                                fontSize: 20,
                                textTransform: 'uppercase',
                                letterSpacing: '0.22em',
                                color: '#8899aa',
                                fontFamily: 'sans-serif',
                            }}
                        >
                            {label}
                        </div>
                    )}
                    <div style={{ marginTop: 16, width: 120, height: 2, backgroundColor: '#c9882a' }} />

                    <div style={{ marginTop: 'auto' }}>
                        <div style={{ color: '#c9882a', fontSize: 18 }}>Bodo Research Memorial</div>
                        <div
                            style={{
                                color: '#4a5568',
                                fontSize: 14,
                                marginTop: 6,
                                fontFamily: 'sans-serif',
                            }}
                        >
                            bodoresearchmemorial.org
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        width: '45%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}
                >
                    {leader.imageUrl ? (
                        <div
                            style={{
                                width: 280,
                                height: 280,
                                borderRadius: '50%',
                                border: '3px solid #c9882a',
                                overflow: 'hidden',
                                backgroundColor: '#0a0e1a',
                            }}
                        >
                            <img
                                src={leader.imageUrl}
                                alt={`${leader.name} portrait`}
                                width={280}
                                height={280}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    ) : (
                        <div
                            style={{
                                width: 280,
                                height: 280,
                                borderRadius: '50%',
                                border: '3px solid #c9882a',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#0b1323',
                                color: '#c9882a',
                                fontSize: 80,
                                fontWeight: 700,
                            }}
                        >
                            {initials}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default async function Image({ params }: { params: { slug: string } }) {
    try {
        const leader = getLeaderBySlug(params.slug);
        if (!leader) {
            return new ImageResponse(renderFallback(), size);
        }
        return new ImageResponse(renderLeaderCard(leader), size);
    } catch {
        return new ImageResponse(renderFallback(), size);
    }
}
