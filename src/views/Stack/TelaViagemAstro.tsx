import React, { useState } from "react";

//import components

import Container from "../../components/ComponentesGenericos/Container";
import { TopMapViagem } from "../../components/TelaMapViagem/TopMapViagem";
import { BottomMapViagem } from "../../components/TelaMapViagem/BottomMapViagem";
import { MidleMapViagem } from "../../components/TelaMapViagem/MidleMapViagem";

//import componentsGenericos

import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import mapViagem from "../../images/mapViagem.png";

type propsViagem = {
    navigation: any

}

export const TelaViagemAstro: React.FC<propsViagem> = ({navigation}: propsViagem) =>{
    
    const [backroundLoaded, setBackgroundLoaded] = useState <boolean> (false); 


    const handleBackgroundLoad = () => {
        setBackgroundLoaded(true);

    }



    return (
    <Container
        color="#171636"
    >
      
             
                  <>
                      <TopMapViagem
                        navigation={navigation}
                        />

                        <ScrollView
                            style = {styles.midleViagemMap}
                            showsVerticalScrollIndicator ={false}
                        >

                                <ImageBackground
                                    source={mapViagem}
                                    style={styles.mapViagem}
                                    onLoad={handleBackgroundLoad}
                                >
                                        {backroundLoaded &&

                                            <MidleMapViagem
                                            navigation={navigation}
                                            ></MidleMapViagem>

                                        }



                                </ImageBackground>
                                   

                        </ScrollView>
                        <BottomMapViagem/>

                  
                  </>
             
             
        
                
       
       

    </Container>
    
    )

}

const styles = StyleSheet.create({
    midleViagemMap:{
        flex: 1,
        
    }
    ,mapViagem:{
        width: "100%",
        height: 1600,
        resizeMode: "cover",
        justifyContent: "center",
       
        
    }

})