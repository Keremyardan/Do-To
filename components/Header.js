import React from "react";
import { View, Text } from "react-native";

const today = new Date().toISOString().slice(0,10);

const Header = () => {
    return (
        <View>
            <Text>To-Do</Text>
            <Text>{today}</Text>
        </View>
    )
}

export default Header;