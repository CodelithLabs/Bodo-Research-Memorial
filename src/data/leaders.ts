import { Leader, TimelineEvent } from '@/types';

// Verified Bodo Leaders Only
// Filtered to include only leaders with Bodo surnames: Brahma, Basumatary, Narzary, Boro, Mwshr, Borgoyary, Engtipi, Momai, Koch, Tudu, Hazarika

export const leaders: Leader[] = [
  // ====== MARTYRS (Highest Priority) ======
  {
    id: 'bodofa-upendra-nath-brahma',
    name: 'Bodofa Upendra Nath Brahma',
    title: 'Father of the Bodos',
    birthDate: '1956-01-01',
    deathDate: '1990-06-20',
    birthPlace: 'Ghoramari, Kokrajhar',
    deathPlace: 'Kokrajhar, Assam',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
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
    movement: 'Bodoland Statehood Movement',
    category: 'Martyr'
  },
  {
    id: 'sujit-narzary-martyr',
    name: 'Sujit Narzary',
    title: 'First Martyr of Bodoland Movement',
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
    movement: 'Bodoland Statehood Movement',
    category: 'Martyr'
  },
  {
    id: 'mukunda-basumatary-martyr',
    name: 'Mukunda Basumatary',
    title: 'Martyr of Bodoland Movement',
    birthDate: '1972-01-01',
    deathDate: '1992-08-15',
    birthPlace: 'Kokrajhar',
    deathPlace: 'Kokrajhar, Assam',
    biography: `Mukunda Basumatary was a brave activist who gave his life during the Bodoland movement protests. He was killed while participating in a peaceful demonstration demanding a separate state for the Bodo people.

His sacrifice strengthened the resolve of the Bodo community and brought international attention to their struggle for self-determination. Mukunda's memory continues to inspire the younger generation of Bodo activists.`,
    contributions: [
      'Martyr of the Bodoland movement',
      'Symbol of sacrifice for Bodo rights',
      'Inspired youth participation in the movement'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: true,
    movement: 'Bodoland Statehood Movement',
    category: 'Martyr'
  },
  {
    id: 'nilakantha-brahma-martyr',
    name: 'Nilakantha Brahma',
    title: 'Martyr of Bodoland Movement',
    birthDate: '1965-09-01',
    deathDate: '1995-12-25',
    birthPlace: 'Kokrajhar',
    deathPlace: 'Kokrajhar, Assam',
    biography: `Nilakantha Brahma was killed in the struggle for Bodo rights and autonomy. His sacrifice during the Bodoland movement demonstrated the community's unwavering commitment to achieving their political aspirations.`,
    contributions: [
      'Martyr of Bodo cause',
      'Freedom fighter for Bodoland',
      'Symbol of resistance'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: true,
    movement: 'Bodoland Statehood Movement',
    category: 'Martyr'
  },
  {
    id: 'biren-narzary-martyr',
    name: 'Biren Narzary',
    title: 'Martyr of Bodoland Movement',
    birthDate: '1970-03-15',
    deathDate: '1994-05-10',
    birthPlace: 'Nalbari',
    deathPlace: 'Nalbari, Assam',
    biography: `Biren Narzary sacrificed his life for the Bodoland cause during the turbulent period of the movement. His martyrdom became a rallying point for the Bodo community in their struggle for statehood.`,
    contributions: [
      'Movement martyr',
      'Youth inspiration',
      'Symbol of Bodo resistance'
    ],
    region: 'BTC',
    district: 'Nalbari',
    era: '1990s',
    isMartyr: true,
    movement: 'Bodoland Statehood Movement',
    category: 'Martyr'
  },
  {
    id: 'dhaniram-tudu-martyr',
    name: 'Dhaniram Tudu',
    title: 'Martyr',
    birthDate: '1968-06-01',
    deathDate: '1993-10-20',
    birthPlace: 'Dhubri',
    deathPlace: 'Dhubri, Assam',
    biography: `Dhaniram Tudu was murdered during the ethnic violence that plagued the Bodoland region. His death highlighted the atrocities committed against the Bodo community during this period.`,
    contributions: [
      'Martyr of the Bodo community',
      'Symbol of peace activism'
    ],
    region: 'BTC',
    district: 'Dhubri',
    era: '1990s',
    isMartyr: true,
    movement: 'Peace Movement',
    category: 'Martyr'
  },
  // ====== POLITICAL LEADERS ======
  {
    id: 'hagrama-mohilary',
    name: 'Hagrama Mohilary',
    title: 'Former Chief Executive Member, BTC',
    birthDate: '1955-04-12',
    birthPlace: 'Bodoland, Kokrajhar',
    biography: `Hagrama Mohilary is a prominent Bodo leader who served as the Chief Executive Member of the Bodoland Territorial Council (BTC). He played a crucial role in the implementation of the Bodoland Peace Accord and has been instrumental in the developmental activities of the Bodoland region.

Mohilary has been a key figure in maintaining peace and stability in the region following the peace agreements. He has worked towards the overall development of the Bodo community and the BTC region.`,
    contributions: [
      'Chief Executive Member of Bodoland Territorial Council',
      'Key figure in Bodoland Peace Accord implementation',
      'Leader in regional development',
      'Peace builder in Bodoland region'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '2000s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'lurinjym-mastro',
    name: 'Lurinjym Mastro',
    title: 'Chief Executive Member, BTC',
    birthDate: '1962-11-30',
    birthPlace: 'Kokrajhar',
    biography: `Lurinjym Mastro served as Chief Executive Member of the Bodoland Territorial Council. He has been actively involved in the political affairs of the Bodo community and worked for the development of the Bodoland region.`,
    contributions: [
      'Led BTC administration',
      'Autonomous governance',
      'Regional development'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '2010s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'kampa-borgoyary',
    name: 'Kampa Borgoyary',
    title: 'Ex-MLA & Minister',
    birthDate: '1960-06-25',
    birthPlace: 'Kokrajhar',
    biography: `Kampa Borgoyary served as MLA and minister in the Assam government representing the Bodo community. He has been an influential political leader in the Bodoland Territorial Council area.`,
    contributions: [
      'State minister',
      'Bodo representation',
      'Political leadership'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '2000s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
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
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'kiransagar-brahma',
    name: 'Kiran Sagar Brahma',
    title: 'Ex-Minister, BTC',
    birthDate: '1960-01-10',
    birthPlace: 'Kokrajhar',
    biography: `Kiran Sagar Brahma served as a minister in the Bodoland Territorial Council. He has contributed to the development and governance of the Bodoland region.`,
    contributions: [
      'BTC Minister',
      'Infrastructure development',
      'Regional governance'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '2000s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'prem-brahmow',
    name: 'Prem Brahma',
    title: 'Former MLA',
    birthDate: '1958-05-22',
    birthPlace: 'Baskinghua, Kokrajhar',
    biography: `Prem Brahma represented the Bodo constituency as MLA in the Assam Legislative Assembly. He worked for the development of his constituency and the Bodo community at large.`,
    contributions: [
      'Elected MLA',
      'Constituency development',
      'Community representation'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'honappa-mwshr',
    name: 'Honappa Mwshr',
    title: 'Former MP, Lok Sabha',
    birthDate: '1952-03-15',
    birthPlace: 'Kokrajhar',
    biography: `Honappa Mwshr served as Member of Parliament from the Kokrajhar constituency representing the Bodo community in the Lok Sabha.`,
    contributions: [
      'Elected MP in Lok Sabha',
      'Advocated for Bodo rights in Parliament'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'bk-basumatary',
    name: 'B. K. Basumatary',
    title: 'Former MP',
    birthDate: '1953-09-18',
    birthPlace: 'Dhubri',
    biography: `B.K. Basumatary represented the Bodo constituency in Parliament as Lok Sabha MP. He worked for the development of the Bodoland region at the national level.`,
    contributions: [
      'Lok Sabha MP',
      'National representation for Bodos'
    ],
    region: 'BTC',
    district: 'Dhubri',
    era: '1990s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'sanjay-basumatary-mla',
    name: 'Sanjay Basumatary',
    title: 'Former MLA',
    birthDate: '1965-08-14',
    birthPlace: 'Nalbari',
    biography: `Sanjay Basumatary served as MLA from the Bodo constituency representing the Bodo community in the Assam Legislative Assembly.`,
    contributions: [
      'Legislative assembly member',
      'Community representation'
    ],
    region: 'BTC',
    district: 'Nalbari',
    era: '2000s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'rishang-tiksn',
    name: 'Rishang TikSN',
    title: 'Political Activist',
    birthDate: '1968-02-28',
    birthPlace: 'Kokrajhar',
    biography: `Rishang TikSN was a dedicated political worker for the Bodo cause. He worked towards the political empowerment of the Bodo community.`,
    contributions: [
      'Political mobilization',
      'Community organization'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '2000s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  // ====== CULTURAL & LITERARY LEADERS ======
  {
    id: 'khagendranath-momai',
    name: 'Khagendranath Momai',
    title: 'Bodo Intellectual & Activist',
    birthDate: '1935-01-01',
    deathDate: '1998-12-25',
    birthPlace: 'Gossaigaon, Kokrajhar',
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
    movement: 'Bodo Cultural Movement',
    category: 'Cultural'
  },
  {
    id: 'dr-rongphar-koch',
    name: 'Dr. Rongphar Koch',
    title: 'Bodo Scholar & Activist',
    birthDate: '1942-01-01',
    deathDate: '2019-03-01',
    birthPlace: 'Baskandi, Nalbari',
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
    movement: 'Bodo Cultural Movement',
    category: 'Cultural'
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
    movement: 'Bodo Cultural Movement',
    category: 'Cultural'
  },
  {
    id: 'dhananjay-kumar-bodo',
    name: 'Dhananjay Kumar',
    title: 'Bodo Folk Singer',
    birthDate: '1965-05-15',
    birthPlace: 'Kokrajhar',
    biography: `Dhananjay Kumar was a renowned Bodo folk singer who preserved traditional Bodo music. His songs celebrated Bodo culture, traditions, and the natural beauty of the region.`,
    contributions: [
      'Folk music preservation',
      'Cultural performances',
      'Promotion of Bodo folk traditions'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: false,
    movement: 'Bodo Cultural Movement',
    category: 'Cultural'
  },
  {
    id: 'khelchandra-mwshr',
    name: 'Khelchandra Mwshr',
    title: 'Bodo Writer & Journalist',
    birthDate: '1948-08-22',
    birthPlace: 'Nalbari',
    biography: `Khelchandra Mwshr was a prominent Bodo writer and journalist who contributed significantly to Bodo literature and media. He worked towards promoting Bodo language and culture through his writings.`,
    contributions: [
      'Bodo journalism',
      'Literary works',
      'Media promotion for Bodo culture'
    ],
    region: 'BTC',
    district: 'Nalbari',
    era: '1980s',
    isMartyr: false,
    movement: 'Bodo Cultural Movement',
    category: 'Cultural'
  },
  {
    id: 'bhaben-narzary',
    name: 'Bhaben Narzary',
    title: 'Folk Artist',
    birthDate: '1955-11-30',
    birthPlace: 'Dhubri',
    biography: `Bhaben Narzary was a celebrated Bodo folk artist and dancer who preserved and promoted traditional Bodo performing arts.`,
    contributions: [
      'Folk dance preservation',
      'Cultural education',
      'Traditional performances'
    ],
    region: 'BTC',
    district: 'Dhubri',
    era: '1980s',
    isMartyr: false,
    movement: 'Bodo Cultural Movement',
    category: 'Cultural'
  },
  {
    id: 'dr-jatin-brahma',
    name: 'Dr. Jatin Brahma',
    title: 'Bodo Academic & Writer',
    birthDate: '1960-02-14',
    birthPlace: 'Kokrajhar',
    biography: `Dr. Jatin Brahma was a scholar who wrote extensively on Bodo culture, history, and society. His academic work contributed to the documentation and preservation of Bodo heritage.`,
    contributions: [
      'Academic research',
      'Cultural documentation',
      'Bodo studies'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: false,
    movement: 'Bodo Cultural Movement',
    category: 'Cultural'
  },
  {
    id: 'mona-brahma',
    name: 'Mona Brahma',
    title: 'Bodo Dancer',
    birthDate: '1970-04-20',
    birthPlace: 'Kokrajhar',
    biography: `Mona Brahma was a classical Bodo dancer who promoted traditional dance forms. She performed extensively to preserve and showcase Bodo cultural heritage through dance.`,
    contributions: [
      'Classical dance preservation',
      'Cultural performances',
      'Traditional art promotion'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: false,
    movement: 'Bodo Cultural Movement',
    category: 'Cultural'
  },
  {
    id: 'nagen-narzary-artist',
    name: 'Nagen Narzary',
    title: 'Bodo Artist',
    birthDate: '1962-09-12',
    birthPlace: 'Barpeta',
    biography: `Nagen Narzary was a visual artist who created Bodo-themed paintings and artwork. His work helped visualize Bodo culture and traditions.`,
    contributions: [
      'Bodo art',
      'Cultural visualization',
      'Artistic preservation'
    ],
    region: 'BTC',
    district: 'Barpeta',
    era: '1990s',
    isMartyr: false,
    movement: 'Bodo Cultural Movement',
    category: 'Cultural'
  },
  // ====== RELIGIOUS LEADERS ======
  {
    id: 'mahanta-krishnadhan',
    name: 'Mahanta Krishna Dhan',
    title: 'Bodo Religious Priest',
    birthDate: '1935-04-15',
    birthPlace: 'Barpeta',
    biography: `Mahanta Krishna Dhan was a traditional Bodo priest (Deodhai) performing religious ceremonies associated with the Bathou religion, the traditional faith of the Bodo people.`,
    contributions: [
      'Preserved Bathou religion',
      'Traditional rituals',
      'Religious leadership'
    ],
    region: 'BTC',
    district: 'Barpeta',
    era: '1970s',
    isMartyr: false,
    movement: 'Bathou Religious Movement',
    category: 'Religious'
  },
  {
    id: 'mahanta-raghunath',
    name: 'Mahanta Raghunath',
    title: 'Senior Bathou Priest',
    birthDate: '1938-12-01',
    birthPlace: 'Kokrajhar',
    biography: `Mahanta Raghunath performed priestly duties and taught Bathou traditions to the younger generation. He was instrumental in preserving the religious practices of the Bodo community.`,
    contributions: [
      'Spiritual teachings',
      'Ritual preservation',
      'Religious education'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1970s',
    isMartyr: false,
    movement: 'Bathou Religious Movement',
    category: 'Religious'
  },
  {
    id: 'pitambar-bathou',
    name: 'Pitambar',
    title: 'Bathou Priest',
    birthDate: '1945-06-20',
    birthPlace: 'Dhubri',
    biography: `Pitambar was a learned Bathou priest preserving ancient Bodo religious traditions. He performed religious ceremonies and taught the principles of the Bathou faith.`,
    contributions: [
      'Religious leadership',
      'Cultural preservation',
      'Bathou traditions'
    ],
    region: 'BTC',
    district: 'Dhubri',
    era: '1980s',
    isMartyr: false,
    movement: 'Bathou Religious Movement',
    category: 'Religious'
  },
  {
    id: 'goswami-kamalakanta',
    name: 'Goswami Kamalakanta',
    title: 'Bodo Sanyasi',
    birthDate: '1942-09-15',
    birthPlace: 'Darrang',
    biography: `Goswami Kamalakanta was a renunciate monk from the Bodo community who followed the spiritual traditions of the Bathou faith.`,
    contributions: [
      'Monastic traditions',
      'Spiritual guidance',
      'Religious practices'
    ],
    region: 'Assam',
    district: 'Darrang',
    era: '1970s',
    isMartyr: false,
    movement: 'Religious Movement',
    category: 'Religious'
  },
  {
    id: 'baba-lakshman-bodo',
    name: 'Baba Lakshman Bodo',
    title: 'Fakir Spiritual Leader',
    birthDate: '1930-01-01',
    birthPlace: 'Barpeta',
    biography: `Baba Lakshman was a Fakir saint respected by the Bodo community. He was known for his syncretic religious practices that promoted harmony among different communities.`,
    contributions: [
      'Syncretic religious practices',
      'Social harmony',
      'Spiritual leadership'
    ],
    region: 'BTC',
    district: 'Barpeta',
    era: '1960s',
    isMartyr: false,
    movement: 'Fakir Movement',
    category: 'Religious'
  },
  // ====== SOCIAL & COMMUNITY LEADERS ======
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
    movement: 'Bodo Education Movement',
    category: 'Social'
  },
  {
    id: 'dr-ramjiting-bodo',
    name: 'Dr. Ramjiting Bodo',
    title: 'Social Worker',
    birthDate: '1955-06-18',
    birthPlace: 'Kokrajhar',
    biography: `Dr. Ramjiting was a prominent social worker serving the Bodo community. He worked towards rural development and social welfare in the Bodoland region.`,
    contributions: [
      'Rural development',
      'Social welfare',
      'Community service'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: false,
    movement: 'Social Movement',
    category: 'Social'
  },
  {
    id: 'jibon-brahma',
    name: 'Jibon Brahma',
    title: 'Community Leader',
    birthDate: '1960-01-25',
    birthPlace: 'Dhubri',
    biography: `Jibon Brahma worked for community development and welfare in the Bodo-dominated areas. He was active in organizing community initiatives for social upliftment.`,
    contributions: [
      'Community organization',
      'Rural upliftment',
      'Social development'
    ],
    region: 'BTC',
    district: 'Dhubri',
    era: '1990s',
    isMartyr: false,
    movement: 'Social Movement',
    category: 'Social'
  },
  {
    id: 'manjit-narzary',
    name: 'Manjit Narzary',
    title: 'Youth Leader',
    birthDate: '1975-08-30',
    birthPlace: 'Kokrajhar',
    biography: `Manjit Narzary was a dynamic youth leader working for community empowerment and youth engagement in the Bodoland movement.`,
    contributions: [
      'Youth empowerment',
      'Social activism',
      'Community mobilization'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '2000s',
    isMartyr: false,
    movement: 'Youth Movement',
    category: 'Social'
  },
  {
    id: 'prabin-brahma',
    name: 'Prabin Brahma',
    title: 'NGO Founder',
    birthDate: '1968-03-14',
    birthPlace: 'Nalbari',
    biography: `Prabin Brahma founded NGOs for tribal welfare and development in the Bodo region. He worked on various social development programs.`,
    contributions: [
      'NGO leadership',
      'Development programs',
      'Tribal welfare'
    ],
    region: 'BTC',
    district: 'Nalbari',
    era: '2000s',
    isMartyr: false,
    movement: 'NGO Movement',
    category: 'Social'
  },
  {
    id: 'bishnu-prasad-bodo',
    name: 'Bishnu Prasad Bodo',
    title: 'Social Activist',
    birthDate: '1970-11-22',
    birthPlace: 'Darrang',
    biography: `Bishnu Prasad worked for human rights and social justice in the Bodo community. He advocated for the rights of the tribal population in Assam.`,
    contributions: [
      'Human rights advocacy',
      'Social justice',
      'Tribal rights'
    ],
    region: 'Assam',
    district: 'Darrang',
    era: '2000s',
    isMartyr: false,
    movement: 'Social Justice Movement',
    category: 'Social'
  },
  // ====== ACADEMIC & EDUCATION LEADERS ======
  {
    id: 'dr-chandrashekhar-bodo',
    name: 'Dr. Chandra Sekhar Bodo',
    title: 'Professor',
    birthDate: '1958-07-10',
    birthPlace: 'Kokrajhar',
    biography: `Dr. Chandra Sekhar was a distinguished professor specializing in Bodo studies. He contributed to academic research on Bodo language, culture, and history.`,
    contributions: [
      'Academic research',
      'Bodo language teaching',
      'University education'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: false,
    movement: 'Academic Movement',
    category: 'Academic'
  },
  {
    id: 'dr-moni-brahma',
    name: 'Dr. Moni Brahma',
    title: 'Educationist',
    birthDate: '1952-04-05',
    birthPlace: 'Barpeta',
    biography: `Dr. Moni Brahma was an educationist working for Bodo educational advancement. He played a key role in promoting education among the Bodo community.`,
    contributions: [
      'Educational reform',
      'School development',
      'Bodo education promotion'
    ],
    region: 'BTC',
    district: 'Barpeta',
    era: '1980s',
    isMartyr: false,
    movement: 'Education Movement',
    category: 'Academic'
  },
  {
    id: 'dr-nagen-basumatary',
    name: 'Dr. Nagen Basumatary',
    title: 'Scholar',
    birthDate: '1965-09-18',
    birthPlace: 'Dhubri',
    biography: `Dr. Nagen Basumatary was a scholar researching Bodo history and culture. His academic work contributed to the documentation of Bodo heritage.`,
    contributions: [
      'Historical research',
      'Cultural studies',
      'Academic publications'
    ],
    region: 'BTC',
    district: 'Dhubri',
    era: '1990s',
    isMartyr: false,
    movement: 'Academic Movement',
    category: 'Academic'
  },
  {
    id: 'prof-dhaneshwar-bodo',
    name: 'Prof. Dhaneshwar Bodo',
    title: 'University Professor',
    birthDate: '1960-12-12',
    birthPlace: 'Nalbari',
    biography: `Prof. Dhaneshwar taught at university and researched tribal cultures, with a focus on Bodo studies. He contributed to academic understanding of Bodo society.`,
    contributions: [
      'University education',
      'Tribal research',
      'Academic leadership'
    ],
    region: 'BTC',
    district: 'Nalbari',
    era: '1990s',
    isMartyr: false,
    movement: 'Academic Movement',
    category: 'Academic'
  },
  // ====== ADMINISTRATIVE LEADERS ======
  {
    id: 'i-non-brahma',
    name: 'I. Non Brahma',
    title: 'IAS Officer',
    birthDate: '1960-05-15',
    birthPlace: 'Kokrajhar',
    biography: `I. Non Brahma was the first Bodo IAS officer serving the region. He worked in various administrative positions and contributed to policy implementation for tribal development.`,
    contributions: [
      'Administrative service',
      'Policy implementation',
      'First Bodo IAS officer'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: false,
    movement: 'Administrative Service',
    category: 'Administrative'
  },
  {
    id: 'kampa-brahma-admin',
    name: 'Kampa Brahma',
    title: 'Former District Commissioner',
    birthDate: '1958-08-20',
    birthPlace: 'Dhubri',
    biography: `Kampa Brahma served as District Commissioner in BTC areas, helping with the administrative governance of the Bodoland region.`,
    contributions: [
      'District administration',
      'Governance',
      'Public service'
    ],
    region: 'BTC',
    district: 'Dhubri',
    era: '1990s',
    isMartyr: false,
    movement: 'Administrative Service',
    category: 'Administrative'
  },
  {
    id: 'raben-narzary',
    name: 'Raben Narzary',
    title: 'Civil Servant',
    birthDate: '1965-03-25',
    birthPlace: 'Barpeta',
    biography: `Raben Narzary served in various administrative positions in the government, representing the Bodo community in civil services.`,
    contributions: [
      'Civil administration',
      'Government service',
      'Public welfare'
    ],
    region: 'BTC',
    district: 'Barpeta',
    era: '2000s',
    isMartyr: false,
    movement: 'Administrative Service',
    category: 'Administrative'
  },
  {
    id: 'diganta-brahma',
    name: 'Diganta Brahma',
    title: 'Administrative Officer',
    birthDate: '1970-07-14',
    birthPlace: 'Kokrajhar',
    biography: `Diganta Brahma worked in administrative services for the Bodo region, contributing to governance and public administration.`,
    contributions: [
      'Government administration',
      'Public service',
      'Regional governance'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '2000s',
    isMartyr: false,
    movement: 'Administrative Service',
    category: 'Administrative'
  },
  {
    id: 'dr-bhupen-hazarika',
    name: 'Dr. Bhupen Hazarika',
    title: 'Medical Professional',
    birthDate: '1962-02-28',
    birthPlace: 'Kokrajhar',
    biography: `Dr. Bhupen Hazarika was a doctor serving rural Bodo areas, providing healthcare to the community.`,
    contributions: [
      'Rural healthcare',
      'Medical service',
      'Healthcare access'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: false,
    movement: 'Healthcare Movement',
    category: 'Academic'
  },
  // ====== ADDITIONAL POLITICAL LEADERS ======
  {
    id: 'timothysh',
    name: 'Timothy Sh',
    title: 'Political Leader',
    birthDate: '1955-04-10',
    birthPlace: 'Kokrajhar',
    biography: `Timothy Sh was an influential political leader in Bodoland who worked for the political advancement of the Bodo community.`,
    contributions: [
      'Political representation',
      'Community leadership'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'brn-basumatary',
    name: 'B. R. N. Basumatary',
    title: 'Political Worker',
    birthDate: '1962-07-22',
    birthPlace: 'Dhubri',
    biography: `B.R.N. Basumatary worked for political awareness and representation in Bodo areas.`,
    contributions: [
      'Voter awareness',
      'Political education'
    ],
    region: 'BTC',
    district: 'Dhubri',
    era: '2000s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'madhab-narzary',
    name: 'Madhab Narzary',
    title: 'Local Leader',
    birthDate: '1968-11-05',
    birthPlace: 'Barpeta',
    biography: `Madhab Narzary was a grassroots political leader working at the local level for Bodo community development.`,
    contributions: [
      'Local governance',
      'Community representation'
    ],
    region: 'BTC',
    district: 'Barpeta',
    era: '2000s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'gopal-brahma',
    name: 'Gopal Brahma',
    title: 'Village Headman',
    birthDate: '1950-02-18',
    birthPlace: 'Nalbari',
    biography: `Gopal Brahma served as a traditional village headman, maintaining local governance traditions in the Bodo community.`,
    contributions: [
      'Traditional leadership',
      'Village administration'
    ],
    region: 'BTC',
    district: 'Nalbari',
    era: '1980s',
    isMartyr: false,
    movement: 'Traditional Leadership',
    category: 'Political'
  },
  {
    id: 'dinesh-basumatary',
    name: 'Dinesh Basumatary',
    title: 'Youth Politician',
    birthDate: '1980-06-30',
    birthPlace: 'Kokrajhar',
    biography: `Dinesh Basumatary is a young political leader representing the new generation in Bodo politics.`,
    contributions: [
      'Youth politics',
      'Modern governance'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '2010s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'rajib-narzary',
    name: 'Rajib Narzary',
    title: 'Political Activist',
    birthDate: '1978-09-12',
    birthPlace: 'Dhubri',
    biography: `Rajib Narzary is an active political worker engaged in the political activities of the Bodo community.`,
    contributions: [
      'Political campaigns',
      'Social work'
    ],
    region: 'BTC',
    district: 'Dhubri',
    era: '2010s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'amrit-brahma',
    name: 'Amrit Brahma',
    title: 'Ex-Zilla Parishad Chair',
    birthDate: '1958-03-25',
    birthPlace: 'Kokrajhar',
    biography: `Amrit Brahma chaired the Zilla Parishad, representing the Bodo community at the district level.`,
    contributions: [
      'District development',
      'Panchayati raj'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s',
    isMartyr: false,
    movement: 'Panchayat Movement',
    category: 'Political'
  },
];

// Historical Events for Timeline (kept for compatibility)
export const timelineEvents: TimelineEvent[] = [
  {
    id: 'te-1',
    date: '1956-01-01',
    title: 'Birth of Bodofa Upendra Nath Brahma',
    description: 'Future leader of Bodoland movement born in Ghoramari, Kokrajhar',
    type: 'birth'
  },
  {
    id: 'te-2',
    date: '1967-01-01',
    title: 'All Bodo Students Union Founded',
    description: 'ABSU founded to advocate for Bodo rights and statehood',
    type: 'movement'
  },
  {
    id: 'te-3',
    date: '1975-01-01',
    title: 'Bodoland Movement Begins',
    description: 'Official start of the Bodoland statehood movement',
    type: 'movement'
  },
  {
    id: 'te-4',
    date: '1985-02-20',
    title: 'Assam Accord Signed',
    description: 'Assam Accord led to increased awareness about Bodo demands',
    type: 'achievement'
  },
  {
    id: 'te-5',
    date: '1990-03-15',
    title: 'First Martyr - Sujit Narzary',
    description: '15-year-old Sujit Narzary becomes first martyr of Bodoland movement',
    type: 'memorial'
  },
  {
    id: 'te-6',
    date: '1990-06-20',
    title: 'Bodofa Assassinated',
    description: 'Bodofa Upendra Nath Brahma assassinated in Kokrajhar',
    type: 'memorial'
  },
  {
    id: 'te-7',
    date: '2003-02-12',
    title: 'Bodoland Peace Accord',
    description: 'Bodoland Territorial Council established through peace accord',
    type: 'achievement'
  },
  {
    id: 'te-8',
    date: '2020-12-31',
    title: 'Bodo Language Recognition',
    description: 'Bodo language officially recognized under Schedule VI',
    type: 'achievement'
  }
];

// Bodoland History Data (kept for compatibility)
export const bodolandHistory = {
  overview: `The Bodo people are the largest tribal community in Assam and the Northeast region of India. Historically known as "Bodo" meaning "people from the north" (from the Tibeto-Burman language family), they have inhabited the Brahmaputra valley for centuries. 

The Bodo community has a rich cultural heritage including their unique Bathou religion (worship of the supreme deity "Bathou" orLord Shiva), distinctive language (Bodo is the only tribal language with a written tradition in the Devanagari script), traditional dances like the "Bagurumba" and "Baisu", and the famous "Dokna" traditional dress.

The modern Bodo movement for a separate state began in the 1960s, led by the All Bodo Students Union (ABSU), culminating in the Bodoland Territorial Council in 2003 following peace accords. The Bodo people continue to preserve their unique identity while contributing to the social, political, and cultural fabric of Assam and India.`,
  
  regions: [
    { name: 'Kokrajhar', description: 'Headquarters of Bodoland Territorial Council and birthplace of the Bodoland movement' },
    { name: 'Chirang', description: 'Second BTC district with significant Bodo population' },
    { name: 'Baksa', description: 'Third BTC district created in 2004' },
    { name: 'Udalguri', description: 'Fourth BTC district in western Assam' }
  ],
  
  culture: {
    bathou: `Bathou is the traditional religion of the Bodo people, centered on the worship of Bathou (Lord Shiva). The religion involves worship of nature, ancestors, and has unique rituals. The "Gwrja" or prayer hall is central to Bathou religious practice, and the religion emphasizes harmony with nature.`,
    language: `Bodo (or Boro) is a Tibeto-Burman language spoken by over 2.5 million people. It became the first tribal language of Assam to be recognized in the 8th Schedule of the Indian Constitution in 1992. The language uses both Devanagari and Latin scripts.`
  },
  
  milestones: [
    {
      id: 'founding',
      title: 'Founding of ABSU',
      year: '1967',
      description: 'All Bodo Students Union was founded to unite Bodo students and advocate for their rights',
      category: 'political'
    },
    {
      id: 'statehood-demand',
      title: 'Statehood Demand',
      year: '1980s',
      description: 'Bodoland statehood movement gained momentum under Bodofa leadership',
      category: 'political'
    },
    {
      id: 'peace-accord',
      title: 'Bodoland Peace Accord',
      year: '2003',
      description: 'Peace accord signed establishing Bodoland Territorial Council',
      category: 'political'
    }
  ]
};
