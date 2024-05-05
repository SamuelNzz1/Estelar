import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Linking } from "react-native";
import { SvgXml } from "react-native-svg";
import { ButtonBack } from "../../CadastroTela/CadTopo/ButtonBack";
import { stars } from "../../../svgs/stars";
import { RA } from "../../../svgs/RA";
type PropsTelaSobreEp = {
    navigation :  any,
    number: number
}
export const TopTelaSobreEp: React.FC<PropsTelaSobreEp> = ({navigation, number}) => {
    const [modelo, setModelo] = useState<any>("");
    useEffect(() => {
        if(number == 1){
            setModelo("/jupiter.glb");
            
        }
        else if(number == 2){
            setModelo("/marte.glb");
        }
        else if(number == 3){
            setModelo("/terra.glb");
        }
        else if (number == 4){
            setModelo("/mercurio.glb");
        }     
        else if(number == 8){
            setModelo("/netuno.glb");
        }
        
    }, [number])
  
    
    const openAR = () => {
        const url = `https://estelar-ar.vercel.app/?modelo=${encodeURIComponent(modelo)}`;
        
        Linking.openURL(url).catch(err => console.error("Não foi possível carregar a página", err));

    }
    
  
   

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
                    onPress={openAR}
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
        zIndex: 3
       
        
    },
    stars: {
        position: "absolute",
        right: -30,
        top: 0,
    },

})