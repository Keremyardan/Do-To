import { View, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState}  from 'react'
import { FontAwesome } from '@expo/vector-icons';


const TaskInputField = (props) => {
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput style={styles.task}
      value={task} onChangeText={text=>setTask(text)} placeholder={'Write a task'} placeholderTextColor={'#606060FF'} multiline/>
      <TouchableOpacity
      onPress={() => handleAddTask(task)}>
        <View>
           <FontAwesome style={styles.icon} name='plus-circle' size={28} color='#D6ED17FF' />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles= StyleSheet.create ({
  container:{
    alignItems:'center',
    flexDirection:'row',
    marginLeft:5,
    
  },
  task: {
    borderWidth:1,
    borderRadius:7,
    backgroundColor:'#D6ED17FF',
    width:350,
    height:50,  
    padding:13, 
  },
  icon:{
    marginLeft:5,
  }
})

export default TaskInputField;