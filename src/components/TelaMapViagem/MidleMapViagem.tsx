import React, { useState } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
//import componentes
import { ButtonPlanet } from "./MiniComponents/ButtonPlanet"


//import components genericos

import { SvgXml } from "react-native-svg"
import TextEstelar from "../ComponentesGenericos/CustomText"

//import imagem, svgs




type propsMidleViagem = {
    navigation: any,
    
}

export const MidleMapViagem: React.FC<propsMidleViagem> = ({navigation}) =>{
    
    const [completFase1, setCompletFase1] = useState<boolean>(false);
    const [completFase2, setCompletFase2] = useState<boolean>(false);
    const [completFase3, setCompletFase3] = useState<boolean>(false);
    const [completFase4, setCompletFase4] = useState<boolean>(false);
    const [completFase5, setCompletFase5] = useState<boolean>(false);
    const [completFase6, setCompletFase6] = useState<boolean>(false);

    
    
    const [currentFase1, setCurrentFase1] = useState<boolean>(true);
    const [currentFase2, setCurrentFase2] = useState<boolean>(false);
    const [currentFase3, setCurrentFase3] = useState<boolean>(false);
    const [currentFase4, setCurrentFase4] = useState<boolean>(false);
    const [currentFase5, setCurrentFase5] = useState<boolean>(false);
    const [currentFase6, setCurrentFase6] = useState<boolean>(false);

    const goFase = (planet : string) =>{
        navigation.navigate("TelaQuestsJornada", {planet} );

    }


    return (
    <View style = {styles.planets}>

        <ButtonPlanet  planet="Terra" goFase={goFase}  style={styles.planetButton1} navigation={navigation} numberFase={1} current = {currentFase1}/>
        
        
        {completFase1 ? 
        <ButtonPlanet planet="Marte" style={styles.planetButton2} navigation={navigation} numberFase={2} current = {currentFase2}/>
        :
        <ButtonPlanet planet="Marte" disabled = {true} style={styles.planetButton2} navigation={navigation} numberFase={2} current = {currentFase2}/>
        }

        {(completFase1 && completFase2) ?     
        <ButtonPlanet planet="Jupter" style={styles.planetButton3} navigation={navigation} numberFase={3} current = {currentFase3}/>
        :
        <ButtonPlanet planet="Jupter" disabled = {true} style={styles.planetButton3} navigation={navigation} numberFase={3} current = {currentFase3}/>
        }

        { (completFase1 && completFase2 && completFase3) ?     
        <ButtonPlanet planet="Saturno" style={styles.planetButton4} navigation={navigation} numberFase={4} current = {currentFase4}/>
        :
        <ButtonPlanet planet="Saturno" disabled = {true} style={styles.planetButton4} navigation={navigation} numberFase={4} current = {currentFase4}/>
        }

        { (completFase1 && completFase2 && completFase3 && completFase4) ?     
        <ButtonPlanet planet="Urano" style={styles.planetButton5} navigation={navigation} numberFase={5} current = {currentFase5}/>
        :
        <ButtonPlanet planet="Urano" disabled = {true} style={styles.planetButton5} navigation={navigation} numberFase={5} current = {currentFase5}/>
        }

        { (completFase1 && completFase2 && completFase3 && completFase4 && completFase5) ?     
       <ButtonPlanet planet="Netuno" style={styles.planetButton6} navigation={navigation} numberFase={6} current = {currentFase6}/>
        :
        <ButtonPlanet planet="Netuno" disabled = {true} style={styles.planetButton6} navigation={navigation} numberFase={6} current = {currentFase6}/>
        }

        

        

        

        
        

    </View>
    )

}
const styles = StyleSheet.create({
    planets:{
        height: 1600,
        width: "100%",   
    },
    planetButton1:{
        position: "absolute",
        bottom: 115,
        left: 10
    },
    planetButton2:{
        position: "absolute",
        bottom: 330,
        right: 20
    },
    planetButton3:{
        position: "absolute",
        bottom: 560,
        left: 1
    },
    planetButton4:{
        position: "absolute",
        bottom: 830,
        right: 35
    },
    planetButton5:{
        position: "absolute",
        bottom: 1120,
        left: 1
    },
    planetButton6:{
        position: "absolute",
        bottom: 1350,
        right: 10
    }
   

})