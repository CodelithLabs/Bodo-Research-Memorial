'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import LeaderCard from '@/components/LeaderCard';
import SearchBar from '@/components/SearchBar';
import { leaders } from '@/data/leaders';
import { Leader } from '@/types';
import Link from 'next/link';

const categoryInfo: Record<string, { title: string; description: string }> = {
  'Political': {
    title: 'Political Leaders',
    description: 'Bodo leaders who have contributed to politics, governance, and statehood movements'
  },
  'Religious': {
    title: 'Religious Leaders',
    description: 'Spiritual leaders, priests, and religious scholars of the Bodo community'
  },
  'Cultural': {
    title: 'Cultural Leaders',
    description: 'Writers, artists, musicians, and cultural activists who preserved Bodo heritage'
  },
  'Social': {
    title: 'Social Leaders',
    description: 'Social workers, activists, and community leaders who worked for welfare'
  },
  'Academic': {
    title: 'Academic Leaders',
    description: 'Scholars, educators, and intellectuals who contributed to Bodo education and research'
  },
  'Administrative': {
    title: 'Administrative Leaders',
    description: 'Civil servants, officers, and administrators from the Bodo community'
  },
  'Martyr': {
    title: 'Martyrs',
    description: 'Heroes who sacrificed their lives for the Bodoland movement and cause'
  }
};

export default function CategoryPage() {
  const params = useParams();
  const category = (params.category as string) || 'Political';
  const [filteredLeaders, setFilteredLeaders] = useState<Leader[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let result = leaders.filter(leader => leader.category === category);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(leader =>
        leader.name.toLowerCase().includes(query) ||
        leader.title.toLowerCase().includes(query) ||
        leader.biography?.toLowerCase().includes(query)
      );
    }

    setFilteredLeaders(result);
  }, [category, searchQuery]);

  const info = categoryInfo[category] || { title: category, description: '' };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-amber-700 via-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Link href="/leaders" className="text-white/80 hover:text-white mr-4">
              ← Back to All Leaders
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 text-center">
            {info.title}
          </h1>
          <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
            {info.description}
          </p>
          <div className="mt-8 text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full">
              {filteredLeaders.length} Leaders
            </span>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {Object.keys(categoryInfo).map((cat) => (
            <Link
              key={cat}
              href={`/leaders/category/${cat}`}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${category === cat
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md hover:shadow-lg'
                }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Leaders Grid */}
        {filteredLeaders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLeaders.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏛️</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No Leaders Found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
