import React from "react";
import { Container, Text, TextBack, TextFront, BorderRadius } from "./styles";
import { ButtonTitle } from "../../ButtonTitle";

type Props = {
  textFront: string;
  textBack: string;
}

export function FormCreateFlashcard({textFront, textBack}: Props) {
  return (
    <Container>
      <Text>
        Front
      </Text>
      <TextFront placeholder="Term (Front side)">
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
      <ButtonTitle iconName='trash' />
    </Container>
  );
}