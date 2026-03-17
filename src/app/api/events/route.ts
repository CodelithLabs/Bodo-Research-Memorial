/**
 * ============================================
 * Historical Events API - CRUD Operations
 * ============================================
 * GET /api/events - List all events (public)
 * POST /api/events - Create new event (auth required)
 * 
 * Uses MongoDB if available, falls back to local JSON data
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import slugify from 'slugify';
import { connectDB, HistoricalEvent } from '@/models';
import { withAuth } from '@/lib/auth';
import { getEvents, getEvent } from '@/data/events';

// Validation schema for creating event
const createEventSchema = z.object({
    title: z.string()
        .min(2, 'Title must be at least 2 characters')
        .max(300, 'Title cannot exceed 300 characters'),
    date: z.string().transform(str => new Date(str)),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    significance: z.string().min(10, 'Significance must be at least 10 characters'),
    type: z.enum(['political', 'cultural', 'religious', 'social', 'economic', 'educational', 'conflict', 'achievement', 'memorial']),
    category: z.string().min(1, 'Category is required'),
    location: z.object({
        place: z.string().optional(),
        district: z.string().optional(),
        state: z.string().optional(),
        region: z.string().optional(),
    }).optional(),
    participants: z.object({
        leaders: z.array(z.string()).optional(),
        organizations: z.array(z.string()).optional(),
        groups: z.array(z.string()).optional(),
    }).optional(),
    movements: z.array(z.string()).optional(),
    outcomes: z.array(z.string()).optional(),
    relatedEvents: z.array(z.string()).optional(),
    media: z.object({
        images: z.array(z.string()).optional(),
        videos: z.array(z.string()).optional(),
        documents: z.array(z.string()).optional(),
    }).optional(),
    tags: z.array(z.string()).optional(),
    imageUrl: z.string().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['draft', 'review', 'published', 'archived']).default('draft'),
});

/**
 * GET /api/events
 * List all published events with optional filters
 * Falls back to local data if MongoDB is not available
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        const { searchParams } = new URL(request.url);

        // Parse query parameters
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '12');
        const type = searchParams.get('type');
        const category = searchParams.get('category');
        const featured = searchParams.get('featured') === 'true';
        const search = searchParams.get('search');
        const slug = searchParams.get('slug');
        const yearFrom = searchParams.get('yearFrom');
        const yearTo = searchParams.get('yearTo');

        // If slug is provided, return single item
        if (slug) {
            const item = getEvent(slug);
            if (item) {
                return NextResponse.json(item);
            }
            // Try MongoDB
            try {
                await connectDB();
                const mongoItem = await HistoricalEvent.findOne({ slug, status: 'published' });
                if (mongoItem) {
                    return NextResponse.json(mongoItem);
                }
            } catch {
                // MongoDB not available
            }
            return NextResponse.json({ error: 'Event not found' }, { status: 404 });
        }

        // Try to use MongoDB first
        try {
            await connectDB();

            // Build query
            const query: Record<string, unknown> = { status: 'published' };

            if (type) query.type = type;
            if (category) query.category = category;
            if (featured) query.featured = true;
            if (search) {
                query.$or = [
                    { title: { $regex: search, $options: 'i' } },
                    { description: { $regex: search, $options: 'i' } },
                ];
            }

            // Year range filter
            if (yearFrom || yearTo) {
                query.year = {};
                if (yearFrom) (query.year as Record<string, number>).$gte = parseInt(yearFrom);
                if (yearTo) (query.year as Record<string, number>).$lte = parseInt(yearTo);
            }

            // Execute query with pagination
            const skip = (page - 1) * limit;

            const [events, total] = await Promise.all([
                HistoricalEvent.find(query)
                    .sort('-date')
                    .skip(skip)
                    .limit(limit)
                    .populate('movements', 'name slug')
                    .lean(),
                HistoricalEvent.countDocuments(query),
            ]);

            return NextResponse.json({
                events,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit),
                },
            });
        } catch {
            // MongoDB not available, use local data
            const result = getEvents({
                type: type || undefined,
                category: category || undefined,
                search: search || undefined,
                featured,
                page,
                limit,
                yearFrom: yearFrom ? parseInt(yearFrom) : undefined,
                yearTo: yearTo ? parseInt(yearTo) : undefined,
            });

            return NextResponse.json({
                events: result.events,
                pagination: result.pagination,
                _dataSource: 'local',
            });
        }
    } catch (error) {
        console.error('Get events error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch events' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/events
 * Create a new event (authenticated users)
 */
async function createEvent(request: NextRequest, _user: jwt.JwtPayload): Promise<NextResponse> {
    try {
        await connectDB();

        const body = await request.json();
        const validatedData = createEventSchema.parse(body);

        // Generate unique slug
        const baseSlug = slugify(validatedData.title, { lower: true });
        let slug = baseSlug;
        let counter = 1;

        while (await HistoricalEvent.findOne({ slug })) {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }

        // Extract year from date
        const year = validatedData.date.getFullYear();
        const month = validatedData.date.getMonth() + 1;
        const day = validatedData.date.getDate();

        // Create event
        const event = await HistoricalEvent.create({
            ...validatedData,
            slug,
            year,
            month,
            day,
        });

        return NextResponse.json(
            { message: 'Event created successfully', event },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.issues },
                { status: 400 }
            );
        }

        console.error('Create event error:', error);
        return NextResponse.json(
            { error: 'Failed to create event' },
            { status: 500 }
        );
    }
}

// Apply authentication middleware
export const POST = withAuth(createEvent);
