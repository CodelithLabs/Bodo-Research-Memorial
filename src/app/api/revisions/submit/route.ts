/**
 * ============================================
 * Leader Revisions API - Submit Edit
 * ============================================
 * POST /api/revisions/submit
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import { connectDB, Leader, LeaderRevision, Source } from '@/models';
import { withAuth } from '@/lib/auth';
import { rateLimitRevisions } from '@/lib/ratelimit';

const objectIdSchema = z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid ID format');

const submitRevisionSchema = z.object({
    leaderId: objectIdSchema,
    biography: z.string().min(10, 'Biography must be at least 10 characters'),
    photo: z.string().url().optional(),
    sources: z.array(objectIdSchema).optional(),
    location: z.object({
        name: z.string().max(200).optional(),
        latitude: z.number().min(-90).max(90).optional(),
        longitude: z.number().min(-180).max(180).optional(),
    }).optional(),
    notes: z.string().max(2000).optional(),
}).refine((data) => {
    if (!data.location?.name) return true;
    return typeof data.location.latitude === 'number' && typeof data.location.longitude === 'number';
}, {
    message: 'Latitude and longitude are required when location name is provided',
    path: ['location'],
});

async function submitRevision(request: NextRequest, user: jwt.JwtPayload): Promise<NextResponse> {
    try {
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
            ?? request.headers.get('x-real-ip')
            ?? 'unknown';
        const identifier = `${user.id ?? 'editor'}:${ip}`;
        const rateLimit = await rateLimitRevisions.limit(identifier);
        if (!rateLimit.success) {
            const retryAfter = Math.max(1, Math.ceil((rateLimit.reset - Date.now()) / 1000));
            return NextResponse.json(
                { error: 'Too many requests' },
                { status: 429, headers: { 'Retry-After': retryAfter.toString() } }
            );
        }

        await connectDB();

        const body = await request.json();
        const validatedData = submitRevisionSchema.parse(body);

        const leader = await Leader.findById(validatedData.leaderId);
        if (!leader) {
            return NextResponse.json(
                { error: 'Leader not found' },
                { status: 404 }
            );
        }

        const sourceIds: string[] = [];
        if (validatedData.sources?.length) {
            const uniqueSources = Array.from(new Set(validatedData.sources));
            const existingSources = await Source.find({ _id: { $in: uniqueSources } }).select('_id');
            sourceIds.push(...existingSources.map((source) => source._id.toString()));
        }

        const revision = await LeaderRevision.create({
            leader: leader._id,
            content: {
                biography: validatedData.biography,
                location: validatedData.location,
                photo: validatedData.photo,
            },
            editor: user.id,
            status: 'pending',
            sources: sourceIds,
            location: validatedData.location,
            notes: validatedData.notes,
        });

        return NextResponse.json(
            { message: 'Revision submitted for review', revision },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.issues },
                { status: 400 }
            );
        }

        console.error('Submit revision error:', error);
        return NextResponse.json(
            { error: 'Failed to submit revision' },
            { status: 500 }
        );
    }
}

export const POST = withAuth(submitRevision, 'editor');
