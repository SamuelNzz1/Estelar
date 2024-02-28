import React, { useEffect } from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TelaWelcome from "../views/Stack/TelaWelcome";
import TelaLogin from "../views/Stack/TelaLogin";
import TelaCadastro from "../views/Stack/TelaCadastro";
import TelaForgotSucess from "../views/Stack/TelaForgotSucess";
import  TelaConfirmEmailForgot from "../views/Stack/TelaConfirmEmailForgot";
import Tabs from "./tab.routes";
import EmBreve from "../views/Stack/EmBreve";
import Home from "../views/Tab/Home";
import TelaEditPerfil from "../views/Stack/TelaEditPerfil";
import { TelaPreparatorio } from "../views/Stack/TelaPreparatorio";
import { TelaQuestsOba } from "../views/Stack/TelaQuestsOba";
import { TelaViagemAstro } from "../views/Stack/TelaViagemAstro";
const Stack = createNativeStackNavigator();
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/conect";

export default function StackRoutes() {
  const navigation : any = useNavigation();

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const userToken = await AsyncStorage.getItem('@estelar:usuarioLogadoo');
      
      if (userToken) {
        // Se existirem dados salvos, realizar o parse do JSON
        const storedData = JSON.parse(userToken);
      
        // Agora, você pode acessar os valores do objeto
        const email = storedData.email;
        const senha = storedData.senha;

        await signInWithEmailAndPassword(auth, email, senha).
        then(()=> navigation.navigate('HomeTab'));
       
    }
      
    };

    checkIfLoggedIn();
  }, [navigation]);
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen 
                name="Initial"
                component={TelaWelcome}
            />
            <Stack.Screen 
                name="Login"
                component={TelaLogin}
                options={{
      
        }}
            />
            <Stack.Screen 
                name="Cadastro"
                component={TelaCadastro}
            />
             <Stack.Screen 
                name="ForgotEmail"
                component={TelaConfirmEmailForgot}
            />
             <Stack.Screen 
                name="ForgotSucess"
                component={TelaForgotSucess}
            />
            <Stack.Screen
            name = "HomeTab"
            component={Tabs}/>

            <Stack.Screen
            name = "EmBreve"
            component={EmBreve}/>

            <Stack.Screen
            name = "EditPerfil"
            component = {TelaEditPerfil}
            />
            <Stack.Screen
            name = "TelaViagem"
            component = {TelaViagemAstro}
            />
            
            
            <Stack.Screen
            name = "TelaPreparatorio"
            component = {TelaPreparatorio}
            />
            
             <Stack.Screen
            name = "TelaQuestsOba"
            component = {TelaQuestsOba}
            />
            
            

        </Stack.Navigator>
    )

}