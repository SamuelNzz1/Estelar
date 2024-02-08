import React from "react";
import Container from "../../components/ComponentesGenericos/Container";
import TextEstelar from "../../components/ComponentesGenericos/CustomText";
import { StyleSheet } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { ButtonBack } from "../../components/CadastroTela/CadTopo/ButtonBack";
    type navi = {
        navigation: any;
    }

export default function EmBreve({navigation} : navi){
    return(
        <Container style={styles.cont}color="#171636" >
            <SvgXml onPress={() => navigation.navigate('HomeTab') } style = {styles.voltar} xml={ButtonBack}/>
            <TextEstelar style={styles.title}>Em breve! :) 🪐</TextEstelar>
        </Container>
    )
}
const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: RF(15)
    }, cont:{
        alignItems: "center",
        justifyContent:"center"
    },voltar:{
        position:"absolute",
        left: 20,
        top:"10%"
     }

})