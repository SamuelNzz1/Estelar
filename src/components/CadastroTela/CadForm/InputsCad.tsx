import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import InputEst from "../../ComponentesGenericos/InputEstelar";
import { useRoute } from '@react-navigation/native';
type InputsCad ={
    name: string,
    senha: string, 
    email: string,
    onChangeText:(text: string, type: string) => void;
    
}
export default function InputsCad({name, senha, email, onChangeText}: InputsCad){
    const windowHeight = Dimensions.get("window").height;
    const windowWidth = Dimensions.get("window").width;
    const route = useRoute();
    const rotaAtual = route.name;
    return(
<>
        {rotaAtual == 'Login'  ?  
        <View style = {styles.inputs2}>
       
        <InputEst 
        placeholder = "E-mail"
        color = "white"
        colorBack="#25356C"
        autoCapitalize="none"
        keyboardType="email-address"
        value = {email}
        onChangeText={(atributo) => onChangeText(atributo, "e-mail")}
        />
         <InputEst
        placeholder = "Senha"
        color = "white"
        colorBack="#25356C"
        boolean={true}
        value = {senha}
        onChangeText={(atributo) => onChangeText(atributo, "senha")}
        />
     
    </View> : <View style = {styles.inputs}>
        <InputEst 
        placeholder = "Nome"
        color = "white"
        colorBack="#25356C"
        value = {name}
        onChangeText={(atributo) => onChangeText(atributo, "nome")}
        
        />
        <InputEst 
        placeholder = "E-mail"
        color = "white"
        colorBack="#25356C"
        autoCapitalize="none"
        keyboardType="email-address"
        value = {email}
        onChangeText={(atributo) => onChangeText(atributo, "e-mail")}

        />
        <InputEst
        placeholder = "Senha"
        color = "white"
        colorBack="#25356C"
        boolean={true}
        value = {senha}
        onChangeText={(atributo) => onChangeText(atributo, "senha")}
        />
    </View> }
    </>
    )

}

const styles = StyleSheet.create({
    inputs:{
        gap:30,
        marginBottom:25
       
    }, inputs2:{
        marginTop: "10%",
        gap:30,
        marginBottom:15
       
    }

})