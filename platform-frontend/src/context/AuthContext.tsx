'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types/User';

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (data: RegisterData) => Promise<void>;
}

interface RegisterData {
    email: string;
    password: string;
    username: string;
    displayName: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Mock user for demo
const mockUser: User = {
    id: '1',
    username: 'game_dev',
    displayName: 'Game Developer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=game_dev',
    verified: true,
    email: 'dev@example.com',
    role: 'creator',
    status: 'active',
    profile: {
        username: 'game_dev',
        displayName: 'Game Developer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=game_dev',
        bio: 'Indie game developer passionate about creating immersive experiences.',
        location: 'San Francisco, CA',
        website: 'https://example.com',
        socialLinks: [
            { platform: 'twitter', url: 'https://twitter.com' },
            { platform: 'discord', url: 'https://discord.com' },
        ],
        joinedAt: '2023-01-15T00:00:00Z',
        verified: true,
    },
    stats: {
        totalDownloads: 15000,
        totalProjects: 12,
        totalSales: 500,
        totalEarnings: 5000,
        followers: 2500,
        following: 150,
        totalReviews: 45,
        averageRating: 4.5,
    },
    isFollowing: false,
    createdAt: '2023-01-15T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
};

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check for existing session
        const checkAuth = async () => {
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 500));

                // For demo, auto-login with mock user
                setUser(mockUser);
            } catch (error) {
                console.error('Auth check failed:', error);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setUser(mockUser);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    const register = async (data: RegisterData) => {
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setUser({ ...mockUser, email: data.email, username: data.username });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                login,
                logout,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
