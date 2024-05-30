import React from "react";
import { StyleSheet, View, StyleProp, ViewStyle  } from "react-native";



type Container = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    color: string;
} 

export default function Container({children, style, color} : Container){
   
    return(
    <View style = {[styles.container, {backgroundColor: color } ,style ]}>
        {children}
    </View>
    
    )

}
const styles = StyleSheet.create({ 
    container: {
        flex: 1,

    }

});