import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TelaWelcome from "../views/Stack/TelaWelcome";
import TelaLogin from "../views/Stack/TelaLogin";
import TelaCadastro from "../views/Stack/TelaCadastro";
import TelaForgotSucess from "../views/Stack/TelaForgotSucess";
import  TelaConfirmEmailForgot from "../views/Stack/TelaConfirmEmailForgot";
import Tabs from "./tab.routes";
import EmBreve from "../views/Stack/EmBreve";
import Home from "../views/Tab/Forum";
import TelaEditPerfil from "../views/Stack/TelaEditPerfil";
import { TelaPreparatorio } from "../views/Stack/TelaPreparatorio";

const Stack = createNativeStackNavigator();


export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen 
                name="Initial"
                component={TelaWelcome}
            />
            <Stack.Screen 
                name="Login"
                component={TelaLogin}
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
            name = "TelaPreparatorio"
            component = {TelaPreparatorio}
            />
            
            

        </Stack.Navigator>
    )

}