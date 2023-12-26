import { View, Text, StyleSheet, Keyboard, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Retrieve tasks from AsyncStorage on component mount
    const retrieveTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Error retrieving tasks:', error);
      }
    };

    retrieveTasks();
  }, []);

  const addTask = async (task) => {
    if (!task) return;

    // Update local state
    setTasks([...tasks, task]);

    try {
      // Store tasks in AsyncStorage
      await AsyncStorage.setItem('tasks', JSON.stringify([...tasks, task]));
    } catch (error) {
      console.error('Error storing tasks:', error);
    }

    Keyboard.dismiss();
  };

  const deleteTask = async (deleteIndex) => {
    // Update local state
    setTasks(tasks.filter((value, index) => index !== deleteIndex));

    try {
      // Store updated tasks in AsyncStorage
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks.filter((value, index) => index !== deleteIndex)));
    } catch (error) {
      console.error('Error storing tasks:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Do-To..</Text>
      <ScrollView style={styles.scrollview}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskcontainer}>
            <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)} />
          </View>
        ))}
      </ScrollView>
      <TaskInputField addTask={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC594',
  },
  heading: {
    color: '#fff',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollview: {
    marginBottom: 70,
  },
  taskcontainer: {
    marginTop: 20,
  },
});

export default App;
