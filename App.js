import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import AddInput from './components/AddInput';

export default function App() {
  return (
    <View>
      <View>
        <StatusBar/>
      </View>
      <FlatList data={data}
      renderItem={({item})=> (
        console.log(item)
      )}/>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
