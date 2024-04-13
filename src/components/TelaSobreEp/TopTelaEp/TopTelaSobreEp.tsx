import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { ButtonBack } from "../../CadastroTela/CadTopo/ButtonBack";
import { stars } from "../../../svgs/stars";
import { RA } from "../../../svgs/RA";
type PropsTelaSobreEp = {
    navigation :  any,

}
export const TopTelaSobreEp: React.FC<PropsTelaSobreEp> = ({navigation}) => {
    return(
    <View
        style = {{height: "10%",}}
    >
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style = {{padding: 50}}
                >
                    <SvgXml  xml={ButtonBack} style = {styles.backButton}/> 
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.RA}
                >
                    <SvgXml xml={RA}   />
                </TouchableOpacity>
                <SvgXml xml={stars} style = {styles.stars}  />
    </View>)
}

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        left: 15,
        top: 10,
        zIndex: 2
    },
   
    RA:{
        position: "absolute",
        right: 20,
        top: 40,
       
        
    },
    stars: {
        position: "absolute",
        right: -30,
        top: 0,
    },

})