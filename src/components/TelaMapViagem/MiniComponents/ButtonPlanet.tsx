import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { completeFase } from "../../../svgs/completeFase";
import TextEstelar from "../../ComponentesGenericos/CustomText";
import { RFValue as RF } from "react-native-responsive-fontsize";
type buttonProps = {
    navigation: any,
    style?: any,
    current?: boolean,
    numberFase?: number,
    disabled?: boolean,
    planet: string
}

export const ButtonPlanet: React.FC<buttonProps> = ({navigation, style, current, numberFase, disabled}) =>{
    return (
    <>
        {disabled ? 
        
        <TouchableOpacity disabled = {disabled} style = {[styles.fase, style]}>
            {current ?
                (
                    <View style = {styles.completedFase}>
                        <SvgXml
                            xml = {completeFase}
                            style = {styles.completeSvg}
                        />
                    <View style = {styles.button}>
                        <View style = {styles.insideButton}>
                            <TextEstelar style= {styles.textFase}>
                                {numberFase}
                            </TextEstelar>
                        </View>
                    </View>

                </View>
                )
                :
                (
                    <View style = {styles.button}>
                        <View style = {styles.insideButton}>
                            <TextEstelar style= {styles.textFase}>
                                {numberFase}
                            </TextEstelar>
                        </View>
                    </View>
                )
            }
        </TouchableOpacity>
        
        
        
        :
        <TouchableOpacity  style = {[styles.fase, style]}>
        {current ?
            (
                <View style = {styles.completedFase}>
                    <SvgXml
                        xml = {completeFase}
                        style = {styles.completeSvg}
                    />
                <View style = {styles.button}>
                    <View style = {styles.insideButton}>
                        <TextEstelar style= {styles.textFase}>
                            {numberFase}
                        </TextEstelar>
                    </View>
                </View>

            </View>
            )
            :
            (
                <View style = {styles.button}>
                    <View style = {styles.insideButton}>
                        <TextEstelar style= {styles.textFase}>
                            {numberFase}
                        </TextEstelar>
                    </View>
                </View>
            )
        }
    </TouchableOpacity>
        
        
        
        
        }


        
    </>
    
    )

}
const styles = StyleSheet.create({
    fase:{
        width: 100,
        height: 200,
        alignItems:"center",
        

    },
    completedFase:{
        alignItems: "center",
        justifyContent:"center",
    },
    button:{
        backgroundColor: "#33324B",
        height: 80,
        width: 80,
        borderRadius: 100,
        alignItems:"center",
        justifyContent:"center",
        padding: 10
    },
    insideButton:{
        backgroundColor: "#171636",
        borderRadius: 100,
        height: 65,
        width: 65,
        borderWidth: 4,
        borderColor: "white",
        alignItems: "center",
        justifyContent:"center"
        
    },
    textFase: {
        color: "white",
        fontSize: RF(25),
        
    },
    completeSvg:{
        position: "absolute",
        top: -40,
        right: 8,
        zIndex: 2
        
    }

})