// Seed data for Bodo religion articles

export interface SeedReligionArticle {
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: 'religion';
  tags: string[];
  status: 'published';
  readingTime: number;
}

export const SEED_RELIGION_ARTICLES: SeedReligionArticle[] = [
  {
    title: 'Bathouism - The Indigenous Bodo Religion',
    slug: 'bathouism-bodo-indigenous-religion',
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
    category: 'religion',
    tags: ['bathouism', 'indigenous-religion', 'tradition', 'deity', 'rituals'],
    status: 'published',
    readingTime: 6
  },
  {
    title: 'Kherai Puja - The Grand Bathou Festival',
    slug: 'kherai-puja',
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
    category: 'religion',
    tags: ['kherai', 'festival', 'bathouism', 'ceremony', 'tradition'],
    status: 'published',
    readingTime: 6
  },
  {
    title: 'Bodo Buddhist Traditions',
    slug: 'bodo-buddhist-traditions',
    summary: 'An exploration of Buddhist practices among Bodo communities, including historical influences and contemporary Theravada Buddhist traditions in the region.',
    content: `While Bathouism remains the indigenous religion of the Bodo people, Buddhism has also influenced portions of the Bodo community, particularly in historical context and through regional interactions with other Northeast Indian communities.

The presence of Buddhist traditions among certain Bodo groups can be traced to historical interactions with Buddhist kingdoms in Southeast Asia and the spread of Theravada Buddhism in Northeast India. Some Bodo communities in areas adjacent to Buddhist-majority regions have incorporated Buddhist elements into their religious practices.

Historical evidence suggests that Buddhist ideas may have influenced the philosophical concepts in Bathouism, particularly the emphasis on spiritual balance and the concept of interconnectedness. Some scholars note similarities between Bathouist beliefs and certain Buddhist principles.

In contemporary times, a small number of Bodo people identify as Buddhists, following the Theravada tradition. These communities maintain Buddhist practices including:
- Meditation and mindfulness practices
- Veneration of the Buddha
- Observance of Buddhist festivals like Buddha Purnima
- Support for Buddhist monasteries and temples

The interaction between indigenous Bodo traditions and Buddhism has created unique syncretic practices in some areas. This includes the presence of Buddhist-style prayer flags, consultation with Buddhist monks for certain ceremonies, and incorporation of Buddhist symbols.

Relations between Buddhist Bodos and followers of Bathouism or Christianity are generally harmonious, reflecting the pluralistic nature of Bodo society. Many families may have members following different religions while maintaining shared cultural practices.

Academic interest in Bodo Buddhist traditions continues to grow, with researchers exploring the historical connections and contemporary expressions of Buddhism among the Bodo people.`,
    category: 'religion',
    tags: ['buddhism', 'theravada', 'tradition', 'religious-pluralism'],
    status: 'published',
    readingTime: 4
  },
  {
    title: 'Bodo Religious Pluralism and Interfaith Dynamics',
    slug: 'bodo-religious-pluralism',
    summary: 'An examination of the religious diversity within the Bodo community, including the impact of Christian missionaries, the Brahma Dharma reform movement, and contemporary interfaith relations.',
    content: `The Bodo community presents a remarkable example of religious pluralism, with members following various faiths while maintaining a strong sense of cultural identity. This diversity has developed over centuries of interaction with outside influences while preserving core Bodo cultural elements.

Christianity arrived in Bodo areas through missionary activities starting in the 19th century. Missionaries, primarily from European and American Protestant churches, established schools and healthcare facilities alongside their religious work. This led to conversions among some Bodo communities, particularly in areas with missionary presence.

The impact of Christian missionaries on Bodo society was significant:
- Establishment of modern educational institutions
- Introduction of Western medicine and healthcare
- Translation of religious texts into Bodo language
- Development of written Bodo literature
- Creation of Roman script for Bodo language

The Brahmo Samaj movement, which influenced Kalicharan Brahma in founding Brahma Dharma, represented an indigenous reform movement that sought to modernize Bathouism while maintaining its core beliefs. This movement rejected animal sacrifice and emphasized monotheistic worship.

The Brahma Dharma movement represents an important middle path - maintaining Bodo religious identity while embracing reform. It demonstrates the community's ability to adapt traditions to changing circumstances.

Contemporary Bodo society reflects this religious diversity:
- Followers of traditional Bathouism
- Adherents of Brahma Dharma
- Christians (various denominations)
- Buddhists
- Some who identify as Hindu or follow syncretic practices

Interfaith relations among Bodos are generally harmonious. Community events often bring people of different faiths together, and families may include members of different religions while maintaining shared cultural practices like Bwisagu celebrations and traditional ceremonies.

The preservation of Bodo cultural identity remains important across all religious communities. Language, festivals, traditional arts, and community values continue to unite Bodos regardless of their religious affiliation.`,
    category: 'religion',
    tags: ['religious-pluralism', 'christianity', 'interfaith', 'culture', 'unity'],
    status: 'published',
    readingTime: 5
  }
];
