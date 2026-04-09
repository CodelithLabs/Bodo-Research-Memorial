import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Leader } from '@/types';

const styles = StyleSheet.create({
  page: { padding: 32, fontSize: 12, fontFamily: 'Helvetica' },
  title: { fontSize: 20, marginBottom: 8 },
  subtitle: { fontSize: 12, marginBottom: 16, color: '#4b5563' },
  sectionTitle: { fontSize: 14, marginTop: 16, marginBottom: 6 },
  paragraph: { marginBottom: 8, lineHeight: 1.4 },
  listItem: { marginBottom: 4 },
});

export function LeaderPDF({ leader }: { leader: Leader }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{leader.name}</Text>
        <Text style={styles.subtitle}>{leader.title}</Text>
        <Text style={styles.paragraph}>
          {leader.birthDate} - {leader.deathDate ?? 'Present'}
        </Text>

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
