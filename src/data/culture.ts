/**
 * Bodo Cultural Articles Data
 * Comprehensive cultural content for the Bodo Research Memorial
 */

export interface CultureArticle {
    id: string;
    slug: string;
    title: string;
    summary: string;
    content: string;
    category: 'festival' | 'dance' | 'textiles' | 'cuisine' | 'music' | 'architecture' | 'traditions' | 'games';
    imageUrl?: string;
    tags: string[];
    readingTime: number;
}

export const ALL_CULTURE_ARTICLES: CultureArticle[] = [
    {
        id: 'bwisagu-festival',
        slug: 'bwisagu-festival',
        title: 'Bwisagu Festival - Bodo New Year',
        summary: 'Bwisagu is the traditional New Year festival of the Bodo people, celebrated in April. It marks the beginning of the agricultural cycle and is one of the most important cultural festivals in the Bodo calendar.',
        content: `Bwisagu (also spelled Bisu) is the traditional New Year festival of the Bodo people, celebrated annually in the month of Baisakh (April). This festival marks the beginning of the agricultural cycle and is one of the most significant cultural celebrations for the Bodo community.

The festival spans five days and is characterized by various rituals and celebrations. The first day, known as "Bwisagu Musra" involves cleaning the house and preparing traditional delicacies. People wear new clothes and apply "Mao" (a red pigment made from rice beer) on their foreheads as a blessing.

Traditional activities during Bwisagu include the "Bathou" puja (worship of the deity Bathou), community feasts, and traditional dance performances. Young people gather in groups to sing Bwisagu songs and seek blessings from elders.

The agricultural significance of Bwisagu cannot be overstated. It coincides with the sowing season, and farmers pray for good harvests. The festival also serves as a time for community bonding and renewal of social ties.

Regional variations exist in how Bwisagu is celebrated across different Bodo-inhabited areas of Assam, but the core themes of renewal, prosperity, and community remain consistent.`,
        category: 'festival',
        tags: ['new-year', 'festival', 'agriculture', 'tradition', 'community'],
        readingTime: 5
    },
    {
        id: 'bagurumba-dance',
        slug: 'bagurumba-dance',
        title: 'Bagurumba Dance - The Butterfly Dance',
        summary: 'Bagurumba is the traditional group dance of the Bodo people, performed during festivals and special occasions. The dance mimics butterfly movements and is performed wearing traditional attire.',
        content: `Bagurumba (also known as Bagurumba or Bagro) is the traditional group dance of the Bodo people, considered one of the most beautiful and iconic cultural expressions of the community. The dance gets its name from the Bodo word for butterfly, as the movements beautifully mimic the graceful flight and fluttering of butterflies.

The dance is typically performed during important festivals like Bwisagu, Hagro, and other community celebrations. It is exclusively performed by women, who dress in traditional Bodo attire including the "Dokhona" (traditional wraparound) and various silver ornaments.

The dance formation typically involves a circle or semi-circle of dancers, with one or two lead singers at the center. The choreography involves synchronized movements including hand waving, stepping, and turning, all performed to traditional drum beats and folk songs.

The traditional attire worn during Bagurumba includes the Dokhona (a colorful wraparound cloth), the Gamsa (a kind of shawl), and various silver jewelry including necklaces, earrings, and armbands. The dancers also wear traditional hairstyles adorned with flowers and ornaments.

In recent years, there have been efforts to get Bagurumba recognized as an Intangible Cultural Heritage by UNESCO. The dance has also gained recognition beyond Assam and is performed at various national and international cultural forums.`,
        category: 'dance',
        tags: ['dance', 'tradition', 'butterfly', 'women', 'heritage'],
        readingTime: 6
    },
    {
        id: 'bodo-textiles',
        slug: 'bodo-textiles',
        title: 'Bodo Textiles - Dokhona and Gamsa',
        summary: 'The traditional textiles of the Bodo people, including the Dokhona worn by women and Gamsa worn by men, feature distinctive geometric patterns and are crafted using traditional loom weaving techniques.',
        content: `Bodo textiles represent a rich tradition of weaving and design that has been passed down through generations. The two most iconic garments are the Dokhona (women's wraparound) and Gamsa (men's cloth), each with its own distinctive patterns and cultural significance.

The Dokhona is the traditional attire for Bodo women. It is a long wraparound cloth that is wrapped around the body, typically featuring vibrant colors and geometric patterns. The designs often include traditional motifs inspired by nature, including flowers, leaves, and geometric shapes. Each design can have specific meanings and is often passed down through families.

The Gamsa is the traditional cloth worn by Bodo men, typically used as a shawl or wrapper. It features bold patterns and is often worn during festivals and special occasions. The weaving of Gamsa involves intricate techniques that require significant skill.

Traditional Bodo textiles are made using handlooms, with weavers using natural dyes derived from plants and other natural sources. The process of weaving is traditionally done by women, and the skill is passed from mother to daughter.

The geometric patterns found in Bodo textiles, known as "Aronai," are particularly significant. These patterns are used in various contexts, including as borders for clothing and as decorative elements in homes. The Aronai patterns have cultural and spiritual significance, representing the Bodo worldview and connection to nature.

In recent years, there have been efforts to preserve and promote Bodo textiles, including initiatives to help weavers and document traditional patterns. The textiles remain an important part of Bodo cultural identity.`,
        category: 'textiles',
        tags: ['textiles', 'weaving', 'dokhona', 'gamsa', 'traditional'],
        readingTime: 5
    },
    {
        id: 'bodo-cuisine',
        slug: 'bodo-cuisine',
        title: 'Bodo Cuisine - Traditional Food Culture',
        summary: 'The traditional cuisine of the Bodo people features unique dishes like Napham (fermented fish paste), Gwran (rice beer), and various preparations using locally sourced ingredients.',
        content: `Bodo cuisine is a reflection of the agricultural lifestyle and natural environment of the Bodo people. The traditional diet consists primarily of rice, fish, meat, and vegetables, with unique preparations that have been perfected over generations.

One of the most distinctive elements of Bodo cuisine is "Napham" or "Ngari" - fermented fish paste. Made from small fish that are salted and fermented for several months, Napham is a staple condiment that adds unique flavor to many dishes. It is considered a delicacy and is often served during festivals and special occasions.

"Gwran" or "Jou" is the traditional rice beer made by the Bodo people. It is brewed from sticky rice and is an important part of social and ritual occasions. The brewing process involves natural fermentation and the beer is consumed fresh.

Traditional Bodo dishes include:
- "Ondla" - a rice paste preparation
- "Narzi" - jute leaves cooked with spices
- "Masor Tenga" - sour fish curry
- "Khorika" - grilled or fried meat
- "Doi" - yogurt-based preparations

The Bodo people also consume various wild greens and vegetables gathered from the forests, which add nutritional diversity to their diet. Fish from the numerous rivers and wetlands of Assam form an important part of the diet.

Traditional cooking methods include steaming, boiling, roasting, and frying. Meals are typically served on banana leaves, which add their own subtle flavor to the food.

Food plays an important role in Bodo social life, with community feasts being a central part of festival celebrations. The sharing of food is seen as a way of strengthening community bonds.`,
        category: 'cuisine',
        tags: ['cuisine', 'food', 'traditional', 'fermented', 'rice-beer'],
        readingTime: 5
    },
    {
        id: 'musical-instruments',
        slug: 'musical-instruments',
        title: 'Bodo Musical Instruments',
        summary: 'Traditional Bodo musical instruments include the Dhol, Pepa, Thungri, and Gong, each playing a vital role in Bodo cultural celebrations and rituals.',
        content: `The Bodo people have a rich tradition of music and musical instruments that accompany their festivals, rituals, and daily life. These instruments are integral to Bodo cultural identity and are used in various ceremonies and celebrations.

Drums (Dhol):
The Dhol is the most important percussion instrument in Bodo music. It is a double-headed drum beaten with sticks, used extensively during festivals, dances, and religious ceremonies. The rhythmic beats of the Dhol form the backbone of Bagurumba dance performances and other cultural events.

Flute (Pepa):
The Pepa is a traditional bamboo flute used in Bodo folk music. It is particularly popular during the Bwisagu festival and other celebrations. The melodious sounds of the Pepa evoke the natural beauty of the Bodo homeland and are associated with pastoral traditions.

Thungri:
The Thungri is a string instrument similar to a guitar or banjo. It is used to accompany folk songs and storytelling sessions. The instrument has a resonant sound that complements the vocal performances in Bodo traditional music.

Gong:
The Gong is a metallic percussion instrument used in religious ceremonies, particularly in Bathouism. It is believed to invoke the presence of deities during rituals and is an essential part of temple ceremonies.

Cymbals:
Cymbals are used alongside drums during processions and community gatherings. They add a festive atmosphere to celebrations and are particularly prominent during the Kherai Puja festival.

These instruments are typically made from locally available materials such as bamboo, wood, animal skins, and metal. The knowledge of making and playing these instruments is passed down through generations, preserving the musical heritage of the Bodo people.`,
        category: 'music',
        tags: ['music', 'instruments', 'dhol', 'pepa', 'tradition'],
        readingTime: 5
    },
    {
        id: 'raha-architecture',
        slug: 'raha-architecture',
        title: 'Raha Architecture - Traditional Bodo Houses',
        summary: 'The traditional Bodo house, known as Raha, features unique architectural elements adapted to the flood-prone environment of Assam with raised platforms and natural materials.',
        content: `The traditional Bodo house, known as "Raha," is a distinctive architectural style that reflects the cultural values, environmental conditions, and social organization of the Bodo people. These houses are designed to withstand the frequent flooding of the Brahmaputra region while incorporating traditional Bodo aesthetic sensibilities.

Structural Features:
Traditional Bodo houses are built on raised platforms (Basthali) to protect against floods. The houses typically have a rectangular floor plan with a central living area and separate spaces for sleeping, cooking, and storage. The raised platform is supported by wooden posts, creating a space underneath that is often used for storing firewood or housing livestock.

Materials:
Traditional houses are constructed using locally sourced materials including bamboo, thatch, wood, and mud. The walls are made of bamboo mats or woven bamboo strips, while the roof is thatched with grass or banana leaves. Modern improvements have seen the use of tin sheets for roofing, but traditional thatched roofs remain common in rural areas.

Layout:
The traditional Bodo house follows a specific spatial organization. The central area (Mankhang) serves as the main living and dining space. The kitchen area (Thungri) is usually separate but connected to the main house. There is also a sacred space for the Bathou altar where religious rituals are performed.

Cultural Significance:
The Raha is more than just a dwelling; it is a cultural symbol that represents Bodo identity and connection to the land. The construction of a new house involves traditional rituals and community participation, strengthening social bonds.

Modern Adaptations:
Contemporary Bodo houses have incorporated modern materials while maintaining the basic structural principles. Concrete pillars, tin roofs, and brick walls are now common, but many Bodo families continue to preserve traditional elements in their homes.`,
        category: 'architecture',
        tags: ['architecture', 'house', 'raha', 'traditional', 'housing'],
        readingTime: 5
    },
    {
        id: 'oral-traditions',
        slug: 'oral-traditions',
        title: 'Oral Traditions - Folk Songs and Storytelling',
        summary: 'Bodo oral traditions encompass a rich heritage of folk songs, proverbs, riddles, and mythological stories passed down through generations.',
        content: `The Bodo people have a rich oral tradition that has preserved their history, culture, and values for centuries. Before the development of written literature, these oral traditions served as the primary means of transmitting knowledge, beliefs, and cultural practices from one generation to the next.

Folk Songs (Aision):
Folk songs are an integral part of Bodo oral tradition. These songs cover various themes including love, nature, harvest, festivals, and historical events. They are sung during community gatherings, festivals, and daily activities. The lyrics often feature metaphors and imagery drawn from the natural environment of the Brahmaputra valley.

Mythological Stories:
The Bodo have a rich corpus of mythological stories that explain the creation of the world, the origin of the Bodo people, and the relationship between humans and the divine. These stories feature deities like Bathou, Mainao, and other supernatural beings. They are typically narrated by elders during evening gatherings.

Proverbs and Riddles:
Bodo proverbs (Mwdwr) encapsulate wisdom and life lessons in concise, memorable phrases. Riddles (Khwlwi) are used as a form of entertainment and mental exercise, particularly for young people. These short compositions reflect the Bodo worldview and understanding of the natural world.

Historical Narratives:
Oral histories play a crucial role in preserving the memory of important historical events and figures. Stories about legendary leaders, battles, and migrations are passed down through generations, providing a collective memory of the Bodo people past.

Preservation Efforts:
With the advent of writing and modern media, there have been efforts to document and preserve Bodo oral traditions. Writers, scholars, and cultural organizations have collected and published oral literature, ensuring that these valuable cultural assets are not lost.`,
        category: 'traditions',
        tags: ['oral', 'traditions', 'folklore', 'songs', 'storytelling'],
        readingTime: 6
    },
    {
        id: 'traditional-games',
        slug: 'traditional-games',
        title: 'Traditional Bodo Games',
        summary: 'Traditional Bodo games include activities like wrestling, archery, and various children\'s games that have been played for generations.',
        content: `Traditional games have always been an important part of Bodo culture, serving as both entertainment and a means of physical conditioning and social bonding. These games reflect the agricultural lifestyle, warrior traditions, and community values of the Bodo people.

Wrestling (Dher):
Wrestling is one of the most traditional and popular sports among the Bodo people. Known as "Dher," this sport is practiced during festivals and community gatherings. Matches are held in open fields, and skilled wrestlers are highly respected in the community. The sport tests strength, agility, and technique.

Archery:
Traditional archery has historical significance among the Bodo people. Historically, hunting was an important activity, and archery skills were essential for survival. Traditional bamboo bows and arrows are still used in some areas, and archery competitions are held during certain festivals.

Kabaddi:
Kabaddi, known locally in various forms, is a popular team game among the Bodo. It requires stamina, agility, and strategic thinking. The game is played during community gatherings and is enjoyed by both men and women.

Children Games:
Various traditional children games are played in Bodo villages. These include:
- Kho-Kho - a tag-based team game
- Gilli Danda - a stick-and-ball game
- Pitthu - a rolling ball game
- Various counting and hiding games

Board Games:
Traditional board games like dice (Sing) are part of Bodo gaming culture. These games are often played during leisure time and festivals.

Cultural Significance:
Traditional games serve multiple purposes in Bodo society. They promote physical fitness, teach important life skills, preserve cultural traditions, and strengthen community bonds. Many games are associated with specific festivals, making them an integral part of the cultural calendar.`,
        category: 'games',
        tags: ['games', 'sports', 'wrestling', 'traditional', 'children'],
        readingTime: 5
    }
];

// Export for backward compatibility
export const cultureArticles = ALL_CULTURE_ARTICLES;
