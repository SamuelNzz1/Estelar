import React from "react";
import TextEstelar from "../../components/ComponentesGenericos/CustomText";
import Container from "../../components/ComponentesGenericos/Container";
import TopoHome from "../../components/HomeTela/TopoHome";
import { StyleSheet } from "react-native";
import MidleHome from "../../components/HomeTela/MidleHome";
type navi = {
    navigation: any
}
export default function Home({navigation}: navi){
    return(
        <Container color= "#171636">
            <TopoHome style = {styles.topoHome}/>
            <MidleHome navigation={navigation} ></MidleHome>
        </Container>
    )
}
const styles = StyleSheet.create({
   topoHome: {

   }
})