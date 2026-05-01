/**
 * ============================================
 * Leader Data Seed Script
 * ============================================
 * 
 * This script seeds Bodo leader data into MongoDB.
 * It handles upserts by slug to prevent duplicates.
 * 
 * Usage:
 *   npm run seed:leaders        - Seed or update leaders (skips if exists)
 *   npm run seed:leaders:force - Force reseed (deletes and recreates all)
 * 
 * Requirements:
 *   - MONGODB_URI must be set in .env.local
 *   - Run from project root
 * 
 * Example .env.local:
 *   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/bodo-archive
 */

import * as fs from 'fs';
import * as path from 'path';
import mongoose from 'mongoose';

// Check for --force flag
const forceReseed = process.argv.includes('--force');

// ============================================
// Type Definitions
// ============================================

interface ITimelineEvent {
    year: number;
    title: string;
    description: string;
}

interface IReference {
    title: string;
    author?: string;
    year?: number;
    publication?: string;
    link?: string;
}

interface ILeaderSeedData {
    name: string;
    slug: string;
    photo?: string | null;
    birthDate?: string | null;
    deathDate?: string | null;
    region?: string;
    shortBio?: string;
    biography: string;
    contributions?: string[];
    timeline?: ITimelineEvent[];
    references?: IReference[];
    tags?: string[];
    status?: 'draft' | 'review' | 'published' | 'archived';
    featured?: boolean;
}

interface SeedResult {
    name: string;
    action: 'created' | 'updated' | 'skipped' | 'error';
    message?: string;
}

// ============================================
// Leader Schema Definition
// ============================================

const TimelineEventSchema = new mongoose.Schema(
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

const ReferenceSchema = new mongoose.Schema(
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

const LeaderSchema = new mongoose.Schema(
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
            index: true,
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
            enum: ['assam', 'north-bengal', 'darjeeling', 'bhutan', 'other'],
            default: 'assam',
        },
        shortBio: {
            type: String,
            maxlength: [500, 'Short bio cannot exceed 500 characters'],
        },
        biography: {
            type: String,
            required: [true, 'Biography is required'],
        },
        contributions: [
            {
                type: String,
            },
        ],
        timeline: [TimelineEventSchema],
        references: [ReferenceSchema],
        sources: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Source',
            },
        ],
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
        tags: [
            {
                type: String,
                lowercase: true,
            },
        ],
        relatedLeaders: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Leader',
            },
        ],
        relatedArticles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Article',
            },
        ],
        featured: {
            type: Boolean,
            default: false,
            index: true,
        },
        status: {
            type: String,
            enum: ['draft', 'review', 'published', 'archived'],
            default: 'draft',
            index: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false, // Optional for seed data
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
        },
    }
);

// Create text index for search
LeaderSchema.index({ name: 'text', shortBio: 'text', biography: 'text', tags: 'text' });
LeaderSchema.index({ region: 1 });
LeaderSchema.index({ createdAt: -1 });

const Leader = mongoose.model('Leader', LeaderSchema);

// ============================================
// Database Connection
// ============================================

async function connectDB(): Promise<void> {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
        throw new Error(
            'MONGODB_URI is not set in environment variables.\n' +
            'Add this to your .env.local file:\n' +
            'MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bodo-archive'
        );
    }

    try {
        console.log('📦 Connecting to MongoDB...');
        console.log(`   URI: ${MONGODB_URI.replace(/\/\/.*:.*@/, '//[credentials hidden]@')}`);

        await mongoose.connect(MONGODB_URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });

        console.log('✅ Connected to MongoDB\n');
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error);
        throw error;
    }
}

// ============================================
// Load Seed Data
// ============================================

function loadSeedData(): ILeaderSeedData[] {
    try {
        const seedPath = path.join(__dirname, '../src/data/leaders-seed.json');
        
        if (!fs.existsSync(seedPath)) {
            throw new Error(`Seed file not found at: ${seedPath}`);
        }

        const rawData = fs.readFileSync(seedPath, 'utf-8');
        const data = JSON.parse(rawData);

        if (!Array.isArray(data)) {
            throw new Error('Seed file must contain a JSON array');
        }

        console.log(`📖 Loaded ${data.length} leaders from seed file`);
        return data;
    } catch (error) {
        console.error('❌ Failed to load seed data:', error);
        throw error;
    }
}

