import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import TextEstelar from "../../ComponentesGenericos/CustomText";
import CheckBox from "react-native-check-box";
import { RFValue as RF } from "react-native-responsive-fontsize";
export function TermosDeUso() {
    const [isChecked, setIsChecked] = useState(false);
    function handleChecked(){
        setIsChecked(!isChecked);

    }

  return (
    <View style={styles.termos}>
      <CheckBox checkBoxColor="#968DB4" isChecked = {isChecked} onClick={handleChecked} />
      <TextEstelar style={styles.concordo}>Concordo com os </TextEstelar>
      <TouchableOpacity>
        <TextEstelar style={styles.textTermos}>termos de uso</TextEstelar>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  termos: {
    flexDirection: "row",
    gap: 2,
    alignItems:"center",
    marginTop: 15,
    marginBottom: 20
    
  },
  concordo: {
    color: "white",
    fontSize: RF(15)
  },
  textTermos:{
    fontSize: RF(15),
    color: "#FFECA4"
  }
});
