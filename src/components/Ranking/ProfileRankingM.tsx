import React  from  "react"
import { Image, StyleSheet, TextStyle, View } from "react-native"
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
  style?: TextStyle | TextStyle[];
 
}

export const ProfileRankingM : React.FC<ProfileRankingProps> = ({name, level, stars, profileImage, style}) => {

    
    return (
    <View
      style = {[styles.ProfileRanking,  style  ]}
    >
      <View
         style = {styles.viewsStar}
      >
        <SvgXml xml = {starPointM}/>
        <TextEstelar
           style = {{color: "white", fontSize: RF(12)}}
        >
          {stars}
        </TextEstelar>
      </View>
      <View
      style = {styles.viewsProfile}
      >
        <Image
          source={ profileImage ==  "../../images/Perfil.png" ? noImagem : profileImage == "../../images/Avatar1.png" ? Avatar1 : profileImage == "../../images/Avatar2.png" ? Avatar2 : profileImage == "../../images/Avatar3.png" && Avatar3  }
          style = {{width: 30, height:30, alignSelf: "center"}}
        />

        <View
          style = {styles.infoProfile}
        >
            <TextEstelar
           style = {{color: "white", fontSize: RF(13)}}
        >
          {name}
        </TextEstelar>
        <TextEstelar
           style = {{color: "white", fontSize: RF(10)}}
        >
          level {level+1}
        </TextEstelar>
          
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  ProfileRanking: {
    width: 150,
    height: 40,
    backgroundColor: "#2F376B",
    borderRadius: 100,
    flexDirection: "row",

  },
 
  viewsStar: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    flexDirection: "row",
    borderRightWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  }, 
  viewsProfile: {
    width: "70%",
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