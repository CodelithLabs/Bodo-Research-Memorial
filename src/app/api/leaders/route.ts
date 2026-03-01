/**
 * ============================================
 * Leaders API - CRUD Operations
 * ============================================
 * GET /api/leaders - List all leaders (public)
 * POST /api/leaders - Create new leader (auth required)
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import slugify from 'slugify';
import { connectDB, Leader } from '@/models';
import { withAuth } from '@/lib/auth';

// Validation schema for creating leader
const createLeaderSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(200, 'Name cannot exceed 200 characters'),
    photo: z.string().optional(),
    birthDate: z.string().optional(),
    deathDate: z.string().optional(),
    birthPlace: z.string().max(200).optional(),
    deathPlace: z.string().max(200).optional(),
    region: z.enum(['assam', 'north-bengal', 'darjeeling', 'bhutan', 'other']).optional(),
    shortBio: z.string().max(500).optional(),
    biography: z.string().min(10, 'Biography must be at least 10 characters'),
    contributions: z.array(z.string()).optional(),
    timeline: z.array(z.object({
        year: z.number(),
        title: z.string(),
        description: z.string(),
    })).optional(),
    references: z.array(z.object({
        title: z.string(),
        author: z.string().optional(),
        year: z.number().optional(),
        publication: z.string().optional(),
        link: z.string().url().optional(),
    })).optional(),
    tags: z.array(z.string()).optional(),
    status: z.enum(['draft', 'review', 'published', 'archived']).default('draft'),
});

/**
 * GET /api/leaders
 * List all published leaders with optional filters
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);

        // Parse query parameters
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '12');
        const region = searchParams.get('region');
        const featured = searchParams.get('featured') === 'true';
        const search = searchParams.get('search');
        const tag = searchParams.get('tag');
        const sort = searchParams.get('sort') || '-createdAt';

        // Build query
        const query: Record<string, unknown> = { status: 'published' };

        if (region) query.region = region;
        if (featured) query.featured = true;
        if (tag) query.tags = tag;
        if (search) {
            query.$text = { $search: search };
        }

        // Execute query with pagination
        const skip = (page - 1) * limit;

        const [leaders, total] = await Promise.all([
            Leader.find(query)
                .sort(sort)
                .skip(skip)
                .limit(limit)
                .populate('author', 'name')
                .lean(),
            Leader.countDocuments(query),
        ]);

        return NextResponse.json({
            leaders,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error('Get leaders error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch leaders' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/leaders
 * Create a new leader (authenticated users)
 */
async function createLeader(request: NextRequest, user: jwt.JwtPayload): Promise<NextResponse> {
    try {
        await connectDB();

        const body = await request.json();
        const validatedData = createLeaderSchema.parse(body);

        // Generate unique slug
        const baseSlug = slugify(validatedData.name, { lower: true });
        let slug = baseSlug;
        let counter = 1;

        while (await Leader.findOne({ slug })) {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }

        // Get user ID from token
        const userId = user.id as string;

        // Create leader
        const leader = await Leader.create({
            ...validatedData,
            slug,
            author: userId,
            // Convert date strings to Date objects
            birthDate: validatedData.birthDate ? new Date(validatedData.birthDate) : undefined,
            deathDate: validatedData.deathDate ? new Date(validatedData.deathDate) : undefined,
        });

        return NextResponse.json(
            { message: 'Leader created successfully', leader },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.issues },
                { status: 400 }
            );
        }

        console.error('Create leader error:', error);
        return NextResponse.json(
            { error: 'Failed to create leader' },
            { status: 500 }
        );
    }
}

// Apply authentication middleware
export const POST = withAuth(createLeader);
