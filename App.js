import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import AddInput from './components/AddInput';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import Header from './components/Header'
import Empty from './components/Empty'
import TodoList from './components/TodoList'

const getFonts = () => {
  Font.loadAysnc ({
    "poppins-regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  })
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData((prevToDo) => {
      return[
        {
          value:value,
          key:Math.random().toString(),
        },
        ...prevToDo,
      ];
    });
  };

  const deleteItem = (key) => {
    setData((prevToDo)=> {
      return prevToDo.filter((todo)=> todo.key != key)
    });
  };

  if (fontsLoaded) {
    return (
      <View>
        <View>
          <StatusBar barstyle="light-content" backgroundColor='midnightblue'/>
          <View>
            <FlatList
            data={data}
            ListHeaderComponent={() =><Header/>}
            ListEmptyComponent={()=> <Empty/>}
            keyExtractor={(item)=>item.key}
            renderItem={({item})=> <TodoList item={item} deleteItem={deleteItem}/>}/>
            <View>
              <AddInput submitHandler={submitHandler}/>
            </View>
          </View>
        </View>
      </View>
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=>{
          setFontsLoaded(true);
        }}
        onError={console.warn}/>
    )
  }
}
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
