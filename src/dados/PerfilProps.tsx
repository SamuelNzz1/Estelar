import React from "react";
import { Svg } from "react-native-svg";

import star from "../images/star.png";
import planet from "../images/planet.png";
import oba from "../images/ObaIm.png";
export const imageMapping : any = {
  star: star,
  planet: planet,
  oba: oba, 
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
    titulo: "Quantidade de estrelas",
    status: "Total: ",
    imageStatus: 'star',
    statusNumber: 0,
    cor: "#F9D040"


   },
    {
     titulo: "Questões Resolvidas",
     status: "Total: ",
     imageStatus: 'oba',
     statusNumber: 0,
     cor: "#906AAF"


    },
    {
        titulo: "Jornada Astronômica",
        status: "Nível: ",
        imageStatus: 'planet',
        statusNumber: 0,
        cor: "#E28D0E"  
    },
   
  ];
