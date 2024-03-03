import React, { useEffect, useState } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Dimensions } from 'react-native';
//import componentes
import { ButtonPlanet } from "./MiniComponents/ButtonPlanet"


//import components genericos

import { SvgXml } from "react-native-svg"
import TextEstelar from "../ComponentesGenericos/CustomText"
import { getAuth } from "firebase/auth";
import { collection, doc, getDocs, getFirestore, onSnapshot, query, where } from "firebase/firestore";

//import imagem, svgs




type propsMidleViagem = {
    navigation: any,
    
}

export const MidleMapViagem: React.FC<propsMidleViagem> = ({navigation}) =>{
  

    const [nivelAtual, setNivelAtual] = useState<number>(0);

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
                              setNivelAtual(dadosUsuario.nivelJ);
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





    

    const goFase = (planet : string) =>{
        navigation.navigate("TelaQuestsJornada", {planet} );
    }


    return (
    <View style = {styles.planets}>

        <ButtonPlanet  planet="Terra" goFase={goFase}  style={styles.planetButton1} navigation={navigation} numberFase={1} current = {nivelAtual === 0 ? true : false}/>
        
        
        {nivelAtual >= 1 ? 
        <ButtonPlanet planet="Marte" goFase={goFase}  style={styles.planetButton2} navigation={navigation} numberFase={2} current = {nivelAtual === 1 ? true : false}/>
        :
        <ButtonPlanet planet="Marte" disabled = {true} style={styles.planetButton2} navigation={navigation} numberFase={2} />
        }

        {nivelAtual >= 2 ?     
        <ButtonPlanet planet="Júpiter" goFase={goFase}  style={styles.planetButton3} navigation={navigation} numberFase={3} current = {nivelAtual === 2 ? true : false}/>
        :
        <ButtonPlanet planet="Júpiter" disabled = {true} style={styles.planetButton3} navigation={navigation} numberFase={3} />
        }

        { nivelAtual >= 3 ?     
        <ButtonPlanet planet="Saturno" goFase={goFase}  style={styles.planetButton4} navigation={navigation} numberFase={4} current = {nivelAtual === 3 ? true : false}/>
        :
        <ButtonPlanet planet="Saturno" disabled = {true} style={styles.planetButton4} navigation={navigation} numberFase={4} />
        }

        { nivelAtual >= 4 ?     
        <ButtonPlanet planet="Urano" goFase={goFase}  style={styles.planetButton5} navigation={navigation} numberFase={5} current = {nivelAtual === 4 ? true : false}/>
        :
        <ButtonPlanet planet="Urano" disabled = {true} style={styles.planetButton5} navigation={navigation} numberFase={5} />
        }

        { nivelAtual >= 5 ?     
       <ButtonPlanet planet="Netuno" goFase={goFase}  style={styles.planetButton6} navigation={navigation} numberFase={6} current = {nivelAtual === 5  || nivelAtual === 6 ? true : false}/>
        :
        <ButtonPlanet planet="Netuno" disabled = {true} style={styles.planetButton6} navigation={navigation} numberFase={6} />
        }

        

        

        

        
        

    </View>
    )

}
const styles = StyleSheet.create({
    planets:{
        height: "100%",
        width: "100%",   
    },
    planetButton1:{
        position: "absolute",
        bottom: 160,
        left: 10
    },
    planetButton2:{
        position: "absolute",
        bottom: 400,
        right: 35,
        
    },
    planetButton3:{
        position: "absolute",
        bottom: 660,
        left: 1
    },
    planetButton4:{
        position: "absolute",
        bottom: 930,
        right: 35
    },
    planetButton5:{
        position: "absolute",
        bottom: 1220,
        left: 1
    },
    planetButton6:{
        position: "absolute",
        bottom: 1520,
        right: 10
    }
   

})