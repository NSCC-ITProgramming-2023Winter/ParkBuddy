import { StyleSheet, Image, Platform, Text, View } from 'react-native';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.header}>Agricola St</Text>
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
});
