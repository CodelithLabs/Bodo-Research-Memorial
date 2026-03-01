import { Leader, TimelineEvent } from '@/types';

export const leaders: Leader[] = [
  {
    id: 'upendra-nath-brahma',
    name: 'Bodofa Upendra Nath Brahma',
    title: 'Father of the Bodos',
    birthDate: '1956-01-01',
    deathDate: '1990-06-20',
    birthPlace: 'Ghoramari, Kokrajhar',
    deathPlace: 'Kokrajhar, Assam',
    biography: `Bodofa Upendra Nath Brahma was the visionary leader who spearheaded the non-violent Bodoland movement for statehood and tribal rights. Known as the "Father of the Bodos" (Bodofa), he dedicated his life to achieving a separate state for the Bodo people while advocating peaceful resistance.

Born in Ghoramari village, Kokrajhar district, Brahma became a teacher but soon devoted himself entirely to the cause of Bodo nationalism. He founded the All Bodo Students Union (ABSU) in 1967 and later the Bodo People's Front (BPF).

His philosophy centered on the slogan "Live and Let Live" (Jiwon Aru Jibon), promoting communal harmony and peaceful coexistence among all communities in Assam. Under his leadership, the movement for a separate Bodoland state gained significant momentum through non-violent protests, rallies, and constitutional means.

Tragically, on June 20, 1990, Bodofa Upendra Nath Brahma was assassinated at the age of just 34, allegedly by ULFA militants. His death sent shockwaves through the Bodo community and solidified his legacy as a martyr who sacrificed his life for the Bodoland cause.`,
    contributions: [
      'Founded All Bodo Students Union (ABSU)',
      'Founded Bodo Peoples Front (BPF)',
      'Led non-violent Bodoland statehood movement',
      'Promoted "Live and Let Live" philosophy',
      'Advocated for tribal rights and cultural preservation'
    ],
    slogans: ['Live and Let Live', 'Jiwon Aru Jibon'],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1980s',
    isMartyr: true,
    movement: 'Bodoland Statehood Movement'
  },
  {
    id: 'sujit-narzary',
    name: 'Sujit Narzary',
    title: 'First Martyr of Bodoland Statehood Movement',
    birthDate: '1975-01-01',
    deathDate: '1990-03-15',
    birthPlace: 'Boko, Kamrup',
    deathPlace: 'Kokrajhar, Assam',
    biography: `Sujit Narzary was just 15 years old when he became recognized as the first martyr of the Bodoland statehood movement. A young student and activist, he demonstrated extraordinary courage in the fight for Bodo rights.

Despite his young age, Sujit actively participated in the Bodoland movement led by Bodofa Upendra Nath Brahma. On March 15, 1990, during a protest demonstration, Sujit was shot dead by security forces in Kokrajhar.

At just 15 years old, Sujit Narzary's sacrifice became a powerful symbol of the movement's validity and the determination of the Bodo people, including the youth, to achieve their rights. His martyrdom galvanized the community and strengthened their resolve to continue the struggle for a separate Bodoland state.`,
    contributions: [
      'First martyr of the Bodoland statehood movement',
      'Symbol of youth participation in the movement',
      'Inspired continued resistance despite violence'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: true,
    movement: 'Bodoland Statehood Movement'
  },
  {
    id: 'basumati-roy',
    name: 'Basumati Roy',
    title: 'Martyred Activist',
    birthDate: '1960-01-01',
    deathDate: '1993-11-02',
    birthPlace: 'Nalbari',
    deathPlace: 'Kokrajhar, Assam',
    biography: `Basumati Roy was a dedicated activist and supporter of the Bodoland movement. She was married to Rwdwr Basumatary, a prominent leader of the Bodo movement.

On November 2, 1993, Basumati Roy was brutally murdered by suspected ULFA militants in Kokrajhar. Her killing was part of the widespread violence that plagued the Bodoland movement during the 1990s.

Her sacrifice represents the contributions of women in the Bodoland struggle and the heavy toll the movement took on families throughout the region.`,
    contributions: [
      'Supporter of Bodoland movement',
      'Symbol of women\'s participation in the struggle'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: true,
    movement: 'Bodoland Statehood Movement'
  },
  {
    id: 'khagendranath-momai',
    name: 'Khagendranath Momai',
    title: 'Bodo Intellectual & Activist',
    birthDate: '1935-01-01',
    deathDate: '1998-12-25',
    birthPlace: 'Gossaigaon',
    deathPlace: 'Guwahati, Assam',
    biography: `Khagendranath Momai, also known as 'Rongphar Ku. MCS', was a renowned Bodo intellectual, writer, and activist who dedicated his life to the advancement of Bodo language and culture.

A prolific writer, Momai wrote numerous books on Bodo history, culture, and language. He was instrumental in the development and promotion of the Devanagari script for the Bodo language and worked tirelessly for Bodo literary advancement.

He served as the president of the Bodo Sahitya Sabha and was associated with various cultural organizations working for Bodo recognition and development.`,
    contributions: [
      'Pioneer of Bodo literature',
      'Promoted Devanagari script for Bodo language',
      'President of Bodo Sahitya Sabha',
      'Authored numerous books on Bodo culture'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1980s',
    isMartyr: false,
    movement: 'Bodo Cultural Movement'
  },
  {
    id: 'rwngdao-brahma',
    name: 'Rwngdao Brahma',
    title: 'Bodo Leader & Ex-MLA',
    birthDate: '1948-01-01',
    deathDate: '2008-10-14',
    birthPlace: 'Dotma, Kokrajhar',
    deathPlace: 'Guwahati, Assam',
    biography: `Rwngdao Brahma was a prominent Bodo leader and politician who served as an elected representative. He was associated with the Bodo People's Front and worked towards the development of the Bodo community.

He served as an MLA representing the Kokrajhar constituency and was known for his advocacy for tribal rights and development. His political career was dedicated to representing the interests of the Bodo people at the state level.`,
    contributions: [
      'Served as MLA from Kokrajhar',
      'Advocated for tribal rights',
      'Worked for Bodo community development'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: false,
    movement: 'Bodoland Political Movement'
  },
  {
    id: 'dr-rongphar-koch',
    name: 'Dr. Rongphar Koch',
    title: 'Bodo Scholar & Activist',
    birthDate: '1942-01-01',
    deathDate: '2019-03-01',
    birthPlace: 'Baskandi',
    deathPlace: 'Guwahati, Assam',
    biography: `Dr. Rongphar Koch was a distinguished Bodo scholar, writer, and activist who made significant contributions to Bodo literature and culture. He was one of the founding members of the Bodo Sahitya Sabha and worked extensively for the recognition of Bodo language.

A prolific author, he wrote several books on Bodo history, culture, and society. He was awarded the Assam Sahitya Akademi Award for his contributions to Bodo literature.`,
    contributions: [
      'Founding member of Bodo Sahitya Sabha',
      'Awarded Assam Sahitya Akademi Award',
      'Authored books on Bodo culture and history'
    ],
    region: 'BTC',
    district: 'Nalbari',
    era: '1980s',
    isMartyr: false,
    movement: 'Bodo Cultural Movement'
  },
  {
    id: 'ems-namchoudhury',
    name: 'EMS Namchoudhury',
    title: 'Bodo Intellectual',
    birthDate: '1940-01-01',
    deathDate: '2020-05-20',
    birthPlace: 'Barama, Barpeta',
    deathPlace: 'Guwahati, Assam',
    biography: `EMS Namchoudhury was a prominent Bodo intellectual and scholar known for his works on Bodo history and culture. He served as the president of the Bodo Sahitya Sabha and contributed significantly to Bodo literary development.

He authored numerous books and articles on Bodo traditions, customs, and history, helping preserve and document the rich cultural heritage of the Bodo people.`,
    contributions: [
      'President of Bodo Sahitya Sabha',
      'Authored works on Bodo history and culture',
      'Preserved Bodo cultural heritage'
    ],
    region: 'BTC',
    district: 'Barpeta',
    era: '1990s',
    isMartyr: false,
    movement: 'Bodo Cultural Movement'
  },
  {
    id: 'chandra-mohan-brahmow',
    name: 'Chandra Mohan Brahmow',
    title: 'Bodo Educationist & Activist',
    birthDate: '1928-01-01',
    deathDate: '2000-01-01',
    birthPlace: 'Tangla, Darrang',
    deathPlace: 'Tangla, Darrang',
    biography: `Chandra Mohan Brahmow was a pioneering Bodo educationist and social activist who worked for the educational and social advancement of the Bodo people. He was one of the early Bodo leaders who recognized education as a tool for community empowerment.

He established schools and worked towards spreading education among the Bodo community. His efforts laid the foundation for modern Bodo education and social awakening.`,
    contributions: [
      'Pioneer of Bodo education',
      'Established schools in rural areas',
      'Social activist for Bodo advancement'
    ],
    region: 'Assam',
    district: 'Darrang',
    era: '1960s',
    isMartyr: false,
    movement: 'Bodo Education Movement'
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'te-1',
    date: '1956-01-01',
    title: 'Birth of Bodofa Upendra Nath Brahma',
    description: 'Upendra Nath Brahma born in Ghoramari village, Kokrajhar',
    type: 'birth',
    leaderId: 'upendra-nath-brahma'
  },
  {
    id: 'te-2',
    date: '1967-01-01',
    title: 'Formation of ABSU',
    description: 'All Bodo Students Union (ABSU) founded under the leadership of Upendra Nath Brahma',
    type: 'movement'
  },
  {
    id: 'te-3',
    date: '1975-01-01',
    title: 'Birth of Sujit Narzary',
    description: 'Sujit Narzary born in Boko, Kamrup',
    type: 'birth',
    leaderId: 'sujit-narzary'
  },
  {
    id: 'te-4',
    date: '1985-02-20',
    title: 'Assam Accord Signed',
    description: 'Assam Accord signed, marking a turning point in Bodo political movement',
    type: 'movement'
  },
  {
    id: 'te-5',
    date: '1990-03-15',
    title: 'First Martyr: Sujit Narzary',
    description: '15-year-old Sujit Narzary becomes the first martyr of Bodoland movement, shot dead in Kokrajhar',
    type: 'death',
    leaderId: 'sujit-narzary'
  },
  {
    id: 'te-6',
    date: '1990-06-20',
    title: 'Assassination of Bodofa',
    description: 'Bodofa Upendra Nath Brahma assassinated in Kokrajhar at age 34',
    type: 'death',
    leaderId: 'upendra-nath-brahma'
  },
  {
    id: 'te-7',
    date: '1993-11-02',
    title: 'Martyrdom of Basumati Roy',
    description: 'Basumati Roy murdered by suspected ULFA militants in Kokrajhar',
    type: 'death',
    leaderId: 'basumati-roy'
  },
  {
    id: 'te-8',
    date: '2003-02-12',
    title: 'Bodoland Territorial Council',
    description: 'Bodoland Territorial Council (BTC) established with autonomous status',
    type: 'achievement'
  },
  {
    id: 'te-9',
    date: '2020-12-31',
    title: 'Bodo Accord Signed',
    description: 'Bodo Accord signed between Bodo groups and Union Government',
    type: 'achievement'
  }
];

export const bodolandHistory = {
  overview: `Bodoland is the land of the Bodo people, an Indo-Mongoloid tribe residing primarily in the Brahmaputra valley of Assam, India. The Bodos are the largest plain tribe in Assam and have a rich cultural heritage dating back centuries.

The Bodoland movement emerged in the mid-20th century as the Bodo people sought autonomy and recognition for their unique identity, language, and cultural rights. The movement, led by various leaders including Bodofa Upendra Nath Brahma, advocated for a separate state through constitutional and non-violent means.`,
  culture: {
    bathou: `Bathou is the traditional religion of the Bodo people, centered around the worship of the supreme deity "Bathou" (also known as Mahadeo or Shiva). The religion is characterized by the worship of the Siju plant (Echites Corymbosa), which is considered sacred and used in religious ceremonies.`,
    language: `The Bodo language belongs to the Tibeto-Burman family and is spoken by approximately 2.5 million people. It has a rich literary tradition and was recognized as an associate official language of Assam in 1985. The Bodo script has evolved from Devanagari to Latin and back to Devanagari.`
  },
  regions: [
    { name: 'Kokrajhar', description: 'Heartland of Bodo population, first capital of Bodoland' },
    { name: 'Dhubri', description: 'Significant Bodo population and cultural center' },
    { name: 'Barpeta', description: 'Important Bodo cultural and educational hub' },
    { name: 'Nalbari', description: 'Bodo-majority district with historical significance' },
    { name: 'Sonitpur', description: 'Bodo settlements with rich cultural heritage' }
  ]
};
