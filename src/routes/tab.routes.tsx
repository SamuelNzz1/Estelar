import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SvgXml } from "react-native-svg";
import { HomeSvg } from "../svgs/homeSvg";
import { perfilSvg, perfilSvgSelected } from "../svgs/perfilSvg";
import Perfil from "../views/Tab/Perfil";

import Home from "../views/Tab/Home";

import { useRoute } from "@react-navigation/native";

import { homeSvgSelected } from "../svgs/homeSvg";

const Tab : any = createBottomTabNavigator();

export default function Tabs()  {
  let routeName: null;
  const route : any = useRoute();
  if(route.name === "Home"){
    
  }
  else if(route.name === "Perfil"){

  }

  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false, 
      tabBarStyle: {
        backgroundColor:  '#272650',
        height: "15%",
        borderTopColor: "transparent"
      },
    }}>

<Tab.Screen 
  name="Home" 
  component={Home}
  options={({ route }: any) => ({
    tabBarShowLabel: false,
    tabBarIcon: ({ focused } : any) => (
      <SvgXml xml={focused ? homeSvgSelected : HomeSvg} />
    ),
  })}
/>
     
    

<Tab.Screen 
      name="Perfil" 
      component={Perfil}
      options={({ route } : any) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }: any) => (
          <SvgXml xml={focused ? perfilSvgSelected : perfilSvg} />
        ),
      })}
      />
     
    </Tab.Navigator>
  );
};