import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

type propsBottom = {
    
}

export const BottomMapViagem: React.FC<propsBottom> = () => {
    return(
    <View
        style = {styles.bottomMap}
    >
            
    </View>
    )
}   

const styles = StyleSheet.create({
    bottomMap:{
        height: 60,
        backgroundColor: "#272650",
        width: "100%"
    }
})