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
        subtitulo: "O planeta vermelho",
        descricao: "A Terra é o terceiro planeta a partir do Sol, com uma superfície coberta por aproximadamente 71% de água e 29% de terra. Possui uma atmosfera composta principalmente por nitrogênio e oxigênio, essencial para sustentar a vida como a conhecemos. Apresenta uma variedade de características físicas, incluindo montanhas, oceanos, rios, desertos e florestas. Seu núcleo é composto por ferro e níquel, gerando um campo magnético que protege o planeta das radiações solares prejudiciais. A Terra é o único corpo celeste conhecido a abrigar vida.",
        imagem1: TerraIm1,
        imagem2: TerraIm2,
        imagem3: TerraIm3,
    },
    {
       
        nome: "Mercúrio",
        subtitulo: "O planeta vermelho",
        descricao: "Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol, com uma órbita extremamente elíptica. Sua superfície é marcada por crateras, desfiladeiros e planícies vulcânicas resultantes de intensa atividade vulcânica no passado. Possui uma atmosfera muito tênue, composta principalmente por traços de gases como hélio e hidrogênio. Mercúrio não tem luas e possui uma rotação lenta em torno do próprio eixo, resultando em dias extremamente longos e noites muito curtas. Devido à sua proximidade com o Sol, as temperaturas na superfície de Mercúrio podem variar drasticamente, alcançando extremos de calor e frio.",
        imagem1: MercurioIm1,
        imagem2: MercurioIm2,
        imagem3: MercurioIm3,
    },


];
