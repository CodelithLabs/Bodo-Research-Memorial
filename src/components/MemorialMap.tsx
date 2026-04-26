'use client';

import { useEffect, useMemo, useRef, useState, type MutableRefObject } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { useSearchParams } from 'next/navigation';
import L from 'leaflet';
import 'leaflet.markercluster';
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

function FocusOnLeader({
    targetLeader,
    leaders,
    markerRefs,
}: {
    targetLeader: string | null;
    leaders: LeaderLocation[];
    markerRefs: MutableRefObject<Record<string, L.Marker>>;
}) {
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
    }, [map, targetLeader, leaders, markerRefs]);

    return null;
}

function ClusteredMarkers({
    leaders,
    markerRefs,
}: {
    leaders: LeaderLocation[];
    markerRefs: MutableRefObject<Record<string, L.Marker>>;
}) {
    const map = useMap();

    useEffect(() => {
        const clusterGroup = (L as unknown as { markerClusterGroup: (options?: Record<string, unknown>) => L.LayerGroup }).markerClusterGroup({
            chunkedLoading: true,
        });

        markerRefs.current = {};

        leaders.forEach((leader) => {
            const lat = leader.location?.latitude;
            const lng = leader.location?.longitude;
            if (typeof lat !== 'number' || typeof lng !== 'number') return;

            const marker = L.marker([lat, lng]);
            markerRefs.current[leader.id] = marker;

            const popupContent = document.createElement('div');
            popupContent.className = 'memorial-popup';

            if (leader.photo) {
                const img = document.createElement('img');
                img.src = leader.photo;
                img.alt = leader.name;
                img.className = 'memorial-popup__image';
                popupContent.appendChild(img);
            }

            const title = document.createElement('h3');
            title.className = 'memorial-popup__title';
            title.textContent = leader.name;
            popupContent.appendChild(title);

            if (leader.location?.name) {
                const location = document.createElement('p');
                location.className = 'memorial-popup__location';
                location.textContent = leader.location.name;
                popupContent.appendChild(location);
            }

            const link = document.createElement('a');
            link.href = `/leaders/${encodeURIComponent(leader.slug)}`;
            link.className = 'memorial-popup__link';
            link.textContent = 'Read more';
            popupContent.appendChild(link);

            marker.bindPopup(popupContent);
            clusterGroup.addLayer(marker);
        });

        map.addLayer(clusterGroup);

        return () => {
            map.removeLayer(clusterGroup);
        };
    }, [leaders, map, markerRefs]);

    return null;
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

    return (
        <div className="w-full">
            {error && (
                <div className="mb-4 border border-red-200 bg-red-50 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}
            <div className="rounded-xl overflow-hidden glass-panel">
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
                    <FocusOnLeader targetLeader={targetLeader} leaders={leaders} markerRefs={markerRefs} />
                    <ClusteredMarkers leaders={leaders} markerRefs={markerRefs} />
                </MapContainer>
            </div>
        </div>
    );
}
