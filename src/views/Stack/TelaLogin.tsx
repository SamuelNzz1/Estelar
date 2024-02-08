import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import CardForm from "../../components/TelaLogin/CardForm";


type LoginProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
}


export default function TelaLogin({navigation}: LoginProps) {
    const [backgroundLoaded, setBackgroundLoaded] = useState(false);
    const handleBackgroundLoad = () => {
        setBackgroundLoaded(true);
      };
  return (
    <ImageBackground
      source={require("../../images/loginfundo.png")}
      style={styles.container}
      resizeMode="cover"
      onLoad={handleBackgroundLoad}
    >
      <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView  behavior="padding" enabled>
        
        {backgroundLoaded && <CardForm navigation = {navigation}/> }
          
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"flex-end",
  },
  
});
