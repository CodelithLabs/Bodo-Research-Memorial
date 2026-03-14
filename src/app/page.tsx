import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  BookOpen,
  Users,
  Globe,
  Calendar,
  Archive,
  ChevronRight,
  Languages,
  Music,
  Shirt,
  Crown,
  FileText,
  Image,
  Video,
  MapPin,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { leaders } from '@/data/leaders';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  metadataBase: new URL('https://bodo-research-memorial.org'),
  title: 'Bodo Research Memorial – Digital Heritage Archive',
  description: 'An institutional academic platform for the preservation of Bodo history, culture, and scholarly research.',
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
        alt: 'Bodo Research Memorial - Digital Heritage Archive',
      },
    ],
  },
};

// Knowledge Categories
const knowledgeCategories = [
  {
    title: 'Culture',
    icon: Globe,
    description: 'Traditional customs, social practices, and cultural heritage of the Bodo people.',
    path: '/culture',
    count: '245 documents'
  },
  {
    title: 'Language',
    icon: Languages,
    description: 'Bodo linguistics, grammar, scripts, and literary works.',
    path: '/research',
    count: '128 documents'
  },
  {
    title: 'Festivals',
    icon: Music,
    description: 'Traditional celebrations including Bwisagu, Maghi, and Bathou.',
    path: '/culture',
    count: '89 documents'
  },
  {
    title: 'Historical Leaders',
    icon: Crown,
    description: 'Biographies of influential figures and martyrs in Bodo history.',
    path: '/leaders',
    count: '156 profiles'
  },
  {
    title: 'Traditional Clothing',
    icon: Shirt,
    description: 'Aronai, Dokhna, and other traditional Bodo attire.',
    path: '/culture',
    count: '67 documents'
  },
  {
    title: 'Folklore',
    icon: BookOpen,
    description: 'Oral traditions, myths, legends, and folk tales.',
    path: '/culture',
    count: '203 documents'
  },
];

// Sample Research Papers
const researchPapers = [
  {
    title: 'The Evolution of Bodo Identity in Colonial Assam',
    abstract: 'This paper examines the transformation of Bodo ethnic identity during British colonial rule and its impact on modern political consciousness.',
    author: 'Dr. R.K. Mushahary',
    year: 2023,
    tags: ['History', 'Identity', 'Colonial Studies'],
    category: 'history'
  },
  {
    title: 'Bathouism: A Study of Bodo Religious Philosophy',
    abstract: 'An in-depth analysis of the indigenous Bathou religion, its rituals, symbols, and theological foundations.',
    author: 'Prof. B. Narzary',
    year: 2022,
    tags: ['Religion', 'Philosophy', 'Anthropology'],
    category: 'religion'
  },
  {
    title: 'Bodo Language Policy and Development',
    abstract: 'Tracing the journey of Bodo language from oral tradition to official recognition in schools and administration.',
    author: 'Dr. D. Boro',
    year: 2024,
    tags: ['Linguistics', 'Language Policy', 'Education'],
    category: 'language'
  },
];

// Knowledge Graph Connections
const knowledgeGraph = [
  { from: 'Bwisagu', to: 'Bodo Dances', type: 'connects' },
  { from: 'Bodo Dances', to: 'Aronai', type: 'connects' },
  { from: 'Aronai', to: 'Bathouism', type: 'connects' },
  { from: 'Bathouism', to: 'Deodhani', type: 'connects' },
  { from: 'Maghi', to: 'Bodo Cuisine', type: 'connects' },
  { from: 'Bodo Cuisine', to: 'Traditional Clothing', type: 'connects' },
];

// Historical Timeline Events
const timelineEvents = [
  { year: '1915', title: 'First Bodo Literary Society', description: 'Formation of the first organized cultural body.' },
  { year: '1947', title: 'Post-Independence Movements', description: 'Beginning of formal political advocacy for Bodo rights.' },
  { year: '1967', title: 'Bodo Language Recognition', description: 'Bodo language officially recognized in the Sixth Schedule.' },
  { year: '1987', title: 'Bodo Accord', description: 'First major political agreement for Bodoland.' },
  { year: '1993', title: 'Bodoland Territorial Council', description: 'Establishment of autonomous council.' },
  { year: '2020', title: 'Bodo Agreement', description: 'Historic peace agreement ending decades of conflict.' },
];

