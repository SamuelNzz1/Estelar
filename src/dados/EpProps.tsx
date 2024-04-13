import React from "react";
import { jupiter, marte, terra, mercurio } from "../svgs/planetsSvg";
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


];
