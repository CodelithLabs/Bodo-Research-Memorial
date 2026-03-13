import type { Metadata } from 'next';
import Link from 'next/link';
import RemoteImage from '@/components/RemoteImage';

export const metadata: Metadata = {
  metadataBase: new URL('https://bodo-research-memorial.org'),
  title: 'Bodo Research Memorial – Digital Heritage Repository',
  description: 'An institutional archive of Bodo history, culture, and scholarly research.',
  openGraph: {
    title: 'Bodo Research Memorial',
    description: 'Explore the Bodo digital heritage archive including leaders, research, and timelines.',
    url: 'https://bodo-research-memorial.org',
    type: 'website',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Bodo Research Memorial - Digital Heritage Repository',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bodo Research Memorial',
    description: 'Explore the Bodo digital heritage archive including leaders, research, and timelines.',
  },
};
import {
  ArrowRight,
  Users,
  History,
  Languages,
  BookOpen,
  Globe,
  Library,
  ChevronRight,
  Calendar,
  Quote
} from 'lucide-react';
import { leaders } from '@/data/leaders';
import HeroBackground from '@/components/ui/HeroBackground';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HomePage() {
  const featuredLeaders = leaders.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* ============================================
          HERO SECTION - Academic & Minimal
          ============================================ */}
      <section className="relative overflow-hidden pt-24 pb-32 min-h-[90vh] flex items-center">
        <HeroBackground />

        {/* Subtle Cultural Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-weave pointer-events-none z-10" />

        <div className="container-institutional relative z-20">
          <ScrollReveal className="max-w-4xl">
            <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-6 block">
              Digital Heritage Archive
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              Bodo Research <span className="text-secondary">Memorial</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-2xl font-light">
              An institutional-grade archive honoring the leaders, martyrs, and visionaries
              who shaped the Bodo identity and struggle.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link href="/leaders" className="btn-primary bg-secondary text-primary hover:bg-white hover:text-primary px-10">
                Explore The Archive
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/timeline" className="btn-outline border-white text-white hover:bg-white hover:text-primary px-10">
                Movement Timeline
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          FEATURED LEADERS - Institutional Grid
          ============================================ */}
      <section className="section-padding bg-[#080808] relative" >
        <div className="container-institutional">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-pretitle">Legacy & Leadership</span>
              <h2 className="mb-0 text-white">Foundational Figures</h2>
              <p className="text-lg text-text-secondary mt-4 mb-0">
                Scholarly documentation of individuals who pioneered the Bodo cultural and political movements.
              </p>
            </div>
            <Link href="/leaders" className="group inline-flex items-center text-accent font-bold border-b-2 border-accent/20 hover:border-secondary transition-all pb-1 hover:text-white">
              View Database <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {featuredLeaders.map((leader, index) => (
              <ScrollReveal key={leader.id} delay={index * 0.1} className="group">
                <Link href={`/leaders/${leader.id}`} className="block overflow-hidden relative aspect-[3/4] mb-6 card-modern">
                  {leader.imageUrl ? (
                    <RemoteImage
                      src={leader.imageUrl}
                      alt={leader.name}
                      className="absolute inset-0 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-background flex items-center justify-center">
                      <Users className="w-16 h-16 text-primary/10" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>

                <span className="label-category mb-4">
                  {leader.isMartyr ? 'Martyr' : 'Community Leader'}
                </span>
                <h3 className="text-2xl mb-2 group-hover:text-secondary transition-colors">
                  <Link href={`/leaders/${leader.id}`}>{leader.name}</Link>
                </h3>
                <p className="text-sm text-text-muted font-medium mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {leader.era} Movement
                </p>
                <p className="text-text-secondary line-clamp-3 leading-relaxed">
                  {leader.biography?.split('.')[0]}. {leader.biography?.split('.')[1]}.
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section >

      {/* ============================================
          TIMELINE PREVIEW - Dark Academic
          ============================================ */}
      <section className="bg-[#050505] text-white py-32 overflow-hidden relative" >
        {/* Subtle separator glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="container-institutional relative">
          <div className="absolute right-0 top-0 opacity-[0.02] scale-150 rotate-12 pointer-events-none">
            <History className="w-96 h-96" />
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal delay={0.1}>
              <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-6 block">Historical Milestones</span>
              <h2 className="text-white text-4xl md:text-5xl mb-8">Chronicles of the <span className="text-secondary italic">Bodoland</span> Movement</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-12">
                Trace the socio-political evolution of the Bodo people from the early identity
                movements to modern structural achievements.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center flex-shrink-0 text-secondary font-bold">1</div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-2">Early Cultural Awakening (1960s)</h4>
                    <p className="text-white/60">The rise of literacy and formal organizations dedicated to Bodo identity.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center flex-shrink-0 text-secondary font-bold">2</div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-2">The Statehood Struggle (1980s-90s)</h4>
                    <p className="text-white/60">A decade of intense advocacy and sacrifice led by Bodofa Brahma.</p>
                  </div>
                </div>
              </div>

              <Link href="/timeline" className="btn-primary bg-secondary text-primary">
                View Interactive Timeline
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="relative">
              <div className="aspect-square bg-white/5 border border-white/10 p-8 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <Quote className="w-12 h-12 text-secondary mx-auto mb-6 opacity-50" />
                  <p className="text-2xl font-serif italic text-white/90 leading-relaxed mb-8">
                    &quot;We must have our own literature, our own language, and our own identity
                    if we are to survive as a community in this world.&quot;
                  </p>
                  <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                    — Upendra Nath Brahma
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section >

      {/* ============================================
          RESEARCH CATEGORIES - Structured Archive
          ============================================ */}
      <section className="section-padding bg-[#080808] bg-weave" >
        <div className="container-institutional">
          <div className="text-center mb-20">
            <span className="text-pretitle">Digital Repository</span>
            <h2 className="text-white">Research Domains</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Historical Archives', icon: Library, color: 'hover:border-primary', path: '/archive' },
              { title: 'Cultural Sociology', icon: Globe, color: 'hover:border-accent', path: '/culture' },
              { title: 'Linguistic Studies', icon: Languages, color: 'hover:border-secondary', path: '/language' },
              { title: 'Religious Philosophy', icon: BookOpen, color: 'hover:border-primary', path: '/religion' },
              { title: 'Biographical Studies', icon: Users, color: 'hover:border-accent', path: '/leaders' },
              { title: 'Movement Analysis', icon: History, color: 'hover:border-secondary', path: '/timeline' },
            ].map((cat, i) => (
              <ScrollReveal delay={i * 0.1} key={i}>
                <Link
                  href={cat.path}
                  className={`block card-modern p-10 group transition-all duration-500 hover:border-secondary h-full relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <cat.icon className="w-10 h-10 text-white mb-8 group-hover:text-secondary group-hover:scale-110 transition-all duration-300 relative z-10" />
                  <h3 className="text-xl font-bold mb-4 text-white relative z-10 group-hover:text-white">{cat.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 relative z-10 group-hover:text-white/80 transition-colors duration-300">
                    {cat.title === 'Historical Archives' &&
                      'Explore digitized colonial records, census data, and early manuscripts documenting Bodo settlements, land rights and administrative history.'}
                    {cat.title === 'Cultural Sociology' &&
                      'Study ethnographic surveys, village case studies, and oral interviews that illuminate caste, marriage, and festival life among the Bodo people.'}
                    {cat.title === 'Linguistic Studies' &&
                      'Access grammars, lexicons and audio corpora that capture the phonetics, dialectal variation and script history of the Bodo language.'}
                    {cat.title === 'Religious Philosophy' &&
                      'Read ritual manuals, theological essays, and field notes on Bathouism, Todaism and syncretic practices across Bodo communities.'}
                    {cat.title === 'Biographical Studies' &&
                      'Browse biographies, autobiographies and oral histories of political leaders, writers and activists central to the Bodo movement.'}
                    {cat.title === 'Movement Analysis' &&
                      'Review timelines, policy papers and protest archives that trace the evolution of the Bodoland statehood struggle.'}
                  </p>
                  <span className="text-accent group-hover:text-white text-xs font-bold uppercase tracking-widest flex items-center relative z-10 transition-colors duration-300">
                    Explore <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:text-secondary transition-all" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section >
    </div >
  );
}
