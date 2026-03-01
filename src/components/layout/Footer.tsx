'use client';

import Link from 'next/link';
import { Landmark, Mail, MapPin, Github, Twitter, Youtube, Heart } from 'lucide-react';

const t = {
  brandTitle: "Bodofa Memorial",
  brandSubtitle: "Digital Heritage Archive",
  description: "A comprehensive digital platform dedicated to preserving, documenting, and sharing the rich cultural heritage of the Bodo people for future generations.",
  quickLinks: "Quick Links",
  resources: "Resources",
  contact: "Contact",
  location: "Bodoland, Assam, India",
  email: "contact@bodoresearch.org",
  copyright: "All rights reserved.",
  madeWith: "Made with love for our heritage",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-heritage text-white">
      <div className="container-institutional py-section">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-card bg-white/10 flex items-center justify-center">
                <Landmark className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <span className="font-display font-semibold text-white text-lg">
                  {t.brandTitle}
                </span>
                <p className="text-xs text-heritage-200">
                  {t.brandSubtitle}
                </p>
              </div>
            </Link>
            <p className="text-heritage-100 text-sm leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-gold-400">
              {t.quickLinks}
            </h4>
            <nav className="space-y-2">
              <Link href="/leaders" className="block text-heritage-100 hover:text-white transition-colors text-sm">
                All Leaders
              </Link>
              <Link href="/timeline" className="block text-heritage-100 hover:text-white transition-colors text-sm">
                Timeline
              </Link>
              <Link href="/history" className="block text-heritage-100 hover:text-white transition-colors text-sm">
                History
              </Link>
              <Link href="/tribute" className="block text-heritage-100 hover:text-white transition-colors text-sm">
                Tribute Wall
              </Link>
              <Link href="/culture" className="block text-heritage-100 hover:text-white transition-colors text-sm">
                Culture
              </Link>
              <Link href="/religion" className="block text-heritage-100 hover:text-white transition-colors text-sm">
                Religion
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-gold-400">
              {t.resources}
            </h4>
            <nav className="space-y-2">
              <Link href="/research/submit" className="block text-heritage-100 hover:text-white transition-colors text-sm">
                Submit Article
              </Link>
              <Link href="/about" className="block text-heritage-100 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link href="/api/leaders" className="block text-heritage-100 hover:text-white transition-colors text-sm">
                API Access
              </Link>
              <Link href="/admin" className="block text-heritage-100 hover:text-white transition-colors text-sm">
                Admin Portal
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-gold-400">
              {t.contact}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-heritage-100 text-sm">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>{t.location}</span>
              </div>
              <div className="flex items-center gap-3 text-heritage-100 text-sm">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>{t.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-card bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-card bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-card bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-heritage-600 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-heritage-200 text-sm">
            © {currentYear} {t.brandTitle}. {t.copyright}
          </p>
          <p className="flex items-center gap-2 text-heritage-200 text-sm">
            <Heart className="w-4 h-4 text-gold-400" />
            {t.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
