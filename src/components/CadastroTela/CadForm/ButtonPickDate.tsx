import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import TextEstelar from "../../ComponentesGenericos/CustomText";

type ButtonPick = {
    onPress: () => void;
    date: string;
}
export default function ButtonPickDate({onPress, date} : ButtonPick) {
    return (
        <>
            <TouchableOpacity onPress={onPress} style = {styles.datePick}>
                <TextEstelar style = {styles.textPickDate} > 
                   {date}
                </TextEstelar>
            </TouchableOpacity>
        </>
    )

}

const styles = StyleSheet.create({
    datePick:{
        backgroundColor: "#25356C",
        padding: 15,
        borderRadius: 10,
        alignSelf:"flex-start",
        marginLeft: "7%"

    },
    textPickDate:{
        color: "white"
    }

})
