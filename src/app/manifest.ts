import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bodo Research Memorial',
    short_name: 'Bodo Memorial',
    description:
      'Digital research and archival platform preserving Bodo history, leadership, culture, and movements.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060D1F',
    theme_color: '#C9922A',
    icons: [
      {
        src: '/icons/profile.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
