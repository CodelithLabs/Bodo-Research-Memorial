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
                    position: 'relative',
                    padding: '60px',
                }}
            >
                <div style={{ color: '#f5f0e8', fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
                    Bodo Leaders Archive
                </div>
                <div style={{ marginTop: 20, color: '#c9882a', fontSize: 28, fontStyle: 'italic' }}>
                    Documenting the visionaries who shaped Bodo history
                </div>
                <div
                    style={{
                        marginTop: 40,
                        display: 'flex',
                        gap: 20,
                        color: '#c9882a',
                        fontSize: 22,
                    }}
                >
                    <span>●</span>
                    <span>●</span>
                    <span>●</span>
                    <span>●</span>
                    <span>●</span>
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
                    Bodo Research Memorial - bodoresearchmemorial.org
                </div>
            </div>
        ),
        size
    );
}
