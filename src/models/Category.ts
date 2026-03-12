/**
 * ============================================
 * Category Model - Mongoose Schema
 * ============================================
 * Organizes articles into hierarchical categories
 * for better content management and navigation
 */

import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ICategory extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    slug: string;
    description?: string;
    icon?: string;
    color?: string;
    parentCategory?: mongoose.Types.ObjectId;
    order: number;
    isActive: boolean;
    articleCount: number;
    createdAt: Date;
    updatedAt: Date;
}

const CategorySchema = new Schema<ICategory>(
    {
        name: {
            type: String,
            required: [true, 'Category name is required'],
            trim: true,
            maxlength: [100, 'Name cannot exceed 100 characters'],
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        description: {
            type: String,
            maxlength: [500, 'Description cannot exceed 500 characters'],
        },
        icon: {
            type: String, // Lucide icon name
        },
        color: {
            type: String, // Hex color code
            match: [/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Please enter a valid hex color'],
        },
        parentCategory: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            default: null,
        },
        order: {
            type: Number,
            default: 0,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        articleCount: {
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
CategorySchema.index({ parentCategory: 1 });
CategorySchema.index({ order: 1 });
CategorySchema.index({ isActive: 1 });

const Category: Model<ICategory> =
    mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);

// Default categories seeder
const defaultCategories = [
    {
        name: 'Leaders',
        slug: 'leaders',
        description: 'Biographies of Bodo leaders, freedom fighters, and political figures',
        icon: 'Crown',
        color: '#8B5CF6',
        order: 1,
    },
    {
        name: 'Culture',
        slug: 'culture',
        description: 'Bodo traditions, festivals, customs, and way of life',
        icon: 'Heart',
        color: '#EC4899',
        order: 2,
    },
    {
        name: 'Religion',
        slug: 'religion',
        description: 'Bathou religion, rituals, philosophy, and sacred traditions',
        icon: 'Sparkles',
        color: '#F59E0B',
        order: 3,
    },
    {
        name: 'History',
        slug: 'history',
        description: 'Historical events, periods, and timeline of Bodo civilization',
        icon: 'BookOpen',
        color: '#3B82F6',
        order: 4,
    },
    {
        name: 'Language',
        slug: 'language',
        description: 'Bodo language, linguistics, literature, and scripts',
        icon: 'Languages',
        color: '#10B981',
        order: 5,
    },
    {
        name: 'Music & Dance',
        slug: 'music-dance',
        description: 'Traditional Bodo music, dance forms, and performing arts',
        icon: 'Music',
        color: '#EF4444',
        order: 6,
    },
    {
        name: 'Cuisine',
        slug: 'cuisine',
        description: 'Traditional Bodo food, recipes, and culinary traditions',
        icon: 'Utensils',
        color: '#F97316',
        order: 7,
    },
    {
        name: 'Regions',
        slug: 'regions',
        description: 'Bodo inhabited regions across Assam, West Bengal, and Bhutan',
        icon: 'MapPin',
        color: '#06B6D4',
        order: 8,
    },
];

/**
 * Initialize default categories if they don't exist
 */
async function seedCategories(): Promise<void> {
    try {
        for (const category of defaultCategories) {
            await Category.findOneAndUpdate(
                { slug: category.slug },
                category,
                { upsert: true, new: true }
            );
        }
        console.log('✅ Default categories seeded successfully');
    } catch (error) {
        console.error('❌ Error seeding categories:', error);
    }
}

export { Category, defaultCategories, seedCategories };
export default Category;
