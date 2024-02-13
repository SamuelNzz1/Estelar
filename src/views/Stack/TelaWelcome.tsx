
import React, {useState} from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { welcomeSvgLogo } from "../../svgs/welcomeTela/welcomeSvgLogo";
import { ButtonGo } from "../../svgs/welcomeTela/ButtonSvg";
import { SvgXml } from "react-native-svg";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { vector1, vector2 } from "../../svgs/welcomeTela/vectorElements";
import TextEstelar from "../../components/ComponentesGenericos/CustomText";
import { RFValue as RF } from "react-native-responsive-fontsize";
import PreparatorioImage from '../../images/Preparatorio.png';
type WelcomeProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
}

import { RFValue } from "react-native-responsive-fontsize";
export default function Welcome( {navigation}: WelcomeProps) {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const handleBackgroundLoad = () => {
    setBackgroundLoaded(true);
  };
  
  
  const [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    
  }
  console.log(PreparatorioImage);

  return (
    <ImageBackground 
    style={styles.container} 
    resizeMode="cover"
    source={require("../../images/telawelcome.png")}
    onLoad={handleBackgroundLoad}
    >
      {backgroundLoaded && <View style={styles.welcomeEstelar}>
        

        <View style={styles.welcomeMensagem}>
          
          <SvgXml style = {styles.logo} xml={welcomeSvgLogo} />
          
          <TextEstelar  style={styles.welcomeTexto}>Explore o universo</TextEstelar>

          
          <View style = {styles.parteBaixo}>
            <View style={styles.welcomeSubTextos}>
              <TextEstelar   style={styles.welcomeSubTexto}>
                Aprenda sobre o espaço e tudo
              </TextEstelar>
             <TextEstelar  style={styles.welcomeSubTexto2}>
               o que esconde por trás dele.
             </TextEstelar>
            </View>
            <TouchableOpacity>
            <SvgXml onPress={()=> navigation.navigate('Login') } style={styles.buttonSvg} xml={ButtonGo} />
            </TouchableOpacity>
          </View>

         
        </View>
      </View>}
      
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },parteBaixo: { alignItems: "center", justifyContent: "flex-end", height: "75%"},
  welcomeEstelar: {
    flex: 1,
    
    
  },
  welcomeMensagem: {
    flex: 1,
    marginTop: "10%",
    width: "100%",
    height: "100%",
    
    alignItems: "center",
    gap: 5,
  },
  logo: {
     
  },
  vectors: {
    flexDirection: "row",
    gap: 2,
  
    marginTop: "23%",
  },
  welcomeTexto: {
    color: "white",
    fontSize: RFValue(28),
    marginTop: "5%"
    
    
  },
  welcomeSubTextos: {marginTop: "95%"},
  welcomeSubTexto: {
    color: "white",
    fontSize: RFValue(15),
    
  },
  welcomeSubTexto2: {
    color: "white",
    fontSize: RFValue(15),
    marginLeft: "4%",
  },
  svg: { position: "absolute" },

  buttonSvg: {
  
    
  },
 
});
