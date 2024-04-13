import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { cardEpEli } from "../../../../svgs/cardEp";
import { jupiter ,terra, marte, mercurio } from "../../../../svgs/planetsSvg";
import { SvgXml } from "react-native-svg";
import { RFValue as RF } from "react-native-responsive-fontsize";
import TextEstelar from "../../../ComponentesGenericos/CustomText";
import { goEp } from "../../../../svgs/goEp";
type PropsCardPlanet = {
    navigation : any,
    name: string,
    subtitulo: string,
    number: number,
    svg: string
}
export const CardPlanet: React.FC<PropsCardPlanet> = ({navigation, name, subtitulo, number, svg }) => {
    const navegar = () =>{
        navigation.navigate("TelaSobreEp", {number})
    }
    return(
    <View style = {styles.card}>
        <SvgXml style = {{position: "absolute", left: 0, top: 0}} xml={cardEpEli} />
        <SvgXml style = {{position: "absolute", left: -20, top: -50, overflow: "visible"}} xml={svg} />
        <View style = {{gap: 10, position: "absolute", bottom: 20, marginLeft: 30}}>
            <TextEstelar style = {styles.textTitulo} >
                {name}
            </TextEstelar>
            <TextEstelar style = {styles.textSubTitulo} >
                {subtitulo}
            </TextEstelar>
            
        </View>
        <TextEstelar
                style={{color: "#3265B1", fontSize: RF(120), position: "absolute", right: 40, bottom: 80}}
            >
                {number} 
        </TextEstelar>
        <TouchableOpacity onPress={navegar} style = {{position: "absolute", bottom: 20, right: 5}} >
            <SvgXml  xml={goEp}/>
        </TouchableOpacity>
    </View>
    )
}


const styles = StyleSheet.create({
    card: {
        width: "85%",
        height: 320  ,
        backgroundColor: "white",
        borderRadius: 40,
      

    },
    textTitulo: {
        fontSize: RF(30),
        color:  "#1A2C5A"
    },
    textSubTitulo: {
        width: "70%",
        color: "#3F4F88",
        
    }

})