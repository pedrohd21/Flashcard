import React from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import theme from "../../../theme";



export function ListDeck() {
  const navigation = useNavigation();

  function handlePress(){
    navigation.navigate('CreateDeck');
  };
  return (
    <Container>
      <Header title='Deks List' onPressButtonRight={handlePress} iconColorRight={theme.COLORS.PURPLE} showButtonRight iconNameRight='check'/>
    </Container>
  )
}