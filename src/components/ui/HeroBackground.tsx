'use client';

export default function HeroBackground() {
    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                background:
                    'radial-gradient(circle at 18% 18%, rgba(184,134,59,0.14), transparent 24%), radial-gradient(circle at 82% 14%, rgba(23,59,49,0.16), transparent 22%), linear-gradient(180deg, rgba(248,243,232,0.96), rgba(242,233,218,0.96))',
            }}
        />
    );
}
