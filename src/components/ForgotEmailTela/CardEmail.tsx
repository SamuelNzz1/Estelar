import React, { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import InputEst from "../ComponentesGenericos/InputEstelar";
import { StyleSheet } from "react-native";
import TextEstelar from "../ComponentesGenericos/CustomText";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";

type cardEmail = {
    navigation:{
        navigate: (screen : string) => void;
    }
}

export function CardEmail({navigation} : cardEmail){
    const [email, setEmail] = useState("");
    const onChangeText = (atributo : string, type: string) =>{
        if(type == "e-mail"){setEmail(atributo)}
        
    }
    function toLogin() {
        navigation.navigate('ForgotSucess'); 
      }
      

    const resetPassword = async (email : string) => {
        try {
          const auth = getAuth();
          await sendPasswordResetEmail(auth, email);
      
          // Exibir uma mensagem de sucesso ou redirecionar para uma tela de confirmação
         toLogin();
        } catch (error : any) {
          Alert.alert("Erro ao enviar e-mail de redefinição de senha:", error.message);
        }
      };


    return(
       <View style = {styles.card}>
        <TextEstelar style={styles.h1}>
             Digite seu E-email!
        </TextEstelar>
        
        <InputEst
        placeholder = "E-mail"
        color = "white"
        colorBack="#25356C"
        autoCapitalize="none"
        keyboardType="email-address"
        value = {email}
        onChangeText={(atributo) => onChangeText(atributo, "e-mail")}
        />
        <TouchableOpacity onPress={() => resetPassword(email)}  style={styles.buttonEnviar}>
            <TextEstelar style={styles.enviar}>Continuar</TextEstelar>
        </TouchableOpacity>
       </View>

    
    )

}
const styles = StyleSheet.create({
    card: {
        alignSelf: "center",
        justifyContent:"center",
        gap: 55
        
    },h1:{
        fontSize: RF(25),
        color: "white",
        alignSelf:"center",
        marginTop: "20%"
        
    },buttonEnviar: {
        backgroundColor: "#FFAB4C",
        marginTop: "10%",
        height: 50,
        width: 325,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
      },enviar:{color: "#242350"},
})