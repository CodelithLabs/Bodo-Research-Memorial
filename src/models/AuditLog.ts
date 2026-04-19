/**
 * ============================================
 * Audit Log Model - Mongoose Schema
 * ============================================
 * Records admin/editor actions for accountability
 */

import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IAuditLog extends Document {
    _id: mongoose.Types.ObjectId;
    action: string;
    performedBy: mongoose.Types.ObjectId;
    targetId?: string;
    ip?: string;
    metadata?: Record<string, unknown>;
    createdAt: Date;
    updatedAt: Date;
}

const AuditLogSchema = new Schema<IAuditLog>(
    {
        action: { type: String, required: true },
        performedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        targetId: { type: String, default: null },
        ip: { type: String, default: null },
        metadata: { type: Schema.Types.Mixed, default: null },
    },
    { timestamps: true }
);

AuditLogSchema.index({ action: 1, createdAt: -1 });
AuditLogSchema.index({ performedBy: 1, createdAt: -1 });

const AuditLog: Model<IAuditLog> =
    mongoose.models.AuditLog || mongoose.model<IAuditLog>('AuditLog', AuditLogSchema);

export default AuditLog;
