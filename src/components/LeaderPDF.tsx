import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { Leader } from '@/types';

Font.register({
  family: 'NotoSansDevanagari',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/notosansdevanagari/v30/TuGOUUFzXI5FBtUq5aKqV5d6fX2T9GMe8h2N.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://fonts.gstatic.com/s/notosansdevanagari/v30/TuGOUUFzXI5FBtUq5aKqV5d6fX2T9GMe8jWN.ttf',
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: { padding: 36, fontSize: 12, fontFamily: 'NotoSansDevanagari' },
  header: { display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center' },
  portrait: { width: 96, height: 96, borderRadius: 8, objectFit: 'cover' },
  title: { fontSize: 20, marginBottom: 4, fontWeight: 700 },
  subtitle: { fontSize: 12, marginBottom: 8, color: '#4b5563' },
  meta: { fontSize: 11, color: '#6b7280', marginBottom: 12 },
  sectionTitle: { fontSize: 14, marginTop: 16, marginBottom: 6 },
  paragraph: { marginBottom: 8, lineHeight: 1.4 },
  listItem: { marginBottom: 4 },
});

export function LeaderPDF({ leader }: { leader: Leader }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {leader.imageUrl ? (
            <Image src={leader.imageUrl} style={styles.portrait} />
          ) : null}
          <View>
            <Text style={styles.title}>{leader.name}</Text>
            <Text style={styles.subtitle}>{leader.title}</Text>
            <Text style={styles.meta}>
              {leader.birthDate}{leader.deathDate ? ` - ${leader.deathDate}` : ''}
              {leader.birthPlace ? ` · ${leader.birthPlace}` : ''}
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Biography</Text>
        {leader.biography.split('\n\n').map((paragraph, index) => (
          <Text key={index} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Contributions</Text>
        <View>
          {leader.contributions.map((item, index) => (
            <Text key={index} style={styles.listItem}>- {item}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}
