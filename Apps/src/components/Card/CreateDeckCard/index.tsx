import React from "react";
import { Container, Text, TextInput, BorderRadius } from "./styles";
import { ButtonTitle } from "../../Button/ButtonTitle";

type Props = {
  titleDeck: string;
  onChangeDeck: (value: string) => void;

  onPressButton?: () => void;
}

export function CreateDeckCard({ titleDeck, onChangeDeck, onPressButton }: Props) {
  return (
    <Container>
      <Text>
        Titulo
      </Text>
      <TextInput
        placeholder="Titulo Deck"
        keyboardAppearance="default"
        onChangeText={onChangeDeck}
      >
        {titleDeck}
      </TextInput>

      <BorderRadius/>
      <Text>
        Front
      </Text>
      <TextInput
        placeholder="Descrição Deck"
        keyboardAppearance="default"
        onChangeText={onChangeDeck}
      >
        {titleDeck}
      </TextInput>

      <ButtonTitle
        descriptionText="Criar Deck"
        onPressOut={onPressButton}
        iconName='trash' />
    </Container>
  );
}