import React from "react";
import { SvgXml } from "react-native-svg";
import { ButtonBack } from "../../../components/CadastroTela/CadTopo/ButtonBack";
import { miniLogo } from "../../../svgs/welcomeTela/minilogoSvg";
import { stars } from "../../../svgs/stars";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import TextEstelar from "../../ComponentesGenericos/CustomText";
import InputEst from "../../ComponentesGenericos/InputEstelar";
import { RFValue as RF } from "react-native-responsive-fontsize";
type PropsTopEp = {
    navigation : any,
    nameProd: string,
    onChangeText: (atributo : string, type: string) => void;

}

export const TopEp: React.FC<PropsTopEp> = ({navigation, nameProd, onChangeText}) => {
   
    return (
    <View style = {styles.topo}>
        <View style = {{width:"100%"}}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                >
                    <SvgXml  xml={ButtonBack} style = {styles.backButton}/> 
                </TouchableOpacity>
                <SvgXml xml={miniLogo} style = {styles.logo}  />
                <SvgXml xml={stars} style = {styles.stars}  />
                <View style = {styles.textsTop}>
                    <TextEstelar
                        style={[styles.textEsp, styles.textTitulo]}
                    >
                        Espaço
                    </TextEstelar>
                    <TextEstelar
                        style={[styles.textPadrao, styles.textTitulo]}
                    >
                        Virtual
                    </TextEstelar>

                </View>
        </View>
        <InputEst 
            placeholder="Procure por planetas"
            color="#B8B8B8"
            colorBack="#272650"
            onChangeText = {onChangeText}
            value={nameProd}
            style={styles.searchInput}
        />

        


    </View>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        left: 15,
        top: 10
    },
    topo: {
        width: "100%",
        height: "40%"
        
        
        
        
    },
    logo:{
        position: "absolute",
        right: 20,
        top: 40
    },
    stars: {
        position: "absolute",
        right: -30,
        top: 0,
    },
    textsTop: {
        gap: 0,
        position: "absolute",
        left: 35,
        top: 80
        
    },
    textPadrao: {
        color: "white",
        

    },
    textTitulo: {
        fontSize: RF(30),

    },
    textEsp:{
        color: "#FF7747"
    },
    searchInput:{
        position: "absolute",
        top: 180,
        alignSelf: "center",
    }
})