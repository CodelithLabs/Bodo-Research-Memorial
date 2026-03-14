/**
 * ============================================
 * Organization Model - Mongoose Schema
 * ============================================
 * Stores information about Bodo organizations,
 * institutions, unions, and associations
 */

import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IReference {
    title: string;
    author?: string;
    year?: number;
    publication?: string;
    link?: string;
}

export interface IOrganization extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    slug: string;
    acronym: string;
    alternativeNames?: string[];
    description: string;
    mission?: string;
    vision?: string;
    foundedYear?: number;
    dissolvedYear?: number;
    ongoing: boolean;
    type: 'political' | 'student' | 'cultural' | 'religious' | 'social' | 'educational' | 'economic' | 'youth' | 'women' | 'sports';
    operationalStatus: 'active' | 'inactive' | 'dissolved';
    headquarters: {
        address?: string;
        district?: string;
        state?: string;
    };
    keyMembers: {
        name: string;
        role: string;
        tenure?: string;
        imageUrl?: string;
    }[];
    foundingMembers?: string[];
    movements: mongoose.Types.ObjectId[];
    relatedOrganizations: mongoose.Types.ObjectId[];
    achievements: string[];
    programs?: string[];
    publications?: string[];
    contact?: {
        email?: string;
        phone?: string;
        website?: string;
        socialMedia?: {
            facebook?: string;
            twitter?: string;
            instagram?: string;
        };
    };
    region: string[];
    references: IReference[];
    tags: string[];
    logoUrl?: string;
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

const KeyMemberSchema = new Schema(
    {
        name: { type: String, required: true },
        role: { type: String, required: true },
        tenure: String,
        imageUrl: String,
    },
    { _id: false }
);

const HeadquartersSchema = new Schema(
    {
        address: String,
        district: String,
        state: { type: String, default: 'Assam' },
    },
    { _id: false }
);

const ContactSchema = new Schema(
    {
        email: String,
        phone: String,
        website: String,
        socialMedia: {
            facebook: String,
            twitter: String,
            instagram: String,
        },
    },
    { _id: false }
);

const OrganizationSchema = new Schema<IOrganization>(
    {
        name: {
            type: String,
            required: [true, 'Organization name is required'],
            trim: true,
            maxlength: [200, 'Name cannot exceed 200 characters'],
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        acronym: {
            type: String,
            maxlength: [20, 'Acronym cannot exceed 20 characters'],
        },
        alternativeNames: [{
            type: String,
        }],
        description: {
            type: String,
            required: [true, 'Description is required'],
        },
        mission: String,
        vision: String,
        foundedYear: Number,
        dissolvedYear: Number,
        ongoing: {
            type: Boolean,
            default: true,
        },
        type: {
            type: String,
            enum: ['political', 'student', 'cultural', 'religious', 'social', 'educational', 'economic', 'youth', 'women', 'sports'],
            required: true,
        },
        operationalStatus: {
            type: String,
            enum: ['active', 'inactive', 'dissolved'],
            default: 'active',
        },
        headquarters: HeadquartersSchema,
        keyMembers: [KeyMemberSchema],
        foundingMembers: [{
            type: String,
        }],
        movements: [{
            type: Schema.Types.ObjectId,
            ref: 'Movement',
        }],
        relatedOrganizations: [{
            type: Schema.Types.ObjectId,
            ref: 'Organization',
        }],
        achievements: [{
            type: String,
        }],
        programs: [{
            type: String,
        }],
        publications: [{
            type: String,
        }],
        contact: ContactSchema,
        region: [{
            type: String,
        }],
        references: [ReferenceSchema],
        tags: [{
            type: String,
            lowercase: true,
        }],
        logoUrl: String,
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
OrganizationSchema.index({ name: 'text', description: 'text', tags: 'text' });
OrganizationSchema.index({ type: 1, status: 1 });
OrganizationSchema.index({ foundedYear: 1 });
OrganizationSchema.index({ movements: 1 });
OrganizationSchema.index({ featured: 1, status: 1 });
OrganizationSchema.index({ region: 1 });

// Virtual for duration
OrganizationSchema.virtual('duration').get(function () {
    if (!this.foundedYear) return 'Ongoing';
    const end = this.dissolvedYear || (this.ongoing ? 'Present' : 'Unknown');
    return `${this.foundedYear} - ${end}`;
});

// Ensure virtuals are included
OrganizationSchema.set('toJSON', { virtuals: true });
OrganizationSchema.set('toObject', { virtuals: true });

const Organization: Model<IOrganization> =
    mongoose.models.Organization || mongoose.model<IOrganization>('Organization', OrganizationSchema);

export default Organization;
