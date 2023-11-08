import React, { useState } from "react";
import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { CreateFlashcard } from "../../../components/Card/CreatFlashcardCard";
import { FlatList } from "react-native";
import { ButtonIconBig } from "../../../components/ButtonIconBig";


export function EditFlashCard() {

  const data = [
    { key: '1', textFront: '', textBack: '' },

  ]

  return (
    <Container>
      <Header
        title='Edit Flashcard'
        showButtonRight={true}
        showBackButton={true}
        iconNameRight='check'
      />

      <Title
        mainTitle="Title"
        subTitle="Title FlashCard"
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
  )
}