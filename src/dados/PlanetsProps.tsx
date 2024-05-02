import React from "react";
import { jupiter, marte, terra, mercurio } from "../svgs/planetsSvg";
import JupiterIm1 from "../images/JupiterIm1.png";
import JupiterIm2 from "../images/JupiterIm2.png";
import JupiterIm3 from "../images/JupiterIm3.png";

import MarteIm1 from "../images/MarteIm1.png";
import MarteIm2 from "../images/MarteIm2.png";
import MarteIm3 from "../images/MarteIm3.png";

import TerraIm1 from "../images/TerraIm1.png";
import TerraIm2 from "../images/TerraIm2.png";
import TerraIm3 from "../images/TerraIm3.png";

import MercurioIm1 from "../images/MercurioIm1.png";
import MercurioIm2 from "../images/MercurioIm2.png";
import MercurioIm3 from "../images/MercurioIm3.png";

import VenusIm1 from "../images/VenusIm1.png";
import VenusIm2 from "../images/VenusIm2.png";
import VenusIm3 from "../images/VenusIm3.png";

import SaturnoIm1 from "../images/SaturnoIm1.png";
import SaturnoIm2 from "../images/SaturnoIm2.png";
import SaturnoIm3 from "../images/SaturnoIm3.png";

import UranoIm1 from "../images/UranoIm1.png";
import UranoIm2 from "../images/UranoIm2.png";
import UranoIm3 from "../images/UranoIm3.png";

import NetunoIm1 from "../images/NetunoIm1.png";
import NetunoIm2 from "../images/NetunoIm2.png";
import NetunoIm3 from "../images/NetunoIm3.png";


type PlanetsProps = {
    nome: string,
    subtitulo : string,
    descricao: string,
    imagem1?: string,
    imagem2?: string,
    imagem3?: string,
}



