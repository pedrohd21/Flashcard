import React, { useState } from "react";
import { Container, Text, TextInput, Button, TextButtton, ButtonSmall, Icon } from "./styles";
import { Header } from "../../../components/Header";
import { Alert } from "react-native";
import theme from "../../../theme";
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';

export function LoginAccount() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  function signUp() {
    if (email.trim().length === 0 && password.trim().length === 0) {
      Alert.alert('Email', 'Por favor, insira seu e-mail e senha para criar a conta.');
      return
    }
    if (password.trim().length === 0) {
      Alert.alert('Senha', 'Não é possível criar conta sem uma senha.');
      return
    }
    if (password !== passwordRepeat) {
      Alert.alert('Senha', 'As senhas digitadas não são iguais.');
      return
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const currentUser = auth().currentUser;
        const newUser = {
          name: email, // Use o UID do usuário como nome, se disponível, caso contrário, use o email
          email: email,
          //como faco para adicionar uma colecao com nome de Flashcards?
        };
        firestore().collection('Users').doc(currentUser?.uid).set(newUser);
      })


      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Erro', 'O endereço de e-mail já está em uso.');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Erro', 'O endereço de e-mail é inválido.');
        }
        if (error.code === 'auth/weak-password') {
          Alert.alert('Erro', 'A senha é muito fraca.');
        } else {
          Alert.alert('Erro', 'Ocorreu um erro ao criar a conta.');
        }
      });
  }

  function signIn() {
    if (email.trim().length === 0 && password.trim().length === 0) {
      Alert.alert('Email', 'Por favor, insira seu e-mail e senha para fazer login.');
      return
    }
    if (email.trim().length === 0) {
      Alert.alert('Email', 'Não é possível entrar sem um email.');
      return
    }
    if (password.trim().length === 0) {
      Alert.alert('Senha', 'Não é possível entrar sem uma senha.');
      return
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // console.log('Usuário logado com sucesso!');
      })
      .catch(error => {
        console.log("Código de erro:", error.code); // Adicione essa linha para imprimir o código de erro

        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Email', 'O endereço de e-mail já está em uso.');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Email', 'O endereço de e-mail é inválido.');
        }
        if (error.code === 'auth/invalid-credential') {
          Alert.alert('Senha', 'Senha incorreta.');
        }
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Erro', 'Usuário não encontrado.');
        }
      });
  }

  function toggleMode() {
    // Alterna entre os modos de criar conta e fazer login
    setIsCreatingAccount(prevState => !prevState);
  }

  return (
    <Container>
      <Header title={isCreatingAccount ? 'Criar Conta' : 'Login'} />

      <Text>Email:</Text>
      <TextInput
        keyboardAppearance="default"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text>Senha:</Text>
      <TextInput
        secureTextEntry={!mostrarSenha}
        keyboardAppearance="default"
        value={password}
        onChangeText={setPassword}
      />

      {isCreatingAccount && (
        <>
          <Text>Repetir senha:</Text>
          <TextInput
            secureTextEntry={!mostrarSenha}
            keyboardAppearance="default"
            value={passwordRepeat}
            onChangeText={setPasswordRepeat}
          />
        </>
      )}

      <ButtonSmall onPress={() => setMostrarSenha(prevState => !prevState)}>
        <TextButtton style={{ fontSize: theme.FONT_SIZE.SM }}>Mostrar Senha</TextButtton>
      </ButtonSmall>

      {isCreatingAccount && (
        <Button onPress={signUp}>
          <TextButtton>Criar Conta</TextButtton>
        </Button>
      )}

      {!isCreatingAccount && (
        <Button onPress={signIn}>
          <TextButtton>Entrar</TextButtton>
        </Button>
      )}

      {/* <Text style={{ color: theme.COLORS.BLUE }}>Ou escolha a opção:</Text>

        <Button style={{ width: '80%' }}>
          <Icon
            name="google"
          />
          <TextButtton>  Continuar com Google</TextButtton>
        </Button> */}

      <Text style={{ color: theme.COLORS.BLUE }}>
        {isCreatingAccount ? 'Já tem uma conta? ' : 'Não tem conta? '}
        <ButtonSmall onPress={toggleMode}>
          <TextButtton>
            {isCreatingAccount ? 'Entrar' : 'Criar Conta'}
          </TextButtton>
        </ButtonSmall>
      </Text>
    </Container>
  );
}
