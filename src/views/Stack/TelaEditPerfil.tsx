import React, { useEffect, useState } from "react";
import { Alert, Image,  Keyboard, KeyboardAvoidingView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, ActivityIndicator, SafeAreaView, ScrollView } from "react-native";

import { miniLogo } from "../../svgs/welcomeTela/minilogoSvg";
import TextEstelar from "../../components/ComponentesGenericos/CustomText";
import { SvgXml } from "react-native-svg";
import { bola1 } from "../../svgs/bolasEditPerfil";
import { bola2 } from "../../svgs/bolasEditPerfil";
import { ButtonBack } from "../../components/CadastroTela/CadTopo/ButtonBack";
import { RFValue as RF } from "react-native-responsive-fontsize";
import InputEst from "../../components/ComponentesGenericos/InputEstelar";
import { EmailAuthProvider, deleteUser, getAuth,  reauthenticateWithCredential, updatePassword, updateProfile } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, getFirestore, query,  updateDoc, where } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import confirmMessage from "../../images/confirmDeleteAccount.png"
import confirmMessageLogout from "../../images/sairContaConfirm.png"
import { noDelete, yesDelete } from "../../svgs/ButtonsConfirmDelete";
import { logout } from "../../svgs/logout";


import { falseVisibility, trueVisibility } from "../../svgs/passwordVisibilitySvg";
import AsyncStorage from "@react-native-async-storage/async-storage";

import noImagem from "../../images/Perfil.png";
import Avatar1 from "../../images/Avatar1.png";
import Avatar2 from "../../images/Avatar2.png";
import Avatar3 from "../../images/Avatar3.png";
import { Pressable } from "react-native";



type editPerfil = {
    navigation: any;
    route: any;
}
 

