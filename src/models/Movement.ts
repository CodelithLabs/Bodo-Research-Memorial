/**
 * ============================================
 * Movement Model - Mongoose Schema
 * ============================================
 * Stores information about Bodo movements, political
 * campaigns, and social reform movements
 */

import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IReference {
    title: string;
    author?: string;
    year?: number;
    publication?: string;
    link?: string;
}

export interface IMovement extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    slug: string;
    alternativeNames?: string[];
    description: string;
    objectives: string[];
    startYear?: number;
    endYear?: number;
    ongoing: boolean;
    type: 'political' | 'social' | 'cultural' | 'religious' | 'armed' | 'diplomatic';
    movementStatus: 'active' | 'ceased' | 'achieved' | 'suspended';
    keyEvents: {
        year: number;
        title: string;
        description: string;
    }[];
    leaders: mongoose.Types.ObjectId[];
    organizations: mongoose.Types.ObjectId[];
    relatedMovements: mongoose.Types.ObjectId[];
    outcomes: string[];
    achievements: string[];
    challenges: string[];
    region: string[];
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

const KeyEventSchema = new Schema(
    {
        year: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
    },
    { _id: false }
);

const MovementSchema = new Schema<IMovement>(
    {
        name: {
            type: String,
            required: [true, 'Movement name is required'],
            trim: true,
            maxlength: [200, 'Name cannot exceed 200 characters'],
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        alternativeNames: [{
            type: String,
        }],
        description: {
            type: String,
            required: [true, 'Description is required'],
        },
        objectives: [{
            type: String,
        }],
        startYear: Number,
        endYear: Number,
        ongoing: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            enum: ['political', 'social', 'cultural', 'religious', 'armed', 'diplomatic'],
            required: true,
        },
        movementStatus: {
            type: String,
            enum: ['active', 'ceased', 'achieved', 'suspended'],
            default: 'active',
        },
        keyEvents: [KeyEventSchema],
        leaders: [{
            type: Schema.Types.ObjectId,
            ref: 'Leader',
        }],
        organizations: [{
            type: Schema.Types.ObjectId,
            ref: 'Organization',
        }],
        relatedMovements: [{
            type: Schema.Types.ObjectId,
            ref: 'Movement',
        }],
        outcomes: [{
            type: String,
        }],
        achievements: [{
            type: String,
        }],
        challenges: [{
            type: String,
        }],
        region: [{
            type: String,
        }],
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
MovementSchema.index({ name: 'text', description: 'text', tags: 'text' });
MovementSchema.index({ type: 1, status: 1 });
MovementSchema.index({ startYear: 1 });
MovementSchema.index({ leaders: 1 });
MovementSchema.index({ organizations: 1 });
MovementSchema.index({ featured: 1, status: 1 });

// Virtual for duration
MovementSchema.virtual('duration').get(function () {
    if (!this.startYear) return 'Ongoing';
    const end = this.endYear || new Date().getFullYear();
    return `${this.startYear} - ${end}`;
});

// Ensure virtuals are included
MovementSchema.set('toJSON', { virtuals: true });
MovementSchema.set('toObject', { virtuals: true });

const Movement: Model<IMovement> =
    mongoose.models.Movement || mongoose.model<IMovement>('Movement', MovementSchema);

export default Movement;
