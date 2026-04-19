import Link from 'next/link';
import { Leader } from '@/types';

interface LeaderCardProps {
    leader: Leader;
}

const TAG_STYLES = {
    amber: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    blue: 'bg-blue-400/10 text-blue-300/70 border-blue-400/20',
    teal: 'bg-teal-400/10 text-teal-300/70 border-teal-400/15',
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
                    relative rounded-[1.4rem] overflow-hidden
                    bg-[linear-gradient(180deg,rgba(12,18,34,0.96),rgba(7,10,20,0.96))]
                    border transition-all duration-300
                    hover:shadow-[0_24px_70px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:scale-[1.01]
                    ${leader.isMartyr
                        ? 'border-amber-500/25 hover:border-amber-400/45'
                        : 'border-cream/10 hover:border-amber-500/30'}
                `}
            >
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(237,232,220,0.9) 1px, transparent 1px)', backgroundSize: '100% 16px' }} />
                <div className="
                    h-28 bg-[linear-gradient(135deg,rgba(201,146,42,0.15),rgba(110,91,211,0.15),rgba(7,10,20,0.92))]
                    flex items-center justify-center relative
                    border-b border-cream/10
                ">
                    <div className="
                        w-14 h-14 rounded-full border border-amber-500/30
                        flex items-center justify-center
                        font-display text-xl text-amber-300 font-bold
                        bg-[radial-gradient(circle,rgba(201,146,42,0.22),rgba(201,146,42,0.05))]
                        group-hover:border-amber-400/80 group-hover:shadow-[0_0_30px_rgba(201,146,42,0.18)] transition-all duration-300
                    ">
                        {initials}
                    </div>

                    <span className="
                        absolute top-2.5 right-2.5
                        text-[9px] tracking-[0.3em] uppercase text-amber-300/80
                        bg-black/30 border border-amber-500/20
                        rounded-[3px] px-1.5 py-0.5 font-medium
                    ">
                        {leader.era}
                    </span>

                    {leader.isMartyr && (
                        <span className="
                            absolute top-2.5 left-2.5
                            text-[9px] tracking-[0.28em] uppercase text-amber-200
                            bg-amber-500/15 border border-amber-400/25
                            rounded-[3px] px-1.5 py-0.5 font-semibold
                        ">
                            Martyr
                        </span>
                    )}
                </div>

                <div className="p-4 relative">
                    <h3 className="
                        font-display text-cream text-[14px] font-semibold
                        leading-snug mb-1.5
                        group-hover:text-amber-200 transition-colors duration-150
                    ">
                        {leader.name}
                    </h3>
                    <p className="text-cream/40 text-[10px] tracking-[0.18em] mb-3 font-light uppercase">
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
