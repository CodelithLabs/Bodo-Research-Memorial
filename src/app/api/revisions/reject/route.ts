/**
 * ============================================
 * Leader Revisions API - Reject Revision
 * ============================================
 * POST /api/revisions/reject
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { connectDB, LeaderRevision } from '@/models';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { rateLimitAdmin } from '@/lib/ratelimit';

const rejectRevisionSchema = z.object({
    revisionId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid ID format'),
    reviewerNote: z.string().min(5, 'Reviewer note is required').max(2000),
});

async function rejectRevision(request: NextRequest): Promise<NextResponse> {
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
        const validatedData = rejectRevisionSchema.parse(body);

        const revision = await LeaderRevision.findById(validatedData.revisionId);
        if (!revision) {
            return NextResponse.json(
                { error: 'Revision not found' },
                { status: 404 }
            );
        }

        if (revision.status !== 'pending') {
            return NextResponse.json(
                { error: 'Only pending revisions can be rejected' },
                { status: 400 }
            );
        }

        revision.status = 'rejected';
        revision.notes = validatedData.reviewerNote;
        await revision.save();

        return NextResponse.json({
            message: 'Revision rejected',
            revision,
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.issues },
                { status: 400 }
            );
        }

        console.error('Reject revision error:', error);
        return NextResponse.json(
            { error: 'Failed to reject revision' },
            { status: 500 }
        );
    }
}

export const POST = rejectRevision;
