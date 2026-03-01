/**
 * ============================================
 * Models Index - Export all Mongoose models
 * ============================================
 * Central export point for all database models
 */

export { default as User } from './User';
export type { IUser } from './User';

export { default as Leader } from './Leader';
export type { ILeader, ITimelineEvent, IReference as ILeaderReference } from './Leader';

export { default as Article } from './Article';
export type { IArticle, IReference as IArticleReference } from './Article';

export { default as Category } from './Category';
export type { ICategory } from './Category';
export { defaultCategories, seedCategories } from './Category';

/**
 * Database connection helper
 */
export { connectDB, disconnectDB, getConnectionStatus } from '@/lib/db';
