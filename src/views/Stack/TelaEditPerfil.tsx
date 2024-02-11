import React, { useEffect, useState } from "react";
import { Alert, Image, ImageBackground, Keyboard, KeyboardAvoidingView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Container from "../../components/ComponentesGenericos/Container";
import TextEstelar from "../../components/ComponentesGenericos/CustomText";
import { SvgXml } from "react-native-svg";
import { bola1 } from "../../svgs/bolasEditPerfil";
import { bola2 } from "../../svgs/bolasEditPerfil";
import { ButtonBack } from "../../components/CadastroTela/CadTopo/ButtonBack";
import { RFValue as RF } from "react-native-responsive-fontsize";
import InputEst from "../../components/ComponentesGenericos/InputEstelar";
import { AuthCredential, EmailAuthProvider, getAuth, onAuthStateChanged, reauthenticateWithCredential, updatePassword, updateProfile } from "firebase/auth";
import { doc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { Auth } from "firebase/auth";
import { useRoute } from '@react-navigation/native';


import * as ImagePicker from 'expo-image-picker';
type editPerfil = {
    navigation: any;
    route: any;
}
 

export default function TelaEditPerfil({navigation}:editPerfil){
    const route = useRoute();

    const autenticacao = getAuth();
    const usuario : any = autenticacao.currentUser; 
    const firestore = getFirestore();


    const userId = usuario.uid; // Substitua pelo ID do usuário
    console.log(userId);
    const userRef = doc(firestore, 'users', userId);
    console.log(userRef);
    

    
    
    
    const { imagePerfil, setImagePerfil } : any = route.params;

    useEffect(() => {
        navigation.setOptions({
          params: { setImagePerfil: setImagePerfil }, // Ou apenas { setImagePerfil } se ambos tiverem o mesmo nome
        });
      }, [navigation, setImagePerfil]);

    const [novaImagemPerfil, setNovaImagemPerfil] = useState<string |  null>(null);

    
    const [name, setName] = useState("");
    const [novaSenha, setNovaSenha] = useState<string>("");
    const [senhaAtual, setSenhaAtual] = useState<string>("");

  
    console.log('ID do usuário autenticado:', usuario.uid);
    console.log('ID do documento no Firestore:', userRef.id);



    

    const onChangeText = (atributo : string, type: string) =>{

        if(type == "nome"){setName(atributo)}
        if(type == "senhaAtual"){setSenhaAtual(atributo)}
        if(type == "senhaNova"){setNovaSenha(atributo)}
    
    }
    const reload = () =>{
        navigation.navigate("EditPerfil");
    }

    useEffect(() => {
        if (usuario && usuario.displayName) {
          // Configura o displayName imediatamente após a renderização do componente
          setName(usuario.displayName);
        }
      }, [usuario]);

      const selecionarImagem = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (status !== 'granted') {
          console.error('Permissão negada para acessar a biblioteca de mídia');
          return;
        }
    
        const resultado = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!resultado.canceled) {
            
            setNovaImagemPerfil(resultado.assets[0].uri);

          

          }
        
      };
     
      console.log(imagePerfil);



      const isUri = (value : any) => {
        // Verifica se o valor é uma string e se começa com "http://" ou "https://"
        return typeof value === "string" && (value.startsWith("http://") || value.startsWith("https://") || value.startsWith("file:") );
      };


      const handleAlterPerfil = async () => {
        if(name != "" && senhaAtual != "" && novaSenha != ""){
        const handleNomeValidation = async () => {
            const nomeRegex = /^[a-zA-Z ]+$/; 

            if(name.match(nomeRegex)){
                if(senhaAtual.length >= 8 && novaSenha.length >= 8){
                try {
                    // Reautentica o usuário com a senha atual
                    await reauthenticateWithCredential(usuario, EmailAuthProvider.credential(usuario.email!, senhaAtual));
                
                    // Se a reautenticação for bem-sucedida, agora você pode realizar alterações seguras
                    await updatePassword(usuario!, novaSenha);
                    await updateProfile(usuario!, { displayName: name });
                    
                   
                        Alert.alert("Perfil atualizado com sucesso!");
                        
                        setImagePerfil(novaImagemPerfil);

                        try{
                        await updateDoc(userRef, {
                            profileImage: imagePerfil, // Substitua pelo campo que você deseja usar
                        });
                        console.log("sucesso");
                        }catch{
                            console.log("erro");

                        }

                        navigation.goBack();
                     
                    
                  } catch (error: any) {
                    
                  }
                }
                else{
                    Alert.alert("A senha deve conter ao menos 8 Letras/Numeros")
                }
                

            }
            else{
                Alert.alert("O nome deve conter apenas letras")
            }
            
    
        };
        handleNomeValidation();
       
      }else{
        Alert.alert("Preencha o(s) campos vazios");
      }
    };
      
    

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
                <TouchableOpacity onPress={selecionarImagem}>
                    <View  style = {styles.perfil}>
                      {
                      isUri(imagePerfil) ? 
                      <Image style={styles.imagePerfil} source={{ uri: imagePerfil }} />
                      :
                      <Image style={styles.imagePerfil} source={imagePerfil} />
                    }
                    </View>
                </TouchableOpacity>
                
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
                        Senha atual
                        </TextEstelar>
                        <InputEst
                            placeholder = ""
                            color = "white"
                            colorBack="#212251"
                            boolean={true}
                            value = {senhaAtual}
                            onChangeText={(atributo) => onChangeText(atributo, "senhaAtual")}
                        />
                    </View>

                    <View style = {styles.inputs}>
                        <TextEstelar style={styles.inputText}>
                           Nova senha
                        </TextEstelar>
                        <InputEst
                            placeholder = ""
                            color = "white"
                            colorBack="#212251"
                            boolean={true}
                            value = {novaSenha}
                            onChangeText={(atributo) => onChangeText(atributo, "senhaNova")}
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
        marginTop: "5%",
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
        marginTop: "5%",
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