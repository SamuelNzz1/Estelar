import React from "react";

import {
  StyleSheet,
} from "react-native";


import Container from "../../components/ComponentesGenericos/Container";
import TopoForgotSucess from "../../components/ForgotTelaSucess/Topo/TopoForgotSucess";
import MensagemMidle from "../../components/ForgotTelaSucess/MensagensMidle";

type TelaForgot ={
  navigation:{
    navigate: (screen:string) => void;
  }
}

export default function TelaForgotSucess({ navigation }: TelaForgot) {
  return (
    <Container color="#111D47">

          <TopoForgotSucess style={styles.topo}  />
          <MensagemMidle style ={styles.mensagem} navigation = {navigation}></MensagemMidle>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
      
  },
  topo: {
    height:"25%",    
  },mensagem:{
    height: "75%"

  }
  
});
