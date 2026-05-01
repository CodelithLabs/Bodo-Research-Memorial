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
      <section className="relative overflow-hidden section-padding border-b border-[#9d7a47]/20">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_18%,rgba(184,134,59,0.16),transparent_30%),radial-gradient(circle_at_86%_8%,rgba(55,91,77,0.14),transparent_30%)]" />

        <div className="container-academic relative">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14 futuristic-shell neon-frame">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="cyber-pill mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8d662f] inline-block" />
                  Bodo Leaders Archive
                </span>

                <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl mb-5">
                  Bodo Research
                  <br />
                  <span className="glow-text">Memorial</span>
                </h1>

                <p className="text-base md:text-lg text-[#4f473c] leading-relaxed max-w-2xl mb-8">
                  A scholarly memorial platform documenting biographies, social
                  movements, cultural records, and historical sources from Bodo
                  communities across Northeast India.
                </p>

                <div className="max-w-2xl">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search leaders by name, movement, district, or role..."
                      className="search-input pl-12 pr-4 py-4 text-base"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7a5c2f]" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-7">
                  <div className="data-chip">
                    <Users className="w-3.5 h-3.5 text-[#7a5c2f]" />
                    <span>
                      <strong className="text-[#2d2820]">{stats.total}</strong> leaders
                    </span>
                  </div>
                  <div className="data-chip">
                    <Star className="w-3.5 h-3.5 text-[#7a5c2f]" />
                    <span>
                      <strong className="text-[#2d2820]">{stats.martyrs}</strong> martyrs
                    </span>
                  </div>
                  <div className="data-chip">Verified scholarly references</div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="glass-panel-strong p-5 md:p-6 h-full">
                  <p className="section-kicker mb-2">Memorial Focus</p>
                  <h2 className="font-display text-2xl text-[#2f2a22] mb-4">Living archive</h2>
                  <p className="text-sm text-[#5f5548] leading-relaxed mb-6">
                    Each profile is structured for research, citation, and public memory,
                    blending oral history with documented records.
                  </p>
                  <div className="space-y-3 text-sm text-[#5a4f40]">
                    <div className="glass-panel px-3 py-2">Biography and timeline context</div>
                    <div className="glass-panel px-3 py-2">Movement and organization links</div>
                    <div className="glass-panel px-3 py-2">Editorial source references</div>
                  </div>
                  <Link href="/leaders" className="btn-primary mt-6 w-full">
                    Explore Leaders
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-separator relative">
        <div className="container-academic relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="section-kicker">Leader Directory</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2f2a22] mb-0 mt-2">
                Browse the Archive
              </h2>
              <p className="text-[#5b5244] mt-3 mb-0 max-w-xl leading-relaxed">
                Discover documented figures through an interface tuned for readability,
                quick filtering, and reliable research workflow.
              </p>
            </div>
            <Link href="/leaders" className="btn-outline justify-center">
              Open Full Directory
            </Link>
          </div>

          {results.length === 0 ? (
            <div className="text-center py-16 glass-panel-strong neon-frame">
              <p className="text-[#5f5548]">No leaders match that search.</p>
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