// Archive Categories
const archiveCategories = [
  { title: 'Documents', icon: FileText, count: '1,245', description: 'Historical records, manuscripts, and official documents' },
  { title: 'Photographs', icon: Image, count: '3,890', description: 'Historical photos, cultural events, and archival imagery' },
  { title: 'Videos', icon: Video, count: '156', description: 'Documentaries, interviews, and cultural recordings' },
  { title: 'Maps', icon: MapPin, count: '89', description: 'Historical maps of Bodo settlements and Bodoland' },
];

export default function HomePage() {
  const featuredLeaders = leaders.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory to-background-paper">
      {/* ============================================
          HERO SECTION - Academic Search
          ============================================ */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-textile-pattern opacity-30" />

        <div className="container-academic relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              {/* Pretitle */}
              <span className="text-parrot text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
                Institutional Digital Archive
              </span>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-6 leading-tight">
                Bodo Research <span className="text-parrot">Memorial</span>
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-text-secondary font-academic leading-relaxed mb-10 max-w-2xl mx-auto">
                Preserving the cultural heritage, history, and scholarly research of the Bodo people
                for future generations.
              </p>

              {/* Academic Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search the archive..."
                    className="search-input pl-12 pr-4 py-4 text-lg shadow-sm"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-3">
                <span className="text-xs font-medium uppercase tracking-widest text-text-muted py-2">Popular:</span>
                <Link href="/leaders" className="tag-category hover:bg-maroon hover:text-white transition-colors">
                  Leaders
                </Link>
                <Link href="/timeline" className="tag-category hover:bg-maroon hover:text-white transition-colors">
                  Timeline
                </Link>
                <Link href="/culture" className="tag-category hover:bg-maroon hover:text-white transition-colors">
                  Bathouism
                </Link>
                <Link href="/research" className="tag-category hover:bg-maroon hover:text-white transition-colors">
                  Research
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Decorative divider */}
        <div className="divider-maroon max-w-md mx-auto mt-16" />
      </section>

      {/* ============================================
          KNOWLEDGE CATEGORIES
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="text-center mb-14">
            <span className="text-pretitle">Digital Repository</span>
            <h2 className="text-section-title">Knowledge Categories</h2>
            <div className="divider-thin max-w-sm mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeCategories.map((category, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Link
                  href={category.path}
                  className="block card-academic p-6 group h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-parrot/10 rounded-card flex items-center justify-center group-hover:bg-parrot group-hover:shadow-glow-primary transition-all">
                      <category.icon className="w-6 h-6 text-parrot group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-card-title mb-2 group-hover:text-parrot transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed mb-3">
                        {category.description}
                      </p>
                      <span className="text-xs font-medium text-text-light uppercase tracking-wide">
                        {category.count}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-parrot text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Browse <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          RESEARCH PAPERS SECTION
          ============================================ */}
      <section className="section-padding bg-background-paper border-y border-border">
        <div className="container-academic">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-pretitle">Scholarly Work</span>
              <h2 className="text-section-title mb-0">Research Papers</h2>
              <p className="text-text-secondary mt-3 mb-0">
                Peer-reviewed academic research on Bodo history, culture, language, and society.
              </p>
            </div>
            <Link href="/research" className="btn-ghost flex items-center gap-1 group">
              View All Papers <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {researchPapers.map((paper, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <article className="card-cultural h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {paper.tags.map((tag, i) => (
                        <span key={i} className="tag-category text-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-card-title mb-3 line-clamp-2">
                      {paper.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                      {paper.abstract}
                    </p>
                  </div>
                  <div className="px-6 py-4 bg-ivory/50 border-t border-border flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-text-primary">{paper.author}</p>
                      <p className="text-xs text-text-muted">{paper.year}</p>
                    </div>
                    <button className="text-parrot hover:text-parrot-dark text-sm font-medium flex items-center gap-1">
                      PDF <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          KNOWLEDGE GRAPH SECTION
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="text-center mb-14">
            <span className="text-pretitle">Cultural Connections</span>
            <h2 className="text-section-title">Knowledge Graph</h2>
            <p className="text-text-secondary max-w-2xl mx-auto mt-3">
              Explore the interconnected relationships between Bodo festivals, dances,
              clothing, religious practices, and cultural traditions.
            </p>
          </div>

          {/* Visual Knowledge Graph */}
          <div className="card-academic p-8 md:p-12">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
              {knowledgeGraph.map((connection, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4">
                  <Link
                    href="/culture"
                    className="tag-institutional hover:bg-parrot hover:text-white transition-colors px-4 py-2"
                  >
                    {connection.from}
                  </Link>
                  <ChevronRight className="w-4 h-4 text-maroon rotate-90 md:rotate-0" />
                  <Link
                    href="/culture"
                    className="tag-category hover:bg-maroon hover:text-white transition-colors px-4 py-2"
                  >
                    {connection.to}
                  </Link>
                  {index < knowledgeGraph.length - 1 && (
                    <div className="hidden md:block w-8 h-px bg-border" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/culture" className="btn-outline">
                Explore Cultural Connections <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          HISTORICAL TIMELINE
          ============================================ */}
      <section className="section-padding bg-primary text-white">
        {/* Maroon accent line */}
        <div className="divider-maroon max-w-2xl mx-auto mb-16" />

        <div className="container-academic">
          <div className="text-center mb-14">
            <span className="text-parrot text-xs font-bold uppercase tracking-[0.25em] mb-4 block">Historical Record</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Historical Timeline</h2>
            <p className="text-white/70 mt-3 max-w-2xl mx-auto">
              Key milestones in Bodo history, from colonial times to the present day.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20" />

              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-6 mb-8 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Year badge */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="pl-12 md:pl-0">
                      <span className="inline-block px-3 py-1 bg-parrot text-white text-sm font-bold rounded-card">
                        {event.year}
                      </span>
                      <h3 className="text-lg font-heading font-bold mt-3 mb-1">{event.title}</h3>
                      <p className="text-white/70 text-sm">{event.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-parrot rounded-full shadow-lg" />

                  {/* Empty space for opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/timeline" className="btn-primary">
              View Full Timeline <Calendar className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Decorative border */}
        <div className="divider-maroon max-w-2xl mx-auto mt-16" />
      </section>

      {/* ============================================
          FEATURED LEADERS
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-pretitle">Legacy & Leadership</span>
              <h2 className="text-section-title mb-0">Featured Leaders</h2>
              <p className="text-text-secondary mt-3 mb-0">
                Honoring the pioneers and visionaries who shaped Bodo history and culture.
              </p>
            </div>
            <Link href="/leaders" className="btn-ghost flex items-center gap-1 group">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredLeaders.map((leader, index) => (
              <ScrollReveal key={leader.id} delay={index * 0.1}>
                <Link href={`/leaders/${leader.id}`} className="block card-academic group h-full">
                  <div className="aspect-[4/3] bg-gradient-to-br from-parrot/20 to-maroon/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-16 h-16 text-text-muted/30" />
                    </div>
                    {leader.isMartyr && (
                      <span className="absolute top-3 right-3 tag-category text-[10px]">
                        Martyr
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-card-title mb-2 group-hover:text-parrot transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-text-muted text-sm mb-3">{leader.era} Movement</p>
                    <p className="text-text-secondary text-sm line-clamp-2">
                      {leader.biography?.split('.')[0]}.
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          DIGITAL ARCHIVE
          ============================================ */}
      <section className="section-padding bg-background-paper border-y border-border">
        <div className="container-academic">
          <div className="text-center mb-14">
            <span className="text-pretitle">Preservation</span>
            <h2 className="text-section-title">Digital Archive</h2>
            <p className="text-text-secondary max-w-2xl mx-auto mt-3">
              Digitized documents, photographs, videos, and artifacts documenting
              Bodo heritage and history.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {archiveCategories.map((category, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Link href="/archive" className="card-institutional p-6 group h-full text-center">
                  <div className="w-14 h-14 bg-parrot/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-parrot group-hover:shadow-glow-primary transition-all">
                    <category.icon className="w-7 h-7 text-parrot group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-card-title mb-2 group-hover:text-parrot transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-3xl font-heading font-bold text-parrot mb-2">
                    {category.count}
                  </p>
                  <p className="text-text-muted text-xs">
                    {category.description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/archive" className="btn-outline">
              Explore the Archive <Archive className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="section-padding bg-gradient-to-r from-parrot to-parrot-dark text-white">
        <div className="container-academic text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Contribute to the Archive
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Have historical documents, photographs, or research to share?
            Help us preserve Bodo heritage for future generations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/research/submit" className="btn-cta bg-white text-parrot hover:bg-ivory">
              Submit Research
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-parrot">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
