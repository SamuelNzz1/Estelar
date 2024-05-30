import React from "react";
import { ButtonBack, ButtonGoo } from "../../CadastroTela/CadTopo/ButtonBack";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import TextEstelar from "../../ComponentesGenericos/CustomText";
import { SvgXml } from "react-native-svg";
import { RFValue as RF } from "react-native-responsive-fontsize";

type typeTopo ={
    navigation: any,
    numberQ: number,
    backQuestion: () => void,
    passQuestion: () => void,
    provaQuantidadeQuestoes: number,
    visibleButton: boolean

}

export const TopoQuests: React.FC <typeTopo> = ({navigation, numberQ, backQuestion, passQuestion,visibleButton, provaQuantidadeQuestoes}) =>{
   
    return (
    <View style = {styles.topoOptions}>  
       {numberQ == 1 && visibleButton ?
       <TouchableOpacity onPress={()=> navigation.goBack()} style = {styles.buttonBack}>
            <SvgXml xml={ButtonBack}/>
       </TouchableOpacity>
       : visibleButton &&
       <TouchableOpacity onPress={backQuestion} style = {styles.buttonBack}>
            <SvgXml xml={ButtonBack}/>
       </TouchableOpacity>
      }
       <TextEstelar style={styles.textQ}>
        Questão {numberQ}/10
       </TextEstelar>
       
       {numberQ < provaQuantidadeQuestoes && visibleButton &&
        <TouchableOpacity onPress={passQuestion} style = {styles.buttonGo}>
            <SvgXml xml={ButtonGoo}/>
        </TouchableOpacity>
       
       }
       

    </View>
    )
}
const styles = StyleSheet.create({
    topoOptions: {
        flexDirection: "row",
        height: "12%",
        width: "100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#171636"

    },
    buttonBack:{
        position: "absolute",
        left: 10
    },
    buttonGo:{
        position: "absolute",
        right: 10
    },
    textQ:{
        color:"white",
        fontSize: RF(16)
    }

})