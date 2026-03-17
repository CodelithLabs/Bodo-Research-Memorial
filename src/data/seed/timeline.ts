// Seed data for historical timeline events

export interface SeedTimelineEvent {
    year: number;
    title: string;
    description: string;
    category: 'political' | 'cultural' | 'social' | 'literary' | 'accord';
    significance: string;
}

export const SEED_TIMELINE_EVENTS: SeedTimelineEvent[] = [
    {
        year: 1880,
        title: 'Kalicharan Brahma Begins Reform Movement',
        description: 'Kalicharan Brahma initiates the Brahma Dharma reform movement among the Bodo community, seeking to modernize Bathouism by abolishing animal sacrifice and promoting monotheistic worship.',
        category: 'social',
        significance: 'Marked the beginning of religious reform within Bathouism'
    },
    {
        year: 1920,
        title: 'Early Bodo Cultural Organizations Formed',
        description: 'Early cultural organizations began forming to promote Bodo language, culture, and identity. These laid the groundwork for later political movements.',
        category: 'cultural',
        significance: 'First organized efforts for cultural preservation'
    },
    {
        year: 1929,
        title: 'Founding of Bodo Cultural Organizations',
        description: 'Significant formation of Bodo cultural and political organizations in Assam, marking a new era of organized community advocacy.',
        category: 'political',
        significance: 'Beginning of formal political organization'
    },
    {
        year: 1945,
        title: 'Bodofa U.N. Brahma\'s Key Organizational Contributions',
        description: 'Upendra Nath Brahma (Bodofa) intensified his organizational work for Bodo rights and cultural preservation during the final years of British rule.',
        category: 'political',
        significance: 'Consolidated Bodo political movement'
    },
    {
        year: 1952,
        title: 'First Bodo MLA Elected',
        description: 'Rupnath Brahma became the first Bodo member of the Assam Legislative Assembly, marking a historic milestone in Bodo political representation.',
        category: 'political',
        significance: 'First Bodo representative in democratic institutions'
    },
    {
        year: 1952,
        title: 'Death of Bodofa U.N. Brahma',
        description: 'Upendra Nath Brahma, the father of the Bodo political movement, passed away, leaving a lasting legacy for the community.',
        category: 'political',
        significance: 'End of an era but beginning of institutionalized movement'
    },
    {
        year: 1966,
        title: 'Formation of Plains Tribal Council of Assam (PTCA)',
        description: 'The Plains Tribal Council of Assam was formed to advocate for tribal rights and autonomy in the Assam plains.',
        category: 'political',
        significance: 'Major political organization for tribal rights'
    },
    {
        year: 1967,
        title: 'Bodo Language Recognized in School Curriculum',
        description: 'Bodo language was officially included in the school curriculum of Assam, a significant victory for language preservation.',
        category: 'cultural',
        significance: 'Official recognition of Bodo language in education'
    },
    {
        year: 1986,
        title: 'All Bodo Students Union (ABSU) Formally Founded',
        description: 'The All Bodo Students Union was formally established, becoming a major force in Bodo politics and youth mobilization.',
        category: 'political',
        significance: 'Major student organization for Bodo rights'
    },
    {
        year: 1987,
        title: 'ABSU Launches "Divide Assam 50-50" Movement',
        description: 'ABSU launched the historic "Divide Assam 50-50" movement, demanding equal representation and autonomy for the Bodo community.',
        category: 'political',
        significance: 'Catalyzed modern Bodoland movement'
    },
    {
        year: 1993,
        title: 'Bodoland Autonomous Council (BAC) Agreement',
        description: 'The first Bodoland Autonomous Council Agreement was signed between the Government of India and Bodo groups, creating an administrative council.',
        category: 'accord',
        significance: 'First step toward self-governance'
    },
    {
        year: 1996,
        title: 'BAC Dissolved Amid Violence',
        description: 'The Bodoland Autonomous Council was dissolved following violence and unrest, leading to renewed demands for a permanent solution.',
        category: 'political',
        significance: 'Setback and renegotiation of autonomy framework'
    },
    {
        year: 2003,
        title: 'Bodoland Territorial Council (BTC) Established',
        description: 'The Bodoland Territorial Council was established, creating the Bodoland Territorial Areas District (BTAD) - a new administrative unit.',
        category: 'accord',
        significance: 'Major milestone in Bodoland autonomy'
    },
    {
        year: 2003,
        title: 'BTC Accord Signed',
        description: 'The Bodoland Territorial Council Accord was signed, creating a framework for self-governance in Bodo-dominated areas.',
        category: 'accord',
        significance: 'Comprehensive peace agreement'
    },
    {
        year: 2014,
        title: 'Bodo Script Officially Recognized',
        description: 'The Devanagari-based Bodo script was officially recognized, marking a significant achievement for language preservation.',
        category: 'cultural',
        significance: 'Official recognition of Bodo script'
    },
    {
        year: 2020,
        title: 'Third Bodoland Peace Accord',
        description: 'The third Bodoland Peace Accord was signed on January 27, 2020, bringing hopes for lasting peace and development in the region.',
        category: 'accord',
        significance: 'Latest peace agreement ending decades of insurgency'
    }
];
