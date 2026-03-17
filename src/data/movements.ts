/**
 * Movements Data
 * Real data for Bodo movements
 */

export interface MovementDataItem {
    id: string;
    name: string;
    slug: string;
    alternativeNames?: string[];
    description: string;
    objectives?: string[];
    startYear?: number;
    endYear?: number;
    ongoing: boolean;
    type: string;
    movementStatus: string;
    keyEvents?: Array<{
        year: number;
        title: string;
        description: string;
    }>;
    leaders?: string[];
    organizations?: string[];
    outcomes?: string[];
    achievements?: string[];
    challenges?: string[];
    region: string[];
    imageUrl?: string;
    tags: string[];
    featured?: boolean;
    status: 'published' | 'draft' | 'archived';
    createdAt: string;
}

// Real Bodo movements data
export const movementsData: MovementDataItem[] = [
    {
        id: 'bodoland-movement',
        name: 'Bodoland Movement',
        slug: 'bodoland-movement',
        alternativeNames: ['Bodoland Statehood Movement'],
        description: 'The Bodoland Movement is a political movement seeking a separate state for the Bodo people in Assam. It began in the late 1980s and has been one of the most significant tribal movements in Northeast India.',
        objectives: [
            'Achieve separate statehood for Bodoland',
            'Protect Bodo cultural identity',
            'Secure tribal land rights',
            'Obtain autonomous governance',
        ],
        startYear: 1987,
        ongoing: true,
        type: 'political',
        movementStatus: 'active',
        keyEvents: [
            { year: 1987, title: 'Movement Intensifies', description: 'ABSU led movement gains momentum' },
            { year: 1993, title: 'First Peace Accord', description: 'Bodoland Peace Accord signed' },
            { year: 2003, title: 'Second Peace Accord', description: 'BTC created under 2003 Accord' },
        ],
        leaders: ['Upendranath Brahma', 'Pramod Boro', 'Hagrama Mohilary'],
        organizations: ['All Bodo Students Union', 'Bodo Peoples Front', 'Bodoland Territorial Council'],
        outcomes: [
            'Creation of Bodoland Territorial Council',
            'Autonomous governance for the region',
            'Development funds for the region',
        ],
        achievements: [
            'Achieved statehood demand (partial)',
            'Established BTC',
            'Maintained peace through accords',
        ],
        region: ['Bodoland', 'Assam'],
        tags: ['political', 'statehood', 'tribal', 'autonomous'],
        featured: true,
        status: 'published',
        createdAt: '1987-01-01T00:00:00.000Z',
    },
    {
        id: 'bodo-cultural-movement',
        name: 'Bodo Cultural Preservation Movement',
        slug: 'bodo-cultural-preservation-movement',
        description: 'The Bodo Cultural Preservation Movement aims to preserve and promote Bodo language, traditions, customs, and cultural heritage. It has been instrumental in safeguarding Bodo identity.',
        objectives: [
            'Preserve Bodo language',
            'Promote traditional arts and crafts',
            'Document Bodo folklore and history',
            'Revitalize traditional festivals',
        ],
        startYear: 1950,
        ongoing: true,
        type: 'cultural',
        movementStatus: 'active',
        keyEvents: [
            { year: 1952, title: 'Bodo Sahitya Sabha Founded', description: 'Literary organization established' },
            { year: 1975, title: 'Language Recognition', description: 'Bodo included in Eighth Schedule' },
        ],
        leaders: ['Upendranath Brahma', 'Khagendranath Momai', 'Dr. Rongphar Koch'],
        organizations: ['Bodo Sahitya Sabha'],
        achievements: [
            'Standardized Bodo language',
            'Eighth Schedule recognition',
            'Rich literary output',
        ],
        region: ['Bodoland', 'Assam'],
        tags: ['cultural', 'language', 'preservation', 'heritage'],
        featured: true,
        status: 'published',
        createdAt: '1950-01-01T00:00:00.000Z',
    },
    {
        id: 'language-movement',
        name: 'Bodo Language Movement',
        slug: 'bodo-language-movement',
        description: 'The Bodo Language Movement fought for the recognition, development, and promotion of the Bodo language. It achieved significant milestones including official recognition.',
        objectives: [
            'Get official recognition for Bodo language',
            'Develop educational materials in Bodo',
            'Include Bodo in school curriculum',
            'Promote Bodo literature',
        ],
        startYear: 1915,
        ongoing: true,
        type: 'cultural',
        movementStatus: 'active',
        keyEvents: [
            { year: 1948, title: 'First Bodo Newspaper', description: 'Bodo newspaper launched' },
            { year: 1956, title: 'AIR Broadcasts', description: 'Bodo on All India Radio' },
            { year: 1975, title: 'Eighth Schedule', description: 'Bodo recognized in Constitution' },
        ],
        leaders: ['Satish Chandra Basumatary', 'Chandra Brahma'],
        organizations: ['Bodo Sahitya Sabha'],
        achievements: [
            'Eighth Schedule recognition',
            'School curriculum inclusion',
            'Rich literary tradition',
        ],
        region: ['Bodoland', 'Assam'],
        tags: ['language', 'cultural', 'education'],
        featured: true,
        status: 'published',
        createdAt: '1915-01-01T00:00:00.000Z',
    },
    {
        id: 'tribal-political-movement',
        name: 'Tribal Political Movement',
        slug: 'tribal-political-movement',
        description: 'The Tribal Political Movement in Assam worked towards political representation and rights for tribal communities including the Bodos.',
        objectives: [
            'Secure political representation',
            'Achieve tribal autonomy',
            'Protect tribal land rights',
            ' Obtain constitutional safeguards',
        ],
        startYear: 1930,
        ongoing: true,
        type: 'political',
        movementStatus: 'active',
        keyEvents: [
            { year: 1952, title: 'First Bodo MLA', description: 'Rupnath Brahma elected to Assembly' },
            { year: 1967, title: 'First Tribal CM', description: 'Rupnath Brahma becomes CM' },
            { year: 1971, title: 'Autonomous Council', description: 'North Assam Autonomous Council created' },
        ],
        leaders: ['Rupnath Brahma', 'Bineswar Brahma'],
        region: ['Assam'],
        tags: ['political', 'tribal', 'representation'],
        featured: false,
        status: 'published',
        createdAt: '1930-01-01T00:00:00.000Z',
    },
    {
        id: 'social-reform-movement',
        name: 'Bodo Social Reform Movement',
        slug: 'bodo-social-reform-movement',
        description: 'The Bodo Social Reform Movement worked to eliminate social evils and promote education and women empowerment in Bodo society.',
        objectives: [
            'Eliminate social evils',
            'Promote education',
            'Empower women',
            'Improve social status',
        ],
        startYear: 1890,
        ongoing: false,
        type: 'social',
        movementStatus: 'ceased',
        keyEvents: [
            { year: 1890, title: 'Movement Begins', description: 'Reformers like Madaram Brahma lead the way' },
        ],
        leaders: ['Madaram Brahma', 'Guruswami Boro'],
        region: ['Bodoland', 'Assam'],
        tags: ['social', 'reform', 'women', 'education'],
        featured: false,
        status: 'published',
        createdAt: '1890-01-01T00:00:00.000Z',
    },
];

