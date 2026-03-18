/**
 * Bodo Historical Timeline Data
 * Comprehensive timeline events from 1860-2020
 */

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  category: 'political' | 'cultural' | 'social' | 'religious' | 'accord';
  significance: string;
}

export const ALL_TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: '1860-kalicharan-brahma-birth',
    year: 1860,
    title: 'Birth of Kalicharan Brahma',
    description: 'Kalicharan Brahma, who would later found the Brahma Dharma reform movement, was born. He would become one of the most influential social reformers in Bodo history.',
    category: 'social',
    significance: 'Beginning of religious reform movement'
  },
  {
    id: '1867-kalicharan-brahma-born',
    year: 1867,
    title: 'Kalicharan Brahma Born',
    description: 'Kalicharan Brahma was born in 1867 in Assam. He would later found the Brahma Dharma movement to reform Bathouism.',
    category: 'social',
    significance: 'Birth of religious reformer'
  },
  {
    id: '1880-reform-movement-begins',
    year: 1880,
    title: 'Kalicharan Brahma Begins Reform Movement',
    description: 'Kalicharan Brahma initiates the Brahma Dharma reform movement among the Bodo community, seeking to modernize Bathouism by abolishing animal sacrifice and promoting monotheistic worship.',
    category: 'religious',
    significance: 'Marked the beginning of religious reform within Bathouism'
  },
  {
    id: '1895-brahma-dharma-founded',
    year: 1895,
    title: 'Brahma Dharma Founded',
    description: 'Kalicharan Brahma formally established the Brahma Dharma reform movement, introducing significant changes to traditional Bathou practices.',
    category: 'religious',
    significance: 'Establishment of reform movement'
  },
  {
    id: '1901-upendra-nath-brahma-born',
    year: 1901,
    title: 'Birth of Upendra Nath Brahma (Bodofa)',
    description: 'Upendra Nath Brahma, who would become known as Bodofa (Father of the Soil), was born in Kokrajhar, Assam.',
    category: 'political',
    significance: 'Birth of future political leader'
  },
  {
    id: '1908-bidyasingha-narzary-born',
    year: 1908,
    title: 'Birth of Bidyasingha Narzary',
    description: 'Bidyasingha Narzary, who would become founder president of the Bodo Sahitya Sabha, was born.',
    category: 'cultural',
    significance: 'Birth of literary leader'
  },
  {
    id: '1920-early-cultural-organizations',
    year: 1920,
    title: 'Early Bodo Cultural Organizations Formed',
    description: 'Early cultural organizations began forming to promote Bodo language, culture, and identity. These laid the groundwork for later political movements.',
    category: 'cultural',
    significance: 'First organized efforts for cultural preservation'
  },
  {
    id: '1921-rupnath-brahma-born',
    year: 1921,
    title: 'Birth of Rupnath Brahma',
    description: 'Rupnath Brahma was born. He would later become the first tribal Chief Minister of Assam.',
    category: 'political',
    significance: 'Birth of future political leader'
  },
  {
    id: '1925-mangal-singh-hazowary-born',
    year: 1925,
    title: 'Birth of Mangal Singh Hazowary',
    description: 'Mangal Singh Hazowary, who would become a prominent political leader, was born.',
    category: 'political',
    significance: 'Birth of political leader'
  },
  {
    id: '1929-bodo-cultural-organizations',
    year: 1929,
    title: 'Founding of Bodo Cultural Organizations',
    description: 'Significant formation of Bodo cultural and political organizations in Assam, marking a new era of organized community advocacy.',
    category: 'political',
    significance: 'Beginning of formal political organization'
  },
  {
    id: '1945-kalicharan-brahma-passes',
    year: 1945,
    title: 'Death of Kalicharan Brahma',
    description: 'Kalicharan Brahma, founder of the Brahma Dharma movement, passed away, leaving a lasting legacy of religious reform.',
    category: 'religious',
    significance: 'End of an era for religious reform'
  },
  {
    id: '1945-bodofa-organizational-work',
    year: 1945,
    title: 'Bodofa U.N. Brahma\'s Key Organizational Contributions',
    description: 'Upendra Nath Brahma (Bodofa) intensified his organizational work for Bodo rights and cultural preservation during the final years of British rule.',
    category: 'political',
    significance: 'Consolidated Bodo political movement'
  },
  {
    id: '1952-first-bodo-mla',
    year: 1952,
    title: 'First Bodo MLA Elected',
    description: 'Rupnath Brahma became the first Bodo member of the Assam Legislative Assembly, marking a historic milestone in Bodo political representation.',
    category: 'political',
    significance: 'First Bodo representative in democratic institutions'
  },
  {
    id: '1952-bodofa-passes',
    year: 1952,
    title: 'Death of Bodofa U.N. Brahma',
    description: 'Upendra Nath Brahma, the father of the Bodo political movement, passed away, leaving a lasting legacy for the community.',
    category: 'political',
    significance: 'End of an era but beginning of institutionalized movement'
  },
  {
    id: '1953-bodo-sahitya-sabha-founded',
    year: 1953,
    title: 'Bodo Sahitya Sabha Founded',
    description: 'The Bodo Sahitya Sabha was founded to promote and develop the Bodo language and literature.',
    category: 'cultural',
    significance: 'Major literary organization established'
  },
  {
    id: '1966-ptca-formed',
    year: 1966,
    title: 'Formation of Plains Tribal Council of Assam (PTCA)',
    description: 'The Plains Tribal Council of Assam was formed to advocate for tribal rights and autonomy in the Assam plains.',
    category: 'political',
    significance: 'Major political organization for tribal rights'
  },
  {
    id: '1967-bodo-language-recognition',
    year: 1967,
    title: 'Bodo Language Recognized in School Curriculum',
    description: 'Bodo language was officially included in the school curriculum of Assam, a significant victory for language preservation.',
    category: 'cultural',
    significance: 'Official recognition of Bodo language in education'
  },
  {
    id: '1967-first-tribal-cm',
    year: 1967,
    title: 'First Tribal Chief Minister of Assam',
    description: 'Rupnath Brahma became the first tribal Chief Minister of Assam, serving from 1967 to 1970.',
    category: 'political',
    significance: 'First tribal to hold the position of Chief Minister'
  },
  {
    id: '1987-absu-founded',
    year: 1987,
    title: 'All Bodo Students Union (ABSU) Formally Founded',
    description: 'The All Bodo Students Union was formally established, becoming a major force in Bodo politics and youth mobilization.',
    category: 'political',
    significance: 'Major student organization for Bodo rights'
  },
  {
    id: '1987-divide-assam-movement',
    year: 1987,
    title: 'ABSU Launches "Divide Assam 50-50" Movement',
    description: 'ABSU launched the historic "Divide Assam 50-50" movement, demanding equal representation and autonomy for the Bodo community.',
    category: 'political',
    significance: 'Catalyzed modern Bodoland movement'
  },
  {
    id: '1990-upendra-nath-brahma-assassination',
    year: 1990,
    title: 'Assassination of Upendra Nath Brahma',
    description: 'Upendra Nath Brahma (Bodofa), the iconic leader of the Bodoland movement, was assassinated at his residence in Kokrajhar.',
    category: 'political',
    significance: 'Martyrdom of key leader'
  },
  {
    id: '1993-bac-agreement',
    year: 1993,
    title: 'Bodoland Autonomous Council (BAC) Agreement',
    description: 'The first Bodoland Autonomous Council Agreement was signed between the Government of India and Bodo groups, creating an administrative council.',
    category: 'accord',
    significance: 'First step toward self-governance'
  },
  {
    id: '1996-bac-dissolved',
    year: 1996,
    title: 'BAC Dissolved Amid Violence',
    description: 'The Bodoland Autonomous Council was dissolved following violence and unrest, leading to renewed demands for a permanent solution.',
    category: 'political',
    significance: 'Setback and renegotiation of autonomy framework'
  },
  {
    id: '2003-btc-established',
    year: 2003,
    title: 'Bodoland Territorial Council (BTC) Established',
    description: 'The Bodoland Territorial Council was established, creating the Bodoland Territorial Areas District (BTAD) - a new administrative unit.',
    category: 'accord',
    significance: 'Major milestone in Bodoland autonomy'
  },
  {
    id: '2003-btc-accord',
    year: 2003,
    title: 'BTC Accord Signed',
    description: 'The Bodoland Territorial Council Accord was signed, creating a framework for self-governance in Bodo-dominated areas.',
    category: 'accord',
    significance: 'Comprehensive peace agreement'
  },
  {
    id: '2014-bodo-script-recognized',
    year: 2014,
    title: 'Bodo Script Officially Recognized',
    description: 'The Devanagari-based Bodo script was officially recognized, marking a significant achievement for language preservation.',
    category: 'cultural',
    significance: 'Official recognition of Bodo script'
  },
  {
    id: '2020-third-bodoland-accord',
    year: 2020,
    title: 'Third Bodoland Peace Accord',
    description: 'The third Bodoland Peace Accord was signed on January 27, 2020, bringing hopes for lasting peace and development in the region.',
    category: 'accord',
    significance: 'Latest peace agreement ending decades of insurgency'
  }
];

// Export for backward compatibility
export const timelineEvents = ALL_TIMELINE_EVENTS;