export const PlanetsEp: PlanetsProps[] = [
    {
       
        nome: "Júpiter",
        subtitulo: "O Gigante Gasoso.",
        descricao: "Júpiter é o maior planeta do Sistema Solar, com um diâmetro de cerca de 143 mil quilômetros. Sua composição é majoritariamente de hidrogênio e hélio, sem uma superfície sólida definida. Possui uma atmosfera densa e turbulenta, caracterizada por faixas atmosféricas coloridas, tempestades e vórtices, incluindo a Grande Mancha Vermelha. Além disso, Júpiter possui um poderoso campo magnético, cerca de 20 mil vezes mais forte que o da Terra, e um sistema de anéis fracos. ",
        imagem1: JupiterIm1,
        imagem2: JupiterIm2,
        imagem3: JupiterIm3,
    },
    {
       
        nome: "Marte",
        subtitulo: "O planeta vermelho",
        descricao: "Marte, conhecido como o Planeta Vermelho, é o quarto planeta a partir do Sol e tem aproximadamente metade do tamanho da Terra. Sua atmosfera é fina e composta principalmente por dióxido de carbono, com vestígios de nitrogênio e argônio. A superfície marciana apresenta características distintas, incluindo vulcões gigantes, como o Monte Olimpo, e extensões planas chamadas de planícies.  A presença de calotas polares compostas de gelo de água e dióxido de carbono solidificado indica variações sazonais em seu clima.",
        imagem1: MarteIm1,
        imagem2: MarteIm2,
        imagem3: MarteIm3,
    },
    {
    
        nome: "Terra",
        subtitulo: "O planeta água",
        descricao: "A Terra é o terceiro planeta a partir do Sol, com uma superfície coberta por aproximadamente 71% de água e 29% de terra. Possui uma atmosfera composta principalmente por nitrogênio e oxigênio, essencial para sustentar a vida como a conhecemos. Apresenta uma variedade de características físicas, incluindo montanhas, oceanos, rios, desertos e florestas. Seu núcleo é composto por ferro e níquel, gerando um campo magnético que protege o planeta das radiações solares prejudiciais. A Terra é o único corpo celeste conhecido a abrigar vida.",
        imagem1: TerraIm1,
        imagem2: TerraIm2,
        imagem3: TerraIm3,
    },
    {
       
        nome: "Mercúrio",
        subtitulo: "O menor planeta do sistema solar",
        descricao: "Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol, com uma órbita extremamente elíptica. Sua superfície é marcada por crateras, desfiladeiros e planícies vulcânicas resultantes de intensa atividade vulcânica no passado. Possui uma atmosfera muito tênue, composta principalmente por traços de gases como hélio e hidrogênio. Mercúrio não tem luas e possui uma rotação lenta em torno do próprio eixo, resultando em dias extremamente longos e noites muito curtas. Devido à sua proximidade com o Sol, as temperaturas na superfície de Mercúrio podem variar drasticamente, alcançando extremos de calor e frio.",
        imagem1: MercurioIm1,
        imagem2: MercurioIm2,
        imagem3: MercurioIm3,
    },
    {
       
        nome: "Vênus",
        subtitulo: "Gêmeo da terra",
        descricao: "Vênus é um planeta que compõe o sistema solar. Está situado no sistema solar no segundo lugar entre os planetas a partir do sol. O nome do planeta em questão é proveniente da deusa romana Vênus. O planeta Vênus possui grande semelhança com a Terra, ambos são do tipo terrestre, além disso, são semelhantes quanto ao tamanho, massa e composição. Vênus é o planeta de maior proximidade com a Terra, está distante entre 40,2 milhões de quilômetros e 260 milhões de quilômetros, essa variação é oriunda da órbita que os respectivos realizam em torno do sol.",
        imagem1: VenusIm1,
        imagem2: VenusIm2,
        imagem3: VenusIm3,
    },
    {
       
        nome: "Saturno",
        subtitulo: "O senhor dos anéis",
        descricao: "Saturno é o sexto planeta a partir do Sol e é o segundo maior planeta do Sistema Solar, ficando atrás apenas de Júpiter. Suas dimensões são 9 vezes maiores que as da Terra. Devido à sua composição, é conhecido também como gigante gasoso e destaca-se pela beleza do sistema de anéis que o circunda, os quais são formados a partir de fragmentos de rocha e gelo. Saturno tornou-se o planeta com o maior número de luas do Sistema Solar, em 2018, contando com 82 no total. Por meio das missões de exploração, como a Cassini, descobriu-se que Titã, o maior desses satélites naturais, tem características comparáveis às da Terra primitiva.",
        imagem1: SaturnoIm1,
        imagem2: SaturnoIm2,
        imagem3: SaturnoIm3,
    },
    {
       
        nome: "Urano",
        subtitulo: "Gigante de gelo",
        descricao: "O planeta Urano é o terceiro maior do Sistema Solar e está posicionado na sétima órbita a partir do Sol. Formado principalmente por gases e fluidos, Urano não possui uma superfície sólida como a Terra. Sua estrutura é composta, ainda, por sistemas de anéis que orbitam ao seu redor, os quais são menos brilhantes do que os de outros planetas, como Saturno. Ao todo, Urano possui 27 luas conhecidas. Apenas uma sonda espacial visitou o planeta, sendo a maior parte das descobertas ao seu respeito feita com o auxílio de telescópios.",
        imagem1: UranoIm1,
        imagem2: UranoIm2,
        imagem3: UranoIm3,
    },
    {
       
        nome: "Netuno",
        subtitulo: "Planeta azul",
        descricao: "Netuno é um planeta pertencente ao Sistema Solar. Trata-se do oitavo mais distante do Sol, o que confere a ele temperaturas muito baixas, em torno de -200 °C. O planeta Netuno é classificado como um gigante de gelo em função de sua composição, que é feita por gases como hélio, metano, hidrogênio e amônia, e da ausência de uma superfície sólida. Netuno foi descoberto em 1846 e, desde então, foi muito estudado por astrônomos de todo o mundo. Apesar disso, é ainda um planeta pouco explorado.",
        imagem1: NetunoIm1,
        imagem2: NetunoIm2,
        imagem3: NetunoIm3,
    },


];
