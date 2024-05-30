import React from "react";
import Container from "../../components/ComponentesGenericos/Container";
import TopoHome from "../../components/HomeTela/TopoHome";
import { StatusBar, StyleSheet } from "react-native";
import MidleHome from "../../components/HomeTela/MidleHome";
type navi = {
    navigation: any
}
export default function Home({navigation}: navi){
    return(
        <Container color= "#171636">
            <StatusBar backgroundColor="#14132E" barStyle="light-content" />
            <TopoHome style = {styles.topoHome}/>
            <MidleHome navigation={navigation} ></MidleHome>
        </Container>
    )
}
const styles = StyleSheet.create({
   topoHome: {

   }
})