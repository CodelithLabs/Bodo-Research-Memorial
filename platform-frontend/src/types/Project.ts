export type ProjectType = 'game' | 'mod' | 'asset' | 'digital_art';

export type ProjectStatus = 'draft' | 'pending' | 'published' | 'rejected' | 'archived';

export type ProjectCategory =
    | 'action'
    | 'adventure'
    | 'rpg'
    | 'strategy'
    | 'simulation'
    | 'sports'
    | 'puzzle'
    | 'horror'
    | 'multiplayer'
    | 'singleplayer'
    | 'minecraft'
    | 'gta'
    | 'skyrim'
    | 'audio'
    | 'models'
    | 'textures'
    | 'ui_kits'
    | 'icons'
    | 'fonts'
    | 'illustrations'
    | '3d_art'
    | 'concept_art';

export interface ProjectFile {
    id: string;
    name: string;
    size: number;
    format: string;
    downloadUrl: string;
}

export interface ProjectMedia {
    id: string;
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
    alt?: string;
    isPrimary: boolean;
}

export interface ProjectPricing {
    type: 'free' | 'paid' | 'donation';
    price: number;
    currency: string;
    discountPrice?: number;
    discountEnds?: string;
}

export interface ProjectStats {
    downloads: number;
    likes: number;
    views: number;
    reviews: number;
    comments: number;
}

export interface ProjectRequirements {
    os?: string[];
    processor?: string;
    memory?: string;
    graphics?: string;
    storage?: string;
    additionalNotes?: string;
}

export interface UserSummary {
    id: string;
    username: string;
    displayName: string;
    avatar: string;
    verified: boolean;
}

export interface Review {
    id: string;
    user: UserSummary;
    projectId: string;
    rating: number;
    title: string;
    content: string;
    helpful: number;
    notHelpful: number;
    isDeveloperResponse: boolean;
    developerResponse?: string;
    createdAt: string;
    updatedAt: string;
}

export interface ProjectSummary {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    type: ProjectType;
    category: ProjectCategory;
    thumbnail: string;
    developer: UserSummary;
    pricing: ProjectPricing;
    stats: ProjectStats;
    rating: number;
    version: string;
    lastUpdated: string;
}

export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    shortDescription: string;
    type: ProjectType;
    category: ProjectCategory;
    tags: string[];

    developer: UserSummary;
    publisher?: UserSummary;

    thumbnail: string;
    media: ProjectMedia[];
    files: ProjectFile[];

    pricing: ProjectPricing;
    stats: ProjectStats;

    version: string;
    lastUpdated: string;
    releaseDate: string;

    requirements?: ProjectRequirements;

    status: ProjectStatus;
    isFeatured: boolean;
    isTrending: boolean;

    reviews?: Review[];
    relatedProjects?: ProjectSummary[];

    userHasLiked?: boolean;
    userHasPurchased?: boolean;
    userHasInWishlist?: boolean;
    userReview?: Review;
}

export interface ProjectFilter {
    type?: ProjectType;
    category?: ProjectCategory;
    minPrice?: number;
    maxPrice?: number;
    tags?: string[];
    sortBy?: 'trending' | 'downloads' | 'rating' | 'newest' | 'price_low' | 'price_high';
    search?: string;
    developer?: string;
}

export interface PaginatedProjects {
    projects: ProjectSummary[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}
