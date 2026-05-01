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
            <div className="futuristic-shell neon-frame p-6 md:p-10 lg:p-12">
                <span className="section-kicker block mb-4">About the Archive</span>
                <h1 className="hero-title text-4xl md:text-6xl mb-5">{ABOUT_CONTENT.hero.title}</h1>
                <p className="mb-10 text-[#5a5043] text-lg max-w-3xl leading-relaxed">
                    {ABOUT_CONTENT.hero.description}
                </p>

                <div className="mb-10">
                    <a
                        href="https://unsplash.com/photos/0aJQABnhqYA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-card-hover border border-[#9a7a49]/28"
                    >
                        <RemoteImage
                            src="https://images.unsplash.com/photo-1493541010755-6b056d5e03f1?auto=format&fit=crop&w=800&q=80"
                            alt="Traditional Bodo textile pattern via Unsplash"
                            className="w-full h-auto object-cover"
                        />
                    </a>
                    <p className="text-xs text-center text-[#6b6051] mt-2 uppercase tracking-[0.16em]">
                        Photo by{' '}
                        <span className="underline decoration-[#8b6636]/50">
                            <a href="https://unsplash.com/@siderudder" target="_blank" rel="noopener noreferrer">
                                Side Ruder
                            </a>
                        </span>{' '}
                        on Unsplash
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 mt-8">
                    <div className="glass-panel-strong neon-frame p-7">
                        <h2 className="text-2xl font-display font-bold mb-4 text-[#6f4f21]">
                            {ABOUT_CONTENT.mission.title}
                        </h2>
                        <p className="text-[#5b5144] whitespace-pre-line leading-relaxed">
                            {ABOUT_CONTENT.mission.content}
                        </p>
                    </div>

                    <div className="glass-panel-strong neon-frame p-7">
                        <h2 className="text-2xl font-display font-bold mb-4 text-[#6f4f21]">
                            {ABOUT_CONTENT.history.title}
                        </h2>
                        <p className="text-[#5b5144] whitespace-pre-line leading-relaxed">
                            {ABOUT_CONTENT.history.content}
                        </p>
                    </div>
                </div>

                <div className="mt-10 glass-panel p-5 md:p-6">
                    <p className="text-[#544a3d]">
                        For more information on how to contribute or cite material, visit our{' '}
                        <Link href="/citation" className="text-[#6f4f21] underline decoration-[#8b6636]/50">
                            citation guide
                        </Link>{' '}
                        or{' '}
                        <Link
                            href="/research/submit"
                            className="text-[#6f4f21] underline decoration-[#8b6636]/50"
                        >
                            submit a document
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}
