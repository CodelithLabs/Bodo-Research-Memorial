'use client';

import Link from 'next/link';
import { Landmark, Mail, MapPin, Shield, Users, Star } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_ADDRESS } from '@/lib/constants';

const t = {
  brandTitle: "Bodo Research Memorial",
  brandSubtitle: "Digital Heritage Archive",
  description: "A focused digital archive preserving biographies and legacies of Bodo leaders and martyrs.",
  quickLinks: "Leaders",
  resources: "Community",
  contact: "Contact",
  location: CONTACT_ADDRESS,
  email: CONTACT_EMAIL,
  copyright: "All rights reserved. Academic Repository.",
  madeWith: "Dedicated to the Bodo People",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t-4 border-parrot">
      {/* Maroon decorative accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-maroon to-transparent opacity-50" />

      <div className="container-academic py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-parrot flex items-center justify-center rounded-card">
                <Landmark className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block font-heading font-bold text-white text-base leading-tight">
                  {t.brandTitle}
                </span>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
                  {t.brandSubtitle}
                </p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-academic">
              {t.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-parrot">
              <Shield className="w-4 h-4" /> Official Archive
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-parrot font-heading text-xs font-bold uppercase tracking-[0.2em] mb-6">
              {t.quickLinks}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/leaders" className="text-white/70 hover:text-parrot transition-colors text-sm flex items-center gap-2">
                <Users className="w-4 h-4" /> Leader Archive
              </Link>
              <Link href="/leaders" className="text-white/70 hover:text-parrot transition-colors text-sm flex items-center gap-2">
                <Star className="w-4 h-4" /> Martyrs & Heroes
              </Link>
              <Link href="/tribute" className="text-white/70 hover:text-parrot transition-colors text-sm flex items-center gap-2">
                <Shield className="w-4 h-4" /> Tributes
              </Link>
              <Link href="/about" className="text-white/70 hover:text-parrot transition-colors text-sm">
                About the Archive
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-parrot font-heading text-xs font-bold uppercase tracking-[0.2em] mb-6">
              {t.resources}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/contact" className="text-white/70 hover:text-parrot transition-colors text-sm">
                Contact the Archive
              </Link>
              <Link href="/leaders" className="text-white/70 hover:text-parrot transition-colors text-sm">
                Browse Leaders
              </Link>
            </nav>
          </div>

          {/* Contact & Official */}
          <div>
            <h4 className="text-parrot font-heading text-xs font-bold uppercase tracking-[0.2em] mb-6">
              {t.contact}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-parrot shrink-0 mt-0.5" />
                <span className="leading-relaxed">{t.location}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-parrot shrink-0" />
                <span>{t.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              <span className="text-xs font-medium uppercase tracking-widest text-white/40 mr-2">Connect:</span>
              <a href="mailto:archive@bodo-research.org" className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-parrot hover:text-parrot transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs font-medium uppercase tracking-[0.15em]">
            © {currentYear} {t.brandTitle}. {t.copyright}
          </div>
          <div className="flex items-center gap-2 text-white/40 text-xs font-medium uppercase tracking-widest">
            <span className="w-2 h-2 bg-parrot rounded-full animate-pulse"></span>
            {t.madeWith}
          </div>
        </div>
      </div>

      {/* Maroon decorative border at bottom */}
      <div className="h-1 bg-gradient-to-r from-parrot via-maroon to-parrot opacity-30" />
    </footer>
  );
}
