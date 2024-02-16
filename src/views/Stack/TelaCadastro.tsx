import React from "react";
import CardFormCad from "../../components/CadastroTela/CadForm/CardFormCad";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TopoCad from "../../components/CadastroTela/CadTopo/TopoCad";
import Container from "../../components/ComponentesGenericos/Container";
type cadNav = {
  navigation: {
    navigate: (screen: string) => void;
  };
}

export default function TelaCadastro({ navigation }: cadNav) {
  return (
    <Container color="#111D47">
      <TouchableWithoutFeedback style={styles.touch} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.touch} behavior="padding" enabled>
          <TopoCad style={styles.topo} navigation={navigation} />
          <CardFormCad style={styles.form} navigation={navigation} />
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
});
