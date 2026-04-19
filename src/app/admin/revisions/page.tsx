import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth-options';
import { connectDB, LeaderRevision } from '@/models';
import RevisionReviewClient from './RevisionReviewClient';

export default async function AdminRevisionsPage() {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as { role?: string })?.role !== 'admin') {
        redirect('/admin/login');
    }

    await connectDB();

    const revisions = await LeaderRevision.find({ status: 'pending' })
        .populate('leader', 'name biography')
        .populate('editor', 'name email')
        .sort({ createdAt: -1 })
        .lean();

    const formatted = revisions.map((revision) => ({
        id: revision._id.toString(),
        createdAt: revision.createdAt instanceof Date ? revision.createdAt.toISOString() : new Date(revision.createdAt as string).toISOString(),
        leader: revision.leader && typeof revision.leader === 'object'
            ? {
                id: (revision.leader as { _id: { toString: () => string } })._id.toString(),
                name: (revision.leader as { name?: string }).name ?? 'Unknown Leader',
                biography: (revision.leader as { biography?: string }).biography ?? '',
                location: (revision.leader as { location?: { name?: string; latitude?: number; longitude?: number } }).location,
            }
            : {
                id: String(revision.leader ?? ''),
                name: 'Unknown Leader',
                biography: '',
                location: undefined,
            },
        editor: revision.editor && typeof revision.editor === 'object'
            ? {
                id: (revision.editor as { _id: { toString: () => string } })._id.toString(),
                name: (revision.editor as { name?: string }).name ?? 'Unknown Contributor',
                email: (revision.editor as { email?: string }).email ?? '',
            }
            : {
                id: String(revision.editor ?? ''),
                name: 'Unknown Contributor',
                email: '',
            },
        proposedBiography: (revision.content as { biography?: string })?.biography ?? '',
        proposedLocation: (revision as { location?: { name?: string; latitude?: number; longitude?: number } }).location
            ?? (revision.content as { location?: { name?: string; latitude?: number; longitude?: number } })?.location,
    }));

    return <RevisionReviewClient revisions={formatted} />;
}
