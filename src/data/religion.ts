/**
 * Bodo Religious Articles Data
 * Comprehensive religious content for the Bodo Research Memorial
 */

export interface ReligionArticle {
    id: string;
    slug: string;
    title: string;
    summary: string;
    content: string;
    category: 'bathouism' | 'kherai' | 'brahmadharma' | 'buddhism' | 'christianity';
    imageUrl?: string;
    tags: string[];
    readingTime: number;
}

export const ALL_RELIGION_ARTICLES: ReligionArticle[] = [
    {
        id: 'bathouism',
        slug: 'bathouism',
        title: 'Bathouism - The Indigenous Bodo Religion',
        summary: 'Bathouism is the indigenous religion of the Bodo people, centered around the worship of Bathou (the five-in-one deity). It features unique rituals, sacred symbols, and a rich oral tradition.',
        content: `Bathouism (also spelled Bathou) is the indigenous religious tradition of the Bodo people, representing one of the oldest indigenous faiths of Northeast India. The word "Bathou" comes from the Bodo language, meaning "five" (ba) and "principle" (thou), referring to the five principles or elements that constitute the supreme deity.

The central deity in Bathouism is Bathou, the supreme creator god who represents the unity of five elements: earth, water, fire, air, and sky. Bathou is considered the source of all life and the ultimate reality that pervades the universe.

The sacred Siju (Euphorbia species) plant is central to Bathou worship. This plant is considered the living altar and is planted in front of every Bathou household shrine. The Siju represents fertility, prosperity, and the connection between the mortal world and the divine.

Mainao is another important deity in the Bathou pantheon - the goddess of paddy fields and prosperity. She is worshipped during harvest festivals and is believed to ensure agricultural abundance.

The religious hierarchy in Bathouism includes:
- "Deodhai" - male priests who conduct major ceremonies
- "Nankhang" - traditional priests who preserve religious texts
- "Douma" - female priestesses who assist in rituals

Key rituals in Bathouism include daily prayers, seasonal festivals, and life-cycle ceremonies. The "Afsiri" rituals are performed to honor ancestors and seek their blessings. These rituals involve offerings of rice, flowers, and traditionally brewed rice beer.

Bathouism has faced challenges over the centuries, including pressure from outside religious influences. However, the religion has maintained its core beliefs and continues to be practiced by a significant portion of the Bodo population. Efforts to preserve and document Bathou traditions are ongoing, with the recognition of its cultural importance by various organizations.`,
        category: 'bathouism',
        tags: ['bathouism', 'indigenous-religion', 'tradition', 'deity', 'rituals'],
        readingTime: 6
    },
    {
        id: 'kherai-puja',
        slug: 'kherai-puja',
        title: 'Kherai Puja - The Grand Bathou Festival',
        summary: 'Kherai is the most important religious ceremony in Bathouism, a multi-day festival featuring traditional rituals, tiger dances, buffalo sacrifices, and community participation.',
        content: `Kherai Puja is the most significant and elaborate religious ceremony in the Bathou tradition. This grand festival is celebrated annually, typically during the post-harvest season (November-December), and can last from four to seven days depending on the community.

The festival is dedicated to the worship of Bathou and other deities, particularly Mainao, the goddess of prosperity. It is a time of communal celebration, religious observance, and cultural expression.

The structure of Kherai Puja typically includes:

Day 1 - "Kherai Gonkor" (Opening): The priests (Deodhai) begin preparations, and the community gathers for the first rituals. Traditional items are collected for the ceremonies.

Day 2-3 - "Gobra" (Tiger Dance): One of the most distinctive aspects of Kherai is the "Gobra" or tiger dance. Young men dress in tiger costumes made of bamboo and cloth, with elaborate face painting. They dance to the beats of traditional drums, representing the tiger spirit that guards the village.

Day 4-5 - "Bathou Puja": Major rituals are performed, including prayers to Bathou, Mainao, and other deities. The Deodhai recite ancient prayers and mantras that have been passed down through generations.

Day 6-7 - "Mwswi" (Buffalo Sacrifice): The most controversial aspect of Kherai involves the sacrifice of buffaloes. The sacrificed animals are shared among the community, with portions given to the priest and the rest distributed to attendees.

During the festival, strict dietary restrictions are observed. Devotees abstain from certain foods and engage in prayer and meditation. The entire village participates, with preparations starting weeks in advance.

Kherai Puja represents the synthesis of Bodo religious beliefs, agricultural cycles, and community values. It serves as a time for spiritual renewal, social bonding, and cultural preservation.

In recent years, there have been discussions about modifying certain aspects of the festival, particularly the animal sacrifice, in response to modern sensibilities while maintaining the core religious and cultural significance.`,
        category: 'kherai',
        tags: ['kherai', 'festival', 'bathouism', 'ceremony', 'tradition'],
        readingTime: 6
    },
    {
        id: 'brahma-dharma',
        slug: 'brahma-dharma',
        title: 'Brahma Dharma - Religious Reform Movement',
        summary: 'Brahma Dharma is a reform movement within Bathouism founded by Kalicharan Brahma in the late 19th century, emphasizing monotheism and social reform.',
        content: `Brahma Dharma is a religious reform movement within Bathouism that emerged in the late 19th century, founded by the visionary social reformer Kalicharan Brahma (1867-1945). The movement sought to modernize and purify the traditional Bathou religious practices while preserving the core spiritual beliefs of the Bodo people.

Kalicharan Brahma was deeply influenced by the Brahmo Samaj movement, a reformist Hindu organization that emphasized monotheism, social reform, and education. He sought to apply similar principles to Bodo religious practices, creating a reform movement that would address the changing social circumstances while maintaining Bodo cultural identity.

Key Principles of Brahma Dharma:

Monotheism: Brahma Dharma emphasizes the worship of a single supreme deity, Bathou, as the source of all creation. This represents a simplification of the traditional Bathou pantheon while maintaining the core belief in a supreme creator.

Abolition of Animal Sacrifice: One of the most significant reforms was the abolition of animal sacrifice in religious ceremonies. Brahma Dharma instead emphasizes prayer, offerings of flowers, and vegetarian offerings.

Moral Living: The movement places strong emphasis on ethical living, including honesty, compassion, and community service. Followers are encouraged to lead disciplined lives dedicated to spiritual progress.

Education: Brahma Dharma advocates for education and literacy as essential for the advancement of the Bodo community. Schools and learning centers were established in association with the movement.

Social Reform: The movement addressed social issues such as caste discrimination, alcoholism, and other social evils affecting the Bodo community.

Impact and Legacy:
Brahma Dharma continues to exist as a distinct religious tradition practiced by some Bodo communities. The movement played an important role in the social and cultural development of the Bodo people, bridging traditional beliefs with modern values. Today, Brahma Dharma temples (named "Brahma Sangha") can be found in various Bodo-inhabited areas of Assam.`,
        category: 'brahmadharma',
        tags: ['brahma-dharma', 'reform', 'social-change', 'kalicharan-brahma', 'bathouism'],
        readingTime: 6
    },
    {
        id: 'buddhism',
        slug: 'buddhism',
        title: 'Buddhism Among the Bodo People',
        summary: 'An exploration of Buddhist practices among Bodo communities, including historical influences and contemporary Theravada Buddhist traditions in the region.',
        content: `While Bathouism remains the indigenous religion of the Bodo people, Buddhism has also influenced portions of the Bodo community, particularly in historical context and through regional interactions with other Northeast Indian communities.

The presence of Buddhist traditions among certain Bodo groups can be traced to historical interactions with Buddhist kingdoms in Southeast Asia and the spread of Theravada Buddhism in Northeast India. Some Bodo communities in areas adjacent to Buddhist-majority regions have incorporated Buddhist elements into their religious practices.

Historical Evidence:
Historical evidence suggests that Buddhist ideas may have influenced the philosophical concepts in Bathouism, particularly the emphasis on spiritual balance and the concept of interconnectedness. Some scholars note similarities between Bathouist beliefs and certain Buddhist principles.

Contemporary Buddhist Practices:
In contemporary times, a small number of Bodo people identify as Buddhists, following the Theravada tradition. These communities maintain Buddhist practices including:
- Meditation and mindfulness practices
- Veneration of the Buddha
- Observance of Buddhist festivals like Buddha Purnima
- Support for Buddhist monasteries and temples

Syncretic Practices:
The interaction between indigenous Bodo traditions and Buddhism has created unique syncretic practices in some areas. This includes the presence of Buddhist-style prayer flags, consultation with Buddhist monks for certain ceremonies, and incorporation of Buddhist symbols.

Interfaith Relations:
Relations between Buddhist Bodos and followers of Bathouism or Christianity are generally harmonious, reflecting the pluralistic nature of Bodo society. Many families may have members following different religions while maintaining shared cultural practices.

Academic Interest:
Academic interest in Bodo Buddhist traditions continues to grow, with researchers exploring the historical connections and contemporary expressions of Buddhism among the Bodo people.`,
        category: 'buddhism',
        tags: ['buddhism', 'theravada', 'tradition', 'religious-pluralism'],
        readingTime: 4
    },
    {
        id: 'christianity',
        slug: 'christianity',
        title: 'Christianity Among the Bodo People',
        summary: 'An examination of the spread of Christianity among the Bodo community, including missionary activities, cultural impact, and contemporary Bodo Christian communities.',
        content: `Christianity arrived in Bodo areas through missionary activities starting in the 19th century. Missionaries, primarily from European and American Protestant churches, established schools and healthcare facilities alongside their religious work. This led to conversions among some Bodo communities, particularly in areas with missionary presence.

Historical Background:
The arrival of Christianity in the Bodo regions can be traced to the early 19th century when American Baptist missionaries began their work in Assam. They established missions in various parts of Assam, including areas inhabited by the Bodo people. Missionaries like Nathan Brown and Miles Bronson were among the early pioneers who introduced Christianity to the region.

Missionary Activities:
Missionaries established schools, colleges, and healthcare facilities in Bodo areas. These institutions played a significant role in education and healthcare development in the region. The promise of education and social services attracted converts to Christianity.

Impact on Bodo Society:
The introduction of Christianity brought significant changes to Bodo society:
- Introduction of Western education
- Development of Bodo literature in Roman script
- Healthcare improvements through missionary hospitals
- Social reforms including abolition of certain traditional practices

Contemporary Bodo Christianity:
Today, there are significant Christian communities among the Bodo population. Bodo Christians have developed their own distinctive identity, combining Christian religious practices with Bodo cultural elements. They continue to maintain Bodo language and some cultural traditions while following Christian faith.

Denominations:
Various Christian denominations are present among Bodo Christians, including:
- Baptist churches
- Presbyterian churches
- Catholic churches
- Pentecostal churches

Cultural Preservation:
Bodo Christian communities have worked to preserve Bodo language and cultural elements within their religious practices. Many churches incorporate Bodo language in services, and Bodo Christian literature has been developed.

Relations with Other Communities:
Relations between Christian Bodos and followers of Bathouism or other religions are generally harmonious, reflecting the pluralistic nature of Bodo society.`,
        category: 'christianity',
        tags: ['christianity', 'missionaries', 'religious-pluralism', 'education'],
        readingTime: 5
    }
];

// Export for backward compatibility
export const religionArticles = ALL_RELIGION_ARTICLES;
