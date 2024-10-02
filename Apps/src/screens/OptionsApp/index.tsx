import React from "react";
import { Container, Button, Text } from "./styles";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth"
import { Linking } from 'react-native';


export function Options() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Home'); 
  }

  function signOut() {
    auth().signOut();
  }

  function openLinkFeedback(){
    const url = 'https://forms.gle/vrgE1y9kkM7D83k46';
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  }

  function openLinkHelp(){
    const url = 'https://github.com/pedrohd21/Flashcard-Help';
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  }

  return (
    <Container>
      <Header title='Options' showBackButton onPressButtonLeft={handleGoBack}/>

      <Button onPress={openLinkHelp}>
        <Text>
          Ajuda
        </Text>
      </Button>

      <Button onPress={openLinkFeedback}>
        <Text>
          Feedback
        </Text>
      </Button>

      <Button onPress={signOut}>
        <Text>
          Sair
        </Text>
      </Button>
    </Container>
  )
}