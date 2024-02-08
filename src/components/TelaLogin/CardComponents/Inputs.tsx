import React from "react";
import { View, StyleSheet} from "react-native";
import InputEst from "../../ComponentesGenericos/InputEstelar";

    
export default function Inputs(){
    return(
        <View style = {styles.inputs}>
            <InputEst 
            placeholder = "E-mail"
            color = "white"
            colorBack="#14214F"

            />
            <InputEst
            placeholder = "Senha"
            color = "white"
            colorBack="#14214F"
            boolean={true}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    inputs:{
        gap:40,
        paddingTop: 40
       
    }

})