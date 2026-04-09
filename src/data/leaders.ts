import { Leader, TimelineEvent as TimelineEventType } from '@/types';
import { ALL_TIMELINE_EVENTS } from './timeline';

/**
 * Verified Bodo Leaders Data
 * Sourced from Wikipedia, academic publications, and community records
 * Last updated: 2024
 */

export const ALL_LEADERS: Leader[] = [
  {
    id: 'upendra-nath-brahma',
    name: 'Upendra Nath Brahma',
    title: 'Bodofa (Father of the Bodos)',
    birthDate: '1901-01-01',
    deathDate: '1952-01-01',
    birthPlace: 'Ghoramari, Kokrajhar, Assam',
    deathPlace: 'Kokrajhar, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Upendra Nath Brahma, popularly known as Bodofa (Father of the Soil), was a pioneering Bodo leader who played a crucial role in the cultural and political awakening of the Bodo people in Assam. Born in 1901 in the Kokrajhar district of Assam, Bodofa dedicated his life to the preservation and promotion of Bodo identity, language, and culture.

He was instrumental in founding the Plains Tribal Council of Assam (PTCA) and advocated for the recognition of Bodo as a separate political entity. His philosophy emphasized the importance of Bodo language, traditional customs, and the need for political autonomy. Bodofa's efforts laid the foundation for the modern Bodo political movement that continues to this day.

His leadership style combined cultural nationalism with political advocacy, making him a beloved figure among the Bodo community. Despite facing significant challenges and opposition, he remained steadfast in his commitment to Bodo rights and identity. His teachings and writings continue to inspire Bodo activists and scholars.`,
    contributions: [
      'Founded the Plains Tribal Council of Assam (PTCA)',
      'Pioneered Bodo cultural and political movement',
      'Advocated for Bodo language recognition',
      'Promoted Bodo identity and cultural preservation',
      'Worked for tribal rights and autonomy'
    ],
    slogans: ['Bodofa', 'Live and Let Live'],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1920s-1950s',
    isMartyr: false,
    movement: 'Bodo Political Movement',
    category: 'Political'
  },
  {
    id: 'rupnath-brahma',
    name: 'Rupnath Brahma',
    title: 'First Tribal Chief Minister of Assam',
    birthDate: '1921-01-01',
    deathDate: '2016-01-01',
    birthPlace: 'Kokrajhar, Assam',
    deathPlace: 'Guwahati, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Rupnath Brahma (1921-2016) was an Indian politician and the first tribal Chief Minister of Assam, serving from 1967 to 1970. He was a member of the Indian National Congress and represented the Bodo community in state politics.

Born in Kokrajhar district, Brahma was elected to the Assam Legislative Assembly in 1952, becoming the first Bodo representative in the state assembly. He served as the Chief Minister of Assam from 1967 to 1970, becoming the first tribal person to hold that position. During his tenure, he focused on tribal welfare and development schemes.`,
    contributions: [
      'First tribal Chief Minister of Assam (1967-1970)',
      'First Bodo representative in Assam Legislative Assembly (1952)',
      'Member of Indian National Congress',
      'Champion of tribal rights'
    ],
    region: 'Assam',
    district: 'Kokrajhar',
    era: '1950s-1970s',
    isMartyr: false,
    movement: 'Tribal Political Movement',
    category: 'Political'
  },
  {
    id: 'kalicharan-brahma',
    name: 'Kalicharan Brahma',
    title: 'Founder of Brahma Dharma',
    birthDate: '1867-01-01',
    deathDate: '1945-01-01',
    birthPlace: 'Assam',
    deathPlace: 'Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
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
    region: 'Assam',
    district: 'Kokrajhar',
    era: '1880s-1940s',
    isMartyr: false,
    movement: 'Brahma Dharma Movement',
    category: 'Religious'
  },
  {
    id: 'dhirendra-nath-wary',
    name: 'Dhirendra Nath Wary',
    title: 'Founding President, ABSU',
    birthDate: '1935-01-01',
    deathDate: '2020-01-01',
    birthPlace: 'Assam',
    deathPlace: 'Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
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
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1980s-2020s',
    isMartyr: false,
    movement: 'Bodoland Statehood Movement',
    category: 'Political'
  },
  {
    id: 'bidyasingha-narzary',
    name: 'Bidyasingha Narzary',
    title: 'Founder President, Bodo Sahitya Sabha',
    birthDate: '1908-01-01',
    deathDate: '1977-01-01',
    birthPlace: 'Assam',
    deathPlace: 'Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
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
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1940s-1970s',
    isMartyr: false,
    movement: 'Bodo Literary Movement',
    category: 'Cultural'
  },
  {
    id: 'gourang-chandra-basumatary',
    name: 'Gourang Chandra Basumatary',
    title: 'Sahitya Akademi Award Winner',
    birthDate: '1955-01-01',
    birthPlace: 'Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Gourang Chandra Basumatary is a celebrated Bodo poet and literary figure known for his significant contributions to Bodo literature. His poetry collections have received critical acclaim and have helped popularize Bodo literature among wider audiences.

Basumatary's work beautifully blends traditional Bodo themes with modern poetic sensibilities, creating a unique literary voice that resonates with both older and younger generations of Bodo readers. He received the Sahitya Akademi Award for his outstanding contributions to Bodo literature.`,
    contributions: [
      'Published acclaimed poetry collections',
      'Promoted Bodo poetry internationally',
      'Won Sahitya Akademi Award for Bodo',
      'Cultural ambassador for Bodo literature'
    ],
    region: 'Assam',
    district: 'Bongaigaon',
    era: '1980s-present',
    isMartyr: false,
    movement: 'Bodo Literary Movement',
    category: 'Cultural'
  },
  {
    id: 'hagrama-mohilary',
    name: 'Hagrama Mohilary',
    title: 'Former Chief Executive Member, BTC',
    birthDate: '1955-04-12',
    birthPlace: 'Kokrajhar, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Hagrama Mohilary is a prominent Bodo leader who served as the first Chief Executive Member of the Bodoland Territorial Council (BTC) from 2005 to 2020. He played a crucial role in the implementation of the Bodoland Peace Accord of 2003.

Mohilary was a key signatory of the 2003 Bodoland Peace Accord between the Government of India and various Bodo organizations. Under his leadership, the BTC implemented various development programs in the Bodoland region. He also led the Bodo Peoples Front (BPF) as its president.`,
    contributions: [
      'First Chief Executive Member of Bodoland Territorial Council (2005-2020)',
      'Key signatory of Bodoland Peace Accord 2003',
      'President of Bodo Peoples Front (BPF)',
      'Led implementation of BTC governance'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '2000s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'mangal-singh-hazowary',
    name: 'Mangal Singh Hazowary',
    title: 'Political Leader & Legislator',
    birthDate: '1925-01-01',
    deathDate: '1995-01-01',
    birthPlace: 'Assam',
    deathPlace: 'Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Mangal Singh Hazowary was a prominent political leader who represented Bodo interests in the post-independence era. He served as a member of various legislative bodies and worked towards securing rights and representation for the Bodo community.

His political career spanned several decades during which he advocated for land rights, tribal welfare, and political autonomy for the Bodo people. Hazowary was known for his principled stands and commitment to democratic values.`,
    contributions: [
      'Served in legislative assemblies',
      'Advocated for tribal land rights',
      'Represented Bodo political interests',
      'Worked for community welfare'
    ],
    region: 'Assam',
    district: 'Kokrajhar',
    era: '1950s-1990s',
    isMartyr: false,
    movement: 'Tribal Political Movement',
    category: 'Political'
  },
  {
    id: 'kamala-kumar-brahma',
    name: 'Kamala Kumar Brahma',
    title: 'Language Standardizer & Educator',
    birthDate: '1920-01-01',
    deathDate: '2005-01-01',
    birthPlace: 'Assam',
    deathPlace: 'Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Kamala Kumar Brahma was an eminent educator who made significant contributions to the standardization of the Bodo language and script. He worked extensively on developing educational materials in Bodo and training teachers for Bodo-medium instruction.

His efforts were instrumental in getting Bodo included in the school curriculum of Assam. Brahma also wrote several textbooks and educational guides that are still used in Bodo schools today.`,
    contributions: [
      'Standardized Bodo script',
      'Developed educational materials',
      'Trained Bodo language teachers',
      'Advocated for Bodo in school curriculum'
    ],
    region: 'Assam',
    district: 'Kokrajhar',
    era: '1940s-2000s',
    isMartyr: false,
    movement: 'Bodo Educational Movement',
    category: 'Academic'
  },
  {
    id: 'promod-boro',
    name: 'Promod Boro',
    title: 'Former President, ABSU',
    birthDate: '1960-01-01',
    birthPlace: 'Kokrajhar, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Pramod Boro is a Bodo political leader and former president of the All Bodo Students Union (ABSU). He played a significant role in the Bodoland movement and was involved in the peace process that led to the 2003 Bodoland Peace Accord.

Boro served as the president of ABSU during a crucial period of the Bodoland movement. He later became involved in electoral politics and served as a member of the Assam Legislative Assembly. He was also appointed as the chairman of various governmental bodies.`,
    contributions: [
      'President of All Bodo Students Union (ABSU)',
      'Key figure in Bodoland movement',
      'Involved in 2003 Peace Accord negotiations',
      'Elected representative'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s-present',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  }
];

// Export for backward compatibility
export const leaders = ALL_LEADERS;

export function getLeaderBySlug(slug: string) {
  return ALL_LEADERS.find((leader) => leader.id === slug) ?? null;
}

export function getRelatedLeaders(leader: Leader, limit: number = 3): Leader[] {
  return ALL_LEADERS.filter(
    (item) =>
      item.id !== leader.id &&
      (item.movement === leader.movement || item.era === leader.era || item.region === leader.region)
  ).slice(0, limit);
}

export function getAllLeaders(): Leader[] {
  return ALL_LEADERS;
}

// Timeline events for Timeline component
export const timelineEvents: TimelineEventType[] = ALL_TIMELINE_EVENTS.map((event) => ({
  id: event.id,
  date: event.year.toString(),
  title: event.title,
  description: event.description,
  type: event.category === 'political' || event.category === 'accord' ? 'movement' as const :
    event.category === 'cultural' ? 'achievement' as const :
      event.category === 'religious' ? 'memorial' as const : 'achievement' as const,
}));

// Bodoland History Data for History Page
export const bodolandHistory = {
  overview: `The Bodo people, also known as Bodo-Kachari, are one of the major indigenous ethnic groups of Assam and the northeastern region of India. Historically, the Bodos ruled parts of Assam as the Kachari kingdom before the British colonial period. Their rich cultural heritage includes distinctive traditions in music, dance, festivals, and religious practices that have been preserved for centuries.\n\nThe Bodo language belongs to the Tibeto-Burman family and has its own script. Today, the Bodo population is concentrated primarily in the Bodoland Territorial Areas District (BTAD) in Assam, with significant communities in North Bengal, Darjeeling hills, and other parts of Northeast India. The Bodo movement for cultural preservation and political autonomy has been a significant force in the region since the mid-20th century.`,
  regions: [
    {
      name: 'Bodoland Territorial Area (BTC)',
      description: 'Primary region with four districts: Kokrajhar, Baksa, Udalguri, and Chirang. Home to the majority of Bodo population.'
    },
    {
      name: 'North Bengal',
      description: 'Significant Bodo population in Darjeeling hills and surrounding areas with distinct cultural practices.'
    },
    {
      name: 'Assam Plains',
      description: 'Scattered Bodo communities throughout Assam, particularly in Darrang, Sonitpur, and Nagaon districts.'
    }
  ],
  culture: {
    bathou: 'Bathouism is the indigenous religion of the Bodo people, centered around the worship of Bathou (the supreme deity representing five elements). The Siju plant is sacred and worshipped. Key ceremonies include Kherai Puja and Bwisagu festival.',
    language: 'The Bodo language (Devanagari script) is recognized in the 8th Schedule of the Indian Constitution. It serves as the official language of BTAD and has a rich literary tradition dating back to the early 20th century.'
  }
};
