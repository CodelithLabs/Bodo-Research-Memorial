/**
 * ============================================
 * Article Model - Mongoose Schema
 * ============================================
 * Core content model for all articles covering
 * culture, religion, history, language, and more
 * 
 * Categories:
 * - culture: Festivals, traditions, customs
 * - religion: Bathou, rituals, philosophy
 * - history: Historical events, periods
 * - language: Bodo language, linguistics
 * - leaders: Political/social leaders
 * - general: General content
 * 
 * Status Workflow:
 * - draft: Initial creation
 * - review: Pending approval
 * - published: Live on site
 * - archived: Removed from site
 */

import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IReference {
    title: string;
    author?: string;
    year?: number;
    publication?: string;
    link?: string;
}

export interface IArticle extends Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    slug: string;
    subtitle?: string;
    excerpt?: string;
    content: string;
    coverImage?: string;
    category: mongoose.Types.ObjectId;
    subcategory?: string;
    region?: string;
    period?: string;
    references: IReference[];
    tags: string[];
    relatedArticles: mongoose.Types.ObjectId[];
    relatedLeaders: mongoose.Types.ObjectId[];
    featured: boolean;
    premium: boolean;
    readingTime: number;
    status: 'draft' | 'review' | 'published' | 'archived';
    author: mongoose.Types.ObjectId;
    editor?: mongoose.Types.ObjectId;
    publishedAt?: Date;
    views: number;
    createdAt: Date;
    updatedAt: Date;
}

const ReferenceSchema = new Schema<IReference>(
    {
        title: {
            type: String,
            required: true,
        },
        author: String,
        year: Number,
        publication: String,
        link: String,
    },
    { _id: false }
);

const ArticleSchema = new Schema<IArticle>(
    {
        title: {
            type: String,
            required: [true, 'Article title is required'],
            trim: true,
            maxlength: [300, 'Title cannot exceed 300 characters'],
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        subtitle: {
            type: String,
            maxlength: [500, 'Subtitle cannot exceed 500 characters'],
        },
        excerpt: {
            type: String,
            maxlength: [1000, 'Excerpt cannot exceed 1000 characters'],
        },
        content: {
            type: String,
            required: [true, 'Article content is required'],
        },
        coverImage: {
            type: String,
            default: null,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
        },
        subcategory: {
            type: String,
            maxlength: [100, 'Subcategory cannot exceed 100 characters'],
        },
        region: {
            type: String,
            enum: [
                'assam',
                'north-bengal',
                'darjeeling',
                'bhutan',
                'other',
            ],
        },
        period: {
            type: String,
            maxlength: [100, 'Period cannot exceed 100 characters'],
        },
        references: [ReferenceSchema],
        tags: [{
            type: String,
            lowercase: true,
        }],
        relatedArticles: [{
            type: Schema.Types.ObjectId,
            ref: 'Article',
        }],
        relatedLeaders: [{
            type: Schema.Types.ObjectId,
            ref: 'Leader',
        }],
        featured: {
            type: Boolean,
            default: false,
        },
        premium: {
            type: Boolean,
            default: false,
        },
        readingTime: {
            type: Number,
            default: 5, // minutes
        },
        status: {
            type: String,
            enum: ['draft', 'review', 'published', 'archived'],
            default: 'draft',
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        editor: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        publishedAt: Date,
        views: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: function (_doc: unknown, ret: Record<string, unknown>) {
                ret.id = (ret._id as mongoose.Types.ObjectId).toString();
                delete ret._id;
                delete ret.__v;
                return ret;
            },
        },
    }
);

// Indexes for efficient querying and search
ArticleSchema.index({ title: 'text', content: 'text', tags: 'text', excerpt: 'text' });
ArticleSchema.index({ status: 1 });
ArticleSchema.index({ featured: 1, status: 1 });
ArticleSchema.index({ category: 1, status: 1 });
ArticleSchema.index({ region: 1 });
ArticleSchema.index({ period: 1 });
ArticleSchema.index({ tags: 1 });
ArticleSchema.index({ publishedAt: -1 });
ArticleSchema.index({ views: -1 });
ArticleSchema.index({ author: 1 });

// Virtual for word count
ArticleSchema.virtual('wordCount').get(function () {
    if (!this.content) return 0;
    return this.content.split(/\s+/).filter(Boolean).length;
});

// Virtual for reading time (average 200 words per minute)
ArticleSchema.virtual('calculatedReadingTime').get(function () {
    const wordCount = (this as unknown as IArticle).content?.split(/\s+/).filter(Boolean).length || 0;
    return Math.ceil(wordCount / 200);
});

// Ensure virtuals are included in JSON
ArticleSchema.set('toJSON', { virtuals: true });
ArticleSchema.set('toObject', { virtuals: true });

// Pre-save middleware to calculate reading time
ArticleSchema.pre('save', function (next: (err?: Error) => void) {
    const wordCount = this.content?.split(/\s+/).filter(Boolean).length || 0;
    this.readingTime = Math.ceil(wordCount / 200);
    next();
});

const Article: Model<IArticle> =
    mongoose.models.Article || mongoose.model<IArticle>('Article', ArticleSchema);

export default Article;
