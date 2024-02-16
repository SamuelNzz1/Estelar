import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useState } from "react";
import TextEstelar from "../ComponentesGenericos/CustomText";
import { isSelectedRadio } from "../../svgs/isSelectedRadio";
import { SvgXml } from "react-native-svg";
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

export const RadioButton2 : React.FC<check> = ({text, isSelected}) =>{
    return(
        <View style = {styles.radioGroup}>
               { isSelected ?
                 <SvgXml style = {styles.checked2} xml={isSelectedRadio}/>
                : 
                <View style = {styles.check2}>
                  
                    </View>
                }
            <TextEstelar style={styles.textRadio2}>{text}</TextEstelar>
        </View>
    )

}

const styles = StyleSheet.create({
    check:{
        width: 25,
        height: 25,
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 100,
        padding: 1
    },
    check2:{
        width: 20,
        height: 20,
        borderColor: "#7C7C7C",
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
    checked2:{
        width: 20,
        height: 20,
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 100,
        padding: 1
        
    },
    radioGroup:{
        flexDirection: "row",
        gap: 10,
        alignItems:"center",
        width: "100%",

    },
    textRadio:{
        color: "white",

    },textRadio2:{
        color: "black",
       

    },
})