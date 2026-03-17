/**
 * MongoDB Seed Script for Bodo Research Memorial
 * 
 * Usage:
 *   npm run seed        - Run seed (skip if already seeded)
 *   npm run seed:force - Force reseed (drop and recreate)
 * 
 * Requirements:
 *   - MONGODB_URI must be set in .env.local
 *   - Run from project root
 */

import { connectDB, Leader, Article, Category, HistoricalEvent, User } from '@/models';
import { SEED_LEADERS } from '@/data/seed/leaders';
import { SEED_CULTURE_ARTICLES } from '@/data/seed/culture';
import { SEED_RELIGION_ARTICLES } from '@/data/seed/religion';
import { SEED_TIMELINE_EVENTS } from '@/data/seed/timeline';

// Check for --force flag
const forceReseed = process.argv.includes('--force');

// Seed marker to track what has been seeded
const SEED_MARKER = 'bodo-research-seed-v1';

interface SeedResult {
    collection: string;
    action: 'seeded' | 'skipped' | 'error';
    count?: number;
    error?: string;
}

async function seed() {
    console.log('🌱 Starting Bodo Research Memorial Seed...\n');

    if (!process.env.MONGODB_URI) {
        console.error('❌ Error: MONGODB_URI is not set in environment variables');
        console.log('   Add MONGODB_URI to your .env.local file');
        process.exit(1);
    }

    const results: SeedResult[] = [];

    try {
        // Connect to database
        console.log('📦 Connecting to MongoDB...');
        await connectDB();
        console.log('✅ Connected to MongoDB\n');

        // Check if already seeded
        const existingMarker = await User.findOne({ email: SEED_MARKER });
        if (existingMarker && !forceReseed) {
            console.log('→ Database already seeded (use --force to reseed)\n');

            // Just report current counts
            const leaderCount = await Leader.countDocuments();
            const articleCount = await Article.countDocuments();
            const eventCount = await HistoricalEvent.countDocuments();

            console.log('Current data:');
            console.log(`   - Leaders: ${leaderCount}`);
            console.log(`   - Articles: ${articleCount}`);
            console.log(`   - Events: ${eventCount}`);

            process.exit(0);
        }

        if (forceReseed) {
            console.log('⚠️  Force reseed requested - dropping existing data...\n');

            // Drop collections (careful in production!)
            await Leader.deleteMany({});
            await Article.deleteMany({});
            await HistoricalEvent.deleteMany({});
            await Category.deleteMany({});

            console.log('✅ Existing data cleared\n');
        }

        // Create seed marker user (a system account)
        const seedUser = await User.findOneAndUpdate(
            { email: SEED_MARKER },
            {
                name: 'System Seed',
                email: SEED_MARKER,
                role: 'admin',
                password: '$2a$12$dummyfortseeding', // Placeholder - not usable
            },
            { upsert: true, new: true }
        );
        console.log('✅ Seed marker created\n');

        // ============================================
        // SEED CATEGORIES
        // ============================================
        console.log('📚 Seeding categories...');

        const categories = [
            { name: 'Culture', slug: 'culture', type: 'article', color: '#44CC44', order: 1 },
            { name: 'Religion', slug: 'religion', type: 'article', color: '#800000', order: 2 },
            { name: 'Festivals', slug: 'festivals', type: 'culture', color: '#FFD700', order: 3 },
            { name: 'Performing Arts', slug: 'performing-arts', type: 'culture', color: '#0F3D2E', order: 4 },
            { name: 'Material Culture', slug: 'material-culture', type: 'culture', color: '#800000', order: 5 },
            { name: 'Food Culture', slug: 'food-culture', type: 'culture', color: '#44CC44', order: 6 },
            { name: 'Architecture', slug: 'architecture', type: 'culture', color: '#0F3D2E', order: 7 },
            { name: 'Political', slug: 'political', type: 'timeline', color: '#0F3D2E', order: 8 },
            { name: 'Social', slug: 'social', type: 'timeline', color: '#44CC44', order: 9 },
            { name: 'Literary', slug: 'literary', type: 'timeline', color: '#800000', order: 10 },
            { name: 'Accord', slug: 'accord', type: 'timeline', color: '#FFD700', order: 11 },
        ];

        await Category.deleteMany({ slug: { $in: categories.map(c => c.slug) } });
        await Category.insertMany(categories);

        results.push({ collection: 'categories', action: 'seeded', count: categories.length });
        console.log(`   ✓ Seeded ${categories.length} categories\n`);

        // ============================================
        // SEED LEADERS
        // ============================================
        console.log('👤 Seeding leaders...');

        await Leader.deleteMany({ slug: { $in: SEED_LEADERS.map(l => l.slug) } });

        const leaderDocs = SEED_LEADERS.map(leader => ({
            name: leader.name,
            slug: leader.slug,
            title: leader.featured ? 'Prominent Bodo Leader' : 'Bodo Leader',
            birthYear: leader.birthYear,
            deathYear: leader.deathYear,
            birthDate: leader.birthYear ? `${leader.birthYear}-01-01` : null,
            deathDate: leader.deathYear ? `${leader.deathYear}-01-01` : null,
            region: leader.region,
            biography: leader.biography,
            contributions: leader.contributions,
            timeline: leader.timeline,
            tags: leader.tags,
            status: 'published' as const,
            featured: leader.featured,
            author: seedUser._id,
            views: 0,
        }));

        await Leader.insertMany(leaderDocs);
        results.push({ collection: 'leaders', action: 'seeded', count: leaderDocs.length });
        console.log(`   ✓ Seeded ${leaderDocs.length} leaders\n`);

        // ============================================
        // SEED CULTURE ARTICLES
        // ============================================
        console.log('📖 Seeding culture articles...');

        const cultureCategory = await Category.findOne({ slug: 'culture' });

        await Article.deleteMany({ slug: { $in: SEED_CULTURE_ARTICLES.map(a => a.slug) } });

        const cultureDocs = SEED_CULTURE_ARTICLES.map(article => ({
            title: article.title,
            slug: article.slug,
            summary: article.summary,
            content: article.content,
            category: cultureCategory?._id,
            tags: article.tags,
            status: 'published' as const,
            featured: false,
            author: seedUser._id,
            readingTime: article.readingTime,
            publishedAt: new Date(),
            views: 0,
        }));

        await Article.insertMany(cultureDocs);
        results.push({ collection: 'culture_articles', action: 'seeded', count: cultureDocs.length });
        console.log(`   ✓ Seeded ${cultureDocs.length} culture articles\n`);

        // ============================================
        // SEED RELIGION ARTICLES
        // ============================================
        console.log('📖 Seeding religion articles...');

        const religionCategory = await Category.findOne({ slug: 'religion' });

        await Article.deleteMany({ slug: { $in: SEED_RELIGION_ARTICLES.map(a => a.slug) } });

        const religionDocs = SEED_RELIGION_ARTICLES.map(article => ({
            title: article.title,
            slug: article.slug,
            summary: article.summary,
            content: article.content,
            category: religionCategory?._id,
            tags: article.tags,
            status: 'published' as const,
            featured: false,
            author: seedUser._id,
            readingTime: article.readingTime,
            publishedAt: new Date(),
            views: 0,
        }));

        await Article.insertMany(religionDocs);
        results.push({ collection: 'religion_articles', action: 'seeded', count: religionDocs.length });
        console.log(`   ✓ Seeded ${religionDocs.length} religion articles\n`);

        // ============================================
        // SEED TIMELINE EVENTS
        // ============================================
        console.log('📅 Seeding timeline events...');

        await HistoricalEvent.deleteMany({ slug: { $in: SEED_TIMELINE_EVENTS.map(e => `event-${e.year}`) } });

        const eventDocs = SEED_TIMELINE_EVENTS.map(event => ({
            title: event.title,
            slug: `event-${event.year}`,
            year: event.year,
            description: event.description,
            category: event.category,
            significance: event.significance,
            status: 'published' as const,
            author: seedUser._id,
        }));

        await HistoricalEvent.insertMany(eventDocs);
        results.push({ collection: 'timeline_events', action: 'seeded', count: eventDocs.length });
        console.log(`   ✓ Seeded ${eventDocs.length} timeline events\n`);

        // ============================================
        // SUMMARY
        // ============================================
        console.log('='.repeat(50));
        console.log('✅ Seed completed successfully!\n');
        console.log('Summary:');

        for (const result of results) {
            console.log(`   - ${result.collection}: ${result.count} ${result.action}`);
        }

        console.log('\n📝 Note: The seed marker user was created for tracking purposes.');
        console.log('   Password is a placeholder and cannot be used for login.\n');

        process.exit(0);

    } catch (error) {
        console.error('\n❌ Seed failed:', error);
        results.push({
            collection: 'seed',
            action: 'error',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
        process.exit(1);
    }
}

// Run the seed
seed();
