import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { ButtonBack } from "../CadastroTela/CadTopo/ButtonBack";
import TextEstelar from "../ComponentesGenericos/CustomText";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { cronometro } from "../../svgs/cronometroSvg";
type propsTopoJornada = {
    navigation: any,
    planet: string,
    numberQ: number,
    tempoRestante: number
}
export const TopoQuestJornada: React.FC<propsTopoJornada> = ({navigation, planet, numberQ, tempoRestante}) =>{
    return (
    <View style = {styles.topoView}>
        <View style = {styles.acima}>
            <TouchableOpacity onPress={() => navigation.goBack()} style = {styles.voltar}>
                <SvgXml  xml={ButtonBack}/>
            </TouchableOpacity>
            <TextEstelar
                style = {styles.textPlanet}
            >
                {planet}
            </TextEstelar>
            <View
            style = {styles.cronometro}
            >      
                <TextEstelar
                    style={styles.cronometroCounter}
                >
                    {tempoRestante}
                </TextEstelar>
                <SvgXml style = {styles.cronometroSvg}  xml = {cronometro} />

                
            </View>
        </View>
        <View style = {styles.abaixo}>
            <View
                style = {styles.progressBar}
            >   
                <View
                style = {[styles.progress,  { width : numberQ === 1 ? "20%" : numberQ === 2 ? "40%" : numberQ === 3 ? "60%" : numberQ === 4 ? "80%" : "100%" } ]}
                >   
                </View>
            </View>
            <View style = {styles.textBar}>
                <TextEstelar
                    style = {styles.numberq}
                >
                    {numberQ}
                </TextEstelar>
                <TextEstelar
                    style = {styles.numberqmax}
                >
                    /5
                </TextEstelar>
            </View>
        </View>

    </View>)

}
const styles = StyleSheet.create({
    topoView: {
        alignItems:"flex-start",
        justifyContent:"flex-start",
        height: "20%",
        width: "100%",
        paddingHorizontal: 10
        
        
    },
    voltar:{
            
        
    },
    textPlanet: {
        color: "white",
        fontSize: RF(18),
        marginTop: 10,
        marginLeft: 35
    },
    acima: {
        flexDirection: "row",
        height: "55%",
        width: "100%",
        alignItems:"center",
    },

    abaixo: {
        width: "100%",
        height: "45%",
        alignItems: "center",
        justifyContent:"center"
    },
    cronometro: {
        backgroundColor: "white",
        width: 80,
        height: 30,
        borderRadius: 100,
        position: "absolute",
        right: 20,
        alignItems:"center",
        flexDirection: "row",
        justifyContent:"flex-start",
        paddingHorizontal: 10,
        gap: 15

    },
    progressBar:{
        width: "100%",
        height: 10,
        borderRadius: 100,
        backgroundColor: "#7551B4"
    },
    progress:{
        height: "100%",
        backgroundColor: "#DB8C16",
        borderRadius: 100
    },
    numberq: {
        color: "#DB8C16",
        fontSize: RF(20)
    },
    numberqmax: {
        color: "#7551B4",
        fontSize: RF(18),
        marginTop: 5
    },
    textBar: {
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection: "row",
        width:"100%"

    },
    cronometroCounter: {
        fontSize: RF(18),
        color: "#0C002F" 

    },
    cronometroSvg:{
        position:"absolute",
        right: 15

    }
   


})