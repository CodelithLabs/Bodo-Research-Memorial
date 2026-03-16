'use client';

import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function CreatorProjectsPage() {
    return (
        <div className="container-app py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-surface-100">My Projects</h1>
                <Link href="/creator/upload">
                    <Button leftIcon={<Plus className="w-4 h-4" />}>New Project</Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                        <div className="aspect-video bg-surface-700" />
                        <CardContent className="p-4">
                            <h3 className="font-semibold text-surface-100">Project {i}</h3>
                            <p className="text-sm text-surface-400">Published</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
