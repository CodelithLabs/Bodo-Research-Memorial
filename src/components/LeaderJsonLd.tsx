import { Leader } from '@/types';

export function LeaderJsonLd({ leader }: { leader: Leader }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: leader.name,
    jobTitle: leader.title,
    description: leader.biography.slice(0, 300),
    birthDate: leader.birthDate,
    deathDate: leader.deathDate ?? undefined,
    birthPlace: {
      '@type': 'Place',
      name: leader.birthPlace,
      containedInPlace: { '@type': 'State', name: 'Assam, India' },
    },
    nationality: { '@type': 'Country', name: 'India' },
    knowsAbout: leader.movement,
    image: leader.imageUrl,
    url: `https://bodo-research-memorial.vercel.app/leaders/${leader.id}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
