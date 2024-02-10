import React from "react";
import { Image, StyleSheet, View } from "react-native";
import TextEstelar from "../ComponentesGenericos/CustomText";
import { SvgXml } from "react-native-svg";
import { useState } from "react";
import { RFValue as RF } from "react-native-responsive-fontsize";
type CardStatus = {
    imageStatus: string,
    titulo: string,
    status: string,
    statusNumber: number,
    cor: string

} 

export default function CardStatus({status, titulo, imageStatus, statusNumber,cor}:CardStatus){
    



    return(
        <View style = { [  styles.cardStatus, {shadowColor: cor}] }>
            
        <View style = {styles.esquerdo}>
            <TextEstelar style={styles.textoprincipal}>
                {titulo}
                
            </TextEstelar>
            <TextEstelar style={styles.textosecu}>
                {status} {statusNumber}
            </TextEstelar>
        </View>
        <View style = {styles.direito}>
            <Image style = {styles.image} source={require("../../images/retang.png")}/>
        </View>
  </View>)

}

const styles = StyleSheet.create({
    cardStatus: {
        width: '80%',
        height: 120,
        backgroundColor: '#212251',
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 100,  // Ajuste conforme necessário para a altura da sombra
          // Cor da sombra
        shadowOffset: { width: 0, height: 20 },  // Configuração de offset da sombra
        shadowOpacity: 0.5,  // Opacidade da sombra
        shadowRadius: 4,  // Raio da sombra
      },
    image:{
        width: 90,
        height: 90,
        position: "absolute",
        left: 30

    },
    esquerdo:{
        width: "50%",
        gap: 10,
        paddingLeft: 30
    
    },
    direito:{
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    },textoprincipal: {
        color: "white",
        fontSize: RF(17),
        
    
    },
    textosecu: {
        color: "white",
        fontSize: RF(13),
        
        
    
    },

})