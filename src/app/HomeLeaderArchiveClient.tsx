'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useFuzzySearch } from '@/hooks/useFuzzySearch';
import { Leader } from '@/types';
import LeaderCard from '@/components/LeaderCard';
import { Search, Star, Users } from 'lucide-react';

export default function HomeLeaderArchiveClient({ leaders }: { leaders: Leader[] }) {
  const { query, setQuery, results } = useFuzzySearch({
    data: leaders,
    keys: ['name', 'title', 'biography', 'movement', 'district', 'region'],
    threshold: 0.3,
  });

  const stats = useMemo(() => {
    const martyrCount = leaders.filter((leader) => leader.isMartyr).length;
    return {
      total: leaders.length,
      martyrs: martyrCount,
    };
  }, [leaders]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory to-background-paper">
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-textile-pattern opacity-30" />
        <div className="container-academic relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-parrot text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
              Bodo Leaders Archive
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Bodo Research <span className="text-parrot">Memorial</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-academic leading-relaxed mb-10 max-w-2xl mx-auto">
              A focused digital archive preserving biographies and legacies of Bodo leaders and martyrs.
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search leaders by name, movement, or region..."
                  className="search-input pl-12 pr-4 py-4 text-lg shadow-sm"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-parrot" />
                <span><strong className="text-text-primary">{stats.total}</strong> leaders</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent" />
                <span><strong className="text-text-primary">{stats.martyrs}</strong> martyrs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="text-pretitle">Leader Directory</span>
              <h2 className="text-section-title mb-0">Browse the Archive</h2>
              <p className="text-text-secondary mt-3 mb-0">
                Search or scroll the full list of documented Bodo leaders and martyrs.
              </p>
            </div>
            <Link href="/leaders" className="btn-ghost flex items-center gap-1 group">
              Open full directory
            </Link>
          </div>

          {results.length === 0 ? (
            <div className="text-center py-16 border border-divider bg-ivory/40">
              <p className="text-text-secondary">No leaders match that search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {results.map((leader) => (
                <LeaderCard key={leader.id} leader={leader} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
