import React, {useState} from "react";
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';

const AddInput = () => {
    const [value, setValue] = useState ("");

    const onchangeText = (text) => {
        setValue(text);
    };

    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} splaceholder="add task" onchangeText={onchangeText}/>
            </View>
            <TouchableOpacity 
            onPress={()=>{
            alert('Button Clicked')}}
            >
            <Text>Submit!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flexDirection:'column',
        alignItems:'center'
    },

    view: {

    },
    input: {

    }

})

export default AddInput;