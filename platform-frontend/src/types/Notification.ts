import { UserSummary, ProjectSummary } from './Project';

export type NotificationType =
    | 'project_update'
    | 'new_comment'
    | 'comment_reply'
    | 'review_received'
    | 'follow'
    | 'purchase'
    | 'wishlist'
    | 'announcement'
    | 'payment'
    | 'payout';

export type NotificationStatus = 'unread' | 'read' | 'archived';

export interface Notification {
    id: string;
    type: NotificationType;
    status: NotificationStatus;
    title: string;
    message: string;
    link?: string;

    sender?: UserSummary;
    project?: ProjectSummary;

    createdAt: string;
    readAt?: string;
}

export interface NotificationPreferences {
    email: {
        projectUpdates: boolean;
        comments: boolean;
        reviews: boolean;
        followers: boolean;
        purchases: boolean;
        announcements: boolean;
    };
    push: {
        projectUpdates: boolean;
        comments: boolean;
        reviews: boolean;
        followers: boolean;
        purchases: boolean;
        announcements: boolean;
    };
}

export interface NotificationFilter {
    type?: NotificationType;
    status?: NotificationStatus;
    page?: number;
    pageSize?: number;
}

export interface PaginatedNotifications {
    notifications: Notification[];
    total: number;
    unread: number;
    page: number;
    pageSize: number;
    totalPages: number;
}
