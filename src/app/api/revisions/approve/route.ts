/**
 * ============================================
 * Leader Revisions API - Approve Revision
 * ============================================
 * POST /api/revisions/approve
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { connectDB, Leader, LeaderRevision } from '@/models';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { rateLimitAdmin } from '@/lib/ratelimit';

const approveRevisionSchema = z.object({
    revisionId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid ID format'),
});

async function approveRevision(request: NextRequest): Promise<NextResponse> {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
        }

        if ((session.user as { role?: string })?.role !== 'admin') {
            return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
        }

        const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
            ?? request.headers.get('x-real-ip')
            ?? 'unknown';
        const identifier = `${session.user?.email ?? 'admin'}:${ip}`;
        const rateLimit = await rateLimitAdmin.limit(identifier);
        if (!rateLimit.success) {
            const retryAfter = Math.max(1, Math.ceil((rateLimit.reset - Date.now()) / 1000));
            return NextResponse.json(
                { error: 'Too many requests' },
                { status: 429, headers: { 'Retry-After': retryAfter.toString() } }
            );
        }

        await connectDB();

        const body = await request.json();
        const validatedData = approveRevisionSchema.parse(body);

        const revision = await LeaderRevision.findById(validatedData.revisionId);
        if (!revision) {
            return NextResponse.json(
                { error: 'Revision not found' },
                { status: 404 }
            );
        }

        if (revision.status !== 'pending') {
            return NextResponse.json(
                { error: 'Only pending revisions can be approved' },
                { status: 400 }
            );
        }

        const leader = await Leader.findById(revision.leader);
        if (!leader) {
            return NextResponse.json(
                { error: 'Leader not found' },
                { status: 404 }
            );
        }

        const content = revision.content as { biography?: string; location?: { name?: string; latitude?: number; longitude?: number }; photo?: string };
        if (content.biography) {
            leader.biography = content.biography;
        }

        if (content.photo) {
            leader.photo = content.photo;
        }

        if (revision.location || content.location) {
            const location = revision.location ?? content.location;
            leader.location = {
                name: location?.name?.trim() || leader.location?.name,
                latitude: typeof location?.latitude === 'number' ? location.latitude : leader.location?.latitude,
                longitude: typeof location?.longitude === 'number' ? location.longitude : leader.location?.longitude,
            };
        }

        if (revision.sources?.length) {
            leader.sources = Array.from(new Set([...(leader.sources || []), ...revision.sources]));
        }

        await leader.save();

        revision.status = 'approved';
        await revision.save();

        return NextResponse.json({
            message: 'Revision approved and leader updated',
            leader,
            revision,
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.issues },
                { status: 400 }
            );
        }

        console.error('Approve revision error:', error);
        return NextResponse.json(
            { error: 'Failed to approve revision' },
            { status: 500 }
        );
    }
}

export const POST = approveRevision;
