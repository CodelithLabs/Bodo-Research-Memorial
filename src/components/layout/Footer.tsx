'use client';

import Link from 'next/link';
import { Landmark, Mail, MapPin, Github, Twitter, Heart, ExternalLink, ShieldCheck, Phone } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_ADDRESS, CONTACT_PHONE, SOCIAL_GITHUB, SOCIAL_TWITTER } from '@/lib/constants';

const t = {
  brandTitle: "Bodo Research Memorial",
  brandSubtitle: "Digital Heritage Repository",
  description: "An institutional platform dedicated to the preservation of Bodo history, cultural documentation, and the commemoration of community leaders and martyrs.",
  quickLinks: "Platform",
  resources: "Academic Resources",
  contact: "Institutional Contact",
  location: CONTACT_ADDRESS,
  email: CONTACT_EMAIL,
  copyright: "All rights reserved. Institutional Repository.",
  madeWith: "Dedicated to the Bodo People",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-white/5">
      <div className="container-institutional py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center relative overflow-hidden group-hover:bg-white/20 transition-colors">
                <div className="absolute inset-0 opacity-10 bg-weave" />
                <Landmark className="w-6 h-6 text-secondary relative z-10" />
              </div>
              <div>
                <span className="block font-bold text-white text-lg uppercase tracking-wider leading-none mb-1">
                  {t.brandTitle}
                </span>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                  {t.brandSubtitle}
                </p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-8 italic">
              &quot;{t.description}&quot;
            </p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-secondary font-bold">
              <ShieldCheck className="w-4 h-4" /> Official Historical Record
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-8">
              {t.quickLinks}
            </h4>
            <nav className="flex flex-col gap-4">
              <Link href="/leaders" className="text-white/60 hover:text-secondary transition-colors text-xs font-bold uppercase tracking-widest">
                Digital Archive
              </Link>
              <Link href="/timeline" className="text-white/60 hover:text-secondary transition-colors text-xs font-bold uppercase tracking-widest">
                Historical Timeline
              </Link>
              <Link href="/history" className="text-white/60 hover:text-secondary transition-colors text-xs font-bold uppercase tracking-widest">
                History & Culture
              </Link>
              <Link href="/research" className="text-white/60 hover:text-secondary transition-colors text-xs font-bold uppercase tracking-widest">
                Research Portal
              </Link>
              <Link href="/tribute" className="text-white/60 hover:text-secondary transition-colors text-xs font-bold uppercase tracking-widest">
                Memorial Wall
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-8">
              {t.resources}
            </h4>
            <nav className="flex flex-col gap-4">
              <Link href="/research/submit" className="text-white/60 hover:text-secondary transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                Document Submission <ExternalLink className="w-3 h-3" />
              </Link>
              <Link href="/about" className="text-white/60 hover:text-secondary transition-colors text-xs font-bold uppercase tracking-widest">
                Institutional Mission
              </Link>
              <Link href="/citation" className="text-white/60 hover:text-secondary transition-colors text-xs font-bold uppercase tracking-widest">
                Citation Guide
              </Link>
              <Link href="/admin" className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mt-4">
                Staff Portal
              </Link>
            </nav>
          </div>

          {/* Contact & Official */}
          <div>
            <h4 className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-8">
              {t.contact}
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-white/60 text-sm">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="leading-relaxed">{t.location}</span>
              </div>
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>{t.email}</span>
              </div>
            </div>

            {/* Social Record Links */}
            <div className="flex gap-4 mt-10">
              <a href="https://github.com/bodoresearch" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-secondary transition-colors group" aria-label="GitHub">
                <Github className="w-4 h-4 group-hover:text-secondary" />
              </a>
              <a href="https://twitter.com/bodoresearch" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-secondary transition-colors group" aria-label="Twitter">
                <Twitter className="w-4 h-4 group-hover:text-secondary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">
            © {currentYear} {t.brandTitle}. {t.copyright}
          </div>
          <div className="flex items-center gap-3 text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Heart className="w-4 h-4 text-secondary/30" />
            {t.madeWith}
          </div>
        </div>
      </div>
    </footer>
  );
}
