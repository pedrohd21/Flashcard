import React, { useEffect } from "react";
import { Container, Text } from "./styles";
import { Button } from 'react-native';
import Tts from 'react-native-tts';



export function Home() {
  useEffect(() => {
    // Configurar as configurações de fala
    Tts.setDefaultLanguage('en-US');
    Tts.setDefaultRate(0.4); // Velocidade da fala (0.5 é metade da velocidade padrão)
  }, []);


  const falarPalavra = () => {
    Tts.speak('texto');
  };
  
  return (
    <Container>
      <Text>
        oi
      </Text>
      <Button title="Falar Palavra" onPress={falarPalavra} />
    </Container>
  )
}