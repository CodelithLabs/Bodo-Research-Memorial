'use client';

import { useMemo, useState } from 'react';
import { CheckCircle, XCircle, Clock, UserCircle } from 'lucide-react';

interface RevisionRecord {
    id: string;
    createdAt: string;
    leader: {
        id: string;
        name: string;
        biography: string;
        location?: {
            name?: string;
            latitude?: number;
            longitude?: number;
        };
    };
    editor: {
        id: string;
        name: string;
        email: string;
    };
    proposedBiography: string;
    proposedLocation?: {
        name?: string;
        latitude?: number;
        longitude?: number;
    };
}

export default function RevisionReviewClient({ revisions }: { revisions: RevisionRecord[] }) {
    const [items, setItems] = useState(revisions);
    const [rejectingId, setRejectingId] = useState<string | null>(null);
    const [reviewerNote, setReviewerNote] = useState('');
    const [loadingId, setLoadingId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const pendingCount = useMemo(() => items.length, [items]);

    const toPlainText = (input: string) => {
        if (typeof window === 'undefined') return input;
        const doc = new DOMParser().parseFromString(input, 'text/html');
        return doc.body.textContent ?? '';
    };

    const formatLocation = (location?: { name?: string; latitude?: number; longitude?: number }) => {
        if (!location?.name && typeof location?.latitude !== 'number' && typeof location?.longitude !== 'number') {
            return 'No location provided.';
        }

        const name = location?.name ? `${location.name}` : 'Unnamed location';
        const lat = typeof location?.latitude === 'number' ? location.latitude.toFixed(4) : 'N/A';
        const lng = typeof location?.longitude === 'number' ? location.longitude.toFixed(4) : 'N/A';

        return `${name} (Lat ${lat}, Lng ${lng})`;
    };

    const isLocationChanged = (current?: { name?: string; latitude?: number; longitude?: number }, proposed?: { name?: string; latitude?: number; longitude?: number }) => {
        return (current?.name || '') !== (proposed?.name || '')
            || (current?.latitude ?? null) !== (proposed?.latitude ?? null)
            || (current?.longitude ?? null) !== (proposed?.longitude ?? null);
    };

    const handleApprove = async (revisionId: string) => {
        setLoadingId(revisionId);
        setError(null);

        try {
            const response = await fetch('/api/revisions/approve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ revisionId }),
            });

            const payload = await response.json();
            if (!response.ok) {
                setError(payload?.error || 'Failed to approve revision');
                return;
            }

            setItems((prev) => prev.filter((item) => item.id !== revisionId));
        } catch (err) {
            console.error('Approve error:', err);
            setError('Failed to approve revision');
        } finally {
            setLoadingId(null);
        }
    };

    const handleReject = async (revisionId: string) => {
        if (!reviewerNote.trim()) {
            setError('Reviewer note is required for rejection.');
            return;
        }

        setLoadingId(revisionId);
        setError(null);

        try {
            const response = await fetch('/api/revisions/reject', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ revisionId, reviewerNote }),
            });

            const payload = await response.json();
            if (!response.ok) {
                setError(payload?.error || 'Failed to reject revision');
                return;
            }

            setItems((prev) => prev.filter((item) => item.id !== revisionId));
            setRejectingId(null);
            setReviewerNote('');
        } catch (err) {
            console.error('Reject error:', err);
            setError('Failed to reject revision');
        } finally {
            setLoadingId(null);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Admin Moderation</p>
                        <h1 className="text-3xl font-bold text-slate-900">Pending Revisions</h1>
                    </div>
                    <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
                        <Clock className="w-5 h-5 text-amber-500" />
                        <div>
                            <p className="text-xs text-slate-500">Waiting for review</p>
                            <p className="text-lg font-semibold text-slate-900">{pendingCount}</p>
                        </div>
                    </div>
                </div>

                {error && (
                    <div className="mb-6 border border-red-200 bg-red-50 text-red-700 px-4 py-3 rounded-lg">
                        {error}
                    </div>
                )}

                {items.length === 0 ? (
                    <div className="bg-white border border-slate-200 rounded-xl p-10 text-center text-slate-500">
                        No pending revisions right now.
                    </div>
                ) : (
                    <div className="space-y-6">
                        {items.map((revision) => (
                            <div key={revision.id} className="bg-white border border-slate-200 rounded-xl shadow-sm">
                                <div className="px-6 py-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Leader</p>
                                        <h2 className="text-xl font-semibold text-slate-900">{revision.leader.name}</h2>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <UserCircle className="w-5 h-5 text-slate-400" />
                                        <div>
                                            <p className="font-medium text-slate-800">{revision.editor.name}</p>
                                            <p className="text-xs text-slate-500">{revision.editor.email}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">Current Biography</p>
                                        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 text-sm text-slate-700 whitespace-pre-wrap">
                                            {toPlainText(revision.leader.biography) || 'No biography available.'}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.3em] text-amber-600 mb-3">Proposed Biography</p>
                                        <div className="border border-amber-200 rounded-lg p-4 bg-amber-50 text-sm text-slate-700 whitespace-pre-wrap">
                                            {toPlainText(revision.proposedBiography) || 'No proposed biography provided.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 pb-6">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">Current Location</p>
                                            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 text-sm text-slate-700">
                                                {formatLocation(revision.leader.location)}
                                            </div>
                                        </div>
                                        <div>
                                            <p className={`text-xs uppercase tracking-[0.3em] mb-3 ${isLocationChanged(revision.leader.location, revision.proposedLocation) ? 'text-amber-600' : 'text-slate-400'}`}>
                                                Proposed Location
                                            </p>
                                            <div className={`border rounded-lg p-4 text-sm text-slate-700 ${isLocationChanged(revision.leader.location, revision.proposedLocation) ? 'border-amber-200 bg-amber-50' : 'border-slate-200 bg-slate-50'}`}>
                                                {formatLocation(revision.proposedLocation)}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 pb-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                                    <div className="text-xs text-slate-400">
                                        Submitted {new Date(revision.createdAt).toLocaleString()}
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            type="button"
                                            onClick={() => handleApprove(revision.id)}
                                            disabled={loadingId === revision.id}
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold shadow-sm hover:bg-emerald-700 disabled:opacity-60"
                                        >
                                            <CheckCircle className="w-4 h-4" />
                                            {loadingId === revision.id ? 'Approving...' : 'Approve'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setRejectingId(revision.id);
                                                setReviewerNote('');
                                                setError(null);
                                            }}
                                            disabled={loadingId === revision.id}
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-600 text-sm font-semibold hover:bg-red-50 disabled:opacity-60"
                                        >
                                            <XCircle className="w-4 h-4" />
                                            Reject
                                        </button>
                                    </div>
                                </div>

                                {rejectingId === revision.id && (
                                    <div className="px-6 pb-6">
                                        <div className="border border-red-100 bg-red-50 rounded-lg p-4">
                                            <p className="text-xs uppercase tracking-[0.3em] text-red-500 mb-3">Reviewer Note</p>
                                            <textarea
                                                value={reviewerNote}
                                                onChange={(event) => setReviewerNote(event.target.value)}
                                                className="w-full min-h-[100px] border border-red-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-200"
                                                placeholder="Explain why this edit was rejected..."
                                            />
                                            <div className="mt-3 flex flex-wrap gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => handleReject(revision.id)}
                                                    disabled={loadingId === revision.id}
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 disabled:opacity-60"
                                                >
                                                    <XCircle className="w-4 h-4" />
                                                    {loadingId === revision.id ? 'Rejecting...' : 'Confirm Reject'}
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setRejectingId(null);
                                                        setReviewerNote('');
                                                    }}
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
