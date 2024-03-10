import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import TextEstelar from "../../ComponentesGenericos/CustomText";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { correct, incorrect, correct2, incorrect2 } from "../../../svgs/correct";
import { SvgXml } from "react-native-svg";
type Alternativa = {
    id: number;
    alter1?: string;
    alter2?: string;
    alter3?: string;
    alter4?: string;
  };
type buttonProps = {
    alternativa: Alternativa,
    selecionar: (id: number) => void,
    correta?: boolean | null,
    respondida?: boolean | null,
    selecionada: string,
    gabas: string
   

}
export const ButtonResp: React.FC<buttonProps> = ({alternativa,selecionar,correta, respondida, selecionada, gabas}) =>{
    const selecionarr = () =>{
        selecionar(alternativa.id);

    }
    return(
    <View 
        style = {styles.button}
    >
        { (respondida) && (selecionada === alternativa.id.toString() ) && (correta === true) ? 
        <>
        <TouchableOpacity
        disabled={true}
        style={[styles.buttonPrincip, {backgroundColor:"#3FB62B"}]}
        onPress={ selecionarr }
        >
            <TextEstelar
                style={[styles.textAlter, {color: "white"}]}
            >
                {alternativa.alter1 || alternativa.alter2 || alternativa.alter3 || alternativa.alter4}
            </TextEstelar>
            <SvgXml style = {{position: "absolute", right: 10, alignSelf:"center"}} xml={correct}/>
            
        </TouchableOpacity>
        <View 
        style={[styles.buttonSombra, {backgroundColor:"#1C6010"}]}
        >
    
        </View>
        </>
        : (respondida) && (selecionada === alternativa.id.toString() ) && (correta !== true) ? 
        <>
        <TouchableOpacity
      disabled={true}
      style={[styles.buttonPrincip, {backgroundColor:"#B62B3F"}]}
      onPress={ selecionarr }
      >
          <TextEstelar
              style={[styles.textAlter, {color: "white"}]}
          >
              {alternativa.alter1 || alternativa.alter2 || alternativa.alter3 || alternativa.alter4}
          </TextEstelar>
          <SvgXml style = {{position: "absolute", right: 10, alignSelf:"center"}} xml={incorrect2}/>
          
      </TouchableOpacity>
      <View 
      style={[styles.buttonSombra, {backgroundColor:"#60101C"}]}
      >
  
      </View>
        </>
        : (respondida) && (selecionada !== alternativa.id.toString() ) && (alternativa.id.toString() === gabas)  ? 
        <>
            <TouchableOpacity
      disabled={true}
      style={[styles.buttonPrincip, {backgroundColor:"#3FB62B"}]}
      onPress={ selecionarr }
      >
          <TextEstelar
              style={styles.textAlter}
          >
              {alternativa.alter1 || alternativa.alter2 || alternativa.alter3 || alternativa.alter4}
          </TextEstelar>
         
  
      </TouchableOpacity>
      <View 
      style={[styles.buttonSombra, {backgroundColor:"#1C6010"}]}
      >

      </View>
        </>
        : (respondida) && (selecionada !== alternativa.id.toString() ) && (alternativa.id.toString() !== gabas) ? 
        <>
            <TouchableOpacity
      disabled={true}
      style={[styles.buttonPrincip]}
      onPress={ selecionarr }
      >
          <TextEstelar
              style={styles.textAlter}
          >
              {alternativa.alter1 || alternativa.alter2 || alternativa.alter3 || alternativa.alter4}
          </TextEstelar>
          
  
      </TouchableOpacity>
      <View 
      style = {[styles.buttonSombra]}
      >

      </View>
        </>
        :
        <>
             <TouchableOpacity
      
                style={[styles.buttonPrincip]}
                onPress={ selecionarr }
                >
                    <TextEstelar
                        style={styles.textAlter}
                    >
                        {alternativa.alter1 || alternativa.alter2 || alternativa.alter3 || alternativa.alter4}
                    </TextEstelar>
            
                </TouchableOpacity>
                <View 
                style = {[styles.buttonSombra]}
                >

                </View>
        </>
    }

        
        
    
    </View>
    
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: "20%",
        

    },
    buttonPrincip: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: 24,
        alignItems:"center",
        justifyContent:"center",
        flexDirection: "row",
        gap: 10,
        padding: 5

    },
    buttonSombra: {
        width: "100%",
        height: "100%",
        backgroundColor: "#7551B4",
        position:"absolute",
        right:-3,
        bottom: -5,
        zIndex: -1,
        borderRadius: 24

    },
    textAlter:{
        color: "#2C2C2C",
        fontSize: RF(15),

    },
    selecionado: {

    },
    correto:{
        backgroundColor:"green"
    }

});