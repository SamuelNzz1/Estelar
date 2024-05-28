import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { SvgXml } from "react-native-svg"
import { ButtonBack } from "../CadastroTela/CadTopo/ButtonBack"
import TextEstelar from "../ComponentesGenericos/CustomText"
import { RFValue as RF } from "react-native-responsive-fontsize"

type TopProps = {
  navigation : any
}
export const TopRanking : React.FC<TopProps> = ({navigation}) => {
  
  return (
  <View
    style = {styles.topStyles}
  >
    <TouchableOpacity
      style = {{position : "absolute", left: 20, alignSelf: "center",}}
      onPress = {() => navigation.goBack()}
    >
      <SvgXml xml={ButtonBack}/>
    </TouchableOpacity>

    <TextEstelar
      style = {{color: "white", fontSize: RF(25), alignSelf: "center",}}
    >
        Ranking
    </TextEstelar>

  </View>
)

}

const styles = StyleSheet.create({
    topStyles:  {
        height: "12%",
        flexDirection: "row",
        justifyContent: "center"
    }
})