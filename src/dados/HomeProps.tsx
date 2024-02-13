import React from "react";
import { Svg } from "react-native-svg";
import { goViagem, goForum, goPrepOBA } from "../svgs/botoesHome";
import ViagemAstroImage from '../images/ViagemAstro.png';
import PreparatorioImage from '../images/Preparatorio.png';
import ForumImage from '../images/Forum.png';

export const imageMapping : any = {
  ViagemAstro: ViagemAstroImage,
  Preparatorio: PreparatorioImage,
  Forum: ForumImage,
};



type AttsProps = {
    textoprincipal: string;
    imagemFundo: string;
    botao: string;
    location: string
  };
export const dados: AttsProps[] = [
    {
      textoprincipal: 'Viagem astronômica',
      imagemFundo: 'ViagemAstro',
      botao: goViagem,
      location: "TelaViagem"
    },
    {
      textoprincipal: 'Preparatório para OBA',
      imagemFundo: 'Preparatorio',
      botao: goPrepOBA,
      location: "TelaPreparatorio"
    },
    {
        textoprincipal: 'Forúm',
        imagemFundo: 'Forum',
        botao: goForum,
        location: "TelaForum"
      },
  ];
