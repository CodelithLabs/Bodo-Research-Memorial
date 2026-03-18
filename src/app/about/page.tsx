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
            <h1 className="text-4xl font-heading mb-6">{ABOUT_CONTENT.hero.title}</h1>
            <p className="mb-4 text-text-secondary">
                {ABOUT_CONTENT.hero.description}
            </p>

            <div className="mb-8">
                <a
                    href="https://unsplash.com/photos/0aJQABnhqYA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg"
                >
                    <RemoteImage
                        src="https://images.unsplash.com/photo-1493541010755-6b056d5e03f1?auto=format&fit=crop&w=800&q=80"
                        alt="Traditional Bodo textile pattern via Unsplash"
                        className="w-full h-auto object-cover"
                    />
                </a>
                <p className="text-xs text-center text-text-muted mt-2">
                    Photo by{' '}
                    <span className="underline">
                        <a href="https://unsplash.com/@siderudder" target="_blank" rel="noopener noreferrer">
                            Side Ruder
                        </a>
                    </span>{' '}
                    on Unsplash
                </p>
            </div>

            <div className="my-12 p-8 bg-primary/5 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">{ABOUT_CONTENT.mission.title}</h2>
                <p className="text-text-secondary whitespace-pre-line">
                    {ABOUT_CONTENT.mission.content}
                </p>
            </div>

            <div className="my-12 p-8 bg-white rounded-lg border border-divider">
                <h2 className="text-2xl font-bold mb-4">{ABOUT_CONTENT.history.title}</h2>
                <p className="text-text-secondary whitespace-pre-line">
                    {ABOUT_CONTENT.history.content}
                </p>
            </div>

            <p className="mt-8">
                For more information on how to contribute or cite material, visit our{' '}
                <Link href="/citation" className="text-primary underline">
                    citation guide
                </Link>{' '}
                or{' '}
                <Link href="/research/submit" className="text-primary underline">
                    submit a document
                </Link>
                .
            </p>
        </section>
    );
}
