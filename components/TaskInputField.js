import { View, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState}  from 'react'
import { MaterialIcons } from '@expo/vector-icons';


const TaskInputField = (props) => {
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }

  return (
    <KeyboardAvoidingView 
    >
      <TextInput 
      value={task} onChangeText={text=>setTask(text)} placeholder={'Write a task'} placeholderTextColor={'#fff'}/>
      <TouchableOpacity 
      onPress={() => handleAddTask(task)}>
        <View>
           <MaterialIcons name='keyboard-arrow-up' size={24} color='black' />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles= StyleSheet.create ({
  container:{
    
  }
})

export default TaskInputField