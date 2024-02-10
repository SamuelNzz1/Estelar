import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Container from "../../components/ComponentesGenericos/Container";
import TextEstelar from "../../components/ComponentesGenericos/CustomText";
import { SvgXml } from "react-native-svg";
import { bola1 } from "../../svgs/bolasEditPerfil";
import { bola2 } from "../../svgs/bolasEditPerfil";
import { ButtonBack } from "../../components/CadastroTela/CadTopo/ButtonBack";
import { RFValue as RF } from "react-native-responsive-fontsize";
import InputEst from "../../components/ComponentesGenericos/InputEstelar";
import { getAuth, onAuthStateChanged, updatePassword, updateProfile } from "firebase/auth";
import { doc, getFirestore } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
type editPerfil = {
    navigation: any;
    route: any;
}

export default function TelaEditPerfil({navigation, route}:editPerfil){
    const [name, setName] = useState("");
    const [novaSenha, setNovaSenha] = useState<string>("");


    const autenticacao = getAuth();
    const usuario = autenticacao.currentUser;
  

    const onChangeText = (atributo : string, type: string) =>{

        if(type == "nome"){setName(atributo)}
        if(type == "senha"){setNovaSenha(atributo)}
    
    }

    const [novaImagemPerfil, setNovaImagemPerfil] = useState(
        route.params?.imagePerfil || null
      );

      const handleAlterPerfil = async () => {
        try {
            
            await updatePassword(usuario!, novaSenha);
            await updateProfile(usuario!, {displayName: name})
            
      
          } catch (error : any) {
            console.error("Erro ao atualizar a senha:", error.message);
          }

      }
      
      


    return(
        <Container
            color = "#14132E"
            style= {styles.container}
        >   
         <TouchableWithoutFeedback  style= {styles.container}  onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView  style= {styles.container}  behavior="padding" enabled>

        <SvgXml onPress={() => navigation.navigate('HomeTab') } style = {styles.voltar} xml={ButtonBack}/>
            <SvgXml style = {styles.bola1} xml={bola1}/>
            <SvgXml style = {styles.bola2} xml={bola2}/>
            
            <View style = {styles.changeImage}>
                <View style = {styles.perfil}>
                    <Image  style = {styles.imagePerfil} source={require("../../images/Perfil.png")}/>
                    
                </View>
                <TextEstelar style = {styles.textMudar}>MUDAR FOTO</TextEstelar>
            </View>
           
            <View style = {styles.form} >
                <View style = {styles.formInputs}>
                    <View style = {[styles.inputs,styles.input1 ]}>
                        <TextEstelar style={styles.inputText}>
                            Nome

                        </TextEstelar>
                        <InputEst
                            placeholder = ""
                            color = "white"
                            colorBack="#212251"
                            value = {name}
                            onChangeText={(atributo) => onChangeText(atributo, "nome")}
                        />
                    </View>


                    <View style = {styles.inputs}>
                        <TextEstelar style={styles.inputText}>
                           Senha
                        </TextEstelar>
                        <InputEst
                            placeholder = ""
                            color = "white"
                            colorBack="#212251"
                            boolean={true}
                            value = {novaSenha}
                            onChangeText={(atributo) => onChangeText(atributo, "senha")}
                        />
                    </View>
                </View>
                <View style = {styles.buttons}>
                    <TouchableOpacity onPress={handleAlterPerfil}  style={styles.buttonEnviar}>
                        <TextEstelar style={styles.enviar}>Alterar Perfil</TextEstelar>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.buttonExclui}>
                        <TextEstelar style={styles.enviarExclui}>Excluir Conta</TextEstelar>
                    </TouchableOpacity>
                </View>

            </View>
            </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

        </Container>
    )

}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flex:1,width: "100%", height: "100%"

      
    
    },
    buttons:{
        alignItems: "center",
        marginTop: "10%",
        gap: 20
    },buttonExclui:{
        backgroundColor: "transparent",
        height: 50,
        width: 325,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#D64F4F",
        borderWidth: 3
        

    },
    buttonEnviar: {
        backgroundColor: "#FFAB4C",
        height: 50,
        width: 325,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
       
      }, enviarExclui: {
        color: "#D64F4F",


      },enviar:{color: "white"},
    inputText:{
        color: "white",
        fontSize: RF(17),
        alignSelf: "flex-start",
        marginLeft: "10%"
    },
    input1: {
        marginTop: "5%"

    },
    inputs: {
        alignItems: "center",
        gap: 10

    },
    form:{
        backgroundColor: "#171636",
        width: "100%",
        height: "70%",
        marginTop: "5%"

    },
    formInputs:{
        gap: 10

    },

    textMudar:{
        color: "white",
        fontSize: RF(20)

    },
    perfil:{
        borderRadius: 100,
        borderColor: "#4146BA",
        borderWidth: 5,
        width: 125,
        height: 125,
        padding: 20,
        alignItems: "center",
        justifyContent:"center"
    },
    imagePerfil:{
        width: 105,
        height: 105,
        borderRadius: 125,


    },
    changeImage:{
        gap: 30,
        marginTop: "20%",
        alignItems: "center"


    },
    bola1: {
        position: "absolute",
        left: -20,
        bottom: 300
    },
    bola2: {
        position: "absolute",
        right: -100,
        top: -80
    },voltar:{
        position:"absolute",
        left: 20,
        top:"8%"
     }

})