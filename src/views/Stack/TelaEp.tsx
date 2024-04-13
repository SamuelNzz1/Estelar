import React, { useState } from "react";
import Container from "../../components/ComponentesGenericos/Container";
import { TopEp } from "../../components/TelaVirtual/TopEp/TopEp";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { MidleEp } from "../../components/TelaVirtual/MidleEp/MidleEp";
type PropsTelaEP = {
navigation : any;
}

export const TelaEp : React.FC<PropsTelaEP> = ({navigation}) =>{
    const [nameProd, setNameProd] = useState<string>("");

    const onChangeText = (atributo : string, type: string) =>{
        setNameProd(atributo);
    
    }

    return(
        <SafeAreaView
            style = {{backgroundColor: "#171636", flex: 1,}}
        >
            <TopEp                 
                navigation={navigation}
                nameProd={nameProd}
                onChangeText={onChangeText}
            />

            <ScrollView
                showsVerticalScrollIndicator = {false}
                contentContainerStyle = {{}}
            >
                
                <MidleEp
                    navigation={navigation}
                    nameProd={nameProd}
                />


                
            </ScrollView>
           

        </SafeAreaView>

    )

}