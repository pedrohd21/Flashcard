import React from "react";
import { MainTitle, Container } from "./styles";

type Props = {
  mainTitle: any;
}

export function Title({ mainTitle }: Props) {
  return (
    <Container>
      <MainTitle>
        {mainTitle}
      </MainTitle>
    </Container>

  )
}