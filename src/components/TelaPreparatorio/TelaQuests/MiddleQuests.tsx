import React, { useEffect, useState, useCallback } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
import { View } from "react-native";
import TextEstelar from "../../ComponentesGenericos/CustomText";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from "@react-navigation/native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { RadioButton2 } from "../RadioButton";
import { collection, doc, getDocs, getFirestore, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
type middleProps ={
    questAtual: number,
    passQuestion: () => void,
    alterVisibilityTrue: () => void,
    alterVisibilityFalse: () => void,
    prova: any,
    provaEspecify:string


}
export const MiddleQuests: React.FC<middleProps> = ({questAtual, passQuestion, alterVisibilityTrue,prova, alterVisibilityFalse, provaEspecify}) =>{
    const [isSelectedA, setIsSelectedA] = useState<boolean>(false);
    const [isSelectedB, setIsSelectedB] = useState<boolean>(false);
    const [isSelectedC, setIsSelectedC] = useState<boolean>(false);
    const [isSelectedD, setIsSelectedD] = useState<boolean>(false);
    const [isSelectedE, setIsSelectedE] = useState<boolean>(false);

    const [respCorrectA, setRespCorrectA] = useState<boolean>(false);
    const [respCorrectB, setRespCorrectB] = useState<boolean>(false);
    const [respCorrectC, setRespCorrectC] = useState<boolean>(false);
    const [respCorrectD, setRespCorrectD] = useState<boolean>(false);
    const [respCorrectE, setRespCorrectE] = useState<boolean>(false);

    const [respErrorA, setRespErrorA] = useState<boolean>(false);
    const [respErrorB, setRespErrorB] = useState<boolean>(false);
    const [respErrorC, setRespErrorC] = useState<boolean>(false);
    const [respErrorD, setRespErrorD] = useState<boolean>(false);
    const [respErrorE, setRespErrorE] = useState<boolean>(false);

    const [ultimaQuestaoRespondida, setUltimaQuestaoRespondida] = useState<boolean>(false);
    const [qtdQuestoesRespondidas, setQtdQuestoesRespondidas] = useState<number>(0);

    const [rightQuests, setRightQuests] = useState<number>(0);
    const [fireRightQuests, setFireRightQuests] = useState<number>(0);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);


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
                              setFireRightQuests(dadosUsuario.questO);
                              console.log('Dados atualizados:', fireRightQuests);
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

     
      
    
    

    


    const image : any = prova[questAtual].imageEnunciado;
    
    async function  updateFirestore(){
        
        const q = query(userCollection, where('uid', '==', userId));
                        
        const querySnapshot = await getDocs(q);
        
        // Verifique se há algum documento retornado
        if (querySnapshot.size > 0) {
          // Se houver, pegue o ID do primeiro documento
          const primeiroDocumento = querySnapshot.docs[0];
          const idDocUsu = primeiroDocumento.id;
            
         console.log("fireRight: ", fireRightQuests);
         console.log("Right: ", rightQuests);
         
            
          try{
            await updateDoc(doc(firestore, "users", idDocUsu), {
                questO: fireRightQuests + rightQuests,
                
            })
        }catch{
            console.log("error");
        }        
        } 

    }
    useEffect(() => {
        
        if (rightQuests !== 0) {
            updateFirestore();
        }

    }, [rightQuests]);


    const selectA = () => {
        setIsSelectedA(!isSelectedA);
        setIsSelectedB(false);
        setIsSelectedC(false);
        setIsSelectedD(false);
        setIsSelectedE(false);
    }
    const selectB = () => {
        setIsSelectedA(false);
        setIsSelectedB(!isSelectedB);
        setIsSelectedC(false);
        setIsSelectedD(false);
        setIsSelectedE(false);

    }
    const selectC = () => {

        setIsSelectedA(false);
        setIsSelectedB(false);
        setIsSelectedC(!isSelectedC);
        setIsSelectedD(false);
        setIsSelectedE(false);
    }
    const selectD = () => {
        setIsSelectedA(false);
        setIsSelectedB(false);
        setIsSelectedC(false);
        setIsSelectedD(!isSelectedD);
        setIsSelectedE(false);

    }
    const selectE = () => {
        setIsSelectedA(false);
        setIsSelectedB(false);
        setIsSelectedC(false);
        setIsSelectedD(false);
        setIsSelectedE(!isSelectedE);

    }

    
    const responder = async () =>{
        prova[questAtual].respondida = true;
        
        setButtonDisabled(true);

        alterVisibilityFalse();

        if(isSelectedA){
            prova[questAtual].alterResp = "a";

            updateAsyncStorage();

            if(prova[questAtual].gabarito === "a"){
                setRespCorrectA(true);
                
                setRightQuests(prevRightQuests => prevRightQuests + 1);

                
            }
            else{  
                    setRespErrorA(true);
                    if(prova[questAtual].gabarito === "b"){
                        setRespCorrectB(true)
                    }   
                    else if(prova[questAtual].gabarito === "c"){
                        setRespCorrectC(true)
                    }
                    else if(prova[questAtual].gabarito === "d"){
                        setRespCorrectD(true)
                    }
                    else if(prova[questAtual].gabarito === "e"){
                        setRespCorrectE(true)
                    }

            }
        }
        else if(isSelectedB){
            prova[questAtual].alterResp = "b";

            updateAsyncStorage();

            if(prova[questAtual].gabarito === "b"){
                setRespCorrectB(true);

                setRightQuests(prevRightQuests => prevRightQuests + 1);

                
            }else{
                setRespErrorB(true);
                if(prova[questAtual].gabarito === "a"){
                    setRespCorrectA(true)
                }   
                else if(prova[questAtual].gabarito === "c"){
                    setRespCorrectC(true)
                }
                else if(prova[questAtual].gabarito === "d"){
                    setRespCorrectD(true)
                }
                else if(prova[questAtual].gabarito === "e"){
                    setRespCorrectE(true)
                }

            }
        }
        else if(isSelectedC){
            prova[questAtual].alterResp = "c";

            updateAsyncStorage();

            if(prova[questAtual].gabarito === "c"){
                setRespCorrectC(true);

                setRightQuests(prevRightQuests => prevRightQuests + 1)
             

               
                

            }else{
                setRespErrorC(true);
                if(prova[questAtual].gabarito === "a"){
                    setRespCorrectA(true)
                }   
                else if(prova[questAtual].gabarito === "b"){
                    setRespCorrectB(true)
                }
                else if(prova[questAtual].gabarito === "d"){
                    setRespCorrectD(true)
                }
                else if(prova[questAtual].gabarito === "e"){
                    setRespCorrectE(true)
                }
            }
        }
        else if(isSelectedD){
            prova[questAtual].alterResp = "d";
            updateAsyncStorage();

            if(prova[questAtual].gabarito === "d"){
                setRespCorrectD(true);

                setRightQuests(prevRightQuests => prevRightQuests + 1);


               
            }else{
                setRespErrorD(true);
                if(prova[questAtual].gabarito === "a"){
                    setRespCorrectA(true)
                }   
                else if(prova[questAtual].gabarito === "b"){
                    setRespCorrectB(true)
                }
                else if(prova[questAtual].gabarito === "c"){
                    setRespCorrectC(true)
                }
                else if(prova[questAtual].gabarito === "e"){
                    setRespCorrectE(true)
                }
            }
        }
        else if(isSelectedE){
            prova[questAtual].alterResp = "e";

            updateAsyncStorage();
            if(prova[questAtual].gabarito === "e"){
                setRespCorrectE(true);

                setRightQuests(prevRightQuests => prevRightQuests + 1);

                
            }else{
                setRespErrorE(true);
                if(prova[questAtual].gabarito === "a"){
                    setRespCorrectA(true)
                }   
                else if(prova[questAtual].gabarito === "b"){
                    setRespCorrectB(true)
                }
                else if(prova[questAtual].gabarito === "c"){
                    setRespCorrectC(true)
                }
                else if(prova[questAtual].gabarito === "d"){
                    setRespCorrectD(true)
                }
            }
        }
        const timeout = setTimeout(() => {
            setButtonDisabled(false);
            
            
            
            
            setIsSelectedA(false);
            setIsSelectedB(false);
            setIsSelectedC(false);
            setIsSelectedD(false);
            setIsSelectedE(false);

            setRespCorrectA(false);
            setRespCorrectB(false);
            setRespCorrectC(false);
            setRespCorrectD(false);
            setRespCorrectE(false);

            setRespErrorA(false);
            setRespErrorB(false);
            setRespErrorC(false);
            setRespErrorD(false);
            setRespErrorE(false);
            setQtdQuestoesRespondidas(qtdQuestoesRespondidas + 1);
            
            alterVisibilityTrue();
        }, 500)
        
    }
    useEffect(() => {
      if(qtdQuestoesRespondidas === 10){
        obterDadosUsuario();
      }
    }, [qtdQuestoesRespondidas])


    
    async function updateAsyncStorage() {
        try {
          const answerKey = `@estelar:${provaEspecify}:${userId}:resposta_${questAtual}`;
          const answerData = {
            
            responded: prova[questAtual].respondida,
            
            selectedOption: prova[questAtual].alterResp,
            
          };
          console.log(prova[questAtual].respondida);
          console.log(prova[questAtual].alterResp);
      
          await AsyncStorage.setItem(answerKey, JSON.stringify(answerData));
        } catch (error) {
          console.error('Erro ao salvar informações no AsyncStorage:', error);
        }
      }

     

      useEffect(() => {
        const retrieveAnswer = async () => {
          try {
            const answerKey = `@estelar:${provaEspecify}:${userId}:resposta_${questAtual}`;
            const storedAnswer = await AsyncStorage.getItem(answerKey);
      
            if (storedAnswer) {
              const parsedAnswer = JSON.parse(storedAnswer);
      
              // Atualizar o estado local com as informações recuperadas
              prova[questAtual].respondida = parsedAnswer.responded;
              prova[questAtual].alterResp = parsedAnswer.selectedOption;
               
              // Adicione lógica para configurar outros estados conforme necessário
            }
          } catch (error) {
            console.error('Erro ao recuperar informações do AsyncStorage:', error);
          }
        };
      
        retrieveAnswer();
      }, [questAtual]);
     
      useEffect(() => {
        console.log( prova[questAtual].respondida);
       
      }, [prova[questAtual].respondida])
      useEffect(() => {
        console.log( prova[questAtual].alterResp);
       
      }, [prova[questAtual].alterResp])
      
      
    
   // prova[questAtual].respondida = false;
   // prova[questAtual].alterResp = "";
 return (
    
    <View 
        style = {styles.midleView}
    >
        
        <View 
            style = {styles.cardButton}
        >
            <View
                style = {styles.cardQuests}
            >
                <ScrollView
                    style = {styles.scrollQuest}
                    showsVerticalScrollIndicator = {false}
                >
                    <View style = {styles.questAndEnunciado}>
                        <View style = {styles.enunciado} >
                            
                            <TextEstelar>
                                {prova[questAtual].enunciado}
                            </TextEstelar>

                            
                            
                            {prova[questAtual].imageEnunciado &&

                                <Image style = {styles.imageEnunciado} source={image}/>

                            }

                            {prova[questAtual].afirmativas && 
                                <View style = {styles.boxAfirmativas}>
                                    <TextEstelar>
                                        (  ) - {prova[questAtual].afirmativa1}
                                    </TextEstelar>
                                    <TextEstelar>
                                        (  ) - {prova[questAtual].afirmativa2}
                                    </TextEstelar>
                                    <TextEstelar>
                                        (  ) - {prova[questAtual].afirmativa3}
                                    </TextEstelar>
                                    <TextEstelar>
                                        (  ) - {prova[questAtual].afirmativa4}
                                    </TextEstelar>
                                    <TextEstelar>
                                        (  ) - {prova[questAtual].afirmativa5}
                                    </TextEstelar>
                            </View>
                            }

                        </View>
                        <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                        style = {styles.scrollAlter}
                        >
                        <View style = {styles.alternativas}>
                            
                            {respCorrectA  ? 
                                <View style = {styles.viewAlterSelectRight}>
                                <TextEstelar
                                style = {styles.alternativaLetter}
                                    >
                                        A)
                                    </TextEstelar>    
                                    <TouchableOpacity onPress={selectA}>
                                        <RadioButton2
                                            text={prova[questAtual].alterA}
                                            isSelected= {isSelectedA}
                                        /> 
                                    </TouchableOpacity>
                                </View>
                                : 
                                (prova[questAtual].respondida && prova[questAtual].alterResp === "a" && prova[questAtual].alterResp === prova[questAtual].gabarito) ? 
                                
                                <View style = {styles.viewAlterSelectRight}>
                                <TextEstelar
                                style = {styles.alternativaLetter}
                                    >
                                        A)
                                    </TextEstelar>    
                                    <TouchableOpacity>
                                        <RadioButton2
                                            text={prova[questAtual].alterA}
                                            isSelected= {true}
                                        /> 
                                    </TouchableOpacity>
                                </View>
         
                                : (prova[questAtual].respondida && prova[questAtual].alterResp === "a" && prova[questAtual].alterResp !== prova[questAtual].gabarito) ?  
                                <View style = {styles.viewAlterSelectError}>
                                <TextEstelar
                                style = {styles.alternativaLetter}
                                    >
                                        A)
                                    </TextEstelar>    
                                    <TouchableOpacity>
                                        <RadioButton2
                                            text={prova[questAtual].alterA}
                                            isSelected= {true}
                                        /> 
                                    </TouchableOpacity>
                                </View>
                                
                                
                                
                                
                                
                                
                                : (prova[questAtual].respondida && prova[questAtual].alterResp !== "a" && prova[questAtual].gabarito === "a") ? 
                                
                                <View style = {styles.viewAlterSelectRight}>
                                <TextEstelar
                                style = {styles.alternativaLetter}
                                    >
                                        A)
                                    </TextEstelar>    
                                    <TouchableOpacity>
                                        <RadioButton2
                                            text={prova[questAtual].alterA}
                                            isSelected= {false}
                                        /> 
                                    </TouchableOpacity>
                                </View>
                                
                                
                                
                                
                                : prova[questAtual].respondida ?
                            
                                <View style = {styles.viewAlter}>
                                <TextEstelar
                                style = {styles.alternativaLetter}
                                    >
                                        A)
                                    </TextEstelar>    
                                    <TouchableOpacity >
                                        <RadioButton2
                                            text={prova[questAtual].alterA}
                                            isSelected= {false}
                                        /> 
                                    </TouchableOpacity>
                                </View>
                                
                                
                                : respErrorA ?
                                <View style = {styles.viewAlterSelectError}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    A)
                                </TextEstelar>    
                                <TouchableOpacity onPress={selectA}>
                                    <RadioButton2
                                        text={prova[questAtual].alterA}
                                        isSelected= {isSelectedA}
                                    /> 
                                </TouchableOpacity>
                            </View>

                            :
                            <View style = {styles.viewAlter}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    A)
                                </TextEstelar>    
                                <TouchableOpacity onPress={selectA}>
                                    <RadioButton2
                                        text={prova[questAtual].alterA}
                                        isSelected= {isSelectedA}
                                    /> 
                                </TouchableOpacity>
                            </View>
                                
                        
                            }
                            {respCorrectB
                                ?
                                <View style = {styles.viewAlterSelectRight}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    B)
                                </TextEstelar>    
                                <TouchableOpacity onPress={selectB}>
                                    <RadioButton2
                                        text={prova[questAtual].alterB}
                                        isSelected= {isSelectedB}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            : (prova[questAtual].respondida && prova[questAtual].alterResp === "b" && prova[questAtual].alterResp === prova[questAtual].gabarito) ? 
                                
                            <View style = {styles.viewAlterSelectRight}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    B)
                                </TextEstelar>    
                                <TouchableOpacity>
                                    <RadioButton2
                                        text={prova[questAtual].alterB}
                                        isSelected= {true}
                                    /> 
                                </TouchableOpacity>
                            </View>
     
                            : (prova[questAtual].respondida && prova[questAtual].alterResp === "b" && prova[questAtual].alterResp !== prova[questAtual].gabarito) ?  
                            <View style = {styles.viewAlterSelectError}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    B)
                                </TextEstelar>    
                                <TouchableOpacity>
                                    <RadioButton2
                                        text={prova[questAtual].alterB}
                                        isSelected= {true}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            
                            
                            
                            
                            
                            
                            : (prova[questAtual].respondida && prova[questAtual].alterResp !== "b" && prova[questAtual].gabarito === "b") ? 
                            
                            <View style = {styles.viewAlterSelectRight}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    B)
                                </TextEstelar>    
                                <TouchableOpacity>
                                    <RadioButton2
                                        text={prova[questAtual].alterB}
                                        isSelected= {false}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            
                            
                            
                            
                            : prova[questAtual].respondida ?
                            
                            <View style = {styles.viewAlter}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    B)
                                </TextEstelar>    
                                <TouchableOpacity >
                                    <RadioButton2
                                        text={prova[questAtual].alterB}
                                        isSelected= {false}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            
                            
                            : respErrorB ?
                            <View style = {styles.viewAlterSelectError}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    B)
                                </TextEstelar>    
                                <TouchableOpacity onPress={selectB}>
                                    <RadioButton2
                                        text={prova[questAtual].alterB}
                                        isSelected= {isSelectedB}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            :
                            <View style = {styles.viewAlter}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    B)
                                </TextEstelar>    
                                <TouchableOpacity onPress={selectB}>
                                    <RadioButton2
                                        text={prova[questAtual].alterB}
                                        isSelected= {isSelectedB}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            
                            
                            }
                            
                            {respCorrectC 
                                ?
                            
                                <View style = {styles.viewAlterSelectRight}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    C)
                                </TextEstelar>   
                                <TouchableOpacity onPress={selectC}>
                                    <RadioButton2
                                        text={prova[questAtual].alterC}
                                        isSelected= {isSelectedC}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            : (prova[questAtual].respondida && prova[questAtual].alterResp === "c" && prova[questAtual].alterResp === prova[questAtual].gabarito) ? 
                                
                            <View style = {styles.viewAlterSelectRight}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    C)
                                </TextEstelar>    
                                <TouchableOpacity>
                                    <RadioButton2
                                        text={prova[questAtual].alterC}
                                        isSelected= {true}
                                    /> 
                                </TouchableOpacity>
                            </View>
     
                            : (prova[questAtual].respondida && prova[questAtual].alterResp === "c" && prova[questAtual].alterResp !== prova[questAtual].gabarito) ?  
                            <View style = {styles.viewAlterSelectError}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    C)
                                </TextEstelar>    
                                <TouchableOpacity>
                                    <RadioButton2
                                        text={prova[questAtual].alterC}
                                        isSelected= {true}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            
                            
                            
                            
                            
                            
                            : (prova[questAtual].respondida && prova[questAtual].alterResp !== "c" && prova[questAtual].gabarito === "c") ? 
                            
                            <View style = {styles.viewAlterSelectRight}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    C)
                                </TextEstelar>    
                                <TouchableOpacity>
                                    <RadioButton2
                                        text={prova[questAtual].alterC}
                                        isSelected= {false}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            
                            
                            
                            
                            : prova[questAtual].respondida ?
                            
                            <View style = {styles.viewAlter}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    C)
                                </TextEstelar>    
                                <TouchableOpacity >
                                    <RadioButton2
                                        text={prova[questAtual].alterC}
                                        isSelected= {false}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            
                            
                            : respErrorC ?
                            <View style = {styles.viewAlterSelectError}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    C)
                                </TextEstelar>   
                                <TouchableOpacity onPress={selectC}>
                                    <RadioButton2
                                        text={prova[questAtual].alterC}
                                        isSelected= {isSelectedC}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            :
                            <View style = {styles.viewAlter}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    C)
                                </TextEstelar>   
                                <TouchableOpacity onPress={selectC}>
                                    <RadioButton2
                                        text={prova[questAtual].alterC}
                                        isSelected= {isSelectedC}
                                    /> 
                                </TouchableOpacity>
                            </View>
                        
                        
                        
                            }
                            
                            {respCorrectD
                            ?
                            <View style = {styles.viewAlterSelectRight}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    D)
                                </TextEstelar>   
                                <TouchableOpacity onPress={selectD}>
                                    <RadioButton2
                                        text={prova[questAtual].alterD}
                                        isSelected= {isSelectedD}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            : (prova[questAtual].respondida && prova[questAtual].alterResp === "d" && prova[questAtual].alterResp === prova[questAtual].gabarito) ? 
                                
                            <View style = {styles.viewAlterSelectRight}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    D)
                                </TextEstelar>    
                                <TouchableOpacity>
                                    <RadioButton2
                                        text={prova[questAtual].alterD}
                                        isSelected= {true}
                                    /> 
                                </TouchableOpacity>
                            </View>
     
                            : (prova[questAtual].respondida && prova[questAtual].alterResp === "d" && prova[questAtual].alterResp !== prova[questAtual].gabarito) ?  
                            <View style = {styles.viewAlterSelectError}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    D)
                                </TextEstelar>    
                                <TouchableOpacity>
                                    <RadioButton2
                                        text={prova[questAtual].alterD}
                                        isSelected= {true}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            
                            
                            
                            
                            
                            
                            : (prova[questAtual].respondida && prova[questAtual].alterResp !== "d" && prova[questAtual].gabarito === "d") ? 
                            
                            <View style = {styles.viewAlterSelectRight}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    D)
                                </TextEstelar>    
                                <TouchableOpacity>
                                    <RadioButton2
                                        text={prova[questAtual].alterD}
                                        isSelected= {false}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            
                            
                            
                            
                            : prova[questAtual].respondida ?
                            
                            <View style = {styles.viewAlter}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    D)
                                </TextEstelar>    
                                <TouchableOpacity >
                                    <RadioButton2
                                        text={prova[questAtual].alterD}
                                        isSelected= {false}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            
                            
                            : respErrorD ?
                            <View style = {styles.viewAlterSelectError}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    D)
                                </TextEstelar>   
                                <TouchableOpacity onPress={selectD}>
                                    <RadioButton2
                                        text={prova[questAtual].alterD}
                                        isSelected= {isSelectedD}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            :
                            <View style = {styles.viewAlter}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                                >
                                    D)
                                </TextEstelar>   
                                <TouchableOpacity onPress={selectD}>
                                    <RadioButton2
                                        text={prova[questAtual].alterD}
                                        isSelected= {isSelectedD}
                                    /> 
                                </TouchableOpacity>
                            </View>                            
                        
                            }
                            
                            {respCorrectE
                            ?
                            <View style = {styles.viewAlterSelectRight}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                            >
                                E)
                            </TextEstelar>  
                            <TouchableOpacity onPress={selectE}>
                                <RadioButton2
                                    text={prova[questAtual].alterE}
                                    isSelected= {isSelectedE}
                                /> 
                            </TouchableOpacity>
                        </View>
                        : (prova[questAtual].respondida && prova[questAtual].alterResp === "e" && prova[questAtual].alterResp === prova[questAtual].gabarito) ? 
                                
                        <View style = {styles.viewAlterSelectRight}>
                        <TextEstelar
                        style = {styles.alternativaLetter}
                            >
                                E)
                            </TextEstelar>    
                            <TouchableOpacity>
                                <RadioButton2
                                    text={prova[questAtual].alterE}
                                    isSelected= {true}
                                /> 
                            </TouchableOpacity>
                        </View>
 
                        : (prova[questAtual].respondida && prova[questAtual].alterResp === "e" && prova[questAtual].alterResp !== prova[questAtual].gabarito) ?  
                        <View style = {styles.viewAlterSelectError}>
                        <TextEstelar
                        style = {styles.alternativaLetter}
                            >
                                E)
                            </TextEstelar>    
                            <TouchableOpacity>
                                <RadioButton2
                                    text={prova[questAtual].alterE}
                                    isSelected= {true}
                                /> 
                            </TouchableOpacity>
                        </View>
                        
                        
                        
                        
                        
                        
                        : (prova[questAtual].respondida && prova[questAtual].alterResp !== "e" && prova[questAtual].gabarito === "e") ? 
                        
                        <View style = {styles.viewAlterSelectRight}>
                        <TextEstelar
                        style = {styles.alternativaLetter}
                            >
                                E)
                            </TextEstelar>    
                            <TouchableOpacity>
                                <RadioButton2
                                    text={prova[questAtual].alterE}
                                    isSelected= {false}
                                /> 
                            </TouchableOpacity>
                        </View>
                        
                        
                        
                        
                        :prova[questAtual].respondida ?
                            
                        <View style = {styles.viewAlter}>
                        <TextEstelar
                        style = {styles.alternativaLetter}
                            >
                                E)
                            </TextEstelar>    
                            <TouchableOpacity >
                                <RadioButton2
                                    text={prova[questAtual].alterE}
                                    isSelected= {false}
                                /> 
                            </TouchableOpacity>
                        </View>
                        
                        
                        : respErrorE ?
                        <View style = {styles.viewAlterSelectError}>
                                <TextEstelar
                                style = {styles.alternativaLetter}
                                >
                                    E)
                                </TextEstelar>  
                                <TouchableOpacity onPress={selectE}>
                                    <RadioButton2
                                        text={prova[questAtual].alterE}
                                        isSelected= {isSelectedE}
                                    /> 
                                </TouchableOpacity>
                            </View>
                            :
                            <View style = {styles.viewAlter}>
                            <TextEstelar
                            style = {styles.alternativaLetter}
                            >
                                E)
                            </TextEstelar>  
                            <TouchableOpacity onPress={selectE}>
                                <RadioButton2
                                    text={prova[questAtual].alterE}
                                    isSelected= {isSelectedE}
                                /> 
                            </TouchableOpacity>
                        </View>
                            }
                            
                            
                        </View>
                        </ScrollView>
                    </View>

                </ScrollView>

            </View>
            {isSelectedA || isSelectedB || isSelectedC || isSelectedD || isSelectedE ?
                <TouchableOpacity disabled = {buttonDisabled} onPress={responder} style = {styles.buttonResp2}>
                <TextEstelar
                style = {styles.textButton}
                
                >
                    Responder
                </TextEstelar>
            </TouchableOpacity>
            : prova[questAtual].respondida 
                ?
                <TouchableOpacity disabled = {true} onPress={responder} style = {styles.buttonResp3}>
                    <TextEstelar
                    style = {styles.textButton}
                
                    >
                        Responder
                    </TextEstelar>
                </TouchableOpacity>
            :

            <TouchableOpacity 
            style = {styles.buttonResp}
            disabled = {true}
            >
                <TextEstelar
                style = {styles.textButton}
                >
                    Responder
                </TextEstelar>
            </TouchableOpacity>
            }
            
        </View>
        
        
    </View>
    
)

}
const styles = StyleSheet.create({
    midleView:{
        width: "100%",
        flex: 1,
        padding: 10
    },
    cardButton: {
        width: "100%",
        height: "98%",
        borderRadius: 20,
        backgroundColor: "#212758",
        padding: 10,
        alignItems:"center",
        gap: 10
    },
    cardQuests: {
        width: "100%",
        height: "90%",
        borderRadius: 20,
        backgroundColor: "white",
        padding: 10
    },buttonResp:{
        backgroundColor: "#0C0021",
        height: 50,
        width: "50%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        padding: 5
        

    },buttonResp2:{
        backgroundColor: "#FF7747",
        height: 50,
        width: "50%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
    },
    buttonResp3:{
        backgroundColor: "#E88461",
        height: 50,
        width: "50%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
    },
    textPadrao:{
        color: "black"

    },
    textButton:{
        color: "white",
        fontSize: RF(15)
    },
    scrollQuest:{
        flex: 1,
        
      
    },
    enunciado: {
        width: "100%",
        gap: 50
    },
    questAndEnunciado:{
        flex: 1,
        gap: 40,


    },
    alternativas:{
        width: "100%",
        gap: 20

    },
    imageEnunciado:{
        width: "100%",
        height: 300

    },
    boxAfirmativas:{
        gap: 10

    },
    viewAlter:{
        width: "100%",
        paddingHorizontal: 5,
        height: 70,
        alignItems: "center",
        flexDirection: "row",
     
        borderRadius: 10,
        gap: 10
    },
    viewAlterSelectRight:{
        width: "100%",
        padding: 5,
        height: 70,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor:"#A0E395",
        borderRadius: 10,

    },
    viewAlterSelectError:{
        width: "100%",
        padding: 5,
        height: 70,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor:"#FF9B9B",
        borderRadius: 10,

    },
    alternativaLetter:{
        fontSize: RF(18),
        color: "#323232"

    },scrollAlter:{
        
       
    }



})