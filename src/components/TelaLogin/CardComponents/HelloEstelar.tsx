import React from "react";
import { Text, StyleSheet } from "react-native";
import TextEstelar from "../../ComponentesGenericos/CustomText";
import { RFValue as RF } from "react-native-responsive-fontsize";
export default function HelloEstelar(){
    return(
        <>
            <TextEstelar style = {styles.textHellow}> Vamos começar!</TextEstelar>
        </>
    )
}
const styles = StyleSheet.create({
    textHellow:{
        fontSize: RF(25),
        color: "white",
        fontFamily:'Poppins_400Regular'
    }

})
