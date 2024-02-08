import React from "react";
import { StyleSheet, View, TouchableOpacity, StyleProp, ViewStyle} from "react-native";
import TextEstelar from "../ComponentesGenericos/CustomText";
import { RFValue as RF } from "react-native-responsive-fontsize";

type MensagemMidle = {
  style?: StyleProp<ViewStyle>;
  navigation: {navigate: (screen: string) => void;}
}
 
export default function MensagemMidle({ style, navigation} : MensagemMidle ) {
  return (
    <View style={[style, styles.containerMensagem]}>
      <TextEstelar style={styles.textCentral}>
        Verifique sua caixa de entrada!
      </TextEstelar>
      <TextEstelar  style = {styles.textSu}>
        Enviamos um e-mail para alteração da sua senha :D
      </TextEstelar>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.buttonEnviar}>
        <TextEstelar style={styles.enviar}>Voltar</TextEstelar>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  containerMensagem: {
    gap: 20,
    alignItems: "center",
    justifyContent:"center",
    padding: 10
  },
  textCentral: {
    color: "white",
    fontSize: RF(30)
  },
  textSu:{
    color: "white"
  }, buttonEnviar: {
    backgroundColor: "#FFAB4C",
    height: 50,
    width: 325,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  enviar:{color: "white"}
});
