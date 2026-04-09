/**
 * About Page Data
 * Content for the Bodo Research Memorial website
 */

export interface AboutSection {
    id: string;
    title: string;
    content: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    imageUrl?: string;
}

export const ABOUT_CONTENT = {
    hero: {
        title: 'Bodo Research Memorial',
        subtitle: 'Digital Research Platform for Bodo Martyrs',
        description: 'A dedicated digital research platform honoring Bodo leaders who sacrificed their lives for the Motherland, preserving their stories, documents, and legacy for future generations.'
    },
    mission: {
        title: 'Our Mission',
        content: `The Bodo Research Memorial is dedicated to documenting and honoring Bodo leaders who sacrificed their lives for the Motherland. Our mission is to build a trusted digital research platform that preserves their biographies, historical context, primary sources, and community memory.

We strive to:
- Preserve verified biographies, timelines, and archival records of Bodo leaders and martyrs
- Curate primary sources such as letters, speeches, photographs, and newspaper clippings
- Provide context on movements, organizations, and community struggles tied to their sacrifice
- Support academic and community-led research with citations and transparent sources
- Enable respectful community contributions and remembrance`
    },
    history: {
        title: 'Our History',
        content: `The Bodo Research Memorial began with a simple goal: ensure that the sacrifices of Bodo leaders are preserved with accuracy, dignity, and depth. Many of their stories were scattered across family archives, local newspapers, oral histories, and personal collections.

We set out to create a centralized digital research platform that brings these sources together, validates them, and makes them accessible to researchers, students, and the wider community. Through collaboration with scholars, community historians, and families, the archive continues to grow with verified records and respectful remembrance.`
    },
    sections: [
        {
            id: 'origin',
            title: 'Why This Archive Matters',
            content: `The sacrifices of Bodo leaders shaped the political, cultural, and social destiny of the community. Yet many of their biographies remain fragmented, unverified, or inaccessible to the public.

This platform exists to preserve their legacies with care, documenting what they stood for, the movements they led, and the historical context around their lives.`
        },
        {
            id: 'culture',
            title: 'What We Collect',
            content: `We prioritize primary sources and verified records, including biographies, timelines, oral histories, family archives, photographs, letters, court documents, and published research.

Each record includes citations and contextual notes to help researchers understand the historical setting and the impact of each leader's sacrifice.`
        },
        {
            id: 'achievements',
            title: 'Our Achievements',
            content: `Since our inception, we have achieved significant milestones in documenting Bodo leaders and martyrs:

- Built a growing digital archive of verified leader biographies
- Cataloged primary sources from families, local publications, and institutions
- Established citation standards for transparent research use
- Developed resources for students and researchers focused on Bodo leadership history
- Partnered with scholars, community historians, and cultural organizations`
        },
        {
            id: 'future',
            title: 'Future Vision',
            content: `Looking ahead, the Bodo Research Memorial aims to expand its leader-focused archive:

- Digitize additional documents and family-held materials
- Build deeper timelines of movements and organizations tied to the leaders
- Expand oral history interviews and community testimony
- Create research toolkits and curriculum resources
- Support emerging Bodo scholars and community archivists`
        }
    ] as AboutSection[],
    features: [
        {
            title: 'Leader Biographies',
            description: 'Verified biographies and timelines for Bodo leaders and martyrs'
        },
        {
            title: 'Primary Sources',
            description: 'Letters, speeches, photographs, and archival documents'
        },
        {
            title: 'Research Resources',
            description: 'Cited articles, papers, and scholarly work on Bodo leadership history'
        },
        {
            title: 'Oral History',
            description: 'Recorded interviews and testimony from families and communities'
        },
        {
            title: 'Digital Preservation',
            description: 'Reliable digital preservation of sources and testimony'
        },
        {
            title: 'Community Contributions',
            description: 'Respectful submission process for documents and memories'
        }
    ]
};

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 'founder',
        name: 'Dr. Ranjit Basumatary',
        role: 'Founder & Director',
        bio: 'Dr. Basumatary is a renowned scholar in Bodo studies with over 20 years of experience in cultural research and documentation.'
    },
    {
        id: 'research-head',
        name: 'Prof. Birendranath Brahma',
        role: 'Head of Research',
        bio: 'Prof. Brahma is a distinguished academic specializing in Bodo history and language with numerous publications to his credit.'
    },
    {
        id: 'cultural-head',
        name: 'Dr. Moushumi Swargiary',
        role: 'Cultural Programs Director',
        bio: 'Dr. Swargiary leads our cultural documentation initiatives and has conducted extensive fieldwork on Bodo traditions.'
    },
    {
        id: 'tech-lead',
        name: 'Mr. Priyankur Narzary',
        role: 'Technology Lead',
        bio: 'Mr. Narzary manages our digital archive and online platforms, bringing technical expertise to preserve cultural heritage.'
    }
];

// Export for backward compatibility
export const aboutContent = ABOUT_CONTENT;
