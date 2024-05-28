import React from "react"

import image from "../../images/fundoQuestsJornada.png"
import { podio } from "../../svgs/ranking"
import useUserRanking from "../../components/Ranking/DadosUsu"
//components import

import { ActivityIndicator, ImageBackground, View } from "react-native"
import { TopRanking } from "../../components/Ranking/TopRanking"
import { SvgXml } from "react-native-svg"
import { OutputRanking } from "../../components/Ranking/OutputRanking"
import { ProfileRankingM } from "../../components/Ranking/ProfileRankingM"
import TextEstelar from "../../components/ComponentesGenericos/CustomText"

type RankingViewProps = {
  navigation : any

}

export const RankingView : React.FC<RankingViewProps> = ({navigation}) => {


  const ranking = useUserRanking();
  
  if (ranking.length < 1) {
    // Render some loading or fallback UI
    return (
      <ImageBackground source={image} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="white "/>
      </ImageBackground>
    );
  }
  
  return (
    <ImageBackground
    source={image}
    style = {{flex: 1,}}
    >
      <TopRanking 
        navigation={navigation}
      />   
      <View style = {{ width: 300, height: 300 , justifyContent: "center", alignSelf: "center", alignItems: "center" }}>
        <SvgXml
          xml={podio}
          
        />
        {ranking[1] &&
         <ProfileRankingM
          style={{ position: "absolute", bottom: 2, left: -20 }}
          name={ranking[1].name}
          level={ranking[1].nivelJ}
          profileImage={ranking[1].profileImage}
          stars={ranking[1].stars}
        />
        }
        {ranking[0] &&
        <ProfileRankingM
          style={{ position: "absolute", top: 2, alignSelf: "center" }}
          name={ranking[0].name}
          level={ranking[0].nivelJ}
          profileImage={ranking[0].profileImage}
          stars={ranking[0].stars}
        />
        }
        {ranking[2] &&
        <ProfileRankingM
          style={{ position: "absolute", bottom: 2, right: -20 }}
          name={ranking[2].name}
          level={ranking[2].nivelJ}
          profileImage={ranking[2].profileImage}
          stars={ranking[2].stars}
        />
        }
        

     </View>
     <OutputRanking
      navigation= {navigation}
     />


  </ImageBackground>
)
}