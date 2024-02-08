import React from "react";
import { Image, ImageBackground, StyleSheet, View, TextStyle, StyleProp, ViewStyle} from "react-native";
import { SvgXml } from "react-native-svg";
import { CadastroPlaneta } from "./CadastroPlaneta";
import { ButtonBack } from "./ButtonBack";
import { miniLogo } from "../../../svgs/welcomeTela/minilogoSvg";
type TopoCad = {
   navigation: {
      navigate: (screen: string) =>void;
   }
   style?: StyleProp<ViewStyle>;
}

export default function TopoCad({style, navigation} : TopoCad) {
  return (
    <View style={[styles.topo, style]} 
    
     
    >
       
        <Image  style = {styles.imagemTopo}source={require('../../../images/CadEstrelas.png')}/>
        <SvgXml style = {styles.planeta} xml={miniLogo}/>
        <SvgXml  onPress={() => navigation.navigate('Login') } style = {styles.voltar} xml={ButtonBack}/>
       



    </View>
  );
}
const styles = StyleSheet.create({
 topo:{
        

 },
 imagemTopo:{
    height:"100%",
    width:"100%",
    resizeMode:"cover",
 },
 planeta:{
    position: "absolute",
    alignSelf: "center",
    marginTop: "13%"
 },
 voltar:{
    position:"absolute",
    marginLeft:"5%",
    top:"20%"
 }
 
});
