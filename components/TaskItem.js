import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons';

const TaskItem = (props) => {
  return (
    <View>
        <View>
            <Text>{props.index}</Text>
        </View>
        <View>
            <Text>{props.task}</Text>
            <TouchableOpacity onPress={() =>props.deleteTask()}>
                <MaterialIcons name="delete" size ={18} color='#fff'/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default TaskItem