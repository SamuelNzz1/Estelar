import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { jupiter, mercurio, terra, marte } from "../../../svgs/planetsSvg";
import TextEstelar from "../../ComponentesGenericos/CustomText";
import { PlanetsEp } from "../../../dados/PlanetsProps";
import { RFValue as RF } from "react-native-responsive-fontsize";
type PropsMidleSobre = {
    navigation: any,
    number: number
}
export const MidleSobreEp: React.FC<PropsMidleSobre> = ({navigation, number}) => {
    const imagem1 : any = PlanetsEp[number - 1].imagem1;
    const imagem2 : any = PlanetsEp[number - 1].imagem2;
    const imagem3 : any = PlanetsEp[number - 1].imagem3;
    return (
    <View style = {{ alignItems: "center", paddingHorizontal: 10, marginBottom: 20}}>
        
        <View style = {{borderColor: "white", gap: 10  }} >
                <SvgXml xml={ number == 1 ? jupiter : number == 2 ? marte : number == 3 ? terra : mercurio } style = {{ alignSelf:"center"}} />
                    <View style = {{ width: "100%",}}>
                    <TextEstelar  style={[styles.textpadrao, {fontSize: RF(40)}]} >
                        {
                        PlanetsEp[number - 1].nome   
                        }
                    </TextEstelar>
                    <TextEstelar style={styles.textpadrao}>
                        {
                        PlanetsEp[number - 1].subtitulo
                        }
                    </TextEstelar>
                    </View>
                    <View style = {{borderTopWidth: 2, borderBottomWidth: 1, paddingVertical: 20, borderColor: "white", width: "100%",  }}>
                    
                    <TextEstelar style={[ styles.textpadrao, {fontSize: RF(12)} ]}>
                            {
                            PlanetsEp[number - 1].descricao
                            }
                    </TextEstelar>
                
                    </View>
                   
        </View>
                    <View
                    style = {{width: "100%"}}
                    >
                        <TextEstelar style={styles.textpadrao}>
                            Galeria    
                        </TextEstelar>  
                        <ScrollView
                        showsHorizontalScrollIndicator = {false}
                        horizontal = {true}
                        contentContainerStyle = {{height: 200, gap: 20}}
                        >
                        
                                <Image source={imagem1} style = {{height: 170, width: 200}} resizeMode="contain" />
                                <Image source={imagem2} style = {{height: 170, width: 200}} resizeMode="contain" />
                                <Image source={imagem3} style = {{height: 170, width: 200}} resizeMode="contain" />

                         
                        </ScrollView>
                    </View>
       

    </View>
    )   
}

const styles = StyleSheet.create({
    textpadrao: {
        color: "white",
        fontSize: RF(25)
    }
})