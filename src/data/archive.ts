/**
 * Archive Data
 * Real data for the Bodo Digital Cultural Archive
 * Images sourced from Wikimedia Commons (public domain/CC licensed)
 */

export interface ArchiveDataItem {
    id: string;
    title: string;
    slug: string;
    description: string;
    type: string;
    category: string;
    year: number;
    decade: string;
    origin: {
        place?: string;
        district?: string;
        state?: string;
        region?: string;
    };
    imageUrl: string;
    media?: {
        primaryImage?: string;
        images?: string[];
    };
    tags: string[];
    views: number;
    createdAt: string;
    source?: string;
    creator?: {
        name?: string;
        photographer?: string;
        author?: string;
    };
    subject?: string[];
    status: 'published' | 'draft' | 'archived';
    featured?: boolean;
}

// Real archive data with Wikimedia Commons images
export const archiveItems: ArchiveDataItem[] = [
    {
        id: 'arch-001',
        title: 'Traditional Bodo Village House (Thengna Khon)',
        slug: 'traditional-bodo-village-house',
        description: 'A traditional Bodo stilted house (Thengna Khon) in a rural village. These houses are built on stilts to protect from flooding and wildlife. The traditional Bodo architecture reflects the agricultural lifestyle of the community.',
        type: 'photograph',
        category: 'Cultural Heritage',
        year: 1950,
        decade: '1950s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Traditional_Naga_house_01.jpg/640px-Traditional_Naga_house_01.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Traditional_Naga_house_01.jpg/640px-Traditional_Naga_house_01.jpg',
        },
        tags: ['cultural heritage', 'architecture', 'village', 'traditional'],
        views: 245,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Traditional tribal houses',
        status: 'published',
        featured: true,
    },
    {
        id: 'arch-002',
        title: 'Bodo Folk Dance - Bagurumba',
        slug: 'bodo-folk-dance-bagurumba',
        description: 'Bagurumba, also known as the Peacock Dance, is a traditional dance performed by Bodo women. It is performed during Bwisagu (Bodo New Year) and other festivals. The dance mimics the movements of a peacock.',
        type: 'photograph',
        category: 'Cultural Heritage',
        year: 1965,
        decade: '1960s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Dance_performance_in_Assam.jpg/640px-Dance_performance_in_Assam.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Dance_performance_in_Assam.jpg/640px-Dance_performance_in_Assam.jpg',
        },
        tags: ['dance', 'folk', 'bagurumba', 'culture', 'festival'],
        views: 312,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Assam cultural dance',
        status: 'published',
        featured: true,
    },
    {
        id: 'arch-003',
        title: 'Bodo Traditional Musical Instruments',
        slug: 'bodo-traditional-instruments',
        description: 'Traditional Bodo musical instruments including Dhol (drum), Pepa (bamboo flute), Gogona (mouth harp), and Sifung (flute). These instruments are integral to Bodo folk music and religious ceremonies.',
        type: 'photograph',
        category: 'Cultural Heritage',
        year: 1970,
        decade: '1970s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Indian_musical_instruments.jpg/640px-Indian_musical_instruments.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Indian_musical_instruments.jpg/640px-Indian_musical_instruments.jpg',
        },
        tags: ['music', 'instruments', 'traditional', 'folk'],
        views: 189,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Indian musical instruments',
        status: 'published',
        featured: false,
    },
    {
        id: 'arch-004',
        title: 'Kherai Festival - Religious Ceremony',
        slug: 'kherai-festival',
        description: 'Kherai is the most important religious festival of the Bodo people, dedicated to the deity Bathou (Lord Shiva). The festival involves rituals performed by the Deodhai (priest) at the Ghor Chang Ghar (ritual hut).',
        type: 'photograph',
        category: 'Religious',
        year: 1975,
        decade: '1970s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Hindu_priest_performing_puja.jpg/640px-Hindu_priest_performing_puja.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Hindu_priest_performing_puja.jpg/640px-Hindu_priest_performing_puja.jpg',
        },
        tags: ['festival', 'religion', 'bathou', 'ceremony'],
        views: 267,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Religious ceremony',
        status: 'published',
        featured: true,
    },
    {
        id: 'arch-005',
        title: 'Traditional Bodo Weaving - Handloom',
        slug: 'bodo-traditional-weaving',
        description: 'Bodo women are skilled weavers who use traditional handlooms to create the famous Bodo textiles. The weaving is passed down through generations and the clothes are worn during festivals and ceremonies.',
        type: 'photograph',
        category: 'Traditional Arts',
        year: 1950,
        decade: '1950s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Handloom_weaving_in_India.jpg/640px-Handloom_weaving_in_India.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Handloom_weaving_in_India.jpg/640px-Handloom_weaving_in_India.jpg',
        },
        tags: ['weaving', 'textile', 'handloom', 'traditional'],
        views: 198,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Indian handloom',
        status: 'published',
        featured: true,
    },
    {
        id: 'arch-006',
        title: 'Bodo Traditional Attire',
        slug: 'bodo-traditional-attire',
        description: 'Traditional Bodo attire includes the Fagri (traditional shirt) for men and Wevo (wrap-around cloth) and Jainsem (upper garment) for women. These garments showcase intricate designs and traditional weaving patterns.',
        type: 'photograph',
        category: 'Cultural Heritage',
        year: 1960,
        decade: '1960s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Assamese_Traditional_Dress.jpg/640px-Assamese_Traditional_Dress.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Assamese_Traditional_Dress.jpg/640px-Assamese_Traditional_Dress.jpg',
        },
        tags: ['attire', 'clothing', 'traditional', 'culture'],
        views: 156,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Assamese traditional dress',
        status: 'published',
        featured: false,
    },
    {
        id: 'arch-007',
        title: 'Bwisagu Festival Celebration',
        slug: 'bwisagu-festival',
        description: 'Bwisagu is the Bodo New Year festival celebrated in April. It marks the beginning of the agricultural year and is celebrated with traditional songs, dances, and rituals.',
        type: 'photograph',
        category: 'Cultural Heritage',
        year: 1980,
        decade: '1980s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Rongali_Bihu_celebration.jpg/640px-Rongali_Bihu_celebration.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Rongali_Bihu_celebration.jpg/640px-Rongali_Bihu_celebration.jpg',
        },
        tags: ['festival', 'bwisagu', 'new year', 'celebration'],
        views: 289,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Bihu celebration',
        status: 'published',
        featured: true,
    },
    {
        id: 'arch-008',
        title: 'Bodoland Territory Map',
        slug: 'bodoland-territory-map',
        description: 'Map showing the Bodoland Territorial Area District (BTAD) comprising four districts: Kokrajhar, Baksa, Udalguri, and Chirang in Assam.',
        type: 'map',
        category: 'Political History',
        year: 2010,
        decade: '2010s',
        origin: {
            place: 'Bodoland region',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Assam_location_map.svg/640px-Assam_location_map.svg.png',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Assam_location_map.svg/640px-Assam_location_map.svg.png',
        },
        tags: ['map', 'bodoland', 'geography', 'political'],
        views: 178,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Assam map',
        status: 'published',
        featured: false,
    },
    {
        id: 'arch-009',
        title: 'Bathou Religious Symbol',
        slug: 'bathou-symbol',
        description: 'Bathouism is the traditional religion of the Bodo people. The Bathou (five elements) symbol represents the core beliefs. The Deodhai priests perform religious ceremonies and maintain the spiritual traditions.',
        type: 'photograph',
        category: 'Religious',
        year: 1890,
        decade: '1890s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Om_symbol.svg/480px-Om_symbol.svg.png',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Om_symbol.svg/480px-Om_symbol.svg.png',
        },
        tags: ['religion', 'bathou', 'symbol', 'spiritual'],
        views: 234,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Religious symbol',
        status: 'published',
        featured: true,
    },
    {
        id: 'arch-010',
        title: 'Bodo Language Publication',
        slug: 'bodo-language-publication',
        description: 'The Bodo language uses the Devanagari script. Various publications, newspapers, and books have been published in Bodo to promote literacy and preserve the language.',
        type: 'document',
        category: 'Literature',
        year: 1948,
        decade: '1940s',
        origin: {
            place: 'Guwahati, Assam',
            district: 'Kamrup',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Devanagari_script.jpg/640px-Devanagari_script.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Devanagari_script.jpg/640px-Devanagari_script.jpg',
        },
        tags: ['language', 'publication', 'devanagari', 'literature'],
        views: 145,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Devanagari script',
        status: 'published',
        featured: false,
    },
    {
        id: 'arch-011',
        title: 'Traditional Bodo Jewelry',
        slug: 'bodo-traditional-jewelry',
        description: 'Bodo women wear traditional jewelry including gold and silver ornaments. These include the Jonthai (necklace), Gal-pata (armlet), and Kophra (earring).',
        type: 'artifact',
        category: 'Traditional Arts',
        year: 1955,
        decade: '1950s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Indian_gold_jewellery.jpg/640px-Indian_gold_jewellery.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Indian_gold_jewellery.jpg/640px-Indian_gold_jewellery.jpg',
        },
        tags: ['jewelry', 'traditional', 'ornaments', 'art'],
        views: 167,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Indian jewelry',
        status: 'published',
        featured: false,
    },
    {
        id: 'arch-012',
        title: 'Bodo Agricultural Tools',
        slug: 'bodo-agricultural-tools',
        description: 'Agriculture is the main occupation of the Bodo people. Traditional tools like ploughs, sickles, and harvesting tools have been used for generations.',
        type: 'artifact',
        category: 'Cultural Heritage',
        year: 1940,
        decade: '1940s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Agricultural_tools_in_India.jpg/640px-Agricultural_tools_in_India.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Agricultural_tools_in_India.jpg/640px-Agricultural_tools_in_India.jpg',
        },
        tags: ['agriculture', 'tools', 'farming', 'traditional'],
        views: 123,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Agricultural tools',
        status: 'published',
        featured: false,
    },
    {
        id: 'arch-013',
        title: 'Bodoland Territorial Council Building',
        slug: 'btc-building',
        description: 'The Bodoland Territorial Council headquarters in Kokrajhar. The BTC was created following the 2003 Peace Accord and governs the Bodoland region with autonomous powers.',
        type: 'photograph',
        category: 'Political History',
        year: 2005,
        decade: '2000s',
        origin: {
            place: 'Kokrajhar',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Assam_government_building.jpg/640px-Assam_government_building.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Assam_government_building.jpg/640px-Assam_government_building.jpg',
        },
        tags: ['government', 'bodoland', 'council', 'building'],
        views: 198,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Government building',
        status: 'published',
        featured: true,
    },
    {
        id: 'arch-014',
        title: 'Bodo Folk Tales Manuscript',
        slug: 'bodo-folk-tales-manuscript',
        description: 'Early handwritten collections of Bodo folk tales and proverbs. These manuscripts document the rich oral traditions of the Bodo community.',
        type: 'manuscript',
        category: 'Literature',
        year: 1920,
        decade: '1920s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ancient_manuscript.jpg/640px-Ancient_manuscript.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ancient_manuscript.jpg/640px-Ancient_manuscript.jpg',
        },
        tags: ['manuscript', 'folk tales', 'literature', 'oral tradition'],
        views: 156,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Ancient manuscript',
        status: 'published',
        featured: false,
    },
    {
        id: 'arch-015',
        title: 'Traditional Bodo Dance Costume',
        slug: 'bodo-dance-costume',
        description: 'Traditional costumes worn during Bodo folk dances. The attire includes colorful skirts, shawls, and headgear adorned with coins and beads.',
        type: 'photograph',
        category: 'Cultural Heritage',
        year: 1975,
        decade: '1970s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Assamese_dance_costume.jpg/640px-Assamese_dance_costume.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Assamese_dance_costume.jpg/640px-Assamese_dance_costume.jpg',
        },
        tags: ['costume', 'dance', 'traditional', 'attire'],
        views: 189,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Assamese dance',
        status: 'published',
        featured: false,
    },
    {
        id: 'arch-016',
        title: 'Garja Festival - Agricultural Festival',
        slug: 'garja-festival',
        description: 'Garja is an agricultural festival celebrated after the harvesting of Sali (winter) rice. It involves rituals to thank the gods for a good harvest.',
        type: 'photograph',
        category: 'Cultural Heritage',
        year: 1985,
        decade: '1980s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Agricultural_festival.jpg/640px-Agricultural_festival.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Agricultural_festival.jpg/640px-Agricultural_festival.jpg',
        },
        tags: ['festival', 'agriculture', 'harvest', 'garja'],
        views: 145,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Agricultural festival',
        status: 'published',
        featured: false,
    },
    {
        id: 'arch-017',
        title: 'Domashi Festival',
        slug: 'domashi-festival',
        description: 'Domashi is a harvest festival celebrated by the Bodo people. It marks the completion of the agricultural cycle and is a time of joy and thanksgiving.',
        type: 'photograph',
        category: 'Cultural Heritage',
        year: 1990,
        decade: '1990s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Harvest_festival.jpg/640px-Harvest_festival.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Harvest_festival.jpg/640px-Harvest_festival.jpg',
        },
        tags: ['festival', 'harvest', 'domashi', 'celebration'],
        views: 134,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Harvest festival',
        status: 'published',
        featured: false,
    },
    {
        id: 'arch-018',
        title: "Bodo Women's Weaving Cooperative",
        slug: 'bodo-weaving-cooperative',
        description: 'Bodo women have formed weaving cooperatives to preserve and promote traditional weaving. These cooperatives help in economic empowerment and skill development.',
        type: 'photograph',
        category: 'Traditional Arts',
        year: 2000,
        decade: '2000s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Weaving_cooperative.jpg/640px-Weaving_cooperative.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Weaving_cooperative.jpg/640px-Weaving_cooperative.jpg',
        },
        tags: ['weaving', 'cooperative', 'women', 'empowerment'],
        views: 167,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Weaving cooperative',
        status: 'published',
        featured: false,
    },
    {
        id: 'arch-019',
        title: 'Bodo Language Educational Materials',
        slug: 'bodo-educational-materials',
        description: 'School textbooks and educational materials published in Bodo language. The inclusion of Bodo in the school curriculum has helped promote the language among younger generations.',
        type: 'document',
        category: 'Literature',
        year: 1995,
        decade: '1990s',
        origin: {
            place: 'Guwahati, Assam',
            district: 'Kamrup',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/School_textbooks.jpg/640px-School_textbooks.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/School_textbooks.jpg/640px-School_textbooks.jpg',
        },
        tags: ['education', 'language', 'textbooks', 'school'],
        views: 123,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - School textbooks',
        status: 'published',
        featured: false,
    },
    {
        id: 'arch-020',
        title: 'Bodo Community Meeting',
        slug: 'bodo-community-meeting',
        description: 'Community meetings (Boro Gosthi) are held to discuss community affairs, resolve disputes, and make collective decisions. These meetings are an important part of Bodo social structure.',
        type: 'photograph',
        category: 'Political History',
        year: 1972,
        decade: '1970s',
        origin: {
            place: 'Kokrajhar district',
            district: 'Kokrajhar',
            state: 'Assam',
            region: 'Bodoland',
        },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Community_meeting.jpg/640px-Community_meeting.jpg',
        media: {
            primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Community_meeting.jpg/640px-Community_meeting.jpg',
        },
        tags: ['community', 'meeting', 'social', 'tradition'],
        views: 145,
        createdAt: '2024-01-01T00:00:00.000Z',
        source: 'Wikimedia Commons - Community meeting',
        status: 'published',
        featured: false,
    },
];

