import React from "react";
import { Image, ImageBackground, StyleSheet, View, TextStyle, StyleProp, ViewStyle, TouchableOpacity} from "react-native";
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
        <TouchableOpacity onPress={() => navigation.navigate('Login') } style = {styles.voltar}>
        <SvgXml  xml={ButtonBack}/>
        </TouchableOpacity>
       



    </View>
  );
}
const styles = StyleSheet.create({
 topo:{
        zIndex: -0,
        position: "relative"

 },
 imagemTopo:{
    height:"100%",
    width:"100%",
    resizeMode:"cover",
    zIndex: -1,
 },
 planeta:{
    position: "absolute",
    alignSelf: "center",
    marginTop: "13%",
    zIndex: 0,
 },
 voltar:{
    position:"absolute",
    marginLeft:"5%",
    top:"20%",
    zIndex: 0,
 }
 
});
