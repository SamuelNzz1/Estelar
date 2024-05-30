import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import { arrowBackPrep } from "../../svgs/arrowBackPrep";
import { ImageBackground, StyleSheet, TouchableOpacity} from "react-native";
import prepFundo from "../../images/prepFundo.png";
import { CardPrep } from "../../components/TelaPreparatorio/CardPrep";
    

    type prep = {
        navigation: any,


    }

 export const TelaPreparatorio: React.FC <prep> = ({navigation}) => {
    const [backroundLoaded, setBackgroundLoaded] = useState <boolean> (false); 



    const handleBackgroundLoad = () => {
        setBackgroundLoaded(true);

    }

    const goBackk = () =>{
        navigation.goBack();

    }


    return(
        <ImageBackground
            source={prepFundo}
            style = {styles.fundoPrep}
            onLoad={handleBackgroundLoad}
        >   

        {backroundLoaded 
        
        &&
        (
            <>
                <TouchableOpacity onPress={goBackk} style = {styles.prepBackArrow}>
                    <SvgXml
                        xml={arrowBackPrep}
                    />
                </TouchableOpacity>
                <CardPrep navigation={navigation}/>

                
            
            </>  
                
            
        )
        
        
        }

        

        </ImageBackground>
    ) 

}
const styles = StyleSheet.create({
    fundoPrep:{
        flex: 1

    },
    prepBackArrow:{
        position: "absolute",
        top: "3%",
        right: "85%"
    }

})