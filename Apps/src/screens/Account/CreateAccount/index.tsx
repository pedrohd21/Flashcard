import React, { useState } from "react";
import { Container, Text, TextInput, Button, TextButtton } from "./styles";
import { Header } from "../../../components/Header";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ImageBackground } from "react-native";
import theme from "../../../theme";



export function CreateAccount() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <ImageBackground source={require('../../../assets/img/back14.png')} style={{ flex: 1 }}>
      <Container>
        <Header title='Criar Conta' />

        <Text>Nome Usuario:</Text>
        <TextInput
          keyboardAppearance="default"
          onChangeText={() => { }}
        >
        </TextInput>

        <Text>Email:</Text>
        <TextInput
          keyboardAppearance="default"
          onChangeText={() => { }}
        >
        </TextInput>

        <Text>Senha:</Text>
        <TextInput
          secureTextEntry={true}
          keyboardAppearance="default"
          onChangeText={() => { }}
        >
        </TextInput>

        <Text>Repetir senha:</Text>
        <TextInput
          secureTextEntry={true}
          keyboardAppearance="default"
          onChangeText={() => { }}
        >
        </TextInput>

        <Button>
          <TextButtton>Criar Conta</TextButtton>
        </Button>
      </Container>
    </ImageBackground>
  )
}