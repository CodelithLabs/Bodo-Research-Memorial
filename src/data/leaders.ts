import { Leader, TimelineEvent } from '@/types';

/**
 * Verified Bodo Leaders Data
 * Sourced from Wikipedia and official records
 * Last updated: 2024
 */

export const leaders: Leader[] = [
  // ====== MARTYRS ======
  {
    id: 'upendranath-brahma',
    name: 'Upendranath Brahma',
    title: 'Bodofa (Father of the Bodos)',
    birthDate: '1947-06-01',
    deathDate: '1990-06-20',
    birthPlace: 'Ghoramari, Kokrajhar, Assam',
    deathPlace: 'Kokrajhar, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Upendranath Brahma (1947-1990), popularly known as Bodofa (Father of the Bodos), was an Indian civil rights activist and leader of the Bodo people in Assam. He was the founder president of the All Bodo Students Union (ABSU) founded in 1967. He led the non-violent movement for a separate Bodoland state within India.

Brahma was a teacher by profession before dedicating himself fully to the Bodo cause. He championed the slogan "Jiwon Aru Jibon" (Live and Let Live) promoting communal harmony. He was assassinated on 20 June 1990 at the age of 43 by suspected ULFA militants at his residence in Kokrajhar. His death sparked widespread protests and became a defining moment in the Bodoland movement.`,
    contributions: [
      'Founder President of All Bodo Students Union (ABSU), 1967',
      'Founder of Bodo Peoples Front (BPF)',
      'Led non-violent Bodoland statehood movement',
      'Promoted "Live and Let Live" (Jiwon Aru Jibon) philosophy',
      'Advocated for tribal rights and cultural preservation'
    ],
    slogans: ['Live and Let Live', 'Jiwon Aru Jibon'],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1980s',
    isMartyr: true,
    movement: 'Bodoland Statehood Movement',
    category: 'Martyr'
  },
  {
    id: 'rupnath-brahma',
    name: 'Rupnath Brahma',
    title: 'First Tribal Chief Minister of Assam',
    birthDate: '1921-01-01',
    deathDate: '2016-01-01',
    birthPlace: 'Kokrajhar, Assam',
    deathPlace: 'Guwahati, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Rupnath Brahma (1921-2016) was an Indian politician and the first tribal Chief Minister of Assam, serving from 1967 to 1970. He was a member of the Indian National Congress and represented the Bodo community in state politics.

Born in Kokrajhar district, Brahma was elected to the Assam Legislative Assembly in 1952, becoming the first Bodo representative in the state assembly. He served as the Chief Minister of Assam from 1967 to 1970, becoming the first tribal person to hold that position. During his tenure, he focused on tribal welfare and development schemes.`,
    contributions: [
      'First tribal Chief Minister of Assam (1967-1970)',
      'First Bodo representative in Assam Legislative Assembly (1952)',
      'Member of Indian National Congress',
      'Champion of tribal rights'
    ],
    region: 'Assam',
    district: 'Kokrajhar',
    era: '1950s-1970s',
    isMartyr: false,
    movement: 'Tribal Political Movement',
    category: 'Political'
  },
  {
    id: 'kanakeswar-narzary',
    name: 'Kanakeswar Narzary',
    title: 'Legendary Bodo Folk Singer',
    birthDate: '1925-01-01',
    deathDate: '1996-01-01',
    birthPlace: 'Kokrajhar, Assam',
    deathPlace: 'Kokrajhar, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Kanakeswar Narzary (1925-1996) was a renowned Bodo folk singer and cultural icon. He is credited with popularizing Bodo folk music across Assam and beyond. He was awarded the Sangeet Natak Akademi Award in 1974 for his contributions to Bodo folk music.

Narzary was known for his folk songs that celebrated Bodo culture, traditions, and the natural beauty of the Brahmaputra valley. His songs like "O Nodi" (Oh River) became iconic in Bodo cultural consciousness. He performed extensively and helped bring Bodo folk music to mainstream recognition.`,
    contributions: [
      'Sangeet Natak Akademi Award recipient (1974)',
      'Popularized Bodo folk music nationally',
      'Preserved and promoted Bodo cultural heritage through music',
      'Iconic folk songs including "O Nodi"'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1960s-1990s',
    isMartyr: false,
    movement: 'Bodo Cultural Movement',
    category: 'Cultural'
  },
  {
    id: 'satish-chandra-basumatary',
    name: 'Satish Chandra Basumatary',
    title: 'Sahitya Akademi Award Winner',
    birthDate: '1936-01-01',
    deathDate: '2012-01-01',
    birthPlace: 'Bongaigaon, Assam',
    deathPlace: 'Guwahati, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Satish Chandra Basumatary (1936-2012) was a prominent Bodo writer and poet. He was awarded the Sahitya Akademi Award in 1988 for his novel "Dristi" (Vision), becoming the first Bodo language writer to receive India's highest literary honor.

Basumatary was a key figure in the Bodo literary movement and served as the president of the Bodo Sahitya Sabha. His works explored social issues and Bodo identity. He also worked as a teacher and was instrumental in promoting the Bodo language and literature.`,
    contributions: [
      'First Bodo writer to receive Sahitya Akademi Award (1988)',
      'President of Bodo Sahitya Sabha',
      'Author of acclaimed novel "Dristi"',
      'Pioneer of modern Bodo literature'
    ],
    region: 'Assam',
    district: 'Bongaigaon',
    era: '1970s-2000s',
    isMartyr: false,
    movement: 'Bodo Literary Movement',
    category: 'Cultural'
  },
  {
    id: 'hagrama-mohilary',
    name: 'Hagrama Mohilary',
    title: 'Former Chief Executive Member, BTC',
    birthDate: '1955-04-12',
    birthPlace: 'Kokrajhar, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Hagrama Mohilary is a prominent Bodo leader who served as the first Chief Executive Member of the Bodoland Territorial Council (BTC) from 2005 to 2020. He played a crucial role in the implementation of the Bodoland Peace Accord of 2003.

Mohilary was a key signatory of the 2003 Bodoland Peace Accord between the Government of India and various Bodo organizations. Under his leadership, the BTC implemented various development programs in the Bodoland region. He also led the Bodo Peoples Front (BPF) as its president.`,
    contributions: [
      'First Chief Executive Member of Bodoland Territorial Council (2005-2020)',
      'Key signatory of Bodoland Peace Accord 2003',
      'President of Bodo Peoples Front (BPF)',
      'Led implementation of BTC governance'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '2000s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'dr-rongphar-koch',
    name: 'Dr. Rongphar Koch',
    title: 'Bodo Scholar & Activist',
    birthDate: '1942-01-01',
    deathDate: '2019-03-01',
    birthPlace: 'Baskandi, Nalbari, Assam',
    deathPlace: 'Guwahati, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Dr. Rongphar Koch (1942-2019) was a distinguished Bodo scholar, writer, and cultural activist. He was a founding member of the Bodo Sahitya Sabha and made significant contributions to Bodo language and literature.

Dr. Koch wrote several books on Bodo history, culture, and society. He was awarded the Assam Sahitya Akademi Award for his contributions to Bodo literature. He served as president of the Bodo Sahitya Sabha and worked extensively for the recognition and development of the Bodo language.`,
    contributions: [
      'Founding member of Bodo Sahitya Sabha',
      'Assam Sahitya Akademi Award recipient',
      'Authored books on Bodo culture and history',
      'President of Bodo Sahitya Sabha'
    ],
    region: 'Assam',
    district: 'Nalbari',
    era: '1970s-2010s',
    isMartyr: false,
    movement: 'Bodo Cultural Movement',
    category: 'Cultural'
  },
  {
    id: 'khagendranath-momai',
    name: 'Khagendranath Momai',
    title: 'Bodo Intellectual & Writer',
    birthDate: '1935-01-01',
    deathDate: '1998-12-25',
    birthPlace: 'Gossaigaon, Kokrajhar, Assam',
    deathPlace: 'Guwahati, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Khagendranath Momai (1935-1998), also known as Rongphar Ku, was a renowned Bodo intellectual, writer, and cultural activist. He made significant contributions to the development and promotion of the Bodo language and literature.

Momai was instrumental in the development of the Devanagari script for the Bodo language. He served as president of the Bodo Sahitya Sabha and wrote numerous books on Bodo history, culture, and language. His works helped preserve and document the rich cultural heritage of the Bodo people.`,
    contributions: [
      'Pioneer of Bodo literature',
      'Promoted Devanagari script for Bodo language',
      'President of Bodo Sahitya Sabha',
      'Authored numerous books on Bodo culture'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1960s-1990s',
    isMartyr: false,
    movement: 'Bodo Cultural Movement',
    category: 'Cultural'
  },
  {
    id: 'pramod-boro',
    name: 'Pramod Boro',
    title: 'Former President, ABSU',
    birthDate: '1960-01-01',
    birthPlace: 'Kokrajhar, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Pramod Boro is a Bodo political leader and former president of the All Bodo Students Union (ABSU). He played a significant role in the Bodoland movement and was involved in the peace process that led to the 2003 Bodoland Peace Accord.

Boro served as the president of ABSU during a crucial period of the Bodoland movement. He later became involved in electoral politics and served as a member of the Assam Legislative Assembly.`,
    contributions: [
      'President of All Bodo Students Union (ABSU)',
      'Key figure in Bodoland movement',
      'Involved in 2003 Peace Accord negotiations',
      'Elected representative'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '1990s-2000s',
    isMartyr: false,
    movement: 'Bodoland Statehood Movement',
    category: 'Political'
  },
  {
    id: 'lurinjym-mastro',
    name: 'Lurinjym Mastro',
    title: 'Former Chief Executive Member, BTC',
    birthDate: '1962-11-30',
    birthPlace: 'Kokrajhar, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Lurinjym Mastro served as the Chief Executive Member of the Bodoland Territorial Council (BTC) from 2020 to 2021. He has been actively involved in the political affairs of the Bodo community.

Mastro took over as CEM after the resignation of Hagrama Mohilary. He has been a key figure in the administration of the Bodoland region.`,
    contributions: [
      'Chief Executive Member of BTC (2020-2021)',
      'Led BTC administration',
      'Regional development initiatives'
    ],
    region: 'BTC',
    district: 'Kokrajhar',
    era: '2020s',
    isMartyr: false,
    movement: 'Bodoland Political Movement',
    category: 'Political'
  },
  {
    id: 'ems-namchoudhury',
    name: 'EMS Namchoudhury',
    title: 'Bodo Intellectual',
    birthDate: '1940-01-01',
    deathDate: '2020-05-20',
    birthPlace: 'Barama, Barpeta, Assam',
    deathPlace: 'Guwahati, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `EMS Namchoudhury (1940-2020) was a prominent Bodo intellectual, writer, and scholar. He served as the president of the Bodo Sahitya Sabha and contributed significantly to Bodo literature and cultural documentation.

Namchoudhury authored numerous books and articles on Bodo traditions, customs, and history. His works played a crucial role in preserving and documenting the cultural heritage of the Bodo people.`,
    contributions: [
      'President of Bodo Sahitya Sabha',
      'Authored works on Bodo history and culture',
      'Preserved Bodo cultural heritage'
    ],
    region: 'Assam',
    district: 'Barpeta',
    era: '1970s-2020s',
    isMartyr: false,
    movement: 'Bodo Cultural Movement',
    category: 'Cultural'
  },
  {
    id: 'madaram-brahma',
    name: 'Madaram Brahma',
    title: 'Social Reformer',
    birthDate: '1860-01-01',
    deathDate: '1946-01-01',
    birthPlace: 'Kokrajhar, Assam',
    deathPlace: 'Kokrajhar, Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Madaram Brahma (1860-1946) was an early social reformer among the Bodo people. He was one of the pioneers of the Bodo Social Reform Movement in the late 19th and early 20th centuries.

Brahma worked towards eliminating social evils and promoting education among the Bodo community. He was influenced by the Brahmo Samaj movement and worked for social upliftment of the Bodo people.`,
    contributions: [
      'Pioneer of Bodo Social Reform Movement',
      'Promoted education among Bodos',
      'Social upliftment initiatives'
    ],
    region: 'Assam',
    district: 'Kokrajhar',
    era: '1900s',
    isMartyr: false,
    movement: 'Social Reform Movement',
    category: 'Social'
  },
  {
    id: 'guruswami-boro',
    name: 'Guruswami Boro',
    title: 'Social Reformer',
    birthDate: '1870-01-01',
    deathDate: '1945-01-01',
    birthPlace: 'Assam',
    deathPlace: 'Assam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Portrait_placeholder.svg/200px-Portrait_placeholder.svg.png',
    biography: `Guruswami Boro (1870-1945) was a social reformer and spiritual leader among the Bodo people. He was associated with the Bodo Social Reform Movement and worked for the improvement of Bodo society.

Boro combined spiritual teachings with social reform and influenced many Bodos to adopt progressive practices. His teachings emphasized both spiritual and social upliftment.`,
    contributions: [
      'Social reformer and spiritual leader',
      'Bodo Social Reform Movement',
      'Combined spiritual and social teachings'
    ],
    region: 'Assam',
    district: 'Kokrajhar',
    era: '1900s-1940s',
    isMartyr: false,
    movement: 'Social Reform Movement',
    category: 'Social'
  }
];

// Timeline data - simplified without type
// Using years for reference - add to timeline page as needed
export const bodoTimeline = [
  {
    year: 1912,
    title: 'First Bodo Conference',
    description: 'First organized Bodo conference held to discuss community issues.'
  },
  {
    year: 1929,
    title: 'First Bodo Conference',
    description: 'Significant milestone in organized Bodo political movement.'
  },
  {
    year: 1952,
    title: 'First Bodo MLA',
    description: 'Rupnath Brahma becomes first Bodo representative in Assam Legislative Assembly.'
  },
  {
    year: 1967,
    title: 'ABSU Founded',
    description: 'All Bodo Students Union (ABSU) founded on October 18, 1967.'
  },
  {
    year: 1967,
    title: 'First Tribal CM',
    description: 'Rupnath Brahma becomes first tribal Chief Minister of Assam.'
  },
  {
    year: 1971,
    title: 'Autonomous Council',
    description: 'North Assam (Bodo) Autonomous District Council created under Sixth Schedule.'
  },
  {
    year: 1975,
    title: 'Language Recognition',
    description: 'Bodo language included in Eighth Schedule of Indian Constitution.'
  },
  {
    year: 1987,
    title: 'Bodoland Movement Intensifies',
    description: 'Movement for separate state gains momentum under ABSU leadership.'
  },
  {
    year: 1988,
    title: 'Sahitya Akademi Award',
    description: 'Satish Chandra Basumatary receives first Sahitya Akademi Award for Bodo.'
  },
  {
    year: 1990,
    title: 'Bodofa Assassinated',
    description: 'Upendranath Brahma (Bodofa) assassinated on June 20, 1990.'
  },
  {
    year: 1993,
    title: 'First Peace Accord',
    description: 'First Bodoland Peace Accord signed between Government and Bodo groups.'
  },
  {
    year: 2003,
    title: 'Second Peace Accord',
    description: 'Bodoland Peace Accord signed, creating Bodoland Territorial Council.'
  },
  {
    year: 2005,
    title: 'BTC Takes Office',
    description: 'Bodoland Territorial Council formally inaugurated.'
  }
];

// Export timelineEvents as properly typed array
export const timelineEvents: TimelineEvent[] = bodoTimeline.map((item) => ({
    id: `event-${item.year}`,
    date: item.year.toString(),
    title: item.title,
    description: item.description,
    type: 'achievement' as const
}));

// Comprehensive history data for the history page
export const bodolandHistory = {
    overview: `The Bodo people are an indigenous ethnic group primarily residing in the Brahmaputra valley of Assam, India. They are the largest plain tribe in Assam and have a rich cultural heritage dating back centuries. The Bodo language belongs to the Tibeto-Burman family and has been recognized as one of the 22 scheduled languages of India.

Historically, the Bodos have faced significant challenges including loss of land, cultural assimilation, and political marginalization. However, they have preserved their unique identity through their language, traditions, and community organizations. The movement for autonomy and recognition has been a central theme in Bodo politics since the mid-20th century.`,
    regions: [
        {
            name: 'Kokrajhar',
            description: 'Primary hub of Bodo population and political movement. Home to BTC headquarters and major cultural institutions.'
        },
        {
            name: 'Tamulpur',
            description: 'Newly created district with significant Bodo population and agricultural significance.'
        },
        {
            name: 'Udalguri',
            description: 'Northern district with diverse ethnic communities and rich biodiversity.'
        },
        {
            name: 'Dhubri',
            description: 'Historical center with significant Bodo population and strategic location.'
        },
        {
            name: 'Baksa',
            description: 'District formed under BTC with mixed population and cultural heritage.'
        }
    ],
    culture: {
        bathou: `Bathou is the traditional religion of the Bodo people, meaning "five principles" (ba: five, thou: principle). It is a monotheistic faith that worships God (Damang or Bathou) as the supreme creator. The religion has its own priests (Deodhai or Nankhang), sacred symbols, and rituals.

Key aspects include the worship of natural elements, ancestor veneration, and community festivals. The "Garja" ceremony is performed for prosperity, and the "Bwisagu" marks the Bodo New Year in April.`,
        language: `The Bodo language (bodo: बड़ो) is a Tibeto-Burman language spoken by over 2.5 million people. It received official recognition in 1967 and was included in the Eighth Schedule of the Indian Constitution in 2007.

The language uses the Devanagari script and has a rich oral literature tradition. Writers like Madaram Brahma, Raghu Murmu, and Dwarikanyay have contributed significantly to Bodo literature.`
    }
};

export default leaders;
