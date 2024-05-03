import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import image from "../../images/fundoQuestsJornada.png"
import { TopoQuestJornada } from "../../components/TelaQuestsJornada/TopoQuestJornada";
import { Nivel1Terra, Nivel2Marte, Nivel3Jupiter, Nivel4Saturno, Nivel5Urano, Nivel6Netuno } from "../../dados/NivelFase";
import { MidleQuestJornada } from "../../components/TelaQuestsJornada/MidleQuestJornada";
type propsTelaQuestsJornada = {
    navigation: any,
    route: any
}
export const TelaQuestsJornadas: React.FC<propsTelaQuestsJornada> = ({navigation, route}) =>{
    const [questAtual, setQuestAtual] = useState<number>(0);
    const {planet}  = route.params;
    const [backgroundLoaded, setBackgroundLoaded] = useState<boolean>(false);
    const [lifes, setLifes] = useState<number>(3);
    
    const [tempoRestante, setTempoRestante] = useState(60);
    const [pausado, setPausado] = useState<boolean> (false); 
    useEffect(() => {
        const timer : any = setInterval(() => {
            if (tempoRestante > 0 && !pausado) {
              setTempoRestante((prev) => prev - 1);
            } else if (tempoRestante <= 0 ){
              // Lógica quando o tempo se esgota
              clearInterval(timer);
            }
          }, 1000);
          

        return () => clearInterval(timer);
    }, [tempoRestante, pausado]);
   
    const reiniciarTempo = () => {
        setTempoRestante(60);

    }
    const zerarTempo = () => {
        setTempoRestante(0);
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
    const plusLife = () => {
        setLifes(prevState => prevState + 1);
    }
    const minusLife = () => {
        setLifes(prevState => prevState - 1);

    }
    const toggleGame = () => {
        setPausado( prevState => !prevState);

    }

    return (
        
        <ImageBackground
            source={image}
            style = {{flex: 1, }}
    
        >  
       
           { planet === "Terra" ?
                (
                <>
                    <TopoQuestJornada
                    navigation = {navigation}
                    planet = {planet}
                    numberQ={Nivel1Terra[questAtual].numberQ}
                    tempoRestante={tempoRestante}
                    lifes={lifes}
                    />
                    <MidleQuestJornada
                        navigation={navigation}
                        nivel = {Nivel1Terra}
                        numberQ={questAtual}
                        passQuestion={passQuestion}
                        reiniciarTempo={reiniciarTempo}
                        tempoRestante={tempoRestante}
                        zerarTempo={zerarTempo}
                        planet = {planet}
                        plusLife={plusLife}
                        minusLife={minusLife}
                        lifes={lifes}
                        toggleGame={toggleGame}

                    />
                
                </>

                )
                : planet === "Marte" ?
                (
                    <>
                        <TopoQuestJornada
                    navigation = {navigation}
                    planet = {planet}
                    numberQ={Nivel2Marte[questAtual].numberQ}
                    tempoRestante={tempoRestante}
                    lifes={lifes}
                    />
                    <MidleQuestJornada
                        navigation={navigation}
                        nivel = {Nivel2Marte}
                        numberQ={questAtual}
                        passQuestion={passQuestion}
                        reiniciarTempo={reiniciarTempo}
                        tempoRestante={tempoRestante}
                        zerarTempo={zerarTempo}
                        planet = {planet}
                        plusLife={plusLife}
                        minusLife={minusLife}
                        lifes={lifes}
                        toggleGame={toggleGame}
                    />
                    
                    </>
                )
                : planet === "Júpiter" ?

                (
                    <>
                    <TopoQuestJornada
                    navigation = {navigation}
                    planet = {planet}
                    numberQ={Nivel3Jupiter[questAtual].numberQ}
                    tempoRestante={tempoRestante}
                    lifes={lifes}
                    />
                    <MidleQuestJornada
                        navigation={navigation}
                        nivel = {Nivel3Jupiter}
                        numberQ={questAtual}
                        passQuestion={passQuestion}
                        reiniciarTempo={reiniciarTempo}
                        tempoRestante={tempoRestante}
                        zerarTempo={zerarTempo}
                        planet = {planet}
                        plusLife={plusLife}
                        minusLife={minusLife}
                        lifes={lifes}
                        toggleGame={toggleGame}

                    />
                    </>

                )
                : planet === "Saturno" ?

                (
                    <>
                    <TopoQuestJornada
                    navigation = {navigation}
                    planet = {planet}
                    numberQ={Nivel4Saturno[questAtual].numberQ}
                    tempoRestante={tempoRestante}
                    lifes={lifes}
                    />
                    <MidleQuestJornada
                        navigation={navigation}
                        nivel = {Nivel4Saturno}
                        numberQ={questAtual}
                        passQuestion={passQuestion}
                        reiniciarTempo={reiniciarTempo}
                        tempoRestante={tempoRestante}
                        zerarTempo={zerarTempo}
                        planet = {planet}
                        plusLife={plusLife}
                        minusLife={minusLife}
                        lifes={lifes}
                        toggleGame={toggleGame}

                    />
                    </>

                )
                : planet === "Urano" ?

                (
                    <>
                    <TopoQuestJornada
                    navigation = {navigation}
                    planet = {planet}
                    numberQ={Nivel5Urano[questAtual].numberQ}
                    tempoRestante={tempoRestante}
                    lifes={lifes}
                    />
                    <MidleQuestJornada
                        navigation={navigation}
                        nivel = {Nivel5Urano}
                        numberQ={questAtual}
                        passQuestion={passQuestion}
                        reiniciarTempo={reiniciarTempo}
                        tempoRestante={tempoRestante}
                        zerarTempo={zerarTempo}
                        planet = {planet}
                        plusLife={plusLife}
                        minusLife={minusLife}
                        lifes={lifes}
                        toggleGame={toggleGame}

                    />

                    </>

                )
                : 

                (
                    <>
                    <TopoQuestJornada
                    navigation = {navigation}
                    planet = {planet}
                    numberQ={Nivel6Netuno[questAtual].numberQ}
                    tempoRestante={tempoRestante}
                    lifes={lifes}
                    />
                    <MidleQuestJornada
                        navigation={navigation}
                        nivel = {Nivel6Netuno}
                        numberQ={questAtual}
                        passQuestion={passQuestion}
                        reiniciarTempo={reiniciarTempo}
                        tempoRestante={tempoRestante}
                        zerarTempo={zerarTempo}
                        planet = {planet}
                        plusLife={plusLife}
                        minusLife={minusLife}
                        lifes={lifes}
                        toggleGame={toggleGame}

                    />
                    </>

                )


            }
        
        

        </ImageBackground>
        
    )

}