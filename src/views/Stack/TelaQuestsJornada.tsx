import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import image from "../../images/fundoQuestsJornada.png"
import { TopoQuestJornada } from "../../components/TelaQuestsJornada/TopoQuestJornada";
import { Nivel1Terra } from "../../dados/NivelFase";
import { MidleQuestJornada } from "../../components/TelaQuestsJornada/MidleQuestJornada";
type propsTelaQuestsJornada = {
    navigation: any,
    route: any
}
export const TelaQuestsJornadas: React.FC<propsTelaQuestsJornada> = ({navigation, route}) =>{
    const [questAtual, setQuestAtual] = useState<number>(0);
    const {planet}  = route.params;
    const [backgroundLoaded, setBackgroundLoaded] = useState<boolean>(false);
    const [tempoRestante, setTempoRestante] = useState(60);
  

    useEffect(() => {
        const timer : any = setInterval(() => {
          if (tempoRestante > 0) {
            setTempoRestante((prev) => prev - 1);
          } else {
            // Lógica quando o tempo se esgota
            clearInterval(timer);
          }
        }, 1000);

        

        return () => clearInterval(timer);
    }, [tempoRestante]);
    
    const reiniciarTempo = () => {
        setTempoRestante(60);

    }
    const handleLoad = () =>{
        setBackgroundLoaded(true);

      
    }


    const backQuestion = () =>{
        setQuestAtual(questAtual - 1);
    }
    const passQuestion = () =>{
        if((questAtual + 1) < Nivel1Terra.length){
        setQuestAtual(questAtual + 1);
        }
    }
    return (
        
        <ImageBackground
            source={image}
            style = {{flex: 1, paddingTop: 5, paddingHorizontal: 10}}
    
        >  
       
           { planet === "Terra" && 
                (
                <>
                    <TopoQuestJornada
                    navigation = {navigation}
                    planet = {planet}
                    numberQ={Nivel1Terra[questAtual].numberQ}
                    tempoRestante={tempoRestante}
                    />
                    <MidleQuestJornada
                        navigation={navigation}
                        nivel = {Nivel1Terra}
                        numberQ={questAtual}
                        passQuestion={passQuestion}
                        reiniciarTempo={reiniciarTempo}
                        tempoRestante={tempoRestante}
                      

                    />
                
                </>

                )
            }
        
        

        </ImageBackground>
        
    )

}