import React, { useEffect, useState } from "react";
import TextEstelar from "../../components/ComponentesGenericos/CustomText";
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PencilEdit } from "../../svgs/editPerfilSvg";
import { dadosPerfil } from "../../dados/PerfilProps";
import perfilImage from "../../images/Perfil.png";


import CardStatus from "../../components/PerfilTela/CardStatus";
export default function Perfil({navigation} : any ){
    const [userName, setUserName] = useState<string | null>(null);
    const [imagePerfil, setImagePerfil] = useState <any> (perfilImage);

    useEffect(() => {
       const auth = getAuth();
 
       const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
             // Se o usuário estiver autenticado, atualize o estado com o nome do usuário
             setUserName(user.displayName);
          } else {
             // Se o usuário não estiver autenticado, defina userName como null ou qualquer valor padrão desejado
             setUserName(null);
          }
       });
 
       // Certifique-se de descadastrar o ouvinte ao desmontar o componente
       return () => unsubscribe();
    }, []);  // Passar um array vazio para garantir que o efeito seja executado apenas uma vez
 


    return(
        <View style={styles.backPer }>
            <View style={styles.cont } >
               <View style ={ styles.infoPerfi }>
                    <View style = {styles.perfilImage}>
                        <Image style ={styles.imagePerfil} source={imagePerfil} />
                    </View>
                    {userName ?
                        <TextEstelar style={styles.bemvindo}>{userName}</TextEstelar>
                        :
                        <TextEstelar style={styles.bemvindo}>Anonymous</TextEstelar>
            
                    }   
                    <TouchableOpacity onPress={()=>navigation.navigate("EditPerfil", {imagePerfil})} style = {styles.edit}>
                        <View>
                        <TextEstelar style = {styles.editPerfi}>
                            Editar perfil
                        </TextEstelar>
                        <View style={styles.underline} />
                        </View>
                        <SvgXml xml={PencilEdit}/>
                        
                    </TouchableOpacity>
                  
               
               </View>
            </View>

           
                <View style = {styles.cardNiveis}>
                {dadosPerfil.map((carac, index) => (
                    <CardStatus key={index} {...carac} />
                 ))}  
                 </View>  


          
           

        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: RF(15)
    },
    cardNiveis:{
        position: "absolute",
        alignSelf: "center",
        bottom: 30,
        width: "100%",
        gap: 30

    },
    edit:{
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        gap: 7
    },
    editPerfi:{
        color: "#C8C8C8",
        
         
    },underline: {
        width: 80,
        height: 1,
        backgroundColor: '#C8C8C8', // Cor da linha
        marginTop: -3, // Espaço entre o texto e a linha
      },

    perfilImage: {
        borderRadius: 125
    },
    infoPerfi:{
        alignItems: "center",
        paddingTop: "3%",
        gap: 13,
        
    },
    imagePerfil:{
        width: 100,
        height: 100,
        borderRadius: 125

    },
    
    cont:{
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: "#171636", 
        height: "90%",
        width: "100%",
        position: "absolute",
        bottom: -10
    }, 
    backPer:{
        flex: 1,
        backgroundColor: "#14132E"
    },
    bemvindo:{
        color:"white",
        fontSize: RF(20)
     }

})