/**
 * ============================================
 * ArchiveItem Model - Mongoose Schema
 * ============================================
 * Stores digital cultural archive items including
 * photographs, manuscripts, documents, and artifacts
 */

import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IArchiveItem extends Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    slug: string;
    description: string;
    type: 'photograph' | 'document' | 'manuscript' | 'artifact' | 'audio' | 'video' | 'newspaper' | 'map' | 'letter' | 'certificate' | 'other';
    category: string;
    dateItem: Date;
    year?: number;
    decade?: string;
    origin: {
        place?: string;
        district?: string;
        state?: string;
        region?: string;
    };
    creator?: {
        name?: string;
        photographer?: string;
        author?: string;
        publisher?: string;
    };
    subject: string[];
    content?: string;
    language?: string;
    dimensions?: string;
    medium?: string;
    condition: 'excellent' | 'good' | 'fair' | 'poor';
    source: {
        name?: string;
        collection?: string;
        donor?: string;
        accessionNumber?: string;
    };
    rights: {
        status: 'public' | 'restricted' | 'copyright' | 'unknown';
        holder?: string;
        license?: string;
    };
    relatedLeaders: mongoose.Types.ObjectId[];
    relatedOrganizations: mongoose.Types.ObjectId[];
    relatedMovements: mongoose.Types.ObjectId[];
    relatedEvents: mongoose.Types.ObjectId[];
    relatedTopics: mongoose.Types.ObjectId[];
    media: {
        primaryImage: string;
        images: string[];
        audio?: string;
        video?: string;
        documents?: string[];
    };
    metadata: Record<string, string>;
    tags: string[];
    featured: boolean;
    status: 'draft' | 'review' | 'published' | 'archived';
    views: number;
    createdAt: Date;
    updatedAt: Date;
}

const OriginSchema = new Schema(
    {
        place: String,
        district: String,
        state: { type: String, default: 'Assam' },
        region: String,
    },
    { _id: false }
);

const CreatorSchema = new Schema(
    {
        name: String,
        photographer: String,
        author: String,
        publisher: String,
    },
    { _id: false }
);

const SourceSchema = new Schema(
    {
        name: String,
        collection: String,
        donor: String,
        accessionNumber: String,
    },
    { _id: false }
);

const RightsSchema = new Schema(
    {
        status: {
            type: String,
            enum: ['public', 'restricted', 'copyright', 'unknown'],
            default: 'unknown',
        },
        holder: String,
        license: String,
    },
    { _id: false }
);

const MediaSchema = new Schema(
    {
        primaryImage: String,
        images: [String],
        audio: String,
        video: String,
        documents: [String],
    },
    { _id: false }
);

const ArchiveItemSchema = new Schema<IArchiveItem>(
    {
        title: {
            type: String,
            required: [true, 'Archive item title is required'],
            trim: true,
            maxlength: [300, 'Title cannot exceed 300 characters'],
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
        },
        type: {
            type: String,
            enum: ['photograph', 'document', 'manuscript', 'artifact', 'audio', 'video', 'newspaper', 'map', 'letter', 'certificate', 'other'],
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        dateItem: {
            type: Date,
            required: true,
        },
        year: Number,
        decade: String,
        origin: OriginSchema,
        creator: CreatorSchema,
        subject: [{
            type: String,
        }],
        content: String,
        language: {
            type: String,
            default: 'Bodo',
        },
        dimensions: String,
        medium: String,
        condition: {
            type: String,
            enum: ['excellent', 'good', 'fair', 'poor'],
            default: 'good',
        },
        source: SourceSchema,
        rights: RightsSchema,
        relatedLeaders: [{
            type: Schema.Types.ObjectId,
            ref: 'Leader',
        }],
        relatedOrganizations: [{
            type: Schema.Types.ObjectId,
            ref: 'Organization',
        }],
        relatedMovements: [{
            type: Schema.Types.ObjectId,
            ref: 'Movement',
        }],
        relatedEvents: [{
            type: Schema.Types.ObjectId,
            ref: 'HistoricalEvent',
        }],
        relatedTopics: [{
            type: Schema.Types.ObjectId,
            ref: 'Article',
        }],
        media: MediaSchema,
        metadata: {
            type: Map,
            of: String,
        },
        tags: [{
            type: String,
            lowercase: true,
        }],
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
ArchiveItemSchema.index({ title: 'text', description: 'text', tags: 'text' });
ArchiveItemSchema.index({ type: 1, status: 1 });
ArchiveItemSchema.index({ year: 1 });
ArchiveItemSchema.index({ category: 1 });
ArchiveItemSchema.index({ 'origin.district': 1 });
ArchiveItemSchema.index({ featured: 1, status: 1 });
ArchiveItemSchema.index({ relatedLeaders: 1 });
ArchiveItemSchema.index({ relatedOrganizations: 1 });
ArchiveItemSchema.index({ relatedMovements: 1 });

// Virtual for formatted date
ArchiveItemSchema.virtual('formattedDate').get(function () {
    const date = new Date(this.dateItem);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
});

// Ensure virtuals are included
ArchiveItemSchema.set('toJSON', { virtuals: true });
ArchiveItemSchema.set('toObject', { virtuals: true });

const ArchiveItem: Model<IArchiveItem> =
    mongoose.models.ArchiveItem || mongoose.model<IArchiveItem>('ArchiveItem', ArchiveItemSchema);

export default ArchiveItem;
