import React from "react"
import { Image, StyleSheet, View } from "react-native"
import TextEstelar from "../../ComponentesGenericos/CustomText"
import { RFValue as RF } from "react-native-responsive-fontsize"
type propsCard = {
    enunciado?: string,
    imagem?: any

}

export const CardEnum: React.FC<propsCard> = ({enunciado, imagem}) => {

        return (
        <View
            style = {styles.cardEnum}
        >
            <View
             style = {styles.enum}
            >
                <TextEstelar style = {styles.textEnun}>
                    {enunciado}
                </TextEstelar>
                {imagem && 
                    <View
                    style = {styles.imagemCard}
                    >
                        <Image
                            source={imagem}
                            style={styles.imagem}
                        />

                    </View>
                }
               

            </View>
            <View
             style = {styles.sombraEnum}
            >

            </View>
        
        </View>)
}

const styles = StyleSheet.create({
    cardEnum:{
        width: "90%",
        height: "40%",
        borderRadius: 24,
        
    },
    enum: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: 24,
        alignItems:"center",
        justifyContent:"center",
        padding: 15
    },
    sombraEnum: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FFCC70",
        borderRadius: 24,
        position:"absolute",
        right: -12,
        bottom: -10,
        zIndex: -1

    },
    textEnun: {
        color: "#2C2C2C",
        fontSize: RF(18),

    },
    imagemCard:{
        width: "100%",
        height: "70%",
        borderRadius: 21,
        overflow: "hidden",
      
        
    },
    imagem: {
        width: "100%",
        height:"100%",
        resizeMode: "contain", 
        
    }

})