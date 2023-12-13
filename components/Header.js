import React from "react";
import { View } from "react-native";

let today = new Date().toISOString().slice(0,10);

const Header = () => {
    return (
        <View>
            <Text>To-Do</Text>
            <Text>{today}</Text>
        </View>
    )
}