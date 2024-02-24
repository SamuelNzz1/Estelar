import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { ButtonBack } from "../CadastroTela/CadTopo/ButtonBack";

type propsTopo = {
    navigation: any

}
export const TopMapViagem: React.FC<propsTopo> = ({navigation}) =>{
    return(
    <View
        style = {styles.topo}
        >
        <TouchableOpacity onPress={() => navigation.goBack()} style = {styles.voltar}>
            <SvgXml  xml={ButtonBack}/>
        </TouchableOpacity>
        

    </View>
    
    )


}
const styles = StyleSheet.create({
    topo:{
        backgroundColor: "#14132E",
        height: "12%",
        justifyContent: "center"
    },
    voltar:{
        marginLeft: "5%"
       
        
    }
    

})