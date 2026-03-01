'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Users,
  Heart,
  History,
  Languages,
  BookOpen,
  Globe,
  Calendar,
  Crown,
  Landmark
} from 'lucide-react';
import { leaders } from '@/data/leaders';

// Translation object
const t = {
  hero: {
    title: "Bodofa Memorial",
    subtitle: "Digital Heritage Archive",
    description: "A comprehensive digital platform dedicated to preserving, documenting, and sharing the rich cultural heritage of the Bodo people for future generations.",
    ctaPrimary: "Explore Archives",
    ctaSecondary: "Contribute Research",
  },
  featuredLeaders: {
    title: "Featured Leaders",
    subtitle: "Visionaries who shaped Bodo history and culture",
    viewAll: "View All Leaders",
    lifespan: "Lived",
  },
  categories: {
    title: "Research Categories",
    subtitle: "Explore the breadth of Bodo heritage",
    leaders: {
      title: "Historical Leaders",
      description: "Political leaders, social reformers, and cultural pioneers",
      count: "24 entries",
    },
    culture: {
      title: "Culture & Traditions",
      description: " customs, festivals, and traditional practices",
      count: "18 entries",
    },
    religion: {
      title: "Religion & Spirituality",
      description: "Bathou faith, rituals, and spiritual traditions",
      count: "12 entries",
    },
    language: {
      title: "Language & Literature",
      description: "Bodo language, scripts, and literary works",
      count: "15 entries",
    },
    history: {
      title: "Historical Events",
      description: " key moments in Bodo history and movements",
      count: "22 entries",
    },
    geography: {
      title: "Geography & Regions",
      description: "Bodoland, communities, and territorial heritage",
      count: "8 entries",
    },
  },
  timeline: {
    title: "Historical Timeline",
    subtitle: "Journey through Bodo history",
    viewFull: "View Full Timeline",
    eras: [
      { period: "Ancient", year: "Before 500 CE" },
      { period: "Medieval", year: "500 - 1500 CE" },
      { period: "Colonial", year: "1500 - 1947" },
      { period: "Modern", year: "1947 - Present" },
    ],
  },
  recentArticles: {
    title: "Recently Added",
    subtitle: "Latest research and documentation",
    viewAll: "Browse All Articles",
    addedOn: "Added",
  },
  about: {
    title: "About the Archive",
    subtitle: "Preserving heritage for future generations",
    mission: "The Bodofa Memorial Digital Archive is a scholarly initiative dedicated to the comprehensive documentation and preservation of Bodo history, culture, and heritage.",
    purpose: "Our purpose is to create a authoritative, accessible, and permanent record of Bodo civilization that serves researchers, students, and the broader community.",
    values: [
      "Scholarly rigor and academic integrity",
      "Community engagement and collaboration",
      "Cultural sensitivity and respect",
      "Long-term preservation and accessibility",
    ],
    cta: "Learn More About Us",
  },
};

