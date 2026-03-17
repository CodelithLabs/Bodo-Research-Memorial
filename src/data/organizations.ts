/**
 * Organizations Data
 * Real data for Bodo organizations
 */

export interface OrganizationDataItem {
    id: string;
    name: string;
    slug: string;
    acronym?: string;
    description: string;
    mission?: string;
    vision?: string;
    foundedYear?: number;
    dissolvedYear?: number;
    ongoing: boolean;
    type: string;
    operationalStatus: string;
    headquarters?: {
        address?: string;
        district?: string;
        state?: string;
    };
    keyMembers?: Array<{
        name: string;
        role: string;
        tenure?: string;
        imageUrl?: string;
    }>;
    foundingMembers?: string[];
    movements?: string[];
    achievements?: string[];
    programs?: string[];
    region: string[];
    logoUrl?: string;
    imageUrl?: string;
    tags: string[];
    featured?: boolean;
    status: 'published' | 'draft' | 'archived';
    createdAt: string;
}

// Real Bodo organizations data
export const organizationsData: OrganizationDataItem[] = [
    {
        id: 'absu',
        name: 'All Bodo Students Union',
        acronym: 'ABSU',
        slug: 'all-bodo-students-union',
        description: 'The All Bodo Students Union (ABSU) is the primary students organization of the Bodo community in Assam. Founded in 1967, it has been at the forefront of the Bodo movement for statehood, cultural preservation, and tribal rights.',
        mission: 'To unite and empower Bodo students and work for their educational, cultural, and political advancement.',
        foundedYear: 1967,
        ongoing: true,
        type: 'student',
        operationalStatus: 'active',
        headquarters: {
            district: 'Kokrajhar',
            state: 'Assam',
        },
        keyMembers: [
            { name: 'Upendranath Brahma', role: 'Founder President' },
            { name: 'Pramod Boro', role: 'Former President' },
        ],
        movements: ['Bodoland Movement', 'Cultural Preservation Movement'],
        achievements: [
            'Founded Bodoland movement',
            'Achieved statehood demand',
            'Promoted Bodo language and culture',
        ],
        region: ['Bodoland', 'Assam'],
        tags: ['student', 'political', 'bodo', 'assam'],
        featured: true,
        status: 'published',
        createdAt: '1967-10-18T00:00:00.000Z',
    },
    {
        id: 'bodo-sahitya-sabha',
        name: 'Bodo Sahitya Sabha',
        acronym: 'BSS',
        slug: 'bodo-sahitya-sabha',
        description: 'Bodo Sahitya Sabha is the premier literary organization of the Bodo community. It was established to promote and preserve Bodo language, literature, and culture.',
        mission: 'To promote Bodo language and literature and preserve Bodo cultural heritage.',
        foundedYear: 1952,
        ongoing: true,
        type: 'cultural',
        operationalStatus: 'active',
        headquarters: {
            district: 'Kokrajhar',
            state: 'Assam',
        },
        keyMembers: [
            { name: 'Dr. Rongphar Koch', role: 'Former President' },
            { name: 'EMS Namchoudhury', role: 'Former President' },
        ],
        achievements: [
            'Standardized Bodo language',
            'Published numerous Bodo literature works',
            'Organized Bodo literary conferences',
        ],
        region: ['Bodoland', 'Assam'],
        tags: ['cultural', 'literary', 'bodo', 'language'],
        featured: true,
        status: 'published',
        createdAt: '1952-01-01T00:00:00.000Z',
    },
    {
        id: 'bpf',
        name: 'Bodo Peoples Front',
        acronym: 'BPF',
        slug: 'bodo-peoples-front',
        description: 'Bodo Peoples Front is a political party formed to represent the Bodo community in Assam politics. It was founded by Upendranath Brahma and has been a significant political force in the region.',
        mission: 'To achieve statehood for Bodoland and protect the rights of Bodo people.',
        foundedYear: 2003,
        ongoing: true,
        type: 'political',
        operationalStatus: 'active',
        headquarters: {
            district: 'Kokrajhar',
            state: 'Assam',
        },
        keyMembers: [
            { name: 'Hagrama Mohilary', role: 'Founder' },
            { name: 'Pramod Boro', role: 'Former President' },
        ],
        movements: ['Bodoland Movement'],
        achievements: [
            'Signed 2003 Peace Accord',
            'Formed BTC government',
            'Represented Bodo interests in assembly',
        ],
        region: ['Bodoland', 'Assam'],
        tags: ['political', 'bodo', 'party'],
        featured: true,
        status: 'published',
        createdAt: '2003-05-01T00:00:00.000Z',
    },
    {
        id: 'btc',
        name: 'Bodoland Territorial Council',
        acronym: 'BTC',
        slug: 'bodoland-territorial-council',
        description: 'The Bodoland Territorial Council is an autonomous district council created under the Sixth Schedule of the Indian Constitution. It governs the Bodoland region with limited self-governance.',
        mission: 'To provide autonomous governance to the Bodoland region and promote development.',
        foundedYear: 2003,
        ongoing: true,
        type: 'political',
        operationalStatus: 'active',
        headquarters: {
            district: 'Kokrajhar',
            state: 'Assam',
        },
        keyMembers: [
            { name: 'Hagrama Mohilary', role: 'First Chief Executive Member' },
            { name: 'Lurinjym Mastro', role: 'Former Chief Executive Member' },
        ],
        achievements: [
            'Established autonomous governance',
            'Promoted regional development',
            'Maintained peace in the region',
        ],
        region: ['Bodoland', 'Assam'],
        tags: ['political', 'autonomous', 'governance'],
        featured: true,
        status: 'published',
        createdAt: '2003-12-01T00:00:00.000Z',
    },
    {
        id: 'bodo-women-welfare-society',
        name: 'Bodo Women Welfare Society',
        acronym: 'BWWS',
        slug: 'bodo-women-welfare-society',
        description: 'Bodo Women Welfare Society is an organization dedicated to the welfare and empowerment of Bodo women. It works on issues related to women education, health, and economic empowerment.',
        mission: 'To empower Bodo women through education, skill development, and social awareness.',
        foundedYear: 1995,
        ongoing: true,
        type: 'women',
        operationalStatus: 'active',
        headquarters: {
            district: 'Kokrajhar',
            state: 'Assam',
        },
        achievements: [
            'Women empowerment programs',
            'Educational scholarships for girls',
            'Self-help groups formation',
        ],
        region: ['Bodoland', 'Assam'],
        tags: ['women', 'social', 'empowerment'],
        featured: false,
        status: 'published',
        createdAt: '1995-03-08T00:00:00.000Z',
    },
    {
        id: 'bodo-youth-council',
        name: 'Bodo Youth Council',
        acronym: 'BYC',
        slug: 'bodo-youth-council',
        description: 'Bodo Youth Council is an organization that represents the youth of the Bodo community. It focuses on youth empowerment, skill development, and engagement in the democratic process.',
        mission: 'To unite Bodo youth and channel their energy towards community development.',
        foundedYear: 2005,
        ongoing: true,
        type: 'youth',
        operationalStatus: 'active',
        headquarters: {
            district: 'Kokrajhar',
            state: 'Assam',
        },
        achievements: [
            'Youth leadership programs',
            'Skill development training',
            'Employment generation initiatives',
        ],
        region: ['Bodoland', 'Assam'],
        tags: ['youth', 'social', 'development'],
        featured: false,
        status: 'published',
        createdAt: '2005-01-01T00:00:00.000Z',
    },
];

