import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundImage: 'linear-gradient(90deg, #0a0e1a 0%, #0f1829 100%)',
                    fontFamily: 'serif',
                    color: '#f5f0e8',
                    padding: '60px',
                    position: 'relative',
                }}
            >
                <div style={{ width: 200, height: 2, backgroundColor: '#c9882a', marginBottom: 28 }} />
                <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.1 }}>
                    Bodo Research Memorial
                </div>
                <div style={{ marginTop: 18, color: '#c9882a', fontSize: 28, fontStyle: 'italic' }}>
                    A Living Archive of Bodo History & Culture
                </div>
                <div
                    style={{
                        marginTop: 48,
                        fontSize: 18,
                        color: '#d5dde6',
                        fontFamily: 'sans-serif',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                    }}
                >
                    Leaders - Movements - Organizations
                </div>
                <div style={{ width: 200, height: 2, backgroundColor: '#c9882a', marginTop: 32 }} />
                <div
                    style={{
                        position: 'absolute',
                        bottom: 24,
                        width: '100%',
                        textAlign: 'center',
                        color: '#4a5568',
                        fontSize: 14,
                        fontFamily: 'sans-serif',
                    }}
                >
                    bodoresearchmemorial.org
                </div>
            </div>
        ),
        size
    );
}
