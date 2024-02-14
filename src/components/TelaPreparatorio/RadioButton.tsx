import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useState } from "react";
import TextEstelar from "../ComponentesGenericos/CustomText";
type check = {
    text: string,
    isSelected: boolean,

}

export const RadioButton : React.FC<check> = ({text, isSelected}) =>{
    return(
        <View style = {styles.radioGroup}>
         
            <View style = {styles.check}>
                {
                isSelected &&
                <View style = {styles.checked}></View>
                }
            </View>
            <TextEstelar style={styles.textRadio}>{text}</TextEstelar>
        </View>
    )

}
const styles = StyleSheet.create({
    check:{
        width: 20,
        height: 20,
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 100,
        padding: 1
    },
    checked:{
        width:"100%",
        height: "100%",
        borderRadius: 100,
        backgroundColor: "#FF7747"
    },
    radioGroup:{
        flexDirection: "row",
        gap: 10,
        alignItems:"center"

    },
    textRadio:{
        color: "white",

    },
})