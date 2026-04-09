'use client';

import { useMemo, useRef, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { ImagePlus, Send, Trash2 } from 'lucide-react';

declare global {
    interface Window {
        cloudinary?: {
            createUploadWidget: (
                options: Record<string, unknown>,
                callback: (error: unknown, result: { event?: string; info?: { secure_url?: string } } | null) => void
            ) => { open: () => void };
        };
    }
}

interface LeaderRevisionEditorProps {
    leaderId: string;
    initialBiography?: string;
    initialPhoto?: string;
    initialLocation?: {
        name?: string;
        latitude?: number;
        longitude?: number;
    };
    token: string;
    onSubmitted?: () => void;
}

export default function LeaderRevisionEditor({
    leaderId,
    initialBiography = '',
    initialPhoto,
    initialLocation,
    token,
    onSubmitted,
}: LeaderRevisionEditorProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [photoUrl, setPhotoUrl] = useState(initialPhoto ?? '');
    const [locationName, setLocationName] = useState(initialLocation?.name ?? '');
    const [latitude, setLatitude] = useState<string>(initialLocation?.latitude?.toString() ?? '');
    const [longitude, setLongitude] = useState<string>(initialLocation?.longitude?.toString() ?? '');

    const [hasContent, setHasContent] = useState(Boolean(initialBiography.trim()));

    const editor = useEditor({
        extensions: [StarterKit],
        content: initialBiography,
        onUpdate: ({ editor: editorInstance }) => {
            setHasContent(Boolean(editorInstance.getText().trim().length));
        },
        editorProps: {
            attributes: {
                class: 'min-h-[240px] p-4 prose prose-sm max-w-none focus:outline-none',
            },
        },
    });

    const canSubmit = Boolean(editor && hasContent);

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    const canUpload = Boolean(cloudName && uploadPreset);
    const widgetRef = useRef<ReturnType<NonNullable<typeof window.cloudinary>['createUploadWidget']> | null>(null);

    const createUploadWidget = () => {
        if (!window.cloudinary || !cloudName || !uploadPreset) {
            setError('Cloudinary is not configured.');
            return null;
        }

        return window.cloudinary.createUploadWidget(
            {
                cloudName,
                uploadPreset,
                sources: ['local', 'url', 'camera'],
                multiple: false,
                clientAllowedFormats: ['png', 'jpg', 'jpeg', 'webp'],
                maxFileSize: 5_000_000,
                cropping: false,
                folder: 'leaders',
            },
            (uploadError, result) => {
                if (uploadError) {
                    console.error('Cloudinary widget error:', uploadError);
                    setError('Upload failed. Please try again.');
                    return;
                }

                if (result?.event === 'success') {
                    setPhotoUrl(result.info?.secure_url ?? '');
                }
            }
        );
    };

    const openUploadWidget = () => {
        setError(null);

        if (!widgetRef.current) {
            widgetRef.current = createUploadWidget();
        }

        if (!widgetRef.current) {
            return;
        }

        widgetRef.current.open();
    };

    const mapPreviewUrl = useMemo(() => {
        const lat = latitude.trim();
        const lng = longitude.trim();
        if (!lat || !lng) return null;
        return `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lng}&zoom=11&size=420x220&markers=${lat},${lng},red-pushpin`;
    }, [latitude, longitude]);

    const handleSubmit = async () => {
        if (!editor || !canSubmit || isSubmitting) return;

        if (locationName.trim() && (!latitude.trim() || !longitude.trim())) {
            setError('Please provide latitude and longitude when a location name is entered.');
            return;
        }

        setIsSubmitting(true);
        setError(null);
        setSuccessMessage(null);

        try {
            const response = await fetch('/api/revisions/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    leaderId,
                    biography: editor.getHTML(),
                    photo: photoUrl || undefined,
                    location: {
                        name: locationName.trim() || undefined,
                        latitude: latitude ? Number(latitude) : undefined,
                        longitude: longitude ? Number(longitude) : undefined,
                    },
                }),
            });

            const payload = await response.json();
            if (!response.ok) {
                setError(payload?.error || 'Failed to submit revision');
                return;
            }

            setSuccessMessage('Revision submitted for review.');
            onSubmitted?.();
        } catch (submissionError) {
            console.error('Revision submit error:', submissionError);
            setError('Failed to submit revision');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white border border-divider shadow-sm">
            <div className="px-6 py-4 border-b border-divider flex items-center justify-between">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">Edit Biography</p>
                    <h3 className="text-lg font-semibold text-primary">Propose a Revision</h3>
                </div>
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canSubmit || isSubmitting}
                    className="bg-primary text-secondary px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>

            <div className="p-6">
                <div className="border border-divider bg-background">
                    <EditorContent editor={editor} />
                </div>

                <div className="mt-6">
                    <div className="flex items-center justify-between">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">
                            Portrait Image
                        </label>
                        <button
                            type="button"
                            onClick={openUploadWidget}
                            disabled={!canUpload}
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-secondary disabled:opacity-50"
                        >
                            <ImagePlus className="w-4 h-4" />
                            Upload Portrait
                        </button>
                    </div>
                    <p className="text-xs text-text-muted mt-2">
                        Upload a portrait to Cloudinary for optimized delivery.
                    </p>
                    {photoUrl && (
                        <div className="mt-4 border border-divider rounded-lg overflow-hidden bg-white">
                            <img src={photoUrl} alt="Uploaded portrait" className="w-full h-48 object-cover" />
                            <button
                                type="button"
                                onClick={() => setPhotoUrl('')}
                                className="w-full px-4 py-2 text-xs font-semibold text-red-600 flex items-center justify-center gap-2 border-t border-divider"
                            >
                                <Trash2 className="w-4 h-4" />
                                Remove portrait
                            </button>
                        </div>
                    )}
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">
                            Location Name (Optional)
                        </label>
                        <input
                            type="text"
                            value={locationName}
                            onChange={(event) => setLocationName(event.target.value)}
                            placeholder="e.g. Tengabari, Assam"
                            className="mt-2 w-full px-3 py-2 border border-divider bg-white text-sm focus:outline-none focus:border-secondary"
                        />
                    </div>
                    <div>
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">
                            Latitude
                        </label>
                        <input
                            type="number"
                            value={latitude}
                            onChange={(event) => setLatitude(event.target.value)}
                            placeholder="26.17"
                            step="0.0001"
                            className="mt-2 w-full px-3 py-2 border border-divider bg-white text-sm focus:outline-none focus:border-secondary"
                        />
                    </div>
                    <div>
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">
                            Longitude
                        </label>
                        <input
                            type="number"
                            value={longitude}
                            onChange={(event) => setLongitude(event.target.value)}
                            placeholder="91.73"
                            step="0.0001"
                            className="mt-2 w-full px-3 py-2 border border-divider bg-white text-sm focus:outline-none focus:border-secondary"
                        />
                    </div>
                </div>

                {mapPreviewUrl && (
                    <div className="mt-4 border border-divider rounded-lg overflow-hidden bg-white">
                        <img src={mapPreviewUrl} alt="Location preview" className="w-full h-40 object-cover" />
                    </div>
                )}

                {error && (
                    <p className="mt-4 text-sm text-red-600">{error}</p>
                )}
                {successMessage && (
                    <p className="mt-4 text-sm text-emerald-700">{successMessage}</p>
                )}
                <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-text-muted">
                    Submissions are reviewed by an admin before publishing.
                </p>
            </div>
        </div>
    );
}
