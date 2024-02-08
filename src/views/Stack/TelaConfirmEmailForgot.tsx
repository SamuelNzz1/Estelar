import React from "react";
import TopoCad from "../../components/CadastroTela/CadTopo/TopoCad";
import Container from "../../components/ComponentesGenericos/Container";
import { Keyboard, StyleSheet } from "react-native";
import { KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { CardEmail } from "../../components/ForgotEmailTela/CardEmail";
type TelaConfirmEmailForgot ={
    navigation:{
      navigate: (screen:string) => void;
    }
  }
export default function TelaConfirmEmailForgot({ navigation }: TelaConfirmEmailForgot){

return (
<Container color="#111D47">
      <TouchableWithoutFeedback style={styles.touch} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.touch} behavior="padding" enabled>
          <TopoCad style={styles.topo} navigation={navigation} />
          <CardEmail navigation={navigation} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
)
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
}

)