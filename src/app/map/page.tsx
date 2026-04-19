'use client';

import dynamic from 'next/dynamic';

const MemorialMap = dynamic(() => import('@/components/MemorialMap'), { ssr: false });

export default function MemorialMapPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="bg-primary text-white py-16">
                <div className="container-institutional px-4 md:px-6">
                    <p className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-3">Geospatial Archive</p>
                    <h1 className="text-3xl md:text-4xl font-bold">Memorial Map</h1>
                    <p className="text-white/70 max-w-2xl mt-4">
                        Explore the locations tied to Bodo leaders and martyrs. Each marker links to the full archive entry.
                    </p>
                </div>
            </section>

            <section className="py-10">
                <div className="container-institutional px-4 md:px-6">
                    <MemorialMap />
                </div>
            </section>
        </div>
    );
}
