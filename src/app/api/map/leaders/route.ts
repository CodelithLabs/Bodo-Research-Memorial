/**
 * ============================================
 * Memorial Map API - Leaders with Locations
 * ============================================
 * GET /api/map/leaders
 */

import { NextResponse } from 'next/server';
import { connectDB, Leader } from '@/models';

export async function GET(): Promise<NextResponse> {
    try {
        await connectDB();

        const leaders = await Leader.find({
            status: 'published',
            'location.latitude': { $exists: true, $ne: null },
            'location.longitude': { $exists: true, $ne: null },
        })
            .select('name slug photo location')
            .lean();

        const payload = leaders.map((leader) => ({
            id: leader._id.toString(),
            name: leader.name,
            slug: leader.slug,
            photo: leader.photo ?? null,
            location: leader.location,
        }));

        return NextResponse.json({ leaders: payload });
    } catch (error) {
        console.error('Map leaders error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch map leaders' },
            { status: 500 }
        );
    }
}
