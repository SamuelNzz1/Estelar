import React from "react"
import { Image, ScrollView, StyleSheet, View } from "react-native"
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
            <ScrollView
            showsVerticalScrollIndicator = {false}
            style = {[styles.scroll ]}
            contentContainerStyle = {{justifyContent:"center", alignItems:"center"}}
            >
                <TextEstelar style = {styles.textEnun}>
                    {enunciado}
                </TextEstelar>
                {imagem && 
                 
                        <Image
                            source={imagem}
                            style={styles.imagem}
                        />

                   
                }
            </ScrollView>
               

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
       
    },
    scroll:{
     width: "100%",
        height: "100%",
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
        fontSize: RF(16),
        alignSelf:"center"

    },
    imagemCard:{
        width: "100%",
        height: "80%",
        borderRadius: 21,
        overflow: "hidden",
      
        
    },
    imagem: {
        width: 250,
        height:250,
        resizeMode: "contain", 
        
        
    }

})