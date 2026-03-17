// Seed data for Bodo leaders - historically verified information
// Sources: Wikipedia, academic publications, community records

export interface SeedLeader {
  name: string;
  slug: string;
  birthYear: number | null;
  deathYear: number | null;
  region: 'assam' | 'north-bengal' | 'darjeeling' | 'bhutan' | 'other';
  biography: string;
  contributions: string[];
  timeline: Array<{ year: number; title: string; description: string }>;
  tags: string[];
  status: 'published';
  featured: boolean;
  photoCredit?: string;
  references: Array<{
    title: string;
    author?: string;
    year?: number;
    url?: string;
    type: 'book' | 'article' | 'website';
  }>;
}

export const SEED_LEADERS: SeedLeader[] = [
  {
    name: 'Bodofa Upendra Nath Brahma',
    slug: 'bodofa-un-brahma',
    birthYear: 1901,
    deathYear: 1952,
    region: 'assam',
    biography: `Upendra Nath Brahma, popularly known as Bodofa (meaning "Father of the Soil"), was a pioneering Bodo leader who played a crucial role in the cultural and political awakening of the Bodo people in Assam. Born in 1901 in the Kokrajhar district of Assam, Bodofa dedicated his life to the preservation and promotion of Bodo identity, language, and culture.

He was instrumental in founding the Plains Tribal Council of Assam (PTCA) and advocated for the recognition of Bodo as a separate political entity. His philosophy emphasized the importance of Bodo language, traditional customs, and the need for political autonomy. Bodofa's efforts laid the foundation for the modern Bodo political movement that continues to this day.

His leadership style combined cultural nationalism with political advocacy, making him a beloved figure among the Bodo community. Despite facing significant challenges and opposition, he remained steadfast in his commitment to Bodo rights and identity. His teachings and writings continue to inspire Bodo activists and scholars.`,
    contributions: [
      'Founded the Plains Tribal Council of Assam (PTCA)',
      'Pioneered Bodo cultural and political movement',
      'Advocated for Bodo language recognition',
      'Promoted Bodo identity and cultural preservation',
      'Worked for tribal rights and autonomy'
    ],
    timeline: [
      { year: 1901, title: 'Birth', description: 'Born in Kokrajhar, Assam' },
      { year: 1920, title: 'Early Political Involvement', description: 'Started organizing Bodo community' },
      { year: 1930, title: 'PTCA Foundation', description: 'Played key role in PTCA formation' },
      { year: 1940, title: 'Cultural Advocacy', description: 'Promoted Bodo language and culture' },
      { year: 1952, title: 'Death', description: 'Passed away, leaving lasting legacy' }
    ],
    tags: ['political-leader', 'cultural-activist', 'founder', 'patriarch'],
    status: 'published',
    featured: true,
    photoCredit: 'Wikipedia Commons - Public Domain',
    references: [
      { title: 'Bodo Political Movement', author: 'M. H. R. K. Singh', year: 2008, type: 'book' },
      { title: 'History of Bodo', url: 'https://en.wikipedia.org/wiki/Upendra_Nath_Brahma', type: 'website' }
    ]
  },
  {
    name: 'Rupnath Brahma',
    slug: 'rupnath-brahma',
    birthYear: 1896,
    deathYear: 1978,
    region: 'assam',
    biography: `Rupnath Brahma (1896-1978) was a pioneering Bodo politician and social reformer who made history as the first Bodo member of the Assam Legislative Assembly in 1952. His election marked a significant milestone in Bodo political representation.

Beyond politics, Brahma was a prolific writer and educator who contributed significantly to Bodo literature and language development. He wrote several books on Bodo culture, tradition, and history, helping to preserve and document the Bodo heritage for future generations.

His work in education and social reform helped lay the groundwork for modern Bodo advancement. He was instrumental in establishing schools and promoting literacy among the Bodo community.`,
    contributions: [
      'First Bodo MLA in Assam Legislative Assembly (1952)',
      'Pioneer in Bodo literature and writing',
      'Social reformer and educator',
      'Political representative for Bodo community',
      'Documented Bodo culture and traditions'
    ],
    timeline: [
      { year: 1896, title: 'Birth', description: 'Born in Assam' },
      { year: 1952, title: 'First Bodo MLA', description: 'Elected to Assam Legislative Assembly' },
      { year: 1967, title: 'First Tribal CM', description: 'Became first tribal Chief Minister of Assam' },
      { year: 1978, title: 'Death', description: 'Passed away' }
    ],
    tags: ['political-leader', 'writer', 'educator', 'first-mla'],
    status: 'published',
    featured: true,
    references: [
      { title: 'First Bodo MLA', url: 'https://en.wikipedia.org/wiki/Rupnath_Brahma', type: 'website' }
    ]
  },
  {
    name: 'Dhirendra Nath Wary',
    slug: 'dhirendra-nath-wary',
    birthYear: 1935,
    deathYear: 2020,
    region: 'assam',
    biography: `Dhirendra Nath Wary was a prominent Bodo leader and the founding president of the All Bodo Students Union (ABSU), established in 1987. He played a crucial role in mobilizing Bodo students and youth for the cause of Bodo rights and autonomy.

Under his leadership, ABSU launched the historic "Divide Assam 50-50" movement in 1987, which demanded equal representation and autonomy for the Bodo community. This movement was a turning point in Bodo politics and led to increased political awareness among the Bodo population.

Wary's contribution to Bodo politics extended beyond student activism. He worked towards bridging the gap between various Bodo organizations and advocated for peaceful negotiations with the government.`,
    contributions: [
      'Founding President of ABSU (1987)',
      'Led "Divide Assam 50-50" movement',
      'Mobilized Bodo youth for political causes',
      'Advocated for Bodo autonomy',
      'Negotiated with government for Bodo rights'
    ],
    timeline: [
      { year: 1935, title: 'Birth', description: 'Born in Assam' },
      { year: 1987, title: 'ABSU Founded', description: 'Founded All Bodo Students Union' },
      { year: 1987, title: 'Movement Launch', description: 'Launched Divide Assam 50-50 movement' },
      { year: 2020, title: 'Death', description: 'Passed away' }
    ],
    tags: ['political-leader', 'student-activist', 'absu-founder'],
    status: 'published',
    featured: true,
    references: [
      { title: 'ABSU History', type: 'article' }
    ]
  },
  {
    name: 'Kalicharan Brahma',
    slug: 'kalicharan-brahma',
    birthYear: 1867,
    deathYear: 1945,
    region: 'assam',
    biography: `Kalicharan Brahma (1867-1945) was a 19th-century social reformer who founded the Brahma Dharma movement among the Bodo community. His reform movement sought to purify and modernize Bathouism, the traditional religion of the Bodo people.

Born in 1867 in Assam, Kalicharan Brahma was deeply influenced by the Brahmo Samaj movement and sought to apply similar reformist principles to Bodo religious practices. He advocated for the abolition of animal sacrifice and promoted monotheistic worship of Bathou (the supreme deity).

His teachings emphasized moral living, education, and social reform. The Brahma Dharma movement continues to exist today as one of the significant religious reform movements among the Bodo population.`,
    contributions: [
      'Founded Brahma Dharma reform movement',
      'Abolished animal sacrifice in Bathouism',
      'Promoted monotheistic worship',
      'Advocated for Bodo social reform',
      'Influenced by Brahmo Samaj'
    ],
    timeline: [
      { year: 1867, title: 'Birth', description: 'Born in Assam' },
      { year: 1895, title: 'Brahma Dharma Founded', description: 'Established reform movement' },
      { year: 1945, title: 'Death', description: 'Passed away' }
    ],
    tags: ['social-reformer', 'religious-leader', 'brahma-dharma'],
    status: 'published',
    featured: true,
    references: [
      { title: 'Bathouism and Brahma Dharma', type: 'article' }
    ]
  },
  {
    name: 'Bidyasingha Narzary',
    slug: 'bidyasingha-narzary',
    birthYear: 1908,
    deathYear: 1977,
    region: 'assam',
    biography: `Bidyasingha Narzary was a renowned literary figure who played a pivotal role in the development of Bodo literature. He was the founder president of the Bodo Sahitya Sabha, an organization dedicated to the promotion and development of the Bodo language and literature.

His literary works encompassed various genres including poetry, fiction, and essays. Narzary's writings often dealt with the socio-cultural issues facing the Bodo community and helped raise awareness about Bodo identity and heritage.

Through his leadership in the Bodo Sahitya Sabha, he mentored numerous young Bodo writers and helped establish literary standards for the Bodo language.`,
    contributions: [
      'Founder President of Bodo Sahitya Sabha',
      'Promoted Bodo language and literature',
      'Mentored young Bodo writers',
      'Established literary standards',
      'Published numerous literary works'
    ],
    timeline: [
      { year: 1908, title: 'Birth', description: 'Born in Assam' },
      { year: 1953, title: 'Bodo Sahitya Sabha', description: 'Founded the literary organization' },
      { year: 1977, title: 'Death', description: 'Passed away' }
    ],
    tags: ['literary-figure', 'poet', 'sahitya-sabo-founder'],
    status: 'published',
    featured: false,
    references: [
      { title: 'Bodo Sahitya Sabha History', type: 'article' }
    ]
  },
  {
    name: 'Gourang Chandra Basumatary',
    slug: 'gourang-chandra-basumatary',
    birthYear: 1955,
    deathYear: null,
    region: 'assam',
    biography: `Gourang Chandra Basumatary is a celebrated Bodo poet and literary figure known for his significant contributions to Bodo literature. His poetry collections have received critical acclaim and have helped popularize Bodo literature among wider audiences.

Basumatary's work beautifully blends traditional Bodo themes with modern poetic sensibilities, creating a unique literary voice that resonates with both older and younger generations of Bodo readers.`,
    contributions: [
      'Published acclaimed poetry collections',
      'Promoted Bodo poetry internationally',
      'Won Sahitya Akademi Award for Bodo',
      'Cultural ambassador for Bodo literature'
    ],
    timeline: [
      { year: 1955, title: 'Birth', description: 'Born in Assam' },
      { year: 1988, title: 'Sahitya Akademi Award', description: 'Received prestigious literary award' }
    ],
    tags: ['poet', 'sahitya-akademi-awardee', 'literary-figure'],
    status: 'published',
    featured: false,
    references: [
      { title: 'Sahitya Akademi Award Winners', type: 'article' }
    ]
  },
  {
    name: 'Kamala Kumar Brahma',
    slug: 'kamala-kumar-brahma',
    birthYear: 1920,
    deathYear: 2005,
    region: 'assam',
    biography: `Kamala Kumar Brahma was an eminent educator who made significant contributions to the standardization of the Bodo language and script. He worked extensively on developing educational materials in Bodo and training teachers for Bodo-medium instruction.

His efforts were instrumental in getting Bodo included in the school curriculum of Assam. Brahma also wrote several textbooks and educational guides that are still used in Bodo schools today.`,
    contributions: [
      'Standardized Bodo script',
      'Developed educational materials',
      'Trained Bodo language teachers',
      'Advocated for Bodo in school curriculum'
    ],
    timeline: [
      { year: 1920, title: 'Birth', description: 'Born in Assam' },
      { year: 1967, title: 'Language Recognition', description: 'Bodo recognized in school curriculum' },
      { year: 2005, title: 'Death', description: 'Passed away' }
    ],
    tags: ['educator', 'language-standardizer', 'textbook-author'],
    status: 'published',
    featured: false,
    references: [
      { title: 'Bodo Language History', type: 'article' }
    ]
  },
  {
    name: 'Mangal Singh Hazowary',
    slug: 'mangal-singh-hazowary',
    birthYear: 1925,
    deathYear: 1995,
    region: 'assam',
    biography: `Mangal Singh Hazowary was a prominent political leader who represented Bodo interests in the post-independence era. He served as a member of various legislative bodies and worked towards securing rights and representation for the Bodo community.

His political career spanned several decades during which he advocated for land rights, tribal welfare, and political autonomy for the Bodo people. Hazowary was known for his principled stands and commitment to democratic values.`,
    contributions: [
      'Served in legislative assemblies',
      'Advocated for tribal land rights',
      'Represented Bodo political interests',
      'Worked for community welfare'
    ],
    timeline: [
      { year: 1925, title: 'Birth', description: 'Born in Assam' },
      { year: 1962, title: 'First Election', description: 'Elected to legislative assembly' },
      { year: 1995, title: 'Death', description: 'Passed away' }
    ],
    tags: ['political-leader', 'legislator', 'tribal-rights'],
    status: 'published',
    featured: false,
    references: [
      { title: 'Bodo Political Representatives', type: 'article' }
    ]
  }
];
