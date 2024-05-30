import React, { useEffect, useState } from "react"
import { Alert,  ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import { CardEnum } from "./components/CardEnun"
import { ButtonResp } from "./components/ButtonsResp"
import { getAuth } from "firebase/auth"
import { collection, doc, getDocs, getFirestore, onSnapshot, query, updateDoc, where } from "firebase/firestore"
import TextEstelar from "../ComponentesGenericos/CustomText"
import { RFValue as RF } from "react-native-responsive-fontsize"
import { SvgXml } from "react-native-svg"
import { starPoint, starPointM } from "../../svgs/starPoint"
import { astronautaRequest, starsRequest } from "../../svgs/fundoAstronautaRequest"
type propsMidleQuestJornada = {
navigation: any,
nivel: any,
numberQ: number,
passQuestion: () => void,
reiniciarTempo: () => void,
zerarTempo: () => void,
plusLife: () => void,
backQuestion: () => void,
minusLife: () => void,
toggleGame: () => void,
repetir: (numeroQ : number) => void,
lifes:  number,
tempoRestante: number,
timer?: any,
planet: string
}
export const MidleQuestJornada: React.FC<propsMidleQuestJornada> = ({navigation, nivel, numberQ,repetir, lifes, backQuestion,  passQuestion, reiniciarTempo, tempoRestante, timer, zerarTempo, planet, plusLife, minusLife, toggleGame}) =>{
    const autenticacao = getAuth();
    const usuario : any = autenticacao.currentUser; 
    const firestore = getFirestore();
    const userId = usuario.uid; // Substitua pelo ID do usuário
    const userCollection = collection(firestore, 'users');
    const [nivelPlaneta, setNivelPlaneta] = useState<number>(0);

    const [starCoust, setStarCoust] = useState<number>(20);
    const [pass, setPass] = useState<boolean>(false);
    const [starsWins, setStarsWin] = useState<number>(0);
    const [alternativaSelecionada, setAlternativaSelecionada] = React.useState<string>("");
    const [correta, setCorreta] = React.useState<boolean | null>(null);
    const [respondida, setRespondida] = React.useState<boolean | null> (null);
    const [quantidadeCertas, setQuantidadeCertas] = React.useState<number>(0);
    const [quantidadeRespondidas, setQuantidadeRespondidas] = React.useState<number>(0);
    const [nivelAtual, setNivelAtual] = useState<number>(0);
    const [showOfert, setShowOfert] = useState<boolean>(false);
    const [stars, setStars] = useState<number>(-1);

    const selecionarAlter = (alternativaId : number) =>{
        setAlternativaSelecionada(alternativaId.toString());

        setRespondida(true);

      
        setQuantidadeRespondidas(prevState => prevState + 1);
     
         
        
        
    }
    useEffect(()=>{
      
        if(alternativaSelecionada === nivel[numberQ].gabarito){
            setCorreta(true);
           
            if(!tempoEsgotado){
            setQuantidadeCertas(prevState => prevState + 1);
             
            setStars(prevState => prevState + 5);
            setStarsWin(prevState => prevState + 5);
              


            }


        }
        else if (quantidadeRespondidas > 0 && alternativaSelecionada !== ""){
          minusLife();

        }

        if(alternativaSelecionada !== ""){
        
        const timeout = setTimeout(() => {
              
            
            passQuestion();
           

            setCorreta(null);
            setRespondida(null);
            setAlternativaSelecionada("");
            
            reiniciarTempo();
            
           
            
          },1000);
        
      }
    }, [alternativaSelecionada])

    const [tempoEsgotado, setTempoEsgotado] = useState(false);
    useEffect(()=>{
      console.log(pass);
    }, [pass])
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
            minusLife();
            const timeout = setTimeout(() => {
            
                passQuestion();



                setCorreta(null);
                setRespondida(null);
                setAlternativaSelecionada("");
                reiniciarTempo();
                setTempoEsgotado(false);
            }, 1000);
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

    const attStarsFire = async () =>{
        

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
                              
                             stars: stars,  
                          })

                          }catch{
                            
                              console.log("error");
  
                          }
                 
                      
                      
                      
                      } else {
                  
                        console.error("Nenhum documento encontrado para o UID fornecido.");
                      }
                          

  }




    useEffect(()=>{
        if(quantidadeRespondidas >= 5 && numberQ + 1 === 5 && quantidadeCertas >= 3){
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
                              setStars(dadosUsuario.stars);
                             
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




useEffect(() => {
    if(lifes == 0){
      
      toggleGame();
      

    }
    
}, [lifes] )


const continueGame = () => {
  if(stars >= starCoust){
    setStars (prevState => prevState - starCoust);
    plusLife();
    toggleGame();
    setStarCoust(prevState => prevState + 15);
    
    repetir(numberQ - 1);
   

 
  }
  else{
    Alert.alert("Estrelas Insuficientes");
  }
}
const stopGame = () => {
  navigation.goBack()

}


useEffect(() => {
  if(stars !== -1 && nivelPlaneta === nivelAtual ){
    attStarsFire();
  }  
}, [stars])

    return(
      <>
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
     
     {lifes == 0 &&
      <ImageBackground
        style = {{position: "absolute", height: "100%", width: "100%", alignItems:"center", justifyContent: "center"   }}
        source={require("../../images/fundoPreto.png")}
      >
        
        <View
          style = {{borderRadius: 40, width: "90%", borderWidth: 3, borderColor: "#8DBFD4", height: "80%" , overflow: "hidden", backgroundColor: "#0C0126"}}
        >
          <View
            style = { { borderBottomLeftRadius: 40, width: 140, height: 60, backgroundColor: "#212758", position: "absolute", top: 0, right: -10} }
          >
            <View
              style = {{flexDirection: "row", gap: 10, alignItems:'center', justifyContent: "flex-start", marginLeft: 20}}
            >
              <TextEstelar
                style = {{color: "#F9D040", fontSize: RF(20)}}
              >
                {stars}  
              </TextEstelar>  

              <SvgXml xml = {starPoint} />


            </View> 

          </View>
          
          <View
            style = {styles.topViewRequest}
            
          >
              <SvgXml  xml={starsRequest} style = {{position: "absolute", top: 60, zIndex: 2}} /> 
              <SvgXml xml={astronautaRequest}  style = {{position: "absolute", top: 80}} />
          </View>
          <View
              style = {styles.bottomViewRequest}
          >
            <View
              style = {{justifyContent: "center", alignItems: "center", width: "70%", flexDirection: "row", }}
            >
              <View style = {{alignItems: "center"}}>
                <TextEstelar style = {{color:"white", fontSize: RF(17)}}>
                  Você deseja mais uma 
                </TextEstelar>
                <View style = {{flexDirection: "row", gap: 5, width: "100%"}}>
                  <TextEstelar style = {{color:"white", fontSize: RF(17), alignSelf: 'flex-start', marginLeft: 20}}>
                    tentativa por
                  </TextEstelar>
                  <View style = {{flexDirection: "row"}}>
                    <TextEstelar style = {{color:"#F8D043", fontSize: RF(17),}}>
                      {starCoust}
                    </TextEstelar>
                    <SvgXml xml={starPointM}/>
                    <TextEstelar style = {{color:"#F8D043", fontSize: RF(17),}}>
                      ? 
                    </TextEstelar>
                  </View>
                </View>

                
              </View>
             
            </View>
            <View style = {{width: "100%", gap: 30, alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity
                    style = {[styles.button,  {backgroundColor: "#3FB62B"} ] }
                    onPress={continueGame}
                  >
                      <TextEstelar style = {{color: "black", fontSize: RF(16)}}>
                        Sim!
                      </TextEstelar>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style = {[styles.button, {backgroundColor: "#FF9B9B"} ]}
                    onPress={stopGame}
                  >
                      <TextEstelar style = {{color: "black", fontSize: RF(16)}}>
                        Não
                      </TextEstelar>
                  </TouchableOpacity>
              </View>
          </View>
        </View>

      </ImageBackground>
    }
    </>
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
    },
    topViewRequest: {
      height: "45%",
      
      width: "100%", 
      borderTopRightRadius: 35,
      borderTopLeftRadius: 35,

    },
    bottomViewRequest:{
      height: "55%",
      alignItems: "center",
      paddingTop: 30,
      
      borderBottomLeftRadius: 35,
      borderBottomRightRadius: 35,
      width: "100%",
      zIndex: 2,
      overflow: 'hidden',
      backgroundColor: "#0C0126"


    },
    button: {
      height: 55,
      width: "80%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10

    },

})