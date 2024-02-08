import React, { useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import TextEstelar from "../ComponentesGenericos/CustomText";
import { RFValue as RF } from "react-native-responsive-fontsize";
import CardAtt from "./CardAtt";
import { dados } from "../../dados/HomeProps";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";


type navi ={
    navigation: any
}
  
export default function MidleHome({navigation}:navi ) {
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
   
    
    

    return (
    <ScrollView
        showsVerticalScrollIndicator={false}
   contentContainerStyle = {styles.bodyScreen}
    >
    
        <View style = {styles.atts}>
            <TextEstelar style = { styles.attEst}>Atividades</TextEstelar>
            <ScrollView
             
              horizontal = {true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.cardContainer}
              
             
            >
                {dados.map((carac, index) => (
                    <CardAtt navigation={navigation} key={index} {...carac} />
                 ))}
      </ScrollView>
        </View>
    </ScrollView>
    )

}
const styles = StyleSheet.create({
    bodyScreen:{
        paddingLeft: 30,
        overflow: "visible",
        height: 550,
        padding: 10
       
    
    },attEst:{
        color: "#FFCC70",
        fontSize: RF(15),
        marginTop: "10%"        
    },atts:{
        flex: 1,overflow: "visible"
        


    },cardContainer:{
        flexDirection: 'row',
        overflow: "visible",
        
        alignItems: "center",
        gap: 30
        

    }

})