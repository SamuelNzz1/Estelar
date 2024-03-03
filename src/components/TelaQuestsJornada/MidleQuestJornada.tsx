import React, { useEffect, useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { CardEnum } from "./components/CardEnun"
import { ButtonResp } from "./components/ButtonsResp"
import { getAuth } from "firebase/auth"
import { collection, doc, getDocs, getFirestore, onSnapshot, query, updateDoc, where } from "firebase/firestore"

type propsMidleQuestJornada = {
navigation: any,
nivel: any,
numberQ: number,
passQuestion: () => void,
reiniciarTempo: () => void,
zerarTempo: () => void,
tempoRestante: number,
timer?: any,
planet: string
}
export const MidleQuestJornada: React.FC<propsMidleQuestJornada> = ({navigation, nivel, numberQ, passQuestion, reiniciarTempo, tempoRestante, timer, zerarTempo, planet}) =>{
    const autenticacao = getAuth();
    const usuario : any = autenticacao.currentUser; 
    const firestore = getFirestore();
    const userId = usuario.uid; // Substitua pelo ID do usuário
    const userCollection = collection(firestore, 'users');
    const [nivelPlaneta, setNivelPlaneta] = useState<number>(0);
    

    const [alternativaSelecionada, setAlternativaSelecionada] = React.useState<string>("");
    const [correta, setCorreta] = React.useState<boolean | null>(null);
    const [respondida, setRespondida] = React.useState<boolean | null> (null);
    const [quantidadeCertas, setQuantidadeCertas] = React.useState<number>(0);
    const [quantidadeRespondidas, setQuantidadeRespondidas] = React.useState<number>(0);
    const [nivelAtual, setNivelAtual] = useState<number>(0);
    
    const selecionarAlter = (alternativaId : number) =>{
        setAlternativaSelecionada(alternativaId.toString());

        setRespondida(true);
        setQuantidadeRespondidas(prevState => prevState + 1);

    }
    useEffect(()=>{
      
        if(alternativaSelecionada === nivel[numberQ].gabarito){
            setCorreta(true);
           
            if(!tempoEsgotado)
            setQuantidadeCertas(prevState => prevState + 1);

        }
        if(alternativaSelecionada !== ""){
        const timeout = setTimeout(() => {
          
            passQuestion();
              
            setCorreta(null);
            setRespondida(null);
            setAlternativaSelecionada("");
            reiniciarTempo();
           
            
          },2500);
        }
    }, [alternativaSelecionada])

    const [tempoEsgotado, setTempoEsgotado] = useState(false);

    useEffect(()=>{
        console.log(quantidadeCertas);

    }, [quantidadeCertas])
    
    if (tempoRestante === 0 && !tempoEsgotado) {
        setTempoEsgotado(true);
        const timeout = setTimeout(() => {
            setTempoEsgotado(false);
        }, 1000);
        if(respondida !== true){
            
            setCorreta(true);
            setRespondida(true);
            setQuantidadeRespondidas(prevState => prevState + 1);
            setAlternativaSelecionada(nivel[numberQ].gabarito);
            
            const timeout = setTimeout(() => {
                passQuestion();
                setCorreta(null);
                setRespondida(null);
                setAlternativaSelecionada("");
                reiniciarTempo();
                setTempoEsgotado(false);
            }, 2500);
        }else{
            reiniciarTempo();
        }

    }

    const attFire = async () =>{
        

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
                                
                               nivelJ: nivelAtual + 1
                            })

                            }catch{
                              
                                console.log("error");
    
                            }
                   
                        
                        
                        
                        } else {
                    
                          console.error("Nenhum documento encontrado para o UID fornecido.");
                        }
                            

    }



    useEffect(()=>{
        if(quantidadeRespondidas === 5){
                zerarTempo();
                navigation.navigate("TelaResultado", {quantidadeCertas});
                if(quantidadeCertas >= 3){

                    if(nivelPlaneta === nivelAtual)
                    attFire();
                        
                }
            
        }

    }, [quantidadeRespondidas, quantidadeCertas])
    
    

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
    
      useEffect(() => {
  const valuePlanet = () => {
    if (planet === "Terra") {
      setNivelPlaneta(0);
    } else if (planet === "Marte") {
      setNivelPlaneta(1);
    } else if (planet === "Júpiter") {
      setNivelPlaneta(2);
    } else if (planet === "Saturno") {
      setNivelPlaneta(3);
    } else if (planet === "Urano") {
      setNivelPlaneta(4);
    } else if (planet === "Netuno") {
      setNivelPlaneta(5);
    }
  };

  valuePlanet();
}, [planet]);

    return(
    <View
        style = {styles.midleView}
    >  
    
        <CardEnum
            enunciado={nivel[numberQ].enunciado}
            
            imagem={nivel[numberQ].imagem}
        />
 
        <View 
            style = {styles.respButtons}
        >
               {nivel[numberQ].alternativas.map((alternativa : any, index : any) => (
                    <ButtonResp 
                    key={index}
                    alternativa={alternativa}
                    selecionar={selecionarAlter}
                    correta ={correta}
                    respondida = {respondida}
                    selecionada={alternativaSelecionada}
                    gabas={nivel[numberQ].gabarito}
                    />
                ))}
          

        </View>

    </View>
    )


}

const styles = StyleSheet.create({
    midleView:{
        width: "100%",
        height: "80%",
        alignItems:"center",
        gap: 20

    },
    respButtons:{
        width:"90%",
        height: "55%",
        gap: 15
    }

})