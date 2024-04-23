import React, { useState } from "react";
import { Container, Text, TextInput, Button, TextButtton, ButtonSmall, Icon } from "./styles";
import { Header } from "../../../components/Header";
import { ImageBackground } from "react-native";
import theme from "../../../theme";

export function LoginAccount() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <ImageBackground source={require('../../../assets/img/back14.png')} style={{ flex: 1 }}>
      <Container>
        <Header title='Login' />

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

        <ButtonSmall>
          <TextButtton style={{fontSize: theme.FONT_SIZE.SM}}>Esqueceu a senha?</TextButtton>
        </ButtonSmall>

        <Button>
          <TextButtton>Entrar</TextButtton>
        </Button>

        <Text style={{color: theme.COLORS.BLUE}}>Ou escolha a opção:</Text>

        <Button style={{width: '80%'}}>
        <Icon
            name="google"
          />
        <TextButtton>  Continuar com Google</TextButtton>
          
        </Button>

        <Text style={{color: theme.COLORS.BLUE}}>Não tem conta? </Text>
        <Button>
          <TextButtton>Criar Conta</TextButtton>
        </Button>
      </Container>
    </ImageBackground>
  )
}