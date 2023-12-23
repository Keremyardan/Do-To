import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons';

const TaskItem = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.indexcontainer}>
            <Text style={styles.index}>{props.index}</Text>
        </View>
        <View style={styles.taskcontainer}> 
            <Text style={styles.task} >{props.task}</Text>
            <TouchableOpacity onPress={() =>props.deleteTask()}>
                <MaterialIcons style={styles.delete} name="delete" size ={18} color='#fff'/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container:{
    flexDirection:'row',
    marginHorizontal:20,
  },
  indexcontainer:{
    backgroundColor:'#00000',
    borderRadius:12,
    marginRight:10,
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
  },
  index:{
    color:'red',
    fontSize:20,
  },
  taskcontainer:{
    backgroundColor:'#3E3364',
    borderRadius:12,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    flex:1,
    paddingHorizontal:10,
    paddingVertical:5,
    minHeight:50,
  },
  task:{
    color:'#fff',
    width:'%90',
    //fontSize:'16',
  },
  delete:{
    marginLeft:10,
  }
})

export default TaskItem