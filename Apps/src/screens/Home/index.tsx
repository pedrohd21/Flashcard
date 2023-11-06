import React from "react";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { useNavigation } from '@react-navigation/native';
import { ListFlashcard } from "../../components/Card/ListFlashcard";
import theme from "../../theme";




export function Home() {
  const navigation = useNavigation();

  function handlePress(){
    navigation.navigate('ListFlashCard');
  };
  function handlePres2(){
    navigation.navigate('EditFlashCard');
  };
  return (
    <Container>
      <Header title='FlashCard' iconNameRight="bell-slash" showButtonRight={true} iconColorRight={theme.COLORS.RED}/>
      
      <ListFlashcard
      
      />
    </Container>
  )
}