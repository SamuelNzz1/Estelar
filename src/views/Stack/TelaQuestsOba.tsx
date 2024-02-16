import React, { useEffect, useState } from "react"
import Container from "../../components/ComponentesGenericos/Container"
import { View } from "react-native"
import { TopoQuests } from "../../components/TelaPreparatorio/TelaQuests/TopoQuests"
import { Prova23N1, Prova23N2 } from "../../dados/ProvasDados"
import { MiddleQuests } from "../../components/TelaPreparatorio/TelaQuests/MiddleQuests"
import { RadioButton2 } from "../../components/TelaPreparatorio/RadioButton"
type typeQuests = {
    navigation: any,
    route : any,
}

export const TelaQuestsOba: React.FC<typeQuests> = ({navigation, route}) =>{
    const [questAtual, setQuestAtual] = useState<number>(0);
    const [visibleButtons, setVisibleButtons] = useState<boolean>(true);

    const { provaEspecify } = route.params;
    useEffect(() => {
        console.log(provaEspecify);
    }, [provaEspecify])
    
  

    const backQuestion = () =>{
        setQuestAtual(questAtual - 1);
    }
    const passQuestion = () =>{
        if(questAtual < Prova23N1.length){
        setQuestAtual(questAtual + 1);
        }
    }
    const alterVisibilityTrue = () =>{
        setVisibleButtons(true);

    }
    const alterVisibilityFalse = () =>{
        setVisibleButtons(false);

    }

    return (
    <Container 
    color="#171636"
    >
        {provaEspecify === 231 
        
        ?
        <>
        <TopoQuests
        numberQ={Prova23N1[questAtual].numberQ}
        navigation={navigation}
        backQuestion={backQuestion}
        passQuestion = {passQuestion}
        provaQuantidadeQuestoes={Prova23N1.length}
        visibleButton = {visibleButtons}
       />
       <MiddleQuests
        questAtual={questAtual}
        passQuestion = {passQuestion}
        alterVisibilityTrue = {alterVisibilityTrue}
        alterVisibilityFalse = {alterVisibilityFalse}
        prova={Prova23N1}
       />
       </>
       : provaEspecify === 232 ?
       <>
       <TopoQuests
        numberQ={Prova23N2[questAtual].numberQ}
        navigation={navigation}
        backQuestion={backQuestion}
        passQuestion = {passQuestion}
        provaQuantidadeQuestoes={Prova23N2.length}
        visibleButton = {visibleButtons}
       />
       <MiddleQuests
        questAtual={questAtual}
        passQuestion = {passQuestion}
        alterVisibilityTrue = {alterVisibilityTrue}
        alterVisibilityFalse = {alterVisibilityFalse}
        prova={Prova23N2}
       />
       </>
       :
      
       <></>
    }
       

    
    </Container>
    )


}