/**
 * ============================================
 * Utility Functions
 * ============================================
 * Common utility functions used across the application
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with proper handling
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format date for display
 */
export function formatDate(
  date: Date | string | null | undefined,
  options?: Intl.DateTimeFormatOptions
): string {
  if (!date) return 'Unknown';

  const d = typeof date === 'string' ? new Date(date) : date;

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('en-US', options || defaultOptions).format(d);
}

/**
 * Format date range (birth - death)
 */
export function formatLifespan(
  birthDate?: Date | string | null,
  deathDate?: Date | string | null
): string {
  if (!birthDate && !deathDate) return 'Unknown';

  const birth = birthDate
    ? new Date(birthDate).getFullYear()
    : '?';
  const death = deathDate
    ? new Date(deathDate).getFullYear()
    : 'Present';

  return `${birth} - ${death}`;
}

/**
 * Calculate reading time for content
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

/**
 * Generate excerpt from content
 */
export function generateExcerpt(content: string, length: number = 160): string {
  // Remove HTML tags
  const plainText = content.replace(/<[^>]*>/g, '');
  return truncate(plainText.replace(/\s+/g, ' '), length);
}

/**
 * Format number with commas
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

/**
 * Slugify text for URLs
 */
export function slugifyText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Generate meta description from content
 */
export function generateMetaDescription(content: string, maxLength: number = 160): string {
  const plainText = content
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (plainText.length <= maxLength) return plainText;

  return plainText.slice(0, maxLength).trim() + '...';
}

/**
 * Get region display name
 */
export function getRegionName(region: string): string {
  const regions: Record<string, string> = {
    'assam': 'Assam',
    'north-bengal': 'North Bengal',
    'darjeeling': 'Darjeeling',
    'bhutan': 'Bhutan',
    'other': 'Other Regions',
  };

  return regions[region] || region;
}

/**
 * Get status color class
 */
export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    'draft': 'bg-gray-100 text-gray-800',
    'review': 'bg-yellow-100 text-yellow-800',
    'published': 'bg-green-100 text-green-800',
    'archived': 'bg-red-100 text-red-800',
  };

  return colors[status] || colors.draft;
}

/**
 * Parse JSON safely
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

/**
 * Capitalize first letter
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generate random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Check if running in browser
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Get time ago string
 */
export function timeAgo(date: Date | string): string {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
}

/**
 * Calculate age from birth date
 */
export function calculateAge(birthDate: Date | string | null | undefined, deathDate?: Date | string | null | undefined): number | null {
  if (!birthDate) return null;

  const birth = new Date(birthDate);
  const today = deathDate ? new Date(deathDate) : new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}
