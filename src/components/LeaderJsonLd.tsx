import { Leader } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://bodo-research-memorial.org';

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
    deathPlace: leader.deathPlace
      ? {
          '@type': 'Place',
          name: leader.deathPlace,
          containedInPlace: { '@type': 'State', name: 'Assam, India' },
        }
      : undefined,
    nationality: { '@type': 'Country', name: 'India' },
    knowsAbout: leader.movement,
    image: leader.imageUrl,
    url: `${BASE_URL}/leaders/${leader.id}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
