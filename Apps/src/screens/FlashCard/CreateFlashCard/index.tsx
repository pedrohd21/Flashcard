import React, { useState } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { Card } from "../../../components/Card";
import { ButtonIcon } from "../../../components/ButtonIcon";
import { FlatList } from "react-native";


export function CreateFlashCard() {

  const data = [
    { key: '1', textFront: '', textBack: '' },

  ]

  return (
    <Container>
      <Header
        title='Create Flashcard'
        showButtonRight={true}
        showBackButton={true}
        iconNameRight='check'
      />

      <Title
        mainTitle="Title"
        subTitle="teste"
      />


      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            textFront={item.textFront}
            textBack={item.textBack}
          />
        )}
      />
      
      
      <ButtonIcon iconName="plus" />
    </Container>
  )
}