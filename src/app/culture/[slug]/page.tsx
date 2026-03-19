/**
 * ============================================
 * Culture Article Page
 * ============================================
 * Individual article display for Bodo culture topics
 */

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookOpen, Music, Utensils, Palette, Building, Heart, Shirt, Sparkles } from 'lucide-react';
import { ALL_CULTURE_ARTICLES } from '@/data/culture';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const categoryIcons: Record<string, typeof BookOpen> = {
  festival: Calendar,
  dance: Music,
  textiles: Palette,
  cuisine: Utensils,
  music: Music,
  architecture: Building,
  traditions: BookOpen,
  games: Heart,
  'traditional-clothing': Shirt,
  folklore: Sparkles,
};

const categoryColors: Record<string, string> = {
  festival: 'bg-amber-100 text-amber-700',
  dance: 'bg-pink-100 text-pink-700',
  textiles: 'bg-purple-100 text-purple-700',
  cuisine: 'bg-orange-100 text-orange-700',
  music: 'bg-indigo-100 text-indigo-700',
  architecture: 'bg-teal-100 text-teal-700',
  traditions: 'bg-rose-100 text-rose-700',
  games: 'bg-green-100 text-green-700',
  'traditional-clothing': 'bg-indigo-100 text-indigo-700',
  folklore: 'bg-cyan-100 text-cyan-700',
};

export async function generateStaticParams() {
  return ALL_CULTURE_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = ALL_CULTURE_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | Bodo Research Memorial',
    };
  }

  return {
    title: `${article.title} | Bodo Research Memorial`,
    description: article.summary,
  };
}

export default async function CultureArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = ALL_CULTURE_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const Icon = categoryIcons[article.category] || BookOpen;
  const categoryColor = categoryColors[article.category] || 'bg-primary/10 text-primary';

  // Find related articles (same category or shared tags)
  const relatedArticles = ALL_CULTURE_ARTICLES
    .filter((a) => a.id !== article.id && (a.category === article.category || a.tags.some((t) => article.tags.includes(t))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-weave" />
        <div className="container-institutional relative z-10">
          <Link
            href="/culture"
            className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Culture
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${categoryColor}`}>
              {article.category}
            </span>
          </div>

          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            {article.summary}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{article.readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <div className="flex flex-wrap gap-2">
                {article.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-sm capitalize">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-text-secondary leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-divider">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-sm font-bold text-text-secondary uppercase tracking-wider">Share</span>
                <button className="p-2 bg-primary/5 rounded-full hover:bg-primary/10 transition-colors">
                  <Share2 className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Table of Contents */}
                <div className="card-academic p-6 mb-6">
                  <h3 className="font-bold text-primary mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Article Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-muted">Category</span>
                      <span className="text-primary font-medium capitalize">{article.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-muted">Read Time</span>
                      <span className="text-primary font-medium">{article.readingTime} min</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-muted">Tags</span>
                      <span className="text-primary font-medium">{article.tags.length}</span>
                    </div>
                  </div>
                </div>

                {/* Related Articles Preview */}
                {relatedArticles.length > 0 && (
                  <div className="card-academic p-6">
                    <h3 className="font-bold text-primary mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedArticles.map((related) => (
                        <Link
                          key={related.id}
                          href={`/culture/${related.slug}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium text-primary group-hover:text-secondary transition-colors mb-1">
                            {related.title}
                          </h4>
                          <p className="text-xs text-text-muted line-clamp-2">{related.summary}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-institutional">
            <h2 className="text-2xl font-bold text-primary mb-8">More About Bodo Culture</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link key={related.id} href={`/culture/${related.slug}`}>
                  <div className="card-academic p-6 group h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${categoryColors[related.category] || 'bg-primary/10 text-primary'}`}>
                        {related.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-text-secondary line-clamp-2">{related.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Culture CTA */}
      <section className="bg-primary text-white py-12">
        <div className="container-institutional text-center">
          <h3 className="text-xl font-bold mb-4">Explore More Bodo Culture</h3>
          <Link href="/culture" className="btn-outline border-white text-white hover:bg-white hover:text-primary inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            View All Articles
          </Link>
        </div>
      </section>
    </div>
  );
}
