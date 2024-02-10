import React from "react";
import { Svg } from "react-native-svg";



export const imageMapping : any = {
  
};


type statsProps = {
    titulo: string;
    imageStatus: string;
    status: string;
    statusNumber: number;
    cor: string;
   
  };
export const dadosPerfil: statsProps[] = [
    {
     titulo: "Questões Resolvidas",
     status: "Total: ",
     imageStatus: "retang",
     statusNumber: 0,
     cor: "#5664F7"


    },
    {
        titulo: "Jornada Astronômica",
        status: "Nível: ",
        imageStatus: "retang",
        statusNumber: 0,
        cor: "#E28D0E"  
    },
   
  ];
