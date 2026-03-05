export interface ResearchPaper {
    id: string;
    title: string;
    author: string;
    university: string;
    year: string;
    abstract: string;
    category: 'Politics' | 'Culture' | 'Language' | 'History';
    downloadUrl?: string;
}

export interface LibraryBook {
    id: string;
    title: string;
    author: string;
    year: string;
    publisher: string;
    category: 'Politics' | 'Culture' | 'Language' | 'History';
    coverUrl?: string;
    description: string;
}

export const researchPapers: ResearchPaper[] = [
    {
        id: 'paper-bodo-identity-2021',
        title: 'Language, Identity and the Bodo Movement: A Sociolinguistic Study',
        author: 'Dr. Ranjit Basumatary',
        university: 'Bodoland University',
        year: '2021',
        abstract: 'An in-depth analysis of how the Bodo language acted as a primary catalyst for political mobilization and the subsequent formation of the BTC. The study explores the shift from Roman to Devanagari script and its cultural implications.',
        category: 'Language',
        downloadUrl: '/docs/research/language-identity-2021.pdf'
    },
    {
        id: 'paper-agricultural-bodo-2019',
        title: 'Traditional Agricultural Practices of the Bodo Community in Lower Assam',
        author: 'Sunita Narzary',
        university: 'Dibrugarh University',
        year: '2019',
        abstract: 'This research documents the indigenous irrigation systems (Dong) and crop rotation patterns unique to Bodo farmers, analyzing their sustainability in the face of modern climate challenges.',
        category: 'Culture',
        downloadUrl: '/docs/research/agriculture-bodo-2019.pdf'
    },
    {
        id: 'paper-martyrs-legacy-2022',
        title: 'Sacrifice and Statehood: The Iconography of Martyrs in Bodoland',
        author: 'Prof. J.K. Mushahary',
        university: 'Jawaharlal Nehru University',
        year: '2022',
        abstract: 'A historical review of the commemoration of figures like Sujit Narzary and Upendra Nath Brahma, and how their legacies are constructed in the public memory of the Bodo people.',
        category: 'History',
        downloadUrl: '/docs/research/martyrs-legacy-2022.pdf'
    }
];

export const libraryBooks: LibraryBook[] = [
    {
        id: 'book-bodo-history-1',
        title: 'The Bodos: Children of Bhullumbutter',
        author: 'Kameshwar Brahma',
        year: '1989',
        publisher: 'Heritage Publications',
        category: 'History',
        description: 'A foundational text exploring the origins of the Bodo-Kachari race and their migration patterns across the Brahmaputra valley.'
    },
    {
        id: 'book-bodo-literature-1',
        title: 'Modern Bodo Poetry: An Anthology',
        author: 'Dharanidhar Wary',
        year: '2005',
        publisher: 'Sahitya Akademi',
        category: 'Culture',
        description: 'A curated collection of poems reflecting the struggle, beauty, and resilience of Bodo life in the late 20th century.'
    }
];
