import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, View, TextStyle, StyleProp, ViewStyle} from "react-native";
import { SvgXml } from "react-native-svg";
import TextEstelar from "../ComponentesGenericos/CustomText";
import { bolinhasTop } from "../../svgs/bolinhasHomeTop";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { bolonaHome } from "../../svgs/bolona";
import { RetanguloTorto } from "../../svgs/retanguloTortoHome";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
type topoHome = {
   
   style?: StyleProp<ViewStyle>;
}

export default function TopoHome({style} : topoHome) {
    const [userName, setUserName] = useState<string | null>(null);


   useEffect(() => {
      const auth = getAuth();

      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            // Se o usuário estiver autenticado, atualize o estado com o nome do usuário
            setUserName(user.displayName);
         } else {
            // Se o usuário não estiver autenticado, defina userName como null ou qualquer valor padrão desejado
            setUserName(null);
         }
      });

      // Certifique-se de descadastrar o ouvinte ao desmontar o componente
      return () => unsubscribe();
   }, []);  // Passar um array vazio para garantir que o efeito seja executado apenas uma vez

    
    return (
    <View style={[styles.topo, style]} 
    
     
    >

        <SvgXml style={styles.bolona} xml={bolonaHome}/>
        <View style = {styles.grup}>
            <SvgXml style={styles.bolinhas} xml = {bolinhasTop}/>

            {userName ?
            <TextEstelar style={styles.bemvindo}>Olá, {userName}</TextEstelar>
            :
            <TextEstelar style={styles.bemvindo}>Olá, Anonymous</TextEstelar>
            
            }
            
        </View>

        <SvgXml style={styles.retangulo} xml={RetanguloTorto} />
   
        
        
       



    </View>
  );
}
const styles = StyleSheet.create({
 topo:{
    width:"100%",
    height:"30%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#14132E",

    
    

 },
    grup:{gap: 25, paddingLeft: 35, marginTop: "22%"},
 bolinhas:{
    


 },retangulo:{
    position: "absolute",
    alignSelf: "flex-end",
    
 },
 
    bolona:{position: "absolute"},
 bemvindo:{
    color:"white",
    fontSize: RF(25)
 }


 
});
