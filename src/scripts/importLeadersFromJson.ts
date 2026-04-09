/**
 * Import leaders from src/data/bodo_leaders.json into MongoDB.
 *
 * Usage:
 *   pnpm ts-node src/scripts/importLeadersFromJson.ts
 *   pnpm ts-node src/scripts/importLeadersFromJson.ts --dry-run
 */

import { connectDB, Leader, LeaderRevision, Source, User } from '@/models';
import leadersData from '@/data/bodo_leaders.json';

interface RawLeader {
    id: string;
    name: string;
    birth_year?: number;
    death_year?: number;
    birth_place?: string;
    category?: string;
    title?: string;
    biography?: string;
    major_contributions?: string[];
    organizations?: string[];
    awards?: string[];
    related_movements?: string[];
    image?: string;
    sources?: string[];
}

const IMPORT_USER_EMAIL = 'system-import@bodo.local';
const DRY_RUN = process.argv.includes('--dry-run');

function yearToDate(year?: number): Date | undefined {
    if (!year) return undefined;
    return new Date(`${year}-01-01T00:00:00.000Z`);
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
        password: '$2a$12$dummyfortseeding',
    });
}

async function upsertSources(rawSources: string[] | undefined) {
    if (!rawSources?.length) return [] as string[];

    const sourceIds: string[] = [];
    for (const sourceTitle of rawSources) {
        const trimmed = sourceTitle.trim();
        if (!trimmed) continue;

        const existing = await Source.findOne({ title: trimmed });
        if (existing) {
            sourceIds.push(existing._id.toString());
            continue;
        }

        if (DRY_RUN) {
            sourceIds.push('dry-run-source-id');
            continue;
        }

        const created = await Source.create({
            title: trimmed,
            type: 'other',
        });
        sourceIds.push(created._id.toString());
    }

    return sourceIds;
}

async function importLeaders() {
    if (!process.env.MONGODB_URI) {
        console.error('❌ Error: MONGODB_URI is not set in environment variables');
        process.exit(1);
    }

    const raw = leadersData as { bodo_leaders: RawLeader[] };

    console.log(`📦 Connecting to MongoDB (${DRY_RUN ? 'dry run' : 'write mode'})...`);
    await connectDB();

    const importUser = await getImportUser();
    if (!importUser) {
        console.error('❌ Unable to locate or create an import user');
        process.exit(1);
    }

    let createdCount = 0;
    let updatedCount = 0;
    let revisionCount = 0;

    for (const leader of raw.bodo_leaders) {
        const slug = leader.id?.trim();
        if (!slug) continue;

        const sourceIds = await upsertSources(leader.sources);
        const leaderPayload = {
            name: leader.name,
            slug,
            photo: leader.image || null,
            birthDate: yearToDate(leader.birth_year),
            deathDate: yearToDate(leader.death_year),
            birthPlace: leader.birth_place,
            shortBio: leader.title,
            biography: leader.biography || '',
            contributions: leader.major_contributions || [],
            tags: leader.category ? [leader.category.toLowerCase()] : [],
            sources: sourceIds,
            status: 'published' as const,
            featured: false,
            author: importUser._id,
        };

        if (DRY_RUN) {
            createdCount += 1;
            continue;
        }

        const existing = await Leader.findOne({ slug });
        if (existing) {
            await Leader.updateOne({ _id: existing._id }, leaderPayload);
            updatedCount += 1;
        } else {
            await Leader.create(leaderPayload);
            createdCount += 1;
        }

        const leaderDoc = await Leader.findOne({ slug });
        if (!leaderDoc) continue;

        const revisionPayload = {
            leader: leaderDoc._id,
            content: {
                name: leader.name,
                birth_year: leader.birth_year,
                death_year: leader.death_year,
                birth_place: leader.birth_place,
                category: leader.category,
                title: leader.title,
                biography: leader.biography,
                major_contributions: leader.major_contributions,
                organizations: leader.organizations,
                awards: leader.awards,
                related_movements: leader.related_movements,
                image: leader.image,
                sources: leader.sources,
            },
            editor: importUser._id,
            status: 'approved' as const,
            sources: sourceIds,
            notes: 'Imported from bodo_leaders.json',
        };

        await LeaderRevision.create(revisionPayload);
        revisionCount += 1;
    }

    console.log('✅ Import complete');
    console.log(`   Leaders created: ${createdCount}`);
    console.log(`   Leaders updated: ${updatedCount}`);
    console.log(`   Revisions created: ${revisionCount}`);
}

importLeaders().catch((error) => {
    console.error('❌ Import failed:', error);
    process.exit(1);
});
