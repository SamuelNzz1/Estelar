import React from "react";
import { Svg } from "react-native-svg";

import star from "../images/star.png";
import planet from "../images/planet.png";

export const imageMapping : any = {
  star: star,
  planet: planet,
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
     imageStatus: 'star',
     statusNumber: 0,
     cor: "#F26EB1"


    },
    {
        titulo: "Jornada Astronômica",
        status: "Nível: ",
        imageStatus: 'planet',
        statusNumber: 0,
        cor: "#E28D0E"  
    },
   
  ];
