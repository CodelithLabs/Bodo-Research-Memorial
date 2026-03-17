export type UserRole = 'user' | 'creator' | 'admin' | 'moderator';

export type UserStatus = 'active' | 'suspended' | 'banned';

export type SocialLink = {
    platform: 'twitter' | 'discord' | 'youtube' | 'twitch' | 'github' | 'website';
    url: string;
};

export interface UserProfile {
    username: string;
    displayName: string;
    avatar: string;
    banner?: string;
    bio: string;
    location?: string;
    website?: string;
    socialLinks: SocialLink[];
    joinedAt: string;
    verified: boolean;
}

export interface UserStats {
    totalDownloads: number;
    totalProjects: number;
    totalSales: number;
    totalEarnings: number;
    followers: number;
    following: number;
    totalReviews: number;
    averageRating: number;
}

export interface UserSummary {
    id: string;
    username: string;
    displayName: string;
    avatar: string;
    verified: boolean;
}

export interface User extends UserSummary {
    email: string;
    role: UserRole;
    status: UserStatus;
    profile: UserProfile;
    stats: UserStats;
    isFollowing?: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CreatorProfile extends User {
    payoutInfo?: {
        paypal?: string;
        bankAccount?: string;
        cryptoWallet?: string;
    };
    revenue?: {
        total: number;
        pending: number;
        available: number;
        currency: string;
    };
}

// Forward declaration for project reference
export interface ProjectSummary {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    type: 'game' | 'mod' | 'asset' | 'digital_art';
    category: string;
    thumbnail: string;
    developer: UserSummary;
    pricing: {
        type: 'free' | 'paid' | 'donation';
        price: number;
        currency: string;
    };
    stats: {
        downloads: number;
        likes: number;
        views: number;
        reviews: number;
        comments: number;
    };
    rating: number;
    version: string;
    lastUpdated: string;
}

export interface UserLibraryItem {
    project: ProjectSummary;
    purchasedAt: string;
    downloadCount: number;
    lastPlayed?: string;
}

export interface UserWishlistItem {
    project: ProjectSummary;
    addedAt: string;
}

export interface UserDownload {
    id: string;
    project: ProjectSummary;
    downloadedAt: string;
    version: string;
    downloadCount: number;
}
