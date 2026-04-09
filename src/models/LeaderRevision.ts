/**
 * ============================================
 * Leader Revision Model - Mongoose Schema
 * ============================================
 * Stores draft and reviewable revisions for leaders.
 */

import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ILeaderRevision extends Document {
    _id: mongoose.Types.ObjectId;
    leader: mongoose.Types.ObjectId;
    content: Record<string, unknown>;
    editor: mongoose.Types.ObjectId;
    status: 'pending' | 'approved' | 'rejected';
    sources: mongoose.Types.ObjectId[];
    location?: {
        name?: string;
        latitude?: number;
        longitude?: number;
    };
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
}

const LeaderRevisionSchema = new Schema<ILeaderRevision>(
    {
        leader: {
            type: Schema.Types.ObjectId,
            ref: 'Leader',
            required: true,
            index: true,
        },
        content: {
            type: Schema.Types.Mixed,
            required: true,
        },
        editor: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending',
            index: true,
        },
        sources: [{
            type: Schema.Types.ObjectId,
            ref: 'Source',
        }],
        location: {
            name: {
                type: String,
                trim: true,
                maxlength: [200, 'Location name cannot exceed 200 characters'],
            },
            latitude: {
                type: Number,
                min: [-90, 'Latitude must be >= -90'],
                max: [90, 'Latitude must be <= 90'],
            },
            longitude: {
                type: Number,
                min: [-180, 'Longitude must be >= -180'],
                max: [180, 'Longitude must be <= 180'],
            },
        },
        notes: {
            type: String,
            maxlength: [2000, 'Notes cannot exceed 2000 characters'],
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

LeaderRevisionSchema.index({ leader: 1, createdAt: -1 });
LeaderRevisionSchema.index({ status: 1, createdAt: -1 });
LeaderRevisionSchema.index({ editor: 1, createdAt: -1 });

const LeaderRevision: Model<ILeaderRevision> =
    mongoose.models.LeaderRevision || mongoose.model<ILeaderRevision>('LeaderRevision', LeaderRevisionSchema);

export default LeaderRevision;
