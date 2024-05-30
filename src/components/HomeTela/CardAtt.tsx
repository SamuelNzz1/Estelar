import React from "react";
import { ImageBackground, StyleSheet, View, TouchableOpacity } from "react-native";
import TextEstelar from "../ComponentesGenericos/CustomText";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { imageMapping } from "../../dados/HomeProps";

type AttsProps = {
  textoprincipal: string;
  imagemFundo: string;
  botao: string;
  location: string;
  navigation: any;
};


export default function CardAtt({ botao, textoprincipal, imagemFundo, location, navigation}: AttsProps) {
  
  const backgroundImage = imageMapping[imagemFundo];

  
    const onPressBotao = () => {
       
        navigation.navigate(location);
      };
     
    
  return (  
    <View style={styles.cardContainer}>
      <ImageBackground
        style={styles.imagemCard}
        source={backgroundImage}
        resizeMode="cover"
      >
       
      </ImageBackground>
      <View style = {styles.miniCardInfo}>
            
            <View style = {styles.esquerdo}>
                <TextEstelar style={styles.textoprincipal}>
                    {textoprincipal}
                </TextEstelar>
            </View>
            <View style = {styles.direito}>
              <TouchableOpacity style = {styles.botoes}  onPress={onPressBotao}>
                <SvgXml  xml={botao}/>
              </TouchableOpacity>
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 250, // Ajuste conforme necessário
    height: 350, // Ajuste conforme necessário
    borderRadius: 30,
    margin: 10,
    elevation: 50, // Sombra para dar a aparência de card
    justifyContent: "flex-end",
    position: 'relative', 
    overflow: "visible"
    
},miniCardInfo:{
    width: 220,
    height: "30%",
    backgroundColor: "#272650",
    borderRadius: 30,
    position:"absolute",
    alignSelf: "center",
    bottom: -50, // Ajuste conforme necessário para a posição desejada
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row"
    
    
    
    

},
esquerdo:{width: "80%"},
direito:{
    alignItems: "flex-end",
    justifyContent: "flex-end"
}, botoes:{
    position: "absolute",
    bottom: -50,
    left: -30
},
textoprincipal: {
    color: "white",
    fontSize: RF(15),
    paddingRight: 40,
    marginLeft: 10

},
  imagemCard: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent:"flex-end",
     overflow: "visible", 
    

  },
});