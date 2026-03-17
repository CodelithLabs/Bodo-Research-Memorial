// Seed data for Bodo culture articles

export interface SeedCultureArticle {
    title: string;
    slug: string;
    summary: string;
    content: string;
    category: 'festivals' | 'performing-arts' | 'material-culture' | 'food-culture' | 'architecture';
    tags: string[];
    status: 'published';
    readingTime: number;
}

export const SEED_CULTURE_ARTICLES: SeedCultureArticle[] = [
    {
        title: 'Bwisagu Festival - Bodo New Year',
        slug: 'bwisagu-festival',
        summary: 'Bwisagu is the traditional New Year festival of the Bodo people, celebrated in April. It marks the beginning of the agricultural cycle and is one of the most important cultural festivals in the Bodo calendar.',
        content: `Bwisagu (also spelled Bisu) is the traditional New Year festival of the Bodo people, celebrated annually in the month of Baisakh (April). This festival marks the beginning of the agricultural cycle and is one of the most significant cultural celebrations for the Bodo community.

The festival spans five days and is characterized by various rituals and celebrations. The first day, known as "Bwisagu Musra" involves cleaning the house and preparing traditional delicacies. People wear new clothes and apply "Mao" (a red pigment made from rice beer) on their foreheads as a blessing.

Traditional activities during Bwisagu include the "Bathou" puja (worship of the deity Bathou), community feasts, and traditional dance performances. Young people gather in groups to sing Bwisagu songs and seek blessings from elders.

The agricultural significance of Bwisagu cannot be overstated. It coincides with the sowing season, and farmers pray for good harvests. The festival also serves as a time for community bonding and renewal of social ties.

Regional variations exist in how Bwisagu is celebrated across different Bodo-inhabited areas of Assam, but the core themes of renewal, prosperity, and community remain consistent.`,
        category: 'festivals',
        tags: ['new-year', 'festival', 'agriculture', 'tradition', 'community'],
        status: 'published',
        readingTime: 5
    },
    {
        title: 'Bagurumba Dance - The Butterfly Dance',
        slug: 'bagurumba-dance',
        summary: 'Bagurumba is the traditional group dance of the Bodo people, performed during festivals and special occasions. The dance mimics butterfly movements and is performed wearing traditional attire.',
        content: `Bagurumba (also known as Bagurumba or Bagro) is the traditional group dance of the Bodo people, considered one of the most beautiful and iconic cultural expressions of the community. The dance gets its name from the Bodo word for butterfly, as the movements beautifully mimic the graceful flight and fluttering of butterflies.

The dance is typically performed during important festivals like Bwisagu, Hagro, and other community celebrations. It is exclusively performed by women, who dress in traditional Bodo attire including the "Dokhona" (traditional wraparound) and various silver ornaments.

The dance formation typically involves a circle or semi-circle of dancers, with one or two lead singers at the center. The choreography involves synchronized movements including hand waving, stepping, and turning, all performed to traditional drum beats and folk songs.

The traditional attire worn during Bagurumba includes the Dokhona (a colorful wraparound cloth), the Gamsa (a kind of shawl), and various silver jewelry including necklaces, earrings, and armbands. The dancers also wear traditional hairstyles adorned with flowers and ornaments.

In recent years, there have been efforts to get Bagurumba recognized as an Intangible Cultural Heritage by UNESCO. The dance has also gained recognition beyond Assam and is performed at various national and international cultural forums.

The significance of Bagurumba goes beyond entertainment; it represents the artistic expression of the Bodo people, their connection to nature, and their community values.`,
        category: 'performing-arts',
        tags: ['dance', 'tradition', 'butterfly', 'women', 'heritage'],
        status: 'published',
        readingTime: 6
    },
    {
        title: 'Bodo Textiles - Dokhona and Gamsa',
        slug: 'bodo-textiles',
        summary: 'The traditional textiles of the Bodo people, including the Dokhona worn by women and Gamsa worn by men, feature distinctive geometric patterns and are crafted using traditional loom weaving techniques.',
        content: `Bodo textiles represent a rich tradition of weaving and design that has been passed down through generations. The two most iconic garments are the Dokhona (women's wraparound) and Gamsa (men's cloth), each with its own distinctive patterns and cultural significance.

The Dokhona is the traditional attire for Bodo women. It is a long wraparound cloth that is wrapped around the body, typically featuring vibrant colors and geometric patterns. The designs often include traditional motifs inspired by nature, including flowers, leaves, and geometric shapes. Each design can have specific meanings and is often passed down through families.

The Gamsa is the traditional cloth worn by Bodo men, typically used as a shawl or wrapper. It features bold patterns and is often worn during festivals and special occasions. The weaving of Gamsa involves intricate techniques that require significant skill.

Traditional Bodo textiles are made using handlooms, with weavers using natural dyes derived from plants and other natural sources. The process of weaving is traditionally done by women, and the skill is passed from mother to daughter.

The geometric patterns found in Bodo textiles, known as "Aronai," are particularly significant. These patterns are used in various contexts, including as borders for clothing and as decorative elements in homes. The Aronai patterns have cultural and spiritual significance, representing the Bodo worldview and connection to nature.

In recent years, there have been efforts to preserve and promote Bodo textiles, including initiatives to help weavers and document traditional patterns. The textiles remain an important part of Bodo cultural identity.`,
        category: 'material-culture',
        tags: ['textiles', 'weaving', 'dokhona', 'gamsa', 'traditional'],
        status: 'published',
        readingTime: 5
    },
    {
        title: 'Bodo Cuisine - Traditional Food Culture',
        slug: 'bodo-cuisine',
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
        category: 'food-culture',
        tags: ['cuisine', 'food', 'traditional', 'fermented', 'rice-beer'],
        status: 'published',
        readingTime: 5
    },
    {
        title: 'Bodo Musical Instruments',
        slug: 'bodo-musical-instruments',
        summary: 'The traditional musical instruments of the Bodo people include the Sifung (flute), Kham (drum), Serja, Tharkha, and Jotha, each with unique sounds and cultural significance.',
        content: `Traditional Bodo music features a variety of indigenous instruments that have been used for centuries in religious ceremonies, festivals, and everyday life. These instruments are an integral part of Bodo cultural expression.

The "Sifung" is a bamboo flute, one of the most common traditional instruments. It is played by both men and women and produces melodic sounds that are often used in folk songs. The Sifung is particularly associated with pastoral life and romantic folk songs.

The "Kham" is a traditional drum that plays a central role in Bodo music and dance. It is a barrel-shaped drum made from hollowed wood with animal skin membranes. The Kham provides the rhythmic foundation for Bagurumba dance and other cultural performances.

The "Serja" is a bowed string instrument, unique to the Bodo people. It is made from a gourd and produces haunting, melodic sounds. The Serja is particularly associated with traditional Bodo folk music and is often played during festivals.

The "Tharkha" is a bamboo instrument that produces sound when blown or shaken. It is often used in processions and celebrations. The "Jotha" are cymbals that provide rhythmic accompaniment during dances and religious ceremonies.

These traditional instruments are typically made by the musicians themselves using locally available materials like bamboo, wood, and animal skins. The knowledge of making and playing these instruments is passed down through generations.

Traditional Bodo music and instruments continue to be practiced and preserved, though modern influences have introduced new instruments and styles. Efforts are underway to document and preserve this musical heritage for future generations.`,
        category: 'performing-arts',
        tags: ['music', 'instruments', 'flute', 'drum', 'traditional'],
        status: 'published',
        readingTime: 4
    },
    {
        title: 'Traditional Raha House Architecture',
        slug: 'traditional-raha-house',
        summary: 'The traditional Bodo house, known as Raha, is built using bamboo and cane with a raised floor design that protects against floods. The architecture reflects the Bodo adaptation to the Brahmaputra valley environment.',
        content: `The traditional Bodo house, known as "Raha," is a unique architectural style that reflects the adaptation of the Bodo people to the flood-prone environment of the Brahmaputra valley. The design has evolved over centuries to meet the practical needs of the region.

The most distinctive feature of the Raha house is its raised floor. Built on stilts or pillars, the house stands elevated above the ground, typically 3-5 feet high. This design protects against annual floods that inundate the plains during the monsoon season. The raised floor also provides ventilation and protection from snakes and other ground-dwelling creatures.

The construction of a Raha house primarily uses locally available materials. Bamboo and cane form the main structural elements, while thatch made from "spear grass" or tin sheets are used for roofing. The walls are typically made of bamboo mats or wooden planks.

The traditional Raha house is rectangular in shape, with a central hall and smaller rooms at the sides. The layout typically includes a "Mwsan" (veranda) where daily activities like cooking and weaving take place. The main living area is often where family members gather and where guests are received.

The "Deur" or ceremonial hall is an important part of larger Bodo houses, used for religious ceremonies and community gatherings. This space is kept clean and is often decorated during festivals.

Traditional Bodo houses also feature the "Bathou Ghor" - a small shrine or altar dedicated to the worship of Bathou, the supreme deity in Bodo religion. This space is typically located in the eastern corner of the house.

Modern influences have led to changes in Bodo house architecture, with many families now constructing houses with brick walls and tin or tile roofs. However, the raised floor design continues to be maintained due to its practical benefits.`,
        category: 'architecture',
        tags: ['architecture', 'house', 'bamboo', 'flood-resistant', 'traditional'],
        status: 'published',
        readingTime: 5
    }
];
