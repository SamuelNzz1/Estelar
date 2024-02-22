import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

type inputEst = {
    placeholder: string;
    color: string ;
    colorBack: string;
    boolean?: boolean;
    keyboardType?: string | any,
    autoCapitalize?: string | any,
    value: string,
    
    onChangeText: (text: string, type: string) => void;
}

export default function InputEst({placeholder, color, boolean, colorBack, keyboardType, autoCapitalize, value, onChangeText} : inputEst){

    const windowHeight = Dimensions.get("window").height;
    const windowWidth = Dimensions.get("window").width;
    return(
    <>
    
   
          
          <TextInput  onChangeText={(value) => onChangeText(value, placeholder)} value = {value} keyboardType={keyboardType} autoCapitalize={autoCapitalize}  placeholder={placeholder} placeholderTextColor={color} secureTextEntry = {boolean} style = {[styles.inputStyle2, {backgroundColor:colorBack}]} >
          
          </TextInput> 
          
          

       
    </>)
}

const styles = StyleSheet.create({
    inputStyle:{
        fontFamily:'Poppins_400Regular',
        width: 325,
        height: 55,
        
        borderRadius: 10,
        color:"white",
        padding: 20
        
    },  inputStyle2 :{
        fontFamily:'Poppins_400Regular',
        width: 325,
        height: hp(8),
        
        borderRadius: 10,
        color:"white",
        paddingLeft: 20,
       
        
    },


})
