import React, { useState } from "react";
import { Modal,ActivityIndicator, StyleSheet, Image,  Text, View, Button, Platform, Dimensions, TouchableOpacity, StyleProp, ViewStyle, Alert, TouchableWithoutFeedback } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import InputsCad from "./InputsCad";
import TextEstelar from "../../ComponentesGenericos/CustomText";
import { fetchSignInMethodsForEmail, updateProfile } from 'firebase/auth';

// ...
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../../../firebase/conect";
import { setDoc } from "firebase/firestore";
import { trueVisibility, falseVisibility } from "../../../svgs/passwordVisibilitySvg";
import { SvgXml } from "react-native-svg";
type CardFormCad = {
  navigation: {
    navigate: (screen : string) => void;

  }
  style?: StyleProp<ViewStyle>,
  mostrarImagem: () => void,

}




export default function CardFormCad({ style, navigation, mostrarImagem } : CardFormCad) {
  
  const [showImage, setShowImage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const changeVisibility = () => {
    
    setPasswordVisibility((prevState) => !prevState);

  }
 
  
  


  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  
  function toLogin() {
    navigation.navigate('Login'); 
  }
  

  const handleUserRegister = async () =>{
    setIsLoading(true);
   if(senha == confirmSenha){

    const handleEmailValidation = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (senha.length < 8) {
        Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres.');
        setIsLoading(false);
        return;
      }
      else if (email.match(emailRegex)) {
        const handleNomeValidation = async () => {
          const nomeRegex = /^[a-zA-Z ]+$/;
      
          if (name.match(nomeRegex)) {
            try{
              


                
                const userCredential = await createUserWithEmailAndPassword(auth, email, senha).
                then(()=>{
                  setIsLoading(false);
                  mostrarImagem();
                });
                const autenticacao = getAuth();

                const user : any = autenticacao.currentUser;
                
                await sendEmailVerification(user);


                

                const userCollection = collection(db, 'users');
                await addDoc(userCollection, {
                  uid: user.uid,
                  name: name,
                  email: email,
                  profileImage: "",
                  questO: 0,
                  nivelJ: 0,
                  prova23N1: false,
                  prova23N2: false,
                }); 
                await updateProfile(user, {
                  displayName: name,
                });

                

                const timeout = setTimeout(() => {
                  mostrarImagem();
                  toLogin();
                }, 2000);

               
                
             

              
             
            }
            catch (error: any) {
              console.error("Erro ao criar usuário:", error.message);
              setIsLoading(false);
            
              if (error.code === "auth/email-already-in-use") {
               
                Alert.alert("Erro ao criar usuário", "Este e-mail já está sendo usado. Tente outro.");
              } else {
               
                Alert.alert("Erro ao criar usuário", "Ocorreu um erro durante a criação da conta. Tente novamente mais tarde.");
              }
            }
          } else {
            setIsLoading(false);
            Alert.alert('Erro', 'O nome deve conter apenas letras.');
          }
        };
        
        handleNomeValidation();
        
      } else {
        setIsLoading(false);
        Alert.alert('Erro', 'E-mail inválido!');
      }
      
    };

   handleEmailValidation();
    
  }
  else{
    Alert.alert("As duas senhas devem ser iguais");
    setIsLoading(false);
  }

  }

  

 
  const onChangeText = (atributo : string, type: string) =>{
      if(type == "e-mail"){setEmail(atributo)}
      if(type == "nome"){setName(atributo)}
      if(type == "senha"){setSenha(atributo)}
      if(type == "confirmarsenha"){setConfirmSenha(atributo)}

  }
  
  

  return (
    <View style={[style, styles.form]}>
      <TextEstelar style={styles.textH1}>Crie uma conta</TextEstelar>
      <View>
      <InputsCad 
      name = {name}
      email = {email}
      senha = {senha}
      onChangeText = {onChangeText}
      confirmarsenha= {confirmSenha}
      boolean = {passwordVisibility}
      />
      <View style = {styles.visibilityButtons}>
      <TouchableWithoutFeedback onPress={changeVisibility}>
  {passwordVisibility ? 
    <View style={styles.visibilitybuttom2}>
      <SvgXml xml={trueVisibility} />
    </View>
    :
    <View style={styles.visibilitybuttom2}>
      <SvgXml xml={falseVisibility} />
    </View>
  }
</TouchableWithoutFeedback>
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

    </View>
      
     
      <TouchableOpacity
        onPress={handleUserRegister} style={styles.buttonEnviar}
        disabled={isLoading}
        >
          {isLoading ?
          <ActivityIndicator color="#242350" />
          :
          <TextEstelar style={styles.enviar}>Continuar</TextEstelar> 
          }
      
      </TouchableOpacity>

     
    </View>
  );
}
const styles = StyleSheet.create({
  form: {
    alignItems: "center",
  },
  
  visibilityButtons:{
    position: "absolute",
    bottom: 40,
    right: 10
  },loading:{
    color: "white"

  },
  visibilitybuttom:{

  },
  visibilitybuttom2:{
    bottom: 60
  },

 
  textH1: {
    fontSize: RF(30),
    marginTop: 40,
    color: "white",
    marginBottom: 10,
  },
  textNascimento: {
    color: "white",
    alignSelf: "flex-start",
    marginLeft: "15%",
    marginBottom: 20,
  },
  data: {
    alignSelf: "flex-start",
    marginLeft: "8%",
  }, buttonEnviar: {
    backgroundColor: "#FFAB4C",
    marginTop: "2%",
    height: 50,
    width: 325,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },enviar:{color: "#242350"},
 

});
