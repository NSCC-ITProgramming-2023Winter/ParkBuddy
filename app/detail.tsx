import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import RenderHTML from 'react-native-render-html';
import { Dimensions } from 'react-native';

export default function DetailScreen() {
  const { slug, title, content } = useLocalSearchParams();  // use useLocalSearchParams read query params
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>{title}</Text>

        <View style={styles.section}>
        <RenderHTML
            contentWidth={screenWidth}
            source={{ html: content }}
          />
        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});