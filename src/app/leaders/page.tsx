/**
 * ============================================
 * Leaders Page
 * ============================================
 * Display all leaders with filtering and search
 */

import Link from 'next/link';
import { Users, Filter, Search, MapPin, Calendar } from 'lucide-react';
import { Button, Input, Card, CardContent, Badge } from '@/components/ui';
import { leaders } from '@/data/leaders';

const regions = ['All', 'Assam', 'North Bengal', 'Darjeeling', 'Bhutan', 'BTC'];

function getYear(dateStr?: string): string {
    if (!dateStr) return '?';
    return dateStr.split('-')[0];
}

export default function LeadersPage() {
    return (
        <div className="min-h-screen bg-stone-50">
            {/* Page Header */}
            <section className="bg-gradient-to-r from-stone-800 to-stone-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-3 mb-4">
                        <Users className="w-8 h-8 text-amber-400" />
                        <Badge variant="secondary" className="bg-amber-600">Historical Records</Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Bodo Leaders & Visionaries
                    </h1>
                    <p className="text-lg text-stone-300 max-w-2xl">
                        Explore comprehensive biographies of leaders, freedom fighters, and visionaries
                        who shaped the Bodo civilization and fought for their rights.
                    </p>
                </div>
            </section>

            {/* Filters & Search */}
            <section className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Input
                                type="search"
                                placeholder="Search leaders..."
                                className="pl-10"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>

                        {/* Region Filter */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                            <Filter className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            {regions.map((region) => (
                                <Button
                                    key={region}
                                    variant={region === 'All' ? 'primary' : 'ghost'}
                                    size="sm"
                                    className="flex-shrink-0"
                                >
                                    {region}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leaders Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {leaders.map((leader) => (
                        <Link key={leader.id} href={`/leaders/${leader.id}`}>
                            <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                {/* Image */}
                                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-200 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Users className="w-16 h-16 text-amber-300" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                    {/* Period Badge */}
                                    <div className="absolute top-4 right-4">
                                        <Badge variant="secondary" className="bg-white/90 text-gray-900 backdrop-blur">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {getYear(leader.birthDate)} - {leader.isMartyr ? 'Martyr' : getYear(leader.deathDate) || 'Present'}
                                        </Badge>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    {/* Region */}
                                    <div className="flex items-center text-sm text-amber-600 mb-2">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        {leader.region} • {leader.district}
                                    </div>

                                    {/* Name & Title */}
                                    <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                                        {leader.name}
                                    </h3>
                                    <p className="text-gray-600 font-medium mb-3">{leader.title}</p>

                                    {/* Description - Extract from biography */}
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                        {leader.biography?.substring(0, 150)}...
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {leader.movement && (
                                            <Badge variant="outline" className="text-xs">
                                                {leader.movement}
                                            </Badge>
                                        )}
                                        {leader.era && (
                                            <Badge variant="outline" className="text-xs">
                                                {leader.era}
                                            </Badge>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="primary" size="sm">1</Button>
                        <Button variant="ghost" size="sm">2</Button>
                        <Button variant="ghost" size="sm">3</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
