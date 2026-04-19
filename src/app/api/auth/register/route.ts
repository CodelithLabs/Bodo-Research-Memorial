/**
 * ============================================
 * Auth API - User Registration
 * ============================================
 * POST /api/auth/register
 * Creates a new user account
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { connectDB, User } from '@/models';
import { generateToken } from '@/lib/auth';
import { validateCsrfToken } from '@/lib/csrf';

// Validation schema
const registerSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name cannot exceed 100 characters'),
    email: z.string()
        .email('Invalid email address')
        .min(1, 'Email is required'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain uppercase, lowercase, and number'),
});

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        // Connect to database
        await connectDB();

        // Parse and validate request body
        const body = await request.json();
        const { csrfToken, ...payload } = body;

        const csrfValid = await validateCsrfToken(csrfToken);
        if (!csrfValid) {
            return NextResponse.json({ error: 'Invalid request' }, { status: 403 });
        }

        const validatedData = registerSchema.parse(payload);

        // Check if user already exists
        const existingUser = await User.findOne({ email: validatedData.email.toLowerCase() });
        if (existingUser) {
            return NextResponse.json(
                { error: 'Email already registered' },
                { status: 409 }
            );
        }

        // Create new user
        const user = await User.create({
            name: validatedData.name,
            email: validatedData.email.toLowerCase(),
            password: validatedData.password,
            role: 'public', // Default role
        });

        // Generate JWT token
        const token = generateToken(user);

        return NextResponse.json(
            {
                message: 'Registration successful',
                user: {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                token,
            },
            { status: 201 }
        );
    } catch (error) {
        // Handle Zod validation errors
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.errors },
                { status: 400 }
            );
        }

        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
