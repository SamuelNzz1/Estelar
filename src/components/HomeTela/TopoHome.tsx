import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, View, TextStyle, StyleProp, ViewStyle} from "react-native";
import { SvgXml } from "react-native-svg";
import TextEstelar from "../ComponentesGenericos/CustomText";
import { bolinhasTop } from "../../svgs/bolinhasHomeTop";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { bolonaHome } from "../../svgs/bolona";
import { RetanguloTorto } from "../../svgs/retanguloTortoHome";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { collection, doc, getDocs, getFirestore, onSnapshot, query, where } from "firebase/firestore";
type topoHome = {
   
   style?: StyleProp<ViewStyle>;
}

export default function TopoHome({style} : topoHome) {
    const [userName, setUserName] = useState<string | null>(null);
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

    
    return (
    <View style={[styles.topo, style]} 
    
     
    >

        <SvgXml style={styles.bolona} xml={bolonaHome}/>
        <View style = {styles.grup}>
            <SvgXml style={styles.bolinhas} xml = {bolinhasTop}/>

            {userName &&
            <TextEstelar style={styles.bemvindo}>Olá, {userName}</TextEstelar>    
            }
            
        </View>

        <SvgXml style={styles.retangulo} xml={RetanguloTorto} />
   
        
        
       



    </View>
  );
}
const styles = StyleSheet.create({
 topo:{
    width:"100%",
    height:"30%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#14132E",

    
    

 },
    grup:{gap: 25, paddingLeft: 35, marginTop: "22%"},
 bolinhas:{
    


 },retangulo:{
    position: "absolute",
    alignSelf: "flex-end",
    
 },
 
    bolona:{position: "absolute"},
 bemvindo:{
    color:"white",
    fontSize: RF(25)
 }


 
});