export default function HomePage() {
  const featuredLeaders = leaders.slice(0, 3);

  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.getFullYear().toString();
  };

  return (
    <div className="min-h-screen">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative bg-heritage text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-institutional relative z-10 py-section">
          <div className="max-w-3xl">
            <p className="text-gold-300 font-medium tracking-wider uppercase mb-4 text-sm">
              {t.hero.subtitle}
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-heritage-100 mb-8 leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/leaders" className="btn-primary">
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/research/submit" className="btn-secondary border-white text-white hover:bg-white hover:text-heritage">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400" />
      </section>

      {/* ============================================
          FEATURED LEADERS SECTION
          ============================================ */}
      <section className="section-padding bg-parchment">
        <div className="container-institutional">
          <div className="text-center mb-12">
            <h2 className="section-title text-center">{t.featuredLeaders.title}</h2>
            <p className="section-subtitle mx-auto">{t.featuredLeaders.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredLeaders.map((leader) => (
              <Link
                key={leader.id}
                href={`/leaders/${leader.id}`}
                className="card-institutional group overflow-hidden"
              >
                <div className="relative h-64 bg-heritage-100">
                  {leader.imageUrl ? (
                    <Image
                      src={leader.imageUrl}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Crown className="w-16 h-16 text-heritage-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-heritage mb-2 group-hover:text-gold-600 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3">
                    {leader.birthDate && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {t.featuredLeaders.lifespan}: {formatDate(leader.birthDate)} {leader.deathDate && `- ${formatDate(leader.deathDate)}`}
                      </span>
                    )}
                  </p>
                  <p className="text-text-secondary line-clamp-2">
                    {leader.biography?.substring(0, 120)}
                  </p>

                  <div className="mt-4 flex items-center text-gold-600 font-medium">
                    <span>{t.featuredLeaders.viewAll}</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/leaders" className="btn-secondary">
              {t.featuredLeaders.viewAll}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          RESEARCH CATEGORIES SECTION
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container-institutional">
          <div className="text-center mb-12">
            <h2 className="section-title text-center">{t.categories.title}</h2>
            <p className="section-subtitle mx-auto">{t.categories.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Historical Leaders */}
            <Link href="/leaders" className="card-institutional p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-card bg-heritage-50 flex items-center justify-center flex-shrink-0 group-hover:bg-heritage group-hover:text-white transition-colors">
                  <Users className="w-6 h-6 text-heritage group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-heritage mb-1">
                    {t.categories.leaders.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-2">
                    {t.categories.leaders.description}
                  </p>
                  <span className="label-academic">{t.categories.leaders.count}</span>
                </div>
              </div>
            </Link>

            {/* Culture & Traditions */}
            <Link href="/culture" className="card-institutional p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-card bg-heritage-50 flex items-center justify-center flex-shrink-0 group-hover:bg-heritage group-hover:text-white transition-colors">
                  <Heart className="w-6 h-6 text-heritage group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-heritage mb-1">
                    {t.categories.culture.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-2">
                    {t.categories.culture.description}
                  </p>
                  <span className="label-academic">{t.categories.culture.count}</span>
                </div>
              </div>
            </Link>

            {/* Religion & Spirituality */}
            <Link href="/religion" className="card-institutional p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-card bg-heritage-50 flex items-center justify-center flex-shrink-0 group-hover:bg-heritage group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6 text-heritage group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-heritage mb-1">
                    {t.categories.religion.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-2">
                    {t.categories.religion.description}
                  </p>
                  <span className="label-academic">{t.categories.religion.count}</span>
                </div>
              </div>
            </Link>

            {/* Language & Literature */}
            <Link href="/leaders" className="card-institutional p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-card bg-heritage-50 flex items-center justify-center flex-shrink-0 group-hover:bg-heritage group-hover:text-white transition-colors">
                  <Languages className="w-6 h-6 text-heritage group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-heritage mb-1">
                    {t.categories.language.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-2">
                    {t.categories.language.description}
                  </p>
                  <span className="label-academic">{t.categories.language.count}</span>
                </div>
              </div>
            </Link>

            {/* Historical Events */}
            <Link href="/history" className="card-institutional p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-card bg-heritage-50 flex items-center justify-center flex-shrink-0 group-hover:bg-heritage group-hover:text-white transition-colors">
                  <History className="w-6 h-6 text-heritage group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-heritage mb-1">
                    {t.categories.history.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-2">
                    {t.categories.history.description}
                  </p>
                  <span className="label-academic">{t.categories.history.count}</span>
                </div>
              </div>
            </Link>

            {/* Geography & Regions */}
            <Link href="/leaders" className="card-institutional p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-card bg-heritage-50 flex items-center justify-center flex-shrink-0 group-hover:bg-heritage group-hover:text-white transition-colors">
                  <Globe className="w-6 h-6 text-heritage group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-heritage mb-1">
                    {t.categories.geography.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-2">
                    {t.categories.geography.description}
                  </p>
                  <span className="label-academic">{t.categories.geography.count}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          TIMELINE PREVIEW SECTION
          ============================================ */}
      <section className="section-padding bg-heritage text-white">
        <div className="container-institutional">
          <div className="text-center mb-12">
            <h2 className="text-white section-title text-center">{t.timeline.title}</h2>
            <p className="text-heritage-200 section-subtitle mx-auto">{t.timeline.subtitle}</p>
          </div>

          {/* Timeline Strip */}
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-heritage-600" />

            {/* Era Markers */}
            <div className="grid grid-cols-4 gap-4 relative">
              {t.timeline.eras.map((era, idx) => (
                <div key={idx} className="text-center group cursor-pointer">
                  {/* Gold Marker */}
                  <div className="w-4 h-4 rounded-full bg-gold-500 mx-auto mb-4 relative z-10 group-hover:scale-150 transition-transform" />

                  <h3 className="font-display font-semibold text-lg mb-1 text-gold-400 group-hover:text-gold-300">
                    {era.period}
                  </h3>
                  <p className="text-heritage-200 text-sm">
                    {era.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/timeline" className="btn-secondary border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-heritage">
              {t.timeline.viewFull}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          RECENTLY ADDED ARTICLES SECTION
          ============================================ */}
      <section className="section-padding bg-parchment">
        <div className="container-institutional">
          <div className="text-center mb-12">
            <h2 className="section-title text-center">{t.recentArticles.title}</h2>
            <p className="section-subtitle mx-auto">{t.recentArticles.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {leaders.slice(0, 5).map((leader) => (
              <Link
                key={leader.id}
                href={`/leaders/${leader.id}`}
                className="card-institutional p-6 flex items-center gap-6 group"
              >
                <div className="w-20 h-20 rounded-card bg-heritage-100 flex-shrink-0 overflow-hidden relative">
                  {leader.imageUrl ? (
                    <Image
                      src={leader.imageUrl}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-8 h-8 text-heritage-300" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display font-semibold text-lg text-heritage truncate group-hover:text-gold-600 transition-colors">
                      {leader.name}
                    </h3>
                    <span className="label-academic flex-shrink-0">Leader</span>
                  </div>
                  <p className="text-text-secondary text-sm line-clamp-1">
                    {leader.biography?.substring(0, 100)}
                  </p>
                  <p className="text-text-muted text-xs mt-1">
                    {t.recentArticles.addedOn}: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>

                <ArrowRight className="w-5 h-5 text-heritage-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/leaders" className="btn-secondary">
              {t.recentArticles.viewAll}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT THE ARCHIVE SECTION
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-50 mb-6">
              <Landmark className="w-8 h-8 text-gold-600" />
            </div>

            <h2 className="section-title text-center">{t.about.title}</h2>
            <p className="section-subtitle mx-auto mb-8">{t.about.subtitle}</p>

            <div className="text-left bg-parchment rounded-card p-8 mb-8">
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                {t.about.mission}
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                {t.about.purpose}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {t.about.values.map((value, idx) => (
                <div key={idx} className="bg-parchment rounded-card p-4 text-center">
                  <div className="w-2 h-2 rounded-full bg-gold-500 mx-auto mb-3" />
                  <p className="text-text-secondary text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              {t.about.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
