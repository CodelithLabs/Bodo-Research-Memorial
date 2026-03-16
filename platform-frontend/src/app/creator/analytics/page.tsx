'use client';

import { BarChart3 } from 'lucide-react';

export default function AnalyticsPage() {
    return (
        <div className="container-app py-8">
            <h1 className="text-3xl font-bold text-surface-100 mb-8">Analytics</h1>
            <div className="text-center py-16">
                <BarChart3 className="w-16 h-16 text-surface-600 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-surface-200 mb-2">Analytics coming soon</h2>
                <p className="text-surface-400">Detailed analytics for your projects</p>
            </div>
        </div>
    );
}
