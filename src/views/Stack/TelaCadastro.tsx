import React, { useState } from "react";
import CardFormCad from "../../components/CadastroTela/CadForm/CardFormCad";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";

import TopoCad from "../../components/CadastroTela/CadTopo/TopoCad";
import Container from "../../components/ComponentesGenericos/Container";
type cadNav = {
  navigation: {
    navigate: (screen: string) => void;
  };
}

export default function TelaCadastro({ navigation }: cadNav) {
  const [showImage, setShowImage] = useState(false);
  const mostrarImagem = () =>{
    setShowImage(prevState => !prevState);

  }

  return (
    <Container color="#111D47">
      <TouchableWithoutFeedback style={styles.touch} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.touch} behavior="padding" enabled>

        {showImage && (
        <Image
          source={require('../../images/fundoCadSucess.png')}
         style = {styles.successImage}
          />
        )}
          <TopoCad style={styles.topo} navigation={navigation} />
          <CardFormCad mostrarImagem = {mostrarImagem} style={styles.form} navigation={navigation} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
        justifyContent:"flex-end"
  },
  touch: {
    
    flex: 1,
  },
  topo: {
    height:"24%",    
  },
  form: {
    flex:1
},
successImage: {
  width: "100%",
  height: "100%",
  alignContent: "center",
  position: "absolute",
  zIndex: 1,
},
});