// ============================================
// Seed Leaders
// ============================================

async function seedLeaders(leaders: ILeaderSeedData[]): Promise<SeedResult[]> {
    console.log(`\n🌱 Seeding ${leaders.length} leaders...\n`);

    const results: SeedResult[] = [];
    let created = 0;
    let updated = 0;
    let errors = 0;

    for (const leaderData of leaders) {
        try {
            // Convert date strings to Date objects if provided
            const processedData = {
                ...leaderData,
                birthDate: leaderData.birthDate ? new Date(leaderData.birthDate) : null,
                deathDate: leaderData.deathDate ? new Date(leaderData.deathDate) : null,
                contributions: leaderData.contributions || [],
                timeline: leaderData.timeline || [],
                references: leaderData.references || [],
                tags: leaderData.tags || [],
                status: leaderData.status || 'published',
                featured: leaderData.featured || false,
            };

            // Upsert by slug
            const result = await Leader.findOneAndUpdate(
                { slug: leaderData.slug },
                processedData,
                { upsert: true, new: true, runValidators: true }
            );

            const isNew = result.createdAt === result.updatedAt || 
                          (new Date(result.updatedAt).getTime() - new Date(result.createdAt).getTime() < 1000);

            const action = isNew ? 'created' : 'updated';
            const symbol = isNew ? '✨' : '🔄';

            console.log(`${symbol} ${action.padEnd(8)} ${leaderData.name}`);

            results.push({
                name: leaderData.name,
                action: action as 'created' | 'updated',
            });

            if (action === 'created') {
                created++;
            } else {
                updated++;
            }
        } catch (error) {
            console.error(`❌ error      ${leaderData.name}`);
            console.error(`   ${error instanceof Error ? error.message : String(error)}\n`);

            results.push({
                name: leaderData.name,
                action: 'error',
                message: error instanceof Error ? error.message : String(error),
            });

            errors++;
        }
    }

    console.log(`\n${'='.repeat(50)}`);
    console.log(`📊 Seed Summary:`);
    console.log(`   ✨ Created: ${created}`);
    console.log(`   🔄 Updated: ${updated}`);
    console.log(`   ❌ Errors:  ${errors}`);
    console.log(`${'='.repeat(50)}\n`);

    return results;
}

// ============================================
// Cleanup & Force Reseed
// ============================================

async function forceCleanup(): Promise<void> {
    console.log('⚠️  Force reseed requested - deleting all leaders...\n');

    try {
        const result = await Leader.deleteMany({});
        console.log(`✅ Deleted ${result.deletedCount} leaders\n`);
    } catch (error) {
        console.error('❌ Failed to delete leaders:', error);
        throw error;
    }
}

// ============================================
// Main Entry Point
// ============================================

async function main() {
    console.log('╔════════════════════════════════════════════════════╗');
    console.log('║         Bodo Research - Leader Seed Script         ║');
    console.log('╚════════════════════════════════════════════════════╝\n');

    if (forceReseed) {
        console.log('Mode: FORCE RESEED (delete and recreate)\n');
    } else {
        console.log('Mode: Standard seed (upsert by slug)\n');
    }

    try {
        // Connect to database
        await connectDB();

        // Force delete if requested
        if (forceReseed) {
            await forceCleanup();
        }

        // Load seed data
        const leaders = loadSeedData();

        // Seed leaders
        const results = await seedLeaders(leaders);

        // Report any errors
        const errors = results.filter(r => r.action === 'error');
        if (errors.length > 0) {
            console.log('⚠️  Some leaders failed to seed:\n');
            for (const error of errors) {
                console.log(`   ❌ ${error.name}`);
                console.log(`      ${error.message}\n`);
            }
        }

        // Disconnect
        await mongoose.disconnect();
        console.log('🔌 Disconnected from MongoDB\n');

        // Exit with error code if there were issues
        if (errors.length > 0) {
            process.exit(1);
        }

        process.exit(0);
    } catch (error) {
        console.error('\n❌ Seed failed:', error);

        try {
            await mongoose.disconnect();
        } catch (_) {
            // Ignore disconnect errors
        }

        process.exit(1);
    }
}

// Run the seed
main();
