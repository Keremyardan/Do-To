import React from "react";
import { View, Text, Image } from "react-native";


const Empty = () => {
    return (
        <View>
        <Image source = {require("../assets/employees.png")}/>
        <Text>Add To-Do</Text>
        </View>
    )
}

export default Empty;