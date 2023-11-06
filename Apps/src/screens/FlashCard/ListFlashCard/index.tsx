import React from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ListFlashcard } from "../../../components/Card/ListFlashcard";


export function ListFlashCard() {
  return (
    <Container>
      <Header
        title='List FlashCard'
        showButtonRight={false}
        showBackButton={true}
        iconNameRight='check'
      />
      <ListFlashcard

      />
    </Container>
  )
}