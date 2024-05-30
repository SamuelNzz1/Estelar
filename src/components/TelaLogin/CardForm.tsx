import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator } from "react-native";
import HelloEstelar from "./CardComponents/HelloEstelar";

import { miniLogo } from "../../svgs/welcomeTela/minilogoSvg";
import { SvgXml } from "react-native-svg";
import { Image } from "react-native";
import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { trueVisibility, falseVisibility } from "../../svgs/passwordVisibilitySvg";
import { auth } from "../../../firebase/conect";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { googleCad } from "../../svgs/loginTela/googleCadSvg";

import TextEstelar from "../ComponentesGenericos/CustomText";
import InputsCad from "../CadastroTela/CadForm/InputsCad";
type FormNavi = {
  navigation: {
    navigate: (screen: string) => void;
  }
} 
import { useState } from "react";
import fundoMessageEmail from "../../images/fundoEmailReenviado.png";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function  CardForm({ navigation } : FormNavi) {
  const [showEmailVerifiedMessage, setShowEmailVerifiedMessage] = useState(false);
  const [showMessageEmail, setShowMessageEmail] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showMessageError, setShowMessageError] = useState<boolean>(false);
  useEffect(() => {
  
    const user = auth.currentUser;
  }, [showMessageEmail])
  
 
  const user = auth.currentUser;
  
  const handleUserRegister = async () =>{
    setIsLoading(true)

  
    const user = auth.currentUser;
    
    const toHome = () =>{
      navigation.navigate('HomeTab');
    }
  
    try {
      // Verifica se o e-mail existe
      await signInWithEmailAndPassword(auth, email, senha)
      .
      then(() => {
        setIsLoading(false);

      });


      if(user && !user.emailVerified){
        setShowEmailVerifiedMessage(true);
        setShowMessageError(false);
        setIsLoading(false);
      }
      else{
        const answerData = {
            
          email: email,
          senha: senha
          
        };
        await AsyncStorage.setItem('@estelar:usuarioLogadoo',  JSON.stringify(answerData));
        toHome();
      }

      
    } catch (error) {
      setShowMessageError(true);
      setSenha("");
      setIsLoading(false);
      setShowEmailVerifiedMessage(false);
    }
  }


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const changeVisibility = () => {
    
    setPasswordVisibility((prevState) => !prevState);

  }
  const ok = () =>{
    setShowMessageEmail(false);
  }


  const onChangeText = (atributo : string, type: string) =>{
    if(type == "e-mail"){setEmail(atributo)}
    if(type == "nome"){setName(atributo)}
    if(type == "senha"){setSenha(atributo)}

}

  const showMessageEmaill = async () =>{  

    const user : any = auth.currentUser;
    
    await sendEmailVerification(user)
    .then(()=>{
      setShowMessageEmail(true);

    });

  }

  const goCad = () =>{
    navigation.navigate("Cadastro")

    setShowMessageError(false)

   
    setSenha("");
    setEmail("");



  }
  const goForgot = () =>{
    navigation.navigate("ForgotEmail")

    setShowMessageError(false)
    
    setSenha("");
    setEmail("");



  }

  return (
    <View style={styles.cardForm}>
      <SvgXml style = {styles.minilogo} xml={miniLogo} />
      <HelloEstelar />
      <View>
      <InputsCad 
       senha = {senha}
      email = {email}
      name = {name}
      onChangeText = {onChangeText}
      confirmarsenha=""
      boolean = {passwordVisibility}
      error = {showMessageError}
      />
      <TouchableWithoutFeedback onPress={changeVisibility}>
  {passwordVisibility ? 
    <View style={styles.visibilitybuttom}>
      <SvgXml xml={trueVisibility} />
    </View>
    :
    <View style={styles.visibilitybuttom}>
      <SvgXml xml={falseVisibility} />
    </View>
  }
</TouchableWithoutFeedback>

  

      </View>
      {showEmailVerifiedMessage && (
    <View style = {styles.verifiedText}>
    <TextEstelar style={styles.editText}>E-mail não verificado.</TextEstelar>
    <TouchableOpacity onPress={showMessageEmaill} style = {styles.buttomVerified}>
      <TextEstelar style={styles.editText2}>
          Reenviar o e-mail
      </TextEstelar>

    </TouchableOpacity>
    </View>
    )
    }
    {showMessageError && (
    <View style = {styles.verifiedText2}>
    <TextEstelar style={styles.editText}>*E-mail ou senha incorretos </TextEstelar>
    </View>
    )
    }
      <TouchableOpacity
      onPress={handleUserRegister} 
      style={styles.buttonEnviar}
      disabled = {isLoading}
      
      >
        {isLoading
          ?
        <ActivityIndicator color="#242350"/>
        :
        <TextEstelar style={styles.enviar}>Entrar</TextEstelar>
        }
        
      </TouchableOpacity>
      <TouchableOpacity onPress={goForgot} style={styles.forgotPass}>
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
        <TouchableOpacity onPress={goCad}>
          <TextEstelar style = {styles.buttonCadastro}>Clique aqui</TextEstelar>
        </TouchableOpacity>
      </View>
    {showMessageEmail && (
     <>
      <Image 
      source={fundoMessageEmail}
      style = {styles.successImage}
      /> 
      <View style= {styles.messageVerified}>
        <TextEstelar style ={styles.textBrancoReenviado } >E-mail reenviado!</TextEstelar>
        <TextEstelar style ={styles.textBranco}>Por favor, verifique sua caixa de entrada e siga as instruções. E-mail enviado para:</TextEstelar>
        <TextEstelar style ={styles.textBrancoEmail}>{user?.email}</TextEstelar>

        <TouchableOpacity onPress={ok} style = {styles.styleButton}>
          <TextEstelar style = {styles.textStyleButton}>OK</TextEstelar>
        </TouchableOpacity>

      </View>
      </>

     
      
      )
      }
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  cardForm: {
    
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  textStyleButton:{
    color: "#242350"

  },
  textBrancoReenviado:{
    color: "white",
    fontSize: RF(20),
    position: "absolute",
    top: -130,
    right: 75

  },

  messageVerified:{
    position:"absolute",
    alignSelf: "center",
    textAlignVertical:"center",
    bottom: 200,
    zIndex: 5,
    width:"88%"

  },textBranco:{
    color: "white",
    paddingHorizontal: 15,
    top: -80,
    textAlign: "center"
  
  },textBrancoEmail:{
    color: "white",
    paddingHorizontal: 20,
    top: -50,
    textAlign: "center"

  },
  successImage: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    position: "absolute",
    zIndex: 3,
   
   
  },
  buttomVerified:{
    top: -1
  },

  editText:{
    color: "#FA8F8F",
    fontSize: RF(12),
    

  },
  editText2:{
    color: "#FA8F8F",
    fontSize: RF(12),
    textDecorationLine: 'underline',

  },
  
  verifiedText:{
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"flex-end",
    marginLeft: "20%",
    top: 0,
    gap: 2

  },
  verifiedText2:{
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"flex-end",
    marginLeft: "40%",
    top: 0,
    gap: 2

  },
 
  visibilitybuttom:{
    position:"absolute",
    bottom: 30,
    right: 10


  },
  
  cadgoogle:{marginTop: "10%"},
  ou:{
    color: "white",
    marginLeft: "2%",
    marginRight: "2%",
  },
  minilogo: {
    marginBottom: "3%",
    marginTop: "15%"
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
    color: "#242350",
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
  styleButton: {
    backgroundColor: "#FFAB4C",
    height: 50,
    width: "80%",
    borderRadius: 24,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    
  },
  mensageCadastrar: {
    flexDirection: "row",
    position:"absolute",
    bottom: 20,
    zIndex:-1
  
  },
  textCadastro:{

    color: "#171636"
  },
  buttonCadastro:{
    color: "#171636",
    textDecorationLine: 'underline'
  },
});
