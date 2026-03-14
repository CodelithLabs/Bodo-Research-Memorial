/**
 * ============================================
 * Archive API - CRUD Operations
 * ============================================
 * GET /api/archive - List all archive items (public)
 * POST /api/archive - Create new archive item (auth required)
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import slugify from 'slugify';
import { connectDB, ArchiveItem } from '@/models';
import { withAuth } from '@/lib/auth';

// Validation schema for creating archive item
const createArchiveItemSchema = z.object({
    title: z.string()
        .min(2, 'Title must be at least 2 characters')
        .max(300, 'Title cannot exceed 300 characters'),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    type: z.enum(['photograph', 'document', 'manuscript', 'artifact', 'audio', 'video', 'newspaper', 'map', 'letter', 'certificate', 'other']),
    category: z.string().min(1, 'Category is required'),
    dateItem: z.string().transform(str => new Date(str)),
    origin: z.object({
        place: z.string().optional(),
        district: z.string().optional(),
        state: z.string().optional(),
        region: z.string().optional(),
    }).optional(),
    creator: z.object({
        name: z.string().optional(),
        photographer: z.string().optional(),
        author: z.string().optional(),
        publisher: z.string().optional(),
    }).optional(),
    subject: z.array(z.string()).optional(),
    content: z.string().optional(),
    language: z.string().optional(),
    dimensions: z.string().optional(),
    medium: z.string().optional(),
    condition: z.enum(['excellent', 'good', 'fair', 'poor']).default('good'),
    source: z.object({
        name: z.string().optional(),
        collection: z.string().optional(),
        donor: z.string().optional(),
        accessionNumber: z.string().optional(),
    }).optional(),
    rights: z.object({
        status: z.enum(['public', 'restricted', 'copyright', 'unknown']).default('unknown'),
        holder: z.string().optional(),
        license: z.string().optional(),
    }).optional(),
    relatedLeaders: z.array(z.string()).optional(),
    relatedOrganizations: z.array(z.string()).optional(),
    relatedMovements: z.array(z.string()).optional(),
    relatedEvents: z.array(z.string()).optional(),
    relatedTopics: z.array(z.string()).optional(),
    media: z.object({
        primaryImage: z.string().optional(),
        images: z.array(z.string()).optional(),
        audio: z.string().optional(),
        video: z.string().optional(),
        documents: z.array(z.string()).optional(),
    }).optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    status: z.enum(['draft', 'review', 'published', 'archived']).default('draft'),
});

/**
 * GET /api/archive
 * List all published archive items with optional filters
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);

        // Parse query parameters
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '12');
        const type = searchParams.get('type');
        const category = searchParams.get('category');
        const featured = searchParams.get('featured') === 'true';
        const search = searchParams.get('search');
        const yearFrom = searchParams.get('yearFrom');
        const yearTo = searchParams.get('yearTo');
        const sort = searchParams.get('sort') || '-dateItem';

        // Build query
        const query: Record<string, unknown> = { status: 'published' };

        if (type) query.type = type;
        if (category) query.category = category;
        if (featured) query.featured = true;
        if (search) {
            query.$text = { $search: search };
        }
        
        // Year range filter
        if (yearFrom || yearTo) {
            query.year = {};
            if (yearFrom) (query.year as Record<string, number>).$gte = parseInt(yearFrom);
            if (yearTo) (query.year as Record<string, number>).$lte = parseInt(yearTo);
        }

        // Execute query with pagination
        const skip = (page - 1) * limit;

        const [items, total] = await Promise.all([
            ArchiveItem.find(query)
                .sort(sort)
                .skip(skip)
                .limit(limit)
                .populate('relatedLeaders', 'name slug')
                .populate('relatedOrganizations', 'name slug acronym')
                .populate('relatedMovements', 'name slug')
                .lean(),
            ArchiveItem.countDocuments(query),
        ]);

        return NextResponse.json({
            items,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error('Get archive items error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch archive items' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/archive
 * Create a new archive item (authenticated users)
 */
async function createArchiveItem(request: NextRequest, _user: jwt.JwtPayload): Promise<NextResponse> {
    try {
        await connectDB();

        const body = await request.json();
        const validatedData = createArchiveItemSchema.parse(body);

        // Generate unique slug
        const baseSlug = slugify(validatedData.title, { lower: true });
        let slug = baseSlug;
        let counter = 1;

        while (await ArchiveItem.findOne({ slug })) {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }

        // Extract year from date
        const year = validatedData.dateItem.getFullYear();
        const decade = Math.floor(year / 10) * 10 + 's';

        // Create archive item
        const item = await ArchiveItem.create({
            ...validatedData,
            slug,
            year,
            decade,
        });

        return NextResponse.json(
            { message: 'Archive item created successfully', item },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.issues },
                { status: 400 }
            );
        }

        console.error('Create archive item error:', error);
        return NextResponse.json(
            { error: 'Failed to create archive item' },
            { status: 500 }
        );
    }
}

// Apply authentication middleware
export const POST = withAuth(createArchiveItem);
