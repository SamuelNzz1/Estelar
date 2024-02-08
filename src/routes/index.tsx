import {NavigationContainer} from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import Tabs from "./tab.routes";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function Routes(){
  
 return(
    <NavigationContainer>
       <StackRoutes></StackRoutes>

    </NavigationContainer>
 ) 

}