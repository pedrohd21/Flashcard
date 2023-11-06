import React, { useState } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { CreateFlashcard } from "../../../components/Card/CreatFlashcard";
import { FlatList } from "react-native";
import { ButtonIconBig } from "../../../components/ButtonIconBig";

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
        subTitle="Title Flashcard"
      />


      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CreateFlashcard
            textFront={item.textFront}
            textBack={item.textBack}
          />
        )}
      />


      <ButtonIconBig
        iconName="plus" />
    </Container>
  );
}