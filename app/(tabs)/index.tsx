import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth * 0.9; // 90% of the screen width

const streetNames = [
  'Hunter Street', 'Robie Street', 'Inglis Street', 'Barrington Street',
  'South Street', 'Queen Street', 'Bloomfield Street', 'Gottingen Street',
  'Spring Garden Road', 'Bedford Row', 'Sackville Street', 'Hollis Street',
  'Agricola Street', 'Young Street', 'North Street', 'South Park Street',
  'Victoria Road', 'Oxford Street', 'Dalhousie Drive', 'Kempt Road',
  'Almon Street', 'Connolly Street', 'Coburg Road', 'Quinpool Road',
  'Joseph Howe Drive', 'Chebucto Road', 'Mumford Road', 'Main Avenue',
  'Lacewood Drive', 'Dunbrack Street'
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Park Buddy</Text>
      <TextInput 
        style={[styles.searchBar, { width: itemWidth }]}
        placeholder="Search name of street..."
        placeholderTextColor="#888"
      />
      <Text style={styles.subHeader}>Street Names</Text>
      <FlatList
        data={streetNames}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.streetItem, { width: itemWidth }]}>
            <Text style={styles.streetText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  searchBar: {
    padding: 12,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  subHeader: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  listContainer: {
    alignItems: 'center',
    width: '100%',
  },
  streetItem: {
    padding: 15,
    backgroundColor: '#ccc',
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  streetText: {
    fontSize: 16,
    color: '#000',
  },
});
