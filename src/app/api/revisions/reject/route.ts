/**
 * ============================================
 * Leader Revisions API - Reject Revision
 * ============================================
 * POST /api/revisions/reject
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { connectDB, LeaderRevision, AuditLog } from '@/models';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';
import { rateLimitAdmin } from '@/lib/ratelimit';
import { validateCsrfToken } from '@/lib/csrf';

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

        const body = await request.json();
        const { csrfToken, ...payload } = body;

        const csrfValid = await validateCsrfToken(csrfToken);
        if (!csrfValid) {
            return NextResponse.json({ error: 'Invalid request' }, { status: 403 });
        }

        await connectDB();

        const validatedData = rejectRevisionSchema.parse(payload);

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

        await AuditLog.create({
            action: 'reject_revision',
            performedBy: (session.user as { id?: string })?.id ?? revision.editor?.toString(),
            targetId: revision._id.toString(),
            ip,
            metadata: { leaderId: revision.leader?.toString() },
        });

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
