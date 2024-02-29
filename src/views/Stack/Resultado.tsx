import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import fundoResultado from "../../images/fundoResultado.png"
import { SvgXml } from "react-native-svg";
import { miniLogo } from "../../svgs/welcomeTela/minilogoSvg";
import { resultadoMissao, resultadoMissao2 } from "../../svgs/resultadoMissao";
import TextEstelar from "../../components/ComponentesGenericos/CustomText";
import { RFValue as RF } from "react-native-responsive-fontsize";
import completeMission from "../../images/completeMission.png"
type resultadoProps = {
    route: any,
    navigation: any,
}
export const Resultado: React.FC<resultadoProps> = ({route, navigation}) =>{
    const [backgroundLoaded, setBackgroundLoaded] = useState<boolean>(false);
    const {quantidadeCertas} = route.params
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
                <SvgXml style = {{zIndex: -1, position:"absolute", top: 50 }} xml={resultadoMissao}/>
                <TextEstelar
                style={{color: "white", fontSize: RF(20), position:"absolute", top: 60}}
                >
                    Missão Concluída!
                </TextEstelar>

                <Image
                    source={completeMission}
                    style={{width: 150, height: 150}}
                />
                <View style = {{flexDirection: "row",gap: 5, width: "100%", justifyContent:"center", alignItems:"center"}}>
                    <TextEstelar
                        style={{color: "#F26EB1", fontSize: 30}}
                    >
                        {(quantidadeCertas/5)*100}%
                    </TextEstelar>
                    <TextEstelar  style={{color: "white", fontSize: 30}}>
                        Score
                    </TextEstelar>
            
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