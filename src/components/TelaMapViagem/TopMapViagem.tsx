import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { ButtonBack } from "../CadastroTela/CadTopo/ButtonBack";
import { rankingIcon } from "../../svgs/ranking";

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
        <TouchableOpacity onPress={() => navigation.navigate("TelaRanking")} style = {styles.go}>
            <SvgXml  xml={rankingIcon}/>
        </TouchableOpacity>
        

    </View>
    
    )


}
const styles = StyleSheet.create({
    topo:{
        backgroundColor: "#14132E",
        height: "15%",
        justifyContent: "center",
        flexDirection: "row"
    },
    voltar:{
        position: "absolute",
        left: 20,
        alignSelf: "center"
        
    },
    go:{
        position: "absolute",
        right: 20,
       
        alignSelf: "center",
        
        
        
    }
    

})