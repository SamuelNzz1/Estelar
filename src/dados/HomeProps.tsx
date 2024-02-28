import React from "react";
import { Svg } from "react-native-svg";
import { goViagem, goForum, goPrepOBA } from "../svgs/botoesHome";
import ViagemAstroImage from '../images/ViagemAstro.png';
import PreparatorioImage from '../images/Preparatorio.png';
import Ep from "../images/Ep.png";
export const imageMapping : any = {
  ViagemAstro: ViagemAstroImage,
  Preparatorio: PreparatorioImage,
  Ep: Ep,
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
      textoprincipal: 'Espaço Virtual',
      imagemFundo: 'Ep',
      botao: goForum,
      location: "TelaEp"
    },
    

  ];
