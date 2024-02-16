import React, { useEffect, useState } from "react";
import TextEstelar from "../../components/ComponentesGenericos/CustomText";
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PencilEdit } from "../../svgs/editPerfilSvg";
import { dadosPerfil } from "../../dados/PerfilProps";
import perfilImage from "../../images/Perfil.png";


import CardStatus from "../../components/PerfilTela/CardStatus";
import { collection, getDoc, getDocs, getFirestore, query, where,  doc, onSnapshot } from "firebase/firestore";
export default function Perfil({navigation} : any ){


    const [userName, setUserName] = useState<string | null>(null);
    const [imagePerfil, setImagePerfil] = useState <any> (perfilImage);
    const autenticacao = getAuth();
    const usuario : any = autenticacao.currentUser; 
    const firestore = getFirestore();
    const userId = usuario.uid; // Substitua pelo ID do usuário
    const userCollection = collection(firestore, 'users');

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
                        
                         

                          const unsubscribe = onSnapshot(doc(firestore, 'users', idDocUsu), (snapshot : any) => {
                            // Callback que será chamada sempre que o documento for alterado
                            if (snapshot.exists()) {
                              const dadosUsuario = snapshot.data();
                              setUserName(dadosUsuario.name);
                              console.log('Dados atualizados:', dadosUsuario);
                            } else {
                              console.log('Documento não encontrado');
                            }
                          });
                    
                        
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

 


    return(
        <View style={styles.backPer }>
            <View style={styles.cont } >
               <View style ={ styles.infoPerfi }>
                    <View style = {styles.perfilImage}>
                        
                        <Image style ={styles.imagePerfil} source={imagePerfil} />
                    </View>
                    {userName &&
                        <TextEstelar style={styles.bemvindo}>{userName}</TextEstelar>
                    }   
                    <TouchableOpacity onPress={()=>navigation.navigate("EditPerfil", {imagePerfil, setImagePerfil})} style = {styles.edit}>
                        <View>
                        <TextEstelar style = {styles.editPerfi}>
                            Editar perfil
                        </TextEstelar>
                       
                        </View>
                        <SvgXml xml={PencilEdit}/>
                        
                    </TouchableOpacity>
                  
               
               </View>
            </View>

           
                <ScrollView 
                showsVerticalScrollIndicator = {false}
                style = {styles.cardNiveis}>
                    
                <View style = {styles.cardNiveis2}>

                    {dadosPerfil.map((carac, index) => (
                        <CardStatus key={index} {...carac} />
                    ))}  
                  </View>  

                 </ScrollView>  


          
           

        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: RF(15)
    },
    cardNiveis:{
        position: "absolute",
        alignSelf: "center",
        bottom: 30,
        width: "100%",
        height:"50%",
        gap: 30

    },
    cardNiveis2:{
        width: "100%",
        height:"100%",
        gap: 30

    },
    edit:{
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        gap: 7
    },
    editPerfi:{
        color: "#C8C8C8",
        textDecorationLine: 'underline'
         
    },

    perfilImage: {
        borderRadius: 125
    },
    infoPerfi:{
        alignItems: "center",
        paddingTop: "3%",
        gap: 13,
        
    },
    imagePerfil:{
        width: 100,
        height: 100,
        borderRadius: 125

    },
    
    cont:{
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: "#171636", 
        height: "90%",
        width: "100%",
        position: "absolute",
        bottom: -10
    }, 
    backPer:{
        flex: 1,
        backgroundColor: "#14132E"
    },
    bemvindo:{
        color:"white",
        fontSize: RF(20)
     }

})