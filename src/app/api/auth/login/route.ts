/**
 * ============================================
 * Auth API - User Login
 * ============================================
 * POST /api/auth/login
 * Authenticates user and returns JWT token
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { connectDB, User } from '@/models';
import { generateToken } from '@/lib/auth';

// Validation schema
const loginSchema = z.object({
    email: z.string()
        .email('Invalid email address')
        .min(1, 'Email is required'),
    password: z.string()
        .min(1, 'Password is required'),
});

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        // Connect to database
        await connectDB();

        // Parse and validate request body
        const body = await request.json();
        const validatedData = loginSchema.parse(body);

        // Find user by email (include password for comparison)
        const user = await User.findOne({ email: validatedData.email.toLowerCase() }).select('+password');

        if (!user) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Check if user is active
        if (!user.isActive) {
            return NextResponse.json(
                { error: 'Account is deactivated' },
                { status: 403 }
            );
        }

        // Verify password
        const isValidPassword = await user.comparePassword(validatedData.password);

        if (!isValidPassword) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Update last login
        user.lastLogin = new Date();
        await user.save();

        // Generate JWT token
        const token = generateToken(user);

        return NextResponse.json({
            message: 'Login successful',
            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
            },
            token,
        });
    } catch (error) {
        // Handle Zod validation errors
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation failed', details: error.issues },
                { status: 400 }
            );
        }

        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
