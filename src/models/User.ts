/**
 * ============================================
 * User Model - Mongoose Schema
 * ============================================
 * Handles user authentication and authorization
 * with role-based access control (RBAC)
 * 
 * Roles:
 * - ADMIN: Full system access
 * - EDITOR: Can create/edit articles
 * - PUBLIC: Read-only access
 */

import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'editor' | 'public';
    avatar?: string;
    bio?: string;
    isActive: boolean;
    lastLogin?: Date;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface IUserMethods {
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser, Model<IUser>, IUserMethods>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            maxlength: [100, 'Name cannot exceed 100 characters'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true,
            match: [
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                'Please enter a valid email',
            ],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [8, 'Password must be at least 8 characters'],
            select: false, // Don't include in queries by default
        },
        role: {
            type: String,
            enum: ['admin', 'editor', 'public'],
            default: 'public',
        },
        avatar: {
            type: String,
            default: null,
        },
        bio: {
            type: String,
            maxlength: [500, 'Bio cannot exceed 500 characters'],
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        lastLogin: {
            type: Date,
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
                delete ret.password;
                return ret;
            },
        },
    }
);

// Index for efficient queries
UserSchema.index({ email: 1 });
UserSchema.index({ role: 1 });

// Hash password before saving
UserSchema.pre('save', async function (next: (err?: Error) => void) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error as Error);
    }
});

// Compare password method
UserSchema.methods.comparePassword = async function (
    candidatePassword: string
): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
};

// Virtual for user's initials (for avatar)
UserSchema.virtual('initials').get(function () {
    return this.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
});

const User: Model<IUser, Record<string, never>, IUserMethods> =
    mongoose.models.User || mongoose.model<IUser, Model<IUser, Record<string, never>, IUserMethods>>('User', UserSchema);

export default User;
