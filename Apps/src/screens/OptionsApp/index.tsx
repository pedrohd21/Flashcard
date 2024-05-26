import React from "react";
import { Container, Button, Text } from "./styles";
import { Header } from "../../components/Header";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import auth from "@react-native-firebase/auth"

export function Options() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Home'); 
  }

  function signOut() {
    auth().signOut();
  }
  return (
    <Container>
      <Header title='Options' showBackButton onPressButtonLeft={handleGoBack}/>
      <Button>
        <Text>
          Notificações
        </Text>
      </Button>

      <Button>
        <Text>
          Tema
        </Text>
      </Button>

      <Button>
        <Text>
          Feedback e Ajuda
        </Text>
      </Button>

      <Button>
        <Text>
          Sobre
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