import React, { useState } from "react";
import { Modal, StyleSheet, Image,  Text, View, Button, Platform, Dimensions, TouchableOpacity, StyleProp, ViewStyle, Alert } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import InputsCad from "./InputsCad";
import TextEstelar from "../../ComponentesGenericos/CustomText";
import { fetchSignInMethodsForEmail, updateProfile } from 'firebase/auth';

// ...
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../../../firebase/conect";
import { setDoc } from "firebase/firestore";
type CardFormCad = {
  navigation: {
    navigate: (screen : string) => void;

  }
  style?: StyleProp<ViewStyle>;
}




export default function CardFormCad({ style, navigation } : CardFormCad) {
  
  const [showImage, setShowImage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  
  
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  
  function toLogin() {
    navigation.navigate('Login'); 
  }
  

  const handleUserRegister = async () =>{
    
   if(senha == confirmSenha){

    const handleEmailValidation = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (senha.length < 8) {
        Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres.');
        return;
      }
      else if (email.match(emailRegex)) {
        const handleNomeValidation = async () => {
          const nomeRegex = /^[a-zA-Z ]+$/;
      
          if (name.match(nomeRegex)) {
            try{
              


            
                const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
                const user = userCredential.user;
                
                await sendEmailVerification(user);

                const userCollection = collection(db, 'users');
                await addDoc(userCollection, {
                  uid: user.uid,
                  nome: name,
                  email: email,
                  senha: senha,
                  profileImage: ""
                }); 
                await updateProfile(user, {
                  displayName: name,
                });

                setShowImage(true);

                const timeout = setTimeout(() => {
                  setShowImage(false);
                  toLogin();
                }, 5000);

               
                
             

              
             
            }
            catch (error: any) {
              console.error("Erro ao criar usuário:", error.message);
            
              if (error.code === "auth/email-already-in-use") {
               
                Alert.alert("Erro ao criar usuário", "Este e-mail já está sendo usado. Tente outro.");
              } else {
               
                Alert.alert("Erro ao criar usuário", "Ocorreu um erro durante a criação da conta. Tente novamente mais tarde.");
              }
            }
          } else {
            
            Alert.alert('Erro', 'O nome deve conter apenas letras.');
          }
        };
        
        handleNomeValidation();
        
      } else {
  
        Alert.alert('Erro', 'E-mail inválido!');
      }
      
    };

   handleEmailValidation();
    
  }
  else{
    Alert.alert("As duas senhas devem ser iguais");

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
      <InputsCad 
      name = {name}
      email = {email}
      senha = {senha}
      onChangeText = {onChangeText}
      confirmarsenha= {confirmSenha}
      
      />
      
     
      <TouchableOpacity onPress={handleUserRegister} style={styles.buttonEnviar}>
        <TextEstelar style={styles.enviar}>Continuar</TextEstelar>
      </TouchableOpacity>

      {showImage && (
        <Image
          source={require('../../../images/fundoCadSucess.png')}
         style = {styles.successImage}
          />
        )}
    </View>
  );
}
const styles = StyleSheet.create({
  form: {
    alignItems: "center",
  },
  successImage: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    position: "absolute",
    zIndex: 1,
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
  },enviar:{color: "white"},
 

});
