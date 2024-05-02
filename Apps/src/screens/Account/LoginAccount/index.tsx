import React, { useState } from "react";
import { Container, Text, TextInput, Button, TextButtton, ButtonSmall, Icon } from "./styles";
import { Header } from "../../../components/Header";
import { ImageBackground } from "react-native";
import theme from "../../../theme";
import auth from "@react-native-firebase/auth"
import { useNavigation } from "@react-navigation/native";

export function LoginAccount() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  function signIn(){
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => console.log('Usuario logado!'))
    .catch(error => console.log(error));
  }

  function createAccount(){
    navigation.navigate('CreateAccount');

  }


  return (
    <ImageBackground source={require('../../../assets/img/back14.png')} style={{ flex: 1 }}>
      <Container>
        <Header title='Login' />

        <Text>Email:</Text>
        <TextInput
          keyboardAppearance="default"
          value={email}
          onChangeText={setEmail}
        >
        </TextInput>

        <Text>Senha:</Text>
        <TextInput
          secureTextEntry={true}
          keyboardAppearance="default"
          value={password}
          onChangeText={setPassword}
        >
        </TextInput>

        <ButtonSmall>
          <TextButtton style={{fontSize: theme.FONT_SIZE.SM}}>Esqueceu a senha?</TextButtton>
        </ButtonSmall>

        <Button onPress={signIn}>
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
        <Button onPress={createAccount}> 
          <TextButtton>Criar Conta</TextButtton>
        </Button>
      </Container>
    </ImageBackground>
  )
}