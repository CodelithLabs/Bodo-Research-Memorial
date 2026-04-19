import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import RemoteImage from '@/components/RemoteImage';
import { ABOUT_CONTENT } from '@/data/about';

export const metadata: Metadata = {
    title: 'About – Bodo Research Memorial',
    description: 'Learn about the mission and vision of the Bodo Research Memorial digital archive.',
};

export default function AboutPage() {
    return (
        <section className="container-institutional section-padding">
            <div className="futuristic-shell neon-frame p-6 md:p-10">
            <span className="section-kicker block mb-4">About the archive</span>
            <h1 className="hero-title text-4xl md:text-6xl mb-6">{ABOUT_CONTENT.hero.title}</h1>
            <p className="mb-8 text-cream/65 text-lg max-w-3xl leading-relaxed">
                {ABOUT_CONTENT.hero.description}
            </p>

            <div className="mb-10">
                <a
                    href="https://unsplash.com/photos/0aJQABnhqYA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-card-hover border border-cream/10"
                >
                    <RemoteImage
                        src="https://images.unsplash.com/photo-1493541010755-6b056d5e03f1?auto=format&fit=crop&w=800&q=80"
                        alt="Traditional Bodo textile pattern via Unsplash"
                        className="w-full h-auto object-cover"
                    />
                </a>
                <p className="text-xs text-center text-cream/35 mt-2 uppercase tracking-[0.18em]">
                    Photo by{' '}
                    <span className="underline decoration-amber-500/40">
                        <a href="https://unsplash.com/@siderudder" target="_blank" rel="noopener noreferrer">
                            Side Ruder
                        </a>
                    </span>{' '}
                    on Unsplash
                </p>
            </div>

            <div className="my-12 p-8 glass-panel-strong neon-frame">
                <h2 className="text-2xl font-display font-bold mb-4 text-amber-300">{ABOUT_CONTENT.mission.title}</h2>
                <p className="text-cream/65 whitespace-pre-line leading-relaxed">
                    {ABOUT_CONTENT.mission.content}
                </p>
            </div>

            <div className="my-12 p-8 glass-panel-strong neon-frame">
                <h2 className="text-2xl font-display font-bold mb-4 text-amber-300">{ABOUT_CONTENT.history.title}</h2>
                <p className="text-cream/65 whitespace-pre-line leading-relaxed">
                    {ABOUT_CONTENT.history.content}
                </p>
            </div>

            <p className="mt-8 text-cream/65">
                For more information on how to contribute or cite material, visit our{' '}
                <Link href="/citation" className="text-amber-300 underline decoration-amber-300/40">
                    citation guide
                </Link>{' '}
                or{' '}
                <Link href="/research/submit" className="text-amber-300 underline decoration-amber-300/40">
                    submit a document
                </Link>
                .
            </p>
            </div>
        </section>
    );
}
