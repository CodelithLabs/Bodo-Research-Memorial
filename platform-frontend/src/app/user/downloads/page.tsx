'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';

export default function DownloadsPage() {
    return (
        <div className="container-app py-8">
            <h1 className="text-3xl font-bold text-surface-100 mb-8">Downloads</h1>
            <div className="text-center py-16">
                <Download className="w-16 h-16 text-surface-600 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-surface-200 mb-2">No downloads yet</h2>
                <p className="text-surface-400">Projects you download will appear here</p>
            </div>
        </div>
    );
}
