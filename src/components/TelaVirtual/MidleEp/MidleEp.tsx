import React from "react";
import { Animated, FlatList, View } from "react-native";
import { CardPlanet } from "./cardPlanets/CardPlanet";
import { dadoPlanets } from "../../../dados/EpProps";

type PropsMidleEp = {
    navigation: any,
    nameProd: string,
}
export const MidleEp: React.FC<PropsMidleEp> = ({navigation, nameProd}) => {
    const filteredData = dadoPlanets.filter(item =>
        item.nome.toLowerCase().includes(nameProd.toLowerCase())
      );
    return (
    <View
        style = {{ flex: 1, paddingVertical: 50, alignItems: "center", gap: 150}}
    >
     
        
     {nameProd === '' ? (
  dadoPlanets.map(item => (
    <CardPlanet
      navigation={navigation}
      name={item.nome}
      subtitulo={item.subtitulo}
      number={item.number}
      svg={item.svg}
    />
  ))
) : (
  filteredData.map(item => (
    <CardPlanet
      navigation={navigation}
      name={item.nome}
      subtitulo={item.subtitulo}
      number={item.number}
      svg={item.svg}
    />
  ))
)}

    </View>)

}

interface FadeInViewProps {
    children: React.ReactNode;
  }
  
  interface FadeInViewState {
    fadeAnim: Animated.Value;
  }
  
  class FadeInView extends React.Component<FadeInViewProps, FadeInViewState> {
    constructor(props: FadeInViewProps) {
      super(props);
      this.state = {
        fadeAnim: new Animated.Value(0), // Inicializa a opacidade como 0
      };
    }
  
    componentDidMount() {
      // Anima a opacidade para 1 quando o componente é montado
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          duration: 1000, // Duração da animação em milissegundos
          useNativeDriver: true,
        }
      ).start();
    }
  
    render() {
      return (
        <Animated.View
          style={{
            opacity: this.state.fadeAnim, // Aplica a opacidade animada
          }}
        >
          {this.props.children}
        </Animated.View>
      );
    }
  }