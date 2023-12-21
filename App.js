import { View, Text, StyleSheet, Keyboard, ScrollView,  } from 'react-native';
import React, { useState } from 'react';
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';


const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task==null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value,index)=>index != deleteIndex))
  }

  return (
    <View>
      <Text>
        Do-To..
      </Text>
      <ScrollView>
        {
          tasks.map((task,index)=> {
            return(
              <View key={index}>
                <TaskItem index={index+1} task={task} deleteTask={()=> deleteTask(index)}/>
              </View>
            );
          })
        }
      </ScrollView>
      <TaskInputField addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:'#FFC594',
    
  },
  text:{
    color:'#fff',
    borderWidth:1,
    fontSize:30,
    //fontWeight:300,
    marginTop:30,
    marginBottom:10,
    marginLeft:20,
  }
})

export default App