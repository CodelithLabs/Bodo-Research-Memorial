/**
 * ============================================
 * Organizations API - CRUD Operations
 * ============================================
 * GET /api/organizations - List all organizations (public)
 * POST /api/organizations - Create new organization (auth required)
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import slugify from 'slugify';
import { connectDB, Organization } from '@/models';
import { withAuth } from '@/lib/auth';

// Validation schema for creating organization
const createOrganizationSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(200, 'Name cannot exceed 200 characters'),
    acronym: z.string().max(20).optional(),
    alternativeNames: z.array(z.string()).optional(),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    mission: z.string().optional(),
    vision: z.string().optional(),
    foundedYear: z.number().min(1800).max(2100).optional(),
    dissolvedYear: z.number().min(1800).max(2100).optional(),
    ongoing: z.boolean().default(true),
    type: z.enum(['political', 'student', 'cultural', 'religious', 'social', 'educational', 'economic', 'youth', 'women', 'sports']),
    operationalStatus: z.enum(['active', 'inactive', 'dissolved']).default('active'),
    headquarters: z.object({
        address: z.string().optional(),
        district: z.string().optional(),
        state: z.string().optional(),
    }).optional(),
    keyMembers: z.array(z.object({
        name: z.string(),
        role: z.string(),
        tenure: z.string().optional(),
        imageUrl: z.string().optional(),
    })).optional(),
    foundingMembers: z.array(z.string()).optional(),
    movements: z.array(z.string()).optional(),
    relatedOrganizations: z.array(z.string()).optional(),
    achievements: z.array(z.string()).optional(),
    programs: z.array(z.string()).optional(),
    publications: z.array(z.string()).optional(),
    contact: z.object({
        email: z.string().email().optional(),
        phone: z.string().optional(),
        website: z.string().url().optional(),
        socialMedia: z.object({
            facebook: z.string().optional(),
            twitter: z.string().optional(),
            instagram: z.string().optional(),
        }).optional(),
    }).optional(),
    region: z.array(z.string()).optional(),
    logoUrl: z.string().optional(),
    imageUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    status: z.enum(['draft', 'review', 'published', 'archived']).default('draft'),
});

/**
 * GET /api/organizations
 * List all published organizations with optional filters
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        await connectDB();

        const { searchParams } = new URL(request.url);

        // Parse query parameters
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '12');
        const type = searchParams.get('type');
        const featured = searchParams.get('featured') === 'true';
        const search = searchParams.get('search');
        const tag = searchParams.get('tag');
        const region = searchParams.get('region');
        const sort = searchParams.get('sort') || '-createdAt';

        // Build query
        const query: Record<string, unknown> = { status: 'published' };

        if (type) query.type = type;
        if (featured) query.featured = true;
        if (tag) query.tags = tag;
        if (region) query.region = region;
        if (search) {
            query.$text = { $search: search };
        }

        // Execute query with pagination
        const skip = (page - 1) * limit;

        const [organizations, total] = await Promise.all([
            Organization.find(query)
                .sort(sort)
                .skip(skip)
                .limit(limit)
                .populate('movements', 'name slug')
                .lean(),
            Organization.countDocuments(query),
        ]);

        return NextResponse.json({
            organizations,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error('Get organizations error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch organizations' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/organizations
 * Create a new organization (authenticated users)
 */
async function createOrganization(request: NextRequest, _user: jwt.JwtPayload): Promise<NextResponse> {
    try {
        await connectDB();

        const body = await request.json();
        const validatedData = createOrganizationSchema.parse(body);

        // Generate unique slug
        const baseSlug = slugify(validatedData.name, { lower: true });
        let slug = baseSlug;
        let counter = 1;

        while (await Organization.findOne({ slug })) {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }

        // Create organization
        const organization = await Organization.create({
            ...validatedData,
            slug,
        });

        return NextResponse.json(
            { message: 'Organization created successfully', organization },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.issues },
                { status: 400 }
            );
        }

        console.error('Create organization error:', error);
        return NextResponse.json(
            { error: 'Failed to create organization' },
            { status: 500 }
        );
    }
}

// Apply authentication middleware
export const POST = withAuth(createOrganization);
