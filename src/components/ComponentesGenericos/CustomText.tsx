import React from 'react';
import { Text, TextStyle } from 'react-native';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

type TextEstelarProps = {
  children: React.ReactNode; 
  style?: TextStyle | TextStyle[];
 
};


const TextEstelar = ({ children, style} : TextEstelarProps) => {
  return (

   
      // Lógica para quando fontDecider é uma string não vazia
      <Text style={[{ fontFamily: 'Poppins_400Regular'}, style]}>
        {children}
      </Text>
  
     
    
  );
};

export default TextEstelar;