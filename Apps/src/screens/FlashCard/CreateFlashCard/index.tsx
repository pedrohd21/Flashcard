import React from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Title } from "../../../components/Title";
import { Card } from "../../../components/Card";
import { ButtonIcon } from "../../../components/ButtonIcon";


export function CreateFlashCard() {
  return (
    <Container>
      <Header
        title='Create Flashcard'
        showIconLeft={true}
        showIconRight={true}
        iconNameLeft='arrow-left'
        iconNameRight='check'
      />

      <Title
        mainTitle="Title"
        subTitle="teste"
      />

      <Card/>
      
      <ButtonIcon iconName="plus"/>
    </Container>
  )
}