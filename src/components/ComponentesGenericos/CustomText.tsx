import React from 'react';
import { Text, TextStyle } from 'react-native';


type TextEstelarProps = {
  children?: React.ReactNode; 
  style?: TextStyle | TextStyle[];
 
};


const TextEstelar = ({ children, style} : TextEstelarProps) => {
  return (

      <Text style={[{ fontFamily: 'Poppins_400Regular'}, style]}>
        {children}
      </Text>
  
     
    
  );
};

export default TextEstelar;