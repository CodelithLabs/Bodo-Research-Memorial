/**
 * ============================================
 * Leader Model - Mongoose Schema
 * ============================================
 * Stores information about Bodo leaders, freedom fighters,
 * cultural figures, and historical personalities
 * 
 * Features:
 * - Full-text search on name, biography, contributions
 * - Timeline events
 * - Reference management
 * - Status workflow (draft, review, published)
 */

import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ITimelineEvent {
    year: number;
    title: string;
    description: string;
}

export interface IReference {
    title: string;
    author?: string;
    year?: number;
    publication?: string;
    link?: string;
}

export interface ILeader extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    slug: string;
    photo?: string;
    birthDate?: Date;
    deathDate?: Date;
    birthPlace?: string;
    deathPlace?: string;
    region?: string;
    shortBio?: string;
    biography: string;
    contributions: string[];
    timeline: ITimelineEvent[];
    references: IReference[];
    tags: string[];
    relatedLeaders: mongoose.Types.ObjectId[];
    relatedArticles: mongoose.Types.ObjectId[];
    featured: boolean;
    status: 'draft' | 'review' | 'published' | 'archived';
    author: mongoose.Types.ObjectId;
    views: number;
    createdAt: Date;
    updatedAt: Date;
}

const TimelineEventSchema = new Schema<ITimelineEvent>(
    {
        year: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { _id: false }
);

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

const LeaderSchema = new Schema<ILeader>(
    {
        name: {
            type: String,
            required: [true, 'Leader name is required'],
            trim: true,
            maxlength: [200, 'Name cannot exceed 200 characters'],
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        photo: {
            type: String,
            default: null,
        },
        birthDate: Date,
        deathDate: Date,
        birthPlace: {
            type: String,
            maxlength: [200, 'Birth place cannot exceed 200 characters'],
        },
        deathPlace: {
            type: String,
            maxlength: [200, 'Death place cannot exceed 200 characters'],
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
        shortBio: {
            type: String,
            maxlength: [500, 'Short bio cannot exceed 500 characters'],
        },
        biography: {
            type: String,
            required: [true, 'Biography is required'],
        },
        contributions: [{
            type: String,
        }],
        timeline: [TimelineEventSchema],
        references: [ReferenceSchema],
        tags: [{
            type: String,
            lowercase: true,
        }],
        relatedLeaders: [{
            type: Schema.Types.ObjectId,
            ref: 'Leader',
        }],
        relatedArticles: [{
            type: Schema.Types.ObjectId,
            ref: 'Article',
        }],
        featured: {
            type: Boolean,
            default: false,
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
LeaderSchema.index({ name: 'text', shortBio: 'text', biography: 'text', tags: 'text' });
LeaderSchema.index({ status: 1 });
LeaderSchema.index({ featured: 1, status: 1 });
LeaderSchema.index({ region: 1 });
LeaderSchema.index({ birthDate: 1 });
LeaderSchema.index({ tags: 1 });
LeaderSchema.index({ createdAt: -1 });
LeaderSchema.index({ views: -1 });

// Virtual for age calculation
LeaderSchema.virtual('age').get(function () {
    if (!this.birthDate) return null;
    const endDate = this.deathDate || new Date();
    const birth = new Date(this.birthDate);
    const death = new Date(endDate);
    let age = death.getFullYear() - birth.getFullYear();
    const monthDiff = death.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && death.getDate() < birth.getDate())) {
        age--;
    }
    return age;
});

// Virtual for lifespan string
LeaderSchema.virtual('lifespan').get(function () {
    if (!this.birthDate && !this.deathDate) return 'Unknown';
    const birthYear = this.birthDate ? new Date(this.birthDate).getFullYear() : '?';
    const deathYear = this.deathDate ? new Date(this.deathDate).getFullYear() : 'Present';
    return `${birthYear} - ${deathYear}`;
});

// Ensure virtuals are included in JSON
LeaderSchema.set('toJSON', { virtuals: true });
LeaderSchema.set('toObject', { virtuals: true });

const Leader: Model<ILeader> =
    mongoose.models.Leader || mongoose.model<ILeader>('Leader', LeaderSchema);

export default Leader;
