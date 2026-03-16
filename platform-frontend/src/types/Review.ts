import { UserSummary } from './Project';

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

export interface ReviewSummary {
    averageRating: number;
    totalReviews: number;
    ratingDistribution: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
    };
}

export interface CreateReviewInput {
    projectId: string;
    rating: number;
    title: string;
    content: string;
}

export interface UpdateReviewInput {
    id: string;
    rating?: number;
    title?: string;
    content?: string;
}

export interface ReviewFilter {
    projectId: string;
    sortBy?: 'newest' | 'oldest' | 'highest' | 'lowest' | 'helpful';
    rating?: number;
    page?: number;
    pageSize?: number;
}

export interface PaginatedReviews {
    reviews: Review[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    summary: ReviewSummary;
}

export interface Comment {
    id: string;
    user: UserSummary;
    projectId: string;
    parentId?: string;
    content: string;
    likes: number;
    replies?: Comment[];
    createdAt: string;
    updatedAt: string;
}

export interface CreateCommentInput {
    projectId: string;
    content: string;
    parentId?: string;
}

export interface CommentFilter {
    projectId: string;
    parentId?: string;
    page?: number;
    pageSize?: number;
}

export interface PaginatedComments {
    comments: Comment[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}
