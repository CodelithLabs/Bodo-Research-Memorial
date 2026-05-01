import Link from 'next/link';
import { Leader } from '@/types';

interface LeaderCardProps {
    leader: Leader;
}

const TAG_STYLES = {
    amber: 'bg-[#f0dfc2] text-[#6f4f21] border-[#b8863b]/35',
    blue: 'bg-[#d9e5e7] text-[#355460] border-[#5b7b87]/30',
    teal: 'bg-[#dbe7dc] text-[#2d5846] border-[#3f6857]/30',
};

export default function LeaderCard({ leader }: LeaderCardProps) {
    const initials = leader.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2);

    const tags = [
        leader.category ? { label: leader.category, variant: 'amber' as const } : null,
        leader.movement ? { label: leader.movement, variant: 'teal' as const } : null,
    ].filter(Boolean) as Array<{ label: string; variant: keyof typeof TAG_STYLES }>;

    return (
        <Link href={`/leaders/${leader.id}`} className="group block">
            <article
                className={`
                    relative rounded-[1.2rem] overflow-hidden
                    bg-[linear-gradient(180deg,rgba(255,251,243,0.94),rgba(248,238,221,0.96))]
                    border transition-all duration-300
                    hover:shadow-[0_20px_44px_rgba(76,57,28,0.2)] hover:-translate-y-1
                    ${leader.isMartyr
                        ? 'border-[#b8863b]/35 hover:border-[#a1712e]'
                        : 'border-[#ad8f62]/25 hover:border-[#8c6b3d]/45'}
                `}
            >
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(90,75,49,0.9) 1px, transparent 1px)', backgroundSize: '100% 16px' }} />
                <div className="
                    h-28 bg-[linear-gradient(135deg,rgba(184,134,59,0.18),rgba(63,104,87,0.12),rgba(255,246,233,0.95))]
                    flex items-center justify-center relative
                    border-b border-[#c8ae84]/35
                ">
                    <div className="
                        w-14 h-14 rounded-full border border-[#9a7140]/40
                        flex items-center justify-center
                        font-display text-xl text-[#6a4b23] font-bold
                        bg-[radial-gradient(circle,rgba(184,134,59,0.22),rgba(184,134,59,0.08))]
                        group-hover:border-[#8d662f] group-hover:shadow-[0_0_20px_rgba(184,134,59,0.2)] transition-all duration-300
                    ">
                        {initials}
                    </div>

                    <span className="
                        absolute top-2.5 right-2.5
                        text-[9px] tracking-[0.3em] uppercase text-[#6a4b23]
                        bg-[#f9ecd8]/80 border border-[#b8863b]/30
                        rounded-[3px] px-1.5 py-0.5 font-medium
                    ">
                        {leader.era}
                    </span>

                    {leader.isMartyr && (
                        <span className="
                            absolute top-2.5 left-2.5
                            text-[9px] tracking-[0.28em] uppercase text-[#6f4f21]
                            bg-[#f0dfc2]/85 border border-[#b8863b]/35
                            rounded-[3px] px-1.5 py-0.5 font-semibold
                        ">
                            Martyr
                        </span>
                    )}
                </div>

                <div className="p-4 relative">
                    <h3 className="
                        font-display text-[#2f2a22] text-[14px] font-semibold
                        leading-snug mb-1.5
                        group-hover:text-[#6f4f21] transition-colors duration-150
                    ">
                        {leader.name}
                    </h3>
                    <p className="text-[#6a6154] text-[10px] tracking-[0.18em] mb-3 font-medium uppercase">
                        {leader.title}
                    </p>

                    <div className="flex flex-wrap gap-1">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className={`
                                    text-[9px] tracking-[0.12em] uppercase font-medium
                                    px-1.5 py-0.5 rounded-[4px] border
                                    ${TAG_STYLES[tag.variant]}
                                `}
                            >
                                {tag.label}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </Link>
    );
}
