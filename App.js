import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>my name is <b>Mawuena Deborah Akweti</b> !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42104a',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24'
  },
});
