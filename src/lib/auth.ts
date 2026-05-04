/**
 * ============================================
 * Authentication Utilities
 * ============================================
 * JWT token generation, verification, and 
 * role-based access control middleware
 */

import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt';
import { IUser } from '@/models';
import { authOptions } from '@/lib/auth-options';

const JWT_SECRET_VALUE: string = process.env.JWT_SECRET ?? '';

if (!JWT_SECRET_VALUE) {
    throw new Error(
        'JWT_SECRET environment variable is not set'
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

    return jwt.sign(payload, JWT_SECRET_VALUE, { expiresIn: TOKEN_EXPIRY });
}

/**
 * Verify JWT token and return payload
 */
export function verifyToken(token: string): jwt.JwtPayload | null {
    try {
        return jwt.verify(token, JWT_SECRET_VALUE) as jwt.JwtPayload;
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

        if (token) {
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
        }

        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json(
                { error: 'Authentication required' },
                { status: 401 }
            );
        }

        const sessionRole = (session.user as { role?: string } | undefined)?.role ?? 'public';
        const role = sessionRole as Role;

        if (requiredRole !== 'public' && !hasRole(role, requiredRole)) {
            return NextResponse.json(
                { error: 'Insufficient permissions' },
                { status: 403 }
            );
        }

        const nextAuthToken = await getToken({
            req: request,
            secret: authOptions.secret ?? process.env.NEXTAUTH_SECRET,
        });

        const sessionUser = session.user as { id?: string; email?: string; name?: string } | undefined;
        const userId = sessionUser?.id ?? nextAuthToken?.sub;

        if (!userId) {
            return NextResponse.json(
                { error: 'Authentication required' },
                { status: 401 }
            );
        }

        const payload: jwt.JwtPayload = {
            id: userId,
            email: sessionUser?.email ?? nextAuthToken?.email,
            name: sessionUser?.name ?? nextAuthToken?.name,
            role,
        };

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
