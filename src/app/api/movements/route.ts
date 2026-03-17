/**
 * ============================================
 * Movements API - CRUD Operations
 * ============================================
 * GET /api/movements - List all movements (public)
 * POST /api/movements - Create new movement (auth required)
 * 
 * Uses MongoDB if available, falls back to local JSON data
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import slugify from 'slugify';
import { connectDB, Movement } from '@/models';
import { withAuth } from '@/lib/auth';
import { getMovements, getMovement } from '@/data/movements';

// Validation schema for creating movement
const createMovementSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(200, 'Name cannot exceed 200 characters'),
    alternativeNames: z.array(z.string()).optional(),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    objectives: z.array(z.string()).optional(),
    startYear: z.number().min(1800).max(2100).optional(),
    endYear: z.number().min(1800).max(2100).optional(),
    ongoing: z.boolean().default(false),
    type: z.enum(['political', 'social', 'cultural', 'religious', 'armed', 'diplomatic']),
    movementStatus: z.enum(['active', 'ceased', 'achieved', 'suspended']).default('active'),
    keyEvents: z.array(z.object({
        year: z.number(),
        title: z.string(),
        description: z.string(),
    })).optional(),
    leaders: z.array(z.string()).optional(),
    organizations: z.array(z.string()).optional(),
    relatedMovements: z.array(z.string()).optional(),
    outcomes: z.array(z.string()).optional(),
    achievements: z.array(z.string()).optional(),
    challenges: z.array(z.string()).optional(),
    region: z.array(z.string()).optional(),
    imageUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    status: z.enum(['draft', 'review', 'published', 'archived']).default('draft'),
});

/**
 * GET /api/movements
 * List all published movements with optional filters
 * Falls back to local data if MongoDB is not available
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        const { searchParams } = new URL(request.url);

        // Parse query parameters
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '12');
        const type = searchParams.get('type');
        const featured = searchParams.get('featured') === 'true';
        const search = searchParams.get('search');
        const slug = searchParams.get('slug');
        const tag = searchParams.get('tag');
        const yearFrom = searchParams.get('yearFrom');
        const yearTo = searchParams.get('yearTo');

        // If slug is provided, return single item
        if (slug) {
            const item = getMovement(slug);
            if (item) {
                return NextResponse.json(item);
            }
            // Try MongoDB
            try {
                await connectDB();
                const mongoItem = await Movement.findOne({ slug, status: 'published' });
                if (mongoItem) {
                    return NextResponse.json(mongoItem);
                }
            } catch {
                // MongoDB not available
            }
            return NextResponse.json({ error: 'Movement not found' }, { status: 404 });
        }

        // Try to use MongoDB first
        try {
            await connectDB();

            // Build query
            const query: Record<string, unknown> = { status: 'published' };

            if (type) query.type = type;
            if (featured) query.featured = true;
            if (tag) query.tags = tag;
            if (search) {
                query.$or = [
                    { name: { $regex: search, $options: 'i' } },
                    { description: { $regex: search, $options: 'i' } },
                ];
            }

            // Year range filter
            if (yearFrom || yearTo) {
                query.startYear = {};
                if (yearFrom) (query.startYear as Record<string, number>).$gte = parseInt(yearFrom);
                if (yearTo) (query.startYear as Record<string, number>).$lte = parseInt(yearTo);
            }

            // Execute query with pagination
            const skip = (page - 1) * limit;

            const [movements, total] = await Promise.all([
                Movement.find(query)
                    .sort('-createdAt')
                    .skip(skip)
                    .limit(limit)
                    .populate('leaders', 'name slug')
                    .populate('organizations', 'name slug acronym')
                    .lean(),
                Movement.countDocuments(query),
            ]);

            return NextResponse.json({
                movements,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit),
                },
            });
        } catch {
            // MongoDB not available, use local data
            const result = getMovements({
                type: type || undefined,
                search: search || undefined,
                featured,
                page,
                limit,
            });

            return NextResponse.json({
                movements: result.movements,
                pagination: result.pagination,
                _dataSource: 'local',
            });
        }
    } catch (error) {
        console.error('Get movements error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch movements' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/movements
 * Create a new movement (authenticated users)
 */
async function createMovement(request: NextRequest, _user: jwt.JwtPayload): Promise<NextResponse> {
    try {
        await connectDB();

        const body = await request.json();
        const validatedData = createMovementSchema.parse(body);

        // Generate unique slug
        const baseSlug = slugify(validatedData.name, { lower: true });
        let slug = baseSlug;
        let counter = 1;

        while (await Movement.findOne({ slug })) {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }

        // Create movement
        const movement = await Movement.create({
            ...validatedData,
            slug,
        });

        return NextResponse.json(
            { message: 'Movement created successfully', movement },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.issues },
                { status: 400 }
            );
        }

        console.error('Create movement error:', error);
        return NextResponse.json(
            { error: 'Failed to create movement' },
            { status: 500 }
        );
    }
}

// Apply authentication middleware
export const POST = withAuth(createMovement);
