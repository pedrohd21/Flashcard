import React from "react";
import { Container, Text, TextBack, TextFront, BorderRadius } from "./styles";
import { ButtonTitle } from "../../ButtonTitle";

type Props = {
  textFront: string;
  onChangeTextFront: (value: string) => void;

  textBack: string;
  onChangeTextBack: (value: string) => void;


  onPressButton?: () => void;
}

export function CreateFlashcardCard({ textFront, onChangeTextFront, textBack, onChangeTextBack, onPressButton }: Props) {
  return (
    <Container>
      <Text>
        Front
      </Text>
      <TextFront
        placeholder="Term (Front side)"
        keyboardAppearance="default"
        onChangeText={onChangeTextFront}
      >
        {textFront}
      </TextFront>
      <BorderRadius />

      <Text>
        Back
      </Text>
      <TextBack
        placeholder="Definition (back side)"
        keyboardAppearance="default"
        onChangeText={onChangeTextBack}
      >
        {textBack}
      </TextBack >
      <BorderRadius />
      <ButtonTitle
        onPressOut={onPressButton}
        iconName='trash' />
    </Container>
  );
}