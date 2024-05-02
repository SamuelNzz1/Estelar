import React from "react";
import { jupiter, marte, terra, mercurio, venus, saturno, urano, netuno } from "../svgs/planetsSvg";
type PlanetsProps = {
    svg: string,
    nome: string,
    subtitulo: string,
    number: number,

}



export const dadoPlanets: PlanetsProps[] = [
    {
        svg: jupiter,
        nome: "Júpiter",
        subtitulo: "Júpiter é o quinto maior planeta do sistema solar",
        number: 1

    },
    {
        svg: marte,
        nome: "Marte",
        subtitulo: "Marte é formado por diversos vulcões.",
        number: 2

    },
    {
        svg: terra,
        nome: "Terra",
        subtitulo: "Terceiro planeta rochoso a partir do sol.",
        number: 3

    },
    {
        svg: mercurio,
        nome: "Mercúrio",
        subtitulo: "É o planeta mais próximo do sol.",
        number: 4

    },
    {
        svg: venus,
        nome: "Vênus",
        subtitulo: "Vênus tem o dia mais longo que o ano.",
        number: 5

    },
    {
        svg: saturno,
        nome: "Saturno",
        subtitulo: "Saturno é o sexto planeta a partir do Sol ",
        number: 6

    },
    {
        svg: urano,
        nome: "Urano",
        subtitulo: "Urano é o sétimo planeta a partir do Sol.",
        number: 7

    },
    {
        svg: netuno,
        nome: "Netuno",
        subtitulo: "Netuno possui um tamanho ligeiramente menor que o de Urano",
        number: 8

    },


];
