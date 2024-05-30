import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import fundoResultado from "../../images/fundoResultado.png"
import { SvgXml } from "react-native-svg";
import { miniLogo } from "../../svgs/welcomeTela/minilogoSvg";
import { resultadoMissaoConcluida, resultadoMissaoFalhada } from "../../svgs/resultadoMissao";
import TextEstelar from "../../components/ComponentesGenericos/CustomText";
import { RFValue as RF } from "react-native-responsive-fontsize";
import completeMission from "../../images/completeMission.png"
import { starPoint} from "../../svgs/starPoint";
type resultadoProps = {
    route: any,
    navigation: any,
}
export const Resultado: React.FC<resultadoProps> = ({route, navigation}) =>{
    const [backgroundLoaded, setBackgroundLoaded] = useState<boolean>(false);
    const {quantidadeCertas} = route.params
    const missaoText = quantidadeCertas >= 3 ? "Missão Concluída!" : "Missão Falhada!";
    const handleBack = () =>{
        setBackgroundLoaded(true);
    }
    return(
    <ImageBackground
    onLoad={handleBack}
    source={fundoResultado}
    style = {{flex: 1, alignItems:"center"}}
    >   
        {backgroundLoaded &&
        <>
            <View
            style= {styles.viewTopo}
            >
                <SvgXml xml={miniLogo} style = {{alignSelf:"center"}}/>

            </View>
            <View>


            </View>
            <View
                style = {styles.cardResultado}
            >
                <SvgXml style = {{zIndex: -1, position:"absolute", top: 50 }} xml={quantidadeCertas >= 3 ?  resultadoMissaoConcluida : resultadoMissaoFalhada}/>
                <TextEstelar
                style={{color: "white", fontSize: RF(20), position:"absolute", top: 60}}
                >
                   {missaoText}
                </TextEstelar>

                <Image
                    source={completeMission}
                    style={{width: 200, height: 200, marginTop: 80}}
                />
                <View style = {{flexDirection: "row",gap: 5, width: "100%", justifyContent:"center", alignItems:"center"}}>
                    <TextEstelar
                        style={{color: quantidadeCertas >= 3 ? "#78DA70" : "#DA7070", fontSize: 35}}
                    >
                        {(quantidadeCertas/5)*100}%
                    </TextEstelar>
                    <TextEstelar  style={{color: "white", fontSize: 35}}>
                        Score
                    </TextEstelar>
            
                </View>
                <View style = {{flexDirection: "row", gap: 5, alignItems: "center"}}>
                    <TextEstelar style = {{fontSize: RF(25), color: "#FF7747" }}>
                        +{quantidadeCertas*5}
                    </TextEstelar>
                    <SvgXml xml={starPoint} />
                </View>
                <TouchableOpacity  onPress = {() => navigation.navigate("TelaViagem")} style = {{alignItems:"center", backgroundColor:"#FC9E01", borderRadius:19, padding: 10, width: "80%", marginTop: 20}}>

                    <TextEstelar  style={{color: "#131332", fontSize: 17}}>
                        Ok
                    </TextEstelar>
                </TouchableOpacity>

            </View>
        </>
        }
        
           
           
    
    </ImageBackground>)

}
const styles = StyleSheet.create({
    viewTopo: {
        height: "20%",
        width:"100%",
        justifyContent:"center"

    },
    cardResultado: {
        width: "80%",
        height: "70%",
        backgroundColor: "#141332",
        borderRadius: 24,
        borderWidth: 2,
        borderColor: "#8DBFD4",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical: 10,
        

    }

})