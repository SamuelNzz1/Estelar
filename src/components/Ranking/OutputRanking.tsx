import React from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { ProfileRanking } from "./ProfileRanking"
import useUserRanking from "./DadosUsu"
type OutputProps = {
    navigation : any
}

export const OutputRanking : React.FC <OutputProps> = ({navigation}) => {
  const ranking = useUserRanking();

    return (
    <View
      style = {styles.rankingStyles}
    >
      <ScrollView
        showsVerticalScrollIndicator = {false} 
        contentContainerStyle = {{width: "100%", paddingBottom: 20, paddingTop: 20, gap: 15, borderTopLeftRadius: 20, borderTopRightRadius: 20, alignItems: "center"}}
      >
          { ranking.map((user, index) => {
            return (
                <ProfileRanking
                key={user.id}
                name={user.name}
                level={user.nivelJ}
                stars={user.stars}
                profileImage={user.profileImage}
                position={index}

                />
            )
          })

          }
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  rankingStyles:  {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#100F43",
    flex: 1,
    
  }
})  