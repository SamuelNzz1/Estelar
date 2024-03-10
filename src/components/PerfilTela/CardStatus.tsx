import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import TextEstelar from "../ComponentesGenericos/CustomText";
import { SvgXml } from "react-native-svg";
import { useState } from "react";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { collection, doc, getDocs, getFirestore, onSnapshot, query } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { where } from "firebase/firestore";
import { imageMapping } from "../../dados/PerfilProps";

type CardStatus = {
    imageStatus: string,
    titulo: string,
    status: string,
    statusNumber: number,
    cor: string

} 

export default function CardStatus({status, titulo, imageStatus, statusNumber,cor}:CardStatus){

    const image = imageMapping[imageStatus];

    const autenticacao = getAuth();
    const usuario : any = autenticacao.currentUser; 
    const firestore = getFirestore();
    const userId = usuario.uid; // Substitua pelo ID do usuário
    const userCollection = collection(firestore, 'users');
    const [statusNumberr, setStatusNumberr] = useState<number>(0);
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

                              if(status == "Total: "){
                            
                              
                              setStatusNumberr(dadosUsuario.questO);
                              
                              console.log('Dados atualizados:', statusNumber);
                              console.log(dadosUsuario.questO)
                              console.log(statusNumberr)
                              }else if(status == "Nível: "){
                               
                                setStatusNumberr(dadosUsuario.nivelJ + 1);
                                
                                console.log('Dados atualizados:', statusNumber);
                                console.log(dadosUsuario.nivelJ);
                                console.log(statusNumberr)
                              }
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
        <View>
        <View style = { [styles.sombraCard, {backgroundColor: cor} ]}>
            
            
        </View>

        <View style = { styles.cardStatus }>
            
            <View style = {styles.esquerdo}>
                <TextEstelar style={styles.textoprincipal}>
                    {titulo}
                
                </TextEstelar>
                <TextEstelar style={styles.textosecu}>
                    {status} {statusNumberr}
                </TextEstelar>
            </View>
            <View style = {styles.direito}>
                <Image style = {styles.image} source={image}/>
            </View>
        </View>
        </View>
        
        )

}

const styles = StyleSheet.create({
    cardStatus: {
        width: '80%',
        height: 120,
        backgroundColor: '#212251',
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
          
      },
      sombraCard: {
        width: '80%',
        height: 120,
        position: "absolute",
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        bottom: -12         
      },
    image:{
        width: 90,
        height: 90,
        position: "absolute",
        left: 30

    },
    esquerdo:{
        width: "50%",
        gap: 10,
        paddingLeft: 30
    
    },
    direito:{
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    },textoprincipal: {
        color: "white",
        fontSize: RF(17),
        
    
    },
    textosecu: {
        color: "white",
        fontSize: RF(13),
        
        
    
    },

})