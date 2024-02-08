import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { miniLogo } from "../svgs/welcomeTela/minilogoSvg";
import Forum from "../views/Tab/Forum";
import { SvgXml } from "react-native-svg";
import { HomeSvg } from "../svgs/homeSvg";
import { perfilSvg, perfilSvgSelected } from "../svgs/perfilSvg";
import Perfil from "../views/Tab/Perfil";

import Home from "../views/Tab/Home";

import { useRoute } from "@react-navigation/native";

import { homeSvgSelected } from "../svgs/homeSvg";

const Tab = createBottomTabNavigator();

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
      name="Forum" 
      component={Home}
      listeners={({ navigation, route }: any) => ({
        tabPress: (e : any) => {
       
          e.preventDefault();
         
          
        },
      })}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({size} : any) => 
        <SvgXml xml={miniLogo} 
          width={size+40}
          height={size+40}
          style ={{marginBottom: 35}}
        
        />,
      }}
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