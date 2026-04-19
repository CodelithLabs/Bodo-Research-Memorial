/**
 * Import leaders from src/data/leaders-seed.json into MongoDB.
 *
 * Usage:
 *   pnpm ts-node --compiler-options '{"module":"CommonJS"}' src/scripts/importLeadersSeedJson.ts
 *   pnpm ts-node --compiler-options '{"module":"CommonJS"}' src/scripts/importLeadersSeedJson.ts --dry-run
 */

import fs from 'node:fs';
import path from 'node:path';
import slugify from 'slugify';
import { connectDB, disconnectDB, Leader, User } from '@/models';

const IMPORT_USER_EMAIL = 'system-import@bodo.local';
const DRY_RUN = process.argv.includes('--dry-run');

const ALLOWED_REGIONS = new Set(['assam', 'north-bengal', 'darjeeling', 'bhutan', 'other']);

type SeedReference = {
    title: string;
    author?: string;
    year?: number;
    publication?: string;
    link?: string;
};

type SeedTimelineEvent = {
    year: number;
    title: string;
    description: string;
};

type SeedLeader = {
    name: string;
    slug?: string;
    photo?: string | null;
    birthDate?: string | null;
    deathDate?: string | null;
    region?: string;
    shortBio?: string;
    biography: string;
    contributions?: string[];
    timeline?: SeedTimelineEvent[];
    references?: SeedReference[];
    tags?: string[];
    status?: 'draft' | 'review' | 'published' | 'archived';
    featured?: boolean;
};

function loadSeedFile(): SeedLeader[] {
    const filePath = path.resolve(process.cwd(), 'src/data/leaders-seed.json');
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as SeedLeader[];
}

function normalizeRegion(region?: string): 'assam' | 'north-bengal' | 'darjeeling' | 'bhutan' | 'other' {
    if (!region) return 'assam';
    const normalized = region.toLowerCase();
    return ALLOWED_REGIONS.has(normalized) ? (normalized as 'assam') : 'assam';
}

function normalizeSlug(name: string, slug?: string): string {
    const base = slug && slug.trim() ? slug : name;
    return slugify(base, { lower: true, strict: true, remove: /[^a-zA-Z0-9\s-]/g });
}

async function getImportUser() {
    const existing = await User.findOne({ email: IMPORT_USER_EMAIL });
    if (existing) return existing;

    if (DRY_RUN) {
        return await User.findOne();
    }

    return User.create({
        name: 'System Import',
        email: IMPORT_USER_EMAIL,
        role: 'admin',
        password: 'ChangeMe123!',
    });
}

async function importLeaders() {
    if (!process.env.MONGODB_URI) {
        console.error('❌ Error: MONGODB_URI is not set in environment variables');
        process.exit(1);
    }

    const leaders = loadSeedFile();

    console.log(`📦 Connecting to MongoDB (${DRY_RUN ? 'dry run' : 'write mode'})...`);
    await connectDB();

    const importUser = await getImportUser();
    if (!importUser) {
        console.error('❌ Unable to locate or create an import user');
        process.exit(1);
    }

    let createdCount = 0;
    let updatedCount = 0;
    let failedCount = 0;

    for (const leader of leaders) {
        const slug = normalizeSlug(leader.name, leader.slug);

        const payload = {
            name: leader.name,
            slug,
            photo: leader.photo ?? null,
            birthDate: leader.birthDate ? new Date(leader.birthDate) : null,
            deathDate: leader.deathDate ? new Date(leader.deathDate) : null,
            region: normalizeRegion(leader.region),
            shortBio: leader.shortBio,
            biography: leader.biography,
            contributions: leader.contributions ?? [],
            timeline: leader.timeline ?? [],
            references: leader.references ?? [],
            tags: leader.tags ?? [],
            status: leader.status ?? 'published',
            featured: leader.featured ?? false,
            author: importUser._id,
        };

        try {
            const existing = await Leader.findOne({ slug });

            if (DRY_RUN) {
                const action = existing ? 'update' : 'create';
                console.log(`🧪 Dry run: would ${action} leader -> ${leader.name} (${slug})`);
                continue;
            }

            if (existing) {
                await Leader.updateOne({ _id: existing._id }, payload);
                updatedCount += 1;
                console.log(`✅ Updated leader -> ${leader.name} (${slug})`);
            } else {
                await Leader.create(payload);
                createdCount += 1;
                console.log(`✅ Created leader -> ${leader.name} (${slug})`);
            }
        } catch (error) {
            failedCount += 1;
            const message = error instanceof Error ? error.message : 'Unknown error';
            console.error(`❌ Failed leader -> ${leader.name} (${slug}): ${message}`);
        }
    }

    console.log('\n✅ Import complete');
    if (DRY_RUN) {
        console.log('   Dry run only: no data was written.');
    }
    console.log(`   Leaders created: ${createdCount}`);
    console.log(`   Leaders updated: ${updatedCount}`);
    console.log(`   Leaders failed: ${failedCount}`);
}

importLeaders()
    .catch((error) => {
        console.error('❌ Import failed:', error);
        process.exit(1);
    })
    .finally(async () => {
        await disconnectDB();
    });
