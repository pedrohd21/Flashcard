import React from "react";
import { Container, Text, TextBack, TextFront, BorderRadius } from "./styles";
import { ButtonTitle } from "../../ButtonTitle";

type Props = {
  textFront: string;
  textBack: string;
  onPressButton?: () => void;
}

export function CreatFlashcardCard({ textFront, textBack, onPressButton }: Props) {
  return (
    <Container>
      <Text>
        Front
      </Text>
      <TextFront placeholder="Term (Front side)" keyboardAppearance="default">
        {textFront}
      </TextFront>
      <BorderRadius />

      <Text>
        Back
      </Text>
      <TextBack placeholder="Definition (back side)">
        {textBack}
      </TextBack>
      <BorderRadius />
      <ButtonTitle
        onPressOut={onPressButton}
        iconName='trash' />
    </Container>
  );
}