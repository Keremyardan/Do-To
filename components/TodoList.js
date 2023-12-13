import React from "react";
import {Entypo} from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons";
import { Button, View } from "react-native";

const TodoList = ({item, deleteitem}) => {
    return (
        <View>
            <View>
                <Entypo name="circle" size={20} color="midnightblue"/>
            </View>
            <View>
                <Text>{item.value}</Text>
                <Text>task</Text>
            </View>
            <Button onPress={()=> deleteitem(item.key)}>
                <MaterialIcons name="delete" size={24} color="midnightblue"/>
            </Button>
        </View>
    )
}