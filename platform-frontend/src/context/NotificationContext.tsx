'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Notification } from '@/types/Notification';

interface NotificationContextType {
    notifications: Notification[];
    unreadCount: number;
    isLoading: boolean;
    markAsRead: (id: string) => void;
    markAllAsRead: () => void;
    removeNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

// Mock notifications
const mockNotifications: Notification[] = [
    {
        id: '1',
        type: 'new_comment',
        status: 'unread',
        title: 'New comment on Space Shooter',
        message: 'Player123 commented: "Great game! Love the graphics..."',
        link: '/project/1',
        createdAt: '2024-01-15T10:30:00Z',
        readAt: undefined,
    },
    {
        id: '2',
        type: 'project_update',
        status: 'unread',
        title: 'Project approved!',
        message: 'Your project "Space Shooter" has been published.',
        link: '/project/1',
        createdAt: '2024-01-14T15:00:00Z',
        readAt: undefined,
    },
    {
        id: '3',
        type: 'follow',
        status: 'read',
        title: 'New follower',
        message: 'GameStudio started following you',
        link: '/profile/gamestudio',
        createdAt: '2024-01-13T09:00:00Z',
        readAt: '2024-01-13T09:30:00Z',
    },
    {
        id: '4',
        type: 'purchase',
        status: 'read',
        title: 'New purchase',
        message: 'Someone purchased "Ultimate Asset Pack"',
        link: '/creator/revenue',
        createdAt: '2024-01-12T12:00:00Z',
        readAt: '2024-01-12T12:15:00Z',
    },
];

export function NotificationProvider({ children }: { children: ReactNode }) {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch notifications
        const fetchNotifications = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 500));
                setNotifications(mockNotifications);
            } catch (error) {
                console.error('Failed to fetch notifications:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    const unreadCount = notifications.filter(n => n.status === 'unread').length;

    const markAsRead = (id: string) => {
        setNotifications(prev =>
            prev.map(n =>
                n.id === id ? { ...n, status: 'read' as const, readAt: new Date().toISOString() } : n
            )
        );
    };

    const markAllAsRead = () => {
        setNotifications(prev =>
            prev.map(n => ({
                ...n,
                status: 'read' as const,
                readAt: n.readAt || new Date().toISOString(),
            }))
        );
    };

    const removeNotification = (id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    return (
        <NotificationContext.Provider
            value={{
                notifications,
                unreadCount,
                isLoading,
                markAsRead,
                markAllAsRead,
                removeNotification,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
}

export function useNotifications() {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotifications must be used within a NotificationProvider');
    }
    return context;
}
