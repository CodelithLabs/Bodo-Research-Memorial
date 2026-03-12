'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
    const pathname = usePathname();

    // Generate breadcrumb from current path if no items provided
    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        if (items.length > 0) return items;

        const paths = pathname.split('/').filter(Boolean);
        const breadcrumbs: BreadcrumbItem[] = [
            { label: 'Home', href: '/' }
        ];

        let currentPath = '';
        paths.forEach((path, index) => {
            currentPath += `/${path}`;
            const label = path
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            breadcrumbs.push({
                label,
                href: index === paths.length - 1 ? undefined : currentPath,
            });
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    return (
        <nav
            className={`flex items-center gap-2 text-sm ${className}`}
            aria-label="Breadcrumb"
        >
            <ol className="flex items-center gap-2 list-none">
                {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    const isFirst = index === 0;

                    return (
                        <li key={index} className="flex items-center gap-2">
                            {index > 0 && (
                                <ChevronRight className="w-4 h-4 text-text-muted" />
                            )}

                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className={`
                    flex items-center gap-1.5 transition-colors duration-200
                    ${isFirst
                                            ? 'text-primary hover:text-secondary'
                                            : 'text-text-muted hover:text-primary'
                                        }
                  `}
                                >
                                    {isFirst && <Home className="w-4 h-4" />}
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            ) : (
                                <span
                                    className={`
                    font-semibold ${isLast
                                            ? 'text-primary dark:text-secondary'
                                            : 'text-text-muted'
                                        }`}
                                >
                                    {item.label}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

// Compact version for inline use
export function BreadcrumbInline({ items }: { items: BreadcrumbItem[] }) {
    return (
        <div className="flex items-center gap-1.5 text-xs text-text-muted">
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-1.5">
                    {index > 0 && <ChevronRight className="w-3 h-3" />}
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="font-medium text-primary">{item.label}</span>
                    )}
                </span>
            ))}
        </div>
    );
}
