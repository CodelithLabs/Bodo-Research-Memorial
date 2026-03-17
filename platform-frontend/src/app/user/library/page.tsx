'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

export default function LibraryPage() {
    const libraryItems = [1, 2, 3];

    return (
        <div className="container-app py-8">
            <h1 className="text-3xl font-bold text-surface-100 mb-8">My Library</h1>

            {libraryItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {libraryItems.map((i) => (
                        <Link key={i} href={`/project/${i}`}>
                            <Card className="overflow-hidden hover:border-primary-500 transition-colors">
                                <div className="aspect-video bg-surface-700" />
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-surface-100">Project {i}</h3>
                                    <p className="text-sm text-surface-400">Owned</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <ShoppingBag className="w-16 h-16 text-surface-600 mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-surface-200 mb-2">Your library is empty</h2>
                    <p className="text-surface-400 mb-6">Start exploring projects to add to your library</p>
                    <Link href="/explore" className="btn-primary">Explore Projects</Link>
                </div>
            )}
        </div>
    );
}