// Get organizations with filtering
export function getOrganizations(options?: {
    type?: string;
    search?: string;
    page?: number;
    limit?: number;
    featured?: boolean;
}): {
    organizations: OrganizationDataItem[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
    };
} {
    let filtered = [...organizationsData];

    // Filter by type
    if (options?.type) {
        filtered = filtered.filter(org =>
            org.type.toLowerCase().includes(options.type!.toLowerCase())
        );
    }

    // Filter by search
    if (options?.search) {
        const searchLower = options.search.toLowerCase();
        filtered = filtered.filter(org =>
            org.name.toLowerCase().includes(searchLower) ||
            org.acronym?.toLowerCase().includes(searchLower) ||
            org.description.toLowerCase().includes(searchLower)
        );
    }

    // Filter featured
    if (options?.featured) {
        filtered = filtered.filter(org => org.featured);
    }

    // Sort by founded year (descending)
    filtered.sort((a, b) => (b.foundedYear || 0) - (a.foundedYear || 0));

    // Pagination
    const page = options?.page || 1;
    const limit = options?.limit || 12;
    const total = filtered.length;
    const pages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

    const paginatedOrgs = filtered.slice(skip, skip + limit);

    return {
        organizations: paginatedOrgs,
        pagination: {
            page,
            limit,
            total,
            pages,
        },
    };
}

// Get single organization by ID or slug
export function getOrganization(identifier: string): OrganizationDataItem | undefined {
    return organizationsData.find(org =>
        org.id === identifier ||
        org.slug === identifier
    );
}

export default organizationsData;