// Get movements with filtering
export function getMovements(options?: {
    type?: string;
    search?: string;
    page?: number;
    limit?: number;
    featured?: boolean;
}): {
    movements: MovementDataItem[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
    };
} {
    let filtered = [...movementsData];

    // Filter by type
    if (options?.type) {
        filtered = filtered.filter(movement =>
            movement.type.toLowerCase().includes(options.type!.toLowerCase())
        );
    }

    // Filter by search
    if (options?.search) {
        const searchLower = options.search.toLowerCase();
        filtered = filtered.filter(movement =>
            movement.name.toLowerCase().includes(searchLower) ||
            movement.description.toLowerCase().includes(searchLower)
        );
    }

    // Filter featured
    if (options?.featured) {
        filtered = filtered.filter(movement => movement.featured);
    }

    // Sort by start year (descending)
    filtered.sort((a, b) => (b.startYear || 0) - (a.startYear || 0));

    // Pagination
    const page = options?.page || 1;
    const limit = options?.limit || 12;
    const total = filtered.length;
    const pages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

    const paginatedMovements = filtered.slice(skip, skip + limit);

    return {
        movements: paginatedMovements,
        pagination: {
            page,
            limit,
            total,
            pages,
        },
    };
}

// Get single movement by ID or slug
export function getMovement(identifier: string): MovementDataItem | undefined {
    return movementsData.find(movement =>
        movement.id === identifier ||
        movement.slug === identifier
    );
}

export default movementsData;
