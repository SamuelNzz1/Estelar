import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { CardEnum } from "./components/CardEnun"
import { ButtonResp } from "./components/ButtonsResp"

type propsMidleQuestJornada = {
navigation: any,
nivel: any,
numberQ: number,
passQuestion: () => void,
reiniciarTempo: () => void,
tempoRestante: number,
}
export const MidleQuestJornada: React.FC<propsMidleQuestJornada> = ({navigation, nivel, numberQ, passQuestion, reiniciarTempo, tempoRestante}) =>{
    const [alternativaSelecionada, setAlternativaSelecionada] = React.useState<string>("");
    const [correta, setCorreta] = React.useState<boolean | null>(null);
    const [respondida, setRespondida] = React.useState<boolean | null> (null);
    const [quantidadeCertas, setQuantidadeCertas] = React.useState<number>(0);
    const [quantidadeRespondidas, setQuantidadeRespondidas] = React.useState<number>(0);
    
    const selecionarAlter = (alternativaId : number) =>{
        setAlternativaSelecionada(alternativaId.toString());

        setRespondida(true);
        setQuantidadeRespondidas(prevState => prevState + 1);

    }
    useEffect(()=>{

        if(alternativaSelecionada === nivel[numberQ].gabarito){
            setCorreta(true);
            console.log("correta")
            if(!tempoEsgotado)
            setQuantidadeCertas(prevState => prevState + 1);

        }else{
            console.log("incorreta")
        }
        if(alternativaSelecionada !== ""){
        const timeout = setTimeout(() => {
          
            passQuestion();
              
            setCorreta(null);
            setRespondida(null);
            setAlternativaSelecionada("");
            reiniciarTempo();
            
          },1200);
        }
    }, [alternativaSelecionada])
    const [tempoEsgotado, setTempoEsgotado] = useState(false);

   
    
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
            }, 1200);
        }else{
            reiniciarTempo();
        }

    }
    useEffect(()=>{
        if(quantidadeRespondidas === 5){
            
                navigation.navigate("TelaResultado", {quantidadeCertas});
            
           
        }

    }, [quantidadeRespondidas, quantidadeCertas])
  
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