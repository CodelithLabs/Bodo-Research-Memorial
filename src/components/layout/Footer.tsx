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
    <footer className="relative mt-0 overflow-hidden border-t border-[#957347]/28 bg-[linear-gradient(180deg,#f7efdf_0%,#efe3cb_100%)]">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(133,93,34,0.7),transparent)]" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(74,67,55,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(74,67,55,0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative container-academic px-2 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="w-11 h-11 rounded-xl border border-[#8b6636]/35 bg-[linear-gradient(135deg,#f0ddbe,#f8e8cf)] text-[#5f4320] flex items-center justify-center font-display text-2xl font-bold shadow-[0_8px_20px_rgba(79,58,26,0.16)]">
                B
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-[#2f2a22] text-[14px] font-semibold leading-none tracking-[0.08em] uppercase">
                  Bodo Research Memorial
                </span>
                <span className="text-[9px] uppercase tracking-[0.32em] text-[#6d6252]">
                  Digital Heritage Archive
                </span>
              </div>
            </Link>

            <p className="text-[#564b3d] text-[13px] leading-relaxed max-w-xs mb-6">
              A scholarly digital archive preserving the history, culture,
              language, and leadership of the Bodo people of Northeast India.
              Open access for researchers and community.
            </p>

            <div className="flex flex-col gap-2.5 mb-7">
              <a
                href="mailto:contact@bodoresearch.org"
                className="flex items-center gap-2.5 text-[#62594d] text-[12px] hover:text-[#5f4320] transition-colors duration-150"
              >
                <Mail size={13} className="text-[#8b6636] flex-shrink-0" />
                contact@bodoresearch.org
              </a>
              <div className="flex items-center gap-2.5 text-[#62594d] text-[12px]">
                <MapPin size={13} className="text-[#8b6636] flex-shrink-0" />
                Kokrajhar, Assam, India
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#726859]">Lang:</span>
              <button className="text-[11px] text-[#564b3d] hover:text-[#2f2a22] border border-[#bca581] hover:border-[#8b6636] rounded-md px-2.5 py-1 transition-all duration-150">
                English
              </button>
              <button className="text-[11px] text-[#6f4f21] hover:text-[#5f4320] border border-[#8b6636]/35 hover:border-[#8b6636] rounded-md px-2.5 py-1 transition-all duration-150 bg-[#f2dfc0]/60">
                Bodo
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_NAV.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[10px] mb-4 uppercase tracking-[0.35em] text-[#7d5a28]">{col.heading}</h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[#564b3d] text-[12px] tracking-[0.02em] hover:text-[#2f2a22] transition-colors duration-150"
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

        <div className="mt-14 p-6 rounded-2xl border border-[#9a7a49]/25 bg-[linear-gradient(135deg,#fdf6e8,#f4e6cc)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="text-[#2f2a22] text-[13px] font-semibold mb-1">
              Stay informed on new research and archive additions
            </p>
            <p className="text-[#645a4c] text-[11px]">
              No spam. Unsubscribe at any time.
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto flex-shrink-0">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 sm:w-56 bg-[#fff8ec] border border-[#bca581] rounded-md px-3 py-2 text-[12px] text-[#2f2a22] placeholder:text-[#786f61] focus:outline-none focus:border-[#8b6636] transition-colors duration-150"
            />
            <button className="px-4 py-2 bg-[linear-gradient(135deg,#2d5042,#3f6857)] text-[#fffaf0] text-[11px] font-bold tracking-[0.24em] uppercase rounded-md hover:brightness-110 transition-all duration-150 flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#bfa67f]/35">
        <div className="container-academic px-2 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6c6253] text-[11px] tracking-[0.03em]">
            © {new Date().getFullYear()} Bodo Research Memorial. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="text-[#6c6253] text-[11px] hover:text-[#2f2a22] transition-colors duration-150 uppercase tracking-[0.16em]">
              About
            </Link>
            <Link href="/contact" className="text-[#6c6253] text-[11px] hover:text-[#2f2a22] transition-colors duration-150 uppercase tracking-[0.16em]">
              Contact
            </Link>
            <Link href="/privacy" className="text-[#6c6253] text-[11px] hover:text-[#2f2a22] transition-colors duration-150 uppercase tracking-[0.16em]">
              Privacy
            </Link>
            <Link href="/terms" className="text-[#6c6253] text-[11px] hover:text-[#2f2a22] transition-colors duration-150 uppercase tracking-[0.16em]">
              Terms
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#6c6253] text-[11px] hover:text-[#2f2a22] transition-colors duration-150 uppercase tracking-[0.16em]"
            >
              Open Source
              <ExternalLink size={9} />
            </a>
            <span className="text-[#847a6b] text-[11px]">MIT License</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
