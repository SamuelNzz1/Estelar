import React, { useEffect, useState } from "react";
import { Alert, Image, ImageBackground, Keyboard, KeyboardAvoidingView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, ActivityIndicator } from "react-native";
import Container from "../../components/ComponentesGenericos/Container";
import TextEstelar from "../../components/ComponentesGenericos/CustomText";
import { SvgXml } from "react-native-svg";
import { bola1 } from "../../svgs/bolasEditPerfil";
import { bola2 } from "../../svgs/bolasEditPerfil";
import { ButtonBack } from "../../components/CadastroTela/CadTopo/ButtonBack";
import { RFValue as RF } from "react-native-responsive-fontsize";
import InputEst from "../../components/ComponentesGenericos/InputEstelar";
import { AuthCredential, EmailAuthProvider, deleteUser, getAuth, onAuthStateChanged, reauthenticateWithCredential, updatePassword, updateProfile } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, getFirestore, query, setDoc, updateDoc, where } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import confirmMessage from "../../images/confirmDeleteAccount.png"
import { useRoute } from '@react-navigation/native';
import { noDelete, yesDelete } from "../../svgs/ButtonsConfirmDelete";

import * as ImagePicker from 'expo-image-picker';
import { falseVisibility, trueVisibility } from "../../svgs/passwordVisibilitySvg";
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
    const userCollection = collection(firestore, 'users');

    const { imagePerfil, setImagePerfil } : any = route.params;
    const [showImage, setShowImage] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
   const [profileImage64, setProfileImage64] = useState<string>("");
    const userRef = doc(firestore, 'users', userId);
    
    const [passwordVisibility, setPasswordVisibility] = useState(true);


    const changeVisibility = () => {
      
      setPasswordVisibility((prevState) => !prevState);
  
    }
   
 


   


    const obterDadosUsuario = async () => {
        try {

            const q = query(userCollection, where('uid', '==', userId));

                        // Execute a consulta
                        const querySnapshot = await getDocs(q);
                        
                        // Verifique se há algum documento retornadoc
                        if (querySnapshot.size > 0) {
                          // Se houver, pegue o ID do primeiro documento
                          const primeiroDocumento = querySnapshot.docs[0];
                          const idDocUsu = primeiroDocumento.id;
                        
                         

                          const snapshot = await getDoc(doc(firestore, "users", idDocUsu));
      
                          if (snapshot.exists()) {
                            const dadosUsuario = snapshot.data();
                            const profileImage = dadosUsuario.profileImage;
                          
                          } else {
                            console.log('Documento não encontrado para o usuário:', userId);
                          }
                   
                    
                        
                        } else {
                          console.error("Nenhum documento encontrado para o UID fornecido.");
                        }







        
        } catch (error) {
          console.error('Erro ao obter dados do usuário:', error);
        }
      };

     
      

      useEffect(() => {
        obterDadosUsuario();
      }, []);

      

      

    
     
    
      


    



    
    const imageToBase64 = async (imageUri : string)  => {
        try {
          const response = await fetch(imageUri);
          const blob = await response.blob();
          const base64String = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
          return base64String;
        } catch (error) {
          console.error('Erro ao converter imagem para Base64:', error);
          return null;
        }
      };

   
    
    
    
 
   
 

    const [editPerfil, setEditPerfil] = useState<boolean>(false);


    useEffect(() => {
        navigation.setOptions({
          params: { setImagePerfil: setImagePerfil }, // Ou apenas { setImagePerfil } se ambos tiverem o mesmo nome
        });
      }, [navigation, setImagePerfil]);

    const [novaImagemPerfil, setNovaImagemPerfil] = useState<string |  null>(null);

    
    const [name, setName] = useState("");
    const [novaSenha, setNovaSenha] = useState<string>("");
    const [senhaAtual, setSenhaAtual] = useState<string>("");





    

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

            setEditPerfil(true);
          

          }
        
      };
     
    



      const isUri = (value : any) => {
        // Verifica se o valor é uma string e se começa com "http://" ou "https://"
        return typeof value === "string" && (value.startsWith("http://") || value.startsWith("https://") || value.startsWith("file:") );
      };


      const handleAlterPerfil = async () => {
        setIsLoading(true);
        if(name != "" && senhaAtual != ""){
        const handleNomeValidation = async () => {
            const nomeRegex = /^[a-zA-Z ]+$/; 

            if(name.match(nomeRegex)){
                if((senhaAtual.length >= 8 && novaSenha.length >= 8) || (senhaAtual.length >= 8 && novaSenha.length == 0)){
                try {
                    // Reautentica o usuário com a senha atual
                    await reauthenticateWithCredential(usuario, EmailAuthProvider.credential(usuario.email!, senhaAtual));
                
                    // Se a reautenticação for bem-sucedida, agora você pode realizar alterações seguras
                    await updatePassword(usuario!, novaSenha);
                    await updateProfile(usuario!, { displayName: name });
                    
                  
                   
                    const base64String = await imageToBase64(imagePerfil);
                   
                    
                    const q = query(userCollection, where('uid', '==', userId));

                        // Execute a consulta
                        const querySnapshot = await getDocs(q);
                        
                        // Verifique se há algum documento retornado
                        if (querySnapshot.size > 0) {
                          // Se houver, pegue o ID do primeiro documento
                          const primeiroDocumento = querySnapshot.docs[0];
                          const idDocUsu = primeiroDocumento.id;
                        
                       

                          try{
                            await updateDoc(doc(firestore, "users", idDocUsu), {
                                
                                name: name // Substitua pelo campo que você deseja usar
                            }).
                            then(()=>{
                              setIsLoading(false);
                              Alert.alert("Perfil atualizado com sucesso!");
                              navigation.goBack();

                            })
                            console.log("sucesso");
                            }catch{
                              setIsLoading(false);
                                console.log("erro");
    
                            }
                   
                        
                        
                        
                        } else {
                          setIsLoading(false);
                          console.error("Nenhum documento encontrado para o UID fornecido.");
                        }
                            
                   
                       

                        


                        

                        
                     
                    
                  } catch (error: any) {
                    setIsLoading(false);
                  }
                }
                else{
                  setIsLoading(false);
                    Alert.alert("A senha deve conter ao menos 8 Letras/Numeros")
                }
                

            }
            else{
              setIsLoading(false);
                Alert.alert("O nome deve conter apenas letras")
            }
            
    
        };
        handleNomeValidation();

       
      }
      else if(editPerfil === true){
        setImagePerfil(novaImagemPerfil);
        setEditPerfil(false);
        
        const q = query(userCollection, where('uid', '==', userId));

                        // Execute a consulta
                        const querySnapshot = await getDocs(q);
                        
                        // Verifique se há algum documento retornado
                        if (querySnapshot.size > 0) {
                          // Se houver, pegue o ID do primeiro documento
                          const primeiroDocumento = querySnapshot.docs[0];
                          const idDocUsu = primeiroDocumento.id;
                        

                          try{
                            await updateDoc(doc(firestore, "users", idDocUsu), {
                                profileImage: imagePerfil,
                            }).
                            then(()=>{
                              setIsLoading(false);
                            })
                            
                            }catch{
                                setIsLoading(false)
    
                            }
                   
                        Alert.alert("Perfil atualizado com sucesso!");
                        
                        
                        } else {
                          console.error("Nenhum documento encontrado para o UID fornecido.");
                        }


            navigation.goBack();
      }
      else{
        Alert.alert("Preencha o(s) campos vazios");
        setIsLoading(false);
      }
    };
      
    const deslogar = () =>{
        navigation.navigate("Login");

    }


    const deleteYes = async () =>{
        

        const q = query(userCollection, where('uid', '==', userId));

                        // Execute a consulta
        const querySnapshot = await getDocs(q);

        const primeiroDocumento = querySnapshot.docs[0];
        const idDocUsu = primeiroDocumento.id;

        try {
          // Excluir o usuário autenticado
          await deleteUser(usuario);
      
          // Remover dados associados no Firestore
          const userDocRef = doc(firestore, 'users',  idDocUsu);
          const userDocSnapshot = await getDoc(userDocRef);
      
          if (userDocSnapshot.exists()) {
            await deleteDoc(userDocRef);
            console.log('Dados do usuário removidos do Firestore.');
          }
      
          console.log('Conta de usuário excluída com sucesso.');
          
          deslogar();
        } catch (error : any) {
          console.error('Erro ao excluir conta:', error.message);
        }

    }
    const deleteNo = () =>{
        setShowImage(false);

    }




    const confirmDelete = () => {
        setShowImage(true);

    }


    return(
        <Container
            color = "#14132E"
            style= {styles.container}
        >   
         <TouchableWithoutFeedback  style= {styles.container}  onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView  style= {styles.container}  behavior="padding" enabled>
        <TouchableOpacity onPress={() => navigation.navigate('HomeTab') } style = {styles.voltar}>
        <SvgXml  xml={ButtonBack}/>
        </TouchableOpacity>
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

                      <View>
                        <InputEst
                            placeholder = ""
                            color = "white"
                            colorBack="#212251"
                            boolean={passwordVisibility}
                            value = {senhaAtual}
                            onChangeText={(atributo) => onChangeText(atributo, "senhaAtual")}
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
                    </View>

                    <View style = {styles.inputs}>
                        <TextEstelar style={styles.inputText}>
                           Nova senha
                        </TextEstelar>
                        <View>
                        <InputEst
                            placeholder = ""
                            color = "white"
                            colorBack="#212251"
                            boolean={passwordVisibility}
                            value = {novaSenha}
                            onChangeText={(atributo) => onChangeText(atributo, "senhaNova")}
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
                    </View>

                </View>
                <View style = {styles.buttons}>
                    <TouchableOpacity 
                    onPress={handleAlterPerfil}  
                    style={styles.buttonEnviar}
                    disabled = {isLoading}

                    >
                      {isLoading 
                        ?
                      <ActivityIndicator color="#242350"/>
                        :
                      <TextEstelar style={styles.enviar}>Alterar Perfil</TextEstelar>
                      }
                        
                    </TouchableOpacity>

                    <TouchableOpacity onPress={confirmDelete} style={styles.buttonExclui}>
                        <TextEstelar style={styles.enviarExclui}>Excluir Conta</TextEstelar>
                    </TouchableOpacity>
                </View>

            </View>
            </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
                    
      {showImage && (
        <>
        <View style = {styles.buttonsDeleteOrNo}>
        
        <TouchableOpacity onPress={deleteNo} >
            <SvgXml xml={noDelete} />
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteYes}  >
               <SvgXml xml={yesDelete} />
        </TouchableOpacity>
        
        </View>
        
        <Image
          source={confirmMessage}
            style = {styles.successImage}
          />
        
        </>


        )}
        </Container>
    )

}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flex:1,width: "100%", height: "100%"

      
    
    }, 
    visibilitybuttom:{
      position: "absolute",
      bottom: 15,
      right: 10
    },

    visibilityButtons:{


    },
    buttonsDeleteOrNo:{
        position:"absolute",
        justifyContent:"center",
        width: "100%",
        bottom:  200,
        flexDirection: "row",
        gap: 15,
        zIndex: 2,

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
        marginTop: "1%"

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
        marginTop: "2%",
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
        top:"2%"
     },successImage: {
        width: "100%",
        height: "100%",
        alignContent: "center",
        position: "absolute",
        zIndex: 1,
      },
     

})