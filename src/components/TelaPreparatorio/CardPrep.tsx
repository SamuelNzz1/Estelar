import React from "react";
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import TextEstelar from "../ComponentesGenericos/CustomText";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { useState } from "react";
import { selectedOption } from "../../svgs/rectSelected";
import { SvgXml } from "react-native-svg";
import { RadioButton } from "./RadioButton";
import { arrowBackPrepNivel } from "../../svgs/arrowBackPrep";

type propCard = {
        navigation: any,
}


export const CardPrep: React.FC<propCard> = ({navigation}) => {
    const [oqueSelected, setOqueSelected] = useState<boolean>(false);
    const [provasSelected, setProvasSelected] = useState<boolean>(true);
    
    const [isSelected2023, setIsSelected2023] = useState<boolean>(false);
    
    const [isSelectedNivel1, setIsSelectedNivel1] = useState<boolean>(false);
    const [isSelectedNivel2, setIsSelectedNivel2] = useState<boolean>(false);

    const [showMessageError, setShowMessageError] = useState<boolean>(false);
    const [showNivel, setShowNivel] = useState<boolean>(false);

    const infoOba = () => {
        setOqueSelected(true)
        setProvasSelected(false)
    }
    const infoProvas = () =>{
        setProvasSelected(true)
        setOqueSelected(false)
    }
    const selectOptionProva2023 = () =>{
        setIsSelected2023(!isSelected2023);
        
    }
    const selectOptionNivel1 = () =>{
        setIsSelectedNivel1(!isSelectedNivel1);
        setIsSelectedNivel2(false);
    }
    const selectOptionNivel2 = () =>{
        setIsSelectedNivel2(!isSelectedNivel2);
        setIsSelectedNivel1(false);
    }
    const optionsNivel = () =>{
        if(isSelected2023){
        setShowNivel(true);
        setProvasSelected(false);
        setShowMessageError(false);

        }
        else{
            setShowMessageError(true)
        }
    }
    const backProvas = () =>{
        setShowNivel(false);
        setProvasSelected(true);

    }
    const goSimulado = () =>{
        

    }

    return (
        <View style = {styles.prepObaCard}>
            <View style = {styles.textsPrep}>
                <TextEstelar style = {styles.textPrincipalPrep}>
                    Preparatório para OBA
                </TextEstelar>
                <TextEstelar style = {styles.textSecPrep}>
                    (Olimpiada Brasileira de astronomia)
                </TextEstelar>
            </View>
            <View style = {styles.subCardPrep}>
                <View style = {styles.optionsKnowAndTests}>
                    {showNivel 
                    ?
                    <View style = {styles.viewSelected}>
                            <TouchableOpacity onPress={backProvas} style = {styles.backProvas} >
                                <SvgXml   xml={arrowBackPrepNivel}/>
                            </TouchableOpacity>
                            { isSelected2023 &&
                            <TextEstelar style = {styles.textYearSelected}>
                                2023
                            </TextEstelar>
                            
                            }
                       
                        <SvgXml xml = {selectedOption}/>
                     </View>
                    :
                    (
                    <>
                    <TouchableOpacity onPress={infoOba}>
                        {oqueSelected ? 
                            <View style = {styles.viewSelected}>
                                <TextEstelar style = {styles.oqueSelected} >
                                    O que é?
                                </TextEstelar>
                                <SvgXml xml = {selectedOption}/>
                            </View>
                            : 
                            <TextEstelar style = {styles.oque} >
                                O que é?
                            </TextEstelar>

                        }
                    
                    </TouchableOpacity>
                    <TouchableOpacity onPress={infoProvas}>
                        {provasSelected ? 
                            <View style = {styles.viewSelected}>
                            <TextEstelar style = {styles.provasSelected} >
                                Provas
                            </TextEstelar>
                            <SvgXml xml = {selectedOption}/>
                            </View>
                         : 
                         <TextEstelar style = {styles.provas} >
                         Provas
                        </TextEstelar>
                        }
                       
                    </TouchableOpacity>
                    </>
                    )
                    }
                </View>
                <View style = {styles.cardPrepObaOptions}>
                    {provasSelected ?
                
                    <View style = {styles.yearOptions}>
                        <View style = {styles.groupRadio}>
                            <TouchableOpacity onPress={selectOptionProva2023}>
                                <RadioButton 
                                    text = "2023"
                                    isSelected = {isSelected2023}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={optionsNivel} style = {styles.button}>
                            <TextEstelar style={styles.textButton}>
                                Selecionar
                            </TextEstelar>
                        </TouchableOpacity>
                    </View>
                    

                    : showNivel ?
                    <View style = {styles.nivelOptions}>
                        <View style = {styles.groupRadio}>
                            <TouchableOpacity onPress={selectOptionNivel1}>
                                <RadioButton 
                                    text = "Nível 1"
                                    isSelected = {isSelectedNivel1}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={selectOptionNivel2}>
                                <RadioButton 
                                    text = "Nivel 2"
                                    isSelected = {isSelectedNivel2}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={goSimulado} style = {styles.buttonNivel}>
                            <TextEstelar style={styles.textButton}>
                                Selecionar
                            </TextEstelar>
                        </TouchableOpacity>

                    </View>
                    :
                    <View style = {styles.infoOba}>
                        


                    </View>
                    }

                </View>
                {showMessageError && 
                    <TextEstelar style={styles.errorMessage}>
                        Selecione uma alternativa* 
                    </TextEstelar>
                }
            </View>
        </View>
    
    )

}
const styles = StyleSheet.create({
    prepObaCard: {
        backgroundColor: "#171636",
        height: "60%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 61,
        borderTopRightRadius: 61,

    },
    textsPrep:{
        marginTop: "10%",
        alignItems: "center",
        gap: 20

    },
    textPrincipalPrep:{
        color: "white",
        fontSize: RF(22)
    },
    textSecPrep:{
        color: "white",
        fontSize: RF(14)

    },
    subCardPrep:{
        backgroundColor: "#252450",
        height: "68%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 61,
        borderTopRightRadius: 61,
        alignItems:"center"

    },
    optionsKnowAndTests:{
        flexDirection: "row",
        justifyContent:"center",
        gap: 50,
        marginTop: "8%"
    },
    viewSelected:{
        alignItems:"center",
        width:"100%"

    },
    provas:{
        color: "#CECECE",
        fontSize: RF(14)
    },
    oque:{
        color: "#CECECE",
        fontSize: RF(14)
    },
    oqueSelected:{
        color: "white",
        fontSize: RF(17)

    },
    provasSelected:{
        color: "white",
        fontSize: RF(17)

    },
    cardPrepObaOptions:{
        backgroundColor: "#4D468C",
        height: "60%",
        width: "80%",
        borderRadius: 15,
        position: "absolute",
        marginTop: "18%"

    },
    yearOptions:{
        width: "100%",
        height: "70%",
        
        
    },
    groupRadio:{
        marginLeft: "10%",
        marginTop: "5%",
        gap: 15
    },
    button: {
        backgroundColor: "#FF7747",
        height: 50,
        width: "80%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: -47,
    },
    buttonNivel: {
        backgroundColor: "#FF7747",
        height: 50,
        width: "80%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: -100,
        alignSelf: "center"
    },
    textButton:{
        color: "white"
    },
    nivelOptions:{

    },
    textYearSelected:{
        color: "white",
        fontSize: RF(17)
        

    },
    errorMessage:{
        color: "#FF3F3F",
        alignSelf: "center",
        fontSize: RF(15),
        position: "absolute",
        bottom: 0
    },
    backProvas:{
        position: "absolute",
        left: 50,
        top: -10

    },
    
    infoOba:{}

})