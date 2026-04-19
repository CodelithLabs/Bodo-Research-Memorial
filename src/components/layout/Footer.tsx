import Link from 'next/link';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const FOOTER_NAV = [
  {
    heading: 'Research',
    links: [
      { label: 'Leaders Directory', href: '/leaders' },
      { label: 'History', href: '/history' },
      { label: 'Culture', href: '/culture' },
      { label: 'Religion', href: '/religion' },
      { label: 'Movements', href: '/movements' },
    ],
  },
  {
    heading: 'Archive',
    links: [
      { label: 'Documents', href: '/archive/documents' },
      { label: 'Photographs', href: '/archive/photos' },
      { label: 'Manuscripts', href: '/archive/manuscripts' },
      { label: 'Artifacts', href: '/archive/artifacts' },
      { label: 'Timeline', href: '/timeline' },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: 'Research Papers', href: '/research' },
      { label: 'Submit Research', href: '/research/submit' },
      { label: 'Knowledge Graph', href: '/knowledge-graph' },
      { label: 'Geographic Map', href: '/map' },
      { label: 'Organizations', href: '/organizations' },
    ],
  },
  {
    heading: 'Community',
    links: [
      { label: 'Pay Tribute', href: '/tribute' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'About', href: '/about' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-amber-500/15 mt-0 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(201,146,42,0.85),rgba(110,91,211,0.8),transparent)]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(237,232,220,0.14) 1px, transparent 1px)', backgroundSize: '100% 28px' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="
                w-10 h-10 rounded-[10px]
                bg-[linear-gradient(135deg,rgba(201,146,42,0.18),rgba(110,91,211,0.16))]
                border border-amber-500/30
                flex items-center justify-center
                font-display text-amber-300 text-2xl font-bold
                group-hover:border-amber-300 group-hover:shadow-[0_0_30px_rgba(201,146,42,0.16)] transition-all duration-200
              ">
                B
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-cream text-[14px] font-semibold leading-none tracking-[0.08em] uppercase">
                  Bodo Research Memorial
                </span>
                <span className="text-[9px] uppercase tracking-[0.32em] text-cream/35">
                  Digital Heritage Archive
                </span>
              </div>
            </Link>

            <p className="text-cream/45 text-[13px] leading-relaxed font-light max-w-xs mb-6">
              A scholarly digital archive preserving the history, culture,
              language, and leadership of the Bodo people of Northeast India.
              Open access for researchers and community.
            </p>

            <div className="flex flex-col gap-2.5 mb-7">
              <a
                href="mailto:contact@bodoresearch.org"
                className="flex items-center gap-2.5 text-cream/40 text-[12px] hover:text-amber-300 transition-colors duration-150"
              >
                <Mail size={13} className="text-amber-400/60 flex-shrink-0" />
                contact@bodoresearch.org
              </a>
              <div className="flex items-center gap-2.5 text-cream/40 text-[12px]">
                <MapPin size={13} className="text-amber-400/60 flex-shrink-0" />
                Kokrajhar, Assam, India
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-cream/30">Lang:</span>
              <button className="text-[11px] text-cream/60 hover:text-cream border border-cream/10 hover:border-amber-500/35 rounded-md px-2.5 py-1 transition-all duration-150">
                English
              </button>
              <button className="text-[11px] text-amber-300/70 hover:text-amber-200 border border-amber-500/15 hover:border-amber-500/35 rounded-md px-2.5 py-1 transition-all duration-150">
                Bodo
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_NAV.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[10px] mb-4 uppercase tracking-[0.35em] text-amber-300">{col.heading}</h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="
                          text-cream/45 text-[12px] font-light tracking-[0.02em]
                          hover:text-cream/90 transition-colors duration-150
                        "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="
          mt-14 p-6 rounded-xl
          bg-[linear-gradient(135deg,rgba(10,16,33,0.95),rgba(20,24,44,0.95))] border border-amber-500/15
          flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5
        ">
          <div>
            <p className="text-cream text-[13px] font-medium mb-1">
              Stay informed on new research and archive additions
            </p>
            <p className="text-cream/40 text-[11px] font-light">
              No spam. Unsubscribe at any time.
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto flex-shrink-0">
            <input
              type="email"
              placeholder="your@email.com"
              className="
                flex-1 sm:w-56 bg-navy-900/70 border border-cream/10 rounded-md
                px-3 py-2 text-[12px] text-cream placeholder:text-cream/25
                focus:outline-none focus:border-amber-400/50
                transition-colors duration-150
              "
            />
            <button className="
              px-4 py-2 bg-[linear-gradient(135deg,rgba(201,146,42,0.98),rgba(110,91,211,0.9))] text-navy-950 text-[11px] font-bold
              tracking-[0.24em] uppercase rounded-md
              hover:brightness-110 transition-all duration-150 flex-shrink-0
            ">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/25 text-[11px] font-light tracking-[0.03em]">
            © {new Date().getFullYear()} Bodo Research Memorial. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="text-cream/25 text-[11px] hover:text-cream/60 transition-colors duration-150 uppercase tracking-[0.16em]">
              About
            </Link>
            <Link href="/contact" className="text-cream/25 text-[11px] hover:text-cream/60 transition-colors duration-150 uppercase tracking-[0.16em]">
              Contact
            </Link>
            <Link href="/privacy" className="text-cream/25 text-[11px] hover:text-cream/60 transition-colors duration-150 uppercase tracking-[0.16em]">
              Privacy
            </Link>
            <Link href="/terms" className="text-cream/25 text-[11px] hover:text-cream/60 transition-colors duration-150 uppercase tracking-[0.16em]">
              Terms
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cream/25 text-[11px] hover:text-cream/60 transition-colors duration-150 uppercase tracking-[0.16em]"
            >
              Open Source
              <ExternalLink size={9} />
            </a>
            <span className="text-cream/15 text-[11px]">MIT License</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
