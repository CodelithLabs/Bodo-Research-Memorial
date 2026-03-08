import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import RemoteImage from '@/components/RemoteImage';

export const metadata: Metadata = {
  title: 'About – Bodo Research Memorial',
  description: 'Learn about the mission and vision of the Bodo Research Memorial digital archive.',
};

export default function AboutPage() {
    return (
        <section className="container-institutional section-padding">
            <h1 className="text-4xl font-heading mb-6">About the Bodo Research Memorial</h1>
            <p className="mb-4 text-text-secondary">
                This digital heritage platform was conceived to collect, preserve, and share the
                stories, images and research of the Bodo people. The site combines oral histories,
                archival documents, timelines and leader biographies into a free public resource.
            </p>

            <div className="mb-8">
                <a
                    href="https://unsplash.com/photos/0aJQABnhqYA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg"
                >
                    {/* use RemoteImage component for placeholder handling */}
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

            <p className="text-text-secondary">
                The image above is pulled from Unsplash as an example; when you deploy the project you
                can replace this with your own photographs or other resources. Similarly, leader
                profiles include placeholder portraits that update automatically once an
                <code className="bg-background px-1 rounded">imageUrl</code> is provided in the
                <code className="bg-background px-1 rounded">leaders.ts</code> dataset.
            </p>

            <p className="mt-8">
                For more information on how to contribute or cite material, visit our{' '}
                <Link href="/citation" className="text-primary underline">
                    citation guide
                </Link>{' '}
                or{' '}
                <Link href="/research/submit" className="text-primary underline">
                    submit a document
                </Link>.
            </p>
        </section>
    );
}
