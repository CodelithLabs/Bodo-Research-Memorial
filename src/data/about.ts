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
        subtitle: 'Preserving History, Celebrating Culture',
        description: 'A comprehensive digital archive dedicated to documenting and preserving the rich heritage, history, and culture of the Bodo people of Assam, India.'
    },
    mission: {
        title: 'Our Mission',
        content: `The Bodo Research Memorial is dedicated to the preservation, documentation, and promotion of Bodo culture, history, and heritage. Our mission is to create a comprehensive digital archive that captures the essence of Bodo identity and makes it accessible to future generations.

We strive to:
- Document and preserve Bodo historical records, oral traditions, and cultural practices
- Promote awareness and understanding of Bodo history and culture
- Support academic research on Bodo studies
- Foster community engagement and cultural exchange
- Preserve the Bodo language and literary heritage`
    },
    history: {
        title: 'Our History',
        content: `The Bodo Research Memorial was established to address the growing need for a centralized repository of Bodo cultural and historical knowledge. The Bodo people, one of the major ethnic groups of Assam, have a rich and diverse heritage that spans centuries.

Our journey began with the recognition that much of Bodo history and culture was scattered across various sources, with the risk of being lost to time. We set out to create a comprehensive digital platform that would bring together historical records, cultural documentation, research papers, and multimedia content.

Over the years, we have collaborated with scholars, community leaders, historians, and cultural experts to build an extensive archive that serves as a valuable resource for researchers, students, and anyone interested in Bodo culture.`
    },
    sections: [
        {
            id: 'origin',
            title: 'The Bodo People',
            content: `The Bodos are an indigenous ethnic group primarily residing in the Brahmaputra valley of Assam, India. They are one of the oldest ethnic groups in the region, with a rich cultural heritage that includes unique traditions, customs, and a distinctive language.

Historically, the Bodos were known as the Bodo-Kacharis and ruled over parts of Assam in ancient times. Their culture has evolved over centuries while maintaining its unique identity. The Bodo language belongs to the Tibeto-Burman family and has its own script.

Today, the Bodo population is concentrated primarily in the Bodoland Territorial Areas District (BTAD) in Assam, with significant populations in other parts of Assam and neighboring states.`
        },
        {
            id: 'culture',
            title: 'Bodo Culture',
            content: `Bodo culture is characterized by its rich traditions in music, dance, festivals, and cuisine. The Bwisagu festival marks the traditional New Year, while the Bagurumba dance is a iconic cultural expression performed during various celebrations.

Traditional Bodo attire includes the Dokhona for women and Gamsa for men, featuring distinctive geometric patterns known as Aronai. The cuisine features unique dishes like Napham (fermented fish paste) and Gwran (rice beer).

Bathouism is the indigenous religion of the Bodo people, centered around the worship of Bathou, the supreme deity representing five elements. The Kherai Puja is the most important religious ceremony in the Bathou tradition.`
        },
        {
            id: 'achievements',
            title: 'Our Achievements',
            content: `Since our inception, we have achieved significant milestones in preserving and promoting Bodo culture:

- Established a comprehensive digital archive of Bodo historical documents
- Created an extensive collection of Bodo oral traditions and folk songs
- Documented traditional Bodo practices, ceremonies, and rituals
- Published research papers on various aspects of Bodo history and culture
- Developed educational resources for schools and universities
- Organized cultural events and community engagement programs
- Created an online platform accessible to researchers worldwide
- Built partnerships with academic institutions and cultural organizations`
        },
        {
            id: 'future',
            title: 'Future Vision',
            content: `Looking ahead, the Bodo Research Memorial aims to expand its collection and reach:

- Digitize more historical documents and manuscripts
- Create interactive multimedia experiences for cultural education
- Develop partnerships with international universities for research
- Expand our oral history collection
- Launch educational programs for youth
- Preserve endangered cultural practices
- Create virtual museum exhibits
- Support emerging Bodo scholars and researchers`
        }
    ] as AboutSection[],
    features: [
        {
            title: 'Historical Archives',
            description: 'Extensive collection of historical documents, photographs, and records'
        },
        {
            title: 'Cultural Documentation',
            description: 'Comprehensive coverage of Bodo traditions, festivals, and customs'
        },
        {
            title: 'Research Resources',
            description: 'Academic papers, articles, and scholarly works on Bodo studies'
        },
        {
            title: 'Oral History',
            description: 'Recorded interviews and folk traditions from community members'
        },
        {
            title: 'Digital Preservation',
            description: 'Modern digital techniques to preserve heritage for future generations'
        },
        {
            title: 'Community Engagement',
            description: 'Programs to involve community in preserving their heritage'
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
