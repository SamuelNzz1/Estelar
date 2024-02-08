import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import HelloEstelar from "./CardComponents/HelloEstelar";
import Inputs from "./CardComponents/Inputs";
import { miniLogo } from "../../svgs/welcomeTela/minilogoSvg";
import { SvgXml } from "react-native-svg";
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';

import { useNavigation } from '@react-navigation/native';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/conect";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


import { RFValue as RF } from "react-native-responsive-fontsize";
import { googleCad } from "../../svgs/loginTela/googleCadSvg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextEstelar from "../ComponentesGenericos/CustomText";
import InputsCad from "../CadastroTela/CadForm/InputsCad";
type FormNavi = {
  navigation: {
    navigate: (screen: string) => void;
  }
} 
import { useState } from "react";

export default function  CardForm({ navigation } : FormNavi) {

  
  
 

  const handleUserRegister = async () =>{
    

    console.log( senha + " " + email);
    const auth = getAuth();
    const user = auth.currentUser;
    
    const toHome = () =>{
      navigation.navigate('HomeTab');
    }
  
    try {
      // Verifica se o e-mail existe
      await signInWithEmailAndPassword(auth, email, senha);
      
      if(user && !user.emailVerified){
        Alert.alert('Erro no login', 'Por favor, verifique seu e-mail antes de fazer login.');
      }
      else{
        
        toHome();
      }

      
    } catch (error) {
      Alert.alert("E-mail ou senha incorretos. Tente novamente");
    }
  }


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const onChangeText = (atributo : string, type: string) =>{
    if(type == "e-mail"){setEmail(atributo)}
    if(type == "nome"){setName(atributo)}
    if(type == "senha"){setSenha(atributo)}

}


  return (
    <View style={styles.cardForm}>
      <SvgXml style = {styles.minilogo} xml={miniLogo} />
      <HelloEstelar />
      <InputsCad 
       senha = {senha}
      email = {email}
      name = {name}
      onChangeText = {onChangeText}
      
      
      />
      <TouchableOpacity onPress={handleUserRegister} style={styles.buttonEnviar}>
        <TextEstelar style={styles.enviar}>Entrar</TextEstelar>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ForgotEmail")} style={styles.forgotPass}>
        <TextEstelar  style={styles.forgotPass}>
          {" "}
          Esqueceu a senha?{" "}
        </TextEstelar>
      </TouchableOpacity>
      
      <View style = {styles.divisao}>
        <View style={styles.linha}></View>
        <TextEstelar style = {styles.ou} >Ou</TextEstelar>
        <View style={styles.linha}></View>
      </View>

      <SvgXml style = {styles.cadgoogle} xml = {googleCad}></SvgXml>

      <View style={styles.mensageCadastrar}>
        <TextEstelar style = {styles.textCadastro}>Não possui uma conta? </TextEstelar>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro') }>
          <TextEstelar style = {styles.buttonCadastro}>Clique aqui</TextEstelar>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardForm: {
    paddingTop: "15%",
    width: "100%",
    height: "100%",
    
  
    padding: 10,
   
    alignItems: "center",
  }, cadgoogle:{marginTop: "10%"},
  ou:{
    color: "white",
    marginLeft: "2%",
    marginRight: "2%",
  },
  minilogo: {
    marginBottom: "3%"
  },divisao: {
    alignItems:"center",
    flexDirection: "row"
  },
    forgotPass: {
    color: "white",
    alignSelf: "flex-end",
    fontSize: RF(13),
    marginRight: 14,
    marginTop: 10,
    marginBottom: 10,
  },
  enviar: {
    color: "white",
  }, linha: {
    height: 1, 
    backgroundColor: 'white',
    width: '40%', 

  },
  buttonEnviar: {
    backgroundColor: "#FFAB4C",
    height: 50,
    width: 325,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%"
  },
  mensageCadastrar: {
    flexDirection: "row",
    marginTop: hp(8),
  
  },
  textCadastro:{

    color: "white"
  },
  buttonCadastro:{
    color: "#FBD440",
  },
});
