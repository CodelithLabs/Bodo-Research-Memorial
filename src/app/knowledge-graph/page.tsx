'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { Network, Users, Flag, Building2, Calendar, BookOpen, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface GraphNode {
    id: string;
    label: string;
    type: 'leader' | 'movement' | 'organization' | 'event' | 'topic';
    data: Record<string, unknown>;
}

interface GraphRelationship {
    source: string;
    target: string;
    type: string;
}

type EntityType = 'leader' | 'movement' | 'organization' | 'event' | 'topic';

const TYPE_COLORS: Record<EntityType, string> = {
    leader: '#8B5CF6',     // Purple
    movement: '#44CC44',  // Green
    organization: '#3B82F6', // Blue
    event: '#F59E0B',      // Amber
    topic: '#EC4899'       // Pink
};

const TYPE_ICONS: Record<EntityType, typeof Users> = {
    leader: Users,
    movement: Flag,
    organization: Building2,
    event: Calendar,
    topic: BookOpen
};

export default function KnowledgeGraphPage() {
    const canvasRef = useRef<HTMLDivElement>(null);
    const [nodes, setNodes] = useState<GraphNode[]>([]);
    const [relationships, setRelationships] = useState<GraphRelationship[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
    const [activeTypes, setActiveTypes] = useState<EntityType[]>(['leader', 'movement', 'organization', 'event', 'topic']);
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        fetchGraphData();
    }, []);

    const fetchGraphData = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/knowledge-graph?limit=100');
            const data = await response.json();
            setNodes(data.nodes || []);
            setRelationships(data.relationships || []);
        } catch (error) {
            console.error('Failed to fetch graph data:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredNodes = nodes.filter(node => activeTypes.includes(node.type));

    // Generate positions for nodes (force-directed layout simulation)
    const getNodePosition = useCallback((index: number, total: number) => {
        const angle = (index / total) * 2 * Math.PI;
        const radius = 200 + Math.random() * 100;
        const centerX = 400;
        const centerY = 300;

        return {
            x: centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * 50,
            y: centerY + Math.sin(angle) * radius + (Math.random() - 0.5) * 50
        };
    }, []);

    const handleZoomIn = () => setZoom(z => Math.min(z * 1.2, 3));
    const handleZoomOut = () => setZoom(z => Math.max(z / 1.2, 0.3));
    const handleReset = () => {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
    };

    const toggleType = (type: EntityType) => {
        setActiveTypes(types =>
            types.includes(type)
                ? types.filter(t => t !== type)
                : [...types, type]
        );
    };

    const getNodeUrl = (node: GraphNode) => {
        switch (node.type) {
            case 'leader':
                return `/leaders/${(node.data as { slug: string }).slug}`;
            case 'movement':
                return `/movements/${(node.data as { slug: string }).slug}`;
            case 'organization':
                return `/organizations/${(node.data as { slug: string }).slug}`;
            case 'event':
                return `/events/${(node.data as { slug: string }).slug}`;
            case 'topic':
                return `/topics/${(node.data as { slug: string }).slug}`;
            default:
                return '#';
        }
    };

    return (
        <div className="min-h-screen bg-[#FFFFF0]">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#44CC44] to-[#2d8f2d] py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 mb-4">
                        <Network className="w-12 h-12 text-white" />
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
                            Knowledge Graph
                        </h1>
                    </div>
                    <p className="text-xl text-white/90 max-w-2xl">
                        Explore the interconnected relationships between Bodo leaders, movements,
                        organizations, events, and cultural topics.
                    </p>
                </div>
            </section>

            {/* Controls */}
            <section className="bg-white shadow-md sticky top-16 z-30">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        {/* Type Filters */}
                        <div className="flex flex-wrap gap-2">
                            {(['leader', 'movement', 'organization', 'event', 'topic'] as EntityType[]).map(type => {
                                const Icon = TYPE_ICONS[type];
                                const isActive = activeTypes.includes(type);
                                return (
                                    <button
                                        key={type}
                                        onClick={() => toggleType(type)}
                                        className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${isActive
                                            ? 'text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        style={{
                                            backgroundColor: isActive ? TYPE_COLORS[type] : undefined
                                        }}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {type.charAt(0).toUpperCase() + type.slice(1)}s
                                    </button>
                                );
                            })}
                        </div>

                        {/* Zoom Controls */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleZoomOut}
                                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                                title="Zoom Out"
                            >
                                <ZoomOut className="w-5 h-5" />
                            </button>
                            <span className="text-sm text-gray-600 min-w-[60px] text-center">
                                {Math.round(zoom * 100)}%
                            </span>
                            <button
                                onClick={handleZoomIn}
                                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                                title="Zoom In"
                            >
                                <ZoomIn className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleReset}
                                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                                title="Reset View"
                            >
                                <Maximize2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Graph Visualization */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Graph Canvas */}
                        <div className="lg:col-span-3">
                            <div
                                ref={canvasRef}
                                className="relative bg-white rounded-xl shadow-lg overflow-hidden h-[600px]"
                            >
                                {loading ? (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#44CC44]"></div>
                                    </div>
                                ) : filteredNodes.length === 0 ? (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                        No nodes to display. Try selecting more entity types.
                                    </div>
                                ) : (
                                    <svg
                                        className="absolute inset-0 w-full h-full"
                                        viewBox="0 0 800 600"
                                        style={{
                                            transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
                                            transformOrigin: 'center center'
                                        }}
                                    >
                                        {/* Draw relationships */}
                                        {relationships.map((rel, i) => {
                                            const sourceNode = filteredNodes.find(n => n.id === rel.source);
                                            const targetNode = filteredNodes.find(n => n.id === rel.target);

                                            if (!sourceNode || !targetNode) return null;

                                            const sourceIdx = filteredNodes.indexOf(sourceNode);
                                            const targetIdx = filteredNodes.indexOf(targetNode);
                                            const sourcePos = getNodePosition(sourceIdx, filteredNodes.length);
                                            const targetPos = getNodePosition(targetIdx, filteredNodes.length);

                                            return (
                                                <line
                                                    key={`rel-${i}`}
                                                    x1={sourcePos.x}
                                                    y1={sourcePos.y}
                                                    x2={targetPos.x}
                                                    y2={targetPos.y}
                                                    stroke="#CBD5E1"
                                                    strokeWidth="1"
                                                    strokeOpacity="0.6"
                                                />
                                            );
                                        })}

                                        {/* Draw nodes */}
                                        {filteredNodes.map((node, index) => {
                                            const pos = getNodePosition(index, filteredNodes.length);
                                            const isSelected = selectedNode?.id === node.id;

                                            return (
                                                <g
                                                    key={node.id}
                                                    onClick={() => setSelectedNode(node)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <circle
                                                        cx={pos.x}
                                                        cy={pos.y}
                                                        r={isSelected ? 25 : 20}
                                                        fill={TYPE_COLORS[node.type]}
                                                        opacity={0.8}
                                                        stroke="#fff"
                                                        strokeWidth="2"
                                                        className="transition-all duration-200"
                                                    />
                                                    <text
                                                        x={pos.x}
                                                        y={pos.y + 35}
                                                        textAnchor="middle"
                                                        fontSize="10"
                                                        fill="#374151"
                                                        className="font-medium"
                                                    >
                                                        {node.label.length > 20
                                                            ? node.label.substring(0, 20) + '...'
                                                            : node.label}
                                                    </text>
                                                </g>
                                            );
                                        })}
                                    </svg>
                                )}

                                {/* Legend */}
                                <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow">
                                    <h4 className="text-xs font-semibold text-gray-600 mb-2">Legend</h4>
                                    <div className="space-y-1">
                                        {Object.entries(TYPE_COLORS).map(([type, color]) => (
                                            <div key={type} className="flex items-center gap-2 text-xs">
                                                <div
                                                    className="w-3 h-3 rounded-full"
                                                    style={{ backgroundColor: color }}
                                                />
                                                <span className="capitalize">{type}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-lg shadow text-xs">
                                    <div className="font-semibold text-gray-600 mb-1">Graph Stats</div>
                                    <div>Nodes: {filteredNodes.length}</div>
                                    <div>Relationships: {relationships.length}</div>
                                </div>
                            </div>
                        </div>

                        {/* Selected Node Details */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-36">
                                {selectedNode ? (
                                    <>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div
                                                className="w-4 h-4 rounded-full"
                                                style={{ backgroundColor: TYPE_COLORS[selectedNode.type] }}
                                            />
                                            <span className="text-sm font-medium capitalize text-gray-500">
                                                {selectedNode.type}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                                            {selectedNode.label}
                                        </h3>

                                        {/* Type-specific data */}
                                        {selectedNode.type === 'leader' && (
                                            <div className="space-y-2 text-sm">
                                                {(selectedNode.data as { category?: string }).category && (
                                                    <div>
                                                        <span className="text-gray-500">Category:</span>{' '}
                                                        {(selectedNode.data as { category: string }).category}
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {selectedNode.type === 'movement' && (
                                            <div className="space-y-2 text-sm">
                                                {(selectedNode.data as { type?: string }).type && (
                                                    <div>
                                                        <span className="text-gray-500">Type:</span>{' '}
                                                        {(selectedNode.data as { type: string }).type}
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {selectedNode.type === 'organization' && (
                                            <div className="space-y-2 text-sm">
                                                {(selectedNode.data as { acronym?: string }).acronym && (
                                                    <div>
                                                        <span className="text-gray-500">Acronym:</span>{' '}
                                                        {(selectedNode.data as { acronym: string }).acronym}
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {selectedNode.type === 'event' && (
                                            <div className="space-y-2 text-sm">
                                                {(selectedNode.data as { year?: number }).year && (
                                                    <div>
                                                        <span className="text-gray-500">Year:</span>{' '}
                                                        {(selectedNode.data as { year: number }).year}
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        <Link
                                            href={getNodeUrl(selectedNode)}
                                            className="mt-4 inline-block w-full text-center px-4 py-2 bg-[#44CC44] text-white rounded-lg hover:bg-[#3db83d] transition-colors"
                                        >
                                            View Full Profile
                                        </Link>
                                    </>
                                ) : (
                                    <div className="text-center text-gray-500 py-8">
                                        <Network className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                                        <p>Click on a node to view details</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
