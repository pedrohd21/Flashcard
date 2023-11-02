import React from "react";
import { Container, Text, TextBack, TextFront, BorderRadius } from "./styles";
import { ButtonTitle } from "../ButtonTitle";

export function Card() {
  return (
    <Container>
      <Text>
        Front
      </Text>
      <TextFront>
        Front
      </TextFront>
      <BorderRadius/>

      <Text>
        Back
      </Text>
      <TextBack>
        back
      </TextBack>
      <BorderRadius/>
      <ButtonTitle iconName='trash'/>
    </Container>
  );
}