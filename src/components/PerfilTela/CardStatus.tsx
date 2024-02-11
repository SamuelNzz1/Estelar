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
        <View>
        <View style = { [styles.sombraCard, {backgroundColor: cor} ]}>
            
            
        </View>

        <View style = { styles.cardStatus }>
            
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
        </View>
        </View>
        
        )

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
          
      },
      sombraCard: {
        width: '80%',
        height: 120,
        position: "absolute",
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        bottom: -12         
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