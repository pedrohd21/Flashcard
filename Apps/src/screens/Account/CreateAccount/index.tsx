import React, { useState } from "react";
import { Container, Text, TextInput, Button, TextButtton, ContainerForm } from "./styles";
import { Header } from "../../../components/Header";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ImageBackground } from "react-native";
import theme from "../../../theme";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";

export function CreateAccount() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const navigation = useNavigation();

  function signUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('user: ', userCredential);
      }).catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('email ja existe');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('email invalido');
        }
      })
      navigation.navigate('LoginAccount');
  }

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <ImageBackground source={require('../../../assets/img/back14.png')} style={{ flex: 1, }}>
      <Container>
        <Header title='Criar Conta' showBackButton onPressButtonLeft={handleGoBack} />
        <ContainerForm>
          <Text>Nome Usuario:</Text>
          <TextInput
            keyboardAppearance="default"
            onChangeText={() => { }}
          >
          </TextInput>

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

          <Text>Repetir senha:</Text>
          <TextInput
            secureTextEntry={true}
            keyboardAppearance="default"
            onChangeText={() => { }}
          >
          </TextInput>

          <Button onPress={signUp}>
            <TextButtton>Criar Conta</TextButtton>
          </Button>
        </ContainerForm>
      </Container>
    </ImageBackground>
  )
}