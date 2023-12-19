import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Do-To...</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:'#FFC594',
  },
  text:{
    textAlign:'center',
    
  }
})

export default App