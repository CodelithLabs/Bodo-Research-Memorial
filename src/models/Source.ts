/**
 * ============================================
 * Source Model - Mongoose Schema
 * ============================================
 * Stores citations and verification sources
 * for leaders, articles, and revisions.
 */

import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ISource extends Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    authors?: string[];
    year?: number;
    publisher?: string;
    url?: string;
    type: 'book' | 'article' | 'archive' | 'website' | 'oral' | 'other';
    notes?: string;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const SourceSchema = new Schema<ISource>(
    {
        title: {
            type: String,
            required: [true, 'Source title is required'],
            trim: true,
            maxlength: [400, 'Source title cannot exceed 400 characters'],
        },
        authors: [{
            type: String,
            trim: true,
        }],
        year: Number,
        publisher: {
            type: String,
            trim: true,
            maxlength: [200, 'Publisher cannot exceed 200 characters'],
        },
        url: {
            type: String,
            trim: true,
            maxlength: [500, 'URL cannot exceed 500 characters'],
        },
        type: {
            type: String,
            enum: ['book', 'article', 'archive', 'website', 'oral', 'other'],
            default: 'other',
        },
        notes: {
            type: String,
            maxlength: [1000, 'Notes cannot exceed 1000 characters'],
        },
        verified: {
            type: Boolean,
            default: false,
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

SourceSchema.index({ title: 'text', authors: 'text', publisher: 'text' });
SourceSchema.index({ type: 1 });
SourceSchema.index({ verified: 1 });
SourceSchema.index({ createdAt: -1 });

const Source: Model<ISource> =
    mongoose.models.Source || mongoose.model<ISource>('Source', SourceSchema);

export default Source;
