/**
 * ============================================
 * HistoricalEvent Model - Mongoose Schema
 * ============================================
 * Stores historical events in Bodo history,
 * including political events, cultural milestones,
 * and significant occurrences
 */

import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IReference {
    title: string;
    author?: string;
    year?: number;
    publication?: string;
    link?: string;
}

export interface IHistoricalEvent extends Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    slug: string;
    date: Date;
    year: number;
    month?: number;
    day?: number;
    description: string;
    significance: string;
    type: 'political' | 'cultural' | 'religious' | 'social' | 'economic' | 'educational' | 'conflict' | 'achievement' | 'memorial';
    category: string;
    location?: {
        place?: string;
        district?: string;
        state?: string;
        region?: string;
    };
    participants: {
        leaders: mongoose.Types.ObjectId[];
        organizations: mongoose.Types.ObjectId[];
        groups?: string[];
    };
    movements: mongoose.Types.ObjectId[];
    outcomes: string[];
    relatedEvents: mongoose.Types.ObjectId[];
    media?: {
        images?: string[];
        videos?: string[];
        documents?: string[];
    };
    references: IReference[];
    tags: string[];
    imageUrl?: string;
    featured: boolean;
    status: 'draft' | 'review' | 'published' | 'archived';
    views: number;
    createdAt: Date;
    updatedAt: Date;
}

const ReferenceSchema = new Schema<IReference>(
    {
        title: { type: String, required: true },
        author: String,
        year: Number,
        publication: String,
        link: String,
    },
    { _id: false }
);

const LocationSchema = new Schema(
    {
        place: String,
        district: String,
        state: { type: String, default: 'Assam' },
        region: String,
    },
    { _id: false }
);

const ParticipantsSchema = new Schema(
    {
        leaders: [{
            type: Schema.Types.ObjectId,
            ref: 'Leader',
        }],
        organizations: [{
            type: Schema.Types.ObjectId,
            ref: 'Organization',
        }],
        groups: [String],
    },
    { _id: false }
);

const MediaSchema = new Schema(
    {
        images: [String],
        videos: [String],
        documents: [String],
    },
    { _id: false }
);

const HistoricalEventSchema = new Schema<IHistoricalEvent>(
    {
        title: {
            type: String,
            required: [true, 'Event title is required'],
            trim: true,
            maxlength: [300, 'Title cannot exceed 300 characters'],
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        date: {
            type: Date,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        month: Number,
        day: Number,
        description: {
            type: String,
            required: [true, 'Description is required'],
        },
        significance: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ['political', 'cultural', 'religious', 'social', 'economic', 'educational', 'conflict', 'achievement', 'memorial'],
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        location: LocationSchema,
        participants: ParticipantsSchema,
        movements: [{
            type: Schema.Types.ObjectId,
            ref: 'Movement',
        }],
        outcomes: [{
            type: String,
        }],
        relatedEvents: [{
            type: Schema.Types.ObjectId,
            ref: 'HistoricalEvent',
        }],
        media: MediaSchema,
        references: [ReferenceSchema],
        tags: [{
            type: String,
            lowercase: true,
        }],
        imageUrl: String,
        featured: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            enum: ['draft', 'review', 'published', 'archived'],
            default: 'published',
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

// Indexes
HistoricalEventSchema.index({ title: 'text', description: 'text', tags: 'text' });
HistoricalEventSchema.index({ year: 1 });
HistoricalEventSchema.index({ type: 1, status: 1 });
HistoricalEventSchema.index({ date: -1 });
HistoricalEventSchema.index({ movements: 1 });
HistoricalEventSchema.index({ 'participants.leaders': 1 });
HistoricalEventSchema.index({ featured: 1, status: 1 });

// Virtual for formatted date
HistoricalEventSchema.virtual('formattedDate').get(function () {
    const date = new Date(this.date);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
});

// Virtual for decade
HistoricalEventSchema.virtual('decade').get(function () {
    return Math.floor(this.year / 10) * 10 + 's';
});

// Ensure virtuals are included
HistoricalEventSchema.set('toJSON', { virtuals: true });
HistoricalEventSchema.set('toObject', { virtuals: true });

const HistoricalEvent: Model<IHistoricalEvent> =
    mongoose.models.HistoricalEvent || mongoose.model<IHistoricalEvent>('HistoricalEvent', HistoricalEventSchema);

export default HistoricalEvent;
