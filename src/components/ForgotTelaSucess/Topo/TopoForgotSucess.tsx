import React from "react";
import { Image, StyleSheet, View, ViewStyle, StyleProp } from "react-native";
import { SvgXml } from "react-native-svg";
import { ovniForgot } from "./OvniForgot";
type TopoForgotSucess = {
   
   style?: StyleProp<ViewStyle>;
}
export default function TopoForgotSucess({style}: TopoForgotSucess) {
  return (
    <View style={[styles.topo, style]} 
    
     
    >
       
        <Image  style = {styles.imagemTopo}source={require('../../../images/CadEstrelas.png')}/>
        <SvgXml style = {styles.planeta} xml={ovniForgot}/>
        
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
    position:"absolute",
    top:"50%"
 },
 voltar:{
    position:"absolute",
    marginLeft:"5%",
    top:"20%"
 }
 
});
