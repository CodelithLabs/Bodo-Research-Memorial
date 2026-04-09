'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useSearchParams } from 'next/navigation';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetinaUrl.src,
    iconUrl: iconUrl.src,
    shadowUrl: shadowUrl.src,
});

interface LeaderLocation {
    id: string;
    name: string;
    slug: string;
    photo?: string | null;
    location?: {
        name?: string;
        latitude?: number;
        longitude?: number;
    };
}

export default function MemorialMap() {
    const [leaders, setLeaders] = useState<LeaderLocation[]>([]);
    const [error, setError] = useState<string | null>(null);
    const markerRefs = useRef<Record<string, L.Marker>>({});
    const searchParams = useSearchParams();
    const targetLeader = searchParams.get('leader');

    useEffect(() => {
        let isMounted = true;

        const loadLeaders = async () => {
            try {
                const response = await fetch('/api/map/leaders');
                const payload = await response.json();

                if (!response.ok) {
                    throw new Error(payload?.error || 'Failed to load map data');
                }

                if (isMounted) {
                    setLeaders(payload.leaders || []);
                }
            } catch (err) {
                console.error('Map load error:', err);
                if (isMounted) {
                    setError('Unable to load map data.');
                }
            }
        };

        loadLeaders();

        return () => {
            isMounted = false;
        };
    }, []);

    const mapCenter = useMemo<[number, number]>(() => {
        if (!leaders.length) return [26.5, 91.7];
        const first = leaders.find((leader) => typeof leader.location?.latitude === 'number' && typeof leader.location?.longitude === 'number');
        return first ? [first.location!.latitude!, first.location!.longitude!] : [26.5, 91.7];
    }, [leaders]);

    const FocusOnLeader = () => {
        const map = useMap();

        useEffect(() => {
            if (!targetLeader) return;
            const leader = leaders.find((item) => item.id === targetLeader || item.slug === targetLeader);
            if (!leader || typeof leader.location?.latitude !== 'number' || typeof leader.location?.longitude !== 'number') return;

            map.flyTo([leader.location.latitude, leader.location.longitude], 11, { duration: 1.2 });
            const marker = markerRefs.current[leader.id];
            if (marker) {
                marker.openPopup();
            }
        }, [map, leaders, targetLeader]);

        return null;
    };

    return (
        <div className="w-full">
            {error && (
                <div className="mb-4 border border-red-200 bg-red-50 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <MapContainer center={mapCenter} zoom={7} className="h-[520px] w-full">
                    <TileLayer
                        attribution={
                            process.env.NEXT_PUBLIC_MAP_TILER_KEY
                                ? '&copy; MapTiler &copy; OpenStreetMap contributors'
                                : '&copy; OpenStreetMap contributors'
                        }
                        url={
                            process.env.NEXT_PUBLIC_MAP_TILER_KEY
                                ? `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAP_TILER_KEY}`
                                : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        }
                    />
                    <FocusOnLeader />
                    <MarkerClusterGroup chunkedLoading>
                        {leaders.map((leader) => {
                            const lat = leader.location?.latitude;
                            const lng = leader.location?.longitude;
                            if (typeof lat !== 'number' || typeof lng !== 'number') return null;

                            return (
                                <Marker
                                    key={leader.id}
                                    position={[lat, lng]}
                                    ref={(marker) => {
                                        if (marker) {
                                            markerRefs.current[leader.id] = marker;
                                        }
                                    }}
                                >
                                    <Popup>
                                        <div className="w-48">
                                            {leader.photo && (
                                                <img
                                                    src={leader.photo}
                                                    alt={leader.name}
                                                    className="w-full h-28 object-cover rounded-md mb-2"
                                                />
                                            )}
                                            <h3 className="text-sm font-semibold text-slate-900">{leader.name}</h3>
                                            {leader.location?.name && (
                                                <p className="text-xs text-slate-500">{leader.location.name}</p>
                                            )}
                                            <Link
                                                href={`/leaders/${leader.slug}`}
                                                className="mt-2 inline-flex text-xs font-semibold text-amber-600 hover:text-amber-700"
                                            >
                                                Read more
                                            </Link>
                                        </div>
                                    </Popup>
                                </Marker>
                            );
                        })}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>
        </div>
    );
}
