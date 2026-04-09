/**
 * ============================================
 * Authentication Utilities
 * ============================================
 * JWT token generation, verification, and 
 * role-based access control middleware
 */

import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { IUser } from '@/models';

const JWT_SECRET = process.env.JWT_SECRET ?? process.env.NEXTAUTH_SECRET;

if (!JWT_SECRET) {
    throw new Error(
        '[auth] JWT_SECRET environment variable is not set. ' +
        'Application cannot start without it. ' +
        'Set it in .env.local or your deployment provider.'
    );
}

const TOKEN_EXPIRY = '7d'; // 7 days

/**
 * Generate JWT token for authenticated user
 */
export function generateToken(user: Partial<IUser>): string {
    const payload = {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
    };

    return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
}

/**
 * Verify JWT token and return payload
 */
export function verifyToken(token: string): jwt.JwtPayload | null {
    try {
        return jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    } catch {
        return null;
    }
}

/**
 * Extract token from Authorization header
 */
export function extractToken(request: NextRequest): string | null {
    const authHeader = request.headers.get('authorization');

    if (!authHeader) return null;

    // Bearer token format
    if (authHeader.startsWith('Bearer ')) {
        return authHeader.substring(7);
    }

    return null;
}

/**
 * Role-based access control levels
 */
export type Role = 'admin' | 'editor' | 'public';

export const ROLE_HIERARCHY: Record<Role, number> = {
    admin: 3,
    editor: 2,
    public: 1,
};

/**
 * Check if user has required role
 */
export function hasRole(userRole: Role, requiredRole: Role): boolean {
    return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[requiredRole];
}

type AuthHandler = (request: NextRequest, user: jwt.JwtPayload) => Promise<NextResponse>;

/**
 * Authentication middleware factory
 */
export function withAuth(
    handler: AuthHandler,
    requiredRole: Role = 'public'
): (request: NextRequest) => Promise<NextResponse> {
    return async (request: NextRequest): Promise<NextResponse> => {
        const token = extractToken(request);

        if (!token) {
            return NextResponse.json(
                { error: 'Authentication required' },
                { status: 401 }
            );
        }

        const payload = verifyToken(token);

        if (!payload) {
            return NextResponse.json(
                { error: 'Invalid or expired token' },
                { status: 401 }
            );
        }

        // Check role authorization
        if (requiredRole !== 'public' && !hasRole(payload.role as Role, requiredRole)) {
            return NextResponse.json(
                { error: 'Insufficient permissions' },
                { status: 403 }
            );
        }

        return handler(request, payload);
    };
}

/**
 * Optional authentication - attaches user to request if token present
 */
export function withOptionalAuth(
    handler: (request: NextRequest, user: jwt.JwtPayload | null) => Promise<NextResponse>
): (request: NextRequest) => Promise<NextResponse> {
    return async (request: NextRequest): Promise<NextResponse> => {
        const token = extractToken(request);
        const payload = token ? verifyToken(token) : null;

        return handler(request, payload);
    };
}

/**
 * Admin-only middleware wrapper
 */
export function withAdminAuth(
    handler: AuthHandler
): (request: NextRequest) => Promise<NextResponse> {
    const adminHandler: AuthHandler = async (req, user) => {
        if (user.role !== 'admin') {
            return NextResponse.json(
                { error: 'Admin access required' },
                { status: 403 }
            );
        }
        return handler(req, user);
    };

    return withAuth(adminHandler, 'admin');
}

/**
 * Parse auth header for client-side use
 */
export function parseAuthHeader(authHeader: string | null): { token: string } | null {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }

    const token = authHeader.substring(7);
    return { token };
}
