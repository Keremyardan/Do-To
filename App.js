import { View, Text, StyleSheet, Keyboard, ScrollView,  } from 'react-native';
import React, { useState } from 'react';
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';


const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task==null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value,index)=>index != deleteIndex))
  }

  return (
    <View style={styles.container}>
      <Text styles={styles.heading}>
        Do-To..
      </Text>
      <ScrollView style={styles.scrollview}>
        {
          tasks.map((task,index)=> {
            return(
              <View key={index} style={styles.taskcontainer}>
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
  heading: {
    color:'#fff',
    //fontSize:20,
    marginTop:30,
    marginBottom:10,
    marginLeft:20,
  },
  scrollview:{
    marginBottom:70
  },
  taskcontainer:{
    marginTop:20,
  }
})

export default App