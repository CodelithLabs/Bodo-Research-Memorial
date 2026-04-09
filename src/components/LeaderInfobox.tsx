import Link from 'next/link';
import { MapPin, Calendar, Flag } from 'lucide-react';
import RemoteImage from '@/components/RemoteImage';
import { Leader } from '@/types';

export default function LeaderInfobox({ leader }: { leader: Leader }) {
    const latitude = leader.location?.latitude;
    const longitude = leader.location?.longitude;
    const hasCoordinates = typeof latitude === 'number' && typeof longitude === 'number';
    const staticMapUrl = hasCoordinates
        ? `https://staticmap.openstreetmap.de/staticmap.php?center=${latitude},${longitude}&zoom=11&size=320x180&markers=${latitude},${longitude},red-pushpin`
        : null;

    return (
        <div className="bg-white border border-divider shadow-sm">
            <div className="bg-primary/5 p-4 border-b border-divider flex items-center justify-between">
                <h3 className="text-primary font-bold uppercase tracking-widest text-xs">Infobox</h3>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Profile</span>
            </div>

            <div className="p-6 space-y-6">
                <div className="w-full h-56 bg-primary/5 border border-divider overflow-hidden">
                    {leader.imageUrl ? (
                        <RemoteImage src={leader.imageUrl} alt={leader.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-primary/20 text-5xl font-bold italic">
                            {leader.name.charAt(0)}
                        </div>
                    )}
                </div>

                <div className="space-y-4 text-sm text-text-secondary">
                    <div className="flex items-start gap-3">
                        <Calendar className="w-4 h-4 text-secondary mt-0.5" />
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted">Born / Died</p>
                            <p className="font-medium text-primary">
                                {leader.birthDate} — {leader.deathDate || 'Present'}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <Flag className="w-4 h-4 text-secondary mt-0.5" />
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted">Movement</p>
                            <p className="font-medium text-primary">{leader.movement || 'Not specified'}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted">Memorial Location</p>
                            <p className="font-medium text-primary">
                                {leader.location?.name || leader.birthPlace || leader.district || 'Location pending'}
                            </p>
                            <Link
                                href={`/map?leader=${leader.id}`}
                                className="mt-2 inline-flex text-xs font-semibold text-amber-600 hover:text-amber-700"
                            >
                                View on Memorial Map
                            </Link>
                        </div>
                    </div>
                </div>

                {staticMapUrl && (
                    <div className="border border-dashed border-slate-200 rounded-lg p-3 bg-slate-50">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-2">Map Thumbnail</p>
                        <Link href={`/map?leader=${leader.id}`} className="block">
                            <img
                                src={staticMapUrl}
                                alt={`Map of ${leader.name}`}
                                className="w-full h-32 object-cover rounded-md border border-slate-200"
                                loading="lazy"
                            />
                        </Link>
                    </div>
                )}

                <div className="border border-dashed border-slate-200 rounded-lg p-4 bg-slate-50">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-2">Map Shortcut</p>
                    <Link
                        href={`/map?leader=${leader.id}`}
                        className="inline-flex items-center justify-between w-full text-sm font-semibold text-primary"
                    >
                        Open memorial marker
                        <span className="text-xs text-amber-600">/map</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
