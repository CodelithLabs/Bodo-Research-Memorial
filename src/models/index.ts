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

export { default as Source } from './Source';
export type { ISource } from './Source';

export { default as LeaderRevision } from './LeaderRevision';
export type { ILeaderRevision } from './LeaderRevision';

export { default as Article } from './Article';
export type { IArticle, IReference as IArticleReference } from './Article';

export { default as Category } from './Category';
export type { ICategory } from './Category';
export { defaultCategories, seedCategories } from './Category';

export { default as Movement } from './Movement';
export type { IMovement } from './Movement';

export { default as Organization } from './Organization';
export type { IOrganization } from './Organization';

export { default as HistoricalEvent } from './HistoricalEvent';
export type { IHistoricalEvent } from './HistoricalEvent';

export { default as ArchiveItem } from './ArchiveItem';
export type { IArchiveItem } from './ArchiveItem';

export { default as AuditLog } from './AuditLog';
export type { IAuditLog } from './AuditLog';

/**
 * Database connection helper
 */
export { connectDB, disconnectDB, getConnectionStatus } from '@/lib/db';
