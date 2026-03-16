'use client';

import { ReactNode, createContext, useContext, useState } from 'react';
import { clsx } from 'clsx';

interface TabsContextValue {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('Tabs components must be used within a Tabs provider');
    }
    return context;
}

export interface TabsProps {
    defaultValue: string;
    children: ReactNode;
    className?: string;
    onChange?: (value: string) => void;
}

export function Tabs({ defaultValue, children, className, onChange }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultValue);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        onChange?.(tab);
    };

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
            <div className={className}>{children}</div>
        </TabsContext.Provider>
    );
}

export interface TabsListProps {
    children: ReactNode;
    className?: string;
}

export function TabsList({ children, className }: TabsListProps) {
    return (
        <div
            className={clsx(
                'flex gap-1 p-1 bg-surface-800 rounded-lg border border-surface-700',
                className
            )}
        >
            {children}
        </div>
    );
}

export interface TabsTriggerProps {
    value: string;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
}

export function TabsTrigger({ value, children, className, disabled }: TabsTriggerProps) {
    const { activeTab, setActiveTab } = useTabsContext();
    const isActive = activeTab === value;

    return (
        <button
            onClick={() => !disabled && setActiveTab(value)}
            disabled={disabled}
            className={clsx(
                'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-surface-900',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                isActive
                    ? 'bg-surface-700 text-surface-100 shadow-sm'
                    : 'text-surface-400 hover:text-surface-200 hover:bg-surface-700/50',
                className
            )}
        >
            {children}
        </button>
    );
}

export interface TabsContentProps {
    value: string;
    children: ReactNode;
    className?: string;
}

export function TabsContent({ value, children, className }: TabsContentProps) {
    const { activeTab } = useTabsContext();

    if (activeTab !== value) return null;

    return (
        <div className={clsx('mt-4 animate-fade-in', className)}>
            {children}
        </div>
    );
}
