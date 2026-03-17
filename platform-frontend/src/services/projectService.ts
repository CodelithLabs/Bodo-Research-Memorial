import { ProjectSummary, Project, ProjectFilter, PaginatedProjects, UserSummary, Review } from '@/types/Project';

// Mock project data
const mockDevelopers: UserSummary[] = [
    { id: '1', username: 'indie_studio', displayName: 'Indie Studio', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=indie_studio', verified: true },
    { id: '2', username: 'pixel_artist', displayName: 'Pixel Artist', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pixel_artist', verified: true },
    { id: '3', username: 'game_maker', displayName: 'Game Maker', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=game_maker', verified: false },
    { id: '4', username: 'asset_creator', displayName: 'Asset Creator', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=asset_creator', verified: true },
    { id: '5', username: 'modder_pro', displayName: 'Modder Pro', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=modder_pro', verified: false },
];

const mockProjects: ProjectSummary[] = [
    {
        id: '1',
        title: 'Space Shooter',
        slug: 'space-shooter',
        shortDescription: 'An epic space adventure game with stunning graphics',
        type: 'game',
        category: 'action',
        thumbnail: 'https://picsum.photos/seed/space/400/300',
        developer: mockDevelopers[0],
        pricing: { type: 'paid', price: 9.99, currency: 'USD' },
        stats: { downloads: 15000, likes: 2500, views: 50000, reviews: 450, comments: 120 },
        rating: 4.5,
        version: '1.2.0',
        lastUpdated: '2024-01-10T00:00:00Z',
    },
    {
        id: '2',
        title: 'Fantasy RPG Assets',
        slug: 'fantasy-rpg-assets',
        shortDescription: 'Complete fantasy character and environment asset pack',
        type: 'asset',
        category: 'models',
        thumbnail: 'https://picsum.photos/seed/fantasy/400/300',
        developer: mockDevelopers[1],
        pricing: { type: 'free', price: 0, currency: 'USD' },
        stats: { downloads: 50000, likes: 8000, views: 100000, reviews: 1200, comments: 300 },
        rating: 4.8,
        version: '2.0.0',
        lastUpdated: '2024-01-08T00:00:00Z',
    },
    {
        id: '3',
        title: 'Skyrim Graphics Overhaul',
        slug: 'skyrim-graphics-overhaul',
        shortDescription: 'Enhanced graphics mod for Skyrim',
        type: 'mod',
        category: 'skyrim',
        thumbnail: 'https://picsum.photos/seed/skyrim/400/300',
        developer: mockDevelopers[4],
        pricing: { type: 'free', price: 0, currency: 'USD' },
        stats: { downloads: 200000, likes: 35000, views: 500000, reviews: 5000, comments: 1500 },
        rating: 4.9,
        version: '3.5.0',
        lastUpdated: '2024-01-05T00:00:00Z',
    },
    {
        id: '4',
        title: 'Pixel UI Kit',
        slug: 'pixel-ui-kit',
        shortDescription: 'Retro-style UI components for games',
        type: 'asset',
        category: 'ui_kits',
        thumbnail: 'https://picsum.photos/seed/ui/400/300',
        developer: mockDevelopers[1],
        pricing: { type: 'paid', price: 19.99, currency: 'USD' },
        stats: { downloads: 8000, likes: 1500, views: 25000, reviews: 200, comments: 50 },
        rating: 4.6,
        version: '1.5.0',
        lastUpdated: '2024-01-12T00:00:00Z',
    },
    {
        id: '5',
        title: 'Minecraft Texture Pack',
        slug: 'minecraft-texture-pack',
        shortDescription: 'HD texture pack for Minecraft',
        type: 'mod',
        category: 'minecraft',
        thumbnail: 'https://picsum.photos/seed/minecraft/400/300',
        developer: mockDevelopers[4],
        pricing: { type: 'donation', price: 0, currency: 'USD' },
        stats: { downloads: 100000, likes: 20000, views: 300000, reviews: 3500, comments: 800 },
        rating: 4.7,
        version: '1.0.0',
        lastUpdated: '2024-01-15T00:00:00Z',
    },
    {
        id: '6',
        title: 'Cyberpunk City',
        slug: 'cyberpunk-city',
        shortDescription: 'Futuristic cyberpunk city environment',
        type: 'digital_art',
        category: '3d_art',
        thumbnail: 'https://picsum.photos/seed/cyber/400/300',
        developer: mockDevelopers[2],
        pricing: { type: 'paid', price: 29.99, currency: 'USD' },
        stats: { downloads: 3000, likes: 600, views: 10000, reviews: 80, comments: 20 },
        rating: 4.4,
        version: '1.0.0',
        lastUpdated: '2024-01-11T00:00:00Z',
    },
    {
        id: '7',
        title: 'Horror Game Template',
        slug: 'horror-game-template',
        shortDescription: 'Complete horror game template with AI enemies',
        type: 'game',
        category: 'horror',
        thumbnail: 'https://picsum.photos/seed/horror/400/300',
        developer: mockDevelopers[0],
        pricing: { type: 'paid', price: 49.99, currency: 'USD' },
        stats: { downloads: 5000, likes: 900, views: 20000, reviews: 150, comments: 40 },
        rating: 4.3,
        version: '2.1.0',
        lastUpdated: '2024-01-09T00:00:00Z',
    },
    {
        id: '8',
        title: 'Ambient Music Pack',
        slug: 'ambient-music-pack',
        shortDescription: 'Atmospheric music tracks for games',
        type: 'asset',
        category: 'audio',
        thumbnail: 'https://picsum.photos/seed/music/400/300',
        developer: mockDevelopers[3],
        pricing: { type: 'free', price: 0, currency: 'USD' },
        stats: { downloads: 75000, likes: 12000, views: 150000, reviews: 2100, comments: 500 },
        rating: 4.8,
        version: '1.2.0',
        lastUpdated: '2024-01-07T00:00:00Z',
    },
];

export const projectService = {
    async getProjects(filter?: ProjectFilter): Promise<PaginatedProjects> {
        await new Promise(resolve => setTimeout(resolve, 500));

        let filtered = [...mockProjects];

        if (filter?.type) {
            filtered = filtered.filter(p => p.type === filter.type);
        }

        if (filter?.category) {
            filtered = filtered.filter(p => p.category === filter.category);
        }

        if (filter?.search) {
            const search = filter.search.toLowerCase();
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(search) ||
                p.shortDescription.toLowerCase().includes(search)
            );
        }

        if (filter?.sortBy) {
            switch (filter.sortBy) {
                case 'trending':
                    filtered.sort((a, b) => b.stats.downloads - a.stats.downloads);
                    break;
                case 'downloads':
                    filtered.sort((a, b) => b.stats.downloads - a.stats.downloads);
                    break;
                case 'rating':
                    filtered.sort((a, b) => b.rating - a.rating);
                    break;
                case 'newest':
                    filtered.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
                    break;
            }
        }

        return {
            projects: filtered,
            total: filtered.length,
            page: 1,
            pageSize: 12,
            totalPages: Math.ceil(filtered.length / 12),
        };
    },

    async getProjectById(id: string): Promise<Project | null> {
        await new Promise(resolve => setTimeout(resolve, 300));

        const project = mockProjects.find(p => p.id === id);
        if (!project) return null;

        // Create full project from summary
        return {
            ...project,
            description: `This is a detailed description for ${project.title}. It includes information about gameplay, features, and more.`,
            tags: ['action', 'adventure', '2d', 'indie'],
            media: [
                { id: '1', type: 'image' as const, url: `https://picsum.photos/seed/${id}-1/800/450`, isPrimary: true },
                { id: '2', type: 'image' as const, url: `https://picsum.photos/seed/${id}-2/800/450`, isPrimary: false },
                { id: '3', type: 'image' as const, url: `https://picsum.photos/seed/${id}-3/800/450`, isPrimary: false },
                { id: '4', type: 'image' as const, url: `https://picsum.photos/seed/${id}-4/800/450`, isPrimary: false },
            ],
            files: [
                { id: '1', name: `${project.title}.zip`, size: 250000000, format: 'zip', downloadUrl: '#' },
            ],
            releaseDate: '2023-06-15T00:00:00Z',
            status: 'published',
            isFeatured: true,
            isTrending: true,
            reviews: [
                {
                    id: '1',
                    user: mockDevelopers[2],
                    projectId: id,
                    rating: 5,
                    title: 'Amazing project!',
                    content: 'This is exactly what I was looking for. Great quality and easy to use.',
                    helpful: 45,
                    notHelpful: 2,
                    isDeveloperResponse: false,
                    createdAt: '2024-01-10T00:00:00Z',
                    updatedAt: '2024-01-10T00:00:00Z',
                },
                {
                    id: '2',
                    user: mockDevelopers[3],
                    projectId: id,
                    rating: 4,
                    title: 'Good but could be better',
                    content: 'Overall good quality, but some features are missing. Would love to see an update.',
                    helpful: 20,
                    notHelpful: 5,
                    isDeveloperResponse: false,
                    createdAt: '2024-01-08T00:00:00Z',
                    updatedAt: '2024-01-08T00:00:00Z',
                },
            ],
        };
    },

    async getFeaturedProjects(): Promise<ProjectSummary[]> {
        await new Promise(resolve => setTimeout(resolve, 300));
        return mockProjects.slice(0, 4);
    },

    async getTrendingProjects(): Promise<ProjectSummary[]> {
        await new Promise(resolve => setTimeout(resolve, 300));
        return mockProjects.sort((a, b) => b.stats.downloads - a.stats.downloads).slice(0, 8);
    },

    async getLatestProjects(): Promise<ProjectSummary[]> {
        await new Promise(resolve => setTimeout(resolve, 300));
        return mockProjects.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()).slice(0, 8);
    },
};

export default projectService;
