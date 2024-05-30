import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { TopTelaSobreEp } from "../../components/TelaSobreEp/TopTelaEp/TopTelaSobreEp";
import { MidleSobreEp } from "../../components/TelaSobreEp/MidleTelaSobreEp/MidleSobreEp";

type PropsSobreEp = {
    route : any,
    navigation : any,
}
export const TelaSobreEp: React.FC<PropsSobreEp> = ({route, navigation}) =>{
    const { number } = route.params;
    return (
    <SafeAreaView
        style = {{flex: 1, backgroundColor: "#171636"}}
    >
        <ScrollView 
         showsVerticalScrollIndicator = {false}
         contentContainerStyle = {{}}>

            <TopTelaSobreEp 
                navigation={navigation}
                number = {number}
            />
            <MidleSobreEp
                navigation={navigation}
                number={number}
            />
        </ScrollView>
        
    
    </SafeAreaView>
    )
}