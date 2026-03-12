export interface ResearchPaper {
    id: string;
    title: string;
    author: string;
    university: string;
    year: string;
    abstract: string;
    category: 'Politics' | 'Culture' | 'Language' | 'History' | 'Religion' | 'Economics';
    downloadUrl?: string;
    keywords?: string[];
}

export interface LibraryBook {
    id: string;
    title: string;
    author: string;
    year: string;
    publisher: string;
    category: 'Politics' | 'Culture' | 'Language' | 'History' | 'Religion' | 'Economics';
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
        abstract: 'An in-depth analysis of how the Bodo language acted as a primary catalyst for political mobilization and the subsequent formation of the BTC.',
        category: 'Language',
        downloadUrl: '/docs/research/language-identity-2021.pdf',
        keywords: ['language', 'identity', 'sociolinguistics', 'ABSU']
    },
    {
        id: 'paper-agricultural-bodo-2019',
        title: 'Traditional Agricultural Practices of the Bodo Community in Lower Assam',
        author: 'Sunita Narzary',
        university: 'Dibrugarh University',
        year: '2019',
        abstract: 'This research documents the indigenous irrigation systems and crop rotation patterns unique to Bodo farmers.',
        category: 'Culture',
        downloadUrl: '/docs/research/agriculture-bodo-2019.pdf',
        keywords: ['agriculture', 'traditional', 'irrigation', 'farming']
    },
    {
        id: 'paper-martyrs-legacy-2022',
        title: 'Sacrifice and Statehood: The Iconography of Martyrs in Bodoland',
        author: 'Prof. J.K. Mushahary',
        university: 'Jawaharlal Nehru University',
        year: '2022',
        abstract: 'A historical review of the commemoration of figures like Sujit Narzary and Upendra Nath Brahma.',
        category: 'History',
        downloadUrl: '/docs/research/martyrs-legacy-2022.pdf',
        keywords: ['martyrs', 'memory', 'iconography']
    },
    {
        id: 'paper-bathou-religion-2020',
        title: 'Bathouism: The Indigenous Religious Practices of the Bodo People',
        author: 'Dr. Dhaneswar Engtipi',
        university: 'Tezpur University',
        year: '2020',
        abstract: 'An ethnographic study of Bathouism, the traditional religion of the Bodos.',
        category: 'Religion',
        downloadUrl: '/docs/research/bathouism-2020.pdf',
        keywords: ['Bathou', 'religion', 'rituals']
    },
    {
        id: 'paper-bodo-autonomy-2018',
        title: 'The Bodoland Movement and Autonomy Politics in Assam',
        author: 'Dr. B.K. Chim',
        university: 'Gauhati University',
        year: '2018',
        abstract: 'A comprehensive analysis of the political movement for Bodoland statehood.',
        category: 'Politics',
        downloadUrl: '/docs/research/autonomy-2018.pdf',
        keywords: ['autonomy', 'BTC', 'statehood', 'political movement']
    },
    {
        id: 'paper-women-bodo-movement-2021',
        title: 'Women in the Bodoland Movement: Roles, Sacrifices, and Representations',
        author: 'Dr. Moushumi Swargiary',
        university: 'Bodoland University',
        year: '2021',
        abstract: 'This paper examines the contributions of women in the Bodoland movement.',
        category: 'Politics',
        downloadUrl: '/docs/research/women-movement-2021.pdf',
        keywords: ['women', 'gender', 'movement', 'sacrifice']
    },
    {
        id: 'paper-bodo-literature-2017',
        title: 'Evolution of Bodo Literature: From Oral Traditions to Digital Age',
        author: 'Prof. Birendranath Brahma',
        university: 'Cotton University',
        year: '2017',
        abstract: 'A literary analysis tracing the development of Bodo literature.',
        category: 'Language',
        downloadUrl: '/docs/research/literature-2017.pdf',
        keywords: ['literature', 'oral traditions', 'Bodo language', 'writing']
    },
    {
        id: 'paper-economic-bodo-2019',
        title: 'Economic Development and Poverty Alleviation in Bodoland',
        author: 'Dr. Prem Singh Mushahary',
        university: 'Indian Institute of Technology Guwahati',
        year: '2019',
        abstract: 'An economic assessment of the Bodoland region.',
        category: 'Economics',
        downloadUrl: '/docs/research/economic-2019.pdf',
        keywords: ['economy', 'development', 'poverty', 'sustainable']
    },
    {
        id: 'paper-bodo-diaspora-2022',
        title: 'Diaspora and Identity: Bodo Communities Outside Bodoland',
        author: 'Dr. G. Brahma',
        university: 'Delhi University',
        year: '2022',
        abstract: 'A sociological study of Bodo diaspora communities.',
        category: 'Culture',
        downloadUrl: '/docs/research/diaspora-2022.pdf',
        keywords: ['diaspora', 'identity', 'migration', 'culture']
    },
    {
        id: 'paper-bodo-folk-songs-2020',
        title: 'Oral Traditions: Bodo Folk Songs and Their Cultural Significance',
        author: 'Dr. N. K. Narzary',
        university: 'Tezpur University',
        year: '2020',
        abstract: 'Documentation and analysis of traditional Bodo folk songs.',
        category: 'Culture',
        downloadUrl: '/docs/research/folk-songs-2020.pdf',
        keywords: ['folk songs', 'oral traditions', 'music', 'heritage']
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
        description: 'A foundational text exploring the origins of the Bodo-Kachari race and their migration patterns.'
    },
    {
        id: 'book-bodo-literature-1',
        title: 'Modern Bodo Poetry: An Anthology',
        author: 'Dharanidhar Wary',
        year: '2005',
        publisher: 'Sahitya Akademi',
        category: 'Culture',
        description: 'A curated collection of poems reflecting the struggle and beauty of Bodo life.'
    },
    {
        id: 'book-bathou-religion',
        title: 'Bathou Dharam: The Way of the Bathou',
        author: 'Ratneswar Basumatary',
        year: '1995',
        publisher: 'Bodo Academy',
        category: 'Religion',
        description: 'A comprehensive guide to the Bathou religious tradition.'
    }
];
