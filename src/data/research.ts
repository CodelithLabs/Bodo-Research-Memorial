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
    journal?: string;
    volume?: string;
    issn?: string;
    doi?: string;
    url?: string;
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
    },
    {
        id: 'paper-descriptive-boro-language-1977',
        title: 'A Descriptive Analysis of the Boro Language',
        author: 'Pramod Chandra Bhattacharya',
        university: 'Gauhati University',
        year: '1977',
        abstract: 'The foundational descriptive grammar of the Bodo (Boro) language — the first comprehensive academic treatment of the language\'s phonological system, morphological structure, and syntactic organization. Published by Gauhati University\'s Department of Publication, this monograph established the academic framework for all subsequent Bodo linguistic scholarship.',
        category: 'Language',
        journal: 'Department of Publication, Gauhati University',
        keywords: ['Bodo language', 'Boro', 'grammar', 'phonology', 'morphology', 'Tibeto-Burman', 'descriptive linguistics']
    },
    {
        id: 'paper-intro-boro-language-2005',
        title: 'An Introduction to the Boro Language',
        author: 'Phukan Basumatary',
        university: 'Mittal Publications, New Delhi',
        year: '2005',
        abstract: 'An accessible introduction to the Bodo (Boro) language covering its phonological system, morphological categories, and basic syntactic structures. Published by Mittal Publications, New Delhi (vi+99pp.), this work provides an entry point for students and researchers approaching the Bodo language for the first time.',
        category: 'Language',
        keywords: ['Bodo', 'Boro', 'language introduction', 'Devanagari', 'scheduled language']
    },
    {
        id: 'paper-verbal-semantics-bodo-2017',
        title: 'Verbal Semantics in a Tibeto-Burman Language: The Bodo Verb',
        author: 'Prafulla Basumatary',
        university: 'Peter Lang AG (Contemporary Studies in Descriptive Linguistics)',
        year: '2017',
        abstract: 'A comprehensive study of Bodo verb semantics within the Tibeto-Burman linguistic framework, published by Peter Lang AG in the Contemporary Studies in Descriptive Linguistics series. The work analyses the semantic structure of Bodo verbs including aspect marking, evidentiality, and tense categories.',
        category: 'Language',
        journal: 'Contemporary Studies in Descriptive Linguistics',
        keywords: ['Bodo verb', 'verbal semantics', 'Tibeto-Burman', 'aspect', 'tense', 'evidentiality']
    },
    {
        id: 'paper-bodo-language-globalisation-2015',
        title: 'Bodo Language in Globalisation and Its Survival: An Overview',
        author: 'Multiple authors',
        university: 'Academia.edu',
        year: '2015',
        abstract: 'An analysis of the threats and opportunities facing the Bodo language in the context of globalisation and the growing dominance of English and Hindi in Assam. The paper examines how socio-political role played by different tribal political and non-political organisations has helped construct Bodo ethnic assertion and maintained language vitality.',
        category: 'Language',
        url: 'https://www.academia.edu/18553783/BODO_LANGUGAE_IN_GLOBALISATION_AND_IT_S_SURVIVAL_AN_OVERVIEW',
        keywords: ['Bodo language', 'language survival', 'globalisation', 'linguistic imperialism', 'Eighth Schedule', 'language policy']
    },
    {
        id: 'paper-phonology-dimasa-bodo-2013',
        title: 'Phonology and Morphology of Bodo and Dimasa: A Comparative Study',
        author: 'Partima Brahma',
        university: 'Assam University, Silchar',
        year: '2013',
        abstract: 'A doctoral dissertation (xiv+391pp.) submitted to Assam University, Silchar, presenting a detailed comparative study of the phonological and morphological systems of the Bodo and Dimasa languages — two closely related Tibeto-Burman languages of Northeast India.',
        category: 'Language',
        keywords: ['Bodo', 'Dimasa', 'phonology', 'morphology', 'comparative linguistics', 'Tibeto-Burman']
    },
    {
        id: 'paper-bodo-traditional-instruments-2017',
        title: 'The Traditional Musical Instruments of the Bodos',
        author: 'Nijra Brahma',
        university: 'Asian Journal of Research in Social Sciences and Humanities',
        year: '2017',
        abstract: 'A systematic documentation of the traditional musical instruments of the Bodo people, including the six instruments subsequently granted Geographical Indication tags by the Government of India in 2024: the Kham, Sifung, Serja, Thorkha, Gongona, and Jotha.',
        category: 'Culture',
        journal: 'Asian Journal of Research in Social Sciences and Humanities',
        volume: 'Volume 7, No. 7',
        doi: '10.5958/2249-7315.2017.00382.3',
        keywords: ['Bodo musical instruments', 'Kham', 'Sifung', 'Serja', 'Gongona', 'Jotha', 'Thorkha', 'GI tag']
    },
    {
        id: 'paper-origin-bodo-historical-2021',
        title: 'Origin of Bodo: A Historical Overview',
        author: 'Multiple authors',
        university: 'JETIR (Journal of Emerging Technologies and Innovative Research)',
        year: '2021',
        abstract: 'A historical overview of Bodo origins, migrations, and early settlement in the Brahmaputra valley. Traces the Bodo as part of the Tibeto-Burman linguistic family and documents the Bodo-Kachari kingdom with Dimapur as its capital.',
        category: 'History',
        journal: 'JETIR',
        volume: 'JETIR2102175',
        issn: '2349-5162',
        url: 'https://www.jetir.org/papers/JETIR2102175.pdf',
        keywords: ['Bodo origins', 'Bodo-Kachari', 'Tibeto-Burman', 'migration', 'Dimapur', 'British rule', 'Kamarupa']
    },
    {
        id: 'paper-bodo-movement-past-present-2019',
        title: 'The Bodo Movement: Past and Present',
        author: 'Multiple authors',
        university: 'JETIR (Journal of Emerging Technologies and Innovative Research)',
        year: '2019',
        abstract: 'A comprehensive analysis of the Bodo political movement from its origins through the post-BTC period. Documents the 1987 "Divide Assam 50-50" agitation, the 1993 Bodo Accord, the formation of NDFB, and the 2003 BTC accord.',
        category: 'Politics',
        journal: 'JETIR',
        volume: 'Volume 6, Issue 6, June 2019',
        issn: '2349-5162',
        url: 'https://www.jetir.org/papers/JETIR1906D67.pdf',
        keywords: ['Bodo movement', 'ABSU', 'BTC accord', 'NDFB', 'Bodoland', 'Hagrama Mohilary', 'BLT']
    },
    {
        id: 'paper-bodo-culture-religion-2020',
        title: 'The Bodo Community of Assam: Culture and Religion',
        author: 'Multiple authors',
        university: 'IJRAR (International Journal of Research and Analytical Reviews)',
        year: '2020',
        abstract: 'An ethnographic study of the culture and religion of the Bodo-Kacharis of Assam, focusing on their indigenous religion Bathouism, its five-point theology (Ba = five divine principles: fire, water, earth, air, sky).',
        category: 'Religion',
        journal: 'IJRAR',
        issn: '2349-5138',
        url: 'https://www.ijrar.org/papers/IJRAR2002443.pdf',
        keywords: ['Bodo', 'Bathouism', 'culture', 'religion', 'Bodo-Kachari', 'Northeast India', 'Mongoloid']
    },
    {
        id: 'paper-bodo-culture-identity-2025',
        title: 'Bodo Culture and Identity: An Ethnographic Study',
        author: 'Bishal Patangia',
        university: 'Ethics Press',
        year: '2025',
        abstract: 'Published in February 2025, this ethnographic study offers a comprehensive deep-dive into the Bodo community — one of the indigenous tribes of Northeast India — exploring nuances of Bodo traditions, language, art, music, and religious practices.',
        category: 'Culture',
        journal: 'Ethics Press',
        keywords: ['Bodo ethnography', 'cultural identity', 'indigenous studies', 'Northeast India', 'anthropology'],
        url: 'https://ethicspress.com/products/bodo-culture-and-identity'
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
