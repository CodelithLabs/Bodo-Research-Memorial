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
    <div className="min-h-screen">
      <section className="relative pt-24 pb-16 border-b border-cream/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,146,42,0.12),transparent_20%),radial-gradient(circle_at_80%_0%,rgba(110,91,211,0.18),transparent_24%)] pointer-events-none" />
        <div className="container-academic relative">
          <div className="max-w-6xl mx-auto text-center futuristic-shell neon-frame px-6 py-10 md:px-10 md:py-14">
            <span className="cyber-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
              Bodo Leaders Archive
            </span>
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Bodo Research <span className="text-amber-300 glow-text">Memorial</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/65 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
              A living archive of biographies, movements, and memory. Search the
              record, discover relationships, and move through the Bodo story in a
              high-contrast, cinematic interface.
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search leaders by name, movement, region, or role..."
                  className="search-input pl-12 pr-4 py-4 text-lg bg-navy-900/70 border-cream/10 text-cream placeholder:text-cream/30 focus:border-amber-400/40"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-300/70" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 text-sm text-cream/65">
              <div className="data-chip">
                <Users className="w-3.5 h-3.5 text-amber-300" />
                <span><strong className="text-cream">{stats.total}</strong> leaders</span>
              </div>
              <div className="data-chip">
                <Star className="w-3.5 h-3.5 text-amber-300" />
                <span><strong className="text-cream">{stats.martyrs}</strong> martyrs</span>
              </div>
              <div className="data-chip">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                <span>Searchable knowledge graph</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-separator relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_0%,rgba(110,91,211,0.1),transparent_28%)]" />
        <div className="container-academic relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="section-kicker">Leader Directory</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-cream mb-0 mt-2">
                Browse the Archive
              </h2>
              <p className="text-cream/60 mt-3 mb-0 max-w-xl leading-relaxed">
                Search or scroll the full list of documented Bodo leaders and martyrs,
                presented as interactive signal cards for fast discovery.
              </p>
            </div>
            <Link href="/leaders" className="cyber-pill justify-center">
              Open full directory
            </Link>
          </div>

          {results.length === 0 ? (
            <div className="text-center py-16 glass-panel-strong neon-frame">
              <p className="text-cream/60">No leaders match that search.</p>
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
