'use client';

import { DollarSign } from 'lucide-react';

export default function RevenuePage() {
    return (
        <div className="container-app py-8">
            <h1 className="text-3xl font-bold text-surface-100 mb-8">Revenue</h1>
            <div className="text-center py-16">
                <DollarSign className="w-16 h-16 text-surface-600 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-surface-200 mb-2">Revenue tracking coming soon</h2>
                <p className="text-surface-400">Track your earnings and payouts</p>
            </div>
        </div>
    );
}
