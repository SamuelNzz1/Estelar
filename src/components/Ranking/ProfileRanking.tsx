import React  from  "react"
import { Image, StyleSheet, View } from "react-native"
import TextEstelar from "../ComponentesGenericos/CustomText"
import { RFValue as RF } from "react-native-responsive-fontsize"
import { SvgXml } from "react-native-svg"
import { starPoint, starPointM, starPointR } from "../../svgs/starPoint"

import noImagem from "../../images/Perfil.png";
import Avatar1 from "../../images/Avatar1.png";
import Avatar2 from "../../images/Avatar2.png";
import Avatar3 from "../../images/Avatar3.png";



interface ProfileRankingProps {
  name: string;
  level: number;
  stars: number;
  profileImage: string;
  position: number
}

export const ProfileRanking : React.FC<ProfileRankingProps> = ({name, level, stars, profileImage, position}) => {

    
    return (
    <View
      style = {styles.ProfileRanking}
    >
      <View
        style = {styles.viewsNumber}
      >
        <TextEstelar
          style = {{color: "#F8BC3B", fontSize: RF(40)}}
        >
            {position + 1}
        </TextEstelar>
      </View>
      <View
      style = {styles.viewsProfile}
      >
        <Image
          source={ profileImage ==  "../../images/Perfil.png" ? noImagem : profileImage == "../../images/Avatar1.png" ? Avatar1 : profileImage == "../../images/Avatar2.png" ? Avatar2 : profileImage == "../../images/Avatar3.png" && Avatar3  }
          style = {{width: 65, height:65, alignSelf: "center"}}
        />

        <View
          style = {styles.infoProfile}
        >
            <TextEstelar
           style = {{color: "white", fontSize: RF(16)}}
        >
          {name}
        </TextEstelar>
        <TextEstelar
           style = {{color: "white", fontSize: RF(12)}}
        >
          level {level+1}
        </TextEstelar>
          
        </View>
      </View>
      <View
         style = {styles.viewsStar}
      >
        <SvgXml xml = {starPointR}/>
        <TextEstelar
           style = {{color: "white", fontSize: RF(20)}}
        >
          {stars}
        </TextEstelar>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ProfileRanking: {
    width: "90%",
    height: 70,
    backgroundColor: "#212758",
    borderRadius: 20,
    flexDirection: "row",

  },
  viewsNumber: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderRightWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  }, 
  viewsStar: {
    width: "25%",
    height: "100%",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    
    justifyContent: "center", 
    alignItems :"center"
  }, 
  viewsProfile: {
    width: "55%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 10,
    gap: 10
  },
  infoProfile: {
   alignSelf: 'center'
    
  }
})