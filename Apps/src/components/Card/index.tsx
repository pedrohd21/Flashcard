import React from "react";
import { Container, Text, TextBack, TextFront, BorderRadius } from "./styles";
import { ButtonTitle } from "../ButtonTitle";

type Props = {
  textFront: string;
  textBack: string;
}

export function Card({textFront, textBack}: Props) {
  return (
    <Container>
      <Text>
        Front
      </Text>
      <TextFront>
        {textFront}
      </TextFront>
      <BorderRadius />

      <Text>
        Back
      </Text>
      <TextBack>
        {textBack}
      </TextBack>
      <BorderRadius />
      <ButtonTitle iconName='trash' />
    </Container>
  );
}