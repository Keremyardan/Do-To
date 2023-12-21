import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native'
import React, {useState}  from 'react'
import { MaterialIcons } from '@expo/vector-icons';


const TaskInputField = (props) => {
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TextInput value={task} onChangeText={text=>setTask(text)} placeholder={'Write a task'} placeholderTextColor={'#fff'}/>
      <TouchableOpacity onPress={() => handleAddTask(task)}>
        <View>
           <MaterialIcons name='keyboard-arrow-up' size={24} color='black' />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default TaskInputField