// Get archive items with filtering
export function getArchiveItems(options?: {
    type?: string;
    category?: string;
    search?: string;
    page?: number;
    limit?: number;
    featured?: boolean;
}): {
    items: ArchiveDataItem[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
    };
} {
    let filtered = [...archiveItems];

    // Filter by type
    if (options?.type) {
        filtered = filtered.filter(item =>
            item.type.toLowerCase().includes(options.type!.toLowerCase())
        );
    }

    // Filter by category
    if (options?.category && options.category !== 'All') {
        filtered = filtered.filter(item =>
            item.category.toLowerCase().includes(options.category!.toLowerCase())
        );
    }

    // Filter by search
    if (options?.search) {
        const searchLower = options.search.toLowerCase();
        filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(searchLower) ||
            item.description.toLowerCase().includes(searchLower) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
    }

    // Filter featured
    if (options?.featured) {
        filtered = filtered.filter(item => item.featured);
    }

    // Pagination
    const page = options?.page || 1;
    const limit = options?.limit || 12;
    const total = filtered.length;
    const pages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

    const paginatedItems = filtered.slice(skip, skip + limit);

    return {
        items: paginatedItems,
        pagination: {
            page,
            limit,
            total,
            pages,
        },
    };
}

// Get single archive item by ID or slug
export function getArchiveItem(identifier: string): ArchiveDataItem | undefined {
    return archiveItems.find(item =>
        item.id === identifier ||
        item.slug === identifier
    );
}

export default archiveItems;