export default function TelaEditPerfil({navigation}:editPerfil){
   
    const [isLoadingP, setIsLoadingP] = useState<boolean> (false);
    const autenticacao = getAuth();
    const usuario : any = autenticacao.currentUser; 
    const firestore = getFirestore();
    const userId = usuario.uid; // Substitua pelo ID do usuário
    const userCollection = collection(firestore, 'users');
    
   
    const [pickAv1, setPickAv1] = useState<boolean> (false);
    const [pickAv2, setPickAv2] = useState<boolean> (false);
    const [pickAv3, setPickAv3] = useState<boolean> (false);

 


    const [profileImage, setProfileImage] = useState <any> ("")
    const [imagePerfil, setImagePerfil] = useState<any>("");


    const [showImage, setShowImage] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    
    const [logouty, setLogouty] = useState<boolean> (false);
    
    const [passwordVisibility, setPasswordVisibility] = useState(true);


    const [showAvatar, setShowAvatar] = useState<boolean> (false);

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
                            setProfileImage(profileImage);
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
        if(profileImage == "../../images/Perfil.png"){
          setImagePerfil(noImagem);
        }
        else if(profileImage == "../../images/Avatar1.png"){
          setImagePerfil(Avatar1);
        }
        else if(profileImage == "../../images/Avatar2.png"){
          setImagePerfil(Avatar2);
        }
        else if(profileImage == "../../images/Avatar3.png"){
          setImagePerfil(Avatar3);
        }

     }, [profileImage])
      

      useEffect(() => {
        obterDadosUsuario();
      }, []);

      

      

    
     
    
      


    



    
    

   
    
    
    
 
   
 

    const [editPerfil, setEditPerfil] = useState<boolean>(false);


   

  

    
    const [name, setName] = useState("");
    const [novaSenha, setNovaSenha] = useState<string>("");
    const [senhaAtual, setSenhaAtual] = useState<string>("");





    

    const onChangeText = (atributo : string, type: string) =>{

        if(type == "nome"){setName(atributo)}
        if(type == "senhaAtual"){setSenhaAtual(atributo)}
        if(type == "senhaNova"){setNovaSenha(atributo)}
    
    }
  

    useEffect(() => {
        if (usuario && usuario.displayName) {
          // Configura o displayName imediatamente após a renderização do componente
          setName(usuario.displayName);
        }
      }, [usuario]);

      const selecionarImagem = async () => {
        setShowAvatar(!showAvatar);
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
    const logoutYes = async () =>{
        

      await AsyncStorage.removeItem('@estelar:usuarioLogadoo').
      then(() => autenticacao.signOut().then(() =>    navigation.navigate('Login') ) );

  }
  const logoutNo = () =>{
    setLogouty(false);

}
    const deleteNo = () =>{
        setShowImage(false);

    }



   
    
    const confirmDelete = () => {
        setShowImage(true);

    }

    const logoutt = async () =>{
        setLogouty(true);
    }
    useEffect(() => {
        
    }, [logouty])
    


    const selectImage = (image : string) => {

      if(image == "avatar1") {
        setPickAv1(true);

        setPickAv2(false);
        setPickAv3(false);
      }
      else if(image == "avatar2") {
        setPickAv2(true);
        
        setPickAv1(false);
        setPickAv3(false);
        
      }
      else if(image == "avatar3") {
        setPickAv3(true);
        
        setPickAv1(false);
        setPickAv2(false);
      }

    } 
  
    const  changeAvatar = async () => {
      setIsLoadingP(true);
      if(pickAv1 == true){
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
                
                profileImage: "../../images/Avatar1.png" // Substitua pelo campo que você deseja usar
            }).
            then(()=>{
              setIsLoadingP(false);
              Alert.alert("Foto atualizada com sucesso!");
              
  
            })
            console.log("sucesso");
            }catch{
              setIsLoadingP(false);
              console.log("erro");
  
            }
   
        
        
        
        } else {
          setIsLoading(false);
          console.error("Nenhum documento encontrado para o UID fornecido.");
        }
      }
      else if(pickAv2 == true){
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
                
                profileImage: "../../images/Avatar2.png" // Substitua pelo campo que você deseja usar
            }).
            then(()=>{
              setIsLoadingP(false);
              Alert.alert("Foto atualizada com sucesso!");
              
  
            })
            console.log("sucesso");
            }catch{
              console.log("erro");
              setIsLoadingP(false);
            }
   
        
        
        
        } else {
          setIsLoading(false);
          console.error("Nenhum documento encontrado para o UID fornecido.");
        }
      }
      else if(pickAv3 == true){
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
                
                profileImage: "../../images/Avatar3.png" // Substitua pelo campo que você deseja usar
            }).
            then(()=>{
              setIsLoadingP(false);
              Alert.alert("Foto atualizada com sucesso!");
              
  
            })
            console.log("sucesso");
            }catch{
              console.log("erro");
              setIsLoadingP(false);
            }
   
        
        
        
        } else {
          setIsLoading(false);
          console.error("Nenhum documento encontrado para o UID fornecido.");
        }
      }
                   
                    
    

    }

    return(
        <SafeAreaView
        
            style= {[styles.container, {backgroundColor: "#14132E"}]}
        >   
         <TouchableWithoutFeedback  style= {styles.container}  onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView  style= {styles.container}  behavior="padding" enabled>
        <TouchableOpacity onPress={() => navigation.navigate('HomeTab') } style = {styles.voltar}>
          <SvgXml  xml={ButtonBack}/>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={logoutt} style = {styles.logout}>
          <SvgXml  xml={logout} />
        </TouchableOpacity>

            <SvgXml style = {styles.bola1} xml={bola1}/>
            <SvgXml style = {styles.bola2} xml={bola2}/>
            
            <View style = {styles.changeImage}>
                <TouchableOpacity onPress={selecionarImagem}>
                    <View  style = {styles.perfil}>
                        <Image style={styles.imagePerfil} source={imagePerfil} />
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
        {logouty && (
        <>
        <View style = {styles.buttonsDeleteOrNo}>
        
        <TouchableOpacity onPress={logoutNo} >
            <SvgXml xml={noDelete} />
        </TouchableOpacity>

        <TouchableOpacity onPress={logoutYes}  >
               <SvgXml xml={yesDelete} />
        </TouchableOpacity>
        
        </View>
        
        <Image
            source={confirmMessageLogout}
            style = {styles.successImage}
          />
        
        </>


        )}

{showAvatar == true 
          && 
          (
            
              <View
                style = { { height: "100%", width: "100%", position: "absolute", } }
              >
                <Pressable
                style = { {  width: "100%", height: "60%", backgroundColor: "#000000", opacity: 0.3 } }
                onPress={selecionarImagem}
                >
                   
                </Pressable>
                <View
                  style = { {  width: "100%", height: "50%", backgroundColor: "#272650", borderTopRightRadius: 30, borderTopLeftRadius: 30, gap: 5} }
                >
                  <View style = { {flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "20%", borderTopRightRadius: 30, borderTopLeftRadius: 30, } }>
                      <TextEstelar
                        style = {{color: "white", fontSize: RF(23), fontWeight: "bold"}}
                      >
                        Selecione
                      </TextEstelar>
                      <SvgXml style = {{ position: "absolute", right: 10 }} xml = {miniLogo} />
                  </View>

                  <ScrollView 
                     contentContainerStyle = { { height: 130, width: 500, flexDirection: "row", gap: 40, paddingHorizontal: 10, alignItems:"center", justifyContent:"center"} }
                      horizontal = {true}
                      showsHorizontalScrollIndicator={false}
                  > 
                    
                    <TouchableOpacity onPress = { () => selectImage("avatar1") } style = {{borderRadius: 100, width: 120, height: 120, ... (pickAv1 && {borderWidth: 2, borderColor: "#FF7747"})  }}>
                      <Image source={Avatar1} style = {{  width: '100%', height: '100%',}}  resizeMode="contain" /> 
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress = { () => selectImage("avatar2") }  style = {{borderRadius: 100, width: 120, height: 120,  ... (pickAv2 && {borderWidth: 2, borderColor: "#FF7747"})}}>
                      <Image source={Avatar2} style = {{  width: '100%', height: '100%',}}  resizeMode="contain" /> 
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress = { () => selectImage("avatar3") } style = {{borderRadius: 100, width: 120, height: 120, ... (pickAv3 && {borderWidth: 2, borderColor: "#FF7747"}) }}>
                      <Image source={Avatar3} style = {{  width: '100%', height: '100%',}}  resizeMode="contain" /> 
                    </TouchableOpacity>


                  </ScrollView>

                  <TouchableOpacity onPress={changeAvatar} style = {{width: "80%", alignSelf: "center" , justifyContent: "center", alignItems: "center",  height: 50, position: "absolute", bottom: 70, backgroundColor: "#FFAB4C", borderRadius: 40}}>
                   {isLoadingP ? 
                   
                   <ActivityIndicator color="#242350"/>
                  :   
                  <TextEstelar style = {{color : "#171636", fontSize: RF(15), }}>
                      
                  Confirmar
                </TextEstelar>
                  }
                   
                  </TouchableOpacity>


                </View>
              </View>
             
          )        
        }   

        
        </SafeAreaView>
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
      logout: {
        position: "absolute",
        right: 20,
        top: 20,
        zIndex: 2
      }
     

})