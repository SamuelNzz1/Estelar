import React from "react";
import { View, StyleSheet} from "react-native";
import InputEst from "../../ComponentesGenericos/InputEstelar";
import { useRoute } from '@react-navigation/native';
type InputsCad ={
    name: string,
    senha: string, 
    email: string,
    confirmarsenha: string,
    onChangeText:(text: string, type: string) => void,
    boolean: boolean,
    error?: boolean,
    
}
export default function InputsCad({name, senha, email, confirmarsenha, onChangeText, boolean, error}: InputsCad){
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
        error = {error}
        />

       
         <InputEst
        placeholder = "Senha"
        color = "white"
        colorBack="#25356C"
        boolean={boolean}
        value = {senha}
        onChangeText={(atributo) => onChangeText(atributo, "senha")}
        error = {error}
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
        boolean={boolean}
        value = {senha}
        onChangeText={(atributo) => onChangeText(atributo, "senha")}
        />

<InputEst
        placeholder = "Confirmar senha"
        color = "white"
        colorBack="#25356C"
        boolean={boolean}
        value = {confirmarsenha}
        onChangeText={(atributo) => onChangeText(atributo, "confirmarsenha")}
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
       
    },
    visibility: {
        position:"absolute",
        right: 10,
        bottom:15
    },
    inputWithVisibility:{


    }

})